---
weight: 11
title: Connecting Devices
layout: redirect
helpcontent:
  - label: connecting-devices
    title: Connecting devices
    content: "To connect devices to Cumulocity IoT they must be registered. To register one or more devices, click **Register device** and follow the instructions in the wizard or in the *User guide*.


    All devices which are currently in the registration process are displayed with one of the following statuses:


    **Waiting for connection** - The device has been registered but no device with the specified ID has tried to connect

    **Pending acceptance** - There is communication from a device with the specified ID, but the user doing the registration must still explicitly accept it so that the credentials are sent to the device

    **Accepted** - The user has allowed the credentials to be send to the device

    **Blocked** - The device registration has been blocked due to the exceeded limit of failed attempts.


    To register devices, you can select one of the following options:

    Single device registration - To manually connect one or more devices.

    Bulk device registration - To register larger amounts of devices in one step.


    Depending on the microservices subscribed to your tenant, you might see other device registration options for specific protocol types.


    To register a device, click **Register device** at the right of the top bar, select an option from the dropdown list and follow the instructions in the device registration wizard."
---

<a name="dev-registration"></a>

### Device registration

In the **Device registration** page all devices which are currently in the registration process are displayed.

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
* **Blocked** - The device registration has been blocked due to the exceeded limit of failed attempts.

{{< c8y-admon-info >}}
If a device registration is **blocked**, you will need to delete it first and then create it again.
{{< /c8y-admon-info >}}

Devices can be connected to your {{< product-c8y-iot >}} account in different ways.

### To register devices

To register devices, you can select one of the following options:

