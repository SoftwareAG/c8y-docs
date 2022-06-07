---
weight: 100
title: Storage quota
layout: redirect
aliases:
  - /users-guide/enterprise-edition/#storage-quota
---


The storage quota is in place for a tenant when a storage quota per device is set by the platform administrator. The total storage available to the user is calculated using the formula `storage quota per device x number of devices`. A check is performed every night to ensure the quota is not exceeded.

In case the quota is exceeded, an email is sent to all tenant administrators to warn them that data will be deleted the following night. After 24h, if the quota is still exceeded, all data retention limits are reduced by a fixed percentage. The storage quota per device will be reduced as a result of this rule.

{{< c8y-admon-info >}}
The storage quota feature needs to be defined on the tenant and cannot be enabled/disabled by configuration.
{{< /c8y-admon-info >}}

#### Example

Let us assume that a tenant has a storage quota of 10 GB. Retention rules are 80 days for measurements, 90 days for all other data.

 - Day 1: In the nightly check, the total storage is calculated at 13 GB. An email is sent to all tenant administrators.

 - Day 2: the total storage is still at 13 GB. The system determines that a 15% reduction of the retention rules is sufficient to be under the storage quota. So any measurement older than 68 days (80 days - 15%) and any other data older that 77 days (90 days - 15% results in 76.5 days, rounded to 77 days) is deleted.

The total storage is now at 9.8 GB.


<a name="warningEmail"></a>
### Managing storage quota warning email

This feature is only visible if a storage quota was set for the tenant.

The tenant administrators can set a user group (global role) and threshold for an email to be sent once a day if the storage used is higher than a particular percentage of the storage quota. The default setup is sending an email to the "admin" role when the storage reaches 80% of maximum storage.

The email warning can also be disabled.
