---
weight: 40
title: Application security
layout: redirect
---

Application security addresses security at the software level.

Cumulocity IoT follows standard practices for application-level hardening as making sure that only properly upgraded operating systems and web servers are in use. A number of additional "best practices" are employed to make Cumulocity IoT secure by design. 

* All functionality of Cumulocity IoT is coherently implemented with the same set of publicly documented, sessionless REST APIs. This  means that none of the popular "session stealing" techniques will work with Cumulocity IoT.
* Cumulocity IoT does not use a SQL database for IoT data storage and is itself not based on a scripting language. This means that so-called "injection attacks" will not work with Cumulocity IoT.
* As discussed above, devices are clients at Cumulocity IoT and therefore popular attacks to devices will not work.
* Devices are individually connected with Cumulocity IoT's device registration feature. This means that if a device is stolen or tampered with, it can be individually disconnected from Cumulocity IoT.