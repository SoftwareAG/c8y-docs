---
title: Registering Telic devices with Cumulocity
layout: redirect
order: 30
---

To connect the device to your Cumulocity account:

* Open Cumulocity in a web browser and navigate to the "Registration" page.
* Locate the IMEI number on the device (below the barcode on the sticker).
* Type the **last six digits** of the IMEI into the "Device ID" field and click "Register Device". The IMEI will be listed with status "Waiting for connection".
* Switch the device on. After the device has dialled up to the network, an "Accept" button will be visible next to the IMEI.
* Click the "Accept" button.
* If this is the first tracking device you connect to your tenant you also need the register the tracker agent. Type tracker-agent-{tenant} (where {tenant} is your tenant name) into the "Device ID" field and click "Register Device". Click the "Accept" button once it shows up.
* The device will now send location data according to the device configuration that you set.

![Device registration](/guides/images/devices/telic/telicregistration.png)

Note: Cumulocity currently assumes that the "extended IMEI reporting" option is switched off.
