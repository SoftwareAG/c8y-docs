---
order: 110
title: Sensor library
layout: default
---
The sensor library defines a canonical set of predefined sensor and control capabilities. A sensor capability describes that part of a device that can measure some quantity, and a control capability describes that part of a device that can be modified, changed or in some way remotely controlled.

The library is logically divided into subpackages related to the domain to which that capability best fits, although applications a free to select capabilities from any domain. The name of the capability follows the *Fragment* naming convention. There are Java representations of each of these capabilities that can be found in the Java packages corresponding to the Fragment names.

## Environmental Capabilities

Environmental capabilities include sensors that measure properties of the environment such as temperature, humidity, wind speed, etc.

### Temperature Sensor

A temperature sensor reports temperature in degrees Celsius (C).

#### Inventory representation

In a managed object, a temperature sensor is modelled as a simple empty fragment:

    "c8y_TemperatureSensor" : {}

#### Measurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|T|C|Measured temperature. |

    "c8y_TemperatureMeasurement": {
        "T": { "value": 23, "unit": "C" }
    }

### Motion Sensor

A motion sensor detects motion. Simple motion sensors may just detect if there is, or is not motion based on some predefined threshold, whereas more complicated motion sensors (such as police speed radars) can measure the actual speed of the motion. It is assumed in the model that only the speed towards or away from the sensor is measured. The untis for this sensor type are kilometres per hour (km/h).

#### Inventory representation

In a managed object, a motion sensor is modelled as a simple empty fragment:

    "c8y_MotionSensor" : {}

#### Measurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|motionDetected|*none*|Boolean value indicating if motion has been detected (non-zero value) or not (zero value).|
|speed|km/h|Measured speed towards (+ve) or away (-ve) from the sensor.|

    "c8y_MotionMeasurement": {
        "motionDetected": { "value": 1.0, "unit": "", "type": "BOOLEAN" },
        "speed": { "value": -63.2, "unit": "km/h" }
      }

### Acceleration Sensor

An acceleration sensor, or accelerometer, is a device that measures acceleration along an axis. This sensor model does not define the direction of that axis. The untis for this sensor type are metres per second per second (m/s2).

#### Inventory representation

In a managed object, an acceleration sensor is modelled as a simple empty fragment:

    "c8y_AccelerationSensor" : {}

#### Measurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|acceleration|m/s2|Measured acceleration along the sensor axis (direction of the sensor axis is not defined in this measurement).|

    "c8y_AccelerationMeasurement": {
        "acceleration": { "value": 8.36, "unit": "m/s2" }
    }

### Light Sensor

I light sensor measures the intensity of light.

#### Inventory representation

In a managed object, a light sensor is modelled as a simple empty fragment:

	"c8y_LightSensor" : {}

#### Measurement

Light is measured with two main alternative sets of units: radiometry consists of measurements of light power at all wavelengths, while photometry measures light with wavelength weighted with respect to a standardised model of human brightness perception. Photometry is useful, for example, to quantify Illumination (lighting) intended for human use.

|Measurement|Units|Description|
|:----------|:----|:----------|
|e|lux|Photometrical Light Measurement|

    "c8y_LightMeasurement": {
        "e": { "value": 8.36, "unit": "lux" }
    }

### Humidity Sensor

A humidity sensor measures the amount of water vapour in the air.

#### Inventory representation

In a managed object, a humidity sensor is modelled as a simple empty fragment:

	"c8y_HumiditySensor" : {}

#### Measurement

There are three main measurements of humidity: absolute, relative and specific. Absolute humidity is the water content of air. Relative humidity, expressed as a percent, measures the current absolute humidity relative to the maximum for that temperature. Specific humidity is a ratio of the water vapour content of the mixture to the total air content on a mass basis.

|Measurement|Units|Description|
|:----------|:----|:----------|
|h|%RH|Relative Humidity measurement|

	"c8y_HumidityMeasurement" : {
		"h" : { "value" : 13.37, "unit": "%RH"}
	}

### Moisture Sensor

A moisture sensor measures the water content of a substance.

#### Inventory representation

In a managed object, a moisture sensor is modelled as a simple empty fragment:

	"c8y_MoistureSensor" : {}

