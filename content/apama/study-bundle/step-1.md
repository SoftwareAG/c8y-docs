---
weight: 20
title: "Step 1: Filtering the input"
layout: redirect
---

The main input for this module will be events. To discard non-matching events as early as possible, we perform this as the first check in the listener:

```java
monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
on all Event() as e {
	if e.params.hasKey("c8y_Position") {
		// we have an event
	}
}
```
