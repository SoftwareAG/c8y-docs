---
weight: 30
title: Subscribing to channels and contexts
layout: redirect
---

A context is a parallel processing unit within Apama. Monitor instances can be deployed to multiple contexts using the `spawn...to` syntax. When subscribing to a channel, all monitor instances within a context will receive events for that subscription. So it is recommended practice to put different subscriptions in different contexts. The use of contexts can prevent part of the application being overloaded from affecting other parts of the application.

Contexts are created with a user-friendly name, and each individual instance of the context object corresponds to different contexts, even if they have the same name.

For example: 

```java
action onload() {
   context subContext := context("Worker");
   spawn worker() to subContext;
}
action worker() {
   monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
   on all Measurement() as m {
      ...
   }
}  
```
