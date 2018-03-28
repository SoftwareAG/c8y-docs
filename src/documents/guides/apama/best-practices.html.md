---
order: 50
title: Best practices and guidelines
layout: default
---

## EPL monitors

**Symptom: Your event processing rules are disabled automatically**

If a monitor throws an exception from `onload` or a listener and the exception is not caught, then the monitor will be terminated. Catch exceptions or avoid the reason for them occurring.

Similarly, if a monitor completes processing an event and has no listeners left active, then it cannot be triggered again, and will automatically remove itself.

**Avoid excessive memory usage per monitor:**

Make sure that your event processing rules do not leak listeners. For example, when doing request-response operations, ensure that no listeners are left active after the response is processed, or if a timeout occurs and there is no response.

## Number formats

Cumulocity measurements use the decimal type. When using numeric literals in your code, you must append a "d" character to use as a decimal. Alternatively, convert to float with .toFloat() (or float to decimal with float.toDecimal()). Note that the timestamps are stored as floats (seconds since 1 Jan 1970, 00:00 UTC).