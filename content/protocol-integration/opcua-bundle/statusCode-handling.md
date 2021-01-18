---
weight: 90
title: Data reporting
layout: redirect
---

An operation in the OPC UA server is reported with a `StatusCode` (GOOD, BAD, UNCERTAIN, etc.), which indicates the outcome of the operation. 
If such an operation in the server is reported with BAD or UNCERTAIN status code, then an alarm is created in Cumulocity IoT platform with necessary information about the `StatusCode` (code, value, and description). 
The type of the alarm is constructed as `c8y_ua_DataValueAbnormal_<nodeId>_<StatusCode>_<value>`.