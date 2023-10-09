---
title: RestAPI
layout: change_log
section:
  - change_log
weight: 50
---


### October 2023

#### -Announcement- Change in full text search feature of Inventory API

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

#### -Preview- Latest measurement values can be stored as part of a device managed object

{{< c8y-admon-preview >}}
The feature is in Public Preview mode, that is, it is not enabled by default and maybe subject to change in the future.
{{< /c8y-admon-preview >}}

Starting from this release we introduce the support of automated persistence of measurement values under the `c8y_LatestMeasurements` fragment.

##### How to enable it

Use the tenant options to create a category named `measurement.series.latestvalue` with a PUT request to a [tenant options category](https://cumulocity.com/api/core/#operation/putCategoryOptionResource).
Example:
```
PUT /tenant/options/measurement.series.latestvalue
{
  "c8y_Humidity.H":"", // to enable single series c8y_Humidity.H
  "c8y_Temperature.*":"", // to able series under fragment c8y_Temperature
  // or "*":"" to enable all
}
```
where the key is a filter of measurement series that must be persistent and its value must always be an empty string (left for a future use case).

##### How it works

If a measurement is created with a series that matches the configuration the device managed object
is updated with the last series sent to the platform.
Example:

If you send
```
POST /measurement/measurements
{
  "source":"5413"
  "time":"2024-02-01T10:00:00Z"
  "c8y_Temperature":{
     "T": {
        "value": 15,
        "unit":"C"
     }
  }
  "c8y_Speed":{
    "S": {
      "value": 15,
      "unit":"m/s"
    }
  }
}
```
then,  considering the example configuration, only `c8y_Temperature.T` is stored as part of the device, while `c8y_Speed.S` is ignored.
This means, that the measurement is stored like before, only the state update is skipped.
To read the latest values on device level you must use the Inventory API.
To get a single device:
```
GET /inventory/managedObjects/5413?withLatestValues=true
{
   ...
   "c8y_LatestMeasurements":{
        "c8y_Temperature":{
           "T":{
             "value":15,
             "time":"2024-02-01T10:00:00Z",
             "unit":"C"
           }
        }
   }
}

```
To get a list of devices matching the expected criteria,
for example, get all devices which have a reported temperature higher than 10 degrees:

```
GET /inventory/managedObjects?withLatestValues=true&query=$filter=c8y_LatestMeasurements.c8y_Temperature.T.value+gt+10
{
  managedObjects: [
    {
        ...
        "c8y_LatestMeasurements":{
            "c8y_Temperature":{
                "T":{
                    "value":15,
                    "time":"2024-02-01T10:00:00Z",
                    "unit":"C"
                }
            }
        }
    }
  ]
}

```
##### Implications & Precondition

This feature introduces an additional operation upon measurement creation.
This results in performance degradation, depending on the number of series to be
stored in each measurement, reaching from 5% for single series in each measurement to
more than 20% in case of 50 series per measurement. Such drawback applies if the text index is disabled. In other cases,
the performance degradation can be much higher, up to more than 100%. Therefore
**disabling the text index is considered as a precondition**.

##### Limitations

**Security**

The latest measurement values are part of the managed object and they follow the managed object inventory role permissions instead of respecting the inventory roles for measurements.

**Data model**

The latest measurements do not store the measurement type. This information
can be obtained using the Measurements API.

**Last value**

The value stored in the device managed object is the last value sent to the platform.
If the order of measurement delivery to the platform is different from the measurement creation time
then also that latest values will be affected.

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

The performance of GET requests on the <code>/user/users</code> endpoint has been improved by better utilization of database indexes. [MTM-52566]

#### -Change-  Improved performance of the Inventory API

- The performance of the Inventory API has been improved by removing an additional request to the database. [MTM-50840]
- The performance of the Inventory API has been improved by removing two additional database queries for GET <code>/managedObjects</code>. [MTM-51973]
