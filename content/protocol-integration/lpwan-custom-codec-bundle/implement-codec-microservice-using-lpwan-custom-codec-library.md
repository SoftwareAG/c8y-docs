---
weight: 30
title: Implement a Custom Codec Microservice using lpwan-custom-codec library
layout: redirect
---

For convenience, {{< product-c8y-iot >}} provides a java library `com.nsn.cumulocity.clients-java:lpwan-custom-codec` to develop custom codec microservice in Java as SpringBoot application. 
When subscribed such custom codec microservice would automatically create the required device types and predefined command templates as described in the previous section.

To create a Custom Codec microservice using this library, you should do the following.

1. Create a Spring Boot application and annotate its main class with @CodecMicroserviceApplication `com.cumulocity.microservice.lpwan.codec.annotation.CodecMicroserviceApplication`.
2. Implement the following java interfaces and annotate them with @Component `org.springframework.stereotype.Component`
    
    1. Implement the `supportedDevices` method of `com.cumulocity.microservice.lpwan.codec.Codec` to specify the device manufacture, device name and its commands this custom codec service supports.
        ```java
        package com.cumulocity.microservice.lpwan.codec;
        
        public interface Codec {
             Set<DeviceInfo> supportsDevices();
        }
        ```    
    2. Implement the `decode` method of `com.cumulocity.microservice.customdecoders.api.service.DecoderService` to provide the decode functionality. Decode method receives the following input,
          `inputData`- device payload to be decoded, 
          `deviceId`- device managed object ID, 
          `args`- a map which contains keys 
                `deviceManufacturer`- device manufacturer, 
                `deviceModel`- device model, 
                `sourceDeviceEui`- device eui
                `fport`- fport (Optional)
      The library also provides a wrapper class `com.cumulocity.microservice.lpwan.codec.decoder.model.LpwanDecoderInputData` to extract the decoder inputs.
         ```java
          package com.cumulocity.microservice.customdecoders.api.service;
          
          public interface DecoderService {
              DecoderResult decode(String inputData, GId deviceId, Map<String, String> args) throws DecoderServiceException;
          }
          ```
    3. Implement the `encode` method of `com.cumulocity.microservice.customencoders.api.service.EncoderService` to provide the encode functionality.      
        ```java
        package com.cumulocity.microservice.customencoders.api.service;
        
        public interface EncoderService {
            EncoderResult encode(EncoderInputData encoderInputData) throws EncoderServiceException;
        }
        ```
3. Add the following roles as `requiredRoles` in the microservice manifest file `cumulocity.json`.
        
        "requiredRoles": [ 
           "ROLE_INVENTORY_ADMIN",
           "ROLE_INVENTORY_READ"
        ]
        


