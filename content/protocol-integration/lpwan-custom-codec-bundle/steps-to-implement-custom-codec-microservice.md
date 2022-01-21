---
weight: 30
title: Steps to implement LPWAN codec microservice
layout: redirect
---

For the developer convenience Cumulocity provides `lpwan-custom-codec` java library for developing Codec microservice. It can be easily built on top of [Cumulocity IoT Microservices](http://www.cumulocity.com/guides/microservice-sdk/java).
To create LPWAN codec microservice, two requirements have to be met:

1. The codec microservice Main class needs to be annotated as `@CodecMicroserviceApplication`.
2. The microservice needs to provide implementation for the following interfaces.

 ```java
 /**
 * The <b>Codec</b> interface exposes methods to provide the uniquely supported devices. The class which implements this interface should be annotated with "@Component".
 */
public interface Codec {

    /**
     * This method returns a set of uniquely supported devices w.r.t the device manufacturer and the device model.
     *
     * @return Set
     */
    @NotNull @NotEmpty Set<DeviceInfo> supportsDevices();
}
```

```java
public interface DecoderService {

    /**
     * Decodes byte array data into DecoderResult object.
     *
     * @param inputData Hex encoded input byte array
     * @param deviceId device from which this data comes from
     * @param args additional arguments that may be required by decoder
     * @return DecoderResult object
     * @throws DecoderServiceException when decode failed
     */
    DecoderResult decode(String inputData, GId deviceId, Map<String, String> args) throws DecoderServiceException;
}

```

```java
public interface EncoderService {
    /**
     * Encodes the EncoderInput object into EncoderResult object
     *
     * @param encoderInputData the EncoderInputData object containing the source device id, command name, command data and the properties
     * @return EncoderResult the EncoderResult object that contains the encoded hexadecimal command and/or additional properties like fport
     * @throws EncoderServiceException
     */
    EncoderResult encode(EncoderInputData encoderInputData) throws EncoderServiceException;
}
```

The LPWAN agent passes in the following fragments to the codec microservice:

* *args* - Meta information that is required by codec microservice to know the model and manufacturer of the device, along with the EUI of the device.
* *sourceDeviceId* - The ID of the source device in the {{< product-c8y-iot >}} inventory.
* *value* - The actual value to be decoded. The value is a series of bytes encoded as a hexadecimal string.

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

Following is the response JSON format emitted by the /decode endpoint:

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

* *alarms* - A list of alarms to be created by the LPWAN agent. The alarms have to be given in the ordinary [{{< product-c8y-iot >}} alarm JSON format](https://cumulocity.com/guides/reference/alarms/).
* *events* - A list of events to be created by the LPWAN agent. The events have to be given in the ordinary [{{< product-c8y-iot >}} event JSON format](https://cumulocity.com/guides/reference/events/).
* *alarmTypesToUpdate* - A list of alaram types to be updated by LPWAN agent.
* *dataFragments* - The data fragments can be used by a decoder to hand over a set of fragment updates.
* *success* - An informative boolean flag (true or false) that indicates if decoding by the microservice was successful.
* *measurements* - A list of measurements to be created by the LPWAN agent. The syntax here follows an own DTO format. See the example below:


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

#### The REST endpoint: /encode

LPWAN codec microservice automatically exposes one REST endpoint using the path */encode*.

#### Request JSON body format

Following is the request JSON input accepted by the /encode endpoint:

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

* *args* - Meta information that is required by codec microservice to know the model and manufacturer of the device, along with the EUI of the device.
* *sourceDeviceId* - The ID of the source device in the {{< product-c8y-iot >}} inventory.
* *commandName* - The name of the command to be encoded.
* *commandData* - The text of the command to be encoded.

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

Following is the response JSON format emitted by the /encode endpoint:

```
{
    "encodedCommand": <<the encoded hexadecimal command>>,
    "fport": <<the target fport>>
}
```

The fragments above are used as follows:

* *encodedCommand* - The hexadecimal command obtained post encode, which will be executed as an operation.
* *fport* - The target fport.

```json
{
    "encodedCommand": "9F5000",
    "fport": 20
}
```
