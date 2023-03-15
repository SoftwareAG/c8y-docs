---
weight: 40
title: "Step 3: Checking if the device supports c8y_Geofence"
layout: redirect
---

With the device available we will now check if there is a geofence configured for the device and if it is activated (contains "c8y_Geofence" in `supportedOperations`). To check the `c8y_SupportedOperations` array, we can use the `indexOf()` function. This function will loop through all elements and return the index of that entry, or a negative number if the value is not present. For the configuration, we will just check if the device contains the fragment "c8y_Geofence".

Once we have an event and a device, we extract the data from the event's `c8y_Position` and the device's `c8y_Geofence`. These objects are mapped to `dictionary<any, any>` entries in the `params`. As the `params` hold values of type `any`, we must cast to a `dictionary<any, any>`.

```java
if(dev.params.hasKey("c8y_Geofence") and dev.supportedOperations.indexOf("c8y_Geofence") >= 0) {
	dictionary<any, any> evtPos := <dictionary<any, any> > e.params["c8y_Position"];
	float eventLat := <float> evtPos["lat"];
	float eventLng := <float> evtPos["lng"];

	dictionary<any,any> devGeofence := <dictionary<any,any> > dev.params["c8y_Geofence"];
	float centerLat := <float> devGeofence["lat"];
	float centerLng := <float> devGeofence["lng"];
	float maxDistance := <float> devGeofence["radius"];
}
```