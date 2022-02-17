---
weight: 30
title: Using the lpwan-custom-codec library
layout: redirect
---

For convenience, {{< product-c8y-iot >}} provides the java library `com.nsn.cumulocity.clients-java:lpwan-custom-codec` to develop custom codec microservice in Java as a SpringBoot application.
When subscribed, such a custom codec microservice automatically creates the required device types and predefined command templates as described in the [Implementing a custom codec microservice](#implement-codec-microservice).

To create a custom codec microservice using this library, do the following:

1. Create a Spring Boot application and annotate its main class with:

    ```java
    @CodecMicroserviceApplication `com.cumulocity.microservice.lpwan.codec.annotation.CodecMicroserviceApplication`
    ```

2. Implement the following Java interfaces and annotate them with:

    ```java
    @Component `org.springframework.stereotype.Component`
    ```

    1. Implement the `supportedDevices` method of `com.cumulocity.microservice.lpwan.codec.Codec` to specify the device manufacturer, device name and the commands this custom codec service supports:

        ```java
        package com.cumulocity.microservice.lpwan.codec;

        public interface Codec {
             Set<DeviceInfo> supportsDevices();
        }
        ```    

    2. Implement the `decode` method of `com.cumulocity.microservice.customdecoders.api.service.DecoderService` to provide the decode functionality. The decode method receives the following input:
        *  `inputData`- device payload to be decoded.
        *  `deviceId`- device managed object ID.
        *  `args`- a map which contains keys:
            *    `deviceManufacturer`- device manufacturer.
            *    `deviceModel`- device model.
            *    `sourceDeviceEui`- device eui.
            *    `fport`- fport (Optional).

        <br/>

        The library also provides the wrapper class `com.cumulocity.microservice.lpwan.codec.decoder.model.LpwanDecoderInputData` to extract the decoder inputs:

         ```java
          package com.cumulocity.microservice.customdecoders.api.service;

          public interface DecoderService {
              DecoderResult decode(String inputData, GId deviceId, Map<String, String> args) throws DecoderServiceException;
          }
          ```

    3. Implement the `encode` method of `com.cumulocity.microservice.customencoders.api.service.EncoderService` to provide the encode functionality:

        ```java
        package com.cumulocity.microservice.customencoders.api.service;

        public interface EncoderService {
            EncoderResult encode(EncoderInputData encoderInputData) throws EncoderServiceException;
        }
        ```

3. Add the following roles as `requiredRoles` in the microservice manifest file `cumulocity.json`:

    ```json
    "requiredRoles": [
       "ROLE_INVENTORY_ADMIN",
       "ROLE_INVENTORY_READ"
    ]
    ```
