---
weight: 60
title: "Step 5: Creating the alarm"
layout: redirect
---

To create the alarm, we now need two events where the first one has a distance smaller than the radius and the second one has a distance bigger than the radius. This would mean that the device just left the geofence.

```java
if firstPos.distance <= firstPos.maxDistance and
	secondPos.distance > secondPos.maxDistance {
	send Alarm("", "c8y_GeofenceAlarm", firstPos.source, currentTime,
					"Device moved out of circular geofence", "ACTIVE",
					"MAJOR", 1, new dictionary<string,any>) to Alarm.SEND_CHANNEL;
}
```

