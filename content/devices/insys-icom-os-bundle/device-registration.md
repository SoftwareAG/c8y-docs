---
title: Device Registration
layout: redirect
weight: 20
---

You need to register the INSYS Smart Device in your Cumulocity Cloud account first. The self-registration functionality of Cumulocity uses the serial number of the INSYS Smart Device as unique identifier. The serial number is indicated on the device label and can also be displayed in the System menu on the System data page in the web interface of the INSYS Smart Device.

![Serial Number](/guides/images/devices/icom/serialNumber.png)
![System Data](/guides/images/devices/icom/systemData.png)

### Registering the device in Cumulocity

Enter the serial number of the INSYS Smart Device in the Device Management menu on the Registration page of Cumulocity and click on Register Device.

![Device Registration](/guides/images/devices/insys/deviceRegistration.png)

The device is registered in Cumulocity with this. Cumulocity is waiting for the first connection of this device.

![Device Registration: Waiting for Connection](/guides/images/devices/insys/deviceRegistrationWaiting.png)

Now you need to go to the web interface of the icom Data Suite to proceed.

### Adding the Cumulocity server

It is necessary to add the Cumulocity Cloud as a server for receiving messages in the icom Data Suite. To do so, proceed as follows:

1.	In the Messages menu, open the Cumulocity page and click on the plus symbol behind Add server
2.	Click on Edit (pen symbol) to configure the server
3.	Enter the Server-URL of your Cumulocity account
4.	Enter a Description for the server
5.	Select the Protocol HTTPS
6.	Enter the Server URL
7.	Check the Self registration checkbox
8.	Enter a descriptive Device name for the monitored device
9.	Click on Save settings

![Add Server](/guides/images/devices/icom/addServer.png)

### Activating the profile

After adding the server, it is necessary to activate the profile that the configuration changes become effective. To do so, click on Activate profile in the title bar to activate the opened profile.

![Activating the profile](/guides/images/devices/icom/activateProfile.png)

The icom Data Suite will now establish the connection to Cumulocity. You’ll then need to accept the registration as outline in the following section.

### Accepting the registration

The icom Data Suite has configured the server now and will connect to Cumulocity via the INSYS Smart Device. This is indicated by the pending acceptance message. You only need to accept the registration in the Devices menu on the Registration page of Cumulocity now and the device is available in Cumulocity.

![Device Registration](/guides/images/devices/insys/deviceRegistrationPending.png)
