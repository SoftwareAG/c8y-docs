---
weight: 95
title: Bad StatusCode handling
layout: redirect
---

The gateway creates an alarm with status WARNING for the corresponding OPC UA server managed object when the received DataValue of a node has an abnormal status code (such as BAD or UNCERTAIN).
The alarm text in the Cumulocity IoT platform will provide the necessary information about the `StatusCode` (code, value, and description). 

The type of the alarm is constructed as `c8y_ua_DataValueAbnormal_<nodeId>_<StatusCode>_<value>`.