#### Measurement

There are three main measurements of moisture: absolute, relative and specific. Absolute moisture is the absolute water content of a substance. Relative moisture, expressed as a percent, measures the current absolute moisture relative to the maximum for that temperature. Specific humidity is a ratio of the water vapour content of the mixture to the total substance content on a mass basis.

|Measurement|Units|Description|
|:----------|:----|:----------|
|moisture|%|Relative Moisture measurement|

	"c8y_MoistureMeasurement" : {
		"moisture" : { "value" : 13.37, "unit" : "%" }
	}

### Distance Sensor

A distance sensor measures the distance between itself and the closest object in certain direction.

#### Inventory representation

In a managed object, a distance sensor is modelled as a simple empty fragment:

	"c8y_DistanceSensor" : {}

#### Measurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|distance|mm|Distance measurement|

	"c8y_DistanceMeasurement" : {
		"distance" : { "value" : 13.37, "unit" : "mm" }
	}

## Energy

### Electricity Sensor

At the most basic level electricity sensors (aka Electricity Meters, Watt-hour meters) measure energy consumption (usually measured in kWh), however they can measure much more depending upon their complexity, such as "demand", or instantaneous power (usually measured in W), reactive power, harmonic distortion, etc. Meters can measure for a single phase (typical just for home usage) or for three phases.

#### Inventory representation - Single Phase Meter

In a managed object, a single phase electricity meter is modelled as a simple empty fragment:

    "c8y_SinglePhaseElectricitySensor" : {}

#### Measurement - Single Phase Meter

|Measurement|Units|Description|
|:----------|:----|:----------|
|A+|kWh|Total active energy, in|
|A-|kWh|Total active energy, out|
|P+|W|Total active power, in|
|P-|W|Total active power, out|

    "c8y_SinglePhaseElectricityMeasurement": {
      "A+": { "value": 123, "unit": "kWh" },
      "A-": { "value": 2, "unit": "kWh" },
      "P+": { "value": 56, "unit": "W" },
      "P-": { "value": 0, "unit": "W" }
    }

#### Inventory representation - Three Phase Meter

In a managed object, a three phase electricity meter is modelled as a simple empty fragment:

    "c8y_ThreePhaseElectricitySensor" : {}

#### Measurement - Three Phase Meter

|Measurement|Units|Description|
|:----------|:----|:----------|
|A+|kWh|Total active energy in, summed across phases|
|A+:1(2, 3)|kWh|Active energy in for phase 1, 2 or 3|
|A-|kWh|Total active energy out, summed across phases|
|A-:1(2, 3)|kWh|Active energy out for phase 1, 2, 3|
|P+|W|Total active power in, summed across phases|
|P+:1(2, 3)|W|Active power in for phase 1, 2 or 3|
|P-:1(2, 3)|W|Active power out for phase 1, 2 or 3|
|Ri+|kVArh|Total reactive inductive energy, in|
|Ri-|kVArh|Total reactive inductive energy, out|
|Rc+|kVArh|Total reactive capacitive energy, in|
|Rc-|kVArh|Total reactive capacitive energy, out|
|Qi+|kVAr|Total reactive inductive power, in|
|Qi-|kVAr|Total reactive inductive power, out|
|Qc+|kVAr|Total reactive capacitive power, in|
|Qc-|kVAr|Total reactive capacitive power, out|

    "c8y_ThreePhaseElectricityMeasurement": {
      "A+": { "value": 435, "unit": "kWh" },
      "A-": { "value": 23, "unit": "kWh" },
      "P+": { "value": 657, "unit": "W" },
      "P-": { "value": 0, "unit": "W" },
      "A+:1": { "value": 123, "unit": "kWh" },
      "A-:1": { "value": 2, "unit": "kWh" },
      "P+:1": { "value": 56, "unit": "W" },
      "P-:1": { "value": 0, "unit": "W" },
      "A+:2": { "value": 231, "unit": "kWh" },
      "A-:2": { "value": 23, "unit": "kWh" },
      "P+:2": { "value": 516, "unit": "W" },
      "P-:2": { "value": 2, "unit": "W" },  
      "A+:3": { "value": 1423, "unit": "kWh" },
      "A-:3": { "value": 422, "unit": "kWh" },
      "P+:3": { "value": 16, "unit": "W" },
      "P-:3": { "value": 9, "unit": "W" },
      "Ri+": { "value": 231, "unit": "kVArh" },
      "Ri-": { "value": 23, "unit": "kVArh" },
      "Rc+": { "value": 342, "unit": "kVArh" },
      "Rc-": { "value": 43, "unit": "kVArh" },
      "Qi+": { "value": 234, "unit": "kVAr" },
      "Qi-": { "value": 645, "unit": "kVAr" },
      "Qc+": { "value": 76, "unit": "kVAr" },
      "Qc-": { "value": 34, "unit": "kVAr" }
    }

