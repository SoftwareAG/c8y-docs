---
order: 80
title: Putting everything together
layout: redirect
---

We can now combine all the parts into one module. The order of the listeners does not matter.

	using com.apama.cumulocity.Device;
	using com.apama.cumulocity.Event;
	using com.apama.cumulocity.FindAlarm;
	using com.apama.cumulocity.FindAlarmResponse;
	using com.apama.cumulocity.FindAlarmResponseAck;
	using com.apama.cumulocity.FindManagedObject;
	using com.apama.cumulocity.FindManagedObjectResponse;
	
	monitor MonitorDevicesForCircularGeofence {
	        event LocationEventWithDistance {
	                string assetId;
	                float distance;
	                Event e;
	                float maxDistance;
	        }
	
        action onload() {
                monitor.subscribe(FindManagedObjectResponse.CHANNEL);
                monitor.subscribe(FindAlarmResponse.CHANNEL);
                on all Event() as e {
                        if e.params.hasKey("c8y_Position") {
                                integer reqId := integer.getUnique();
                                send FindManagedObject(reqId, e.assetId, new dictionary&#60;string,string&#62;) to
                                        FindManagedObject.CHANNEL;
                                on Device(assetId = e.assetId) as dev 
                                   and not FindManagedObjectResponse(reqId) {
                                        if(dev.params.hasKey("attrs.c8y_Geofence") and 
                                           dev.supportedOperations.indexOf("c8y_Geofence") >= 0) {
                                                dictionary&#60;any,any&#62; evtPos := dictionary&#60;any,any&#62; > e.params["c8y_Position"];
                                                float eventLat := &#60;float> evtPos["lat"];
                                                float eventLng := &#60;float> evtPos["lng"];

                                                dictionary&#60;any,any&#62; devGeofence := &#60;dictionary&#60;any,any&#62; &#62; dev.params["attrs.c8y_Geofence"];
                                                float centerLat := &#60;float> devGeofence["lat"];
                                                float centerLng := &#60;float> devGeofence["lng"];
                                                float maxDistance := &#60;float> devGeofence["radius"];

                                                float d := distance(centerLat, centerLng, eventLat, eventLng);
                                                route LocationEventWithDistance(e.assetId, d, e, maxDistance);
                                        }
                                }
                        }
                }
                on all LocationEventWithDistance() as firstPos {
                        on LocationEventWithDistance(assetId = firstPos.assetId) as secondPos {
                                if firstPos.distance <= firstPos.maxDistance and
                                   secondPos.distance > secondPos.maxDistance {
                                        send Event("Alarm", firstPos.assetId, currentTime,
                                                   "Device moved out of circular geofence",
                                                   {"status":&#60;any>"ACTIVE", "severity":"MAJOR", "type":"c8y_GeofenceAlarm"}) to Event.CHANNEL;
                                }

                                if firstPos.distance > firstPos.maxDistance and secondPos.distance <= secondPos.maxDistance {
                                        integer reqId:= integer.getUnique();
                                        send FindAlarm(reqId, {"source":firstPos.assetId,
                                                       "status":"ACTIVE","type":"c8y_GeofenceAlarm"}) to FindAlarm.CHANNEL;
                                        on FindAlarmResponse(reqId = reqId) as alarmResponse
                                           and not FindAlarmResponseAck(reqId=reqId) {
                                                send Event("Alarm", firstPos.assetId, currentTime,
                                                           "Device moved back into circular geofence",
                                                           {"id":&#60;any> alarmResponse.id, "status":"CLEARED"}) to Event.CHANNEL;
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

