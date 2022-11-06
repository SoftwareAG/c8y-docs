---
weight: 70
title: "Step 6: Clearing the alarm"
layout: redirect
---
To clear the alarm, we must just switch the condition at the bottom and additionally grab the currently active alarm to get its ID. We do not need to care about whether there is an existing alarm at this point. If there is none, the listener will trigger the `and not FindAlarmResponseAck`, terminating the listener:

	monitor.subscribe(FindAlarmResponse.SUBSCRIBE_CHANNEL);
	...
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
