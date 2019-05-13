---
weight: 5
title: Overview
layout: redirect
---
The events interface consists of three parts:

-   The *event API* resource returns URIs and URI templates to collections of events, so that all events or events of a specified type and/or a specific source device can be retrieved.
-   The *event collection* resource retrieves events and enables creating new events.
-   The *event* resource represents individual events that can be queried and deleted.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.
