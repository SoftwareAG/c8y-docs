---
title: Administration
layout: change_log
section:
  - change_log
weight: 10
---


### December 2023

#### -Change- Package availability

To improve usability, the package availability (SHARED or PRIVATE) can now be set in the package upload wizard. [MTM-51454]


#### -Feature- New filter option

Searching for items has been improved by filtering on applications, features, microservices and extensions lists. [MTM-51331]


#### -Announcement-  Removal of deprecated Esper-related features

Esper-CEP-related features have been removed from the UI such as:

- the **Event processing** page from the Administration application
- the inspect feature from the smart rules menu (rule debug was originally available for Esper only)
Removed Esper CEP related services and modules from the AngularJS Web SDK:
- `eventProcessingSvc` (*@c8y/ng1-modules/administration-eventProcessing/cumulocity.json*)
- `c8yCepModule`, `c8yCepModuleExamples` (*@c8y/ng1-modules/notifications/cumulocity.json*) [MTM-49963]


#### -Feature- Version matrix for packages

The repository-connect microservice now offers to sync packages that include a versioning matrix which allows to filter exactly the versions to be synced. Versions which are not included in the matrix but uploaded to the platform will be removed by the microservice. [MTM-52341]


#### -Feature- Copy of web applications with versions

It is now possible to copy web applications with versions (packages) and web applications with SHARED availability.
For applications with versions, by default the application with the "latest" tag is copied. The new application has a single version and no tags. If you want to copy different versions of an application, you can specify the query parameters "tag" or "version" (only a single version). For details, refer to the [Cumulocity IoT OpenAPI Specification](//cumulocity.com/api/). [MTM-47717]
