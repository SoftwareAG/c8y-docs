---
weight: 40
title: Joining tables/views
layout: redirect
---

Views you have defined and target tables from your data lake can be joined as well. In Dremio you can either define joins using the SQL editor or use a graphical interface to define a join.

A general use case for joining is to enrich your alarms, events, or measurement values with metadata from the inventory collection.

```sql
SELECT *
FROM myAccountDataLake.dremio.myAccount.alarms
JOIN myAccountDataLake.dremio.myAccount.inventory
USING(id)
```
