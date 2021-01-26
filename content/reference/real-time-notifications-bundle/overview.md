---
weight: 10
title: Overview
layout: redirect
---

This section describes the aspects common to all the real-time notifications services of Cumulocity IoT.

Each service has his own subscription channel name format and URL which are described in section *Notifications* with REST interface documentation. The real-time notifications are available for:

-   [Inventory](/reference/inventory).
-   [Events](/reference/events).
-   [Measurements](/reference/measurements).
-   [Device control](/reference/device-control).
-   [Alarms](/reference/alarms).

The real-time notifications API enables responsive communication from Cumulocity IoT over restricted networks towards clients such as web browser and mobile devices. All clients subscribe to the so-called channels to receive messages. These channels are filled by Cumulocity IoT with the output of [operations](/reference/device-control/#operation). In addition, particular system channels are used for the initial handshake with clients, subscription to channels, removal from channels and connection. The [Bayeux protocol](https://docs.cometd.org/current/reference/#_concepts_bayeux_protocol) over HTTPS or WSS is used as communication mechanism.

Note that when using long-polling, all PUT/POST requests must contain the _Accept_ header, otherwise an empty response body will be returned.

> **Info**: The long-polling interface is designed as a mechanism for custom applications to poll infrequent events from Cumulocity IoT. The long-polling interface is not designed as a mechanism to stream large data volumes (>100kB/sec) or frequent data (>50 events/sec) out of Cumulocity IoT. The usage of long polling is not supported for such use cases.
