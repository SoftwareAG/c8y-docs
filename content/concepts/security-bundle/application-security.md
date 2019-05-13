---
weight: 40
title: Application security aspects
layout: redirect
---

Application security addresses security at the software level.

Cumulocity follows standard practices for application-level hardening as making sure that only properly upgraded operating systems and web servers are in use. A number of additional "best practices" are employed to make Cumulocity secure by design. 

* All functionality of Cumulocity is coherently implemented with the same set of publicly documented, sessionless REST APIs. This  means that none of the popular "session stealing" techniques will work with Cumulocity.
* Cumulocity does not use a SQL database for IoT data storage and is itself not based on a scripting language. This means that so-called "injection attacks" will not work with Cumulocity.
* As discussed above, devices are clients at Cumulocity and therefore popular attacks to devices will not work.
* Devices are individually connected with Cumulocity's device registration feature. This means that if a device is stolen or tampered with, it can be individually disconnected from Cumulocity.