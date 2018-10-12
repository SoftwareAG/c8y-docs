---
order: 30
title: Managed object
layout: redirect
---

### Managed Object [application/vnd.com.nsn.cumulocity.managedObject+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|id|String|1|Unique identifier of the object, automatically allocated when the object is created (see above).|No|
|self|URL|1|Link to this resource.|No|
|type|String|0..1|The most specific type of the managed object as fully qualified Java-style type name, dots replaced by underscores.|Optional|
|name|String|0..1|Human-readable name that is used for representing the object in user interfaces.|Optional|
|\*|Object|0..n|Additional properties associated with the specific ManagedObject.|Optional|
|lastUpdated|TimeStamp|1|The time when the object was last updated.|No|
|childDevices|ManagedObject ReferenceCollection|0..1|A collection of references to child devices.|No|
|childAdditions|ManagedObject ReferenceCollection|0..1|A collection of references to child additions.|No|
|childAssets|ManagedObject ReferenceCollection|0..1|A collection of references to child assets.|No|
|deviceParents|ManagedObject ReferenceCollection|0..1|A collection of references to device parent objects.|No|
|assetParents|ManagedObject ReferenceCollection|0..1|A collection of references to asset parent objects.|No|

> It is recommended for property names not to start with "child" or "parent". This way you will be able to handle other types of references.

A managed object reference in the "child" and "parents" collections contains only "id", "name" and "self" properties.

Not every GET response contains "parents" collections. It is required to pass "withParents=true" query param to have "parents" included.

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

Important: In order to have fragment names included in supported measurements list, fragment has to have specific structure:

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

Fragment_name and serie_name can be replaced by different valid json property name, but that name cannot contain whitespaces and special characters like [],*. The structure has to be exactly as above, two-level deep json object.

### PUT - Update a managed object

Request body: ManagedObject

Response body: ManagedObject (when accept header is not provided, empty response body is returned)

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

When managed object of type 'c8y_SmartRule' is updated, audit record is created with type 'SmartRule' and activity 'Smart rule updated', 'Smart rule enabled' or 'Smart rule disabled'.

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

If managed object is device or group and optional query parameter "cascade=true" is used all child devices and child assets will be deleted recursively. By default delete operation is propagated to the subgroups only if deleted object is a group.
