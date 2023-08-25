---
weight: 60
title: Adding SNMP devices
layout: redirect
---

SNMP-enabled devices can be added manually or through the autodiscovery method.

### Autodiscovery {#autodiscovery}

The autodiscovery functionality allows to scan SNMP-enabled devices in the network for a given IP range. Identified devices will automatically be added as a child to the agent device in the platform. This functionality is helpful when you must add a large number of devices to the agent. Instead of adding all devices manually, you can use the autodiscovery functionality. The **IP range** field accepts multiple IP ranges separated by comma, for example "10.23.52.51-10.23.52.54,192.168.0.1-192.168.0.5". It also supports the IPv6 IP address format.

There are two supported ways of discovering devices.

* **Autodiscovery once** - If the number of SNMP-enabled devices is fix and  doesn't change often, autodiscovery can be done once. This avoids network congestion due to repeated autodiscovery of same devices.
* **Scheduled autodiscovery** - If the number of devices keeps varying (addition and removal of devices happens often), autodiscovery can be scheduled to run for every interval.

Both ways of device discovery can be controlled from the user interface.

![Autodiscovery](/images/device-protocols/snmp/snmp-autodiscovery.png)

#### To start autodiscovery from the UI {#to-start-autodiscovery-from-the-ui}

1. In the Device management application, click **All devices** in the **Devices** menu in the navigator.
2. In the devices list, click on the SNMP agent device and open the **SNMP** tab of the device.
3. Enter the **IP range** and click **Save**.
4. Once the changes are saved, the **Start autodiscovery** button gets enabled.
5. Click **Start autodiscovery**. The operation being started can be monitored in the **Control** tab.

If a new SNMP-enabled device is identified, it will be added to the devices list. Alternatively, added SNMP devices can be seen in the **Child devices** tab.

If you want to run autodiscovery after every interval, enter the interval in the **Scheduled interval** field and click **Save**. When the agent refreshes the configuration data, the scheduled autodiscovery will automatically be started. You don´t need to click **Start autodiscovery** in case of scheduled autodiscovery.

![Autodiscovery SNMP device list](/images/device-protocols/snmp/snmp-autodiscovered-devices.png)


For the newly found SNMP device, the default device name will be mentioned as `Device-<device-ip-address>`, the IP address will be `<device-ip-address>` and the default port number is `161`. All other details will be empty and must be entered manually.

An alarm will be generated

* 	if an existing device in the platform is not reachable during the autodiscovery scan.
* 	if a device is discovered but it is not SNMP-enabled.

#### To start autodiscovery via REST API {#to-start-autodiscovery-via-rest-api}

The following REST call will trigger autodiscovery once:

	POST /devicecontrol/operations
	Authorization: Basic ...
	Content-Type: application/json
    {
        "deviceId": "{{agent.device.id}}",
        "description": "Autodiscovery request",
        "c8y_SnmpAutoDiscovery": {
            "ipRange": "10.23.52.51-10.23.52.54"
        }
    }

The following REST call schedules autodiscovery for the given interval:

	PUT /inventory/managedObjects/{{agent.device.id}}
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json
    {
        "id": "{{agent.device.id}}",
        "c8y_SNMPGateway": {
            "ipRange": "10.23.52.51-10.23.52.54",
            "autoDiscoveryInterval": 10,     // Scheduling interval in minutes
            "maxFieldbusVersion": 4,
			"transmitRate": 0,
			"pollingRate": 0
        }
    }

### Adding SNMP devices manually {#adding-snmp-devices-manually}

#### To add a SNMP device manually from the UI {#to-add-a-snmp-device-manually-from-the-ui}

