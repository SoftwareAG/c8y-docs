---
title: Connect the Smartbox to your Cumulocity Account
layout: redirect
weight: 30
---
### Prepare the Cloud and APN

By default the terminal supports cloud fieldbus from Cumulocity. To use it you should:
1.	Subscribe your account to the Cloud Fieldbus app by contacting Cumulocity support.After this the device Database will be visible in the root folder of Device management. Refer also here: http://cumulocity.com/users-guide/cloud-fieldbus/
2.	Power on the Terminal and wait until the RUN LED is flashing 2xflash-pause-2xflash-...
3.	Configure the Terminal's APN by sending an SMS to Terminal's SIM card with the following syntax: GPRS=APN,username,password
</br>For example, if you have no User and Password then you have to type in your SMS  GPRS=&#60;APN&#62;,,

### Register the device

In the cumulocity Devicemanagement go to the menu in Device Registration. Enter the Terminal's IMEI as an ID. The IMEI is printed on the devices itself:

![IMEI](/images/devices/smartbox-io/imei.png)

After accepting the device (this process may tale 30 seconds) you should be able to see it in the All Devices list after a short delay. 

![Terminal in all devcies](/images/devices/smartbox-io/terminal-in-all-devices.png)
