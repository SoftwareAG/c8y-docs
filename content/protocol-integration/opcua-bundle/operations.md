---
weight: 110
title: Operations
layout: redirect
---


{{< product-name-1 >}} operations is the interface that is used to tell the gateway what to do and how to do it. This section describes all operations that are currently supported by the gateway.

### Scanning the address space

This operation triggers importing address space for a specific OPC-UA server. The server’s ID is passed as a device ID. The gateway will scan the entire address space of the server and persist a twinned representation of the address space in the {{< product-name-1 >}} platform.

```
POST /devicecontrol/operations/

{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ScanAddressSpace": {
            "skipSync": false
    },
    "description": "Import address space from root node"
}
```

The twinned address space information is persisted in the {{< product-name-1 >}} inventory. It is internally used to support address space browsing and to define device protocols. Hence this operation is always triggered if a new server is added to the platform.

Once the device gateway knows the address space, it uses it to handle different logics, for example applying device protocols to nodes. So if you already have the address space scanned once and stored in Cumulocity IoT, you might want the device gateway to learn one more time about server’s address space without synchronizing data into Cumulocity IoT. To achieve that, provide `"skipSync": true`.
`skipSync` is an optional property and its default value is false.

When you would like to scan partial address space, you can provide the `nodeId` property which is used as a start node for the scan operation.
The subaddress space starting from this node as well as the ancestor nodes will be persisted in the Cumulocity IoT inventory (unless `"skipSync": true` is provided) as well as in the local address space file of the gateway.

```
POST /devicecontrol/operations/

{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ScanAddressSpace": {
            "nodeId":"ns=2;s=MyDevice"
    },
    "description": "Import address space from MyDevice node"
}
```

> **Info:** We do not recommend you to directly work with the persisted address space data structures in the {{< product-name-1 >}} inventory, as these might change in the future. Use the endpoints of the management service to interact with the OPC UA address space.

### Reading the value of a node/nodes

This operation reads the value attribute of specific node or list of nodes.

```
POST /devicecontrol/operations/

{
    "deviceId" : "<server-device-Id>",
    "c8y_ua_command_ReadValue": {
    "nodes": ["NODE_ID"],
     “timestampsToReturn”: “Neither”
    },
    "description":"read value"
}
```

Other possible values for `timestampsToReturn`: “Source”, “Server” or “Both”.

The result of this operation will contain output in the following format:

```json
{
    "results": {
        "ns=2;s=MyLevel": {
            "13": {
                "value": {
                    "value": 77.0
                },
                "statusCode": 0,
                "sourcePicoseconds": 0,
                "serverPicoseconds": 0
            }
        }
    }
}
```

### Reading all attributes of a node

This operation returns all attributes of specific node.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ReadNodeAttributes": {
        "node": "ns=2;s=MyEnumObject"
    },
    "description": "Read node attributes"
}
```

The result may differ depending on the node type.

```json
{
    "Value": {
        "value": 1
    },
    "DataType": "ns=2;s=MyEnumType",
    "ValueRank": -1,
    "AccessLevel": 3,
    "UserAccessLevel": 3,
    "MinimumSamplingInterval": -1.0,
    "Historizing": false,
    "DisplayName": "MyEnumObject",
    "WriteMask": 0,
    "UserWriteMask": 0
}
```

### Reading an attribute

This operation supports to read one or more attributes of one or more nodes. This includes support of the range parameter to read a single element or a range of elements when the attribute value is an array.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ReadAttribute": {
         "nodes": ["ns=3;s=FloatArray"],
         "attribute":"13"
    },
    "description": "Read attribute from ns=3;s=FloatArray"
}
```

The result may differ depending on the node type.

```json
{
    "results": {
        "ns=3;s=FloatArray": {
            "13": {
                "value": {
                    "value": [1.0, 2.0, 3.0, 4.0, 5.0]
                },
                "statusCode": 0,
                "sourceTimestamp": 1566572540173,
                "sourcePicoseconds": 0,
                "serverTimestamp": 1566573849897,
                "serverPicoseconds": 0
            }
        }
    }
}
```

The index ranges given below are according to the OPC UA specifications and will be transformed to NumericRange.

