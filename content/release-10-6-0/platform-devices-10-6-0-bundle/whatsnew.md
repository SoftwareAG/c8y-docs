---
weight: 5
title: What´s new
layout: bundle
---

### Administration

[MTM-29160] It is now possible to configure sms77 as SMS provider in **Settings** > **Customization** in the  Administration application.  

For details, see [Administration > Changing settings](https://cumulocity.com/guides/10.6.0/users-guide/administration#changing-settings) in the *User guide*.

![SMS provider settings](/images/release-notes/sms-provider-sms77.png)


### Enterprise Tenant

[MTM-29923] A cookie banner has been added to the Cumulocity IoT platform. The login page will now contain information about cookies and their purpose.

The cookie banner can be configured via the application options or via UI from the Branding page in the Administration application.

For details, see [Enterprise Tenant > Customizing your platform](https://cumulocity.com/guides/10.6.0/users-guide/enterprise-edition/#customization) in the *User guide*.


### Cockpit

[MTM-29400] To improve transparency, the display of the timestamp in data point graphs or tables when aggregation is activated has been modified:

* If daily aggregation is selected, the time indication will no longer be shown.
* If hourly aggregation is selected, the minute and second indication will no longer be shown.
* If minutely aggregation is selected, the second indication will no longer be shown.

For details, see [Cockpit > Data explorer](https://cumulocity.com/guides/10.6.0/users-guide/cockpit#data-explorer) in the *User guide*.


### OPC UA

The following improvements have been implemented in the OPC UA gateway since 10.5.7.

For details, see [Optional services > OPC UA](https://cumulocity.com/guides/10.6.0/users-guide/optional-services/#opc-ua) in the *User guide*.  

#### Extended subscription parameters

[MTM-29065] The subscription parameters have been extended by:

* "queueSize" - number, queueSize > 0, no max value
* "dataChangeTrigger" - string, radio-button with possible values: Status, StatusValue, StatusValueTimestamp
* "discardOldest" - boolean, radio-buttons with possible labels: Discard oldest, Discard newest - where discard newest will just turn discard oldest into false. Discard oldest is the default.

#### Easier analysis of issues during the auto-apply procedure

[MTM-29837] The following improvements have been added:

* "c8y&#95;ua&#95;DeviceTypeApplied" event is triggered when a device type is applied to a node server.<br>
* "c8y&#95;ua&#95;DeviceTypeUnapplied" event is triggered when a device type is removed from a node server.<br>
* "c8y&#95;ua_command&#95;GetDeviceTypeApplicationState" operation has been added to query the state of device type applications on servers.<br>
* "c8y&#95;ua_command&#95;TestDeviceTypeMatching" operation has been added to tell if a node (root node) matches and will be applied to a device type or not.

#### Notification buffer size configuration

[MTM-30338] Notification buffer size is configured in OPC UA client which defines how many monitored item values should be buffered to receive subscription notification data from OPC UA server. Default is 100. Setting this too low could cause buffer overflow error on the client. Setting this too high wastes memory of the client. In order to decide what is a good number, following configurations should be taken into account:

* Subscription reporting rate (aka publish interval)
* Sampling rate of monitored items

Basically, the more data you got in one notification package from the server, the higher number should be set.

#### Performance improvements

* [MTM-29868] Performance has been improved when using read/write operations.
* [MTM-30343] Enhanced performance for measurements when there is a lot of data.
