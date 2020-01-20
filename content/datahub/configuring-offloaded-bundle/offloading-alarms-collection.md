---
weight: 20
title: Offloading of alarms collection
layout: redirect
---


The alarm collection keeps track of alarms which have been raised. During offloading, the data of the alarm collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | VARCHAR
| count | INTEGER
| creationTime | TIMESTAMP
| creationTimeOffset | INTEGER
| creationTimeWithOffset | TIMESTAMP
| time | TIMESTAMP
| timeOffset | INTEGER
| timeWithOffset | TIMESTAMP
| lastUpdated | TIMESTAMP
| lastUpdatedOffset | INTEGER
| lastUpdatedWithOffset | TIMESTAMP
| severity | VARCHAR
| history | VARCHAR
| source | VARCHAR
| status | VARCHAR
| text | VARCHAR
| type | VARCHAR

The alarms collection keeps track of alarms. An alarm may change its state over time. The alarms collection also supports updates to incorporate these changes. For that reason, an offloading pipeline for the alarms collection encompasses additional steps. The first step is to offload those entries of the alarms collection, which were added or updated since the last offload. They are offloaded with above standard schema into the target table of the data lake. As a second step, two views over the target table are defined in Dremio (with alarms used as the target table name in the following examples):

* alarms_all: a view with the updates between two offloading executions, not including the intermediate updates. For example, after the first offloading execution, the status of an alarm is ACTIVE. Then it changes its state from ACTIVE to INACTIVE and afterwards back to ACTIVE. When the next offloading is executed, it will persist the latest status ACTIVE, but not the intermediate status INACTIVE (because it happened between two offloading runs and thus is not seen by DataHub).
* alarms_latest: a view with the latest status of all alarms, with all previous transitions being discarded.

Both views are provided in your Dremio space. For details on views and spaces in Dremio see section [Refining Offloaded Cumulocity Data](/datahub/refining-offload/).