---
weight: 180
title: Services
layout: redirect
---

The {{< product-c8y-iot >}} UI allows you to monitor software services running on a device. The services are represented
in {{< product-c8y-iot >}} domain model as the device managed object child additions with `c8y_Service` type.

The **Device details** page shows a **Services** tab for devices that have at least one software service. A service can
have measurements, alarms and events assigned.

Query, update, add and remove services using {{< product-c8y-iot >}} REST API for manipulating managed objects.

**REST API examples**

#### Announcing a service to the platform

Using Inventory REST API:

```http
POST /inventory/managedObjects/<deviceId>/childAdditions

Content-Type: "application/vnd.com.nsn.cumulocity.managedObject+json"
```

```json
{
  "name": "MongoDB",
  "type": "c8y_Service",
  "serviceType": "systemd",
  "status": "up"
}
```

| Field       | Mandatory | Details |
| ----        | ----      | ----    |
|name         | Yes       | Name of the service |
|type         | Yes       | Type of the managed object, must always be 'c8y_Service'|
|serviceType  | Yes       | An arbitrary string for organizing services|
|status       | Yes       | 'up', 'down', 'unknown' or any custom service status|

Or using SmartREST static template 102. The second parameter - the unique ID does not reference the internal numeric ID
but a string based external ID which is defined by the device not by the platform. We recommend prefixing the unique ID
with a device specific prefix to avoid clashes with other devices running the same service:

`102,myDevice_MongoDb,systemd,MongoDb,up`

#### Updating the status of a service

Using Inventory REST API:

```http
POST /inventory/managedObjects/<serviceId>

Content-Type: "application/vnd.com.nsn.cumulocity.managedObject+json"
```

```json
{
  "status": "down"
}
```

| Field | Mandatory | Details |
| ----  | ----      | ----    |
|status | Yes       | 'up', 'down', 'unknown' or any arbitrary string specifying the service status|

Or using SmartREST static template 104 (remember to target the service in the MQTT topic using its unique ID):

`104,down`

#### Sending service data

Measurement REST API:

```http
POST /device/<serviceId>/measurements

Content-Type: "application/vnd.com.nsn.cumulocity.measurement+json"
```

```json
{
  "source": {
    "id": "123"
  },
  "time": "2020-03-19T12:03:27.845Z",
  "type": "c8y_Memory",
  "c8y_Memory": {
    "allocated": {
      "unit": "MB",
      "value": 100
    }
  }
}
```

Or using SmartREST static template 200 sent to topic `s/us/<serviceUniqueId>`:

`200,c8y_Memory,allocated,100,MB`

Similarly to measurements, alarms and events associated with the service can also be sent.
