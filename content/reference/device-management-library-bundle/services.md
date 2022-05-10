### Services

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
  "id": "123",
  "name": "MongoDB",
  "type": "c8y_Service",
  "serviceType": "systemd",
  "status": "up"
}
```

| Field | Mandatory | Details |
| ----  | ---- | ---- |
|id    | Yes | The service unique id|
|name  |Yes |Name of the service|
|serviceType  | Yes | An arbitrary string for organizing services|
|status  |Yes | 'up', 'down', 'unknown' or any arbitrary string specifying the service status|

Or using SmartREST static template 102, which takes all above parameters as a list:

`102,123,systemd,MongoDb,up`

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
| ----  | ---- | ---- |
|status  |Yes | 'up', 'down', 'unknown' or any arbitrary string specifying the service status|


Or using SmartREST static template 104:

`104,down`

#### Sending measurements

Using Inventory REST API:

```http
POST /device/<serviceId>/measurements

Content-Type: "application/vnd.com.nsn.cumulocity.measurement+json"
```