---
weight: 76
title: SNMP
layout: redirect
---
### Overview

Simple Network Management protocol (SNMP) is an application layer protocol, used widely in network management for monitoring network devices. There are two components that helps SNMP enabled devices to connect to Cumulocity Platform,

1. mib-parser microservice helps in converting Managed Information Base (MIB) files to json representation which is then used to create device protcol
2. Cumulocity SNMP agent is a device side agent that helps SNMP enabled devices to connect to Cumulocity platform and performs message translation from SNMP specific format to Cumulocity model before forwarding to the Cumulocity platform.

The following image provides a general overview of the SNMP enabled device integration with Cumulocity:

![Cumulocity SNMP Integration](/guides/images/users-guide/snmp/snmp-cumulocity-integration.png)

### Subscribing to mib-parser microservice

**mib-parser** is a open source, multi-tenant microservice. Before starting SNMP device integration, make sure that your tenant is subscribed to the microservice. The source code can be found https://bitbucket.org/m2m/c8y-mib-parser/src/develop. Follow the README.md to build the microservice.

#### Using Management tenant

1. Login to management tenant
2. In the Administration application, click on **Tenants** > **Subtenants** in the left menu.  
3. Click on the subtenant for which microservice needs to be subscribed
4. Switch to the **Applications** tab.
5. Check if mib-parser is listed under **Subscribed applications**.
6. If the tenant is not yet subscribed to the microservice, search for the microservice in **Available applications** and click on **Subscribe** button.    
7. On successful subscription, the mib-parser microservice will appear under **Applications** > **Subscribed applications** in the child tenant login.

![Subscribed applications - Mibparser](/guides/images/users-guide/snmp/snmp-subscribed-applications.png)

#### Tenant having microservice hosting privilege

1. Login to the tenant
2. In the Administration application, click on **Applications** > **Own applications** in the left menu.  
3. Click on "Add application"
4. Select the method as **Upload microservice**.
5. Upload the mib-parser microservice zip file.
6. In the pop **Subscribe to microservice** click on **Subscribe** button
7. On successful subscription, the mib-parser microservice will appear under **Own applications**.
8. Click on the uploaded application (Mibparser) to know more about the microservice.

![Own applications - Mibparser](/guides/images/users-guide/snmp/snmp-own-applications.png)

### Creating device protocol

SNMP device protocol can be either created manually or by importing an MIB file shared by the device manufacturer. This device protocol will be later used while adding SNMP device to the platform.

#### Using MIB file from User Interface

1. Create an zip file using the following format. The zip file should contain top level MIB file along with dependent MIB files and an index file named mib-index which contains the name of the top level MIB file name.
![Subscribed applications](/guides/images/users-guide/snmp/snmp-mib-zipfile-structure.png)
2. In the Device Management application, click on **Device types** > **Device protocols**
3. In the resulting screen, click on the **Import** button on the top right menu
4. In the "SELECT DEVICE PROTOCOL" section, choose the MIB zip file for the field **Or load it from a file**
5. In the "SAVE WITH THE FOLLOWING NAME" section, provide suitable name for the device protocol in **Name** field
6. Click on **Import** button.
7. On successful import, the newly added device protocol will be listed in **Device protocols**

![Device protocol - SNMP](/guides/images/users-guide/snmp/snmp-device-protocol.png)

#### Device protocol via REST API

**Step-1:** Upload the MIB file and note down the json response

	POST /service/mibparser/mib/uploadzip
	Authorization: Basic ...
	Content-Type: multipart/form-data; boundary=----WebKitFormBoundary8WCDTr2uRkbroQ11
	
	------WebKitFormBoundary8WCDTr2uRkbroQ11
	Content-Disposition: form-data; name="file"; filename="APPN-TRAP-MIB_02.zip"
	Content-Type: application/zip
	------WebKitFormBoundary8WCDTr2uRkbroQ11--

**Step-2:** Use the json response and create device protocol managed object

	POST /inventory/managedObjects
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json;
	{ 
		"name": "snmp-device-protocol",
		"fieldbusType": "snmp",
		"type": "c8y_ModbusDeviceType",
		"fieldbusVersion": 4,
		"c8y_IsDeviceType": {},
		"c8y_Global": {},
		"c8y_Registers": [
		    <<This is the response of the above POST call>>
		]
	}

#### Manual Entry

Device protcol can also be created manually. For this, one needs to know the OIDs supported by the device. This method is suitable for less number of OIDs supported by the device or for testing purpose.

