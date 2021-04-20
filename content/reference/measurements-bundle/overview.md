---
weight: 5
title: Overview
layout: redirect
---
The measurements interface consists of three parts:

-   The *measurement API* resource returns URIs and URI templates to collections of measurements, so that measurements can be queried according to various filter criteria.
-   The *measurement collection* resource retrieves measurements and enables creating new measurements.
-   The *measurement* resource represents individual measurements that can be queried and deleted.

> For all POST requests an accept header should be provided, otherwise an empty response body will be returned.
