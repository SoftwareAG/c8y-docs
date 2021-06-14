---
weight: 12
title: Important announcements
layout: bundle
---

### Streaming Analytics

#### Change in tenant options

From the 10.10 GA release, the `apama` category of the tenant options is deprecated. Instead the `streaminganalytics` category is being used.
The Apama-ctrl microservice previously restarted if a change was detected in the `apama` category. This will no longer happen.
Instead, automatic restarts will happen for the `streaminganalytics` category.
The behavior of options in the `analytics.builder` category is unchanged.

#### Cumulocity IoT transport in Apama

The `GenericResponse.body` member is now deprecated and will be removed in a future release.
It is recommended that you now use the `GenericResponse.getBody` action instead.
See the `com.apama.cumulocity` package in the [API Reference for EPL (ApamaDoc)](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/ApamaDoc/index.html)
for more information on the `GenericResponse` event.
