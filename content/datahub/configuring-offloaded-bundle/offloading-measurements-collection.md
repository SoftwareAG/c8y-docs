---
weight: 50
title: Offloading of measurements collection
layout: redirect
---

The measurements collection manages device measurements. Offloading the measurements collection differs from the other collections as you have to explicitly select a type, which ensures that your offloaded data is of the same type. Separating by type is a necessary preprocessing step, as without such a selection a target table for all types would have potentially a very broad schema and a lot of null values.

During offloading, the data of the measurements collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type |
| -----       | -----       |
| id | BIGINT |
| creationTime | TIMESTAMP |
| creationTimeOffset | INTEGER |
| creationTimeWithOffset | TIMESTAMP |
| time | TIMESTAMP |
| timeOffset | INTEGER |
| timeWithOffset | TIMESTAMP |
| lastUpdated | TIMESTAMP |
| lastUpdatedOffset | INTEGER |
| lastUpdatedWithOffset | TIMESTAMP |
| source | BIGINT |
| type | VARCHAR |
| fragment_attribute1_name_value | Depends on data type, often FLOAT |
| fragment_attribute1_name_unit | String |
| ... |  |
| fragment_attributeN_name_value | Depends on data type, often FLOAT |
| fragment_attributeN_name_unit | String |
| myCustomAttribute1 | Depends on data type |
| ... |  |
| myCustomAttributeN | Depends on data type |

The entries in the measurements collection can have a different structure, depending on the types of data the corresponding device emits. While one sensor might emit temperature and humidity values, another sensor might emit pressure values. The flattened structure of these attributes is defined as `fragment_` followed by attribute name and associated type being defined as in the measurements collection. The concrete number of attributes depends on the device type, illustrated in the above table with `fragment_attribute1_name_value` to `fragment_attributeN_name_value`.

### Example mapping
````json
{
    ....
     "c8y_Temperature": {
         "T": {
             "unit": "C",
             "value": 2.0791169082
         
     }
}
````

is represented as

| | |
| ---- | ----- |
| c8y_Temperature_T_value | c8y_Temperature_T_unit |
| 2.0791169082 | C | 

When configuring the offloading configuration for the measurements collection, you have to specify the device type. The offloading pipeline only offloads data for the selected device type. Then the target table in the data lake consists of homogeneous data from the same device type.

<img src="/guides/images/datahub-guide/datahub-offloading-task-to-target-table.png" alt="Offloading task to target table"  style="max-width: 100%">

> **Info:** The **Type** selection control provides a set of device types to select from. These types are retrieved by sampling the measurements collection. If a device type is missing because it has not been sampled, you can type it into the **Type** selection control.

