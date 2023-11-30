---
title: Rest API
layout: change_log
section:
  - change_log
weight: 20
---

### December 2023

#### -Announcement-  Introduced required parameters in the Alarms, Events, Measurements APIs

As announced earlier, see also [release 10.17](https://cumulocity.com/releasenotes/release-10-17-0/announcements-10-17-0), at least one query parameter limiting the affected data will now be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:

* `DELETE /alarm/alarms` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /event/events` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /measurements/measurement` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`


#### -Announcement-  Planned: Change in full text search feature of Inventory API

As of a future version, the full text search functionality will only include the following properties:
* `_id`
* `name`
* `type`
* `owner`
* `external id`

A text search functionality corresponds to a `text` parameter of `GET {url}/inventory/managedObjects`.

Example:
When executing the following query: `GET {url}/inventory/managedObjects?text=c8y_MajorDevice` only the properties `id`, `name`, `type`, `owner` and `external id` will be examined.

This change improves the user experience of the text search functionality by returning more relevant managed objects.
At the same time it improves the Inventory API performance.

This change will be implemented after a 3-month period at the earliest.
