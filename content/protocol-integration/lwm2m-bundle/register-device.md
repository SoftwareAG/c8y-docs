---
weight: 20
title: Registering LWM2M devices
layout: redirect
---

How long a device stays online is determined by its registration awake time attribute "at".
If this attribute is missing during the device registration, the LWM2M agent will consider the default configured value
to determine how long the device will stay online.
To connect LWM2M devices, you need to upload a CSV file with registration data. This data is required to enable LWM2M communication. The CSV holds all information for factory bootstrap and client-initiated bootstrap. In the factory bootstrap mode, the LWM2M client has been configured with the necessary bootstrap information prior to the deployment of the device. The client initiated bootstrap mode requires a LWM2M bootstrap-server account pre-loaded in the LWM2M client. Below, you can see two CSV examples:

![CSV example 1](/images/device-protocols/lwm2m/lwm2m-csv1.png)

In the first CSV example you can see the following fields:

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
<td style="text-align:left">Unique ID of the device. For example, the ID could be an IMEI, serial number, etc.</td>
</tr>
<tr>
<td style="text-align:left">IDTYPE</td>
<td style="text-align:left">The type of the device.</td>
</tr>
<tr>
<td style="text-align:left">CREDENTIALS</td>
<td style="text-align:left">The content of this field is not used by the LWM2M feature. However, this field is still mandatory. For LWM2M-only devices, it is okay to use "dummy" credentials here. </td>
</tr>
<tr>
<td style="text-align:left">NAME</td>
<td style="text-align:left">The name of the device. In this case the name of the device is the same as the device ID.</td>
</tr>
<tr>
<td style="text-align:left">TYPE</td>
<td style="text-align:left">This field needs to have the value "c8y_lwm2m”.</td>
</tr>
<tr>
<td style="text-align:left">SHELL</td>
<td style="text-align:left">To enable “Shell”, the value of this field must be “1”. If you want to disable “Shell” the value must be “0”. For more info about the shell commands, see <a href="#shell-commands" class="no-ajaxy">Shell commands</a>.</td>
</tr>
<tr>
<td style="text-align:left">c8y_GenericUi</td>
<td style="text-align:left">In order to enable the <b>Objects</b> tab for LWM2M devices, the value of this field has to be set to "{}".</td>
</tr>
<tr>
<td style="text-align:left">com_cumulocity_model_Agent</td>
<td style="text-align:left">This field needs to have the value "1".</td>
</tr>
<tr>
<td style="text-align:left">endpoint id</td>
<td style="text-align:left">Indicates the LWM2M client’s “Endpoint ID” in order to allow the LwM2M bootstrap to provision the bootstrap information for the LWM2M client.</td>
</tr>
<tr>
<td style="text-align:left">lwm2m server url</td>
<td style="text-align:left">The URL the server is using for bootstrap. The LWM2M bootstrap server is used to provision the LWM2M client with the information required to contact the LWM2M servers. If you are using the Cumulocity IoT service the hostname of the LWM2M server is "lwm2m.cumulocity.com". The bootstrap server port is "5683" and the LWM2M port is "5783". Note, that these values can be different for other services.</td>
</tr>
<tr>
<td style="text-align:left">securityMode</td>
<td style="text-align:left">In this example the value of the security mode is “NO_SEC” which means that there is no security. It is highly recommended to always protect the LWM2M protocol. However, there are scenarios in which the LWM2M protocol is deployed in environments where the lower layer security mechanisms are provided. Currently Cumulocity IoT supports only “NO_SEC” and “PSK”. With “PSK”, the client and server have a common secret symmetric cryptography. In the next example you will see how the CSV file should look when the security mode value is “NO_SEC”.</td>
</tr>
</tbody>
</table>

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
<td style="text-align: left">The name of the LWM2M client endpoint.</td>
<td style="text-align: left">Yes</td>
</tr>
<tr>
<td style="text-align: left">lwm2m server url</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The URL of the LWM2M server to be sent to the devices during bootstrap. If you are using the Cumulocity IoT service the hostname of the LWM2M server is "lwm2m.cumulocity.com". The bootstrap server port is "5683" and the LWM2M port is "5783". Note, that these values can be different for other services.</td>
<td style="text-align: left">Yes, for LWM2M bootstrap</td>
</tr>
<tr>
<td style="text-align: left">securityMode</td>
<td style="text-align: left">String, &ldquo;NO_SEC&rdquo; or &ldquo;PSK</td>
<td style="text-align: left; height: 40px;">The LWM2M security mode to be used. Possible values are PSK and NO_SEC.</td>
<td style="text-align: left">Yes</td>
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
<td style="text-align: left">Toggles if Cumulocity IoT generates a server config for the LWM2M bootstrap server and writes that back during bootstrap. Default is false.</td>
<td style="text-align: left">Optional</td>
</tr>
<tr>
<td style="text-align: left">securityInstanceOffset</td>
<td style="text-align: left">Integer</td>
<td style="text-align: left">The first instance to be used during bootstrap to which entries are written. Default is "0". If set e.g. to "3", the first instance will be three.</td>
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
<td style="text-align: left">The registration lifetime that is sent to the device during bootstrap. Overrides global agent configuration.</td>
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
<td style="text-align: left">The LWM2M binding mode to be reported to the device. Supported are &ldquo;UQ&rdquo; (default, queuing) and &ldquo;U&rdquo; (unqueued). Note, that Cumulocity IoT will always queue operations.</td>
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
<td style="text-align: left">The timeout used for the shell operation requests such as read, write, execute, etc. done by the LWM2M microservice to the LWM2M device.
The value is in miliseconds and can be given to override the default value that is provided in the LWM2M microservice property file with &ldquo;C8Y.lwm2mRequestTimeout&rdquo; property and by default &ldquo;C8Y.lwm2mRequestTimeout&rdquo; is set to &ldquo;180000&rdquo; (3 minutes).
The value should not exceed the maximum request timeout limit given with the LWM2M microservice property file with &ldquo;C8Y.lwm2mMaxRequestTimeout&rdquo; property which is by default &ldquo;600000&rdquo; (10 minutes).
<td style="text-align: left">Optional</td>
</tr>
</tbody>
</table>

