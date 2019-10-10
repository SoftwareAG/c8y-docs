---
weight: 60
title: Troubleshooting
layout: redirect
---

When an error message occurs informing you that real-time event processing is currently overloaded and may stop processing your events, this means that the microservice for Apama is either not running or not keeping up with the rate of updates occurring.

If there has been a recent large burst of updates (such as new measurements, especially when a number of large bulk measurement requests are sent), then this can trigger the alarm. If custom EPL applications are generating a large number of outputs or not processing events quickly, this can also lead to the alarm. 

When the alarm is raised, older updates will be discarded. This may affect the behavior of Smart Rules, Analytics Builder models or EPL applications.

Please review the Apama microservice log file (see [Managing applications](http://localhost:1313/guides/users-guide/administration/#managing-applications) in the *User guide* for more information on log files) and contact support if needed.

