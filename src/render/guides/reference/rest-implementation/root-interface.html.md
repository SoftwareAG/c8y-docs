---
order: 40
title: Root interface
layout: redirect
---

To discover the URIs to the various interfaces of Cumulocity, a "root" interface is provided. This root interface aggregates all the underlying API resources and is available through http://&lt;&lt;yourURL&gt;&gt;.cumulocity.com/platform/". For more information on the different API resources, please consult the respective API sections of this reference guide.

### Platform [application/vnd.com.nsn.cumulocity.platformApi+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URI|1|Link to this Resource|
|inventory|InventoryAPI|1|See [inventory](/guides/reference/inventory) interface.|
|identity|IdentityAPI|1|See [identity](/guides/reference/identity) interface.|
|event|EventAPI|1|See [event](/guides/reference/events) interface.|
|measurement|MeasurementAPI|1|See [measurement](/guides/reference/measurements) interface.|
|audit|AuditAPI|1|See [auditing](/guides/reference/auditing) interface.|
|alarm|AlarmAPI|1|See [alarm](/guides/reference/alarms) interface.|
|user|UserAPI|1|See [user](/guides/reference/users) interface.|
|deviceControl|DeviceControlAPI|1|See [device control](/guides/reference/device-control) interface.|

### GET the Platform resource

Response body: application/vnd.com.nsn.cumulocity.platformApi+json

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.platformApi+json;...
    Content-Length: ...
     
    {
      "self" : "<<URL to the platform API resource>>",
      "event" : {
        "self" : "<<URL to the event API resource>>",
        "events" : { "self" : "<<URL to event collection resource>>" },
        "eventsForSourceAndType" : "<<URL to event collection resource>>?type={type}&source={source}"
        ...
      },
      "inventory" : {
        ...
      },
      ...
    }
