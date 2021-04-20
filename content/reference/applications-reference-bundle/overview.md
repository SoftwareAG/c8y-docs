---
weight: 5
title: Overview
layout: redirect
---
The API below is not published in "/platform" but can be reached using "/application".

The application interface consists of the following parts:

-   The *application API* resource returns URIs and URI templates to collections of applications, so that all applications with a particular name and all applications owned by particular tenant can be queried.
-   The *application collection* resource retrieves sets of applications and enables creating new applications.
-   The *application* resource represents applications that can be queried and deleted.
-   The *application bootstrap user* resource retrieves bootstrap user credentials for microservice.
-   The *current application* resource provides data of authenticated microservice user's application. 
-   The *application user collection* resource represents a collection of subscription entries.
-   The *application user* resource represents a single subscription entry.
-   The *current application subscription* provides an endpoint for accessing current application subscriptions.
-   The *application binaries* provides an endpoint for uploading a deployable microservice or web application.

> **Info**: For all PUT/POST requests an accept header should be provided, otherwise an empty response body will be returned.
