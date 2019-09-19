---
weight: 30
title: Offloading of events collection
layout: redirect
---

The events collection manages the events. During offloading, the data of the events collection is flattened, with the resulting schema being defined as follows:

| Column name | Column type
| ---         |  ---
| id | BIGINT
| creationTime | TIMESTAMP
| creationTimeOffset | INTEGER
| creationTimeWithOffset | TIMESTAMP
| time | TIMESTAMP
| timeOffset | INTEGER
| timeWithOffset | TIMESTAMP
| source | BIGINT
| text | VARCHAR
| type | VARCHAR
