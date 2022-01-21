---
weight: 20
title: Codec API defintion
layout: redirect
---

Any Codec microservice that supports `/decode` and `/encode` APIs can be used as a Codec microservice with LPWAN agents. 

To make LPWAN Codec microservice work with LPWAN agents the Codec microservice should adhere to the following two points.
1. Codec microservice must expose `/decode` and `/encode` API endpoints.
2. Codec microservice must create device types and supported command operations for the supported device models because Cumulocity identifies the 
Codec microservice using device types to continue the support of existing binary protocol functionality.

#### Codec microservice should expose */decode* and */encode* APIs

`/decode` API definition 

```
"/decode": {
        "post": {
            "operationId": "decode",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/DecoderInputData"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "default response",
                    "content": {
                        "*/*": {
                            "schema": {
                                "$ref": "#/components/schemas/DecoderResult"
                            }
                        }
                    }
                }
            }
        },
"components": {
		"schemas": {
            "DecoderInputData": {
                "type": "object",
                "properties": {
                    "value": {
                        "type": "string"
                    },
                    "args": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "string"
                        }
                    },
                    "sourceDeviceId": {
                        "type": "string"
                    },
                    "status": {
                        "type": "string",
                        "enum": [
                            "PENDING",
                            "IN_PROGRESS",
                            "ERROR"
                        ]
                    },
                    "selfDecoded": {
                        "type": "string"
                    }
                }
            },
            "DecoderResult": {
                    "type": "object",
                    "properties": {
                        "internalServiceAlarms": {
                            "type": "array",
                            "writeOnly": true,
                            "items": {
                                "$ref": "#/components/schemas/AlarmRepresentation"
                            }
                        },
                        "internalServiceEvents": {
                            "type": "array",
                            "writeOnly": true,
                            "items": {
                                "$ref": "#/components/schemas/EventRepresentation"
                            }
                        },
                        "alarms": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/AlarmRepresentation"
                            }
                        },
                        "alarmTypesToUpdate": {
                            "type": "object",
                            "additionalProperties": {
                                "type": "array",
                                "items": {
                                    "type": "string"
                                }
                            }
                        },
                        "events": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/EventRepresentation"
                            }
                        },
                        "measurements": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/MeasurementDto"
                            }
                        },
                        "dataFragments": {
                            "type": "array",
                            "items": {
                                "$ref": "#/components/schemas/DataFragmentUpdate"
                            }
                        },
                        "message": {
                            "type": "string"
                        },
                        "success": {
                            "type": "boolean"
                        }
                }
			}
        }

```
`/encode` API defintion

```
"/encode": {
        "post": {
            "tags": [
                "codec-controller"
            ],
            "operationId": "encode",
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/components/schemas/EncoderInputData"
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "default response",
                    "content": {
                        "*/*": {
                            "schema": {
                                "$ref": "#/components/schemas/EncoderResult"
                            }
                        }
                    }
                }
            }
	},
"components": {
		"schemas": {
            "EncoderInputData": {
                "type": "object",
                "properties": {
                    "commandName": {
                        "type": "string"
                    },
                    "commandData": {
                        "type": "string"
                    },
                    "sourceDeviceId": {
                        "type": "string"
                    },
                    "args": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "type": "string",
                        "enum": [
                            "PENDING",
                            "IN_PROGRESS",
                            "ERROR"
                        ]
                }
            },
            "EncoderResult": {
                "type": "object",
                "properties": {
                    "encodedCommand": {
                        "type": "string"
                    },
                    "properties": {
                        "type": "object",
                        "additionalProperties": {
                            "type": "string"
                        }
                    },
                    "message": {
                        "type": "string"
                    },
                    "success": {
                        "type": "boolean"
                    },
                }
            }
        }
    }

```

#### Codec microservice should be able to create device types and supported command operations for the supported device models.

Each supported device model by Codec microservice identified as a device type in Cumulocity with the fragments type as `c8y_LpwanDeviceType` 
and fieldbusType as `lpwan`. The Codec microservice must create these device types along with device commands.

Following is the sample json for creating device type in Cumulocity for the supported device model.
`c8y_LpwanCodecDetails` contains the details of `codecServiceContextPath`- Codec microservice context path and 
`supportedDevice`- supported device information like `deviceModel`, `deviceManufacturer` and list of `supportedDeviceCommands`.


```json
{
	"name": "LANSITEC : Asset Tracker",
	"description": "Device protocol that supports device model 'Asset Tracker' manufactured by 'LANSITEC'",
	"type": "c8y_LpwanDeviceType",
	"fieldbusType": "lpwan",
	"c8y_IsDeviceType": {},
	"c8y_LpwanCodecDetails": {
		"codecServiceContextPath": "lora-codec-lansitec",
		"supportedDevice": {
			"deviceModel": "Asset Tracker",
			"deviceManufacturer": "LANSITEC",
			"supportedDeviceCommands": [
				{
					"name": "position request",
					"category": "Device Config",
					"command": "position request",
					"deliveryTypes": [
						"Default"
					]
				},
				{
					"name": "set config",
					"category": "Device Config",
					"command": "{\r\n  \"breakpoint\" : true,\r\n  \"selfadapt\" : true,\r\n  \"oneoff\" : true,\r\n  \"alreport\" : true,\r\n  \"pos\" : 0,\r\n  \"hb\" : 0\r\n}",
					"deliveryTypes": [
						"Default"
					]
				},
				{
					"name": "register request",
					"category": "Device Config",
					"command": "register request",
					"deliveryTypes": [
						"Default"
					]
				},
				{
					"name": "device request",
					"category": "Device Config",
					"command": "device request",
					"deliveryTypes": [
						"Default"
					]
				}
			]
		}
	}
}

```
The Codec microservice must also create supported device command templates for each supported command mentioned above in the `supportedDeviceCommands` 
by mapping the `deviceType` fragment with the device type name.
These device commands will be shown in predefined templates option from the device shell tab.

Following the support json input for creating predefined command templates using inventory API. 

```json
 {
	"type": "c8y_DeviceShellTemplate",
	"name": "set config",
	"deviceType": [
		"LANSITEC : Asset Tracker"
	],
	"category": "Device Config",
	"command": "{\r\n  \"breakpoint\" : true,\r\n  \"selfadapt\" : true,\r\n  \"oneoff\" : true,\r\n  \"alreport\" : true,\r\n  \"pos\" : 0,\r\n  \"hb\" : 0\r\n}",
	"deliveryTypes": [
		"Default"
	]
}
```

