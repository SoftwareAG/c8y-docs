---
title: Getting started
layout: redirect
weight: 30

aliases:
  - /predictive-analytics/remaining-useful-life/#getting-started
---
A new *CONFIG.json* file is now attached to the ZIP file. This file is meant for capturing the tenant details and credentials which will be used by the demo scripts.

Execute the following steps:

Update the *CONFIG.json* with the appropriate values and save it. Replace `c_url` with your tenant URL, `c_user` with your tenant username and `c_pass` with your tenant password. Leave the `c_device_source` and `c_device_pred`.

	CONFIG.json
	{
		c_url:https://yourtenant.{{< domain-c8y >}}
		c_user:user@company.com
		c_pass:password
		c_device_source:deviceID
		c_device_pred:deviceID
	}
