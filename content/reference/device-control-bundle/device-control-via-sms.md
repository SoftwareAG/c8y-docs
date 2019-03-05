---
weight: 40
title: Device control via SMS
layout: redirect
---

In order to send operations via SMS, either the device managed object should contain the fragment:

		"c8y_CommunicationMode": {
    		"mode": "SMS"
		}

or the operation should contain the property:

		"deliveryType": "SMS"