---
weight: 40
title: Application security
layout: redirect
---

Application security addresses security at the software level.

{{< product-c8y-iot >}} follows standard practices for application-level hardening as making sure that only properly upgraded operating systems and web servers are in use. A number of additional "best practices" are employed to make {{< product-c8y-iot >}} secure by design.

* All functionality of {{< product-c8y-iot >}} is coherently implemented with the same set of publicly documented, sessionless REST APIs. This  means that none of the popular "session stealing" techniques will work with {{< product-c8y-iot >}}.
* {{< product-c8y-iot >}} does not use a SQL database for IoT data storage and is itself not based on a scripting language. This means that so-called "injection attacks" will not work with {{< product-c8y-iot >}}.
* As discussed above, devices are clients at {{< product-c8y-iot >}} and therefore popular attacks to devices will not work.
* Devices are individually connected with {{< product-c8y-iot >}}'s device registration feature. This means that if a device is stolen or tampered with, it can be individually disconnected from {{< product-c8y-iot >}}.
