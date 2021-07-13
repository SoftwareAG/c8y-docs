---
weight: 110
title: Operations
layout: redirect
---


Cumulocity IoT operations is the interface that is used to tell the gateway what to do and how to do it. This section describes all operations that are currently supported by the gateway.

### Scanning the address space

This operation triggers importing address space for a specific OPC-UA server. The server’s ID is passed as a device ID. The gateway will scan the entire address space of the server and persist a twinned representation of the address space in the Cumulocity IoT platform.

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

The twinned address space information is persisted in the Cumulocity IoT inventory. It is internally used to support address space browsing and to define device protocols. Hence this operation is always triggered if a new server is added to the platform.

Once the device gateway knows the address space, it uses it to handle different logics, for example applying device protocols to nodes. So if you already have the address space scanned once and stored in Cumulocity IoT, you might want the device gateway to learn one more time about server’s address space without synchronizing data into Cumulocity IoT. To achieve that, provide "skipSync": true.

Available arguments for c8y_ua_command_ScanAddressSpace:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>skipSync</td>
<td>boolean</td>
<td>no</td>
<td>If set to true, the address space nodes will not be synchronized to Cumulocity IoT Inventory API. Default is false.</td>
</tr>
</tbody>
</table>

> **Info:** We do not recommend you to directly work with the persisted address space data structures in the Cumulocity IoT inventory, as these might change in the future. Use the endpoints of the management service to interact with the OPC UA address space.

### Reading the value of a node/nodes

This operation reads the value attribute of specific node or list of nodes.

```
POST /devicecontrol/operations/

{
    "deviceId" : "<server-device-Id>",
    "c8y_ua_command_ReadValue": {
    "nodes": ["NODE_ID"],
    "timestampsToReturn": "Neither"
    },
    "description":"read value"
}
```

Available arguments for c8y_ua_command_ReadValue:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nodes</td>
<td>string array</td>
<td>yes</td>
<td>Array of IDs of the nodes to execute the operation</td>
</tr>
<tr>
<td>ranges</td>
<td>string</td>
<td>no</td>
<td>The index ranges of a subset of the multi-dimension array from the read attribute. The syntax is according to the OPC UA specification and will be transformed to NumericRange.

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```
Example values to define the range for a 1D array is "0:1", for a 2D array is "0:1,0:1"
</td>
</tr>
<tr>
<td>maxAge</td>
<td>double</td>
<td>no</td>
<td>The maximum age used for the read. If the server does not have a value that is within the maximum age, it shall attempt to read a new value from the data source. If maxAge is set to 0, the server shall attempt to read a new value from the data source. Default is 0.</td>
</tr>
<tr>
<td>timestampsToReturn</td>
<td>string</td>
<td>no</td>
<td>Time stamps to return for the read attributes in the operation result. Available options are "Source", "Server", "Both", "Neither". Default is "Both".</td>
</tr>
</tbody>
</table>

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

Available arguments for c8y_ua_command_ReadNodeAttributes:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>node</td>
<td>string</td>
<td>yes</td>
<td>ID of the node to execute the operation</td>
</tr>
</tbody>
</table>

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

Available arguments for c8y_ua_command_ReadAttribute:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nodes</td>
<td>string array</td>
<td>yes</td>
<td>Array of IDs of the nodes to execute the operation</td>
</tr>
<tr>
<td>attribute</td>
<td>string</td>
<td>yes</td>
<td>The ID of the attribute according to the OPC UA specification</td>
</tr>
<tr>
<td>ranges</td>
<td>string</td>
<td>no</td>
<td>The index ranges of a subset of the multi-dimension array from the read attribute. The syntax is according to the OPC UA specification and will be transformed to NumericRange.

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```
Example values to define the range for a 1D array is "0:1", for a 2D array is "0:1,0:1"
</td>
</tr>
<tr>
<td>maxAge</td>
<td>double</td>
<td>no</td>
<td>The maximum age used for the read. If the server does not have a value that is within the maximum age, it shall attempt to read a new value from the data source. If maxAge is set to 0, the server shall attempt to read a new value from the data source. Default is 0.</td>
</tr>
<tr>
<td>timestampsToReturn</td>
<td>string</td>
<td>no</td>
<td>Time stamps to return for the read attributes in the operation result. Available options are "Source", "Server", "Both", "Neither". Default is "Both".</td>
</tr>
</tbody>
</table>

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

Example operation with ranges fragment:

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

