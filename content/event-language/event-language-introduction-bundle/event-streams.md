---
weight: 20
title: Event streams
layout: redirect
---

In the Cumulocity Event Language data flows in streams. You can create events in streams and listen to events created in streams.

### Predefined streams

There are some predefined streams to interact with several Cumulocity APIs. For each input stream, Cumulocity will automatically create a new event when the respective API call was made. If a measurement was created via REST API there will be a new event in the MeasurementCreated stream.
For interacting with the Cumulocity backend you can create an event on the respective output stream and Cumulocity will automatically execute either the database query or create the API calls necessary for sending mails, sms, or similar. To create a new alarm in the database you can create a new event in the CreateAlarm stream.

<table>
<colgroup>
<col width="15%">
<col width="20%">
<col width="20%">
<col width="45%">
</colgroup>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:left">Input streams</th>
<th style="text-align:left">Output streams</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Inventory</td>
<td style="text-align:left">ManagedObjectCreated<br>ManagedObjectUpdated<br>ManagedObjectDeleted</td>
<td style="text-align:left">CreateManagedObject<br>UpdateManagedObject<br>DeleteManagedObject</td>
<td style="text-align:left">This group of events represents creation, modification or deletion of a single ManagedObject.</td>
</tr>
<tr>
<td style="text-align:left">Events</td>
<td style="text-align:left">EventCreated<br>EventUpdated<br>EventDeleted</td>
<td style="text-align:left">CreateEvent<br>UpdateEvent<br>DeleteEvent</td>
<td style="text-align:left">This group of events represents creation or deletion of a single Event.</td>
</tr>
<tr>
<td style="text-align:left">Measurements</td>
<td style="text-align:left">MeasurementCreated<br>MeasurementDeleted</td>
<td style="text-align:left">CreateMeasurement<br>DeleteMeasurement</td>
<td style="text-align:left">This group of events represents creation or deletion of a single Measurement.</td>
</tr>
<tr>
<td style="text-align:left">Device control</td>
<td style="text-align:left">OperationCreated<br>OperationUpdated</td>
<td style="text-align:left">CreateOperation<br>UpdateOperation</td>
<td style="text-align:left">This group of events represents creation or modification of a single Operation.</td>
</tr>
<tr>
<td style="text-align:left">Alarms</td>
<td style="text-align:left">AlarmCreated<br>AlarmUpdated</td>
<td style="text-align:left">CreateAlarm<br>UpdateAlarm</td>
<td style="text-align:left">This group of events represents creation or modification of a single Alarm.</td>
</tr>
<tr>
<td style="text-align:left">Emails</td>
<td style="text-align:left"><em>(not used)</em></td>
<td style="text-align:left">SendEmail<br>SendDashboard</td>
<td style="text-align:left">This group of events represents sending of an email.</td>
</tr>
<tr>
<td style="text-align:left">SMS</td>
<td style="text-align:left"><em>(not used)</em></td>
<td style="text-align:left">SendSms</td>
<td style="text-align:left">This group of events represents sending of a SMS.</td>
</tr>
<tr>
<td style="text-align:left">HTTP</td>
<td style="text-align:left">ResponseReceived</td>
<td style="text-align:left">SendReqeust</td>
<td style="text-align:left">This group of events represents sending http requests to external services.</td>
</tr>
<tr>
<td style="text-align:left">Export</td>
<td style="text-align:left"><em>(not used)</em></td>
<td style="text-align:left">SendExport</td>
<td style="text-align:left">This group of events represents generating emails with exported data.</td>
</tr>
</tbody>
</table>

Look at the data model to see how the events for each stream are structured.

### Creating events in a stream

Creating an event is done by the keywords `insert into` and `select`. First, you need to specify the "insert into" followed by the stream name for which stream you want to create an event. After that you can use the "select" clause to specify the parameters of the event.
A parameter gets specified by the following syntax: `value as parameter`. You can specify multiple parameters by separating them by commas. The order of the parameters does not matter. Please notice that streams can have mandatory parameters you need to specify in the "select" clause.

### Listening to events in a stream

The most common way to trigger the creation of an event in a stream is when something happens on another stream. Therefore you can listen to events from other streams. This is done by the keyword `from` followed by the name of the stream and (optional) followed by a variable name to reference the event in your statement at a later point.
