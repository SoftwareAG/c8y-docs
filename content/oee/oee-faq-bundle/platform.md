---
weight: 80
title: Cumulocity IoT
layout: redirect
---

### Can the calculated OEE values be used in a {{< product-c8y-iot >}} widget?

The values calculated by the OEE application cannot be used in {{< product-c8y-iot >}} Cockpit Widgets. The values are stored in the Child Addition object. This  which has the following advantages:

This has the advantage that if the parent machine is forwarded using a data broker, the OEE profiles are not forwarded.

* If the parent machine is forwarded using a data broker, the OEE profiles are not forwarded as well.

However, if the OEE values must be displayed in a {{< product-c8y-iot >}} Cockpit Widget. There are several ways to do this:

* On request the profile can be changed from a Child Addition to a Child Device. This allows the direct integration into a {{< product-c8y-iot >}} Cockpit Widget. However, this change comes with costs.
* The OEE data is queried via REST. You will have to build this query yourself.

### Can I use umlauts to name measurements?

When naming a measurement, make sure not to use umlauts in the measurement name.

### Where can I find the device and profile ID?

![Device and profile ID](/images/oee/faq/faq-device-id.png)

###  Why does an Measurement/Event/Alarm in {{< product-c8y-iot >}} have multiple timestamps?

The first timestamp describes the creation time. It is the time when the specific Measurement/Event/Alarm (MEA) has been created for the first time.

The second timestamp describes the actual occurrence of the OEE calculation. This timestamp is used for the OEE calculation and should be considered when working with MEAs in {{< product-c8y-iot >}}.

### How do I address measurements and events correctly?

Property names used for fragments as well as series names must not contain a leading dollar (“$”) sign and should not contain the following characters: “.”, “,”, “(“, “)”, “[“,”]”,”@”,”*”,” ” (Whitespace). This is required to ensure a correct processing and visualization of measurement series on graphs.

Umlauts are not permitted when naming measured values.

For more details on how to correctly set up property names and series names see [Inventory > Inventory API](https://{{<domain-c8y>}}/api/#tag/Inventory-API) in the {{< openapi >}}.

### Where do I find the calculated OEE measurements of a profile in {{< product-c8y-iot >}}?

1. Go to the mother machine in the {{< product-c8y-iot >}} Device Management and navigate to Measurements, see "HANNAH Machine" in the graphic below.
2. Manually replace the device ID by the profile ID and press enter. You are redirected to the mother machine.
3. Manually replace the device ID by the profile ID and press enter. You are then redirected to the correct page.

![Calculated OEE measurements in a profile in {{< product-c8y-iot >}}](/images/oee/faq/faq-calculated-oee-measurement.png)
