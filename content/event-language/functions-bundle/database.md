---
weight: 20
title: Database functions
layout: redirect
---

To interact with your historical data you can use one of the following functions to directly query the database.

Most functions are available in several variants:

-   findOne...(...): The function expects exactly one object as query result and fails otherwise.
-   findFirst...(...): The function returns the first object in the query result or "null", if the result is empty.
-   findAll...(...): The function returns all objects in the query result.

Here is the full list of available functions. Replace the ellipses ("...") with "findOne", "findFirst" or "findAll".

|Function name (with variants)|Return type|Alternative argument lists|
|:----------------------------|:----------|:-------------------------|
|findManagedObjectById|ManagedObject|id*:String*<br/>id*:GId*|
|findFirstManagedObjectParent<br/>findOneManagedObjectParent|ManagedObject|managedObjectId*:String*<br/>managedObjectId*:GId*|
|...ManagedObjectByFragmentType|List|fragmentType*:String*|
|...ManagedObjectByType|List|type*:String*|
|findEventById|Event|id*:String*<br/>id*:GId*|
|findFirstEventByFragmentType<br/>findOneEventByFragmentType|Event|fragmentType*:String*|
|...EventByFragmentTypeAndSource|List|fragmentType*:String*, source*:String*|
|...EventByFragmentTypeAndSourceAndTimeBetween|List|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*|
|...EventByFragmentTypeAndSourceAndTimeBetweenAndType|List|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*|
|...EventByFragmentTypeAndSourceAndType|List|fragmentType*:String*, source*:String*, type*:String*|
|...EventByFragmentTypeAndTimeBetween|List|fragmentType*:String*, from*:Date*, to*:Date*|
|...EventByFragmentTypeAndTimeBetweenAndType|List|fragmentType*:String*, from*:Date*, to*:Date*, type*:String*|
|findFirstEventByFragmentTypeAndType<br/>findOneEventByFragmentTypeAndType|Event|fragmentType*:String*, type*:String*|
|...EventBySource|List|source*:String*|
|findMeasurementById|Measurement|id*:String*<br/>id*:GId*|
|findFirstMeasurementByFragmentType<br/>findOneMeasurementByFragmentType|Measurement|fragmentType*:String*|
|...MeasurementByFragmentTypeAndSource|List|fragmentType*:String*, source*:String*|
|...MeasurementByFragmentTypeAndSourceAndTimeBetween|List|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*|
|...MeasurementByFragmentTypeAndSourceAndTimeBetweenAndType|List|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*|
|...MeasurementByFragmentTypeAndSourceAndType|List|fragmentType*:String*, source*:String*, type*:String*|
|...MeasurementByFragmentTypeAndTimeBetween|List|fragmentType*:String*, from*:Date*, to*:Date*|
|...MeasurementByFragmentTypeAndTimeBetweenAndType|List|fragmentType*:String*, from*:Date*, to*:Date*, type*:String*|
|findFirstMeasurementByFragmentTypeAndType<br/>findOneMeasurementByFragmentTypeAndType|Measurement|fragmentType*:String*, type*:String*|
|...MeasurementBySource|List|source*:String*|
|findLastMeasurementByFragmentTypeAndSourceAndTimeBetween|Measurement|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*|
|findLastMeasurementByFragmentTypeAndSourceAndTimeBetweenAndType|Measurement|fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*|
|findLastMeasurementByFragmentTypeAndTimeBetween|Measurement|fragmentType*:String*, from*:Date*, to*:Date*|
|findLastMeasurementByFragmentTypeAndTimeBetweenAndType|Measurement|fragmentType*:String*, from*:Date*, to*:Date*, type*:String*|
|findOperationById|Operation|id*:String*<br/>id*:GId*|
|findFirstOperationByAgent<br/>findOneOperationByAgent|Operation|agentId*:String*|
|...OperationByAgentAndStatus|List|agentId*:String*, status*:String*|
|findFirstOperationByDevice<br/>findOneOperationByDevice|Operation|deviceId*:String*|
|...OperationByDeviceAndStatus|List|deviceId*:String*, status*:String*|
|...OperationByStatus|List|status*:String*|
|...OperationByCreationTimeBetween|List|from*:Date*, to*:Date*|
|findAlarmById|Alarm|id*:String*<br/>id*:GId*|
|...AlarmBySource|List|sourceId*:String*|
|...AlarmBySourceAndStatus|List|sourceId*:String*, status*:String*|
|...AlarmBySourceAndStatusAndType|List|sourceId*:String*, status*:String*, type*:String*|
|...AlarmBySourceAndStatusAndTimeBetween|List|sourceId*:String*, status*:String*, from*:Date*, to*:Date*|
|...AlarmBySourceAndTimeBetween|List|sourceId*:String*, from*:Date*, to*:Date*|
|findFirstAlarmByStatus<br/>findOneAlarmByStatus|Alarm|status*:String*|
|...AlarmByStatusAndTimeBetween|List|status*:String*, from*:Date*, to*:Date*|
|...AlarmByTimeBetween|List|from*:Date*, to*:Date*|
