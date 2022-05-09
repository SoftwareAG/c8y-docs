---
weight: 180
title: Services
layout: redirect
---

The {{< product-c8y-iot >}} UI allows you to monitor software services running on a device.
The services are represented in {{< product-c8y-iot >}} domain model as the device managed object child additions with `c8y_Service` type.

The **Device details** page shows a **Services** tab for devices that have at least one software service.
A service can have measurements, alarms and events assigned.

Query, update, add and remove services using {{< product-c8y-iot >}} REST API for manipulating managed objects.

**REST API examples**

Querying services:

```http
GET /inventory/managedObjects/<deviceId>/childAdditions?query=type eq 'c8y_Service' and name eq '*<serviceName>*'
```

```json
{
  "references": [
    {
      "name": "<serviceName>",
      "id": "123",
      "type": "c8y_Service",
      "serviceType": "systemd",
      "status": "up",
      ...
    }
  ],
  "statistics": {
    "currentPage": 1,
    "pageSize": 5
  },
  "self": ...,
  "next": ...
}
```

Adding a service:

```http
POST /inventory/managedObjects/<deviceId>/childAdditions

Content-Type: "application/vnd.com.nsn.cumulocity.managedObject+json"
```

```json
{
  "name": "<serviceName>",
  "id": "123",
  "type": "c8y_Service",
  "serviceType": "systemd",
  "status": "up",
  ...
}
```

Updating a service:

```http
PUT /inventory/managedObjects/<managedObjectId>

Content-Type: "application/vnd.com.nsn.cumulocity.managedObject+json"
```

```json
{
  "name": "<serviceName>",
  "id": "123",
  "type": "c8y_Service",
  "serviceType": "systemd",
  "status": "up",
  ...
}
```

Removing a service:

```http
DELETE /inventory/managedObjects/<managedObjectId>
```

**SmartREST examples**

For devices supporting the Advanced Software Management feature, a static SmartREST 2.0 template is available.
Devices may use this template to announce installed services:

`102,<serviceUniqueID>,<serviceType>,<serviceName>,<status>`

Additionally devices may publish messages on the SmartREST 2.0 topic `s/us/<serviceUniqueId>` to update the status of given service:

`104,<newServiceStatus>`
