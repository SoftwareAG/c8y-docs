---
weight: 80
title: Putting everything together
layout: redirect
---

We can now combine all the parts into one module. The order of the listeners does not matter.

```java
using com.apama.cumulocity.ManagedObject;
using com.apama.cumulocity.Measurement;
using com.apama.cumulocity.Event;
using com.apama.cumulocity.Alarm;
using com.apama.cumulocity.FindManagedObject;
using com.apama.cumulocity.FindManagedObjectResponse;
using com.apama.cumulocity.FindManagedObjectResponseAck;
using com.apama.cumulocity.FindAlarm;
using com.apama.cumulocity.FindAlarmResponse;
using com.apama.cumulocity.FindAlarmResponseAck;

monitor MonitorDevicesForCircularGeofence {

	event LocationEventWithDistance {
		string source;
		float distance;
		Event e;
		float maxDistance;
	}

	action onload {
		monitor.subscribe(Measurement.SUBSCRIBE_CHANNEL);
		monitor.subscribe(FindManagedObjectResponse.SUBSCRIBE_CHANNEL);
		monitor.subscribe(FindAlarmResponse.SUBSCRIBE_CHANNEL);
		on all Event() as e {
			if e.params.hasKey("c8y_Position") {
				// we have an event
				integer reqId := integer.getUnique();
				send FindManagedObject(reqId, e.source, new dictionary<string,string>) to FindManagedObject.SEND_CHANNEL;
				on FindManagedObjectResponse(reqId = reqId) as resp
				and not FindManagedObjectResponseAck(reqId) {
				ManagedObject dev := resp.managedObject;

				if(dev.params.hasKey("c8y_Geofence") and dev.supportedOperations.indexOf("c8y_Geofence") >= 0) {

						dictionary<any, any> evtPos := <dictionary<any, any> > e.params["c8y_Position"];
						float eventLat := <float> evtPos["lat"];
						float eventLng := <float> evtPos["lng"];

						dictionary<any,any> devGeofence := <dictionary<any,any> > dev.params["c8y_Geofence"];
						float centerLat := <float> devGeofence["lat"];
						float centerLng := <float> devGeofence["lng"];
						float maxDistance := <float> devGeofence["radius"];

						float d := distance(centerLat, centerLng, eventLat, eventLng);

						route LocationEventWithDistance(e.source, d, e, maxDistance);
					}
				}
			}
		}

		on all LocationEventWithDistance() as firstPos {
			on LocationEventWithDistance(source = firstPos.source) as secondPos {
				// now have two events with distances
				if firstPos.distance <= firstPos.maxDistance and
					secondPos.distance > secondPos.maxDistance {
					send Alarm("", "c8y_GeofenceAlarm", firstPos.source, currentTime,
							"Device moved out of circular geofence", "ACTIVE",
							"MAJOR", 1, new dictionary<string,any>) to Alarm.SEND_CHANNEL;
				}

				if firstPos.distance > firstPos.maxDistance and
					secondPos.distance <= secondPos.maxDistance {
					integer reqId:= integer.getUnique();
					send FindAlarm(reqId, {"source": firstPos.source, 
						"status": "ACTIVE", "type": "c8y_GeofenceAlarm"}) to FindAlarm.SEND_CHANNEL;
					on FindAlarmResponse(reqId=reqId) as alarmResponse
					and not FindAlarmResponseAck(reqId=reqId) {
						send Alarm(alarmResponse.id, "c8y_GeofenceAlarm",
								firstPos.source, currentTime, "Device moved back into circular geofence",
								"CLEARED", alarmResponse.alarm.severity, 1, new dictionary<string, any>) to Alarm.SEND_CHANNEL;
					}
				}
			}
		}
	}

	action distance(float lat1, float lon1, float lat2, float lon2) returns float {
		float R := 6371000.0;
		float toRad := float.PI / 180.0;
		float lat1Rad := lat1 * toRad;
		float lat2Rad := lat2 * toRad;
		float deltaLatRad := (lat2-lat1) * toRad;
		float deltaLonRad := (lat2-lat1) * toRad;
		float a := (deltaLatRad/2.0).sin().pow(2.0) * lat1Rad.cos() * lat2Rad.cos() * (deltaLonRad/2.0).sin().pow(2.0);
		float c := 2.0 * a.sqrt().atan2((1.0-a).sqrt());
		return R * c;
	}
}
```

