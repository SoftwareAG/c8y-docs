---
weight: 100
title: Device statistics
layout: redirect
---

Device statistics are collected for each inventory object with at least one measurement, event or alarm. There are no additional checks if the inventory object is marked as device using *c8y_IsDevice* fragment. Simply when the first measurement, event or alarm is created for a specific inventory object Cumulocity IoT is always considering this as a device and starts counting.

Device statistics are counted with daily and monthy rate. 

All requests are considered when counting device statistics, no matter which processing mode is used.

The following requests are counted:

* alarm creation and update
* event creation and update
* measurement creation
* bulk measurement creation is counted as multiple requests
* bulk alarm status update is counted as multiple requests
* MQTT and SmartREST requests with multiple rows are counted as multiple requests

Frequently asked questions:

* Are operations on device firmware counted?
**No**, device configuration and firmware update operates on inventory objects, thus they are not counted.
* Are requests done by the UI applications, for example when browsing device details, counted?
**No**, viewing device details performs only GET requests which are not counted.
* Is the clear alarm operation done from the UI counted?
**Yes**, a clear alarm operation in fact performs an alarm update operation and it will be counted as device request.
* Is there any operation performed on the device which is counted?
**Yes**, retrieving device logs requires from the device to create an event and attach a binary with logs to it. Those are two separate requests and both are counted.
* When I have a device with children are the requests counted always to the root device or separately for each child?
Separately for each child. 
 

### <a name="device-statistics"></a>DeviceStatistics

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|deviceId|long|1|Device ID.|
|count|long|1|Sum of measurement, event and alarms created and updated for a given device.|

### DeviceStatisticsCollectionRepresentation [application/json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|statistics|array|0..n|List of device statistics, see above.|
|prev|string|0..1|A URI linking to a potential previous page of tenants.|
|next|string|0..1|A URI linking to a potential next page of tenants.|

### GET monthly device statistics

|      Path param        |  Type  | Description |
|:-----------------------|:-------|:------------|
| tenantId               | String | Tenant ID for which device statistics should be loaded. |
| date                   | String | Date in form of YYYY-MM-dd of queried month (day value is ignored). |

|      Query param       |  Type  |
|:-----------------------|:-------|
| deviceId               | String |

Response body: DeviceStatisticsCollectionRepresentation

Required role: ROLE\_TENANT\_STATISTICS\_READ

Example Request: Get statistics of management tenant for June 2020.

    GET /tenant/statistics/device/management/monthly/2020-06-28
    Host: ...
    Authorization: Basic ...

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: ...
    {
        "next": "<<Next_Page_URL>>",
        "self": "<<Collection URL>>",
        "statistics": [
            {
                "count": 11,
                "deviceId": "8708"
            },
            {
                "count": 13,
                "deviceId": "13000"
            },
            {
                "count": 15,
                "deviceId": "13201"
            },
            {
                "count": 10,
                "deviceId": "6902"
            }
        ]
    }
    
### GET daily device statistics

|      Path param        |  Type  | Description |
|:-----------------------|:-------|:------------|
| tenantId               | String | Tenant ID for which device statistics should be loaded. |
| date                   | String | Date in form of YYYY-MM-dd of queried day. |

|      Query param       |  Type  |
|:-----------------------|:-------|
| deviceId               | String |

Response body: DeviceStatisticsCollectionRepresentation

Required role: ROLE\_TENANT\_STATISTICS\_READ

Example Request: Get statistics of management tenant for 28th of June 2020.
    
    GET /tenant/statistics/device/management/daily/2020-06-28
    Host: ...
    Authorization: Basic ...

Example Response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: ...
    {
        "next": "<<Next_Page_URL>>",
        "self": "<<Collection URL>>",
        "statistics": [
            {
                "count": 11,
                "deviceId": "8708"
            },
            {
                "count": 13,
                "deviceId": "13000"
            },
            {
                "count": 15,
                "deviceId": "13201"
            },
            {
                "count": 10,
                "deviceId": "6902"
            }
        ]
    }