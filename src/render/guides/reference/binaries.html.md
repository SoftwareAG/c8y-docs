---
order: 170
title: Binaries
layout: subsections
collection: 'guides/reference/binaries'
---

The inventory has the possibility to store binaries also the API below is not published in "/inventory".

The binaries interface consists of the following parts:

-   The *binaries collection* resource retrieves sets with information about uploaded binaries and enables uploading new binaries.
-   The *binaries* resource represents binaries that can be downloaded, updated or deleted.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.