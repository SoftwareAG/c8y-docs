---
order: 30
title: Application development
layout: default
---
## Overview

In this section, we are touching some of the basic use cases in using the Cumulocity REST APIs for application development. Typically, you need to:

-   [Register assets](#register-assets).
-   [Link devices to assets](#link-devices-to-assets).
-   [Synchronize assets with external systems](#synchronize-assets-with-external-systems).
-   [Query particular capabilities](#query-particular-capabilities).
-   [Query readings from sensors](#query-readings-from-sensors).
-   [Send operations to devices](#send-operations-to-devices).
-   [Listen for events](#listen-for-events).

## Register assets

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

## Link devices to assets

Just like you link assets to other child assets, you can link assets also to devices that monitor and control the asset. For example, assume that you have a light sensor installed in the room, and that light sensor has the URL "https://.../inventory/managedObjects/2480500". POST to the "childDevices" of the room as follows:

    POST /inventory/managedObjects/2549700/childDevices HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json

    { "managedObject" : { "self" : "https://.../inventory/managedObjects/2480500" } } 

    HTTP/1.1 201 Created

## Synchronize assets with external systems

Often, Cumulocity will not be the only IT system dealing with a company's asset. The technical procedure for synchronizing assets stored in external IT systems is exactly the same as the [procedure used for registering devices](/guides/rest/device-integration#device_registration_and_inventory_synchronization):

-   Use the Identity API to link the asset ID of the external IT system to the asset ID of Cumulocity.
-   Use the Inventory API to create or update the assets in Cumulocity's inventory based on the external system's data.

## Query particular capabilities

To decouple applications from the specifics of particular types and makes of devices, applications can use so-called fragments to query the inventory (see the [Fragments section of "Cumulocity's domain model"](/guides/concepts/domain-model)). For example, to find all managed objects having a location, use

    GET /inventory/managedObjects?fragmentType=c8y_Position&withTotalPages=true HTTP/1.1

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectCollection+json; charset=UTF-8; ver=0.9
    ...
    {
        "managedObjects": [
            {
                "id": "2480700",
                "lastUpdated": "2013-08-30T10:15:44.218+02:00",
                "name": "RaspPi BCM2708 0000000017b769d5 Gps eM9",
                "owner": "admin",
                "self": "https://.../inventory/managedObjects/2480700",
                "type": "c8y_TinkerForge_Gps",
                "c8y_Position": {
                    "alt": 102.36,
                    "lng": 6.769717,
                    "lat": 51.267259
                },
                ...
            },
            ...
        ]
        "next": "https://.../inventory/managedObjects?withTotalPages=true&fragmentType=c8y_Position&pageSize=5&currentPage=2",
        "statistics": {
            "currentPage": 1,
            "pageSize": 5,
            "totalPages": 4
        },
        "self": "https://.../inventory/managedObjects?withTotalPages=true&fragmentType=c8y_Position&pageSize=5&currentPage=1"
    }

Now, you can, for example, place the object in a map. Standard fragments are defined in the [Device management library](/guides/reference/device-management) and in the [Sensor library](/guides/reference/sensor-library).

Querying the "/platform" resource will show you further possibilities for querying your data (see the [Introduction](/guides/rest/introduction)).

Note that queries do not necessarily return all query results at once, but only a "page" of the result. For more information on paging, see the Section [Query result paging](/guides/reference/rest-implementation). The optional parameter "withTotalPages" will make the query contain full page statistics at the expensive of slightly slower performance.

## Query readings from sensors

Similar to the inventory, you can also query for particular sensor readings. For example, let's query the light measurements of the past month (from the time of writing this text):

    GET /measurement/measurements?dateFrom=2013-08-05&dateTo=2013-09-05&fragmentType=c8y_LightMeasurement HTTP/1.1

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.measurementCollection+json; charset=UTF-8; ver=0.9
    ... 
    {
        "measurements": [
            {
                "id": "2480900",
                "self": "https://.../measurement/measurements/2480900",
                "source": {
                    "id": "2480500",
                    "self": "https://.../inventory/managedObjects/2480500"
                },
                "time": "2013-08-29T21:19:52.321+02:00",
                "type": "c8y_LightMeasurement",
                "c8y_LightMeasurement": {
                    "e": { "unit": "lux", "value": 169.2 }
                }
            },
            ...
        ]
        ...
    }

## Send operations to devices

To trigger an operation on a device, POST the operation to the [Device Control API](/guides/reference/device-control). The following example restarts the device with the ID "2480300" (which is the Raspberry Pi that we [previously integrated](/guides/rest/device-integration)):

    POST /devicecontrol/operations HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.operation+json;
    Accept: application/vnd.com.nsn.cumulocity.operation+json;
    ...
    {
        "deviceId": "2480300",
        "c8y_Restart":{}
    }

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.operation+json; charset=UTF-8; ver=0.9
    ...
    {
        "creationTime": "2013-09-05T19:18:16.117+02:00",
        "deviceId": "2480300",
        "id":"2550200", 
        "self": "https://.../devicecontrol/operations/2550200",
        "status": "PENDING",
        "c8y_Restart": {}
    }

The POST command returns immediately when the operation has been queued for the device. The actual operation executes asynchronously. Since we added the optional "Accept" header in the example request, we will get the full queued operation in the response including its URL in the "self" property. Using a GET on that URL, you can check the current state of execution of the operation:

    GET /devicecontrol/operations/2550200 HTTP/1.1

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.operation+json; charset=UTF-8; ver=0.9
    ...
    {
        "status": "PENDING",
        ...
    }

A state of "PENDING" means here that the device has not yet picked up the operation. "EXECUTING" means that the device is in the process of executing the operation. Finally, "SUCCESSFUL" or "FAILED" indicate that the operation is completed.

## Listen for events

Besides querying the Cumulocity data store, you can also process and receive events in real-time as described in [Real-time processing in Cumulocity](/guides/concepts/realtime). For example, assume that you would like to display real-time location updates in a map. Use the administration user interface (or the [REST API](/guides/reference/real-time-statements)) to create a new rule module "myRule":

    select * 
    from EventCreated e
    where e.event.type = "c8y_LocationUpdate";

If you have a device that sends location updates, you should see them immediately in the user interface. To receive them in your own REST client, you use the [Notification API](/guides/reference/real-time-notifications) to subscribe to them. The API is based on the Bayeux protocol. First, a handshake is required. The handshake tells Cumulocity what protocols the client supports for notifications and allocates a client ID to the client.

    POST /cep/notifications HTTP/1.1
    Content-Type: application/json
    ...
    [ {
        "id": "1",
        "supportedConnectionTypes": ["long-polling"],
        "channel": "/meta/handshake",
        "version": "1.0"
    } ]

    HTTP/1.1 200 OK
    ...
    [ {
        "id": "1",
        "supportedConnectionTypes": ["websocket","long-polling"],
        "channel": "/meta/handshake",
        "version": "1.0",
        "clientId": "71fjkmy0495rxrkfcmp0mhcev1",
        "minimumVersion": "1.0",
        "successful": true
    }]

After the handshake, the client needs to subscribe to the output of the above rule. This is done using a POST request with the module name and the statement name as subscription channel. In our example, we used the module name "myRule" and did not give a name to the "select" statement ("@Name('')"), so the subscription channel is "/myRule/\*".

    POST /cep/notifications HTTP/1.1
    Content-Type: application/json
    ...
    [ {
        "id": "2",
        "channel": "/meta/subscribe",
        "subscription": "/myRule/*",
        "clientId":"71fjkmy0495rxrkfcmp0mhcev1"
    }]

    HTTP/1.1 200 OK
    ...
    [ { 
        "id":"2",
        "channel": "/meta/subscribe",
        "subscription": "/myRule/*",
        "successful": true,
    } ]

Finally, the client connects and waits for events to be sent to it.

    POST /cep/notifications HTTP/1.1
    Content-Type: application/json
    ...
    [ {
        "id": "3",
        "connectionType": "long-polling",
        "channel": "/meta/connect",
        "clientId": "71fjkmy0495rxrkfcmp0mhcev1"
    } ]

This request will hang until an operation is issued. Here is an example of a response with a single location update:

    HTTP/1.1 200 OK
    ...
    [ 
        {
            "id": "139", 
            "data": {
                "creationTime": "2013-08-30T09:38:45.551+02:00",
                "id": "2481400",
                "self": "https://.../event/events/2481400",
                "source": {
                    "id": "2480700",
                    "name": "RaspPi BCM2708 0000000017b769d5 Gps eM9",
                    "self": "https://.../inventory/managedObjects/2480700"
                },
                "text": "Location updated",
                "time": "2013-08-29T21:20:01.671+02:00",
                "type": "c8y_LocationUpdate",
                "c8y_Position": {
                    "alt": 58.34,
                    "lng": 6.769717,
                    "lat": 51.267259
                },
                "channel": "/myRule/*"
        }, {
            "id": "3",
            "successful": true,
            "channel": "/meta/connect"
        }
    ]
