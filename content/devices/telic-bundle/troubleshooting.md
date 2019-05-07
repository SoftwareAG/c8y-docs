---
title: Troubleshooting tracking devices
layout: redirect
weight: 40
---
Here are some general hints in case your tracking device does not connect to Cumulocity or shows incorrect data:

* Make sure that the LED indicators on the device indicate both a working GPS and a working network connection.
* Devices can only be registered after they start sending data to Cumulocity.
* Devices may send the location of the last GPS fix if there is no GPS reception.
* The **Location** and **Tracking** tabs are only shown in the Cumulocity application when the first GPS coordinate has been received.
* The agent currently supports the 100μ° and the 1μ°resolution data format.

## Getting additional functionality

If you need support for particular features of the tracker models, send an email to [info@cumulocity.com](mailto:info@cumulocity.com).
