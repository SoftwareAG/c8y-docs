---
weight: 10
title: EPL monitors
layout: redirect
---

**Symptom: Your event processing rules are disabled automatically**

If a monitor throws an exception from `onload` or a listener and the exception is not caught, then the monitor will be terminated. Catch exceptions or avoid the reason for them occurring.

Similarly, if a monitor completes processing an event and has no listeners left active, then it cannot be triggered again, and will automatically remove itself.

**Avoid excessive memory usage per monitor**

Make sure that your event processing rules do not leak listeners. For example, when doing request-response operations, ensure that no listeners are left active after the response is processed, or if a timeout occurs and there is no response.