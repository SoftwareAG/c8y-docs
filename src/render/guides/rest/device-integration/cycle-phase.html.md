---
order: 30
title: Cycle Phase
layout: redirect
---

### Step 7: Execute operations

Assume now that an operation is queued for the agent. This will make the long polling request that we issued above return with the operation. Here is an example of a response with a single configuration operation:

    HTTP/1.1 200 OK
    ...
    [ 
        {
            "id": "139", 
            "data": {
                "creationTime":"2013-09-04T10:53:35.128+02:00",
                "deviceId": "2480300",
                "id": "2546600",
                "self": "https://.../devicecontrol/operations/2546600",
                "status": "PENDING",
                "description": "Configuration update",
                "c8y_Configuration": { "config": "#Wed Sep 04 10:54:06 CEST 2013\n..." }
            }, 
            "channel": "/2480300"
        }, {
            "id": "3",
            "successful": true,
            "channel": "/meta/connect"
        }
    ]

When the agent picks up the operation, it sets it to "EXECUTING" state in Cumulocity using a PUT request (see above example for "FAILED"). It carries out the operation on the device and runs possible updates of the Cumulocity inventory. Finally, it sets the operation to "SUCCESSFUL" or "FAILED" depending on the outcome. Then, it will reconnect again to "/devicecontrol/notifications" as described above and wait for the next operation.

> The device should reconnect within ten seconds to the server to not loose queued operatins. This is the time that Cumulocity buffers real-time data. The interval can be specified upon handshake.

### Step 8: Update inventory

The inventory entry of a device usually represents its current state, which may be subject of continuous change. As an example, consider a device with a GPS chip. That device will keep its current location up-to-date in the inventory. At the same time, it will report location updates as well as event to maintain a trace of its locations. Technically, such updates are reported with the same requests as shown in Step 4.

### Step 9: Send measurements

To create new measurements in Cumulocity, issue a POST request with the measurement. The example below shows how to create a signal strength measurement.

    POST /measurement/measurements HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.measurement+json
    ...
    {
        "source": { "id": "2480300" },
        "time": "2013-07-02T16:32:30.152+02:00",
        "type": "huawei_E3131SignalStrength",
        "c8y_SignalStrength": {
            "rssi": { "value": -53, "unit": "dBm" },
            "ber": { "value": 0.14, "unit": "%" } 
        }
    }

    HTTP/1.1 201 Created

### Step 10: Send events

Similar, use a POST request for events. The following example shows a location update from a GPS sensor.

    POST /event/events HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.event+json
    ...
    {
        "source": { "id": "1197500" },
        "text": "Location updated",
        "time": "2013-07-19T09:07:22.598+02:00",
        "type": "queclink_GV200LocationUpdate",
        "c8y_Position": {
            "alt": 73.9,
            "lng": 6.151782,
            "lat": 51.211971
        }
    }

    HTTP/1.1 201 Created

Note that all data types in Cumulocity can include arbitrary extensions in the form of additional fragments. In this case, the event includes a position, but also self-defined fragments can be added.

### Step 11: Send alarms

Alarms represents events that most likely require human intervention to be solved. For example, if the battery in a device runs out of energy, someone has to visit the device to replace the battery. Creating an alarm is technically very similar to creating an event.

    POST /alarm/alarms HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.alarm+json
    Accept: application/vnd.com.nsn.cumulocity.alarm+json
    ...
    {
        "source": { "id": "10400" },
        "text": "Tracker lost power",
        "time": "2013-08-19T21:31:22.740+02:00",
        "type": "c8y_PowerAlarm",
        "status": "ACTIVE",
        "severity": "MAJOR",
    }

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.alarm+json
    ...
    {
        "id": "214600",
        "self": "https://.../alarm/alarms/214600",
        ...
    }

However, you most likely should not create an alarm for a device, if there is a similar alarm already active in the system. Creating many alarms may flood the user interface and may require users to manually clear all the alarms. This is an example for finding the active alarms of our Raspberry Pi from above:

    GET /alarm/alarms?source=2480300&status=ACTIVE HTTP/1.1

In contrast to events, alarms can be updated. If an issue is resolved (e.g., the battery was replace, power was restored), the corresponding alarm should be automatically cleared to save manual work. This can be done through a PUT request to the URL of the alarm. In the above example for creating an alarm, we used an "Accept" header to get the URL of the new alarm in the response. We can use this URL to clear the alarm:

    PUT /alarm/alarms/214600 HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.alarm+json
    ...
    {
        "status": "CLEARED"
    }

    HTTP/1.1 200 OK

If you are uncertain on whether to send an event or raise an alarm, you can simply just raise an event and let the user decide with a [CEL rule](/guides/reference/cumulocity-event-language) if they want to convert the event into an alarm.