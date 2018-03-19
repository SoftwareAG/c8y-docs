---
order: 70
title: Listen for events
layout: redirect
---

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