![CSV example 2.1](/images/device-protocols/lwm2m/lwm2m-psk-example.png)

In this CSV example, the security mode value is “PSK”. With "PSK" enabled, additional mandatory fields must be filled. All fields, available to "PSK", can be observed in the table below:

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
<td style="text-align: left">For security mode PSK: The key used by the device for LWM2M in PSK mode. Will be delivered to the device during bootstrap.</td>
<td style="text-align: left; height: 26px;">Mandatory for PSK. Should not be set for NO_SEC.</td>
</tr>
<tr>
<td style="text-align: left">lwm2m psk_id</td>
<td style="text-align: left">String</td>
<td style="text-align: left">For security mode PSK: The ID used by the device for LWM2M in PSK mode. Will be delivered to the device during bootstrap. Mostly the same as the endpoint name.</td>
<td style="text-align: left">Mandatory for PSK. Should not be set for NO_SEC.</td>
</tr>
<tr>
<td style="text-align: left">bootstrap psk_id</td>
<td style="text-align: left">String</td>
<td style="text-align: left">For security mode PSK: The ID used by the device for bootstrapping in PSK mode.</td>
<td style="text-align: left">Yes for PSK</td>
</tr>
<tr>
<td style="text-align: left">bootstrap psk_key</td>
<td style="text-align: left">String</td>
<td style="text-align: left">For security mode PSK: The key used by the device for bootstrapping in PSK mode.</td>
<td style="text-align: left">Yes for PSK</td>
</tr>
<tr>
<td style="text-align: left">external-c8y_BootstrapPskId</td>
<td style="text-align: left">String</td>
<td style="text-align: left">The ID being used to find a device during bootstrap.</td>
<td style="text-align: left">Optional</td>
</tr>
</tbody>
</table>

> **Info**: Firmware updates are also supported. For more information, see [Device Management > Managing device data](/users-guide/device-management/#software-repo) in the User guide.

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
Can be either "PACKAGE" or "PACKAGE_URI". And as per the given option, the LWM2M agent either writes an empty string to package URI resource or sets the package resource to NULL (‘\0’)</td>
</tr>
<tr>
<td style="text-align: left">fwUpdateURL</td>
<td style="text-align: left">String</td>
<td style="text-align: left">Indicates the firmware update URL from where the LWM2M device can download the firmware package.</td>
</tr>
</tbody>
</table>

After creation, the bootstrap parameters can be viewed and changed in the **LWM2M bootstrap parameters** tab in the **Device details** page, see [LWM2M bootstrap parameters](#lwm2m-bootstrap).

### <a name="duplicate-registeration-alarm"></a>Duplicate LWM2M devices

If a LWM2M device is registered with the same endpoint ID in multiple tenants, the device will be binded only to the tenant in which the device was first registered and the devices in the other tenants will be considered as duplicates. As notification, a MAJOR alarm is created stating that the device with this endpoint already exists.

![Alarm for duplicated device with endpoint](/images/device-protocols/lwm2m/lwm2m-alarm-for-duplicated-device-with-endpoint.png)
