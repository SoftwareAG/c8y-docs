---
weight: 5
title: Overview
layout: redirect
---
The alarms interface consists of three parts:

-   The *alarm API* resource returns URIs and URI templates to collections of alarms, so that all alarms or alarms of a specified source device and/or status can be retrieved.
-   The *alarm collection* resource retrieves alarms and enables creating new alarms.
-   The *alarm* resource represents individual alarms that can be queried, modified and progressed through an alarm workflow.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

