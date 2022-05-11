---
weight: 5
title: Overview
layout: redirect
---
The API below is not yet published in "/platform" but can be reached using the URL "/cep".

The real-time statements interface consists of five parts:

-   The *cep* API resource returns a URI to a module collection.
-   The *module collection* resource retrieves modules and enables creating new modules.
-   The *module* resource represents an individual module that can be queried, modified, deployed or undeployed. 

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.
