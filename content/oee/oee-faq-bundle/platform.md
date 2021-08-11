---
weight: 80
title: Cumulocity IoT
layout: redirect
---

### Can the calculated OEE values be used in a Cockpit widget?

The values calculated by the OEE application cannot be used in {{< product-c8y-iot >}} Cockpit widgets. The values are stored in the child addition object. This has the following advantages:

* If the parent machine is forwarded using the data broker, the OEE profiles are not forwarded.

* If the parent machine is forwarded using a data broker, the OEE profiles are not forwarded as well.

However, if the OEE values must be displayed in a {{< product-c8y-iot >}} Cockpit widget, there are several ways to do this:

* On request the profile can be changed from a child addition to a child device. This allows the direct integration into a {{< product-c8y-iot >}} Cockpit widget. However, this change comes with costs.
* The OEE data is queried via REST. You will have to build this query yourself.

### Can I use umlauts in measurement names?

When naming a measurement, make sure not to use umlauts in the measurement name.

### Where can I find the device and profile ID?

![Device and profile ID](/images/oee/faq/faq-device-id.png)

###  Why does a measurement/event/alarm in the OEE application have multiple timestamps?

The first timestamp describes the creation time. It is the time when the specific measurement/event/alarm has been created for the first time.

The second timestamp describes the actual occurrence of the OEE calculation. This timestamp is used for the OEE calculation and should be considered when working with measurements/events/alarms in {{< product-c8y-iot >}}.

### How do I address measurements and events correctly?

Property names used for fragments as well as series names must not contain a leading dollar (“$”) sign and should not contain the following characters: “.”, “,”, “(“, “)”, “[“,”]”,”@”,”*”,” ” (whitespace). This is required to ensure a correct processing and visualization of measurement series on graphs.

Umlauts are not permitted when naming measured values.

For more details on how to correctly set up property names and series names see [Inventory > Inventory API](https://{{<domain-c8y>}}/api/#tag/Inventory-API) in the {{< openapi >}}.

### Where do I find the calculated OEE measurements of a profile in the platform?

1. Go to the parent machine in the {{< product-c8y-iot >}} Device Management application and navigate to the **Measurements** tab, see "HANNAH Machine" in the screenshot below.
2. Manually replace the device ID by the profile ID and press enter. You are redirected to the mother machine.
3. Manually replace the device ID by the profile ID and press enter. You are then redirected to the correct page.

![Calculated OEE measurements in a profile in {{< product-c8y-iot >}}](/images/oee/faq/faq-calculated-oee-measurement.png)