1. Open Device Management application
2. Click on **Device types** > **Device protocols**
3. Click on **Add device protocol** on the top right menu
4. Select SNMP as device protocol
5. Enter the name for the device protocol and description
6. Click on the **Create** button. On successful creation, the new device protocol will be listed in the Device protocols screen
7. Click on the newly created device protocol
8. Click on **Add component**
9. Provide OID details and device procotol mapping for the OID
10. Click on **Save** button

![Device protocol - SNMP](/guides/images/users-guide/snmp/snmp-device-protocol-manual.png)


### Device protocol mapping

This is a configuration step and the information is used by the agent. The mapping helps agent to know how to deal with the incoming data from the SNMP-enabled devices. It is basically allows user to configure an OID with corresponding Cumulocity object such as Alarm, Event or Measurement. This information is later used by the agent to convert incoming data (say TRAP) to corresponding Cumulocity object/s that are defined in the mapping.

#### Creating mapping from User Interface

1. Open Device Management application
2. Click on **Device types** > **Device protocols**
3. Open the device protocol (say snmp-device-protocol). It will show a list of components representing the OIDs.

	![Device protocol details](/guides/images/users-guide/snmp/snmp-device-protocol-detail.png)
 
4. Click the menu icon at the right side of the component and then click **Edit** to configure the mapping for the component.
5. Under FUNCTIONALITIES, switch the toggle button to turn ON the mapping for the required Cumulocity model (**Send measurement**, **Raise alarm** and/or **Send event**). Fill in the values for respective fields and click on **Save** button.
  
	![Edit components details](/guides/images/users-guide/snmp/snmp-device-protocol-mapping.png)

6. Click on **Save** button at the device protocol screen to finally save the changes. 

#### Creating mapping via REST API

	PUT /inventory/managedObjects/{{device.protocol.id}}
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
	{ 
	   "id":"18849",
	   "name":"snmp-device-protocol",
	   "owner":"snmp-test",
	   "description":"snmp-device-protocol",
	   "fieldbusType":"snmp",
	   "type":"c8y_ModbusDeviceType",
	   "fieldbusVersion":4,
	   "c8y_Coils": [],
	   "c8y_Global": {},
	   "c8y_IsDeviceType": {},
	   "c8y_Registers": [ 
		{
			"id": "22555518094562443"
			"name": "CPU",
			"number": null,
			"multiplier": 1,
			"divisor": 1,
			"offset": 0,
			"decimalPlaces": 0,
			"startBit": 0,
			"noBits": 16,
			"unit": "",
			"signed": false,
			"input": false,
			"category": "cpu",
			"description": "CPU",
			"oid": "1.3.6.1.2.1.34.4.0.2",
			"measurementMapping": { 
				"type": "c8y_CPU",
				"series": "T",
				"sendMeasurementTemplate": 301
			}
		}
	   ]
	}

### SNMP Agent

#### Introduction

The SNMP Agent is a stand-alone Java program that communicates with SNMP-enabled device(s) and the Cumulocity platform. It receives SNMP data from the devices, converts the data to Cumulocity based object based on the device protocol mapping, persist the data locally, and forwards the data to the Cumulocity platform. The agent has to be registered in the Cumulocity platform before serving the device request.

#### Configuration

##### Preconditions

The agent requires Java 8 to run.

##### Configuration file

The agent expects *snmp-agent-gateway.properties* configuration file to be present in 

	${user.home}/.snmp/snmp-agent-gateway.properties

If you install the RPM the property file can be found under */etc/snmp-agent-gateway/snmp-agent-gateway.properties*. Move this file to *${user.home}/.snmp* folder and update the properties.

For detailed information on the *snmp-agent-gateway.properties* file and how to start agent, refer [SNMP Agent Operation Manual](/guides/images/users-guide/snmp/file/snmp_agent_operations_manual.pdf).

### Agent registration

Before any SNMP device can connect to Cumulocity, first the SNMP agent needs to be registered in Cumulocity platform. 

#### To register the agent from user interface

1. In the Device Management application, navigate to **Devices** > **Registration**.
1. Click on **Register device** button and then select **General device registration**.
2. In the resulting dialog box, enter the device ID. The device ID correspsonds to the *gateway.identifier* value mentioned in the *snmp-agent-gateway.properties* file.
3. Click **Next** to proceed with the device registration and click on **Complete** button.
4. On complete, the **Device registration** page will list the newly added device with status as "WAITING FOR CONNECTION"
5. If the agent process is started and if the device ID is correct you will see an **Accept** button. If the agent is not started, start the agent application.
6. Click on **Accept** button to complete the registration process.
7. After successful registration, the agent device will be added to the device list in the **All devices** page, with device ID as name.

![Device list](/guides/images/users-guide/snmp/snmp-devices-list.png)

#### To register the agent via REST API

