---
order: 60
title: Step 5: Creating the alarm
layout: redirect
---

To create the alarm, we now need two events where the first one has a distance smaller than the radius and the second one has a distance bigger than the radius. This would mean that the device just left the geofence.

	if firstPos.distance <= firstPos.maxDistance and
					   secondPos.distance > secondPos.maxDistance {
						send Event("Alarm", firstPos.assetId, currentTime,
						           "Device moved out of circular geofence",
						           {"status":&#60;any>"ACTIVE", "severity":"MAJOR", "type":"c8y_GeofenceAlarm"}) to Event.CHANNEL;
				}
