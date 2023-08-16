---
weight: 20
title: Registering LWM2M devices
layout: redirect
---

The data provided during registration must enable LWM2M communication and holds information for factory bootstrap and client-initiated bootstrap.
In the factory bootstrap mode, the LWM2M client has been configured with the necessary bootstrap information prior to the deployment of the device.
The client-initiated bootstrap mode requires a LWM2M bootstrap server account pre-loaded in the LWM2M client.
{{< product-c8y-iot >}} supports registration for **unsecured** and **PSK-secured** LWM2M devices allowing connection with NO_SEC and PSK mode respectively.


You can register a LWM2M device in {{< product-c8y-iot >}} in two ways:

* [Single device registration](#single-device-registration)
* [Bulk device registration](#bulk-device-registration)

### Single device registration

To register a LWM2M device in {{< product-c8y-iot >}} navigate to **Devices** > **Registration** in the Device management application, click **Register device** at the top right and select **Single device registration** > **LWM2M** from the dropdown.

The LWM2M device registration wizard has three steps:
* Required settings for establishing a connection.
Refer to [Required settings](#required-settings) below for details about the fields.
If PSK security mode is selected, additional settings are required.
* Bootstrap settings for enabling the device to connect to the {{< product-c8y-iot >}} LWM2M bootstrap server.
Refer to [Bootstrap settings](#bootstrap-settings) below for details about the fields.
* Advanced setting for further optional configurations.
Refer to [Advanced settings](#advanced-settings) below for details about the fields.

After filling all applicable information for the device, click **Register**.
The UI will display a confirmation message.

### Bulk device registration

If there is a number of devices to be registered at the same time, it is more convenient to use bulk device registration.

To register the LWM2M devices in {{< product-c8y-iot >}}, navigate to **Devices** > **Registration** in the Device management application, click **Register device** at the top right and select **Bulk device registration** > **LWM2M** from the dropdown.
Upload a CSV file with the registration data in the resulting bulk registration dialog.
The dialog also contains CSV template links.
Refer to [Required settings](#required-settings), [Bootstrap settings](#bootstrap-settings) and [Advanced settings](#advanced-settings) below for details about the fields.

{{< c8y-admon-info >}}
The maximum size allowed for the CSV file is 10 MB.
{{< /c8y-admon-info >}}


When you upload the CSV file, the dialog will display a confirmation message that tells you where to find the result. The bulk device registration operation will be displayed in the [LWM2M connector device](#connector-device) object created for the tenant.

### Device registration settings


#### Required settings

The fields below must be contained to be able to establish a connection:
<table>
<col>
<col style="width:30%">
<col style="width:11%">
<col style="width:30%">
<col>
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">CSV field name</th>
<th style="text-align: left">Type</th>
<th style="text-align:left">Description</th>
<th style="text-align: left">Mandatory</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Endpoint client ID</td>
<td style="text-align:left">endpoint id</td>
<td style="text-align: left">String</td>
<td style="text-align:left">Indicates the LWM2M client's endpoint ID in order to allow the LWM2M bootstrap to provision the bootstrap information for the LWM2M client. The endpoint ID has be to be <b>unique</b> across all tenants and must have the same value as the ID. Registering a device using an endpoint ID already used will result in an error.</td>
<td style="text-align: left">Mandatory</td>
</tr>
<tr>
<td style="text-align:left">Security mode</td>
<td style="text-align:left">securityMode</td>
<td style="text-align: left">String</td>
<td style="text-align:left">Determines the type of connection used by the LWM2M device. "NO_SEC" is used for unsecure connections which means that there is no security. It is highly recommended to always protect the LWM2M protocol. However, there are scenarios in which the LWM2M protocol is deployed in environments where the lower layer security mechanisms are provided. "PSK" is used for secure connections. If PSK is selected, devices need to connect to the LWM2M server using DTLS with the given pre-shared key (PSK). With "PSK", the client and server have a common secret symmetric cryptography. Currently {{< product-c8y-iot >}} supports only "NO_SEC" and "PSK".</td>
<td style="text-align: left">Mandatory</td>
</tr>
<tr>
<td style="text-align: left">LWM2M PSK ID</td>
<td style="text-align: left">lwm2m psk_id</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The ID used by the device for server connections in PSK mode. The LWM2M PSK ID has be to be <b>unique</b> across all tenants. Registering a device using an LWM2M PSK ID already used will result in an error.</td>
<td style="text-align: left">Mandatory for PSK. Don't set it for NO_SEC</td>
</tr>
<tr>
<td style="text-align: left">LWM2M PSK key</td>
<td style="text-align: left">lwm2m psk_key</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The hex-encoded pre-shared key used by the device for server connections in PSK mode.</td>
<td style="text-align: left; height: 26px;">Mandatory for PSK. Don't set it for NO_SEC</td>
</tr>
<tr>
<td style="text-align: left">Bootstrap PSK ID</td>
<td style="text-align: left">bootstrap psk_id</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The ID used by the device for bootstrap connections in PSK mode. The bootstrap PSK ID has be to be <b>unique</b> across all tenants. Registering a device using an bootstrap PSK ID already used will result in an error.</td>
<td style="text-align: left">Mandatory for PSK</td>
</tr>
<tr>
<td style="text-align: left">Bootstrap PSK key</td>
<td style="text-align: left">bootstrap psk_key</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The hex-encoded key used by the device for bootstrap connections in PSK mode.</td>
<td style="text-align: left">Mandatory for PSK</td>
</tr>
</tbody>
</table>

#### Bootstrap settings

##### Registration of NO_SEC devices

Unsecured devices connect during bootstrap connection and server connection through unsecured ports:

* **5683**: unsecure bootstrap connection
* **5783**: unsecure direct server connection

##### Registration of PSK-secured devices

PSK-secured devices connect during a bootstrap connection and a server connection using a pre-shared key through secured ports:

* **5684**: PSK bootstrap connection
* **5784**: PSK direct server connection

PSK keys must be provided during the device registration.
The file must contain the fields defined in [Required settings](#required-settings).
PSK registration requires additional fields to be filled.

See the table below for the full set of bootstrap fields you can add:

<table>
<col>
<col style="width:30%">
<col style="width:11%">
<col style="width:30%">
<col>
<thead>
<tr>
<th style="text-align: left">Field</th>
<th style="text-align: left">CSV field name</th>
<th style="text-align: left">Type</th>
<th style="text-align: left">Description</th>
<th style="text-align: left">Mandatory</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left">LWM2M server URI</td>
<td style="text-align: left">lwm2m server uri</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The URI the server uses for bootstrap. The LWM2M bootstrap server is used to provision the LWM2M client with the information required to contact the LWM2M servers. If you use the {{< product-c8y-iot >}} service, the hostname of the LWM2M server is "lwm2m.{{< domain-c8y >}}". The bootstrap ports are "5683" for unsecure bootstrap connections and "5684" for secure bootstrap connections. The LWM2M server ports are "5783" for unsecure server connections and "5784" for secure server connections. Note that these values can be different for other services.</td>
<td style="text-align: left">Mandatory for LWM2M bootstrap</td>
</tr>
<tr>
<td style="text-align: left">Generate bootstrap server config</td>
<td style="text-align: left">generateBootstrapServerConfig</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">In order to establish a connection between the LWM2M client and the LWM2M bootstrap server on the bootstrap interface, the client requires a pre-loaded LWM2M bootstrap server account.
This property enables {{< product-c8y-iot >}} to generate a bootstrap server configuration (for example, the security information like server URI, server ID, or security mode) for the LWM2M bootstrap server and writes it back to the client during bootstrap. Default is false.
Refer to the <a href="http://www.openmobilealliance.org/release/lightweightm2m/V1_0-20170208-A/OMA-TS-LightweightM2M-V1_0-20170208-A.pdf">OMA LWM2M 1.0 technical specification</a> for more details.
</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">LWM2M bootstrap short server ID</td>
<td style="text-align: left">bootstrapShortServerId</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The short server ID to be used for the bootstrap server. Default is "0".</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left; height: 13px;">Registration lifetime</td>
<td style="text-align: left; height: 13px;">registrationLifetime</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The registration lifetime that is sent to the device during bootstrap. Overrides global agent configuration. The value must be specified in seconds.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Default minimum period</td>
<td style="text-align: left">defaultMinimumPeriod</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The default minimum period to configure during bootstrap. See the <a href="http://www.openmobilealliance.org/release/lightweightm2m/V1_0-20170208-A/OMA-TS-LightweightM2M-V1_0-20170208-A.pdf">LWM2M specification</a> for explanation.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left; height: 13px;">Default maximum period</td>
<td style="text-align: left; height: 13px;">defaultMaximumPeriod</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The default max period to configure during bootstrap. See <a href="http://www.openmobilealliance.org/release/lightweightm2m/V1_0-20170208-A/OMA-TS-LightweightM2M-V1_0-20170208-A.pdf">LWM2M specification</a> for explanation.</td>
<td style="text-align: left">Optional</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
After creation, you can view and change the bootstrap parameters in the **LWM2M bootstrap parameters** tab in the **Device details** page, see [LWM2M bootstrap parameters](#lwm2m-bootstrap-parameters).
{{< /c8y-admon-info >}}

#### Advanced settings

See the table below for information on additional fields:

<table>
<col>
<col style="width:30%">
<col style="width:11%">
<col style="width:30%">
<col>
<thead>
<tr>
<th style="text-align: left">Field</th>
<th style="text-align: left">CSV field name</th>
<th style="text-align: left">Type</th>
<th style="text-align: left">Description</th>
<th style="text-align: left">Mandatory</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left">LWM2M device type</td>
<td style="text-align: left">type</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Type to set for the device managed object on creation. Default is "c8y_lwm2m".
</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Server public key</td>
<td style="text-align: left">serverPublicKey</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The public key of the server.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">LWM2M short server ID</td>
<td style="text-align: left">lwm2mShortServerId</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The short server ID to be used for LWM2M server. Default is "1".</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Security instance offset</td>
<td style="text-align: left">securityInstanceOffset</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The first instance to be used during bootstrap to which entries are written. Default is "0". If set, for example, to "3", the first instance will be three.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr style="height: 26px;">
<td style="text-align: left">Binding mode</td>
<td style="text-align: left">bindingMode</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The LWM2M binding mode to be reported to the device. For LWM2M 1.0 devices the supported modes are "UQ" (default, queuing) and "U" (unqueued).
Note that since {{< product-c8y-iot >}} LWM2M 1.1, the "Q" (queue) mode is not supported, and the default mode will be "U" (unqueued). {{< product-c8y-iot >}} will always queue operations, regardless of whether the device is connected or not. This means that the setting has no effect on the behavior of {{< product-c8y-iot >}}.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Awake time registration parameter</td>
<td style="text-align: left">awakeTimeRegistrationParameter</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">Specifies a time interval in milliseconds for which a device is awake and accepting network traffic after sending a LWM2M registration or a registration update to {{< product-c8y-iot >}}.
If set to 0, the device will be considered as always online.
If the value is not set, the awake time is determined by the LWM2M client's registration awake time attribute "at" or, if this attribute is also not found, then by the global setting that is defined in the LWM2M microservice.
</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left; height: 40px;">Notification storing when disabled or offline / notificationIfDisabled</td>
<td style="text-align: left; height: 40px;">notificationIfDisabled</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">See the <a href="http://www.openmobilealliance.org/release/lightweightm2m/V1_0-20170208-A/OMA-TS-LightweightM2M-V1_0-20170208-A.pdf">LWM2M specification</a>. Allowed values are true or false. Default: Not configured.</td>
<td style="text-align: left">Optional, defaults to Leshan default behavior</td>
</tr>
<tr style="height: 40px;">
<td style="text-align: left">Disable timeout</td>
<td style="text-align: left">disableTimeout</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">See the <a href="http://www.openmobilealliance.org/release/lightweightm2m/V1_0-20170208-A/OMA-TS-LightweightM2M-V1_0-20170208-A.pdf">LWM2M specification</a>. Allowed values are true or false. Default: Not configured.</td>
<td style="text-align: left">Optional, defaults to Leshan default behavior</td>
</tr>
<tr>
<td style="text-align: left">LWM2M request timeout</td>
<td style="text-align: left">lwm2mRequestTimeout</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The timeout used for shell operation requests such as read, write, execute done by the LWM2M microservice to the LWM2M device.
The value is in milliseconds and can be given to override the default value that is provided in the LWM2M microservice property file with the "C8Y.lwm2mRequestTimeout" property.
The value must not exceed the maximum request timeout limit given in the LWM2M microservice property file with the "C8Y.lwm2mMaxRequestTimeout" property.
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Binary delivery encoding</td>
<td style="text-align: left">binaryDeliveryEncoding</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the encoding format for writing binaries to a LWM2M device. The encoding format can be OPAQUE, TLV, JSON or TEXT. In case of empty or invalid entries, the default format is OPAQUE.
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Use common timestamp resources 5518 and 6050 or object specific timestamp for object 6 reported by the device if available</td>
<td style="text-align: left">enableResourceLevelTimestamp</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">If this device property is enabled {{< product-c8y-iot >}} uses time stamps reported by the device for constructing measurements, events and alarms. This is possible if the device reports multiple resources at the same time. For example, this may be done using observes on entire object instances or composite reads and observes. Time stamp data needs to be reported as part of the same object: Either via the common timestamp resources 5518 and 6050 or the specific timestamp resource for object 6. If this feature is disabled or no timestamp information is reported, {{< product-c8y-iot >}} will use its local date and time. Default: false</td>
<td style="text-align: left">Optional, defaults to false</td>
</tr>
<tr>
<td style="text-align: left">Keep old values in the objects tab if an operation fails </td>
<td style="text-align: left">c8y_GenericUI_retainOldValuesIfError</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">Controls if stale values are kept in the Objects tab. If this flag is set to <code>true</code> (default) the agent never removes a value. If set to <code>false</code> the agent will remove values in two cases:
<ol>
<li>A failed read or write operation will lead to removal if the device answers with one of the following CoAP response codes: <code>4.01 (Unauthorized)</code>, <code>4.03 (Forbidden)</code>, <code>4.04 (Not found)</code>, <code>5.00 (Internal Server Error)</code> and <code>5.01 (not implemented)</code>. </li>
<li>Resources not contained in a discover response will be removed. This allows a discover operation to be used for purging resources that do not exist on the device any longer.</li>
</ol>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<tr>
<td style="text-align: left">Device protocol serialization format</td>
<td style="text-align: left">serializationFormat</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the preferred content format for {{< product-c8y-iot >}} to communicate with the device. The allowed content formats are: TLV, JSON, CBOR, TEXT, OPAQUE or SENML_JSON and SENML_CBOR. In case of an empty or invalid entry, {{< product-c8y-iot >}} automatically selects the serialization format which the device sends during device registration.</td>
<td style="text-align: left">Optional</td>
</tr>
</tbody>
</table>

The following table explains several optional parameters related to firmware updates which help in tuning the Firmware Over The Air (FOTA) parameters on a device level.

<table>
<col>
<col style="width:30%">
<col style="width:11%">
<col style="width:30%">
<col>
<thead>
<tr>
<th style="text-align: left">Field</th>
<th style="text-align: left">CSV field name</th>
<th style="text-align: left">Type</th>
<th style="text-align: left">Description</th>
<th style="text-align: left">Mandatory</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left">Firmware update delivery method</td>
<td style="text-align: left">fwUpdateDeliveryMethod</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Explains the firmware update delivery method.
Allowed values are PUSH, PULL or BOTH.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Firmware update supported device protocol</td>
<td style="text-align: left">fwUpdateSupportedDeviceProtocol</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the device protocol to be used for the firmware update. Allowed values are COAP, COAPS, HTTP or HTTPS.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Firmware update reset mechanism</td>
<td style="text-align: left">fwUpdateResetMechanism</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the mechanism used to reset the firmware update state machine.
Allowed values are PACKAGE or PACKAGE_URI. Depending on the value, the LWM2M agent either writes an empty string to package URI resource or sets the package resource to NULL ('\0'). If this field is not used, the default reset state machine mechanism is used where a reset is done via package resource for PUSH and via package URI for PULL.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Initial State Machine Reset</td>
<td style="text-align: left">fwResetStateMachineOnStart</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">Controls if the LWM2M agent performs an initial state machine reset before it starts a firmware update. Default is TRUE.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">Firmware update URL</td>
<td style="text-align: left">fwUpdateURL</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the firmware update URL from where the LWM2M device can download the firmware package.</td>
<td style="text-align: left">Optional</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
Firmware updates are also supported for the registration of unsecured devices as well as PSK-secured devices. For more information, see [Managing firmware](/device-management-application/managing-device-data/#managing-firmware).
{{< /c8y-admon-info >}}

### Duplicate LWM2M devices

If a LWM2M device has been registered with the same endpoint ID before, the device registration will not register the device, neither for single nor for bulk device registrations.
For single device registrations, the duplication error message will be displayed after clicking register.
For bulk device registrations, the information about duplicate LWM2M devices will be displayed under the [LWM2M connector device](#connector-device)'s bulk upload operation result.


### Device deletion

During LWM2M device registration the tenant route information is also stored in the cluster tenant.
In order to remove the device, delete it from the list in [Viewing all Devices](/device-management-application/viewing-all-devices).
