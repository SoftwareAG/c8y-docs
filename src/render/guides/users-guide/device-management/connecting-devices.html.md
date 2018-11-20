---
order: 11
title: Connecting Devices
layout: redirect
---

<a name="device-registration"></a>

This section describes how to connect devices to your Cumulocity account either manually or by bulk-registration.

To connect devices to your Cumulocity account follow these steps:

Click **Registration** in the **Devices** menu of the navigator and click **Register device**.

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-register-devices.png" alt="Register devices" style="max-width: 50%">

In the **Register devices** dialog, you may choose one of the following options:
	
* **[General device registration](#device-registration-manually)** - to manually connect one or more devices
* **[Bulk device registration](#creds-upload)** - to register larger amounts of devices in one step.

If you are subscribed to the required applications you will see a third option
**Custom device registration** for registering devices of specific types, e.g. LoRa or Sigfox, see the documentation for these optional services for details. 

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-register-devices-custom.png" alt="Register devices" style="max-width: 50%">


### <a name="device-registration-manually"></a>Connecting devices manually

The following process describes how to connect devices manually. Depending on the type of device you want to connect, not all steps of the process may be relevant. 

To connect devices manually to your Cumulocity account follow these steps:

1. Click **Registration** in the **Devices** menu of the navigator and click **Register device**.

2. In the **Register device** dialog, choose **General device registration**.

	<img src="/guides/images/users-guide/DeviceManagement/devmgmt-device-registration-general.png" alt="General device registration" style="max-width: 50%">

3. In the **Device ID** field, enter a unique ID for the device. To determine the ID, consult the device documentation. In case of mobile devices the ID usually is the IMEI (International Mobile Equipment Identity) often found on the back of the device.
4. Optionally, select a group to assign your device to after registration. Find further information on groups assignment in [Grouping devices](#grouping-devices).
5. Click **Add another device** to register one more devices. Again, enter the device ID and optionally select a group. This way, you can add multiple devices in one step.
6. Click **Next** to register your device(s). 

**Info**: In the Enterprise edition, the management tenant may also directly select a tenant to which the device will be added from here. Note that since the management tenant does not have access to the subtenant's inventory you can either register devices to a tenant OR to a group, not both. 

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-device-registration-tenant.png" alt="General device registration" style="max-width: 50%"> 

After successful registration the device(s) will be listed in the [**Device registration** page](#dev-registration) with the status **Waiting for connection**.

Turn on the device(s) and wait for the connection to be established.
Once a device is connected, its status will change to **Pending acceptance**.
Click **Accept** to confirm the connection. The status of the device will change to **Accepted**.

**Info**: In case of any issues, consult the [Device guide](/guides/devices) applicable for your device type, search for your device type in the [Developer Center](http://cumulocity.com/dev-center/) on our  website for further information, or look up the manual of your device.

### <a name="dev-registration"></a> Device registration page

In the **Device registration** page all devices which currently are in the registration process are displayed either in a list or in a grid.

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-device-registration.png" alt="Device registration page" style="max-width: 100%">

The following information is shown for each device:

* Device name specified in the registration process
* Status of the device (see below)
* Creation date
* Tenant from which the device was registered

The devices may have one of the following status:

* **Waiting for connection** - The device has been registered but no device with the specified ID has tried to connect.
* **Pending acceptance** - There is communication from a device with the specified ID, but the user doing the registration must still explicitly accept so that the credentials are sent to the device.
* **Accepted** - The user has allowed the credentials to be send to the device.


### <a name="creds-upload"></a>Bulk-registering devices

To connect larger amounts of devices, Cumulocity offers the option to bulk-register devices, i.e. to register larger amounts of devices by uploading a CSV file.

1. Click **Registration** in the **Devices** menu of the navigator and click **Register device**.
2. In the upcoming window choose **Bulk device registration**.

	<img src="/guides/images/users-guide/DeviceManagement/devmgmt-bulk-registration.png" alt="Bulk registration" style="max-width: 100%">

3. Click **Select file to upload** and select the CSV file you want to upload by browsing for it on your computer.

<br>
Depending on the format of the uploaded CSV file, one of the following registration types will be processed:"


1. **Simple registration**

	The CSV file contains two columns: ID;PATH, where ID is the device identifier, e.g. serial number, and PATH is a slash-separated list of group names (path to the group where the device should be assigned to after registration).


		ID;PATH
		Device1;Group A
		Device2;Group A/Group B


	After the file is uploaded, any required new groups will be created and new registrations will be created with status WAITING FOR CONNECTION and the normal registration process needs to be continued (see above).

1. **Full registration**

	The CSV files must contain at least the IDs as device identifier and the credentials of the devices. 

		ID;Credentials;PATH;ICCID;NAME;TYPE
		006064ce800a;LF2PWJoLG1Fz;Sample_Düsseldorf;+491555555;Sample_Device1;c8y_Device
		006064ce8077;OowoGKAbiNJs;Sample_Düsseldorf;+491555555;Sample_Device2;c8y_Device
	
	Apart from that the file can also contain other columns like ICCID, NAME, TYPE as shown in the example above. 
	
	To connect the devices, they are pre-registered with the relevant information. More specific, each device will be configured as follows:

* User name - the user name for accessing Cumulocity must have the format &lt;tenant&gt;/device_&lt;id&gt;, where &lt;tenant&gt; refers to the tenant from which the CSV file is imported and &lt;id&gt; refers to the respective value in the CSV file.
* Password - the password to access Cumulocity, equals the value "Credentials" in the CSV file.
* Device in managed object representation - fields TYPE, NAME, ICCID, IDTYPE, PATH, SHELL in the CSV file.

After the data is imported, you will get feedback on the number of devices that were pre-registered as well as on any potential errors that may have occurred.
	
For your convenience we provide template files for both formats which you can download to view or copy the structure.

For further information on the file format and accepted CSV variants, also refer to 
[Bulk device credentials](/guides/reference/device-credentials/#creds-upload).

>**Info**: If you work with a Cumulocity Enterprise Edition you may also register devices across multiple tenants by adding a "tenant" column to the spreadsheet and importing the CSV file from the "management" tenant.