### Current sensor

A current sensor measures the current flowing through it.

#### Inventory representation

In a managed object, a current sensor is modelled as a simple empty fragment:

	"c8y_CurrentSensor" : {}

#### Measurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|current|A|Current measurement|

	"c8y_CurrentMeasurement" : {
		"current" : { "value" : 13.37, "unit" : "A" }
	}

### Voltage sensor

A voltage sensor measures the voltage difference between two points in an electric circuit.

#### Measurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|voltage|V|Voltage measurement|

	"c8y_VoltageMeasurement" : {
		"voltage" : { "value" : 13.37, "unit" : "V" }
	}

## Location Capabilities

### Position

*c8y\_Position* reports the geographical location of an asset in terms of latitude, longitude and altitude. Altitude is given in meters. To report the current location of an asset or a device, "c8y\_Position" is added to the managed object representing the asset or device. To trace the position of an asset or a device, "c8y\_Position" is sent as part of an event of type "c8y\_LocationUpdate".

    "c8y_Position": {
      "alt": 67,
      "lng": 6.15173,
      "lat": 51.211977,
      "trackingProtocol" : "TELIC",
      "reportReason" : "Time Event"
    }

Properties "trackingProtocol" and "reportReason" are used by tracker agent and describes tracking context of positioning report: why the report was sent and in which protocol.

## Common Capabilities

### Relay Control

A relay is a kind of binary state switch which can be in the states "OPEN" or "CLOSED". Relays can be used for many purposes, for example to connect or disconnect the consumer power supply through a smart energy meter.

#### Inventory representation

In a managed object, a relay control model includes the state of the control. When the control state changes, the inventory model should be updated to include the new state:

    "c8y_Relay" :
    {
      "relayState" : "OPEN"
    }

#### Operations

|Operation|States|Description|
|:--------|:-----|:----------|
|state|OPEN, CLOSED|OPEN commands the relay in to the open position, CLOSED commands it to the closed position.|

The operation representation is the same as the inventory representation:

    "c8y_Relay" :
    {
      "relayState" : "OPEN"
    }

### Control an Array of Relays

The c8y_RelayArray operation provides the functionality to control multiple relays.

#### Inventory representation

In a managed object, an array of relays' control model includes the state of each relay. When the state changes, the inventory model should be replaced with the new state:

	"c8y_RelayArray" : [
		"OPEN",
		"CLOSED",
		"CLOSED",
		"OPEN"
	]

#### Operations

The operation representation is the same as the inventory representation:

	"c8y_RelayArray" : [
		"OPEN",
		"CLOSED",
		"CLOSED",
		"OPEN"
	]

### Mobile information

c8y_Mobile holds the information about the mobile connection status (e.g. cell information) and the sim card (e.g. ICCID) of the device. Whenever the status changes the fragment in the device should be updated. The assumption for not moving devices is that these values rarely change.
For more frequently changing mobile information (e.g. signal strength) a measurement can be used.

#### Inventory representation

    "c8y_Mobile" : {
      "imsi": "..."
      "imei": "..."
      "currentOperator": "..."
      "currentBand": "..."
      "connType": "..."
      "rssi": "..."
      "ecn0": "..."
      "rcsp": "..."
      "mnc": "..."
      "lac": "..."
      "cellId": "..."
      "msisdn": "..."
      "iccid": "..."
    }

#### Measurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|rssi|dBm|RSSI measurement|

    "c8y_SignalStrength": {
      "rssi": {
        "unit": "dBm",
        "value": -63
      }
    }
