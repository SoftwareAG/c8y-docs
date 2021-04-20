---
weight: 10
title: Custom fragments
layout: redirect
aliases:
  - /event-language/advanced#custom-fragments
---

Cumulocity APIs give you the possibility to structure your data freely. In the Cumulocity Event Language this is also the case.
Each of the output streams can be extended with custom fragments.
You can add fragments by setting the fragments field in the stream with a list of key, value pairs. The key is the full JsonPath to the value.

    {
      key1, value1,
      key2, value2,
      key3, value3
    } as fragments

Example 1:

    insert into CreateMeasurement
    select
      "12345" as source,
      "c8y_TemperatureMeasurement" as type,
      current_timestamp().toDate() as time,
      {
        "c8y_TemperatureMeasurement.T1.value", 1,
        "c8y_TemperatureMeasurement.T1.unit", "C",
        "c8y_TemperatureMeasurement.T2.value", 2,
        "c8y_TemperatureMeasurement.T2.unit", "C",
        "c8y_TemperatureMeasurement.T3.value", 3,
        "c8y_TemperatureMeasurement.T3.unit", "C",
        "c8y_TemperatureMeasurement.T4.value", 4,
        "c8y_TemperatureMeasurement.T4.unit", "C",
        "c8y_TemperatureMeasurement.T5.value", 5,
        "c8y_TemperatureMeasurement.T5.unit", "C"
      } as fragments
    from EventCreated;

This will result in the following json structure:

    {
      "type": "c8y_TemperatureMeasurement",
      "time": "...",
      "source": {
        "id": "12345"
      },
      "c8y_TemperatureMeasurement": {
        "T1": {
          "value": 1,
          "unit": "C"
        },
        "T2": {
          "value": 1,
          "unit": "C"
        },
        "T3": {
          "value": 1,
          "unit": "C"
        },
        "T4": {
          "value": 1,
          "unit": "C"
        },
        "T5": {
          "value": 1,
          "unit": "C"
        },
      }
    }

Example 2:

    insert into CreateManagedObject
    select
      "MyCustomDevice" as name,
      "customDevice" as type,
      {
        "c8y_IsDevice", {},
        "c8y_SupportedOperations", {"c8y_Restart", "c8y_Command"},
        "c8y_Hardware.serialNumber", "mySerialNumber",
        "c8y_Hardware.model", "myDeviceModel",
        "com_cumulocity_model_Agent", {},
        "c8y_RequiredAvailability.responseInterval", 30
      } as fragments
    from EventCreated e;

This will result in the following json structure:

    {
      "name": "MyCustomDevice",
      "type": "customDevice",
      "c8y_IsDevice": {},
      "c8y_RequiredAvailability": {
        "responseInterval": 30
      },
      "c8y_SupportedOperations": [
        "c8y_Restart",
        "c8y_Command"
      ],
      "com_cumulocity_model_Agent": {},
      "c8y_Hardware": {
        "model": "myDeviceModel",
        "serialNumber": "mySerialNumber"
      }
    }


