---
weight: 40
title: Sample codec microservice implementation
layout: redirect
---

In this repository, you'll find a very straightforward codec example, the lansitec codec (`lora-codec-lansitec`). It is implemented using Spring Boot.

Follow the steps below while implementing the microservice:

1) Annotate the Main class with `@CodecMicroserviceApplication`.

```java
@CodecMicroserviceApplication
public class Application {
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
```

2) Implement the `Codec` interface and supply the list of supported devices.

```java
@Component
public class LansitecCodec implements Codec {

    /**
     * This method should populate a set of unique devices identified by their manufacturer and model.
     *
     * @return Set: A set of unique devices identified by their manufacturer and model.
     */
    public Set<DeviceInfo> supportsDevices() {

        // The manufacturer "LANSITEC" has 2 different devices with model "Outdoor Asset Tracker" and "Temperature Sensor"
        DeviceCommand positionRequestCommand = new DeviceCommand(LansitecEncoder.POSITION_REQUEST, "Device Config", LansitecEncoder.POSITION_REQUEST);
        DeviceCommand deviceRequestCommand = new DeviceCommand(LansitecEncoder.DEVICE_REQUEST, "Device Config", LansitecEncoder.DEVICE_REQUEST);
        DeviceCommand registerRequestCommand = new DeviceCommand(LansitecEncoder.REGISTER_REQUEST, "Device Config", LansitecEncoder.REGISTER_REQUEST);

        ObjectMapper mapper = new ObjectMapper();
        ObjectNode deviceOperationElements = mapper.createObjectNode();
        deviceOperationElements.put("breakpoint", Boolean.TRUE);
        deviceOperationElements.put("selfadapt", Boolean.TRUE);
        deviceOperationElements.put("oneoff", Boolean.TRUE);
        deviceOperationElements.put("alreport", Boolean.TRUE);
        deviceOperationElements.put("pos", 0);
        deviceOperationElements.put("hb", 0);
        String json = null;
        try {
            json = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(deviceOperationElements);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        DeviceCommand setConfigCommand = new DeviceCommand(LansitecEncoder.SET_CONFIG, "Device Config", json);

        Set<DeviceCommand> deviceCommands = new HashSet<>();
        deviceCommands.add(positionRequestCommand);
        deviceCommands.add(deviceRequestCommand);
        deviceCommands.add(registerRequestCommand);
        deviceCommands.add(setConfigCommand);

        DeviceInfo deviceInfo_Lansitec_Asset_Tracker = new DeviceInfo("LANSITEC", "Asset Tracker", deviceCommands);
        DeviceInfo deviceInfo_Lansitec_Temperature_Sensor = new DeviceInfo("LANSITEC", "Temperature Sensor");

        return Stream.of(deviceInfo_Lansitec_Asset_Tracker, deviceInfo_Lansitec_Temperature_Sensor).collect(Collectors.toCollection(HashSet::new));
    }
}
```

3) Implement `DecoderService` interface.

```java
@Component
public class LansitecDecoder implements DecoderService {
    @Override
    public DecoderResult decode(String inputData, GId deviceId, Map<String, String> args) throws DecoderServiceException {

        // Create an LpwanDecodeInputData object to get selected device information like manufacturer and model
        LpwanDecoderInputData decoderInput = new LpwanDecoderInputData(inputData, deviceId, args);

        // Sample decoding logic
        try {
            // DecoderResult will contain the list of measurements, events, alarms and/or alarmTypes to Update.
            DecoderResult decoderResult =  process(decoderInputData);
        } catch(Exception e) {
            // Create an alarm on the device, so the decoder issue is shown as an alarm
            DecoderResult decoderResult = new DecoderResult();
            AlarmRepresentation alarm = new AlarmRepresentation();
            alarm.setSource(ManagedObjects.asManagedObject(deviceId));
            alarm.setType("DecoderError");
            alarm.setSeverity(CumulocitySeverities.CRITICAL.name());
            alarm.setText(e.getMessage());
            alarm.setDateTime(DateTime.now());
            decoderResult.addAlarm(alarm, true);

            throw new DecoderServiceException(e, e.getMessage(), decoderResult);
        }
        return decoderResult;

    }
}
```

A flexible option named `success` is provided in the DecoderResult which represents whether the `decode` operation is successful or not.

4) Implement `EncoderService` interface.

```java
@Component
public class LansitecEncoder implements EncoderService {
    public static final String SET_CONFIG = "set config";
    public static final String DEVICE_REQUEST = "device request";
    public static final String REGISTER_REQUEST = "register request";
    public static final String POSITION_REQUEST = "position request";

    @Override
    public EncoderResult encode(EncoderInputData encoderInputData) throws EncoderServiceException {
        LpwanEncoderInputData lpwanEncoderInputData = new LpwanEncoderInputData(GId.asGId(encoderInputData.getSourceDeviceId()),
                encoderInputData.getCommandName(),
                encoderInputData.getCommandData(),
                encoderInputData.getArgs());

        LpwanEncoderResult encoderResult = null;
        if (lpwanEncoderInputData.getSourceDeviceInfo().getManufacturer().equalsIgnoreCase("Lansitec") && lpwanEncoderInputData.getSourceDeviceInfo().getModel().equals("Asset Tracker")) {
            ObjectMapper mapper = new ObjectMapper();
            String payload = null;
            try {
                if (lpwanEncoderInputData.getCommandName().equals(POSITION_REQUEST)) {
                    payload = "A1FF";
                } else if (lpwanEncoderInputData.getCommandName().equals(REGISTER_REQUEST)) {
                    payload = "A2FF";
                } else if (lpwanEncoderInputData.getCommandName().equals(DEVICE_REQUEST)) {
                    payload = "A3FF";
                } else if (lpwanEncoderInputData.getCommandName().equals(SET_CONFIG)) {
                    JsonNode params = mapper.readTree(lpwanEncoderInputData.getCommandData());
                    ByteBuffer buffer = ByteBuffer.allocate(4).order(ByteOrder.BIG_ENDIAN);
                    byte breakpoint = params.get("breakpoint").asBoolean() ? (byte) 8 : 0;
                    byte selfadapt = params.get("selfadapt").asBoolean() ? (byte) 4 : 0;
                    byte oneoff = params.get("oneoff").asBoolean() ? (byte) 2 : 0;
                    byte alreport = params.get("alreport").asBoolean() ? (byte) 1 : 0;
                    buffer.put((byte) ((byte) 0x90 | (byte) breakpoint | (byte) selfadapt | (byte) oneoff | (byte) alreport));
                    buffer.putShort((short) params.get("pos").asInt());
                    buffer.put((byte) params.get("hb").asInt());
                    payload = BaseEncoding.base16().encode(buffer.array());
                }

                encoderResult = new LpwanEncoderResult(payload, 20);
                encoderResult.setSuccess(true);
                encoderResult.setMessage("Successfully Encoded the payload");
            } catch (IOException e) {
                e.printStackTrace();
                encoderResult = new LpwanEncoderResult();
                encoderResult.setSuccess(false);
                encoderResult.setMessage("Encoding Payload Failed");
            }
        }
        return encoderResult;
    }
```

5. Add the following permissions in the cumulocity.json file. Here's how the cumulocity.json looks like

```json
    {
        "apiVersion":"1",
        "version":"1.0-SNAPSHOT",
        "contextPath": "lora-codec-lansitec",
        "provider": {
            "name":"Software AG"
        },
        "isolation":"MULTI_TENANT",
        "requiredRoles": [
            "ROLE_INVENTORY_ADMIN",
            "ROLE_INVENTORY_READ"
        ]
    }
```
