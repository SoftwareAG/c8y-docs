---
weight: 20
title: Offloading of alarms collection
layout: redirect
---


The alarm collection keeps track of alarms which have been raised. During offloading, the data of the alarm collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | BIGINT
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
| source | BIGINT
| status | VARCHAR
| text | VARCHAR
| type | VARCHAR
