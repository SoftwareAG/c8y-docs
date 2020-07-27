---
weight: 30
title: Events and channels
layout: redirect
---

In Apama EPL, interactions with the rest of the Cumulocity IoT ecosystem are done via events. A number of event definitions is provided for accessing Cumulocity IoT data.

> **Info:** Apama and Cumulocity IoT use different "event" concepts. Apama events are used for all interactions with Cumulocity IoT, such as listening for and creating device measurements, alarms and (Cumulocity IoT) events. For more information on Apama events, see [Defining event types](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/apama-webhelp/index.html#page/apama-webhelp%2FtutorialEventTypes.html) in the Apama documentation. For more information on Cumulocity IoT events, see [Events](/reference/events/) in the *Reference Guide*. 

### Predefined event types

There are some predefined event types to interact with several Cumulocity IoT APIs. Events are sent to Apama applications automatically when a new measurement, alarm or event is created. For interacting with the Cumulocity IoT backend, you can create an event and send it to the relevant channel. Cumulocity IoT will automatically execute either the database query or create the API calls necessary for sending mails, SMS, or similar.

Look at the [data model](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/ApamaDoc/com/apama/cumulocity/package-summary.html) in the API Reference for EPL (ApamaDoc) to see how the events for each stream are structured.

### Sending events to a channel

Sending an event is done by constructing the event, either with `new <type>` followed by assignments to the fields, or with a constructor specifying all of the fields. The `send` statement is then used to send the event to Cumulocity IoT. The `send` statement requires a channel - this is the `SEND_CHANNEL` constant on the event type.

### Listening to events

You can trigger your EPL by listening to events on channels. You can subscribe to channels with the `monitor.subscribe("string name")` method. This can be done in the startup of your monitor, or if you only need to receive events some of the time, called as needed, followed by `monitor.unsubscribe("string name")`. 

Listen for events using the `on` statement, followed by the event type that you are listening to, open and close parentheses, and `as <identifier>` to name a variable that will hold the event. 

By default, a listener will fire once; to make it repeat for all events, use the `all` keyword before the event type.

### Filters

Adding filters can be done by specifying one or more fields between the parentheses for a listener. Only top-level fields can be filtered for. Use `if` statements for more complex filtering, or for filtering on sub-properties of events (for example, in dictionaries).

### Standard event types and channels

For the standard Cumulocity IoT events, there are constants that contain the channels for sending and receiving events, for example:

```java
monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
send msmnt to Measurement.SEND_CHANNEL;
```


| Event               | Channel for sending              | Channel for receiving                 |
| ------------------- | -------------------------------- | ------------------------------------- |
| Operation           | Operation.SEND_CHANNEL           | Operation.SUBSCRIBE_CHANNEL           |
| Measurement         | Measurement.SEND_CHANNEL         | Measurement.SUBSCRIBE_CHANNEL         |
| Event               | Event.SEND_CHANNEL               | Event.SUBSCRIBE_CHANNEL               |
| Alarm               | Alarm.SEND_CHANNEL               | Alarm.SUBSCRIBE_CHANNEL               |
| ManagedObject       | ManagedObject.SEND_CHANNEL       | ManagedObject.SUBSCRIBE_CHANNEL       |
| MeasurementFragment | MeasurementFragment.SEND_CHANNEL | MeasurementFragment.SUBSCRIBE_CHANNEL |

### Measurement fragments

`Measurement` and `MeasurementFragment` events are always published. 

You can generate listeners in EPL that will match on the contents of `MeasurementFragment` events rather than `Measurement` events. For example:

```
on all MeasurementFragment(type="c8y_SpeedMeasurement", valueFragment = "c8y_speed", valueSeries = "speedX", value > SPEED_LIMIT) as mf {
}
```

See also [Measurement fragments](/apama/advanced/#measurement-fragments).

### <a name="notifications"></a>Distinguishing between create and update notifications 

You can use the `NOTIFICATION_CREATED` and `NOTIFICATION_UPDATED` values of the `PARAM_NOTIFICATION` constant to distinguish whether a managed object, operation, alarm or event has been created or updated. 

See [Receiving update notifications](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_receiving_update_notifications.html) in the Apama documentation for detailed information, including examples for the different types of objects.