---
weight: 5
title: Overview
layout: redirect
---
The identity interface associates identifiers used in external IT systems and devices with unique identifiers used in Cumulocity IoT. It consists of three parts:

-   The *identity API* resource returns URIs and URI templates for associating external identifiers with unique identifiers.
-   The *external ID collection* resource contains the set of external IDs for a unique ID.
-   The *external ID* resource represents an individual external ID that can be queried and deleted.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.
