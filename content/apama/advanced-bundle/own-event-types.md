---
weight: 30
title: Creating own event types
layout: redirect
---

As well as the predefined event types, you can define your own event types. These can be useful to detect patterns of events occurring which trigger other parts of the same module.

```java
event MyEvent {
	Measurement m1;
	Measurement m2;
}

...

on Measurement() as m1 -> Measurement() as m2 {
	route MyEvent(m1, m2);
}
```

>**Info:** Cumulocity IoT deploys each module into its own namespace, so event definitions from one module cannot be used in other modules. This prevents dependencies between modules.
