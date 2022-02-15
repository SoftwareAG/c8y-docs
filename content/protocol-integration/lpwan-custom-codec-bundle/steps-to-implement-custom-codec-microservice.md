---
weight: 30
title: Implement LPWAN Codec microservice using lpwan-custom-codec library
layout: redirect
---

{{< product-c8y-iot >}} provides a java library `com.nsn.cumulocity.clients-java:lpwan-custom-codec` to develop custom codec microservice which complies with `/encode` and `/decode` contract.

The Codec microservice should adhere to the following points.

1. The main spring boot application class with a predefined annotation `com.cumulocity.microservice.lpwan.codec.annotation.CodecMicroserviceApplication`
2. Provide the implementation for the following interfaces.

 ```java
package com.cumulocity.microservice.lpwan.codec;

public interface Codec {
     Set<DeviceInfo> supportsDevices();
}
```
```java

public interface DecoderService {
    DecoderResult decode(String inputData, GId deviceId, Map<String, String> args) throws DecoderServiceException;
}
```
```java
public interface EncoderService {
    EncoderResult encode(EncoderInputData encoderInputData) throws EncoderServiceException;
}
```

On the subscription of custom codec microservice it automatically creates device types and predefined command templates for all the supported devices implemented by Codec microservice.
These device types created with `fieldbusType` as `lpwan`and `type` as `c8y_LpwanDeviceType`along with the fragment `c8y_LpwanCodecDetails` that describes Codec microservice details.
These device types will be listed in the Device Protocols page for assigning to the LPWAN device during the device registration.

LPWAN agent sends the following information to `DecoderService` implementation.

* `inputData` device payload to be decoded, 
* `deviceId`  device managed object ID and 
* `args`  contains the `deviceManufacturer`,`deviceModel`, `sourceDeviceEui` and `fport`.

You can extract `args` information by making use of the utility class `com.cumulocity.microservice.lpwan.codec.decoder.model.LpwanDecoderInputData` to extract args with a specific method. 
