---
weight: 12
title: Important announcements
layout: bundle
---

### Core platform

#### Change in measurement validation

Cumulocity IoT has already recommended (and documented) the use of numeric value measurements. However this rule has not been enforced up until now. With the 10.12 release, the numeric values will be enforced, and measurement values of types other than numeric i.e maps, nulls, etc., will no longer be accepted. This means that customers will have to proactively change the measurement values to numeric only to send the correct values. Existing data will not be erased from the storage.

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