The syntax is as following:

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```

```json
{
    "description": "Read attribute from ns=3;s=FloatArray",
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_ReadAttribute": {
         "nodes": ["ns=3;s=FloatArray"],
         "attribute":"13",
         "ranges":"0:1"
    }
}
```

The result may differ depending on the node type.

```json
{
    "results": {
        "ns=3;s=FloatArray": {
            "13": {
                "value": {
                    "value": [1.0, 2.0]
                },
                "statusCode": 0,
                "sourceTimestamp": 1566572540173,
                "sourcePicoseconds": 0,
                "serverTimestamp": 1566574513935,
                "serverPicoseconds": 0
            }
        }
    }
}
```

### Read complex

This operation reads many attributes from many nodes at single call.

```json
{
  "deviceId" : "<server-device-Id>",
  "c8y_ua_command_ReadComplex": {
       "nodeAttrs": {
         "ns=2;s=MyEnumObject": {
           "13":"",
           "11":""
         }
       }
  },
  "description":"Read complex"
}
```

### Historic read

This operation reads history values and applies the mappings except of alarm mappings.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_HistoricReadOperation": {
        "nodeId": "ns=2;s=MyLevel",
       "processMappings": true,
        "dateFrom": "2019-06-13T10:43:00+02:00",
        "dateTo": "2019-06-13T10:52:00+02:00",
        "tagType": "TAG",
        "batchSize": 500
    },
    "description": "Historic read"
}
```

- tagType - Possible tagType values are “TAG” and “NO_TAG”. "TAG" appends “_Historic” for both the mapping types and for the measurement mappings.
- processMappings (optional) - By default the value is true. If the value is false then the values will not be processed based on the device protocol mapping.
- batchSize (optional) - Batch size for each history read call to the OPC UA server. Default is 200.

### Historic data binary upload

This operation reads historic values and only saves those values to a file which can be retrieved using the binary API.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_HistoricDataUploadOperation": {
        "nodeId": "ns=2;s=MyLevel",
        "dateFrom": "2019-01-03T09:53:00+02:00",
        "dateTo": "2019-06-13T18:53:00+02:00",
        "chunkSize": 1,
        "compress": true,
        "batchSize": 150000
    },
    "description": "Upload history data"
}
```
The binary file representations, which can be queried using binary API, are created with the type “c8y_ua_HistoricData” and an operationId with the value of the operation with which it has been generated.
- batchSize (optional): Batch size for each history read call to the OPC UA server. Default is 100000.

### Read file

Prerequisites:
- Open and Read methods for the file node must be implemented on server side, either as the children of the file node itself or as the children of the data type node

With this operation, a file can be downloaded from the OPC UA server at the given fileNodeId.  

The parameter `bufferSize` is optional and adjustable up to 10MB. The default size, if not set in the request, is 1MB. This will not limit the size of the file to be read. If the size is bigger, multiple read operations are triggered.

```json
{
  "deviceId" : "DEVICE_ID",
  "c8y_ua_command_ReadFileOperation": {
    "fileNodeId": "ns=2;s=sampleFile",
    "bufferSize": <bufferSize>
  },
  "description":"Read sample file"
}
```

After the downloaded file has been read successfully (see **Control** tab of the device) it is available in **Management** > **Files repository** in the Administration application for download to local file system.

Alternatively, you can check the binary folder by using the binary API like this:

```shell
{{url}}/inventory/binaries
```

This returns a JSON response like this:

```json
{
  "self": "http://<tenant-domain>/inventory/binaries?pageSize=5&currentPage=1",
  "managedObjects": [
    {
      "owner": <device-owner>,
      "type": "ua-file-type",
      "lastUpdated": "2021-05-17T14:33:21.074Z",
      "name": "ns=2;s=sampleFile",
      "self": "http://<tenant-domain>/inventory/binaries/2351",
      "id": "2351",
      "c8y_IsBinary": "",
      "length": 13268,
      "contentType": "application/octet-stream"
    }
  ],
  "statistics": {
    "totalPages": 1,
    "currentPage": 1,
    "pageSize": 5
  }
}
```

Now download is possible with the self link provided inside the managedObjects section of the JSON response.

For further information, refer to [Binaries > Binaries collection](/reference/binaries/#binaries-collection) in the *Reference guide*.

For 10.9 and later, refer to [binaries API](https://www.{{< URL >}}/api/#tag/Binaries) in the {{< OpenAPI >}}.


### Write value

This operation writes values to the node/nodes.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_WriteValue": {
        "values": {
            "ns=3;s=LocalizedText": {
                "value": "This is a localized text"
            },
            "ns=3;s=Double": {
                "value": "3.14159"
            }
        }
    },
    "description": "Write values to different nodes"
}
```

### Write attribute

This operation is similar to the previous one, but instead of writing to the value attribute, this operation writes attributes’ values to any writable attributes. The following example writes two different attributes to two different nodes.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_WriteAttribute": {
        "values": {
            "ns=3;s=LocalizedText": {
                "attribute": "13",
                "value": "This is a localized text"
            },
            "ns=3;s=Double": {
                "attribute": "13",
                "value": "3.14159"
            }
        }
    },
    "description": "Write attributes’ values to different attributes of different nodes"
}
```

Optionally, it is possible to write a value range when the attribute value is an array.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_WriteAttribute": {
        "values": {
            "ns=3;s=FloatArray": {
                "attribute": "13",
                "ranges": "0:1",
                "value": "2.0,4.0"
            }
        }
    },
    "description": "Write attribute value to array attribute"
}
```

