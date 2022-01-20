---
weight: 30
title: Steps to implement LPWAN codec microservice
layout: redirect
---

The codec microservice can be easily built on top of [Cumulocity IoT Microservices](http://www.cumulocity.com/guides/microservice-sdk/java).
In order to serve as a LPWAN codec microservice, two requirements have to be met:

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
