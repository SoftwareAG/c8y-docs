---
weight: 10
title: Environmental Capabilities
layout: redirect
---

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
