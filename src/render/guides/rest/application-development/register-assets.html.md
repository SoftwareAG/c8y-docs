---
order: 10
title: Register assets
layout: redirect
---

Assets are the objects that your business and your application focusses on. For example, assets might be buildings and rooms if your business centers around building management or home automation. Or they might be routes and machines, if your business is about servicing machines.

Assets are stored in the inventory along with the devices, but they often have an own structure independent of devices. You create assets by POSTing them to the collection of managed objects in the inventory. For example, to create a new room in the inventory:

    POST /inventory/managedObjects HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json
    ...
    {
        "name": "Building 043",
        "type": "c8y_Building"
    }

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;charset=UTF-8;ver=0.9
    ...
    {
        "owner": "admin",
        "id": "2549800",
        "self": "http://.../inventory/managedObjects/2549800",
        "type": "c8y_Building",
        "lastUpdated": "2013-09-05T16:38:31.250+02:00",
        "name": "Building 043",
        "assetParents": {
            "references": [],
            "self": "https://.../inventory/managedObjects/2549800/assetParents"
        },
        "childAssets": {
            "references": [],
            "self": "https://.../inventory/managedObjects/2549800/childAssets"
        },
        "childDevices": {
            "references": [],
            "self": "https://.../inventory/managedObjects/2549800/childDevices"
        },
        "deviceParents": {
            "references": [],
            "self": "https://.../inventory/managedObjects/2549800/deviceParents"
        }
    }

If the device could be successfully created, a status code of 201 is returned. If the original request contains an "Accept" header just like in the example, the complete created object is returned including the ID and URL to reference the object in future requests. The returned object also include references to collections of child devices and child assets that can be used to add children to the device.

For example, assuming that we have also created a room, and that room's "self" property is "https://.../inventory/managedObjects/2549700". To link the room to the building, POST to the child assets collection of the building (see the "self" property of "childAssets" above):

    POST /inventory/managedObjects/2549800/childAssets HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json

    { "managedObject" : { "self" : "http://.../inventory/managedObjects/2549700" } } 

    HTTP/1.1 201 Created

Now querying the building again shows that the room has been registered as child of the building:

    GET /inventory/managedObjects/2549800 HTTP/1.1

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9
    ...
    {
        "owner": "admin",
        "id": "2549800",
        "self": "http://.../inventory/managedObjects/2549800",
        ...
        "childAssets": {
            "references": [
                {
                    "managedObject": {
                        "id": "2549700",
                        "name": "Room 042",
                        "self": "https://.../inventory/managedObjects/2549700"
                    },
                    "self": "https://.../inventory/managedObjects/2549800/childAssets/2549700"
                }
            ],
            "self": "https://.../inventory/managedObjects/2549800/childAssets"
        }
    }
