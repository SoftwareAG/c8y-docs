---
title: Connecting to Cumulocity
layout: redirect
order: 20
---

### Configuring Meitrack

To connect a Meitrack device to Cumulocity, you need to configure it to send data to the Cumulocity servers. Use the Meitrack manager to set

* The GPRS protocol to "TCP".
* The IP/Domain to tracker.cumulocity.com.
* The Port to 9091.

The screenshot below illustrates the required settings in the "Tracking" menu.

![Meitrack configuration](/guides/images/devices/meitrackconf.png)

### Registering Meitrack devices with Cumulocity

To connect the device to your Cumulocity account:

* Open Cumulocity in a web browser and navigate to the "Registration" page. 
* Locate the IMEI number on the device (below the battery for the MT90).
* Type the IMEI into the "Device ID" field and click "Register Device". The IMEI will be listed with status "Waiting for connection".
* Switch the device on and wait until the device connects to both the mobile network and GPS. 
* When the device sends the first report, an "Accept" button will be visible next to the IMEI. Click the "Accept" button.
* If this is the first tracking device you connect to your tenant you also need the register the tracker agent. Type tracker-agent-{tenant} (where {tenant} is your tenant name) into the "Device ID" field and click "Register Device". Click the "Accept" button once it shows up.
* The device will now transmit  data according to the device configuration that you set. 