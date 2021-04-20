---
weight: 60
title: Other response formats
layout: redirect
---
In order to get measurements in other formats than JSON you can use one of the following supported `Accept` headers:

- `text/csv`
- `application/vnd.ms-excel`

Sample CSV response:

```text
time,source,device_name,fragment.series,value,unit
2020-03-15T17:03:14.000+02:00,424,testAgent,c8y_TemperatureMeasurement.T,37,C
```
