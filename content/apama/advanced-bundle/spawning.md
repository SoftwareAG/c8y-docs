---
weight: 60
title: Spawning monitor instances and contexts
layout: redirect
---

While it is possible to handle multiple devices in a single monitor (for example, using `group by` and `partition by` in streams, or maintaining a dictionary keyed on the device ID for other state), it is often useful to separate processing of different devices into separate monitor instances.

New monitor instances can be created using the `spawn` statement. This takes a copy of the monitor's monitor scope variables and runs the named action in a new monitor instance. No listeners are copied into the new monitor. It is also possible to specify a context to spawn the new monitor instance in. Different contexts can run concurrently with each other, and also help isolate different monitors from each other. When constructing a context, supply a name to identify the context, and a boolean to control if the context is public - that is, it receives the {{< product-c8y-iot >}} events by default (sent to the default channel).

This pattern is often used with the unmatched keyword to identify events that are not matched by any other listeners in that context. By using a separate context for each monitor, the unmatched behavior is scoped to that monitor. For example:

```java
monitor PerDeviceMeasurementTracker {
	action onload() {
		spawn factory to context("PerDeviceMeasurementTracker", true);
	}
	action factory() {
		monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
		on all unmatched Measurement() as m {
			spawn perDevice(m);
		}
	}

	dictionary<string, Measurement> latestMeasurementByType; // measurements for this device

	action perDevice(Measurement m) {
		processMeasurement(m);
		on all Measurement(source = m.source) as m {
			processMeasurement(m);
		}
	}
	action processMeasurement(Measurement m) {
		latestMeasurementByType[m.type] := m;
	}
}
```

