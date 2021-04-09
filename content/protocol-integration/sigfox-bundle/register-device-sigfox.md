---
weight: 40
title: Registering Sigfox devices
layout: redirect
---


To register a Sigfox device, navigate to the **Registration** page in the **Devices** menu in the Device Management application and click **Register devices**. In the upcoming window, select **Custom device registration** and then **Sigfox**.

![Register devices](/images/device-protocols/sigfox/sigfox-registration.png)

> **Info:** If Sigfox is not one of the available options, your tenant is not subscribed to the relevant applications, see information at the top.

> **Info:** 
> - The Sigfox device type name is created using the naming convention `c8y_{tenantId}_{device-protocol-name}_{contractId}` eg:`c8y_siqa16012021_TestSigfoxDeviceProtocol_5ccc4b54c563d64eecf4fa18` 
> - If the constructed name exceeds 100 characters it will be truncated until it is less than 100 characters.

In the next window, fill in the required information:

- **ID:** Unique device ID. The value must be a hexadecimal number.
- **PAC:** Porting authorization code for your device. The value must be a hexadecimal number.
- **Contract:** Choose your desired contract (contracts that are active and with free slots are listed).
- **Device protocol:** Select your desired device protocol from the drop-down list.
- **Product certificate key:** This key can be located in *https://partners.sigfox.com/*. Navigate to your device and copy the certificate key. If the checkbox is not selected and no product certificate key is specified, the device will be considered a prototype.

> **Info:** The term "Device type" is used both by Sigfox and Cumulocity IoT, but with different meaning. In Sigfox, a device type specifies how to route data from devices. In Cumulocity IoT, a device type describes the data that is sent by devices of a particular type.

![Register devices1](/images/device-protocols/sigfox/sigfox-registration1.png)

After clicking **Next** the device registration request will be submitted and the device will be created.

You can verify that the device is really connected by checking that events are actually coming in. You can do so by clicking on a device and opening its **Events** tab. All events related to this device are listed here.

For more information on viewing and managing your connected devices, also refer to [Device Management](/users-guide/device-management/).
