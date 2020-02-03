---
weight: 10
title: Troubleshooting
layout: redirect
---

When an error message occurs informing you that real-time event processing is currently overloaded and may stop processing your events, this means that the microservice for Apama is either not running or not keeping up with the rate of updates occurring.

If there has been a recent large burst of updates (such as new measurements, especially when a number of large bulk measurement requests are sent), then this can trigger the alarm. If custom EPL applications are generating a large number of outputs or not processing events quickly, this can also lead to the alarm. 

When the alarm is raised, older updates will be discarded. This may affect the behavior of Smart Rules, Analytics Builder models or EPL applications.

There are two ways to get the logs of the Apama microservice:

- Download diagnostics information as described in [Downloading diagnostics and logs](#diagnostics-download).
- In some cases, it is useful to view the log file of the Apama microservice using Cumulocity IoT functionality. See [Managing applications](/users-guide/administration/#managing-applications) in the *User guide* for information on how to view log files.

Contact Software AG Support if needed.



