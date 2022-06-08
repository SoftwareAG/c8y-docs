---
weight: 20
title: Registering LWM2M devices
layout: redirect
---

To register a LWM2M device in {{< product-c8y-iot >}}, upload a CSV file with registration data in the bulk registration dialog in **Devices** > **Registration** > **Register device** > **Bulk device registration** in the Device Management application, see [Device Management > Connecting devices > To bulk-register devices](/users-guide/device-management/#creds-upload) in the *User guide*.
This data is required to enable LWM2M communication. The CSV file holds all information for factory bootstrap and client-initiated bootstrap. In the factory bootstrap mode, the LWM2M client has been configured with the necessary bootstrap information prior to the deployment of the device. The client-initiated bootstrap mode requires a LWM2M bootstrap-server account pre-loaded in the LWM2M client.
{{< product-c8y-iot >}} supports registration for **unsecured** and **PSK-secured** LWM2M devices allowing connection with **NO_SEC** and **PSK** mode respectively.

<a name="registration-of-unsecured-device"></a>
### Registration of unsecured devices

Unsecured devices connect during bootstrap connection and server connection through unsecured ports:
* **5683**: unsecure bootstrap connection
* **5783**: unsecure direct server connection

Below you can see an example CSV file for an unsecured device:

![NO_SEC device csv](/images/device-protocols/lwm2m/lwm2m-nosec-csv-example.png)

The CSV file must at least contain the following fields to be able to establish a connection:
<table>
<col style="width:20%">
<col style="width:80%">
<thead>
<tr>
<th style="text-align:left">Field</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ID</td>
<td style="text-align:left">Unique ID of the device, such as an IMEI or a serial number. The ID field must be <b>unique</b> as it uniquely identifies a LWM2M device.</td>
</tr>
<tr>
<td style="text-align:left">IDTYPE</td>
<td style="text-align:left">The type of the external ID. This type must be "c8y_Id" to allow {{< product-c8y-iot >}} to create an external ID for the LWM2M device.</td>
</tr>
<tr>
<td style="text-align:left">CREDENTIALS</td>
<td style="text-align:left">The device credentials. The content of this field is not used by the LWM2M feature. However, this field is still mandatory. Accessing {{< product-c8y-iot >}} devices usually requires a password (the value of the "Credentials" field in the CSV file) by the inventory. However, the LWM2M agent has its own way of authenticating devices and hence the "Credentials" field is not used by the LWM2M agent but is used by the platform as a mandatory parameter. The credentials must contain a minimum of 12 characters with an uppercase letter, a lowercase letter, a digit and a special character.</td>
</tr>
<tr>
<td style="text-align:left">NAME</td>
<td style="text-align:left">The name of the device. In this case the name of the device is the same as the device ID.</td>
</tr>
<tr>
<td style="text-align:left">TYPE</td>
<td style="text-align:left">This field needs to have the value "c8y_lwm2m" to mark the device as a LWM2M device.</td>
</tr>
<tr>
<td style="text-align:left">SHELL</td>
<td style="text-align:left">To enable "Shell", the value of this field must be "1". If you want to disable "Shell" the value must be "0". For more info about the shell commands, see <a href="#shell-commands" class="no-ajaxy">Shell commands</a>.</td>
</tr>
<tr>
<td style="text-align:left">com_cumulocity_model_Agent</td>
<td style="text-align:left">This field needs to have the value "1" to forward all commands to the LWM2M agent.</td>
</tr>
<tr>
<td style="text-align:left">endpoint id</td>
<td style="text-align:left">Indicates the LWM2M client's "endpoint ID" in order to allow the LwM2M bootstrap to provision the bootstrap information for the LWM2M client. The endpoint ID has be to be <b>unique</b> across all tenants and must have the same value as the ID.</td>
</tr>
<tr>
<td style="text-align:left">lwm2m server uri</td>
<td style="text-align:left">The URI the server is using for bootstrap. The LWM2M bootstrap server is used to provision the LWM2M client with the information required to contact the LWM2M servers. If you are using the {{< product-c8y-iot >}} service the hostname of the LWM2M server is "lwm2m.{{< domain-c8y >}}". The bootstrap ports are "5683" for unsecure bootstrap connections and "5684" for secure bootstrap connections. The LWM2M server ports are "5783" for unsecure server connections and "5784" for secure server connections. Note that these values can be different for other services.</td>
</tr>
<tr>
<td style="text-align:left">securityMode</td>
<td style="text-align:left">Determines the type of connection used by the LWM2M device. "NO_SEC" is used for unsecure connections which means that there is no security. It is highly recommended to always protect the LWM2M protocol. However, there are scenarios in which the LWM2M protocol is deployed in environments where the lower layer security mechanisms are provided. "PSK" is used for secure connections. With "PSK", the client and server have a common secret symmetric cryptography. Currently {{< product-c8y-iot >}} supports only "NO_SEC" and "PSK".</td>
</tr>
</tbody>
</table>

{{< c8y-admon-info >}}
The {{< product-c8y-iot >}} platform stores the credentials for a device owner associated with a particular device. Hence, if you delete a device while the device owner is not deleted and the same CSV file is used again for bulk registration, then the platform no longer considers it as a unique credential and throws an error. To resolve this either use new credentials or a new ID for the device. The other way to resolve this is to delete the credentials from the device credentials options under management.
{{< /c8y-admon-info >}}

Upon upload of the CSV file in {{< product-c8y-iot >}} we should see that our "nosec_device" device has been created.

![Unsecure device created](/images/device-protocols/lwm2m/lwm2m-nosec_device-created.png)

The table below reflects the full set of possible fields that can be added:

<table>
<col style="width:25%">
<col style="width:10%">
<col style="width:50%">
<col style="width:15%">
<thead>
<tr>
<th style="text-align: left">Field</th>
<th style="text-align: left">Type</th>
<th style="text-align: left">Description</th>
<th style="text-align: left">Mandatory</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left">endpoint id</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the LWM2M client's "endpoint ID" in order to allow the LwM2M bootstrap to provision the bootstrap information for the LWM2M client. The endpoint ID has be to be <b>unique</b> across all tenants and must have the same value as the ID.</td>
<td style="text-align: left">Yes</td>
</tr>
<tr>
<td style="text-align: left">lwm2m server uri</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The URI the server is using for bootstrap. The LWM2M bootstrap server is used to provision the LWM2M client with the information required to contact the LWM2M servers. If you are using the {{< product-c8y-iot >}} service the hostname of the LWM2M server is "lwm2m.{{< domain-c8y >}}". The bootstrap ports are "5683" for unsecure bootstrap connections and "5684" for secure bootstrap connections. The LWM2M server ports are "5783" for unsecure server connections and "5784" for secure server connections. Note that these values can be different for other services.</td>
<td style="text-align: left">Yes, for LWM2M bootstrap</td>
</tr>
<tr>
<td style="text-align: left">securityMode</td>
<td style="text-align: left">String</td>
<td style="text-align: left; height: 40px;">Determines the type of connection used by the LWM2M device. "NO_SEC" is used for unsecure connections which means that there is no security. It is highly recommended to always protect the LWM2M protocol. However, there are scenarios in which the LWM2M protocol is deployed in environments where the lower layer security mechanisms are provided. "PSK" is used for secure connections. With "PSK", the client and server have a common secret symmetric cryptography. Currently {{< product-c8y-iot >}} supports only "NO_SEC" and "PSK".</td>
<td style="text-align: left">Yes</td>
</tr>
<tr>
<td style="text-align: left">awakeTimeRegistrationParameter</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">Specifies a time interval in milliseconds for which a device is awake and accepting network traffic after sending a LWM2M registration or a registration update to {{< product-c8y-iot >}}.
If set to 0, the device will be considered as always online.
If the value is not set, the awake time is determined by the LWM2M client's registration awake time attribute &ldquo;at&rdquo; or, if this attribute is also not found, then by the global setting that is defined in the LWM2M microservice.
</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">serverPublicKey</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The public key of the server.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">generateBootstrapServerConfig</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">In order to establish a connection between the LWM2M client and the LWM2M bootstrap server on the bootstrap interface, the client requires a pre-loaded LWM2M bootstrap server account.
This property enables {{< product-c8y-iot >}} to generate a bootstrap server configuration (for example, the security information like server URI, server ID, or security mode) for the LWM2M bootstrap server and writes it back to the client during bootstrap. Default is false.
Refer to the <a href="http://www.openmobilealliance.org/release/lightweightm2m/V1_0-20170208-A/OMA-TS-LightweightM2M-V1_0-20170208-A.pdf">OMA LWM2M 1.0 technical specification</a> for more details.
</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">securityInstanceOffset</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The first instance to be used during bootstrap to which entries are written. Default is "0". If set, for example, to "3", the first instance will be three.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">bootstrapShortServerId</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The short server ID to be used for the bootstrap server. Default is "0".</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">lwm2mShortServerId</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The short server ID to be used for LWM2M server. Default is "1".</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left; height: 13px;">registrationLifetime</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The registration lifetime that is sent to the device during bootstrap. Overrides global agent configuration. The value must be specified in seconds.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">defaultMinimumPeriod</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The default minimum period to configure during bootstrap. See LWM2M Spec for explanation.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left; height: 13px;">defaultMaximumPeriod</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The default max period to configure during bootstrap. See LWM2M Spec for explanation.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr style="height: 26px;">
<td style="text-align: left">bindingMode</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The LWM2M binding mode to be reported to the device. Supported are &ldquo;UQ&rdquo; (default, queuing) and &ldquo;U&rdquo; (unqueued). Note, that {{< product-c8y-iot >}} will always queue operations.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left; height: 40px;">notificationIfDisabled (true/false)</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">See LWM2M spec. Default: Not configured.</td>
<td style="text-align: left">Optional, defaults to Leshan default behavior.</td>
</tr>
<tr style="height: 40px;">
<td style="text-align: left">disableTimeout (true/false)</td>
<td style="text-align: left">Boolean</td>
<td style="text-align: left">See LWM2M spec. Default: Not configured.</td>
<td style="text-align: left">Optional, defaults to Leshan default behavior.</td>
</tr>
<tr>
<td style="text-align: left">binaryDeliveryEncoding</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the encoding format for writing binaries to a LWM2M device. The encoding format can be either "OPAQUE" or "TLV" or "JSON" or "TEXT". In case of empty or invalid entries,
the default format is considered as "OPAQUE".
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">lwm2mRequestTimeout</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The timeout used for shell operation requests such as read, write, execute done by the LWM2M microservice to the LWM2M device.
The value is in milliseconds and can be given to override the default value that is provided in the LWM2M microservice property file with &ldquo;C8Y.lwm2mRequestTimeout&rdquo; property.
The value must not exceed the maximum request timeout limit given in the LWM2M microservice property file with &ldquo;C8Y.lwm2mMaxRequestTimeout&rdquo; property.
<td style="text-align: left">Optional</td>
</tr>
</tbody>
</table>

<a name="registration-of-psk-secured-device"></a>
### Registration of PSK-secured devices

PSK-secured devices connect during a bootstrap connection and a server connection using a pre-shared key through secured ports:
* **5684**: PSK bootstrap connection
* **5784**: PSK direct server connection

PSK keys must be provided during the device registration in the CSV file. The file must contain the fields defined in [Registration of unsecured device](#registration-of-unsecured-device). PSK registration requires additional fields to be filled (see the example CSV file for a PSK-secured device below).  

![PSK device csv](/images/device-protocols/lwm2m/lwm2m-psk-device-csv-example.png)

The table below lists the information of the additional fields:

<table>
<col style="width:25%">
<col style="width:10%">
<col style="width:50%">
<col style="width:15%">
<thead>
<tr>
<th style="text-align: left">Field</th>
<th style="text-align: left">Type</th>
<th style="text-align: left">Description</th>
<th style="text-align: left">Mandatory</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left">lwm2m psk_key</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The hex-encoded pre-shared key used by the device for server connections in PSK mode.</td>
<td style="text-align: left; height: 26px;">Mandatory for PSK. Should not be set for NO_SEC.</td>
</tr>
<tr>
<td style="text-align: left">lwm2m psk_id</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The ID used by the device for server connections in PSK mode.</td>
<td style="text-align: left">Mandatory for PSK. Should not be set for NO_SEC.</td>
</tr>
<tr>
<td style="text-align: left">bootstrap psk_id</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The ID used by the device for bootstrap connections in PSK mode.</td>
<td style="text-align: left">Yes for PSK</td>
</tr>
<tr>
<td style="text-align: left">bootstrap psk_key</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The hex-encoded key used by the device for bootstrap connections in PSK mode.</td>
<td style="text-align: left">Yes for PSK</td>
</tr>
<tr>
<td style="text-align: left">external-c8y_Lwm2mPskId</td>
<td style="text-align: left">String</td>
<td style="text-align: left">This field has the same value as the "lwm2m psk_id" field. The ID is used to create an additional external ID of type "c8y_Lwm2mPskId" in the registered device. </td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">external-c8y_BootstrapPskId</td>
<td style="text-align: left">String</td>
<td style="text-align: left">This field has the same value as the "bootstrap psk_id" field. This mandatory ID is used to create an additional external ID of type "c8y_BootstrapPskId" in the registered device which will be used to find the device during bootstrap. </td>
<td style="text-align: left">Mandatory</td>
</tr>
</tbody>
</table>

Upon upload of the CSV file in {{< product-c8y-iot >}} we should see that our "psk_device" device has been created with the appropriate external IDs.

![PSK device created](/images/device-protocols/lwm2m/lwm2m-psk-device-created.png)
![PSK device external ids](/images/device-protocols/lwm2m/lwm2m-psk-device-created-external-ids.png)


{{< c8y-admon-info >}}
Firmware updates are also supported for registration of unsecured devices as well as PSK-secured devices. For more information, see [Device Management > Managing device data > Managing device firmware](/users-guide/device-management/#managing-device-firmware) in the *User guide*.
{{< /c8y-admon-info >}}

The following table explains several optional parameters related to firmware update which help in tuning the Firmware Over The Air (FOTA) parameters on a device level.
<table>
<col style="width:30%">
<col style="width:10%">
<col style="width:60%">
<thead>
<tr>
<th style="text-align: left">Field</th>
<th style="text-align: left">Type</th>
<th style="text-align: left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align: left">fwUpdateDeliveryMethod</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Explains the firmware update delivery method.
Can be either "PUSH" or "PULL" or "BOTH".</td>
</tr>
<tr>
<td style="text-align: left">fwUpdateSupportedDeviceProtocol</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the device protocol to be used for the firmware update. Can be either "COAP" or "COAPS" or "HTTP" or "HTTPS".</td>
</tr>
<tr>
<td style="text-align: left">fwUpdateResetMechanism</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the mechanism used to reset the firmware update state machine.
Can be either "PACKAGE" or "PACKAGE_URI". And as per the given option, the LWM2M agent either writes an empty string to package URI resource or sets the package resource to NULL ('\0'). If this field is not used the default reset state machine mechanism is used in which for PUSH reset is done via package resource and for PULL reset is done via package URI.</td>
</tr>
<tr>
<td style="text-align: left">fwUpdateURL</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the firmware update URL from where the LWM2M device can download the firmware package.</td>
</tr>
</tbody>
</table>

After creation, the bootstrap parameters can be viewed and changed in the **LWM2M bootstrap parameters** tab in the **Device details** page, see [LWM2M bootstrap parameters](#lwm2m-bootstrap).

<a name="duplicate-registeration-alarm"></a>
### Duplicate LWM2M devices

If a LWM2M device is registered with the same endpoint ID in multiple tenants, the device will be binded only to the tenant in which the device was first registered and the devices in the other tenants will be considered as duplicates. As notification, a MAJOR alarm is created stating that the device with this endpoint already exists.

![Alarm for duplicated device with endpoint](/images/device-protocols/lwm2m/lwm2m-alarm-for-duplicated-device-with-endpoint.png)
