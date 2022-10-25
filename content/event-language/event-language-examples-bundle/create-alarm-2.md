---
weight: 30
title: Creating alarms from bit measurements
layout: redirect
---

Devices often keep alarm statuses in registers and can not interpret the meaning of alarms.
In this example, we assume that a device just sends the entire register as a binary value in a measurement. A rule must identify the bits and create the respective alarm.

We create three expressions to resolve alarm text, type, and severity for each of the bits.

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