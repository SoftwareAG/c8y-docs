---
weight: 20
title: Event streams
layout: redirect
---

In the Cumulocity Event Language data flows in streams. You can create events in streams and listen to events created in streams.

### Predefined streams

There are some predefined streams to interact with several Cumulocity APIs. For each input stream, Cumulocity will automatically create a new event when the respective API call was made. If a measurement was created via REST API there will be a new event in the MeasurementCreated stream.
For interacting with the Cumulocity backend you can create an event on the respective output stream and Cumulocity will automatically execute either the database query or create the API calls necessary for sending mails, sms, or similar. To create a new alarm in the database you can create a new event in the CreateAlarm stream.

|API|Input streams|Output streams|Description|
|:--|:----------|:-------------|:----------|
|Inventory|ManagedObjectCreated<br/>ManagedObjectUpdated<br/>ManagedObjectDeleted|CreateManagedObject<br/>UpdateManagedObject<br/>DeleteManagedObject|This group of events represents creation, modification or deletion of a single ManagedObject.|
|Events|EventCreated<br/>EventUpdated<br/>EventDeleted|CreateEvent<br/>UpdateEvent<br/>DeleteEvent|This group of events represents creation or deletion of a single Event.|
|Measurements|MeasurementCreated<br/>MeasurementDeleted|CreateMeasurement<br/>DeleteMeasurement|This group of events represents creation or deletion of a single Measurement.|
|Device control|OperationCreated<br/>OperationUpdated|CreateOperation<br/>UpdateOperation|This group of events represents creation or modification of a single Operation.|
|Alarms|AlarmCreated<br/>AlarmUpdated|CreateAlarm<br/>UpdateAlarm|This group of events represents creation or modification of a single Alarm.|
|Emails|*(not used)*|SendEmail<br/>SendDashboard|This group of events represents sending of an email.|
|SMS|*(not used)*|SendSms|This group of events represents sending of a SMS.|
|HTTP|ResponseReceived|SendReqeust|This group of events represents sending http requests to external services.|
|Export|*(not used)*|SendExport|This group of events represents generating emails with exported data.

Look at the data model to see how the events for each stream are structured.

### Creating events in a stream

Creating an event is done by the keywords `insert into` and `select`. First, you need to specify the "insert into" followed by the stream name for which stream you want to create an event. After that you can use the "select" clause to specify the parameters of the event.
A parameter gets specified by the following syntax: `value as parameter`. You can specify multiple parameters by separating them by commas. The order of the parameters does not matter. Please notice that streams can have mandatory parameters you need to specify in the "select" clause.

### Listening to events in a stream

The most common way to trigger the creation of an event in a stream is when something happens on another stream. Therefore you can listen to events from other streams. This is done by the keyword `from` followed by the name of the stream and (optional) followed by a variable name to reference the event in your statement at a later point.