1. In the Device management application, click **All devices** in the **Devices** menu in the navigator.
2. In the devices list, click on the SNMP agent device and open the **SNMP** tab of the device.<br><br>![SNMP tab](/images/device-protocols/snmp/snmp-snmp-tab.png)<br>
3. In the **SNMP devices** section, click **Add SNMP device**.
4. Provide the SNMP device details:
	<table>
	<colgroup>
       <col style="width: 15%;">
       <col style="width: 85%;">
    </colgroup>
	<thead>
	<tr>
	<th align="left">Field</th>
	<th align="left">Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	<td align="left">Name</td>
	<td align="left">Provide a meaningful name to identify the device.</td>
	</tr>
	<tr>
	<td align="left">Device type</td>
	<td align="left">Select the device protocol relevant for the device being added. The device protocol contains the OID and the mapping of the OID to the {{< product-c8y-iot >}}'s model such as alarm/event/measurement.</td>
	</tr>
	<tr>
	<td align="left">IP address</td>
	<td align="left">IP address of the device.</td>
	</tr>
	<tr>
	<td align="left">Port</td>
	<td align="left">Port to be used during device polling.</td>
	</tr>
	<tr>
	<td align="left">SNMP version</td>
	<td align="left">Select one of the 3 SNMP versions (v1, v2c and v3) supported by the SNMP agent:<br>For v1 and v2c, the community target is configurable at the agent side (snmp-agent-gateway.properties).<br>For v3, various additional parameters must be provided under <strong>Device authentication details</strong>:<br>- <strong>Username</strong>: Provide a valid username for the device which will be used to authenticate the TRAPs coming from the device. <br>- <strong>Engine ID</strong>: The engine ID must be unique for each device and cannot be edited once saved. The length of the engine ID must have of a minimum of 5 and a maximum of 32 characters.<br>- <strong>Security Level</strong>: There are three types of security levels supported by SNMP v3 (NOAUTH_NOPRIV, AUTH_NOPRIV, AUTH_PRIV). Depending on the security level selected, you must provide authentication and/or privacy details.</td>
	</tr>
	</tbody>
	</table>
5. Click **Add** to add the device.

The SNMP device will be listed in the devices list and in the **Child devices** tab.


#### To add a SNMP device via REST API {#to-add-a-snmp-device-via-rest-api}

**Step-1:** Create a device in the platform:

For a SNMP device with SNMP v1 or v2c

	POST /inventory/managedObjects
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json
	{
	   "name":"snmp-device-0",
	   "type":"snmp-device-protocol",
	   "owner":"{{tenant.user}}"
	   "c8y_SNMPDevice":{
		  "ipAddress":"192.168.0.1",
		  "port":"161",
		  "version":0,              // 0 for v1, 1 for v2c and 3 for v3
		  "auth":{},
		  "type":"/inventory/managedObjects/{{device.protocol.id}}"
	   }
	}

After posting the above request you will get a response similar to the one below. Note down the SNMP device ID (snmp.device.id).

	{
	   "id": "18955",
	   "owner": "{{tenant.user}}",
	   "name": "snmp-device-0",
	   "type": "snmp-device-protocol",
	   "c8y_SNMPDevice": {
			"port": "161",
			"auth": {},
			"ipAddress": "127.0.0.1",
			"type": "/inventory/managedObjects/{{device.protocol.id}}",
			"version": 0
		}
	   ...
	}

For SNMP v3, additional authentication and privacy details must be provided:

	POST /inventory/managedObjects
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json
    {
    	"name": "snmp-device-3",
    	"type": "snmp-device-protocol",
		"owner": "{{tenant.user}}",
    	"c8y_SNMPDevice": {
    		"ipAddress": "192.168.0.1",
    		"port": "161",
    		"version": 3,
    		"auth": {
    			"username": "my-user",
				"engineId": "12:23:4B:3F",
				"securityLevel": 3,
				"authProtocol": 2,
    			"authPassword": "***",
    			"privProtocol": 1,
				"privPassword": "****",
    		},
    		"type": "/inventory/managedObjects/{{device.protocol.id}}"
    	}
    }

Security level and protocols can have the following values:

**securityLevel**

    "securityLevel": 1 //NOAUTH_NOPRIV
    "securityLevel": 2 //AUTH_NOPRIV
    "securityLevel": 3 //AUTH_PRIV

**authProtocol**

    "authProtocol": 1 // MD5
    "authProtocol": 2 // SHA

**privProtocol**

    "privProtocol": 1 // DES
    "privProtocol": 2 // AES128
    "privProtocol": 3 // AES192
    "privProtocol": 4 // AES256

**Step-2:** Add the SNMP device as a child device under the agent:

	POST /inventory/managedObjects/{{agent.device.id}}/childDevices
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobjectreference+json
    {
		"managedObject": {
			"id": "{{snmp.device.id}}"
		}
    }

To update the SNMP device details, use the following REST API:

	PUT /inventory/managedObjects/{{snmp.device.id}}
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json
    {
        "name": "snmp-device-1",
        "type": "snmp-device-protocol",
		"owner": "{{tenant.user}}",
        "c8y_SNMPDevice": {
            "ipAddress": "192.168.0.1",
            "port": "161",
            "version": 2,
            "auth": {},
            "type": "/inventory/managedObjects/{{device.protocol.id}}"
        }
    }

To delete the SNMP device, use the following REST API:

	DELETE /inventory/managedObjects/{{snmp.device.id}}
	Authorization: Basic ...
