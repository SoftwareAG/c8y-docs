---
order: 60
title: Send operations to devices
layout: redirect
---

To trigger an operation on a device, POST the operation to the [Device Control API](/guides/reference/device-control). The following example restarts the device with the ID "2480300" (which is the Raspberry Pi that we [previously integrated](/guides/images/rest/device-integration)):

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