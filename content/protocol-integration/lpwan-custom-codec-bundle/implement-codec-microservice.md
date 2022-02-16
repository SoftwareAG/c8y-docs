---
weight: 20
title: Implement a Custom Codec Microservice 
layout: redirect
---

Custom Codec Microservice is a typical {{< product-c8y-iot >}} Microservice, which can be implemented and enabled as follows.

1. Create a microservice which exposes `/encode` and `/decode` REST endpoints conforming to the [Open API spec](/files/rest/lpwan-custom-codec-openapi.yaml), implementing the encoding and decoding functionality.  

2. LPWAN agent discovers the codec microservice using the information available in certain fragments of the Device Type managed object associated with the Device. LPWAN agent uses these details in the device type to forward encode and decode requests to the corresponding endpoints exposed by the microservice. 
   So, you need to create a Device Type (with the `type`, `fieldbusType` properties and `c8y_LpwanCodecDetails` fragment) and an external Id for every Device Manufacturer and Device Model combination that this code microservice supports.
   `type` Always "c8y_LpwanDeviceType"
   `fieldbusType` Always "lpwan"
   `c8y_LpwanCodecDetails` Fragment contains 
      `codecServiceContextPath`- Custom Codec microservice context path
      `supportedDevice`- Supported device information 
         `deviceManufacturer`- Device Manufacturer, just informational 
         `deviceModel`- Device Model, just informational
      `supportedDeviceCommands`- A list of commands which this device supports
         `name`- Command name, matching the name of the Predefined Command template you create
         `category`- Command category, matching the category of the Predefined Command template you create

Sample json structure for creating device type using Inventory API
```json
{
	"name": "<<Name of the LPWAN Device Type>>",
	"description": "<<Description of the LPWAN Device Type>>",
	"type": "c8y_LpwanDeviceType",
	"fieldbusType": "lpwan",
	"c8y_IsDeviceType": {},
	"c8y_LpwanCodecDetails": {
		"codecServiceContextPath": "<<Custom Codec microservice context path>>",
		"supportedDevice": {
			"deviceManufacturer": "<<Supported device manufacturer>>",
            "deviceModel": "<<Supported device model>>",
			"supportedDeviceCommands": [
				{
					"name": "<<Command name, matching the name of the Predefined Command template you create>>",
					"category": "<<Command category, matching the category of the Predefined Command template you create>>"
				}
			]
		}
	}
}
```
Sample json structure for creating external id for the device type using Identity API.
```json
{
	"externalIds": [
		{
			"managedObject": "<<ID of the Device Type managed object>>",
			"externalId": "<<Device Type Name>>",
			"type": "c8y_SmartRestDeviceIdentifier"
		}
	]
}
```

3. LPWAN agent forwards the Device Shell command request to `/encode` endpoint only when a Predefined Command listed as supportedDeviceCommands in the `c8y_LpwanCodecDetails` fragment of the Device Type is executed. 
   So, you need to create a Predefined Command Template for every supported device command (`supportedDeviceCommands`) specified in the Device Type.

Following is the json structure for creating predefined command templates using inventory API. 

```json
 {
	"type": "c8y_DeviceShellTemplate",
	"name": "<<Command name, matching the name of the supported command mentioned in the device type>>",
	"deviceType": [
		"<<Device Type Name>>"
	],
	"category": "<<Command Category>>",
	"command": "<<Command string which gets copied to the device shell command prompt when the user chooses this Predefined command>>",
	"deliveryTypes": [
		"Default"
	]
}
```

