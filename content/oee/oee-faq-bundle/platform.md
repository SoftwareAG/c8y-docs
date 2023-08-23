---
weight: 80
title: Cumulocity IoT
layout: redirect
---

### Can the calculated OEE values be used in a Cockpit widget? {#can-the-calculated-oee-values-be-used-in-a-cockpit-widget}

* Calculated OEE values are stored as measurements linked to the managed object of the OEE calculation profile.
* Profiles are child devices of the machine for which they calculate the OEE.
* Calculated OEE values can be used in any Cockpit widget like the regular machine measurements by selecting the OEE calculation profile as the source device,  and then selecting the OEE measurement to be displayed, for example the final OEE or one of its components like Availability.

### Can I use umlauts in measurement names? {#can-i-use-umlauts-in-measurement-names}

When naming a measurement, make sure not to use umlauts in the measurement name.

### Where can I find the device and profile ID? {#where-can-i-find-the-device-and-profile-id}

You can find the device ID and profile ID at the end of the URL shown in your browser when accessing the Machine Dashboard. The device ID comprises of the first seven numbers at the end of the URL. The remaining nine numbers are the profile ID.

The example below shows an exemplary URL with the placement of both device ID and profile ID.

`https://<<tenant>>/apps/oee/index.html#/machine_dashboard/<<device ID>>/<<profile ID>>
`
###  Why does a measurement/event/alarm in the OEE application have multiple timestamps? {#-why-does-a-measurementeventalarm-in-the-oee-application-have-multiple-timestamps}

The first timestamp describes the creation time. It is the time when the specific measurement/event/alarm has been created for the first time.

The second timestamp describes the actual occurrence of the OEE calculation. This timestamp is used for the OEE calculation and should be considered when working with measurements/events/alarms in {{< product-c8y-iot >}}.

### How do I address measurements and events correctly? {#how-do-i-address-measurements-and-events-correctly}

Property names used for fragments as well as series names must not contain a leading dollar (“$”) sign and should not contain the following characters: “.”, “,”, “(“, “)”, “[“,”]”,”@”,”*”,” ” (whitespace). This is required to ensure a correct processing and visualization of measurement series on graphs.

Umlauts are not permitted when naming measured values.

For more details on how to correctly set up property names and series names see [Inventory > Inventory API](https://{{<domain-c8y>}}/api/{{< c8y-current-version >}}/#tag/Inventory-API) in the {{< openapi >}}.

### Where do I find the calculated OEE measurements of a profile in the platform? {#where-do-i-find-the-calculated-oee-measurements-of-a-profile-in-the-platform}

1. Go to the parent machine in the Device management application and open the child devices of the machine.
2. The profile is a child device of the machine. You can identify it via the profile name. If the profile name is "XYZ" for example, then the child device will be called "XYZ[OEE calculation profile]".
3. Navigate to the **Measurements tab** of the child device. You should see the OEE measurements.

Alternatively, you can also use the built-in search in the Device management application to search for the name of the profile.
