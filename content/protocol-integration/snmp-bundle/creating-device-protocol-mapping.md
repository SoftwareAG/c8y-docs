---
weight: 50
title: Creating device protocol mapping
layout: redirect
---


The device protocol mapping helps the agent to know how to deal with incoming data from the SNMP-enabled devices. It basically allows users to configure an OID with a corresponding {{< product-c8y-iot >}} object such as an alarm, event or measurement. This information is later used by the agent to convert incoming data (say TRAP) to corresponding {{< product-c8y-iot >}} object/s that are defined in the mapping.

### To create mapping from the UI {#to-create-mapping-from-the-ui}

1. In the Device management application, click **Device protocols** in the **Device types** menu in the navigator.
2. Open the desired device protocol (for example snmp-device-protocol). It shows a list of components representing the OIDs.

	![Device protocol details](/images/device-protocols/snmp/snmp-device-protocol-detail.png)

3. Click the menu icon <i class="dlt-c8y-icon-menu-vertical text-muted icon-20"></i> at the right of the component and click **Edit** to configure the mapping for the component.
4. Under **Functionalities**, switch the toggle button to turn on the mapping for the required {{< product-c8y-iot >}} model (**Send measurement**, **Raise alarm** and/or **Send event**). Fill in the values for the respective fields and click **Save**.

	![Edit components details](/images/device-protocols/snmp/snmp-device-protocol-mapping.png)

5. Click **Save** in the **Device protocol** page to finally save the changes.

### To create mapping via REST API {#to-create-mapping-via-rest-api}

	PUT /inventory/managedObjects/{{device.protocol.id}}
	Authorization: Basic ...
	Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json
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
