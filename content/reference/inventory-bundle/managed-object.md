---
weight: 30
title: Managed object
layout: redirect
---

### Managed Object [application/vnd.com.nsn.cumulocity.managedObject+json]

<table>
<col style="width:20%">
<col style="width:20%">
<col style="width:5%">
<col style="width:50%">
<col style="width:5%">
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Occurs</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">PUT/POST</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">id</td>
<td style="text-align:left">string</td>
<td style="text-align:left">1</td>
<td style="text-align:left">Unique identifier of the object, automatically allocated when the object is created (see above).</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">self</td>
<td style="text-align:left">string</td>
<td style="text-align:left">1</td>
<td style="text-align:left">A URL linking to this resource.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">string</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">The most specific type of the managed object as fully qualified Java-style type name, dots replaced by underscores.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">string</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">Human-readable name that is used for representing the object in user interfaces.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left">*</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">0..n</td>
<td style="text-align:left">Additional properties associated with the specific ManagedObject.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left">creationDate</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">1</td>
<td style="text-align:left">The time when the object has been created.</td>
<td style="text-align:left">POST only</td>
</tr>
<tr>
<td style="text-align:left">lastUpdated</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">1</td>
<td style="text-align:left">The time when the object was last updated.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">childDevices</td>
<td style="text-align:left">ManagedObject ReferenceCollection</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">A collection of references to child devices.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">childAdditions</td>
<td style="text-align:left">ManagedObject ReferenceCollection</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">A collection of references to child additions.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">childAssets</td>
<td style="text-align:left">ManagedObject ReferenceCollection</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">A collection of references to child assets.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">deviceParents</td>
<td style="text-align:left">ManagedObject ReferenceCollection</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">A collection of references to device parent objects. Note: GET to /inventory/managedObjects/{{deviceId}}/deviceParents is not implemented.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">assetParents</td>
<td style="text-align:left">ManagedObject ReferenceCollection</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">A collection of references to asset parent objects. Note: GET to /inventory/managedObjects/{{deviceId}}/assetParents is not implemented.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">statusChangeDate</td>
<td style="text-align:left">datetime</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">The property is updated when the tenant status is modified. The value cannot be modified, it can only be viewed. </td>
<td style="text-align:left">No</td>
</tbody>
</table>

> It is recommended for property names not to start with "child" or "parent". This way you will be able to handle other types of references.

A managed object reference in the "child" and "parents" collections contains only `id`, `name` and `self` properties.

Not every GET response contains "parents" collections. You need a global role with READ "Inventory" permission to query the managed object "parents". Pass `withParents=true` query param to have "parents" included. If you query the managed object `withParents=true` it will return a flat list of all parents and grandparents of the given object.

> **Info:** If you query `childDevices`, only the children of the given device are returned without any grandchildren.

### GET - Representation of a managed object

**Response body:** ManagedObject

**Required role:** ROLE\_INVENTORY\_READ

#### Example request - Get a representation of a specific managed object

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
200 - OK

GET <<url>>/inventory/managedObjects/<<deviceId>>
Accept: application/vnd.com.nsn.cumulocity.managedobject+json;=ver...
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...

```
HTTP/1.1
200 - OK

{
  "id" : "42",
  "name" : "SomeName",
  "self" : "<<This ManagedObject URL>>",
  "type" :"com_nsn_cumulocity_example_Clazz",
  "lastUpdated": "2012-05-02T19:48:40.006+02:00",
  "com_othercompany_StrongTypedClass" : { ... },
  "childDevices": {
    "self" : "<<ManagedObjectReferenceCollection URL>>",
    "references" : [
      {
        "self" : "<<ManagedObjectReference URL>>",
        "managedObject": {
          "id": "1",
          "self" : "<<ManagedObject URL>>"
          "name": "Some Child"
        }
      },
      ...
    ]
  },
  ...
}
```

> **Info:** Parents of the ManagedObject are always empty unless a flag "withParents" is specified.


### POST - Create a new ManagedObject

**Request body:** ManagedObject

**Response body:** ManagedObject (when the `Accept` header is not provided, an empty response body is returned)

**Required role:** ROLE\_INVENTORY\_ADMIN or ROLE\_INVENTORY\_CREATE

#### Example request - Add a new ManagedObject

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...
|Accept|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...

