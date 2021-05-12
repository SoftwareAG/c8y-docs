---
weight: 80
title: LWM2M device firmware update (FOTA)
layout: redirect
---

Cumulocity IoT LwM2M agent supports FOTA (Firmware update Over The Air) using a firmware binary that is uploaded to the Cumulocity IoT platform.
To upload a firmware, go to **Device Management** &gt; **Management** &gt; **Firmware repository** &gt; **Add firmware**

![Add new firmware](/images/device-protocols/lwm2m/lwm2m-add-new-firmware.png)

Select the firmware binary to upload, either from your local computer or from a URL. The device type filter must be left empty or filled with a value of "c8y_lwm2m".

Assuming that you have already registered and connected your device, go to the device page to trigger a firmware update like this:

![Trigger firmware update](/images/device-protocols/lwm2m/lwm2m-trigger-fota.png)

Once the firmware update has been triggered, the LwM2M agent creates and queues up a PENDING firmware update operation for execution.

> **Info:** This document is not supposed to cover every detail of firmware update process because they are already specified in the LwM2M specification. This instead summaries the process, highlights the key points and possible customizations of the firmware update process in Cumulocity IoT LwM2M.

### Firmware update state machine

The firmware update procedure is well standardized within the LwM2M specification, and a standard Firmware Update Object (&#47;5) is used to perform the process.
Let’s have a quick glance at the firmware update state machine as defined by the LwM2M specification:

 ![Firmware update state machine](/images/device-protocols/lwm2m/lwm2m-fota-state-machine.png)
 (Source: openmobilealliance.org)

Basically the whole update process contains different phases of interactions between the LwM2M server and the device. The above diagram consists of the possible states and transitions that could be introduced during the firmware update process.

If the device goes offline or is considered offline by the LwM2M agent, the firmware update operation is left IN_PROGRESS and the agent will try to resume the firmware update process if possible when the device connects again via a registration or registration update. 

### Resetting state machine

When the firmware operation is being executed, the LwM2M agent first of all tries to reset the firmware state machine to the original state to avoid any leftover downloaded firmware that has not been installed or failures of the previous firmware update attempts on the device.
Cumulocity IoT LwM2M agent supports the following mechanisms of resetting firmware update state machine:
* If only PUSH delivery method is supported by the device, the state machine is reset by writing a byte array of single element (value is 0) to the package resource: **write &#47;5&#47;0&#47;0 \0**
* If both PUSH and PULL or only PULL delivery method is supported, the state machine is reset by writing a NULL string to the package URI resource: **write &#47;5&#47;0&#47;1 \0**
* This mechanism can also be specified in the device managed object by using fragment: **fwUpdateResetMechanism**. When this is set, the delivery method is disregarded. Possible values:
    ** **PACKAGE**: This works the same as when only PUSH delivery method is supported, writing a byte array of single element (value is 0) to the package resource: **write &#47;5&#47;0&#47;0 \0**
    ** **PACKAGE_URI**: The state machine is reset by writing an empty string ("") to the package URI resource: **write &#47;5&#47;0&#47;1 &lt;empty string&gt;**
 
 If the state machine is failed because the device is not reachable, the firmware update operation stays in PENDING status and will be executed when the device connects. If it's failed by any other reason, the firmware update operation set as FAILED.
 If the state machine is reset successfully, the firmware update operation is marked as IN_PROGRESS and the process continues to the next steps.

### Querying device configuration

In order to determine what is the best way to deliver the firmware to the device, the LwM2M agent tries to read the device configuration by executing a read request on the firmware update object on the device: read &#47;5&#47;0.
In this step, the agent will learn:
* What are the supported delivery methods on the device specified by the value on resource **&#47;5&#47;0&#47;9**, for example: 0 (PUSH), 1 (PULL) or 2 (both). If both delivery methods are supported, PULL will be taken.
* What are the supported delivery protocols on the device, specified by the value on resource **&#47;5&#47;0&#47;8**, for example: 0 (CoAP), 1 (CoAPs), etc. If this value is not specified by the device, 0 (CoAP) will be taken.
* What is the current state of the firmware update on the device. This value must be 0 (IDLE), otherwise the firmware update process is aborted immediately.

Supported firmware delivery methods and delivery protocols can also be specified in the device managed object by setting these fragments:
* **fwUpdateDeliveryMethod**. Possible values: PUSH, PULL, BOTH
* **fwUpdateSupportedDeviceProtocol**. Possible values: COAP, COAPS, HTTP, HTTPS
If they are specified in the device managed object, the values sent by the device are ignored. 


### Firmware delivery

As the first step of the delivery, the agent tries to establish the observations on two resources to monitor the firmware delivery transitions on the device:
* **observe &#47;5&#47;0&#47;3**: Observe the firmware update state
* **observe &#47;5&#47;0&#47;5**: Observe the firmware update result.

Depending on the supported delivery protocols and methods by the device, the agent now delivers the firmware to the device.

When PULL is chosen as the delivery method, the agent will try to write the firmware URI to the device firmware package URI: write **&#47;5&#47;0&#47;1 <firmware uri>**. The agent constructs the firmware URI according to the chosen delivery protocol.

When PUSH is chosen as the deliver method, the agent will try to write the firmware binary to the device firmware package: write **&#47;5&#47;0&#47;0 <firmware binary>**.

In both case, if the firmware binary cannot be delivered as one single message, the agent delivers the firmware using so-called block-wise transfer. The preferred size of each block can be specified by the device in the negotiation phase with the LwM2M agent. If the device does not specify it, the agent uses its default block size of 512 bytes.

When the delivery is completed on the device (no matter if it's successful or failed, e.g. because the device runs out of storage, or network issues, etc.) the device must inform the agent by updating the value of the firmware update state (&#47;5&#47;0&#47;3) and/or firmware update result (&#47;5&#47;0&#47;5). Practically, the device can keep sending the value periodically for the firmware update state resource even if the firmware is still being transferred, with the value 1 (Downloading) or 2 (Downloaded). 

### Trigger firmware update on the device

When the firmware delivery is completed successfully and the agent is informed, it will trigger the firmware update on the device by sending an execute request to the update resource: execute *&#47;5&#47;0&#47;2*. Note that the observations on the update state and update result are still being maintained. When the update process is completed on the device, it must communicate to the agent by updating the value of firmware update result (and firmware update state).

### Complete firmware update process
When the firmware update is completed (no matter if it's successful or failed) on the device and the agent is informed, the agent completes the firmware update process.
* If the firmware update is successful on the device: The agent sets the firmware information to the device managed object and marks the firmware update operation as completed successfully.
* If the firmware update is failed on the device: The agent marks the firmware update operation as failed.

### Cancel firmware update process
In practice, the communications between the device and the agent are not always smooth, for example in the case of network failures or the device is not able to report to the agent about its status, etc. you might want to cancel the firmware update process entirely and start a new one. To do that, send a HTTP request as the following:
```PUT .../service/lwm2m-agent/shell/{tenantId}/{deviceId}/cancelFirmwareUpdate```
in which **tenantId** is ID of your tenant, **deviceId** is your device managed object ID. The ongoing firmware update process will be canceled by the agent.
Alternatively, the firmware update process is also canceled if you delete the firmware update operation.