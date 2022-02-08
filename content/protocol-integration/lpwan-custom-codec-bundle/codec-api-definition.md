---
weight: 20
title: Codec API defintion
layout: redirect
---

LPWAN Agents provide a way to plugin custom codecs, capable of encoding and decoding the payloads to and from the LPWAN devices. 
A custom codec is a typical Cumulocity microservice conforming to the following contract.

1. Exposes `/encode` and `/decode` REST endpoints conforming to the Open API spec can be downloaded [here](/files/rest/lpwan-custom-codec-decode.json).
2. LPWAN agent identifies the custom codec microservice through the Device Type associated with the Device. 
LPWAN agent uses the codec details present in the device type to forward encode and decode requests to the corresponding endpoints exposed by the microservice. 
`c8y_LpwanCodecDetails` is the fragment that describes codec microservice details.
3. LPWAN agent forwards the Device operations to `/encode` endpoint only if the predefined operation named as one of the supported operations mentioned in the Device Type. 
Hence predefined operation has to be created for every operation supported by the device type.

Create a device type with the following fragments and an external Id to it using the identity API.
`c8y_LpwanCodecDetails` contains the `codecServiceContextPath`- Codec microservice context path and 
`supportedDevice`- supported device information `deviceManufacturer`, `deviceModel`, and list of `supportedDeviceCommands`.

Sample json structure for creating device type. 
```json
{
	"name": "<<Name of the LPWAN Device>>",
	"description": "<<Description of the LPWAN Device>>",
	"type": "c8y_LpwanDeviceType",
	"fieldbusType": "lpwan",
	"c8y_IsDeviceType": {},
	"c8y_LpwanCodecDetails": {
		"codecServiceContextPath": "<<microservice-context-path>>",
		"supportedDevice": {
			"deviceManufacturer": "<<Supported device manufacturer>>",
            "deviceModel": "<<Supported device model>>",
			"supportedDeviceCommands": [
				{
					"name": "<<Command Name>>",
					"category": "<<Command Category>>",
					"command": "<<Command string which user can change that gets passed to /encode endpoint>>",
					"deliveryTypes": [
						"Default"
					]
				}
			]
		}
	}
}
```
Sample json structure for creating external id to the created device type.
```json
{
	"externalIds": [
		{
			"managedObject": "<<MO of the device type>>",
			"externalId": "<<Device Type Name>>",
			"type": "c8y_SmartRestDeviceIdentifier"
		}
	]
}
```

Predefined templates needs to be created with the following structure for every supported command mentioned above in the `supportedDeviceCommands` 
by mapping the `deviceType` fragment with the device type name.

Following is the json structure for creating predefined command templates using inventory API. 

```json
 {
	"type": "c8y_DeviceShellTemplate",
	"name": "<<Command Name>>",
	"deviceType": [
		"<<Device Type Name>>"
	],
	"category": "<<Command Category>>",
	"command": "<<Command string which user can change that gets passed to /encode endpoint>>",
	"deliveryTypes": [
		"Default"
	]
}
```

