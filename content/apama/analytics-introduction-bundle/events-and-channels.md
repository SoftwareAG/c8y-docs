---
weight: 30
title: Events and channels
layout: redirect
---

In Apama EPL, interactions with the rest of the {{< product-c8y-iot >}} ecosystem are done via events. A number of event definitions is provided for accessing {{< product-c8y-iot >}} data.

{{< c8y-admon-info >}}
Apama and {{< product-c8y-iot >}} use different "event" concepts. Apama events are used for all interactions with {{< product-c8y-iot >}}, such as listening for and creating device measurements, alarms and ({{< product-c8y-iot >}}) events. For more information on Apama events, see [Defining event types]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2FtutorialEventTypes.html) in the Apama documentation. For more information on {{< product-c8y-iot >}} events, see [Events](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Events) in the {{< openapi >}}.
{{< /c8y-admon-info >}}

### Predefined event types

There are some predefined event types to interact with several {{< product-c8y-iot >}} APIs. Events are sent to Apama applications automatically when a new measurement, alarm or event is created. For interacting with the {{< product-c8y-iot >}} backend, you can create an event and send it to the relevant channel. {{< product-c8y-iot >}} will automatically execute either the database query or create the API calls necessary for sending mails, SMS, or similar.

Look at the [data model]({{< link-apamadoc-api >}}com/apama/cumulocity/package-summary.html) in the API Reference for EPL (ApamaDoc) to see how the events for each stream are structured.

### Sending events to a channel

Sending an event is done by constructing the event, either with `new <type>` followed by assignments to the fields, or with a constructor specifying all of the fields. The `send` statement is then used to send the event to {{< product-c8y-iot >}}. The `send` statement requires a channel - this is the `SEND_CHANNEL` constant on the event type.

### Listening to events

You can trigger your EPL by listening to events on channels. You can subscribe to channels with the `monitor.subscribe("string name")` method. This can be done in the startup of your monitor, or if you only need to receive events some of the time, called as needed, followed by `monitor.unsubscribe("string name")`.

Listen for events using the `on` statement, followed by the event type that you are listening to, open and close parentheses, and `as <identifier>` to name a variable that will hold the event.

By default, a listener will fire once; to make it repeat for all events, use the `all` keyword before the event type.

### Filters

Adding filters can be done by specifying one or more fields between the parentheses for a listener. Only top-level fields can be filtered for. Use `if` statements for more complex filtering, or for filtering on subproperties of events (for example, in dictionaries).

### Standard event types and channels

For the standard {{< product-c8y-iot >}} events, there are constants that contain the channels for sending and receiving events, for example:

```java
monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
send msmnt to Measurement.SEND_CHANNEL;
```

The events listed in the following table are part of the `com.apama.cumulocity` package.

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

<a name="notifications"></a>
### Distinguishing between create and update notifications

When listening for `Alarm`, `Event`, `ManagedObject` or `Operation` events from {{< product-c8y-iot >}}, you may want to to distinguish between create and update operations. Each of these event types have actions named `isCreate()` and `isUpdate()` for this purpose.

Example for listening for new alarms:

```java
on all Alarm() as alarm {
    if alarm.isCreate() {
        log "Alarm created: " + alarm.toString() at INFO;
    }
    // else it's an update
}
```

And similarly, only for updated alarms:

```java
on all Alarm() as alarm {
    if alarm.isUpdate() {
        log "Alarm updated: " + alarm.toString() at INFO;
    }
    // else it's a create
}
```

For events that have come from {{< product-c8y-iot >}}, one of `isUpdate()` or `isCreate()` will always return true. Both actions are provided for choice and readability.

For more information, including examples for the different types of objects, see [Receiving update notifications]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_receiving_update_notifications.html) in the Apama documentation.

See also the [API Reference for EPL (ApamaDoc)]({{< link-apamadoc-api >}}/com/apama/cumulocity/package-summary.html) for more information about the `isCreate()` and `isUpdate()` actions.
