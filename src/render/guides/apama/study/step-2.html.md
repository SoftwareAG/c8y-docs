---
order: 30
title: Step 2: Collecting necessary data
layout: redirect
---

In the next step, we need the configuration of the geofence for the calculation and grab it.

	monitor.subscribe(FindManagedObjectResponse.CHANNEL);
	...
					integer reqId := integer.getUnique();
					send FindManagedObject(reqId, e.assetId, new dictionary&#60;string,string&#62;) to
						FindManagedObject.CHANNEL;
					on Device(assetId = e.assetId) as dev 
					   and not FindManagedObjectResponse(reqId) {
	
