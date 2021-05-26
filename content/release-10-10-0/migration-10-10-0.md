---
weight: 12
title: Migration notes
layout: bundle
---

### Streaming Analytics

#### Change in tenant options

From the 10.10 GA release, the `apama` category of the tenant options is deprecated. Instead the `streaminganalytics` category is being used. 
The Apama-ctrl microservice previously restarted if a change was detected in the `apama` category. This will no longer happen. 
Instead, automatic restarts will happen for the `streaminganalytics` category. 
The behavior of options in the `analytics.builder` category is unchanged.