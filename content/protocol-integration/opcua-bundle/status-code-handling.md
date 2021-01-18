---
weight: 90
title: Bad StatusCode handling
layout: redirect
---

An operation in the OPC UA server is reported with a `StatusCode` (GOOD, BAD, UNCERTAIN, etc.), which indicates the outcome of the operation.
If such an operation on the subscribed node reports with BAD or UNCERTAIN status code, then the gateway will create an alarm with status `WARNING` in Cumulocity IoT platform.
The alarm text will provide the necessary information about the `StatusCode` (code, value, and description). 
The type of the alarm is constructed as `c8y_ua_DataValueAbnormal_<nodeId>_<StatusCode>_<value>`.