Available arguments for c8y_ua_command_ReadComplex:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nodeAttrs</td>
<td>map&lt;string, map&lt;string, string&gt;&gt;</td>
<td>yes</td>
<td>Map with ID of the node and inner map with ID of the attribute and the index range.
The index ranges defines a subset of the multi-dimension array from the read attribute.
The syntax is according to the OPC UA specification and will be transformed to NumericRange.

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```
Example values to define the range for a 1D array is "0:1", for a 2D array is "0:1,0:1".
Empty string ("") can be given to not define any range.
</td>
</tr>
<tr>
<td>maxAge</td>
<td>double</td>
<td>no</td>
<td>The maximum age used for the read. If the server does not have a value that is within the maximum age, it shall attempt to read a new value from the data source. If maxAge is set to 0, the server shall attempt to read a new value from the data source. Default is 0.</td>
</tr>
<tr>
<td>timestampsToReturn</td>
<td>string</td>
<td>no</td>
<td>Time stamps to return for the read attributes in the operation result. Available options are "Source", "Server", "Both", "Neither". Default is "Both".</td>
</tr>
</tbody>
</table>

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
        "tagType": "TAG"
    },
    "description": "Historic read"
}
```

Available arguments for c8y_ua_command_HistoricReadOperation:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nodeId</td>
<td>string</td>
<td>yes</td>
<td>ID of the node to execute the operation</td>
</tr>
<tr>
<td>dateFrom</td>
<td>dateTime</td>
<td>yes</td>
<td>The values are read starting from this time</td>
</tr>
<tr>
</tr>
<tr>
<td>dateTo</td>
<td>dateTime</td>
<td>yes</td>
<td>The values are read until this time
</td>
</tr>
<tr>
<td>ranges</td>
<td>string</td>
<td>no</td>
<td>The index ranges of a subset of the multi-dimension array from the read attribute. The syntax is according to the OPC UA specification and will be transformed to NumericRange.

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```
Example values to define the range for a 1D array is "0:1", for a 2D array is "0:1,0:1"
</td>
</tr>
<tr>
<td>batchSize</td>
<td>integer</td>
<td>no</td>
<td>Batch size for each history read call to the OPC UA server. Default is 200.</td>
</tr>
<tr>
<td>processMappings</td>
<td>boolean</td>
<td>no</td>
<td>If set to false then the read values will not be processed based on the device protocol mapping. Default is true.</td>
</tr>
<tr>
<td>tagType</td>
<td>string</td>
<td>no</td>
<td>Possible tagType values are “TAG” and “NO_TAG”. "TAG" appends “_Historic” for both the mapping types and for the measurement mappings. Default is "TAG".</td>
</tr>
</tbody>
</table>

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
        "compress": true
    },
    "description": "Upload history data"
}
```

The binary file representations, which can be queried using binary API, are created with the type “c8y_ua_HistoricData” and an operationId with the value of the operation with which it has been generated.

Available arguments for c8y_ua_command_HistoricDataUploadOperation:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nodeId</td>
<td>string</td>
<td>yes</td>
<td>ID of the node to execute the operation</td>
</tr>
<tr>
<td>dateFrom</td>
<td>dateTime</td>
<td>yes</td>
<td>The values are read starting from this time</td>
</tr>
<tr>
</tr>
<tr>
<td>dateTo</td>
<td>dateTime</td>
<td>yes</td>
<td>The values are read until this time
</td>
</tr>
<tr>
<td>ranges</td>
<td>string</td>
<td>no</td>
<td>The index ranges of a subset of the multi-dimension array from the read attribute. The syntax is according to the OPC UA specification and will be transformed to NumericRange.

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```
Example values to define the range for a 1D array is "0:1", for a 2D array is "0:1,0:1"
</td>
</tr>
<tr>
<td>batchSize</td>
<td>integer</td>
<td>no</td>
<td>Batch size for each history read call to the OPC UA server. Default is 100000.</td>
</tr>
<tr>
<td>chunkSize</td>
<td>integer</td>
<td>no</td>
<td>The maximum file size in Mb for the output binary file. For each batch, the files can be divided based on this limit.</td>
</tr>
<tr>
<td>compress</td>
<td>boolean</td>
<td>no</td>
<td>If set the false the output chunks are compressed. Default is false.</td>
</tr>
</tbody>
</table>

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

Available arguments for c8y_ua_command_WriteValue:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>values</td>
<td>map&lt;string, rangedValue&gt;</td>
<td>yes</td>
<td>Map with ID of the node to execute the operation and RangedValue to set
</tr>
</tbody>
</table>

Available arguments for type rangedValue (used as map value in c8y_ua_command_WriteValue.values):
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>string</td>
<td>yes</td>
<td>Value to set to the node attribute</td>
</tr>
<tr>
<td>ranges</td>
<td>string</td>
<td>no</td>
<td>The index ranges of a subset of the multi-dimension array. The syntax for the ranges is according to the OPC UA specification and will be transformed to NumericRange.

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```
Example values to define the range for a 1D array is "0:1", for a 2D array is "0:1,0:1"</td>
</tr>
</tbody>
</table>

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

Available arguments for c8y_ua_command_WriteAttribute:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>values</td>
<td>map&lt;string, attributeRangedValue&gt;</td>
<td>yes</td>
<td>Map with ID of the node to execute the operation and AttributeRangedValue to set
</tr>
</tbody>
</table>

