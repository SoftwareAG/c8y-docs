---
weight: 50
title: Troubleshooting
layout: redirect
---

**Error message**

	Real-time event processing is currently overloaded and may stop processing your events. Please contact [product support](/about-doc/contacting-support).

**Description**

The CEP queue for the respective tenant is full. This might for example happen when more events are created than currently can be handled.

In this case, an alarm will be raised. To avoid losing incoming new events, the oldest events will be deleted, i.e. an incoming new event triggers the deletion of the queue head event.
