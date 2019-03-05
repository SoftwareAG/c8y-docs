---
weight: 5
title: Overview
layout: redirect
---
The auditing interface consists of three parts:

-   The *audit API* resource returns URIs and URI templates to collections of audit records, so that they can be queried by criteria such as "all records from a particular user", or "all records from a particular application".
-   The *audit record collection* resource retrieves audit records and enables creating new audit records.
-   The *audit record* resource represents audit records that are individually queried.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.