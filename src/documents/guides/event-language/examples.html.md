---
order: 50
title: Examples
layout: default
toc: true
---

## Calculating an hourly median of  measurements

We are assuming the input data looks like this:

    {
      "c8y_TemperatureMeasurement": {
        "T": {
          "value": ...,
          "unit": "C"
        }
      },
      "time":"...",
      "source": {
        "id":"..."
      },
      "type": "c8y_TemperatureMeasurement"
    }

To create the median we need the following parts in the module:

 - A context to separate the measurements correctly per device
 - A time window over one hour
 - An output that returns only the last average calculation every hour
 - Everything created as a new measurement

Module:

    create context HourlyAvgMeasurementDeviceContext
      partition measurement.source.value from MeasurementCreated;

    @Name("Creating_hourly_measurement")
    context HourlyAvgMeasurementDeviceContext
    insert into CreateMeasurement
    select
      m.measurement.source as source,
      current_timestamp().toDate() as time,
      "c8y_AverageTemperatureMeasurement" as type,
      {
        "c8y_AverageTemperatureMeasurement.T.value", avg(cast(getNumber(m, "c8y_TemperatureMeasurement.T.value"), double)),
        "c8y_AverageTemperatureMeasurement.T.unit", getString(m, "c8y_TemperatureMeasurement.T.unit")
      } as fragments
    from MeasurementCreated.win:time(1 hours) m
    where getObject(m, "c8y_TemperatureMeasurement") is not null
    output last every 1 hours;

## Create alarm if the operation was not executed

Operations usually run to a fixed sequence when handled by the device.

 - PENDING (after creation)
 - EXECUTING (once device received the operation and starts the handling)
 - SUCCESSFUL or FAILED (depending on the execution result)

An operation that does not reach SUCCESSFUL or FAILED within a certain time usually indicates an issue (like device lost connection or device got stuck while handling).
Even if the operation was not handled successfully the device should update the operation as FAILED.
For this example we will use 10 minutes as a acceptable duration for operation handling.
We will check for the following sequence:

 - OperationCreated
 - OperationUpdated for the same operation within 10 minutes that sets the status to either SUCCESSFUL or FAILED

If the second part does *not* appear we will create a new alarm:

    @Name("handle_not_finished_operation")
    insert into CreateAlarm  
    select
        o.operation.deviceId as source,
        CumulocitySeverities.MAJOR as severity,
        CumulocityAlarmStatuses.ACTIVE as status,
        "c8y_OperationNotFinishedAlarm" as type,
        current_timestamp().toDate() as time,
        replaceAllPlaceholders("The device has not finished the operation #{id} within 10 minutes", o.operation) as text
    from pattern [
        every o = OperationCreated
        	-> (timer:interval(10 minutes)
        	and not OperationUpdated(
        		operation.id.value = o.operation.id.value
        		and (operation.status in (OperationStatus.SUCCESSFUL, OperationStatus.FAILED))
        	))
    ];

## Creating alarms from bit measurements

Devices often keep alarm statuses in registers and  can not interpret the meaning of alarms.
In this example we assume that a device just sends the entire register as a binary value in a measurement. A rule must identify the bits and create the respective alarm.

We create three expressions to resolve alarm text, type and severity for each of the bits.

    create expression String getFaultRegisterAlarmType(position) [
        switch (position) {
            case 0:
              "c8y_HighTemperatureAlarm";
              break;
            case 1:
              "c8y_ProcessingAlarm";
              break;
            case 2:
              "c8y_DoorOpenAlarm";
              break;
            case 3:
              "c8y_SystemFailureAlarm";
              break;
            default:
              "c8y_FaultRegister" + position + "Alarm";
              break;
        };
    ];

    create expression CumulocitySeverities getFaultRegisterAlarmSeverity(position) [
        importClass(com.cumulocity.model.event.CumulocitySeverities);
        switch (position) {
            case 0:
              CumulocitySeverities.MAJOR;
              break;
            case 1:
              CumulocitySeverities.WARNING;
              break;
            case 2:
              CumulocitySeverities.MINOR;
              break;
            case 3:
              CumulocitySeverities.CRITICAL;
              break;
            default:
              CumulocitySeverities.MAJOR;
              break;
        };
    ];

    create expression String getFaultRegisterAlarmText(position)[
        switch(position) {
            case 0:
              "The machine temperature reached a critical status";
              break;
            case 1:
              "There was an error trying to process data";
              break;
            case 2:
              "Door was opened";
              break;
            case 3:
              "There was a critical system failure";
              break;
            default:
              "An undefined alarm was reported on position " || position || " in the binary fault register";
              break;
        };
    ];


