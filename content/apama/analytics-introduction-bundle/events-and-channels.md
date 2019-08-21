---
weight: 30
title: Events and channels
layout: redirect
---

In the Apama Event Processing Language, interactions with the rest of the Cumulocity ecosystem is done via events. A number of event definitions is provided for accessing Cumulocity data.

### Predefined event types

There are some predefined event types to interact with several Cumulocity APIs. Events are sent to Apama applications automatically when a new measurement, alarm or event is created. For interacting with the Cumulocity backend, you can create an event and send it to the relevant channel. Cumulocity will automatically execute either the database query or create the API calls necessary for sending mails, SMS, or similar.

Look at the [data model](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-3-1/apama10-3-1/ApamaDoc/com/apama/cumulocity/package-summary.html) to see how the events for each stream are structured.

### Sending events to a channel

Sending an event is done by constructing the event, either with `new <type>` followed by assignments to the fields, or with a constructor specifying all of the fields. The `send` statement is then used to send the event to Cumulocity. The `send` statement requires a channel - this is typically the `CHANNEL` constant (the exceptions being `CREATE_CHANNEL` for Measurement and `UPDATE_CHANNEL` for ManagedObject) on the event type.

### Listening to events

You can trigger your EPL by listening to events on channels. You can subscribe to channels with the monitor.subscribe("string name") method. This can be done in the startup of your monitor, or if you only need to receive events some of the time, called as needed, followed by monitor.unsubscribe("string name"). Listen for events using the `on` statement, followed by the event type that you are listening to, open and close parentheses, and `as <identifier>` to name a variable that will hold the event. By default, a listener will fire once; to make it repeat for all events, use the `all` keyword before the event type.

### Standard event types and channels

For the standard Cumulocity events, there are constants that contain the channels for sending and receiving events, for example:

```java
monitor.subscribe(Measurement.CHANNEL);
send msmnt to Measurement.CREATE_CHANNEL;
```

| Event         | Channel for sending          | Channel for receiving |
| ------------- | ---------------------------- | --------------------- |
| Operation     | Operation.CHANNEL            | Measurement.CHANNEL   |
| Measurement   | Measurement.CREATE_CHANNEL   | Measurement.CHANNEL   |
| Event         | Event.CHANNEL                | Measurement.CHANNEL   |
| Alarm         | Alarm.CHANNEL                | Measurement.CHANNEL   |
| ManagedObject | ManagedObject.UPDATE_CHANNEL | ManagedObject.CHANNEL |

