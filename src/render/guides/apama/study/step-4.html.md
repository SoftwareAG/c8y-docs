---
order: 50
title: Step 4: Creating the trigger
layout: redirect
---

As mentioned earlier, the device is outside of the fence if the distance between the current device position and the geofence center is bigger than the configured geofence radius. To trigger the alarm, we need 2 events so we can check if the device entered or left the geofence within these two events.

In the first step, we calculate the distance with the function mentioned earlier:

	float d := distance(centerLat, centerLng, eventLat, eventLng);
	
Now we re-route this as an event with:

	event LocationEventWithDistance {
			string assetId;
			float distance;
			Event e;
			float maxDistance;
		}
	
	...
	
							route LocationEventWithDistance(e.assetId, d, e, maxDistance);


We place the assetId in the event so we can easily match it in a listener.

We now set up a listener triggered by event LocationEventWithDistance, listening for the next LocationEventWithDistance - for the same assetId:

	on all LocationEventWithDistance() as firstPos {
				on LocationEventWithDistance(assetId = firstPos.assetId) as secondPos {
					// now have two events with distances
				}
			}

This pair of LocationEventWithDistance events now holds all data for checking if we should create the alarm or not. Note that we are filtering the secondPos event to be for the same assetId as the first - there will be an active listener for every device we have received an event from.

