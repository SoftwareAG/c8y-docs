---
order: 30
title: Managed object
layout: redirect
---

### Managed Object [application/vnd.com.nsn.cumulocity.managedObject+json]

<table>
<col width = 150>
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
<td style="text-align:left">String</td>
<td style="text-align:left">1</td>
<td style="text-align:left">Unique identifier of the object, automatically allocated when the object is created (see above).</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">self</td>
<td style="text-align:left">URL</td>
<td style="text-align:left">1</td>
<td style="text-align:left">Link to this resource.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">type</td>
<td style="text-align:left">String</td>
<td style="text-align:left">0..1</td>
<td style="text-align:left">The most specific type of the managed object as fully qualified Java-style type name, dots replaced by underscores.</td>
<td style="text-align:left">Optional</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">String</td>
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
<td style="text-align:left">TimeStamp</td>
<td style="text-align:left">1</td>
<td style="text-align:left">The time when the object has been created.</td>
<td style="text-align:left">POST only</td>
</tr>
<tr>
<td style="text-align:left">lastUpdated</td>
<td style="text-align:left">TimeStamp</td>
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
</tbody>
</table>

> It is recommended for property names not to start with "child" or "parent". This way you will be able to handle other types of references.

A managed object reference in the "child" and "parents" collections contains only "id", "name" and "self" properties.

Not every GET response contains "parents" collections. It is required to pass "withParents=true" query param to have "parents" included. If you query the managed object "withParent=true" it will return a flat list of all parents and grandparents of the given object.

> **Info:** If you query childDevices, only the children of the given device are returned without any grandchildren. 

### GET a representation of a managed object

Response body: ManagedObject

Required role: ROLE\_INVENTORY\_READ

Example request: Get a representation of a specific manage object

    GET /inventory/managedObjects/<<deviceId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json;=ver...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    Content-Length: ...
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

### GET supported measurements of a managed object

Example request: Retrieve supported measurements of a managed object

    GET /inventory/managedObjects/<<deviceId>>/supportedMeasurements
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    {
        "c8y_SupportedMeasurements": ["c8y_AnalogMeasurement", "c8y_MotionMeasurement", "c8y_SignalStrength", "c8y_TemperatureMeasurement"]
    }

Important: In order to have fragment names included in the supported measurements list, the fragment has to have a specific structure:

	"fragment_name" : {
	    "serie_name" : {
	        "value" : ...
	        "unit" : ...
	    }
	}

Real example:

	"c8y_SpeedMeasurement": {
	      "Speed": { "value": 1234, "unit": "km/h" }
	}

Fragment_name and serie_name can be replaced by a different valid json property name, but that name may not contain whitespaces and special characters like [], *. The structure has to be exactly as above, a two-level deep json object.

### GET supported series of a managed object

Example request: Retrieve supported series of a managed object

    GET /inventory/managedObjects/<<deviceId>>/supportedSeries
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    {
        {"c8y_SupportedSeries":["c8y_TemperatureMeasurement.T","c8y_SpeedMeasurement.speed","c8y_SignalStrength.rssi"]}
    }
    
Important: In order to have fragment names included in the supported series list, the fragment has to have a specific structure. See the explanation above regarding supported measurements.

### PUT - Update a managed object

Request body: ManagedObject

Response body: ManagedObject (when the accept header is not provided, an empty response body is returned)

Required role: ROLE\_INVENTORY\_ADMIN or owner

Example Request: Change the name of a managed object

    PUT /inventory/managedObjects/<<deviceId>>
    Host: ...
    Authorization: Basic ...
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
    Content-Length: ...
    { "name" : "Life, the Universe and the REST" }

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;ver=...
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

When a managed object of type 'c8y_SmartRule' is updated, an audit record is created with type 'SmartRule' and activity 'Smart rule updated', 'Smart rule enabled' or 'Smart rule disabled'.

### DELETE a managed object

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_INVENTORY\_ADMIN or owner

Example Request: Delete a managed object

    DELETE /inventory/managedObjects/<<deviceId>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT

If the managed object is a device or a group and the optional query parameter "cascade=true" is used all child devices and child assets will be deleted recursively. By default, the delete operation is propagated to the subgroups only if the deleted object is a group.