**Step-1:** Create new device request

	POST /devicecontrol/newDeviceRequests
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json
    {
        "id": "snmp-agent" // should be the same as "gateway.identifier" value from the snmp-agent-gateway.properties file.
    }

**Step-2:** Accept the new device request

	PUT /devicecontrol/newDeviceRequests/snmp-test
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.newDeviceRequest+json
    {
        "status": "ACCEPTED"
    }

### Adding SNMP devices 

SNMP enabled devices can be added manually or through auto-discovery method.

#### Autodiscovery

The Autodiscovery functionality helps user to scan SNMP enabled devices in the network for the given IP range. Identified devices will be added as a child to the agent device in the platform. This functionality is helpful when there are many devices to be added to the agent, instead of manually adding all the devices, one can use auto-discovery functionality. The **Ip range** field accepts multiple IP ranges separated by comma. For example, "10.23.52.51-10.23.52.54,192.168.0.1-192.168.0.5". It also supports IPv6 IP address format.

There are two supported ways of discovering devices.

1. Autodiscovery once - If the number of SNMP enabled devices are fixed and if it doesn't change often, auto-discovery can be done once. This avoids network congession due to repeated auto-discovery of same devices.
2. Scheduled Autodiscovery - If the number of devices keeps varying (addition and removal of devices happens often), auto-discovery can be scheduled to run for every interval.

Both ways of device discovery can be controlled from user interface.

![Autodiscovery](/guides/images/users-guide/snmp/snmp-autodiscovery.png)

##### Start autodiscovery from user interface

1. In the Device Management application, click on **Devices** > **All devices**
2. In **All devices** screen, click on SNMP agent device
3. In the SNMP agent device screen, click on **SNMP** tab in the left menu
4. In the AUTODISCOVERY section, mention the **IP range** and click on **Save changes**
5. Once the changes are saved, **Start autodiscovery** button gets enabled.
6. To start autodiscovery once, click on **Start autodiscovery** button. This will create an operation whose status can be monitored in **Control** tab in the left menu
7. Once the operation gets completed, if there are any new SNMP enabled devices identified, it gets added to **SNMP devices** list. Alternatively, added SNMP devices can be seen in **Child devices** tab in the left menu.
8. In case if you want to run auto-discovery after every interval, mention the interval in **Scheduled interval** field and click on **Save changes** button. 
9. On saving the configuration, once the agent refreshes the configuration data, scheduled auto-discovery will be triggered. No need to click on **Start autodiscovery** button for scheduled autodiscovery.

![Autodiscovery SNMP device list](/guides/images/users-guide/snmp/snmp-autodiscovered-devices.png)

Note:

1. For the newly found SNMP device, the default device name will be mentioned as `Device-<device-ip-address>`, the IP Address will be `<device-ip-address>` and the default port number is `161`. All other details will be empty and have to be entered manually.
2. An alarm will be generated
	- if an existing device in the platform is not reachable during the autodiscovery scan.
	- if a device is discovered but it is not SNMP-enabled.

##### Start autodiscovery via REST API

The following REST call will trigger auto-discovery once

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

The following REST call schedules auto-discovery for the given interval.

	PUT /inventory/managedObjects/{{agent.device.id}}
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
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

#### Adding SNMP devices manually

1. In the Device Management application, click on **Devices** > **All devices**
2. In **All devices** screen, click on SNMP agent device
3. In the SNMP agent device screen, click on **SNMP** tab in the left menu

![SNMP tab](/guides/images/users-guide/snmp/snmp-snmp-tab.png)

##### To add SNMP device manually from user interface

1. In the **SNMP devices** section, click **Add SNMP device**.
2. Provide the SNMP device details:
	- **Name**: Provide a meaningful name to identify the device.
	- **Device Type**: Select the device protocol relevant to the device which is getting added. Device protocol contains OID and mapping of OID to Cumulocity model such as alarm/event/measurement.
	- **IP Address**: IP Address of the device.
	- **Port**: Port to be used during device polling.
	- **SNMP Version**: Select one of the 3 SNMP versions (v1, v2c and v3) supported by the Cumulocity SNMP agent. 
		- for v1 and v2c, the community target is configurable at the agent side (snmp-agent-gateway.properties)
		- If you select v3, various additional parameters have to be provided under **DEVICE AUTHENTICATION DETAILS** such as,
			- **User name**: Provide a valid user name for the device which will be used to authenticate the TRAPs coming from the device.
			- **Engine ID**: The engine ID must be unique for each device and cannot be edited once saved. The length of the engine ID must have of a minimum of 5 and a maximum of 32 characters.
			- **Security Level**: There are three types of security levels supported by SNMP v3 (NOAUTH_NOPRIV, AUTH_NOPRIV, AUTH_PRIV). Depending on the security level selected, you need to provide **AUTHENTICATION** and/or **PRIVACY** details. 