```http

    POST <<url>>/inventory/managedObjects

    {
      "name" : "A brand new switch",
      "com_cumulocity_model_BinarySwitch" : { "state": "OFF" }
    }
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...

```http
HTTP/1.1
201 - Created

{
  "self" : "<<URL of new object>>",
  "id"   : "111",
  "lastUpdated": "2012-04-21T18:03:19.932+02:00",
  "name" : "A brand new switch",
  "com_cumulocity_model_BinarySwitch" : {
     "state": "OFF" }
  ...
}
```

The `id` and `lastUpdated` of the new managed object are generated by the server and returned in the response to the POST operation.

### GET - Supported measurements of a managed object

#### Example request - Retrieve supported measurements of a managed object

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
200 - OK

GET <<url>>/inventory/managedObjects/<<deviceId>>/supportedMeasurements
```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...

```http
HTTP/1.1
200 - OK

{
    "c8y_SupportedMeasurements": ["c8y_AnalogMeasurement", "c8y_MotionMeasurement", "c8y_SignalStrength", "c8y_TemperatureMeasurement"]
}
```

**Important:** In order to have fragment names included in the supported measurements list, the fragment has to have a specific structure:

```http
"fragment_name" : {
    "serie_name" : {
        "value" : ...
        "unit" : ...
    }
}
```

**Real example:**

```http
"c8y_SpeedMeasurement": {
   "Speed": {
      "value": 1234,
      "unit": "km/h"
   }
}
```

`Fragment_name` and `serie_name` can be replaced by a different valid json property name, but that name may not contain whitespaces and special characters like [], *. The structure has to be exactly as above, a two-level deep json object.

### GET - Supported series of a managed object

#### Example request - Retrieve supported series of a managed object

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
200 - OK

GET <<url>>/inventory/managedObjects/<<deviceId>>/supportedSeries

```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...

```
HTTP/1.1
200 - OK

{
    {"c8y_SupportedSeries":["c8y_TemperatureMeasurement.T","c8y_SpeedMeasurement.speed","c8y_SignalStrength.rssi"]}
}
```

**Important:** In order to have fragment names included in the supported series list, the fragment has to have a specific structure. See the explanation above regarding supported measurements.

### PUT - Update a managed object

**Request body:** ManagedObject

**Response body:** ManagedObject (when the `Accept` header is not provided, an empty response body is returned)

**Required role:** ROLE\_INVENTORY\_ADMIN or owner

#### Example request - Change the name of a managed object

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Accept|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...

```http
200 - OK

PUT <<url>>/inventory/managedObjects/<<deviceId>>
{
   "name" : "Life, the Universe and the REST"
}

```

#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.managedobject+json;ver=...

```http
HTTP/1.1
200 - OK

{
  "id" : "42",
  "name" : "Life, the Universe and the REST",
  "self" : "<<This ManagedObject URL>>",
  "type" :"com_nsn_cumulocity_example_Clazz",
  "lastUpdated": "2012-05-02T19:58:40.006+02:00",
  "com_othercompany_StrongTypedClass" : { ... },
  "childDevices": {
    ...
  },
  ...
}
```

When a managed object of type `c8y_SmartRule` is updated, an audit record is created with type "SmartRule" and activity "Smart rule updated", "Smart rule enabled" or "Smart rule disabled".

### DELETE - Managed object

**Request body:** N/A

**Response message body:** N/A

**Required role:** ROLE\_INVENTORY\_ADMIN or owner

#### Example request - Delete a managed object

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http

DELETE <<url>>/inventory/managedObjects/<<deviceId>>

```

#### Example response

```http
HTTP/1.1
204 - NO CONTENT

```

If the managed object is a device or a group and the optional query parameter `cascade=true` is used, all child devices and child assets will be deleted recursively. By default, the delete operation is propagated to the subgroups only if the deleted object is a group.

If you want to delete the full hierarchy regardless of the managed object type, use the query parameter `forceCascade=true`. When both `cascade` and `forceCascade` are provided the second one takes precedence.

> **Info:** Managed object DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when the deleted managed object has a lot of associated data like events, alarms, measurements. After sending the request, the platform starts deleting the associated data in an asynchronous way. Finally, the requested managed object is deleted after all associated data has been deleted.  
