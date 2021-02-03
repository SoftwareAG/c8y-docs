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

<table>
<colgroup>
<col width="60%">
<col width="15%">
<col width="25%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">Function name (with variants)</th>
<th style="text-align:left">Return type</th>
<th style="text-align:left">Alternative argument lists</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">findManagedObjectById</td>
<td style="text-align:left">ManagedObject</td>
<td style="text-align:left">id*:String*<br>id*:GId*</td>
</tr>
<tr>
<td style="text-align:left">findFirstManagedObjectParent<br>findOneManagedObjectParent</td>
<td style="text-align:left">ManagedObject</td>
<td style="text-align:left">managedObjectId*:String*<br>managedObjectId*:GId*</td>
</tr>
<tr>
<td style="text-align:left">…ManagedObjectByFragmentType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*</td>
</tr>
<tr>
<td style="text-align:left">…ManagedObjectByType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">type*:String*</td>
</tr>
<tr>
<td style="text-align:left">findEventById</td>
<td style="text-align:left">Event</td>
<td style="text-align:left">id*:String*<br>id*:GId*</td>
</tr>
<tr>
<td style="text-align:left">findFirstEventByFragmentType<br>findOneEventByFragmentType</td>
<td style="text-align:left">Event</td>
<td style="text-align:left">fragmentType*:String*</td>
</tr>
<tr>
<td style="text-align:left">…EventByFragmentTypeAndSource</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, source*:String*</td>
</tr>
<tr>
<td style="text-align:left">…EventByFragmentTypeAndSourceAndTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, source*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">…EventByFragmentTypeAndSourceAndTimeBetweenAndType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">…EventByFragmentTypeAndSourceAndType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, source*:String*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">…EventByFragmentTypeAndTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">…EventByFragmentTypeAndTimeBetweenAndType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, from*:Date*, to*:Date*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">findFirstEventByFragmentTypeAndType<br>findOneEventByFragmentTypeAndType</td>
<td style="text-align:left">Event</td>
<td style="text-align:left">fragmentType*:String*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">…EventBySource</td>
<td style="text-align:left">List</td>
<td style="text-align:left">source*:String*</td>
</tr>
<tr>
<td style="text-align:left">findMeasurementById</td>
<td style="text-align:left">Measurement</td>
<td style="text-align:left">id*:String*<br>id*:GId*</td>
</tr>
<tr>
<td style="text-align:left">findFirstMeasurementByFragmentType<br>findOneMeasurementByFragmentType</td>
<td style="text-align:left">Measurement</td>
<td style="text-align:left">fragmentType*:String*</td>
</tr>
<tr>
<td style="text-align:left">…MeasurementByFragmentTypeAndSource</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, source*:String*</td>
</tr>
<tr>
<td style="text-align:left">…MeasurementByFragmentTypeAndSourceAndTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, source*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">…MeasurementByFragmentTypeAndSourceAndTimeBetweenAndType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">…MeasurementByFragmentTypeAndSourceAndType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, source*:String*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">…MeasurementByFragmentTypeAndTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">…MeasurementByFragmentTypeAndTimeBetweenAndType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">fragmentType*:String*, from*:Date*, to*:Date*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">findFirstMeasurementByFragmentTypeAndType<br>findOneMeasurementByFragmentTypeAndType</td>
<td style="text-align:left">Measurement</td>
<td style="text-align:left">fragmentType*:String*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">…MeasurementBySource</td>
<td style="text-align:left">List</td>
<td style="text-align:left">source*:String*</td>
</tr>
<tr>
<td style="text-align:left">findLastMeasurementByFragmentTypeAndSourceAndTimeBetween</td>
<td style="text-align:left">Measurement</td>
<td style="text-align:left">fragmentType*:String*, source*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">findLastMeasurementByFragmentTypeAndSourceAndTimeBetweenAndType</td>
<td style="text-align:left">Measurement</td>
<td style="text-align:left">fragmentType*:String*, source*:String*, from*:Date*, to*:Date*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">findLastMeasurementByFragmentTypeAndTimeBetween</td>
<td style="text-align:left">Measurement</td>
<td style="text-align:left">fragmentType*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">findLastMeasurementByFragmentTypeAndTimeBetweenAndType</td>
<td style="text-align:left">Measurement</td>
<td style="text-align:left">fragmentType*:String*, from*:Date*, to*:Date*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">findOperationById</td>
<td style="text-align:left">Operation</td>
<td style="text-align:left">id*:String*<br>id*:GId*</td>
</tr>
<tr>
<td style="text-align:left">findFirstOperationByAgent<br>findOneOperationByAgent</td>
<td style="text-align:left">Operation</td>
<td style="text-align:left">agentId*:String*</td>
</tr>
<tr>
<td style="text-align:left">…OperationByAgentAndStatus</td>
<td style="text-align:left">List</td>
<td style="text-align:left">agentId*:String*, status*:String*</td>
</tr>
<tr>
<td style="text-align:left">findFirstOperationByDevice<br>findOneOperationByDevice</td>
<td style="text-align:left">Operation</td>
<td style="text-align:left">deviceId*:String*</td>
</tr>
<tr>
<td style="text-align:left">…OperationByDeviceAndStatus</td>
<td style="text-align:left">List</td>
<td style="text-align:left">deviceId*:String*, status*:String*</td>
</tr>
<tr>
<td style="text-align:left">…OperationByStatus</td>
<td style="text-align:left">List</td>
<td style="text-align:left">status*:String*</td>
</tr>
<tr>
<td style="text-align:left">…OperationByCreationTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">findAlarmById</td>
<td style="text-align:left">Alarm</td>
<td style="text-align:left">id*:String*<br>id*:GId*</td>
</tr>
<tr>
<td style="text-align:left">…AlarmBySource</td>
<td style="text-align:left">List</td>
<td style="text-align:left">sourceId*:String*</td>
</tr>
<tr>
<td style="text-align:left">…AlarmBySourceAndStatus</td>
<td style="text-align:left">List</td>
<td style="text-align:left">sourceId*:String*, status*:String*</td>
</tr>
<tr>
<td style="text-align:left">…AlarmBySourceAndStatusAndType</td>
<td style="text-align:left">List</td>
<td style="text-align:left">sourceId*:String*, status*:String*, type*:String*</td>
</tr>
<tr>
<td style="text-align:left">…AlarmBySourceAndStatusAndTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">sourceId*:String*, status*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">…AlarmBySourceAndTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">sourceId*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">findFirstAlarmByStatus<br>findOneAlarmByStatus</td>
<td style="text-align:left">Alarm</td>
<td style="text-align:left">status*:String*</td>
</tr>
<tr>
<td style="text-align:left">…AlarmByStatusAndTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">status*:String*, from*:Date*, to*:Date*</td>
</tr>
<tr>
<td style="text-align:left">…AlarmByTimeBetween</td>
<td style="text-align:left">List</td>
<td style="text-align:left">from*:Date*, to*:Date*</td>
</tr>
</tbody>
</table>
