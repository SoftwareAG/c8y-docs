---
weight: 60
title: Troubleshooting
layout: redirect
---

When an error message occurs informing you that real-time event processing is currently overloaded and may stop processing your events, this means that the CEP queue for the respective tenant is full. This may happen, for example, when more events are created than can currently be handled.

In this case, an alarm is raised. To avoid losing incoming new events, the oldest events are deleted, that is, an incoming new event triggers the deletion of the queue head event.

Please contact support in this case.



