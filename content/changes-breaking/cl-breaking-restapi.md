---
title: Rest API
layout: bundle
section:
  - change_log
weight: 20
---

### October 2023

#### Implemented: Breaking change in the Alarms, Events, Measurements APIs - introduced required parameters

As announced earlier, see also [release 10.17](/release-10-17-0/announcements-10-17-0), at least one query parameter limiting the affected data will now be required to prevent accidental deletion of too many objects during a bulk delete operation.
This change affects the following APIs:

* `DELETE /alarm/alarms` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /event/events` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`, `createdFrom`, `createdTo`
* `DELETE /measurements/measurement` requires at least one of the following parameters: `source`, `dateFrom`, `dateTo`
