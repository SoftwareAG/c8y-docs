---
title: Administration
layout: bundle
section:
  - change_log
weight: 10
---


### October 2023


#### Announcement - Removal of deprecated Esper-related features

Removed Esper CEP related features from the UI such as:
- the <b>Event processing</b> page from the Administration application
- the inspect feature from the smart rules menu (rule debug was originally available for Esper only)
Removed Esper CEP related services and modules from the AngularJS Web SDK:
- <code>eventProcessingSvc</code> (<i>@c8y/ng1-modules/administration-eventProcessing/cumulocity.json</i>)
- <code>c8yCepModule</code>, <code>c8yCepModuleExamples</code> (<i>@c8y/ng1-modules/notifications/cumulocity.json</i>) [MTM-49963]


#### Change - Version matrix for packages

The repository-connect microservice now offers to sync packages that include a versioning matrix which allows to filter exactly the versions to be synced. Versions which are not included in the matrix but uploaded to the platform will be removed by the microservice. [MTM-52341]


#### Change - Copy of web applications with versions

It is now possible to copy web applications with versions (packages) and web applications with SHARED availability.
For applications with versions, by default the application with the "latest" tag is copied. The new application has a single version and no tags. If you want to copy different versions of an application, you can specify the query parameters "tag" or "version" (only a single version). For details, refer to the <a href="https://cumulocity.com/api/" class="no-ajaxy">Cumulocity IoT OpenAPI Specification<a/>. [MTM-47717]


#### Change - Improved performance in user hierarchy

Improved the performance of the user hierarchy management by reducing the number of server requests executed when expanding the sub-user list. [MTM-49969]