### Get method description

This operation reads the description of a method node.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_GetMethodDescriptionOperation": {
        "nodeId": "ns=2;s=MyMethod"
    },
    "description": "get method description"
}
```

The result describes a method, it’s parent object, input and output arguments.

```json
{
    "nodeId": "ns=2;s=MyMethod",
    "name": "MyMethod",
    "parentNodeId": "ns=2;s=MyDevice",
    "parentName": "MyDevice",
    "inputArguments": [{
            "name": "Operation",
            "description": "The operation to perform on parameter: valid functions are sin, cos, tan, pow",
            "dataType": "String",
            "dataTypeId": "i=12"
        },
        {
            "name": "Parameter",
            "description": "The parameter for operation",
            "dataType": "Double",
            "dataTypeId": "i=11"
        }
    ],
    "outputArguments": [{
        "name": "Result",
        "description": "The result of 'operation(parameter)'",
        "dataType": "Double",
        "dataTypeId": "i=11"
    }]
}
```

### Call method

This operation calls the method on the OPC UA server. It requires complete input arguments with an additional “value” fragment.

```json
{
    "deviceId": "<server-device-Id>",
    "c8y_ua_command_CallMethodOperation": {
        "request": {
            "nodeId": "ns=2;s=MyMethod",
            "arguments": [{
                    "name": "Operation",
                    "description": "The operation to perform on parameter: valid functions are sin, cos, tan, pow",
                    "dataType": "String",
                    "dataTypeId": "i=12",
                    "value": "pow"
                },
                {
                    "name": "Parameter",
                    "description": "The parameter for operation",
                    "dataType": "Double",
                    "dataTypeId": "i=11",
                    "value": "5"
                }
            ]
        }
    },
    "description": "call method"
}
```

The result contains all output arguments with values set by the OPC UA server.
Power of 5 is 25:

```json
{
    "statusCode": 0,
    "result": [{
        "name": "Result",
        "description": "The result of 'operation(parameter)'",
        "dataType": "Double",
        "dataTypeId": "i=11",
        "value": "25.0"
    }]
}
```

### Testing a device type against a node on an OPC UA server

This operation allows for testing a device type against a specific node on an OPC UA server. The operation result provides diagnostic information if the device type could be applied:

```json
{
   "deviceId":"<server-device-Id>",
   "c8y_ua_command_TestDeviceTypeMatching":{
      "deviceTypeId":"<device-type-id>",
      "rootNodeId":"<node-id>"
   },
   "description":"Test Device Type"
}
```

If the device type can be applied to the given node, the operation result confirms this:

```json
{
   "creationTime":"2020-08-20T12:28:57.973Z",
   "deviceId":"12789",
   "deviceName":"Test Server",
   "id":"15478",
   "status":"SUCCESSFUL",
   "c8y_ua_command_TestDeviceTypeMatching":{
      "deviceTypeId":"14989",
      "rootNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic2"
   },
   "c8y_Command":{
      "result":"{\n  \"matches\": true\n}"
   },
   "description":"Test Device Type"
}
```

Otherwise, the operation result provides an explanation why the device type could not be matched to the given root node:

```json
{
   "creationTime":"2020-08-20T12:34:01.524Z",
   "deviceId":"12789",
   "deviceName":"Milo Reloaded",
   "id":"15688",
   "status":"SUCCESSFUL",
   "c8y_ua_command_TestDeviceTypeMatching":{
      "deviceTypeId":"14989",
      "rootNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic9"
   },
   "c8y_Command":{
      "result":"{\n  \"matches\": false,\n  \"reason\": \"Does not match browse path regex constraint, constraints: (.*Dynamic[1-3]), actual: [[http://opcfoundation.org/UA/:Root, http://opcfoundation.org/UA/:Objects, urn:cumulocity:opcua:test:server:Dynamic Playground, urn:cumulocity:opcua:test:server:Dynamic9]]\"\n}",
      "syntax":null,
      "text":null
   },
   "description":"Test Device Type"
}
```

### Analyzing the set of nodes to which a device type can be applied (dry run)

As explained earlier, the {{< product-name-1 >}} OPC UA gateway performs an auto-discovery to determine the set of nodes that match a certain device protocol ("device type"). The following operation performs an auto-discovery for the given device protocol on the server, without actually applying it to any node ("dry run"):

```json
{
   "deviceId":"<server-device-Id>",
   "c8y_ua_command_DryRunDeviceTypeMatching":{
      "deviceTypeId":"<device-type-id>"
   },
   "description":"Dry Run Device Type"
}

