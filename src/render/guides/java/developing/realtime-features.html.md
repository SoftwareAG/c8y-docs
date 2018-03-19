---
order: 70
layout: redirect
title: Realtime features
---

The Java client libraries fully support the real-time APIs of Cumulocity. For example, to get immediately notified when someone sends an operation to your agent, use the following code:

	Subscriber<GId, OperationRepresentation> subscriber = deviceControl.getNotificationsSubscriber();
	subscriber.subscribe(agentId, new SubscriptionListener<GId, OperationRepresentation> {
		public void onError(Subscription<GId> sub, Throwable e) {
			logger.error("OperationDispatcher error!", e);
		}
		
		public void onNotification(Subscription<GId> sub, OperationRepresentation operation) {
			// Execute the operation
		}
	});

"agentId" is the ID of your agent in the inventory.
