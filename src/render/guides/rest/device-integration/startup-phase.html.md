---
order: 20
title: Startup Phase
layout: redirect
---

### Step 0: Request device credentials

Since every request to Cumulocity needs to be authenticated, also requests from devices need to be authenticated. If you want to assign individual credentials to devices, you can use the device credentials API to generate new credentials automatically. To do so, request device credentials at first startup through the API and store them locally on the device for further requests. 

The process works as follows:

* Cumulocity assumes each device to have some form of unique ID. A good device identifier may be the MAC address of the network adapter, the IMEI of a mobile device or a hardware serial number 
* When you take a new device into use, you enter this unique ID into "Device registration" in Cumulocity and start the device.
* The device will connect to Cumulocity and send its unique ID repeatedly. For this purpose, Cumulocity provides a static host that can be enquired by contacting [support](https://support.cumulocity.com).
* You can accept the connection from the device in "Device registration", in which case Cumulocity sends generated credentials to the device.
* The device will use these credentials for all further requests.

From device perspective, this is a single REST request:

    POST /devicecontrol/deviceCredentials
    Content-Type: application/vnd.com.nsn.cumulocity.deviceCredentials+json;ver=...
    Authorization: Basic ...
    {
      "id" : "0000000017b769d5"
    }

The device issues this request repeatedly. While the user has not yet registered and accepted the device, the request returns "404 Not Found." After the device is accepted, the following response is returned:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.deviceCredentials+json;ver=...
    Content-Length: ...
    {
      "id" : "0000000017b769d5",
      "self" : "<<URL of new request>>",
      "tenantId" : "test",
      "username" : "device_0000000017b769d5",
      "password" : "3rasfst4swfa"
    }

The device can now connect to Cumulocity using the tenant ID, username and password.

### Step 1: Check if the device is already registered

The unique ID of the device is also used for registering the device in the inventory. The registration is carried out using the [Identity API](/guides/reference/identity). In the Identity API, each managed object can be associated with multiple identifiers distinguished by type. Types are, for example, "c8y\_Serial" for a hardware serial, "c8y\_MAC" for a MAC address and "c8y\_IMEI" for an IMEI.

To check if a device is already registered, use a GET request on the identity API using the device identifier and its type. The following example shows a check for a Raspberry Pi with hardware serial "0000000017b769d5".

    GET /identity/externalIds/c8y_Serial/raspi-0000000017b769d5 HTTP/1.1

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.externalId+json; charset=UTF-8; ver=0.9
    ...
    {
        "externalId": "raspi-0000000017b769d5",
        "managedObject": {
            "id": "2480300",
            "self": "https://.../managedObjects/2480300"
        },
        "self": "https://.../identity/externalIds/c8y_Serial/raspi-0000000017b769d5",
        "type": "c8y_Serial"
    }

Note that while MAC addresses are guaranteed to be globally unique, serial numbers for hardware may overlap across different hardwares. Hence, in the above example, we prefixed the serial number with a "raspi-".

In this case, the device is already registered and a status code of 200 is returned. In the response, a URL to the device in the inventory is returned in "managedObject.self". This URL can be used to work with the device later on.

If a device is not yet registered, a 404 status code and an error message is returned:

    GET /identity/externalIds/c8y_Serial/raspi-0000000017b769d6 HTTP/1.1

    HTTP/1.1 404 Not Found
    Content-Type: application/vnd.com.nsn.cumulocity.error+json;charset=UTF-8;ver=0.9
    ...
    {
        "error": "identity/Not Found",
        "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting",
        "message": "External id not found; external id = ID [type=c8y_Serial, value=raspi-0000000017b769d6]"
    }

### Step 2: Create the device in the inventory

If Step 1 above indicated that no managed object representing the device exists, create the managed object in Cumulocity. The managed object describes the device, both its instance and metadata. Instance data includes hardware and software information, serial numbers, and device configuration data. Metadata describes the capabilities of the devices, including the supported operations.

To create a managed object, issue a POST request on the managed objects collection in the Inventory API. The following example creates a Raspberry Pi using the Linux agent:

    POST /inventory/managedObjects HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
    Accept: application/vnd.com.nsn.cumulocity.managedObject+json
    ...
    {
        "name": "RaspPi BCM2708 0000000017b769d5",
        "type": "c8y_Linux",
        "c8y_IsDevice": {},
        "com_cumulocity_model_Agent": {},
        "c8y_SupportedOperations": [ "c8y_Restart", "c8y_Configuration", "c8y_Software", "c8y_Firmware" ],
        "c8y_Hardware": {
            "revision": "000e",
            "model": "RaspPi BCM2708",
            "serialNumber": "0000000017b769d5"
        },
        "c8y_Configuration": {
            "config": "#Fri Aug 30 09:13:56 BST 2013\nc8y.log.eventLevel=INFO\n..."
        },
        "c8y_Mobile": {
             "imei": "861145013087177",
            "cellId": "4904-A496",
            "iccid": "89490200000876620613"
        },
        "c8y_Firmware": {
            "name": "raspberrypi-bootloader",
            "version": "1.20130207-1"
        },
        "c8y_Software": {
            "pi-driver": "pi-driver-3.4.5.jar",
            "pi4j-gpio-extension": "pi4j-gpio-extension-0.0.5.jar",
            ...
        }
    }

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json;charset=UTF-8;ver=0.9
    ...
    {
        "id": "2480300",
        "lastUpdated": "2013-08-30T10:12:24.378+02:00",
        "name": "RaspPi BCM2708 0000000017b769d5",
        "owner": "admin",
        "self": "https://.../inventory/managedObjects/2480300",
        "type": "c8y_Linux",
        "c8y_IsDevice": {},
        ...
        "assetParents": {
            "references": [],
            "self": "https://.../inventory/managedObjects/2480300/assetParents"
        },
        "childAssets": {
            "references": [],
            "self": "https://.../inventory/managedObjects/2480300/childAssets"
        },
        "childDevices": {
            "references": [],
            "self": "https://.../inventory/managedObjects/2480300/childDevices"
        },
        "deviceParents": {
            "references": [],
            "self": "https://.../inventory/managedObjects/2480300/deviceParents"
        }
    }

The example above contains a number of metadata items for the device:

-   "c8y\_IsDevice" marks devices that can be managed using Cumulocity's Device Management.
-   "com\_cumulocity\_model\_Agent" marks devices running a Cumulocity agent. Such devices will receive all operations targeted to themselves and their children for routing.
-   "c8y\_SupportedOperations" states that this device can be restarted and configured. In addition, it can carry out software and firmware updates.

For more information, please refer to the [Device management library](/guides/reference/device-management).

If the device could be successfully created, a status code of 201 is returned. If the original request contains an "Accept" header as in the example, the complete created object is returned including the ID and URL to reference the object in future requests. The returned object also include references to collections of child devices and child assets that can be used to add children to the device (see below).

### Step 3: Register the device

After the new device has been created, it can now be associated with its built-in identifier as described in Step 1. This ensures that the device can find itself in Cumulocity after the next power-up.

Continueing the above example, we would associate the newly created device "2480300" with its hardware serial number:

    POST /identity/globalIds/2480300/externalIds HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.externalId+json
    Accept: application/vnd.com.nsn.cumulocity.externalId+json
    ...
    {
        "type" : "c8y_Serial",
        "externalId" : "raspi-0000000017b769d5"
    }

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.externalId+json;charset=UTF-8;ver=0.9
    ...
    {
        "externalId": "raspi-0000000017b769d5",
        "managedObject": {
            "id": "2480300",
            "self": "https://.../inventory/managedObjects/2480300"
        },
        "self": "https://.../identity/externalIds/c8y_Serial/raspi-0000000017b769d5",
        "type": "c8y_Serial"
    }

### Step 4: Update the device in the inventory

If Step 1 above returned that the device was previously registered already, we need to make sure that the inventory representation of the device is up to date with respect to the current state of the actual device. For this purpose, a PUT request is sent to the URL of the device in the inventory. Note that only fragments that can actually change need to be transmitted. (See [Cumulocity's domain model](/guides/concepts/domain-model) for more information on fragments.)

For example, the hardware information of a device will usually not change, but the software installation may change. So it may make sense to bring the software information in the inventory up to the latest state after a reboot of the device:

    PUT /inventory/managedObjects/2480300 HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
    ...
    {
        "c8y_Software": {
            "pi-driver": "pi-driver-3.4.6.jar",
            "pi4j-gpio-extension": "pi4j-gpio-extension-0.0.5.jar"
        }
    }   

    HTTP/1.1 200 OK

> Do not update the name of a device from an agent! An agent creates a default name for a device so that it can be identified in the inventory, but users should be able to edit this name or update it with information from their asset management.

### Step 5: Discover child devices and create or update them in the inventory

Depending on the complexity of the sensor network, devices may have child devices associated with them. A good example is home automation: You often have a home automation gateway that installs a multitude of different sensors and controls installed in various rooms of the household. The basic registration of child devices is similar to the registration of the main device up to the fact, that child devices usually do not run an agent instance (hence the "com\_cumulocity\_model\_Agent" fragment is left out). To link a device with a child, send a POST request to the child devices URL that was returned when creating the object (see above).

For example, assume a child device with the URL "https://.../inventory/managedObjects/2543801" has already been created. To link this device with its parent, issue:

    POST /inventory/managedObjects/2480300/childDevices HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json
    { "managedObject" : { "self" : "https://.../inventory/managedObjects/2543801" } } 

    HTTP/1.1 201 Created

Finally, devices and references can be deleted by issueing a DELETE request to their URLs. For example, the reference from the parent device to the child device that we just created can be removed by issueing:

    DELETE /inventory/managedObjects/2480300/childDevices/2543801 HTTP/1.1

    HTTP/1.1 204 No Content

This does not delete the device itself in the inventory, only the reference. To delete the device, issue:

    DELETE /inventory/managedObjects/2543801 HTTP/1.1

    HTTP/1.1 204 No Content

This request will also delete all data associated with the device including its registration information, measurements, alarms, events and operations. Usually, it is not recommended to delete devices automatically. For example, if a device has just temporarily lost its connection, you usually do not want to loose all historical information associated with the device.

### Working with operations

Each operation in Cumulocity is cycled through an execution flow. When an operation is created through a Cumulocity application, its state is "PENDING", i.e., it has been queued for executing but it hasn't executed yet. When an agent picks up the operation and starts executing it, it marks the operations as "EXECUTING" in Cumulocity. The agent will then carry out the operation on the device or its children (for examples, it will restart the device, or set a relay). Then it will possibly update the inventory reflecting the new state of the device or its children (e.g., it updates the current state of the relay in the inventory). Then the agent will mark the operation in Cumulocity as either "SUCCESSFUL" or "FAILED", potentially indicating the error.

![Operation status diagram](/guides/images/rest/operations.png)

The benefit of this execution flow is that it support devices that are offline and temporarily out of coverage. It also allows devices to support operations that require a restart -- such as a firmware upgrade. After the restart, the device needs to know what it previously did and hence needs to query all "EXECUTING" operations and see if they were successful. Also, it needs to listen what new operations may be queued for it.

### Step 6: Finish operations and subscribe

To clean up operations that are still in "EXECUTING" status, query operations by agent ID and status. In our example, the request would be:

    GET /devicecontrol/operations?agentId=2480300&status=EXECUTING HTTP/1.1

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.operationCollection+json;; charset=UTF-8; ver=0.9
    ...
    {
        "next": "https://.../devicecontrol/operations?agentId=2480300&status=EXECUTING",
        "operations": [
            {
                "creationTime": "2013-08-29T19:49:15.239+02:00",
                "deviceId": "2480300",
                "id": "2593101",
                "self": "https://.../devicecontrol/operations/2480300",
                "status": "EXECUTING",
                "c8y_Restart": {
                }
            }
        ],
        "statistics": {
            "currentPage": 1,
            "pageSize": 2000
        },
        "self": "https://.../devicecontrol/operations?agentId=2480300&status=EXECUTING"
    }

The restart seems to have executed well -- we are back after all. So let's set the operation to "SUCCESSFUL".

    PUT /devicecontrol/operations/2480300 HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.operation+json
    {
        "status": "SUCCESSFUL"
    }

    HTTP/1.1 200 OK

Then, listen to new operations created in Cumulocity. The mechanism for listening to real-time data in Cumulocity is described in [Real-time notifications](/guides/reference/real-time-notifications) and is based on the standard Bayeux protocol. First, a handshake is required. The handshake tells Cumulocity what protocols the agent supports for notifications and allocates a client ID to the agent.

    POST /devicecontrol/notifications HTTP/1.1
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
        "clientId": "139jhm07u1dlry92fdl63rmq2c",
        "minimumVersion": "1.0",
        "successful": true
    }]

Afterwards, the device respectively the agent needs to subscribe to notifications for operations. This is done using a POST request with the ID of the device as subscription channel. In our example, the Raspberry Pi runs an agent and has ID 2480300:

    POST /devicecontrol/notifications HTTP/1.1
    Content-Type: application/json
    ...
    [ {
        "id": "2",
        "channel": "/meta/subscribe",
        "subscription": "/2480300",
        "clientId":"139jhm07u1dlry92fdl63rmq2c"
    }]

    HTTP/1.1 200 OK
    ...
    [ { 
        "id":"2",
        "channel": "/meta/subscribe",
        "subscription": "/2480300",
        "successful": true,
    } ]

Finally, the device connects and waits for operations to be sent to it.

    POST /devicecontrol/notifications HTTP/1.1
    Content-Type: application/json
    ...
    [ {
        "id": "3",
        "connectionType": "long-polling",
        "channel": "/meta/connect",
        "clientId": "139jhm07u1dlry92fdl63rmq2c"
    } ]

This request will hang until an operation is issued, i.e. the HTTP server will not answer immediately, but wait until an operation is available for the device (long polling).

Note that there might have been operations that were pending before we subscribed to new incoming operations. We need to query these still. This is done after the subscription to not miss any operations between query and subscription. The technical handling is just like previously described for "EXECUTING" operations, but using "PENDING" instead:

    GET /devicecontrol/operations?agentId=2480300&status=PENDING HTTP/1.1