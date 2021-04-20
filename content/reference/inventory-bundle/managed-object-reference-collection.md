---
weight: 40
title: Managed object reference collection
layout: redirect
---

### ManagedObjectReferenceCollection [application/vnd.com.nsn.cumulocity.managedObjectReferenceCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URI linking to this resource.|
|references|ManagedObjectReference|0..n|List of managed object references, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of managed objects.|
|next|string|0..1|A URI linking to a potential next page of managed objects.|

### GET - Managed object reference collection

**Response body:** ManagedObjectReferenceCollection

#### Example request - Get reference collection of a certain managed object

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

> **Info:** "404 Not Found" error will appear if the object has no references.

```http
GET /inventory/managedObjects/{deviceId}/childDevices
Host: https://<TENANT_DOMAIN>
```

> **Info:** Besides <kbd>childDevices</kbd> in the URL, you can also use <kbd>childAssets</kbd> or <kbd>childAdditions</kbd>.

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json;ver=...

```http
HTTP/1.1
200 - OK

{
  "self" : "<<This ManagedObjectReferenceCollection URL>>",
  "references" : [
    {
      "self" : "<<ManagedObjectReference URL>>",
      "managedObject" : {
        "self" : "<<ManagedObject 1 URL>>",
        "name" : "Meter1",
        "id" : "1",
        ...
      }
    },
    {
      "self" : "<<ManagedObjectReference URL>>",
      "managedObject" : {
        "self" : "<<ManagedObject 2 URL>>",
        "name" : "Meter2",
        "id" : "2",
        ...
      }
    }
  ],
  "statistics" : {
    "pageSize" : 5,
    "currentPage : 1
  },
  "next": "...",
  "prev": "..."
}
```

### POST - Add a managed object reference to the collection

**Request body:** ManagedObjectReference

**Response body:** ManagedObjectReference

**Required role:** ROLE\_INVENTORY\_ADMIN or parent and child owner

> **Info:** Use the header `X-Cumulocity-Processing-Mode` set to `QUIESCENT` to disable real-time notifications.
This is required when performance is important or dealing with a large group of objects.


#### Example request - Add a ManagedObjectReference

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...

```http
POST /inventory/managedObjects/{deviceId}/childDevices
Host: https://<TENANT_DOMAIN>

{
  "managedObject" : { "self" :"<<ManagedObject URL>>" }
}
```

> **Info:** Besides <kbd>childDevices</kbd> in the URL, you can also use <kbd>childAssets</kbd> or <kbd>childAdditions</kbd>.

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectreference+json;ver=...

```http
HTTP/1.1
201 - Created

{
  "self" : "<<This ManagedObjectReference URL>>,
  "managedObject" : {
    "id" : "2",
    "self" : <<ManagedObject 2 URL>>,
    "name" : "Meter2",
    ...
  }
}
```

As an alternative, it is also allowed to pass the following reference object in the request body when adding to the collection:

```http
    {
      "managedObject" : { "id" :"<<ManagedObject id>>" }
    }
```

### POST - Add multiple object references to the collection

**Request body:** ManagedObjectReferenceCollection

**Response body:** ManagedObjectReferenceCollection (when the Accept header is not provided, an empty response body is returned)

**Required role:** ROLE\_INVENTORY\_ADMIN or parent and children owner


#### Example request - Add a ManagedObjectReferenceCollection

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json;ver=...
|Accept|application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json;ver=...

```http
POST /inventory/managedObjects/100/childDevices

{
   "references":[
      {
         "managedObject":{
            "id":"128"
         }
      },
      {
         "managedObject":{
            "id":"129"
         }
      }
   ]
}
```

> **Info:** Besides <kbd>childDevices</kbd> in the URL, you can also use <kbd>childAssets</kbd> or <kbd>childAdditions</kbd>.

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json;ver=...

```http
HTTP/1.1
201 - Created

{
  "self" : "https://<TENANT_DOMAIN>/inventory/managedObjects/100/childDevices",
  "references": [
    {
      "self" : "https://<TENANT_DOMAIN>/inventory/managedObjects/100/childDevices/128",
      "managedObject" : {
          "additionParents": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/128/additionParents",
              "references": []
          },
          "owner": "admin",
          "childDevices": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/128/childDevices",
              "references": []
          },
          "childAssets": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/128/childAssets",
              "references": []
          },
          "creationTime": "2020-12-31T09:38:34.448Z",
          "lastUpdated": "2020-12-31T09:38:34.448Z",
          "childAdditions": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/128/childAdditions",
              "references": []
          },
          "name": "testMeasurementDevice",
          "assetParents": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/128/assetParents",
              "references": []
          },
          "deviceParents": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/128/deviceParents",
              "references": []
          },
          "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/128",
          "id": "128",
          "c8y_IsDevice": {},
          "c8y_SupportedMeasurements": [
              "c8y_TemperatureMeasurement"
          ]
      }
    },
    {
      "self" : "https://<TENANT_DOMAIN>/inventory/managedObjects/100/childDevices/129",
      "managedObject" : {
          "additionParents": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/129/additionParents",
              "references": []
          },
          "owner": "admin",
          "childDevices": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/129/childDevices",
              "references": []
          },
          "childAssets": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/129/childAssets",
              "references": []
          },
          "creationTime": "2020-12-31T09:39:58.705Z",
          "lastUpdated": "2020-12-31T09:39:58.705Z",
          "childAdditions": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/129/childAdditions",
              "references": []
          },
          "name": "MeasurementDeviceName",
          "assetParents": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/129/assetParents",
              "references": []
          },
          "deviceParents": {
              "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/129/deviceParents",
              "references": []
          },
          "self": "https://<TENANT_DOMAIN>/inventory/managedObjects/129",
          "id": "129",
          "c8y_IsDevice": {},
          "c8y_SupportedMeasurements": [
              "c8y_TemperatureMeasurement"
          ]
      }
    }
  ]
}
```

### DELETE - Managed object reference collection

**Request body:** ManagedObjectReferenceCollection

**Response message body:** N/A

**Required role:** ROLE\_INVENTORY\_ADMIN or parent owner or child owner

> **Info:** This operation just removes the reference, it does not delete the object itself.

#### Example request - Delete a managed object reference collection

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Content-Type|application/vnd.com.nsn.cumulocity.managedobjectreferencecollection+json;ver=...

```http
DELETE /inventory/managedObjects/100/childDevices

{
   "references":[
      {
         "managedObject":{
            "id":"128"
         }
      },
      {
         "managedObject":{
            "id":"129"
         }
      }
   ]
}
```

> **Info:** Besides <kbd>childDevices</kbd> in the URL, you can also use <kbd>childAssets</kbd> or <kbd>childAdditions</kbd>.

#### Example response

```http
HTTP/1.1
204 - NO CONTENT
```
