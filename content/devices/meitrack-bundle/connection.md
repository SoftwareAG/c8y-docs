---
title: Connecting to Cumulocity
layout: redirect
weight: 30
---

To connect your device to the Cumulocity platform, you need to register it in your Cumulocity account.

### Register a device

Follow the instructions in [Device Management > Connecting devices](/guides/users-guide/device-management#connecting-devices) in the User guide to register and connect your device.

>**Info**: To register your device, you need the IMEI number provided on the device. In case of MT90, for example, it is shown below the battery. 

### Register the tracker agent

If this is the first tracking device you connect to your tenant you next need to register the tracker agent. 

1. Again, click **Register device** and select **General device registration**.

2. In the **Device ID** field, enter "tracker-agent-{tenant}" (where {tenant} is your tenant name) and click **Next**. 

3. Click **Accept** once it shows up.

**Info**: Clicking **Accept** in the agent registration will only work if you have previously requested a first tracker device.

The device will now send location data according to the device configuration that you set.