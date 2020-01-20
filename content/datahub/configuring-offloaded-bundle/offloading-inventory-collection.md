---
weight: 40
title: Offloading of inventory collection
layout: redirect
---

The inventory collection keeps track of managed objects. During offloading, the data of the inventory collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | VARCHAR
| creationTime | TIMESTAMP
| creationTimeOffset | INTEGER
| creationTimeWithOffset | TIMESTAMP
| lastUpdated | TIMESTAMP
| lastUpdatedOffset | INTEGER
| lastUpdatedWithOffset | TIMESTAMP
| name | VARCHAR
| owner | VARCHAR
| type | VARCHAR

The inventory collection keeps track of managed objects. Note that DataHub automatically filters out internal objects of the Cumulocity Platform. These internal objects are also not returned when using the Cumulocity REST API. A managed object may change its state over time. The inventory collection also supports updates to incorporate these changes. For that reason, an offloading pipeline for the inventory encompasses additional steps. The first step is to offload the entries of the inventory collection that were added or updated since the last offload. They are offloaded with above standard schema into the target table of the data lake. As a second step, two views over the target table are defined in Dremio (with inventory used as the target table name in the following examples):

* inventory_all: a view with the updates between two offloading executions, not including the intermediate updates. For example, after the first offloading execution, the status of a device is ACTIVE. Then it changes its state from ACTIVE to INACTIVE and afterwards to ERROR. When the next offloading is executed, it will persist the status ERROR, but not the intermediate status INACTIVE (because it happened between two offloading runs and thus is not seen by DataHub).
* inventory_latest: a view with the latest status of all managed objects, with all previous transitions being discarded.

Both views are provided in your Dremio space. For details on views and spaces in Dremio see section [Refining Offloaded Cumulocity Data](/datahub/refining-offload/).