To analyze the binary measurement value we will interpret it as a string value and loop through each character.
The getActiveBits() function will do that and return a list of the bit positions at where the measurement had a "1".
It will not return it as a List<Integer> but instead as a List<Map> where the map structure matches the scheme BitPosition so we can handle it as if it is a stream.
This is used as an option to join the stream and trigger an alarm by individual measurement values listed.

    create schema BitPosition(
      position int
    );

    create schema MeasurementWithBinaryFaultRegister(
      measurement Measurement,
      faultRegister String
    );

    create expression Collection getActiveBits(value) [
    	importPackage(java.util);
    	var bitOnNumbers = new ArrayList();
            var size = value.length;
    	for(var no = 0; no < size; no++) {
    	    if(value.charAt(no) == "1") {
    		bitOnNumbers.add(Collections.singletonMap('position', size - no - 1));
                }
    	}
    	bitOnNumbers;
    ];

    @Name("extract_fault_register")
    insert into MeasurementWithBinaryFaultRegister
    select
      m.measurement as measurement,
      getString(m, "c8y_BinaryFaultRegister.errors.value") as faultRegister
    from MeasurementCreated m
    where getObject(m, "c8y_BinaryFaultRegister") is not null;

    @Name("creating_alarm")
    insert into CreateAlarm
    select
    	m.measurement.source as source,
            getFaultRegisterAlarmSeverity(bit.position) as severity,
            CumulocityAlarmStatuses.ACTIVE as status,
    	m.measurement.time as time,
    	getFaultRegisterAlarmType(bit.position) as type,
    	getFaultRegisterAlarmText(bit.position) as text
    from
    	MeasurementWithBinaryFaultRegister m unidirectional,
    	MeasurementWithBinaryFaultRegister[getActiveBits(faultRegister)@type(BitPosition)] as bit;

Creating a measurement like this

    {
    	"c8y_BinaryFaultRegister": {
      	"errors": {
        	"value": 10110
        }
      },
      "time":"...",
      "source": {
      	"id":"..."
      },
      "type": "c8y_BinaryFaultRegister"
    }

will trigger the last statement three times.

 - measurement and bit position 1
 - measurement and bit position 2
 - measurement and bit position 4

and therefore create three alarms.

## Consumption measurements

Assuming we have a sensor which measures the current fill level of something and sends the values in a regular basis to Cumulocity we can easily create additional consumption values.
Calculating the absolute difference between two measurements can be useful but it will only give you a clear view if the measurements are send always in the same interval.
Therefore we will put the absolute difference in relation to the time difference and calculate as a per hour consumption.

We will compare the value and time difference of two adjacent measurements for a device (we will need a context for that).

    create schema FillLevelMeasurement(
      measurement Measurement,
      value double
    );

    create schema AdjacentFillLevelMeasurements(
    	firstValue double,
    	lastValue double,
    	firstTime Date,
    	lastTime Date,
    	source String
    );

    create context ConsumptionMeasurementDeviceContext
          partition measurement.source.value from FillLevelMeasurement;

    create expression double calculateConsumption(firstValue, lastValue, firstTime, lastTime) [
      if (lastTime == firstTime) {
        0;
      } else {
        ((firstValue - lastValue) * 3600000) / (lastTime - firstTime);
      }
    ];

    @Name("filter_fill_level_measurements")
    insert into FillLevelMeasurement
    select
      m.measurement as measurement,
      cast(getNumber(m, "c8y_WaterTankFillLevel.level.value"), double) as value
    from MeasurementCreated m
    where getObject(m, "c8y_WaterTankFillLevel") is not null;

    @Name("combine_two_latest_measurements")
    context ConsumptionMeasurementDeviceContext
    insert into AdjacentFillLevelMeasurements
    select
      first(m.value) as firstValue,
      first(m.measurement.time) as firstTime,
      last(m.value) as lastValue,
      last(m.measurement.time) as lastTime,
      context.key1 as source
    from FillLevelMeasurement.win:length(2) m;

    @Name("create_consumption_measurement")
    insert into CreateMeasurement
    select
      m.lastTime as time,
      m.source as source,
      "c8y_HourlyWaterConsumption" as type,
      {
        "c8y_HourlyWaterConsumption.consumption.value", calculateConsumption(m.firstValue, m.lastValue, m.firstTime.toMillisec(), m.lastTime.toMillisec()),
        "c8y_HourlyWaterConsumption.consumption.unit", "l/h"
      } as fragments
    from AdjacentFillLevelMeasurements m;
