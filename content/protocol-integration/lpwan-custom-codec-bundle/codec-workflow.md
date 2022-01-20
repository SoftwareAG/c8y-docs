---
weight: 20
title: Codec Workflow
layout: redirect
---

First you need to deploy the codec microservice into {{< product-c8y-iot >}} where the codec microservice creates a set of unique device protocols based on the device manufacturer and model information.

### The REST endpoint /decode

The LPWAN codec microservice exposes a REST endpoint using the path <kbd>/decode</kbd>.

#### Request JSON body format

Below you see the request JSON input accepted by the <kbd>/decode</kbd> endpoint:

```
{
    "sourceDeviceId":"<<device Id>>",
   	"value":"<<The value to be decoded (hex string)",
   	"args": {
   		"deviceModel": "<<device model>>",
   		"deviceManufacturer": "<<device manufacturer>>",
   		"sourceDeviceEui": "<<device external Id>>"
   	},

}
```

The LPWAN agent passes in the following fragments to the codec microservice:

* `args` - Meta information that is required by the codec microservice to know the model and manufacturer of the device, along with the EUI of the device.
* `sourceDeviceId` - The ID of the source device in the {{< product-c8y-iot >}} inventory.
* `value` - The actual value to be decoded. The value is a series of bytes encoded as a hexadecimal string.

**Example:**

```
{
    "sourceDeviceId": "1025"
    "value": "202355251812984589",
    "args": {
        "deviceModel": "Asset Tracker",
        "deviceManufacturer": "LANSITEC",
        "sourceDeviceEui": "AA02030405060708"
    },
}
```

#### Response JSON body format

The following is the response JSON format of the <kbd>/decode</kbd> endpoint:

```
{
  "alarms": [<<Array of alarms to be created>>],
  "alarmTypesToUpdate": [<<Array of alarm types to be updated>>],
  "events": [<<Array of events to be created >>],
  "dataFragments" : [Map <<fragment-path>,<Value>>],
  "success": true || false,
  "measurements": [<<Array of measurements to be created>>]
}
```

The fragments above are used as follows:

* `alarms` - A list of alarms to be created by the LPWAN agent. The alarms must be in [{{< product-c8y-iot >}} alarm JSON](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Alarms) format.
* `events` - A list of events to be created by the LPWAN agent. The events must be given in [{{< product-c8y-iot >}} event JSON](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Events) format.
* `alarmTypesToUpdate` - A list of alaram types to be updated by the LPWAN agent.
* `dataFragments` - The data fragments can be used by a decoder to hand over a set of fragment updates.
* `success` - A boolean that indicates if decoding by the microservice was successful.
* `measurements` - A list of measurements to be created by the LPWAN agent. The syntax here follows a custom DTO format. See the example below:


```json
  {
      "alarms": null,
      "alarmTypesToUpdate": null,
      "events": [
          {
              "type": "Tracker status",
              "time": "2021-12-27T10:13:24.251+00:00",
              "creationTime": null,
              "text": "GPSSTATE: LOCATING\nVIBSTATE: 5\nCHGSTATE: UNKNOWN(24)",
              "source": {
                  "id": {
                      "attrs": {},
                      "type": "com_cumulocity_model_idtype_GId",
                      "value": "1025",
                      "name": null,
                      "long": 1025
                  }
              },
              "dateTime": "2021-12-27T10:13:24.251Z"
          }
      ],
      "measurements": [
          {
              "type": "c8y_Battery",
              "series": "c8y_Battery",
              "time": "2021-12-27T10:13:24.251Z",
              "values": [
                  {
                      "seriesName": "level",
                      "unit": "%",
                      "value": 35
                  }
              ]
          },
          {
              "type": "Tracker Signal Strength",
              "series": "Tracker Signal Strength",
              "time": "2021-12-27T10:13:24.251Z",
              "values": [
                  {
                      "seriesName": "rssi",
                      "unit": "dBm",
                      "value": -85
                  }
              ]
          },
          {
              "type": "Tracker Signal Strength",
              "series": "Tracker Signal Strength",
              "time": "2021-12-27T10:13:24.251Z",
              "values": [
                  {
                      "seriesName": "snr",
                      "unit": "dBm",
                      "value": 0
                  }
              ]
          }
      ],
      "dataFragments": null,
      "success": true
  }
```

