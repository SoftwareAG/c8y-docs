---
weight: 40
title: Registering LoRa devices
layout: redirect
---


To register a LoRa device, navigate to the Device Management application and click **Registration** in the **Devices** menu in the navigator. Click **Register device**.

In the upcoming window, click **Custom device registration** and select **LoRa**:

![Register devices](/images/device-protocols/lora-actility/lora-selection.png)

Cumulocity IoT fully supports the LoRa device provisioning with Over-the-Air Activation (OTAA) which is the preferred and most secure way to connect with the LoRa network.
If Activation by Personalization (ABP) is required to be used, refer to the [LoRa device registration with ABP](#device-registration-with-abp-activation) section.

In the next window fill in the required information:

- **Device profile**: Select the Actility Thingpark device profile from the dropdown list that matches the device that you are registering.
- **Device protocol**: Select the appropriate device protocol from the dropdown list. For more information on how to create a device protocol refer to the previous section [Creating device protocols](#create-device-protocols).
- **Device EUI**: This is the unique identifier for the device. It is a 16 character (8 byte) long hexadecimal number. You can find it on the device itself.
- **Application key**: This is an AES-128 application key specific for the device that is assigned to the device by the application owner and is responsible to encrypt. The application key is a 32 character (16 byte) long hexadecimal number.
JOIN communication. You can find this key on the device itself.
- **Connectivity plan**: Select the appropriate connectivity plan from the dropdown list.

![Register devices](/images/device-protocols/lora-actility/lora-registration.png)

Click **Next** to submit the device registration request and create the device.

You can verify that the device is really connected by checking that events are actually coming in. You can do so by clicking on a device and opening the **Events** tab. All events related to this device are listed here.

The provision status is shown under **Device data** in the **Info** tab of the device.

![Device data](/images/device-protocols/lora-actility/lora-devices-devicedata.png)

For more information on viewing and managing your connected devices, also refer to [Device Management](/users-guide/device-management).

### <a name="device-registration-process">LoRa device registration process</a>

<img src="/images/device-protocols/lora-actility/lora-device-registration-process.png" style="max-width: 60%">

A device is created based on the above workflow.

First it is checked, if the device already exists. If no device exists with the same device EUI in the ThingPark account, the device is first provisioned on the ThingPark platform and then created on the Cumulocity IoT platform with a link to the device in the ThingPark platform. If the device exists in the ThingPark account, a validation will be applied to compare these devices based on application EUI (for OTAA activation) and device profile. If the validation is successful, the device is created only in Cumulocity IoT with a link to the device in the ThingPark platform. If the validation fails, a failure message will be shown (see the [device registration subsection of the troubleshooting section](#lora-device-registration-troubleshooting) and the device is not created in Cumulocity IoT.

### <a name="device-registration-with-abp-activation">LoRa device registration with Activation by Personalization (ABP)</a>

Activating the device by personalization is not recommended and not fully supported in Cumulocity IoT LoRa device registration.

However, if you would like to create a device with this activation type in Cumulocity IoT and use the LoRa features - such as sending operations to a device, deprovisioning a device and setting LoRa device protocol type with custom device protocol configuration - you must first provision the device in the ThingPark platform. Moreover you have to create "AS Routing Profile" for Cumulocity IoT using the destination `http://actility-server.cumulocity.com` as a "Third Party AS (HTTP)" and assign it to your devices manually. Afterwards, you can register this device using LoRa device registration. In this case, the **Application key** field in the LoRa device registration is invalid.

### <a name="legacy-LoRa-devices">Limitations for LoRa devices created with general device registration</a>

The general device registration for LoRa devices is no longer supported.

Existing LoRa devices that have been created in Cumulocity IoT with the general device registration process have limitations. For those devices, it is not possible to send operations to the device, deprovision the device and set the LoRa device protocol type with custom device protocol configuration.

It is recommended to delete and re-register these devices using LoRa device registration to fully use the LoRa feature.