* **[Single device registration](#device-registration-manually)** - to manually connect one device or several devices one by one.
* **[Bulk device registration](#bulk-registration)** - to register larger amounts of devices in one step.

Microservice developers can also use the [Extensible device registration](/concepts/applications/#extensible-device-registration) and implement a custom registration form that blends seamlessly into the UI.

{{< c8y-admon-info >}}
The following descriptions apply to the general device registration processes. If you subscribe to specific protocol integrations, you will see additional protocol-specific options (for example, for LWM2M or OPC UA). A full list of supported protocols can be found in the [Protocol integration guide](/protocol-integration/overview/). It also contains descriptions for the protocol specific registration processes.
{{< /c8y-admon-info >}}

<a name="device-registration-manually"></a>
#### Single device registration

{{< product-c8y-iot >}} offers single device registration to connect devices manually one by one.
<br>
##### To connect a  device manually
<br>
{{< c8y-admon-info >}}
Depending on the type of device you want to connect, not all steps of the following process may be relevant.
{{< /c8y-admon-info >}}

1. Click **Registration** in the **Devices** menu of the navigator.
2. In the **Device registration** page, click **Register device** at the right of the top bar and from the dropdown menu select **Single registration** > **General**. The **Register devices** dialog box will be displayed.
3. In the **Device ID** field, enter a unique ID for the device. To determine the ID, consult the device documentation. In case of mobile devices the ID usually is the IMEI (International Mobile Equipment Identity) often found on the back of the device.
4. Optionally, select a group to assign your device to after registration, see also [Grouping devices](#grouping-devices).
5. Click **Add device** to register one more device. Again, enter the device ID and optionally select a group. This way, you can add multiple devices in one step.
6. Click **Next** to register your device(s).

{{< c8y-admon-info >}}
In an {{< enterprise-tenant >}}, the {{< management-tenant >}} may also directly select a tenant to which the device will be added from here. Note that since the {{< management-tenant >}} does not have access to the subtenant's inventory you can either register devices to a tenant OR to a group, not both.

<img src="/images/users-guide/DeviceManagement/devmgmt-device-registration-tenant.png" alt="General device registration">
{{< /c8y-admon-info >}}

After successful registration the device(s) will be listed in the [Device registration](#dev-registration) page with the status "Waiting for connection".

Turn on the device(s) and wait for the connection to be established.

Once a device is connected, its status will change to "Pending acceptance".

{{< c8y-admon-info >}}
The **Pending acceptance** screen might differ depending on the [security token policy](#security-token-policy-for-device-registration).
{{< /c8y-admon-info >}}

Click **Accept** to confirm the connection. The status of the device will change to "Accepted".

{{< c8y-admon-info >}}
In case of any issues, consult the documentation applicable for your device type in the [{{< product-c8y-iot >}} {{< device-portal >}}]({{< link-device-portal >}}) or look up the manual of your device.
{{< /c8y-admon-info >}}

<a name="creds-upload"></a>

#### Security token policy for device registration

Configure the security token policy to reduce the risk of devices which are not yet registered being taken over by threat actors, for example, by guessing their serial numbers.

{{< c8y-admon-info >}}
The feature requires  READ permission for "Option management". If the permission is missing, the security token policy defaults to OPTIONAL.
{{< /c8y-admon-info >}}

{{< product-c8y-iot >}} supports the following values for the security token policy:

* IGNORED - Even if a device requires secure registration, {{< product-c8y-iot >}} will ignore that requirement.
* OPTIONAL - If a device requires secure registration, {{< product-c8y-iot >}} will request an additional security token from the user.
* REQUIRED - All devices connected to {{< product-c8y-iot >}} must use a security token during registration.

The policy can be configured by setting the following tenant option with one of the values listed above, for example:

```json
{
  "category": "device-registration",
  "key": "security-token.policy",
  "value": "IGNORED"
}
```

{{< c8y-admon-info >}}
The **Pending acceptance** screen might differ depending on the [security token policy](#security-token-policy-for-device-registration).
{{< /c8y-admon-info >}}

##### Ignored security token policy

With a value of IGNORED for the security token policy, a device connected to {{< product-c8y-iot >}} can be accepted without any token validation:

![Accepting devices registrations under ignored security token policy](/images/users-guide/DeviceManagement/devmgmt-at-register-device-pending-acceptance-ignored-security.png)

##### Optional security token policy

The list of device registrations is presented in the image below. Note that the input for security token is displayed for all devices.

![Accepting devices registrations under optional security token policy](/images/users-guide/DeviceManagement/devmgmt-at-register-device-pending-acceptance-optional-security.png)

**Registration without using a security token**

When a device connected to {{< product-c8y-iot >}} doesn't use a security token, the registration can proceed without providing any value in the security token input.

If a security token is provided for a device which is connected insecurely, it will be accepted and the token will be ignored.

**Registration using a security token**

When a device connected to {{< product-c8y-iot >}} does use a security token, the registration can be completed only if the user provides a token matching the one sent by the device on establishing the connection.

![Providing a token for device registration request in optional security token policy](/images/users-guide/DeviceManagement/devmgmt-at-register-device-pending-acceptance-optional-security-enter-token.png)

In the case of providing an incorrect token, an error message will be displayed informing about a mismatch between the value used by the device and the value provided via the user interface.

After a certain amount of failed attempts, the registration will reach the blocked state, indicated by a corresponding error message.
The blocked registration must be removed before the next attempt to connect the device.

**Limited  usage of "Accept all" feature**

The **accept all** feature is supported for devices connected to {{< product-c8y-iot >}} without the usage of a security token.

For any device which uses a security token, the **accept all** feature is not available and will display a warning message. The details of the warning message provide the list of devices which could not be accepted automatically.

Such devices must be accepted manually by providing the correct **Security token** value and clicking **Accept**.


##### Required security token policy

In this mode any device connected to {{< product-c8y-iot >}} must use a security token on establishing the connection and the user must enter the same token when accepting the device.

The procedure of accepting devices is the same as described in [Optional security token policy](#optional-security-token-policy).

While in this mode, any devices connecting to {{< product-c8y-iot >}} without a security token will be blocked and it won't be possible to complete their registration.

<a name="bulk-registration"></a>
#### Bulk device registration

To connect larger amounts of devices, {{< product-c8y-iot >}} offers the option to bulk-register devices, that means, to register larger amounts of devices by uploading a CSV file.

{{< c8y-admon-info >}}
There is no restriction on the number of devices that you can bulk-register but the more devices you add the slower the creation and operation gets.
{{< /c8y-admon-info >}}

##### To bulk-register devices


1. Click **Registration** in the **Devices** menu of the navigator.

2. In the **Device registration** page, click **Register device** at the right of the top bar and from the dropdown menu select **Bulk registration** > **General**. The **Bulk device registration** dialog box will be displayed.

3. Click the Plus button to select or drag-and-drop the CSV file you want to upload.

Depending on the format of the uploaded CSV file, one of the following registration types will be processed:

* Simple registration
* Full registration

{{< c8y-admon-info >}}
Bulk registration creates an elementary representation of the device. Then, the device needs to update it to a full representation with its own status.
{{< /c8y-admon-info >}}

A separator is automatically obtained from the CSV file. Valid separator values are: `\t` (tabulation mark), `;` (semicolon) and `,` (comma).

**Simple registration**

The CSV file contains two columns: ID;PATH, where ID is the device identifier, for example, serial number, and PATH is a slash-separated list of group names (path to the group where the device should be assigned to after registration).

```
ID;PATH
Device1;Group A
Device2;Group A/Group B			
```


After the file is uploaded, all required new groups will be created, new registrations will be created with status "Waiting for connection", and the normal registration process needs to be continued (see above).

**Full registration**

The CSV files must contain at least the IDs as device identifier and the credentials of the devices.

In addition to these columns the file can also contain other columns like ICCID, NAME, TYPE as shown in the following example:

```
ID;CREDENTIALS;TYPE;NAME;ICCID;IDTYPE;PATH;SHELL;AUTH_TYPE
006064ce800a;LF2PWJoLG1Fz;c8y_Device;Sample_Device1;+491555555;c8y_Serial;bulk group/subgroup1;1;BASIC
006064ce8077;OowoGKAbiNJs;c8y_Device;Sample_Device2;+491555555;c8y_Serial;bulk group/subgroup2;1;BASIC
```

To connect the devices, they are pre-registered with the relevant information. More specific, each device will be configured as follows:

* Username - the username for accessing {{< product-c8y-iot >}} must have the format &lt;tenant&gt;/device_&lt;id&gt;, where &lt;tenant&gt; refers to the tenant from which the CSV file is imported and &lt;id&gt; refers to the respective value in the CSV file.
* Password - the unique password for each device to access {{< product-c8y-iot >}} equals the value "Credentials" in the CSV file.
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
[Create a bulk device credentials request](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#operation/postBulkNewDeviceRequestCollectionResource) in the {{< openapi >}}.

{{< c8y-admon-info >}}
In an {{< enterprise-tenant >}} you may also register devices across multiple tenants by adding a **Tenant** column to the spreadsheet and importing the CSV file from the {{< management-tenant >}}.
{{< /c8y-admon-info >}}
