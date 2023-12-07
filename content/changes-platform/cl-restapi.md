---
title: RestAPI
layout: change_log
section:
  - change_log
weight: 50
---


### December 2023

#### -Change-  New sorting of Inventory API queries

If users do a search from the UI or via the Inventory API, the text parameters are now sorted by relevance making it easier to see the more appropriate data returned. [MTM-54563]

#### -Change-  New text index

A new text index has been introduced for the GET <code>/inventory/managedObjects</code> endpoint. By default it only includes the following fields:

<code>_id</code>, <code>type</code>, <code>name</code>, <code>owner</code>, <code>externalIds</code> [MTM-54562]

#### -Announcement- Change in full text search feature of Inventory API

Starting from a future version, the full text search functionality will only include the following properties:
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

#### -Preview- Latest measurement values can be stored as part of a device managed object

{{< c8y-admon-preview >}}
This feature is in Public Preview, that is, it is not enabled by default and maybe subject to change in the future.
{{< /c8y-admon-preview >}}

Support of automated persistence of measurement values under the `c8y_LatestMeasurements` fragment has been introduced. If a measurement is created with a series that matches the configuration the device managed object is updated with the last series sent to the platform.

For details on how this feature is enabled and how it works, refer to the [{{< openapi >}}](https://www.cumulocity.com/api/).

#### -Change-  Extended ExplainQuery result

The ExplainQuery result info has been extended by the algorithm used when performing queries for a user with inventory roles:

<code>GET {{url}}/inventory/hierarchy/info/management</code>  

Example: <code>{"algorithm": "Legacy" }</code>

Possible results: <code>Legacy, LimitedSourcesAcl, PostFilteringBySourceAcl, SingleSourceAcl, HierarchyAcl, SingleAgentAcl, SingleDeviceAcl, SingleAgentAndDeviceAcl</code> [MTM-52350]


#### -Change-  Alarm status and severity now case-insensitive

The alarm status and severity are now case-insensitive. When searching by alarm status <code>active</code> the API also returns alarms with status <code>ACTIVE</code>. The same applies for the alarm severity, that is, searching for <code>critical</code> alarms also returns <code>CRITICAL</code> alarms. Alarms with status <code>active</code> and <code>acknowledged</code> are now subject of alarm deduplication. [MTM-52515]


#### -Change-  Search for fields with null values now possible

The query language used by the managed objects API has been improved. You can now search for fields with null values. [MTM-52677]


#### -Change-  Improved performance of GET requests on /user/users

The performance of GET requests on the <code>/user/users</code> endpoint has been improved. [MTM-52566]

#### -Change-  Improved performance of the Inventory API

- The Inventory API performance has been improved.[MTM-50840]
- The performance of the Inventory API GET <code>/managedObjects</code> has been improved. [MTM-51973]
