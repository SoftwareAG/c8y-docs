---
order: 10
title: Overview
layout: redirect
---

Cumulocity employs REST for all external communication. Regardless whether the communication originates from IoT devices, from web applications or from backoffice IT systems — the communication protocol is always REST.

REST is a very simple and secure protocol based on HTTP(S) and TCP. It is today the de-facto Internet standard supported by all networked programming environments ranging from very simple devices up to large-scale IT. One of the many books introducing REST is [RESTful Web Services](http://oreilly.com/catalog/9780596529260).

This guide explains how to use Cumulocity's REST interfaces to

-   Interface devices with Cumulocity.
-   Develop applications on top of Cumulocity.
-   Integrate other cloud services or IT backend applications with Cumulocity.

It first shows you how to use the REST interfaces in general, then discusses [device integration](/guides/rest/device-integration) and finally it describes [application development](/guides/rest/application-development). The description is closely linked to the reference guide, which describes each interface in detail. Relevant chapters in the reference guide are in particular

-   [REST implementation](/guides/reference/rest-implementation) is the reference for all general concepts.
-   [Device management library](/guides/reference/device-management) specifies the data model for device management.
-   [Sensor library](/guides/reference/sensor-library) specifies the data model for sensors and controls.

If you develop using Java ME/SE, JavaScript or C/C++, please check the relevant developer's guides for even more convenient access to Cumulocity's functionality. Also, if you use any of the supported development boards, see the corresponding "Devices" section for more information.