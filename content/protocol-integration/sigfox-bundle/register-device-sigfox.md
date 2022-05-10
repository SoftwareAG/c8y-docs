---
weight: 40
title: Registering Sigfox devices
layout: redirect
---


To register a Sigfox device, navigate to the **Registration** page in the **Devices** menu in the Device Management application and click **Register devices**. In the upcoming window, select **Custom device registration** and then **Sigfox**.

![Register devices](/images/device-protocols/sigfox/sigfox-registration.png)

> **Info:** If Sigfox is not one of the available options, your tenant is not subscribed to the relevant applications, see information at the top.

> **Info:**
> - The device type created in the Sigfox Cloud platform has the following naming convention `c8y_{tenantId}_{device-protocol-name}_{contractId}`, for example: `c8y_myTenant_mySigfoxDeviceProtocol_aabbcc5b78c901d64eecf4faaa`
> - If the constructed name exceeds 100 characters it will be truncated until it is less than 100 characters.

In the next window, fill in the required information:

- **ID:** Unique device ID. The value must be a hexadecimal number.
- **PAC:** Porting authorization code for your device. The value must be a hexadecimal number.
- **Contract:** Select your desired contract (contracts that are active and with free slots are listed).
- **Device protocol:** Select your desired device protocol from the drop-down list.
- **Product certificate key:** This key can be located in *https://partners.sigfox.com/*. Navigate to your device and copy the certificate key. If the checkbox is not selected and no product certificate key is specified, the device will be considered a prototype.
- **Provider connection**: The Sigfox connection with which the device must be associated with. 

> **Info:** The term "Device type" is used both by Sigfox and {{< product-c8y-iot >}}, but with different meaning. In Sigfox, a device type specifies how to route data from devices. In {{< product-c8y-iot >}}, a device type describes the data that is sent by devices of a particular type.

![Register devices1](/images/device-protocols/sigfox/sigfox-registration1.png)

After clicking **Next** the device registration request will be submitted and the device will be created.

You can verify that the device is really connected by checking that events are actually coming in. You can do so by clicking on a device and opening its **Events** tab. All events related to this device are listed here.

For more information on viewing and managing your connected devices, also refer to [Device Management](/users-guide/device-management/).

In order to change the connection associated with the device, the device needs to be re-registered. Navigate to the **LPWAN** tab of the Device. Click on the **Provider connection** dropdown. A prompt appears stating that **To change provider connection, you need to re-register the device first**. Click on the **Re-Register** button. 

Change the provider connection to the desired new connection and click on **Re-Register**. A prompt appears saying **Provider connection updated**, if the reregistration is successful. 

Click **Cancel** to cancel the provider connection change. 
