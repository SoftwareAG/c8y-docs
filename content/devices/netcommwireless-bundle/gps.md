---
title: Using GPS
layout: redirect
weight: 50
---

To locate or trace the router, connect a GPS antenna to the router and enable its GPS functionality. Then [configure](#configure) the frequency of data collection by setting the "GPS position interval" and/or the "GPS position event" to a non-zero value. "GPS position interval" defines how often the current location of the router is updated. "GPS position event" defines how often the current location is stored as location update event for tracing. Similarly, you can set these parameters from Device Shell:

	set service.cumulocity.gps.update_interval=<update interval>
	set service.cumulocity.gps.interval=<event interval>

After you applied the configuration changes, wait a moment for the first GPS data to arrive, then refresh the page. A "Location" and a "Tracking" tab should now appear. See the "[Location](/users-guide/device-management#location)" and "[Tracking](/users-guide/device-management#tracking)" sections in the user guide for more information.