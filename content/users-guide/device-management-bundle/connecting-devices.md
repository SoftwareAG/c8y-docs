---
weight: 11
title: Connecting Devices
layout: redirect
helpcontent:
  - label: connecting-devices
    title: Connecting devices
    content: "To connect devices to Cumulocity IoT they must be registered. To register one or more devices, click **Register device** and follow the instructions in the wizard or in the *User guide*.


    All devices which are currently in the registration process are displayed with one of the following status:


    **Waiting for connection** - the device has been registered but no device with the specified ID has tried to connect

    **Pending acceptance** - there is communication from a device with the specified ID, but the user doing the registration must still explicitly accept it so that the credentials are sent to the device

    **Accepted** - the user has allowed the credentials to be send to the device"
---

<a name="dev-registration"></a>

### Device registration

In the **Device registration** page all devices which currently are in the registration process are displayed either in a list or in a grid.

<img src="/images/users-guide/DeviceManagement/devmgmt-device-registration.png" alt="Device registration page">

The following information is shown for each device:

* Device name specified in the registration process
* Status of the device (see below)
* Creation date
* Tenant from which the device was registered

The devices may have one of the following status:

* **Waiting for connection** - The device has been registered but no device with the specified ID has tried to connect.
* **Pending acceptance** - There is communication from a device with the specified ID, but the user doing the registration must still explicitly accept it so that the credentials are sent to the device.
* **Accepted** - The user has allowed the credentials to be send to the device.

Devices can be connected to your {{< product-c8y-iot >}} account in different ways.

### To register devices

To register devices, you can select one of the following options:

