---
weight: 12
title: Important announcements
layout: bundle
---

### Core platform

#### Change in measurement validation

Cumulocity IoT has already recommended (and documented) the use of numeric value measurements. However this rule has not been enforced up until now. With the 10.12 release, the numeric values will be enforced, and measurement values of types other than numeric i.e maps, nulls, etc., will no longer be accepted. This means that customers will have to proactively change the measurement values to numeric only to send the correct values. Existing data will not be erased from the storage.

#### Device Management - Removal of groups note

Currently, in the Device Management application, there are two places for adding notes to a group, i.e. either using the notes area or the group data notes field on the **Info** tab of a group. With release 10.10, the first option will be removed from the UI. The old group notes will still be accessible using the REST APIs but won't be displayed anymore within the Device Management UI.

Furthermore, with the introduction of a new group view, the information from the current **Info** and **Subasset** tabs will be combined in order to enhance usability.

#### Web SDK - Font awesome icons replaced by new icons

This change will only affect you if you or your development team use the Web SDK to extend default Cumulocity IoT UI applications (Cockpit, Administration, Device Management) or to build your own web applications.

With release 10.10, "font awesome" icons are replaced by a larger set of icons aligned with the icons used by the Delite Design System from Software AG. The font awesome library will no longer be used in the Cumulocity IoT Web SDK.
All CSS classes with the prefix `fa-**` are now updated to use the `dlt-icon-**` prefix, keeping the icon name unchanged. The c8y-icon directive was also updated to reflect this behavior. `fa-** ` utility classes were also changed and now use a more generic prefix: `icon-**`.

To use these icons, developers are asked to follow the c8y-icon directive.

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
