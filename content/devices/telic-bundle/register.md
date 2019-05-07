---
title: Registering Telic devices with Cumulocity
layout: redirect
weight: 30
---

To connect the device to your Cumulocity account perform the following steps.

1. In the Cumulocity platform, switch to the **Device Management** application and open the **Registration** page from the **Devices** menu in the navigator.

2. Click **Register device** and select **General device registration**.

2. In the **Device ID** field, enter the last six digits of the IMEI on the device (to be found below the barcode on the sticker) and click **Next** to register the device. <br><br>![Device registration](/guides/images/devices/telic/telic-register-device.png)

3. The device will be listed with status "Waiting for connection".

4. Switch on the device. After the device has dialled up to the network, click **Accept** next to the device.

If this is the first tracking device you connect to your tenant you next need to register the tracker agent. 

1. Again, click **Register device** and select **General device registration**.

2. In the **Device ID** field, enter "tracker-agent-{tenant}" (where {tenant} is your tenant name) and click **Next**. 

3. Click **Accept** once it shows up.

**Info**: Clicking **Accept** in the agent registration will only work if you have previously requested a first tracker device.

According to the device configuration that you set the device will now send location data.

>**Info**: Cumulocity currently assumes that the "extended IMEI reporting" option is switched off.
