---
weight: 10
title: Overview
layout: redirect
---

The Connectivity agent, which works from within the Cumulocity IoT Device Management application, provides basic information on mobile devices and additional connectivity details.

Cumulocity IoT integrates with the SIM connectivity management platform Jasper. For the SIM connectivity management platforms Comarch and Ericsson, Cumulocity IoT provides an experimental implementation. For more details, please contact our support team.

The following features are supported by these providers:

|Feature|Jasper|Ericsson|Comarch|
|:------|:-----|:-------|:------|
|Check the status of the SIM card in the device|x|x|x|
|Check the online status of the device as reported by the network|x|x|x|
|Change SIM card status, for example activate or deactivate it|x|x|x|
|Disconnect SIM card from current session| | |x|
|Communicate with the device through text messages, for example, to set APN parameters|x| |x|
|View summary usage of data traffic, text messages and voice calls|x|x|x|
|View usage details of data traffic, text messages and voice calls|x|x| |
|View the history of data sessions and any changes to the SIM card or traffic|x| |&nbsp;|

As you can see, Jasper currently is the most feature-rich provider.

The following description is primarily based on Jasper, but the same configuration and usage also applies to the other providers. If there are any differences, they will be stated explicitly.

<img src="/images/device-protocols-guide/SIM-connectivity/SIM-connectivity-jasperarchitecture.png" alt="Jasper architecture">

The following sections describe:

* How to [set up your Jasper Control Center account](#link-account) (examplarily).
* How to configure the [connectivity](#configuration) to the SIM provider in your Cumulocity IoT tenant.
* How to [link SIMs](#linking-sims) and mobile devices.
* Which information is shown in the [Connectivity tab](#connectivity-tab).
* How to [manage connectivity](#checking-connectivity) from Device Management.
