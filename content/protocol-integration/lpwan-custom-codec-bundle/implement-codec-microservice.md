---
weight: 20
title: Implementing a custom codec microservice
layout: redirect
---

A custom codec microservice is a typical {{< product-c8y-iot >}} microservice, which can be implemented and enabled as follows.

1. Create a microservice which exposes the `/encode` and `/decode` REST endpoints conforming to the [OpenAPI Specification](/files/rest/lpwan-custom-codec-openapi.yaml), implementing the encoding and decoding functionality.  

2. The LPWAN agent discovers the codec microservice using the information available in certain fragments of the device type managed object associated with the device. The LPWAN agent uses these details in the device type to forward encode and decode requests to the corresponding endpoints exposed by the microservice.

    You need to create a device type (with `type` and `fieldbusType` properties, and the `c8y_LpwanCodecDetails` fragment) as well as an external ID for every device manufacturer and device model combination that this codec microservice supports:

    * `type` is always "c8y_LpwanDeviceType".
    * `fieldbusType` is always "lpwan".
    * The `c8y_LpwanCodecDetails` fragment contains:
        * `codecServiceContextPath`- Custom codec microservice context path.
        * `supportedDevice`- Supported device information.
            *  `deviceManufacturer`- Device manufacturer.
            *  `deviceModel`- Device model.
        * `supportedDeviceCommands`- A list of commands which this device supports:
            * `name`- Command name, matching the name of the predefined command template you create (see below).
            * `category`- Command category, matching the category of the predefined command template you create (see below).

    <br/>

    Example for the JSON structure for creating a device type using the Inventory API:

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

    Example for the JSON structure for creating an external ID for the device type using the Identity API:

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

3. The LPWAN agent forwards the device shell command request to the `/encode` endpoint only when a predefined command listed as "supportedDeviceCommands" in the `c8y_LpwanCodecDetails` fragment of the device type is executed.

    You need to create a predefined command template for every supported device command (`supportedDeviceCommands`) specified in the device type.

    The following example shows the JSON structure for creating a predefined command template using the Inventory API:

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