Available arguments for type attributeRangedValue (used as map value in c8y_ua_command_WriteAttribute.values):
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>attribute</td>
<td>string</td>
<td>yes</td>
<td>ID of the attribute according to the OPC UA specification</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>yes</td>
<td>Value to set to the node attribute</td>
</tr>
<tr>
<td>ranges</td>
<td>string</td>
<td>no</td>
<td>The index ranges of a subset of the multi-dimension array. The syntax for the ranges is according to the OPC UA specification and will be transformed to NumericRange.

```
    NumericRange: <dimension> [',' <dimension>]
    <dimension>: <index> [':' <index>]
```
Example values to define the range for a 1D array is "0:1", for a 2D array is "0:1,0:1"</td>
</tr>
</tbody>
</table>

Example operation with ranges fragment:

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

Available arguments for c8y_ua_command_GetMethodDescriptionOperation:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nodeId</td>
<td>string</td>
<td>yes</td>
<td>ID of the node to execute the operation</td>
</tr>
</tbody>
</table>

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
Available arguments for c8y_ua_command_CallMethodOperation:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>request</td>
<td>methodRequest</td>
<td>yes</td>
<td>Request to send to the OPC UA Server
</tr>
</tbody>
</table>

Available arguments for type methodRequest (used in c8y_ua_command_CallMethodOperation.request):
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>nodeId</td>
<td>string</td>
<td>yes</td>
<td>ID of the node to execute the operation</td>
</tr>
<tr>
<td>arguments</td>
<td>list&lt;methodArgument&gt;</td>
<td>no</td>
<td>List of arguments for the method request</td>
</tr>
<tr>
<td>objectNodeId</td>
<td>string</td>
<td>no</td>
<td>The NodeId of the Object or ObjectType that is the source of a HasComponent reference (or subtype of HasComponent reference) to the method</td>
</tr>
<tr>
<td>parseResponse</td>
<td>boolean</td>
<td>no</td>
<td>If set to true, the value is converted to JSON and the actual value is stored in the rawValue fragment in response. Default is true</td>
</tr>
</tbody>
</table>

Available arguments for type methodArgument (used in c8y_ua_command_CallMethodOperation.request.arguments):
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>string</td>
<td>no</td>
<td>Name of the method argument</td>
</tr>
<tr>
<td>description</td>
<td>string</td>
<td>no</td>
<td>Description of the method argument</td>
</tr>
<tr>
<td>dataType</td>
<td>string</td>
<td>yes</td>
<td>Data type of the method argument</td>
</tr>
<tr>
<td>dataTypeId</td>
<td>string</td>
<td>yes</td>
<td>ID of the data type in OPC UA Server</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>yes</td>
<td>Value for the method argument</td>
</tr>
<tr>
<td>arrayDimension</td>
<td>string</td>
<td>no</td>
<td>Array dimension for the value to set if the value is an array</td>
</tr>
</tbody>
</table>

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

Available arguments for c8y_ua_command_TestDeviceTypeMatching:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>deviceTypeId</td>
<td>string</td>
<td>yes</td>
<td>ID of the managed object containing the device protocol</td>
</tr>
<tr>
<td>rootNodeId</td>
<td>string</td>
<td>yes</td>
<td>ID of the root node to execute the operation</td>
</tr>
</tbody>
</table>

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

### Get the current application state of a device type

In order to know what is the current state of a device type application, use the following operation:

```json
{
	"description": "Get device type application state",
	"deviceId": "{server ID}",
	"c8y_ua_command_GetDeviceTypeApplicationState": {
		"deviceTypeId": "{device protocol ID}",
		"matchingRootNodes": ["{root node ID #1}", "{root node ID #2}"]
	}
}
```

Available arguments for c8y_ua_command_GetDeviceTypeApplicationState:
<table>
<colgroup>
<col style="width: 20%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 50%;">
</colgroup>
<thead>
<tr>
<th>Field</th>
<th>Type</th>
<th>Mandatory</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>deviceTypeId</td>
<td>string</td>
<td>yes</td>
<td>ID of the managed object containing the device protocol</td>
</tr>
<tr>
<td>matchingRootNodes</td>
<td>list&lt;string&gt;</td>
<td>no</td>
<td>List of ID of the root nodes to execute the operation. When it is not provided, the application state of all matching nodes will be returned.</td>
</tr>
</tbody>
</table>

The result will be populated into the operation result as a map of nodes telling whether the device type has been applied to that node or not. Note that *matchingRootNodes* is optional. When *matchingRootNodes* is not provided, the application state of all matching nodes will be returned.

Sample result when the device type has been applied to node #1 but not node #2:
```json
{
    "{root node ID #1}": true,
    "{root node ID #2}": false
}
```