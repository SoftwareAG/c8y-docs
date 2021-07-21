---
title: Getting Started
layout: redirect
weight: 30

aliases:
  - /predictive-analytics/demand-forecasting/#getting-started
---

We have added a *CONFIG.json* file to the attached ZIP file. This file is meant for capturing the tenant details and credentials which will be used by the demo scripts.

First of all, update the *CONFIG.json* with the appropriate values and save it. Replace `c_url` with your tenant URL, `c_user` with your tenant username and `c_pass` with your tenant password. Leave the `c_device_source` as is for now.

	CONFIG.json
	c_url=https://yourtenant.{{< domain-c8y >}}
	c_user=user@company.com
	c_pass=password
	c_device_source=deviceID
