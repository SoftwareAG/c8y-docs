---
title: How is real-time processing implemented?
layout: bundle
weight: 40
---

{{< product-c8y-iot >}} provides several processing modes for API requests:

* **persistent** - Stores data in the {{< product-c8y-iot >}} database and sends data to the real-time engine. Afterwards, {{< product-c8y-iot >}} returns the result of the request. This is the default mode.

* **transient** - Sends data to the real-time engine and immediately returns the results asynchronously but does not store data in {{< product-c8y-iot >}}'s database. This mode saves storage and processing costs and is useful for example when tracking devices in real time without requiring data to be stored.

* **quiescent** - Behaves similar to the persistent mode with the exception that no real-time notifications will be sent. The quiescent processing mode is applicable only for measurements and events.

* **cep** - Behaves like the transient mode with the exception that no real-time notifications are sent. Currently it is applicable only for measurements and events.

![CEP architecture](/images/concepts-guide/realtime.png)

### Example {#example}

Assume that location updates from cars should be monitored every second while the car is driving, but only be stored once a minute into the database for reporting purposes. This is done using the following statement:

	using com.apama.cumulocity.Event;
	using com.apama.cumulocity.Measurement;

	monitor SendEveryMinute {

		dictionary<string, Event> latestUpdates;

		action onload() {

			monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
			on all Event() as e {
				if e.params.hasKey("c8y_LocationUpdate") {
					latestUpdates[e.source] := e;
				}
			}

			on all wait(60.0) {
				Event e;
				for e in latestUpdates.values() {
					send e to Event.SEND_CHANNEL;
				}
				latestUpdates.clear();
			}
		}
	}
