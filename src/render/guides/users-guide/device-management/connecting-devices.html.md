---
order: 11
title: Connecting Devices
layout: redirect
---

<a name="device-registration"></a>

This section describes how to connect devices to your Cumulocity account either manually or by bulk-registration.

### <a name="device-registration-manually"></a>How to connect a device manually
The following process describes how to connect devices manually. Depending on the type of device you want to connect, not all steps of the process may be relevant. 

**Info**: In case of any issues, consult the [Device Guide](www.cumulocity.com/guides/) applicable for your device type, search for your device type in the [Developer Center](http://cumulocity.com/dev-center/) on our  website for further information, or look up the manual of your device.

To connect devices to your Cumulocity account follow these steps:

1. Click "Registration" in the "Devices" menu of the navigator and click **Register device**.
2. In the upcoming window, choose **General device registration** to register one or more devices individually (see next section for handling bulk registration).
3. In the "Device ID" field, enter a unique ID for the device. To determine the ID, consult the device documentation. In case of mobile devices the ID usually is the IMEI (International Mobile Equipment Identity) often found on the back of the device.
4. Optionally, select a group to assign your device to after registration. Find further information on groups assignment in [Grouping Devices](#grouping-devices).
5. Click **Add another device** to register one more devices. Again, enter the device ID and optionally select a group. This way, you can add multiple devices in one step.
6. Click **Next** to register your device(s). After successful registration the device(s) will be listed on the screen with the status "Waiting for connection".

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_RegisterMultiple.png" alt="Register Multiple Devices" style="max-width: 50%">

Turn on the device(s) and wait for the connection to be established.
Once a device is connected, its status will change to "Pending acceptance".
Click **Accept** to confirm the connection. The status of the device will change to "Accepted".

### <a name="creds-upload"></a>Bulk-registering devices

To connect larger amounts of devices, Cumulocity offers the option to bulk-register devices, i.e. to register them all in one step. This is done by uploading a CSV file with at least the IDs and credentials of the devices.

1. Click "Registration" in the "Devices" menu of the navigator and click **Register device**.
2. In the upcoming window choose **Bulk device registration**.
3. Select the CSV file you want to upload by browsing for it.

		ID;Credentials;Tenant;PATH;ICCID;NAME;TYPE
		006064ce800a;LF2PWJoLG1Fz;management;Sample_Düsseldorf;	+491555555;Sample_Device1;c8y_Device
		006064ce8077;OowoGKAbiNJs;management;Sample_Düsseldorf;	+491555555;Sample_Device2;c8y_Device

You may also download a template file here to view or copy the structure.

 <!--
 Needs to be tested. Seems to be outdated.
 Use the "Upload" button to upload the CSV file, as shown in the screenshot below. After the data is imported, you will get feedback on the number of devices that were pre-registered as well as on any potential errors that may have occurred. -->

**Pre-registering devices**

To connect the devices, they need to be pre-registered with the relevant information. More specific, each device needs to be configured as follows:

* User name - the user name for accessing Cumulocity must have the format &lt;tenant&gt;/device_&lt;id&gt;, where &lt;Tenant&gt; refers to the tenant from which the CSV file is imported and  &lt;id&gt; refers to the respective value in the CSV file.
* Password - the password to access Cumulocity, equals the value "Credentials" in the CSV file.
* Device in managed object representation - fields "Type", "Name", "Iccid", "Idtype", "Path", "Shell" in the CSV file.

**Info**: If you work with a Cumulocity Enterprise Edition you may also register devices across multiple tenants by adding a "tenant" column to the spreadsheet and importing the CSV file from the "management" tenant.

For further information on the file format and accepted CSV variants, refer to 
[Bulk device credentials](/guides/reference/device-credentials/#creds-upload).
