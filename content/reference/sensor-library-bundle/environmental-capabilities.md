---
weight: 10
title: Environmental capabilities
layout: redirect
---

Environmental capabilities include sensors that measure properties of the environment such as temperature, humidity and wind speed.

### c8y\_TemperatureSensor

A temperature sensor reports the temperature in degrees Celsius (C).
In a managed object, a temperature sensor is modeled as a simple empty fragment:

```json
"c8y_TemperatureSensor" : {}
```

### c8y\_TemperatureMeasurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|T|C|Measured temperature. |

```json
"c8y_TemperatureMeasurement": {
    "T": { "value": 23, "unit": "C" }
}
```

### c8y\_MotionSensor

A motion sensor detects motion. Simple motion sensors may just detect if there is motion or not, based on some predefined threshold. More complicated motion sensors (such as police speed radars) can measure the actual speed of the motion. It is assumed in the model that only the speed towards or away from the sensor is measured. The unit for this sensor type are kilometers per hour (km/h).
In a managed object, a motion sensor is modeled as a simple empty fragment:

```json
"c8y_MotionSensor" : {}
```

### c8y\_SpeedMeasurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|motionDetected|*none*|Boolean value indicating if motion has been detected (non-zero value) or not (zero value).|
|speed|km/h|Measured speed towards (+ve) or away (-ve) from the sensor.|

```json
"c8y_SpeedMeasurement": {
  "motionDetected": { "value": 1.0, "unit": "", "type": "BOOLEAN" },
  "speed": { "value": -63.2, "unit": "km/h" }
}
```

### c8y\_AccelerationSensor

An acceleration sensor, or accelerometer, is a device that measures acceleration along an axis. This sensor model does not define the direction of that axis. The units for this sensor type are meters per second per second (m/s<sup>2</sup>).
In a managed object, an acceleration sensor is modeled as a simple empty fragment:

```json
"c8y_AccelerationSensor" : {}
```

### c8y\_AccelerationMeasurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|acceleration|m/s2|Measured acceleration along the sensor axis (direction of the sensor axis is not defined in this measurement).|

```json
"c8y_AccelerationMeasurement": {
  "acceleration": { "value": 8.36, "unit": "m/s2" }
}
```

### c8y\_LightSensor

A light sensor measures the intensity of light.
In a managed object, a light sensor is modeled as a simple empty fragment:

```json
"c8y_LightSensor" : {}
```

### c8y\_LightMeasurement

Light is measured with two main alternative sets of units: radiometry consists of measurements of light power at all wavelengths, while photometry measures light with wavelength weighted with respect to a standardized model of human brightness perception. Photometry is useful, for example, to quantify illumination (lighting) intended for human use.

|Measurement|Units|Description|
|:----------|:----|:----------|
|e|lux|Photometrical light measurement|

```json
"c8y_LightMeasurement": {
    "e": { "value": 8.36, "unit": "lux" }
}
```

### c8y\_HumiditySensor

A humidity sensor measures the amount of water vapour in the air.
In a managed object, a humidity sensor is modeled as a simple empty fragment:

```json
"c8y_HumiditySensor" : {}
```

### c8y\_HumidityMeasurement

There are three main measurements of humidity: absolute, relative and specific. Absolute humidity is the water content of air. Relative humidity, expressed as a percentage, measures the current absolute humidity relative to the maximum for that temperature. Specific humidity is a ratio of the water vapour content of the mixture to the total air content on a mass basis.

|Measurement|Units|Description|
|:----------|:----|:----------|
|h|%RH|Relative humidity measurement|

```json
"c8y_HumidityMeasurement" : {
  "h" : { "value" : 13.37, "unit": "%RH"}
}
```

### c8y\_MoistureSensor

A moisture sensor measures the water content of a substance.
In a managed object, a moisture sensor is modeled as a simple empty fragment:

```json
"c8y_MoistureSensor" : {}
```

### c8y\_MoistureMeasurement

There are three main measurements of moisture: absolute, relative and specific. Absolute moisture is the absolute water content of a substance. Relative moisture, expressed as a percentage, measures the current absolute moisture relative to the maximum for that temperature. Specific humidity is a ratio of the water vapour content of the mixture to the total substance content on a mass basis.

|Measurement|Units|Description|
|:----------|:----|:----------|
|moisture|%|Relative moisture measurement|

```json
"c8y_MoistureMeasurement" : {
  "moisture" : { "value" : 13.37, "unit" : "%" }
}
```

### c8y\_DistanceSensor

A distance sensor measures the distance between itself and the closest object in a certain direction.
In a managed object, a distance sensor is modeled as a simple empty fragment:

```json
"c8y_DistanceSensor" : {}
```

### c8y\_DistanceMeasurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|distance|mm|Distance measurement|

```json
"c8y_DistanceMeasurement" : {
  "distance" : { "value" : 13.37, "unit" : "mm" }
}
```
