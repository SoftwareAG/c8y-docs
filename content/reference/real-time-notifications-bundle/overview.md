---
weight: 10
title: Overview
layout: redirect
---

This section describes the aspects common to all the real-time notifications services of Cumulocity.

Each service has his own subscription channel name format and URL which are described in section *Notifications* with REST interface documentation. The real-time notifications are available for:

-   [Real-time statements](/guides/reference/real-time-statements#notifications).
-   [Inventory](/guides/reference/inventory).
-   [Events](/guides/reference/events).
-   [Measurements](/guides/reference/measurements).
-   [Device control](/guides/reference/device-control).
-   [Alarms](/guides/reference/alarms).

The real-time notifications API enables responsive communication from Cumulocity over restricted networks towards clients such as web browser and mobile devices. Clients subscribe to so-called channels to receive messages. These channels are filled by Cumulocity with the output of [real-time statements](/guides/reference/real-time-statements) or newly created [operations](/guides/reference/device-control). In addition, particular system channels are used for initial handshake with clients, subscription to channels, removal from channels and connection. As communication mechanism, the [Bayeux protocol](https://docs.cometd.org/current/reference/#_concepts_bayeux_protocol) over HTTPS or WSS is used.

Note that when using long-polling, all PUT/POST requests Accept header should be provided, otherwise an empty response body will be returned.

> **Info**: The long-polling interface is designed as a mechanism for custom applications to poll infrequent events from Cumulocity. The long-polling interface is not designed as a mechanism to stream large data volumes (>100kB/sec) or frequent data (>50 events/sec) out of Cumulocity. The usage of long polling is not supported for such use cases.
