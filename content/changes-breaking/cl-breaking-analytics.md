---
title: Streaming Analytics
layout: change_log
section:
  - change_log
weight: 30
---

### December 2023

#### -Announcement- Removal of Machine Learning

As announced with [release 10.16](/release-10-16-0/announcements-10-16-0), the **Machine Learning** block in Analytics Builder has been removed.
This is in line with the deprecation of [Machine Learning Engine](/release-10-16-0/announcements-10-16-0/#machine-learning-deprecation) announced in release 10.16.

#### -Announcement- Enhanced Cumulocity IoT transport in Apama 10.15.4 to reflect changes in REST API

Due to a change in Cumulocity IoT announced with [release 10.17](/release-10-17-0/announcements-10-17-0), Apama 10.15.4 now explicitly sets `withTotalPages` to `true` for applicable requests.

Range-based queries (such as `FindManagedObject`) attempt to retrieve all resources matching the query parameters by default. Explicitly setting a value for `currentPage` or setting `withTotalPages` to false can improve the query performance by disabling paging. See the information on REST usage and query result paging in the [Cumulocity IoT OpenAPI Specifications](https://cumulocity.com/api/core/#section/REST-implementation/REST-usage) for more information.
