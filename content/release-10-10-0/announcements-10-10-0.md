---
weight: 12
title: Important announcements
layout: bundle
---

The following deprecations or breaking changes are announced with release 10.10.

### Core platform

#### Change in measurement validation

Cumulocity IoT has already recommended (and documented) the use of numeric value measurements. However this rule has not been enforced up until now. With one of the future releases, the numeric values will be enforced, and measurement values of types other than numeric, for example maps and nulls, will no longer be accepted. This means that customers will have to proactively change the measurement values to numeric-only to send the correct values. Existing data will not be erased from the storage.

#### Device Management - Removal of groups note

Currently, there are two places in the Device Management application for adding notes to a group, i.e. either using the notes area or the group data notes field on the **Info** tab of a group. With release 10.11, the first option will be removed from the UI. The old group notes will still be accessible using the REST APIs but won't be displayed anymore within the Device Management UI.

Furthermore, with the introduction of a new group view, the information from the current **Info** and **Subasset** tabs will be combined in order to enhance usability.

#### Web SDK - Font awesome icons replaced by new icons

>**Info:** This change will only affect you if you or your development team use the Web SDK to extend default Cumulocity IoT UI applications (Cockpit, Administration, Device Management) or to build your own web applications.

With release 10.10, "font awesome" icons are replaced by a larger set of icons aligned with the icons used by the Delite Design System from Software AG. The font awesome library will no longer be used in the Cumulocity IoT Web SDK.
All CSS classes with the prefix `fa-**` are now updated to use the `dlt-icon-**` prefix, keeping the icon name unchanged. The c8y-icon directive was also updated to reflect this behavior. `fa-** ` utility classes were also changed and now use a more generic prefix: `icon-**`.

To use these icons, developers are asked to follow the c8y-icon directive.

#### Re-introducing weak ciphers for MQTT (over TLS) connections

Cumulocity IoT is re-introducing the support for AES-CBC ciphers for MQTT(over TLS) connections.

What does this mean and how does it impact you?

The Cumulocity IoT platform continually improves its security posture by regularly updating support for the latest standards and protocols. With the 10.10 release, we removed support for weak ciphers for MQTT (over TLS) connections. Unfortunately some customers' devices could not upgrade to the stronger ciphers and were therefore unable to connect to the platform. We have therefore reinstated the weaker ciphers in the 10.10 and subsequent releases.

To enable customers with self-hosted or dedicated environments to determine which strength of cipher to support for MQTT over TLS new configurable values have been introduced. This configuration is only available to the Management tenant; further information on how to set this configuration can be found in the *Cumulocity IoT platform - Operations guide*.

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

### Machine learning

* Role-based access control will be introduced in the next release which will mandate assigning users to the Machine Learning Global Roles or User groups to enable them to use Cumulocity IoT Machine Learning.
* The old versions of [Generate time series model](https://cumulocity.com/guides{{< 10-10-0 >}}/machine-learning/api-reference/#post--generate-time-series-model-using-time-series-data) `{{url}}/service/zementis/timeseries` API and [Get time series model generation status](https://cumulocity.com/guides{{< 10-10-0 >}}/machine-learning/api-reference/#get--get-status-of-generation-of-the-time-series-model) `{{url}}/service/zementis/timeseries/{{model_name}}/status` API which were deprecated in 10.7 release will be removed in the next release. However, the new versions `{{url}}/service/zementis/train/timeseries` and `{{url}}/service/zementis/train/timeseries/{{model_name}}/status` will still be in production.
* The `applyToAllModels` query parameter used in [Apply model group](https://cumulocity.com/guides{{< 10-10-0 >}}/machine-learning/api-reference/#post---apply-pmml-model-group-to-multiple-records) and  [Apply model group and show details](https://cumulocity.com/guides{{< 10-10-0 >}}/machine-learning/api-reference/#post---apply-pmml-model-group-to-multiple-records-and-show-details) API was deprecated as part of 10.9 release and will be removed in the next release. This parameter is replaced by `applyAllModels`.
* The `applyToAllModels` field of the [Job Configuration](https://cumulocity.com/guides{{< 10-10-0 >}}/machine-learning/api-reference/#domain-model) type was deprecated as part of 10.9 release and will be removed in the next release. This parameter is replaced by `applyAllModels`.
