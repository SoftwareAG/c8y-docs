---
weight: 80
title: Cumulocity IoT
layout: redirect
---

### Can the calculated OEE values be used in a Cumulocity widget?

Basically, the values calculated by the OEE app cannot be used in Cumolocity Cockpit Widgets. The values are stored in the Child Addition object, which has the following advantages:
* If the parent machine is forwarded using a data broker, the OEE profiles are not forwarded as well.

However, if the OEE values must be displayed in a Cumulocity Cockpit Widget, there are several ways to do this:
* On request we change the profile from a Child Addition to a Child Device, so that the direct integration into a Cumulocity Cockpit Widget is possible, but this comes with costs.
* The OEE data is queried via REST. (You will have to build this query yourself).


### Can umlauts be used for naming measurements?

Please make sure that there are no umlauts in the measurement names.

### Where can I find the device and profile ID?

![Device and profile ID](/images/oee/faq/faq-device-id.png)

###  Why do MEAs in C8Y have multiple timestamps?

The first timestamp describes the creation time. It is the time when the specific Measurement/Event/Alarm (MEA) has been created for the first time.

The second timestamps describes the actual occurrence of the OEE calculation. These are the timestamps used for the OEE calculation and should be considered when working with MEAs in C8Y.

### How to address measurements and events correctly?

Property names used for fragment and series names must not contain a leading dollar (“$”) sign and should not contain the following characters: “.”, “,”, “(“, “)”, “[“,”]”,”@”,”*”,” ” (Whitespace). This is required to ensure a correct processing and visualization of measurement series on graphs.

Umlauts are not permitted when naming measured values.

[Read more](https://{{<domain-c8y>}}/api/#tag/Inventory-API)

### Where do I find the calculated OEE measurements of a profile in Cumulocity?

1. Go to the mother machine (in this case "HANNAH Machine") in the cumulocity devicemanagement and navigate to measurements
2. Manually replace the device id by the profile id -> press enter (you will get redirected to the mother machine)
3. Manually replace the device id by the profile id, again -> press enter (this time you will get redirected to the correct page)

![Read more](/images/oee/faq/faq-calculated-oee-measurement.png)
