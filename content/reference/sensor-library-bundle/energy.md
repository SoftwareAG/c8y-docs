---
weight: 20
title: Energy
layout: redirect
---

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