```

The `deviceTypeId` is the ID of the managed object containing the device protocol.

The result of the operation contains the set of nodes that match the device protocol. In addition to that, the fragment `matchednodes` is added to the operation. It contains a JSON representation of the matched nodes.

```json
{
   "creationTime":"2020-08-20T12:22:07.947Z",
   "deviceId":"12789",
   "deviceName":"Test Server",
   "id":"15187",
   "status":"SUCCESSFUL",
   "c8y_Command":{
      "result":"Device protocol is currently disabled. Device protocol would be applied to the following nodes: [\n  {\n    \"nodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic2\",\n    \"deviceTypeId\": \"14989\",\n    \"mappedTargetNodes\": [\n      {\n        \"browsePath\": [\n          \"urn:cumulocity:opcua:test:server:Double\"\n        ],\n        \"targetNodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double2\"\n      }\n    ],\n    \"attrs\": {}\n  },\n  {\n    \"nodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic1\",\n    \"deviceTypeId\": \"14989\",\n    \"mappedTargetNodes\": [\n      {\n        \"browsePath\": [\n          \"urn:cumulocity:opcua:test:server:Double\"\n        ],\n        \"targetNodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double1\"\n      }\n    ],\n    \"attrs\": {}\n  },\n  {\n    \"nodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic3\",\n    \"deviceTypeId\": \"14989\",\n    \"mappedTargetNodes\": [\n      {\n        \"browsePath\": [\n          \"urn:cumulocity:opcua:test:server:Double\"\n        ],\n        \"targetNodeId\": \"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double3\"\n      }\n    ],\n    \"attrs\": {}\n  }\n]",
      "matchedNodes":[
         {
            "mappedTargetNodes":[
               {
                  "targetNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double2",
                  "browsePath":[
                     "urn:cumulocity:opcua:test:server:Double"
                  ]
               }
            ],
            "deviceTypeId":"14989",
            "nodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic2"
         },
         {
            "mappedTargetNodes":[
               {
                  "targetNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double1",
                  "browsePath":[
                     "urn:cumulocity:opcua:test:server:Double"
                  ]
               }
            ],
            "deviceTypeId":"14989",
            "nodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic1"
         },
         {
            "mappedTargetNodes":[
               {
                  "targetNodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic/Double3",
                  "browsePath":[
                     "urn:cumulocity:opcua:test:server:Double"
                  ]
               }
            ],
            "deviceTypeId":"14989",
            "nodeId":"nsu=urn:cumulocity:opcua:test:server;s=HelloWorld/Dynamic3"
         }
      ],
      "syntax":null,
      "text":null
   },
   "description":"Dry Run Device Type",
   "c8y_ua_command_DryRunDeviceTypeMatching":{
      "deviceTypeId":"14989"
   }
}
```

### Get the current application state of a device type

In order to know what is the current state of a device type application, use the following operation:

```json
{
	"description": "Query device type application state",
	"deviceId": "{server ID}",
	"c8y_ua_command_QueryDeviceTypeApplicationState": {
		"deviceTypeId": "{device protocol ID}",
		"matchingRootNodes": ["{root node ID #1}", "{root node ID #2}"]
	}
}
```
The result will be populated into the operation result as a map of nodes telling whether the device type has been applied to that node or not. Note that *matchingRootNodes* is optional. When *matchingRootNodes* is not provided, the application state of all matching nodes will be returned.

Sample result when the device type has been applied to node #1 but not node #2:
```json
{
    "{root node ID #1}": true,
    "{root node ID #2}": false
}
```
### Expiring operations

In certain cases it is desirable that the OPC UA gateway executes an operation only if it processes it before a given expiration time. Providing such an optional expiration time is supported for the following OPC UA operations:

- Reading the value of a node/nodes
- Reading all attributes of a node
- Reading an attribute
- Read complex
- Write value
- Write attribute
- Call method

For all the given operations this expiry mechanism can be activated by supplying an `expirationTime` fragment inside the operation body.

The following example shows how to mark a read operation as expiring:

```json
{
  "deviceId" : "<server-device-Id>",
  "c8y_ua_command_ReadValue": {
    "nodes": ["ns=3;s=FloatArray"],
    "expirationTime": "2021-02-08T15:00:00.000Z"
  },
  "description":"Expiring read value"
}
```

The operation above will only perform a read on the OPC UA server if processed by the gateway before the 8th of February, 2021 15:00. Otherwise, the operation will fail. In this case, `Operation expired` is returned as failure reason.
