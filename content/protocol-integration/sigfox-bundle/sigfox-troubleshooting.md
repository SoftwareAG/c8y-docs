---
weight: 80
title: Troubleshooting
layout: redirect
---


### No active contracts with free slots available

![No active contracts with free slots available error](/images/device-protocols/sigfox/sigfox-troubleshooting-nocontracts.png)

Active contracts with free slots are filtered based on the activation end time and tokens in use. Contracts in which the activation end time is higher than the current time or the activation end time is unlimited, and contracts in which the max tokens are higher than the tokens in use or the max tokens are unlimited will be considered.

In order to resolve this error, please contact support.sigfox.com to create a contract for your Sigfox account.

### Sigfox callbacks in backend.sigfox.com are not created correctly

![Callback information](/images/device-protocols/sigfox/sigfox-troubleshooting-callbacks.png)

The information for the callback setup is retrieved by a microservice.

To verify whether your setup is correct, execute the following REST API request:

	```http
	GET {{url}}/tenant/currentTenant
	```

{{< c8y-admon-info >}}
The request above is simply an example API request that could be used. For more info on REST API requests, refer to the [Tenants](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Tenants) in the {{< openapi >}}.
{{< /c8y-admon-info >}}

#### No Sigfox provider settings are found

This warning message shows up when there are no credentials set up for the Sigfox account.

<img src="/images/device-protocols/sigfox/sigfox-troubleshooting-registration.png" alt="Device registration failure without credentials" style="max-width: 100%">
<br>

To resolve this, refer to [Configure Sigfox credentials](#connectivity-sigfox).

#### No device protocols configured

This warning message shows up when no Sigfox device protocol exists to be used for device registration.

<img src="/images/device-protocols/sigfox/sigfox-troubleshooting-device-type-error.png" alt="No device protocol given for Sigfox" style="max-width: 100%">

To resolve this, configure at least one device protocol in the [Device database](/users-guide/device-management/#managing-device-types).


### Issues with alarm provisioning

![!Failed operation](/images/device-protocols/sigfox/sigfox-troubleshooting-failedoperation.png)

If the "transfer operation failed" alarm is triggered, the device is already provisioned in the Sigfox platform and changing the device type in the Sigfox platform failed. In order to fix this issue, you must manually change the device type in the Sigfox platform to the intended one.

### Provisioned status is set to false

![!False provision](/images/device-protocols/sigfox/sigfox-troubleshooting-falseprovision.png)

In case of this alarm, you can see that the **Provisioned** status is set to "false" which means that no data is coming from the Sigfox platform. In the alarm message there is more information regarding the error. In this case the PAC code given during registration was invalid.

{{< c8y-admon-info >}}
If the provisioning process has been completed, but has failed, information is returned as an alarm with the reason of the failure provided.
{{< /c8y-admon-info >}}

The **Provisioned** status is set to true when the device provisioning process is completed and success information is received from the Sigfox platform. Additionally, it is set to true when uplink messages are retrieved from the device.

{{< c8y-admon-info >}}
The status is updated asynchronously which means that sometimes you might have to wait a bit until it is set to true.
{{< /c8y-admon-info >}}

### Callback creation failed

![Callback creation failed](/images/device-protocols/sigfox/sigfox-troubleshooting-callback.png)

This alarm is created when one or more callback creation requests have failed in the Sigfox platform. You can view the alarm either in the **Alarms** page or in the **Home** page.

In order to fix this issue, navigate to the Sigfox platform web interface and check the device type with the id mentioned in the alarm.

![Device Type Id in the alarm](/images/device-protocols/sigfox/sigfox-troubleshooting-callback-typeid.png)

In this case navigate to the following address: *https://backend.sigfox.com/devicetype/5cd3d97ee833d9746698b27d/callbacks*

If the mentioned callbacks cannot be located in the Sigfox platform, you must create them manually. All of the required information needed for the creation of the callbacks is already given in the alarm description. In the case of the above alarm, the following callback is listed first:

 - [[callback=[type=DATA_BIDIR, url=<<tenant_url>>/service/sigfox-agent/sigfoxDataCallback, httpMethod=POST, bodyTemplate={"device":"{device}","time":"{time}","snr":"{snr}","station":"{station}","data":"{data}","rssi":"{rssi}","seqNumber":"{seqNumber}","ack":"{ack}"}, contentType=application/json, headers={Authorization=Basic ...}]]

In order to manually create the callback, the following properties must be filled:

 - type
 - url
 - httpMethod
 - bodyTemplate
 - contentType
 - headers

{{< c8y-admon-info >}}
The Authorization header displayed in the alarm does not show the user credentials.
{{< /c8y-admon-info >}}

Non-mentioned properties from the alarm are:

 - sendSni
 - sendDuplicate

These properties will be set to false.
