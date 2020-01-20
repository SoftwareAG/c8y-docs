---
weight: 30
title: Creating views
layout: redirect
---

With Cumulocity IoT DataHub, you can replicate data from a Cumulocity collection to a data lake using a default transformation of the data. As requirements for subsequent data analysis of the offloaded device data may vary over time, you should configure your offloading pipeline so that all potentially relevant data is included. 

Depending on your use cases, you will often find the need to provide a view on the data, which limits, filters, or transforms the data, e.g. converting Celsius to Fahrenheit or extracting data from JSON fragments.

In Dremio, you can create such a view by defining a corresponding query and saving it as a new dataset. When saving that new dataset, you must select your space as the location and can freely choose a name for the view. Once that is done, you can work with the new dataset as with any other source and run queries against it. This includes in particular querying this view from other clients as described in section [Querying Offloaded Cumulocity Data](/datahub/querying-offloaded/).

> **Info:** Such a view is per default not materialized, i.e., it is not stored persistently. Each time you query the view, the underlying query defining the view is run against the source data.

### Example
Consider the case that you want to visualize data in a reporting tool. The raw data volume is too high, so you want to instead show the hourly average of the column 'myValue'. You can easily do that by creating a view with the following SQL statement and saving it as a view/virtual data set:

```sql
SELECT DATE_TRUNC('HOUR', "time") as "time", avg(myValue) as avg
FROM myTable
GROUP BY DATE_TRUNC('HOUR', "time")
```