**Full decoder response sample**

```
{
    "self": null,
    "alarms": [{
        "source": {
            "id": null
          },
        "type": "c8yDemoDecoderalarm",
        "text": "I am an decoder alarm",
        "severity": "MINOR",
        "status": "ACTIVE",
        "time": "2020-03-03T12:03:23.845Z",
        "myFragment": "my data"
    }],
    "alarmTypesToUpdate": null,
    "events": [
        {
            "self": null,
            "attrs": {},
            "id": null,
            "type": "c8y_LocationUpdate",
            "time": "1997-10-26T13:27:16.000+00:00",
            "creationTime": null,
            "text": "Location updated",
            "externalSource": null,
            "source": {
                "self": null,
                "attrs": {},
                "id": {
                    "attrs": {},
                    "type": "com_cumulocity_model_idtype_GId",
                    "value": "1025",
                    "name": null,
                    "long": 1025
                },
                "type": null,
                "name": null,
                "lastUpdated": null,
                "creationTime": null,
                "owner": null,
                "childDevices": null,
                "childAssets": null,
                "childAdditions": null,
                "deviceParents": null,
                "assetParents": null,
                "additionParents": null,
                "lastUpdatedDateTime": null,
                "creationDateTime": null,
                "selfDecoded": null
            },
            "dateTime": "1997-10-26T13:27:16.000Z",
            "lastUpdatedDateTime": null,
            "creationDateTime": null,
            "selfDecoded": null
        }
    ],
    "measurements": null,
    "dataFragments": [
        {
            "key": "c8y_Position/lat",
            "value": null,
            "valueAsObject": 9.609690346957522E-28
        },
        {
            "key": "c8y_Position/lng",
            "value": null,
            "valueAsObject": 1.1554608044067426E-17
        }
    ],
    "message": null,
    "success": true,
    "selfDecoded": null
}

```

#### The REST endpoint /encode

The LPWAN codec microservice exposes a REST endpoint using the path <kbd>/encode</kbd>.

#### Request JSON body format

The following is the request JSON input accepted by the <kbd>/encode</kbd> endpoint:

```
{
    "sourceDeviceId":"<<device Id>>",
    "commandName":"<<name of the command to be encoded>>",
    "commandData":"<<text of the command to be encoded>>",
    "args":{
        "deviceModel": "<<device model>>",
   		"deviceManufacturer": "<<device manufacturer>>",
   		"sourceDeviceEui": "<<device external Id>>"
    }
}
```

The LPWAN agent populates the following fragments while invoking the codec microservice:

* `args` - Meta information that is required by codec microservice to know the model and manufacturer of the device, along with the EUI of the device.
* `sourceDeviceId` - The ID of the source device in the {{< product-c8y-iot >}} inventory.
* `commandName` - The name of the command to be encoded.
* `commandData` - The text of the command to be encoded.

**Example:**

```
{
      "commandName": "position request",
      "commandData" : {position request -latitude 10.25 -longitude -5.67},
      "sourceDeviceId" : 26413,
      "args" : {
        "deviceModel": "Asset Tracker",
        "deviceManufacturer": "LANSITEC",
        "sourceDeviceEui": "AABB03AABB030000"
      }
}
```

#### Response JSON body format

The following is the response JSON format of the <kbd>/encode</kbd> endpoint:

```
{
    "encodedCommand": <<the encoded hexadecimal command>>,
    "fport": <<the target fport>>
}
```

The fragments above are used as follows:

* `encodedCommand` - The hexadecimal command obtained after encoding, which will be executed as an operation.
* `fport` - The target fport.

```json
{
    "encodedCommand": "9F5000",
    "fport": 20
}
```