3. Once all the details are provided, click on **Add** button to add the device.
4. On successful addition, the SNMP device will be listed in **SNMP devices** list and also in **Child devices** tab.
       
![Device details](/guides/images/users-guide/snmp/snmp-device-details.png)

NOTE: 
In case, if a TRAP is received by the agent from a device which is not registered, the agent raises a major alarm that a TRAP has been received from an unknown device, showing its IP address. The alarm can be viewed in the **Alarms** tab of the agent device.

##### To add SNMP device via REST API

**Step-1:** Create a device in the platform

If you want to create a SNMP device with SNMP v1 or v2c,

	POST /inventory/managedObjects
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
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

For SNMP v3, additional Authentication and Privacy details has to be provided as,

	POST /inventory/managedObjects
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
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

Security level and protocols can have following values,

`securityLevel`

    “securityLevel”: 1 //NOAUTH_NOPRIV
    “securityLevel”: 2 //AUTH_NOPRIV
    “securityLevel”: 3 //AUTH_PRIV
   
`authProtocol`

    “authProtocol”: 1 // MD5
    “authProtocol”: 2 // SHA

`privProtocol`

    “privProtocol”: 1 // DES	
    “privProtocol”: 2 // AES128
    “privProtocol”: 3 // AES192
    “privProtocol”: 4 // AES256

**Step-2:** Add the SNMP device as a child device under the agent

	POST /inventory/managedObjects/{{agent.device.id}}/childDevices
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json
    {
		"managedObject": {
			"id": "{{snmp.device.id}}"
		}
    }

To update the SNMP device details, use the following REST API:

	PUT /inventory/managedObjects/{{snmp.device.id}}
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
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

### TRAP processing

A TRAP is an urgent message sent from the SNMP device to the agent. The SNMP device needs to send the TRAPs to the agent at the port number defined in *snmp.trapListener.port* in agent configuration file (default port number is 6671). For this, SNMP device needs to be configured with the agent connectivity details. 

For SNMP v1 and v2c, community target has to be same in agent and SNMP device. At the agent side, this is configured in snmp-agent-gateway.properties and this should match with the SNMP device. In case of SNMP v3, the authentication and privacy details needs to be configured before SNMP device could send the TRAP to agent.

A TRAP contains a PDU object which is configured with an OID and a value. If this OID is configured with a mapping in the device protocol assigned to SNMP device in the platform, based on the mapping configured corresponding Cumulocity object/s such as alarm/event/measurement will be created in the platform.

### Device polling

The SNMP agent provides capability to poll for SNMP device data by the OID. In the device protocol that is configured for the SNMP device, if any of the OID has measurement mapping enabled, those OIDs will be polled for the data. If the OID does not contain measurement mapping, those will be skipped from polling.

#### To enable polling from user interface

1. In the Device Management application, click on **Devices** > **All devices**
2. In **All devices** screen, click on SNMP agent device
3. In the SNMP agent device screen, click on **SNMP** tab in the left menu
4. In the **SNMP communication** section, provide the polling interval in the field **Polling rate**. For example: If the value is set to "5", the agent polls the SNMP devices OID(s) data every 5 seconds. To stop the polling, set the polling interval to 0 or an empty value.  
5. Click on the **Save changes** button.

![SNMP Device polling](/guides/images/users-guide/snmp/snmp-polling.png)  

The data received via polling is mapped to Cumulocity models based on the mapping defined. As the OIDs contain measurement mapping, the measurements can be viewed in the **Measurements** tab of the snmp device.

![SNMP device measurement graph](/guides/images/users-guide/snmp/snmp-measurement-graph.png)  

#### To enable polling via REST API

The following REST call schedules the polling with a given time period. 

	PUT /inventory/managedObjects/{{agent.device.id}}
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json
    {
        "id": "{{agent.device.id}}",
        "c8y_SNMPGateway": {
            "maxFieldbusVersion": 4,
            "ipRange": "",
            "autoDiscoveryInterval": null,
			"pollingRate": 5,    // Polling rate in seconds
            "transmitRate": 10,
        }
    }

**Transmit rate** is the interval at which, the data from agent is sent to the platform. For example: if the transmit rate is 5 seconds, the data will be queued up at the agent side and sent to the platform after every 5 seconds. In case of measurements, if the number of measurements is more than 1, the measurements will be grouped and sent to the platform in batches. If number of measurements in the queue is more, maximum batch size will limit to 200 measurements in a single request (default is 200, but configuable in snmp-agent-gateway.properties). If the transmit rate is set to zero, the data will be sent to the platform as and when they are created.