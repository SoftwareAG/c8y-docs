---
weight: 15
title: Measurement fragments
layout: redirect
---

A measurement can be broken into individual measurement fragments. This can be done for each fragment and series present in the measurement. 
See [{{< product-c8y-iot >}}'s domain model](/concepts/domain-model/) in the *Concepts guide* for more information on measurement fragments.

Listen for events of type `com.apama.cumulocity.MeasurementFragment` when you require filtering based on measurement fragments or series, 
instead of listening for `com.apama.cumulocity.Measurement` events and looking inside the `measurements` dictionary. 
For more information, see [Using measurement fragments]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_using_measurement_fragments.html) in the Apama documentation. 
