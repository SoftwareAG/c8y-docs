---
title: Streaming Analytics
layout: change_log
section:
  - change_log
weight: 30
---

### October 2023

#### -Announcement- Cumulocity IoT transport in Apama 10.15.4 - breaking change in REST APIs

Due to a change in Cumulocity IoT announced with [release 10.17](/release-10-17-0/announcements-10-17-0), Apama 10.15.4 now explicitly sets `withTotalPages` to `true` for applicable requests.

#### -Announcement- Updated events in com.apama.cumulocity in Apama 10.15.4

To avoid confusion as to whether events were being sent towards Cumulocity IoT or being received back as updates from Cumulocity IoT, the Cumulocity event definitions API was changed in a previous release (10.5.2.0) so that the existing `CHANNEL` constant was deprecated and replaced by either `SEND_CHANNEL` or `SUBSCRIBE_CHANNEL` constants as appropriate. Some events were omitted from these changes and this has now been rectified. Therefore, the `CHANNEL` constant is deprecated on the following events:

* `SubscribeMeasurements`
* `UnsubscribeMeasurements`
* `FindManagedObjectResponseAck`
* `FindMeasurementResponseAck`
* `GenericResponseComplete`
* `Subscribe`
* `Unsubscribe`

In addition, a new `SUBSCRIBE_CHANNEL` or `SEND_CHANNEL` has been added to the following events instead:

* `SubscribeMeasurements`
* `UnsubscribeMeasurements`
* `Subscribe`
* `Unsubscribe`

The constants on the following events are instead replaced with `SUBSCRIBE_CHANNEL` constants on their corresponding `Response` types:

* `FindManagedObjectResponseAck`
* `FindMeasurementResponseAck`
* `GenericResponseComplete`

The [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/pam/10.15.4/en/webhelp/related/ApamaDoc/index.html) has been amended to make it clear that acknowledgement events are always received on the same channel as the corresponding response events, and to avoid confusion the `CHANNEL` constant has been deprecated on those acknowledgement events where it had been defined.

#### -Announcement- Handling uncaught exceptions in Apama 10.15.4

EPL monitors are no longer terminated by default when an uncaught exception is thrown in some cases.

Programming errors and unexpected data in incoming events can cause an uncaught exception in EPL. This causes the monitor instance to be terminated, rendering the application unusable. To provide a better experience, exceptions thrown from listeners and stream listeners which are not caught no longer terminate the monitor instance. Instead, they just stop the handling of the current event.

Developers are still encouraged to correctly catch and handle the exceptions in their EPL. If an exception is thrown and not caught, it is still possible for the events to be lost and not correctly handled.

This is a change in behavior. Some users may be relying on this previous behavior, in combination with an `ondie()` action. EPL with an `ondie()` action retains the previous behavior of always terminating the monitor and calling `ondie()`. If you need to retain the previous behavior, you can add an empty `ondie()` action to your monitor.

{{< c8y-admon-info >}}
If you have an action that is called from within a stream query (for example, as part of a `where` or `group by` clause, or a window definition) which throws an exception, this still terminates the monitor instance.
{{< /c8y-admon-info >}}
