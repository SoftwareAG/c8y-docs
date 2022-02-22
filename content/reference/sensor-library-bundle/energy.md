---
weight: 20
title: Energy
layout: redirect
---

### Electricity sensor

At the most basic level electricity sensors (electricity meters, watt-hour meters) measure energy consumption (usually measured in kWh), however they can measure much more depending on their complexity, such as "demand", or instantaneous power (usually measured in W), reactive power, harmonic distortion, and more. Meters can measure for a single phase (typical just for home usage) or for three phases.

### c8y\_SinglePhaseElectricitySensor

In a managed object, a single phase electricity meter is modeled as a simple empty fragment:

```json
"c8y_SinglePhaseElectricitySensor" : {}
```

### c8y\_SinglePhaseEnergyMeasurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|A+|kWh|Total active energy, in|
|A-|kWh|Total active energy, out|
|P+|W|Total active power, in|
|P-|W|Total active power, out|

```json
"c8y_SinglePhaseEnergyMeasurement": {
  "A+": { "value": 123, "unit": "kWh" },
  "A-": { "value": 2, "unit": "kWh" },
  "P+": { "value": 56, "unit": "W" },
  "P-": { "value": 0, "unit": "W" }
}
```

### c8y\_ThreePhaseElectricitySensor

In a managed object, a three phase electricity meter is modeled as a simple empty fragment:

```json
"c8y_ThreePhaseElectricitySensor" : {}
```

### c8y_ThreePhaseEnergyMeasurement

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

```json
"c8y_ThreePhaseEnergyMeasurement": {
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
```

### c8y\_CurrentSensor

A current sensor measures the current flowing through it.
In a managed object, a current sensor is modeled as a simple empty fragment:

```json
"c8y_CurrentSensor" : {}
```

### c8y\_CurrentMeasurement

|Measurement|Units|Description|
|:----------|:----|:----------|
|current|A|Current measurement|

```json
"c8y_CurrentMeasurement" : {
  "current" : { "value" : 13.37, "unit" : "A" }
}
```

### c8y\_VoltageMeasurement

A voltage sensor measures the voltage difference between two points in an electric circuit.

|Measurement|Units|Description|
|:----------|:----|:----------|
|voltage|V|Voltage measurement|

```json
"c8y_VoltageMeasurement" : {
  "voltage" : { "value" : 13.37, "unit" : "V" }
}
```
