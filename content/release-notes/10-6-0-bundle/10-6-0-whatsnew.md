---
weight: 10
title: What´s new
layout: redirect
---

### Administration

It is now possible to configure sms77 as SMS provider in **Settings** > **Customization** in the  Administration application.  [MTM-29160]

For details, see [Administration > Changing settings](/users-guide/administration#changing-settings) in the User guide.

![SMS provider settings](/images/release-notes/sms-provider-sms77.png) 


### Enterprise Tenant

A cookie banner has been added to the Cumulocity IoT platform. The login page will now contain information about cookies and their purpose.

The cookie banner can be configured via the application options or via UI from the Branding page in the Administration application. [MTM-29923]

For details, see [Enterprise Tenant > Customization](/users-guide/enterprise-edition#customization) in the User guide.


### Cockpit

To improve transparency, the display of the timestamp in data point graphs or tables when aggregation is activated has been modified: [MTM-29400]

* If daily aggregation is selected, the time indication will no longer be shown.
* If hourly aggregation is selected, the minute and second indication will no longer be shown.
* If minutely aggregation is selected, the second indication will no longer be shown.

For details, see [Cockpit > Data explorer](/users-guide/cockpit#data-explorer) in the User guide.
 

### OPC UA

The subscription parameters have been extended by: 

* "queueSize" - number, queueSize > 0, no max value
* "dataChangeTrigger" - string, radio-button with possible values: Status, StatusValue, StatusValueTimestamp
* "discardOldest" - boolean, radio-buttons with possible labels: Discard oldest, Discard newest - where discard newest will just turn discard oldest into false. Discard oldest is the default.

For details, see [Optional services > OPC UA](/users-guide/optional-services#opc-ua) in the User guide.  