* **[General device registration](#device-registration-manually)** - to manually connect one or more devices
* **[Bulk device registration](#creds-upload)** - to register larger amounts of devices in one step

If you are subscribed to the required applications you will see a third option
**Custom device registration** for registering devices of specific types, for example, Actility LoRa or Sigfox, see the documentation for these services in the [Protocol integration guide](/protocol-integration/overview).

<img src="/images/users-guide/DeviceManagement/devmgmt-register-devices-custom.png" alt="Register devices">

<a name="device-registration-manually"></a>
#### To connect a  device manually

{{< c8y-admon-info >}}
Depending on the type of device you want to connect, not all steps of the following process may be relevant.
{{< /c8y-admon-info >}}

1. Click **Registration** in the **Devices** menu of the navigator and then click **Register device**.
2. In the resulting **Register devices** dialog box, select **General device registration**.

  <img src="/images/users-guide/DeviceManagement/devmgmt-registration-general.png" alt="General device registration" style="max-width: 100%">

3. In the **Device ID** field, enter a unique ID for the device. To determine the ID, consult the device documentation. In case of mobile devices the ID usually is the IMEI (International Mobile Equipment Identity) often found on the back of the device.
4. Optionally, select a group to assign your device to after registration, see also [Grouping devices](#grouping-devices).
5. Click **Add another device** to register one more device. Again, enter the device ID and optionally select a group. This way, you can add multiple devices in one step.
6. Click **Next** to register your device(s).

{{< c8y-admon-info >}}
In an {{< enterprise-tenant >}}, the {{< management-tenant >}} may also directly select a tenant to which the device will be added from here. Note that since the {{< management-tenant >}} does not have access to the subtenant's inventory you can either register devices to a tenant OR to a group, not both.
{{< /c8y-admon-info >}}

<img src="/images/users-guide/DeviceManagement/devmgmt-device-registration-tenant.png" alt="General device registration">

After successful registration the device(s) will be listed in the [Device registration](#dev-registration) page with the status "Waiting for connection".

Turn on the device(s) and wait for the connection to be established.
Once a device is connected, its status will change to "Pending acceptance".
Click **Accept** to confirm the connection. The status of the device will change to "Accepted".

{{< c8y-admon-info >}}
In case of any issues, consult the documentation applicable for your device type in the [{{< product-c8y-iot >}} {{< device-portal >}}]({{< link-device-portal >}}) or look up the manual of your device.
{{< /c8y-admon-info >}}

<a name="creds-upload"></a>
#### To bulk-register devices

To connect larger amounts of devices, {{< product-c8y-iot >}} offers the option to bulk-register devices, that means, to register larger amounts of devices by uploading a CSV file.

{{< c8y-admon-info >}}
There is no restriction on the number of devices that you can bulk-register but the more devices you add the slower the creation and operation gets.
{{< /c8y-admon-info >}}

1. Click **Registration** in the **Devices** menu of the navigator and then click **Register device**.
2. In the resulting **Register devices** dialog box select **Bulk device registration**.

  <img src="/images/users-guide/DeviceManagement/devmgmt-bulk-registration.png" alt="Bulk registration" style="max-width: 100%">

3. Click **Select file to upload** and select the CSV file you want to upload by browsing for it in your file system.

<br>
Depending on the format of the uploaded CSV file, one of the following registration types will be processed:

* Simple registration
* Full registration

{{< c8y-admon-info >}}
Bulk registration creates an elementary representation of the device. Then, the device needs to update it to a full representation with its own status.
{{< /c8y-admon-info >}}

**Simple registration**

The CSV file contains two columns: ID;PATH, where ID is the device identifier, for example, serial number, and PATH is a slash-separated list of group names (path to the group where the device should be assigned to after registration).

```asciidoc
    ID;PATH
    Device1;Group A
    Device2;Group A/Group B			
```


After the file is uploaded, all required new groups will be created, new registrations will be created with status "Waiting for connection", and the normal registration process needs to be continued (see above).

**Full registration**

The CSV files must contain at least the IDs as device identifier and the credentials of the devices.

In addition to these columns the file can also contain other columns like ICCID, NAME, TYPE as shown in this example.

```asciidoc
    ID;Credentials;PATH;ICCID;NAME;TYPE
    006064ce800a;LF2PWJoLG1Fz;Sample_Düsseldorf;+491555555;Sample_Device1;c8y_Device
    006064ce8077;OowoGKAbiNJs;Sample_Düsseldorf;+491555555;Sample_Device2;c8y_Device		
```

To connect the devices, they are pre-registered with the relevant information. More specific, each device will be configured as follows:

* Username - the username for accessing {{< product-c8y-iot >}} must have the format &lt;tenant&gt;/device_&lt;id&gt;, where &lt;tenant&gt; refers to the tenant from which the CSV file is imported and &lt;id&gt; refers to the respective value in the CSV file.
* Password - the password to access {{< product-c8y-iot >}}, equals the value "Credentials" in the CSV file.
* Device in managed object representation - fields TYPE, NAME, ICCID, IDTYPE, PATH, SHELL in the CSV file.

After the data is imported, you will get feedback on the number of devices that were pre-registered as well as on any potential errors that may have occurred.

For your convenience, we provide CSV template files for both bulk registration types (simple/full) which you can download from the registration wizard to view or copy the structure.

{{< c8y-admon-info >}}
If the device with the given identifier already exists, it will be updated with the data from the CSV file.
{{< /c8y-admon-info >}}

##### To import CSV data in Microsoft Excel

1. In Microsoft Excel, switch to the **Data** tab.
2. In the **Data** tab, select **From Text** in the top menu bar.
3. Select the CSV file you want to import by browsing for it (in this case the template file that you have downloaded from the {{< product-c8y-iot >}} platform).
4. In Step 1 of the **Text Import Wizard**, leave the default settings and click **Next**.
5. In Step 2 of the **Text Import Wizard**, select **Semicolon** as delimiter and click **Finish**.

For further information on the file format and accepted CSV variants, also refer to
[Create a bulk device credentials request](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#operation/postBulkNewDeviceRequestCollectionResource) in the {{< openapi >}}.

{{< c8y-admon-info >}}
In an {{< enterprise-tenant >}} you may also register devices across multiple tenants by adding a **Tenant** column to the spreadsheet and importing the CSV file from the {{< management-tenant >}}.
{{< /c8y-admon-info >}}
