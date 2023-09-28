---
weight: 40
title: Measurements
layout: redirect
---


Measurements represent regularly acquired readings and statistics from sensors.

Measurements consist of a time when the measurement was taken, the unique identifiers of the source of the measurement, and a list of fragments. Here is an example of a measurement:

```json
{
    "time": "2011-01-02T03:04:00.000Z",
    "source": {
        "id": "1235"
    },
    "c8y_ThreePhaseElectricityMeasurement": {
        "A+": { "value": 435, "unit": "kWh" },
        "A-": { "value": 23, "unit": "kWh" },
        "P+": { "value": 657, "unit": "W" },
        "P-": { "value": 0, "unit": "W" },
        "A+:1": { "value": 123, "unit": "kWh" },
        "A-:1": { "value": 2, "unit": "kWh" },
    }
}
```

Similar to the inventory model, fragments are used to identify characteristics of particular devices. In the above example, a three-phase electricity meter sends readings for the different electrical phases. In the example above, such a fragment maps the names of the individual readings (for example, "A+" or "A-") to the actual numeric value and unit of the measurement.

Readings can hold various additional information that applications may require.

More detailed information can be found in [Measurements](https://{{< domain-c8y >}}/api/core/#tag/Measurements) in the {{< openapi >}}.
