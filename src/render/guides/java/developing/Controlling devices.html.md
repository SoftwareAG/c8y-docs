---
order: 60
layout: redirect
title: Controlling devices
---

Finally, the "DeviceControlResource" enables you to manipulate devices remotely. It has two sides: You can create operations in applications to be sent to devices, and you can query operations from agents. 

In order to control a device it must be in the "childDevices" hierarchy of an agent managed object. The agent managed object represents your agent in the inventory. It is identified by a fragment com\_cumulocity\_model\_Agent. This is how Cumulocity identifies where to send operations to control a particular device. This code demonstrates the setup:

    ManagedObjectRepresentation agent = new ManagedObjectRepresentation();
    agent.set(new com.cumulocity.model.Agent()); // agents must include this fragment
    // ... create agent in inventory
    ManagedObjectRepresentation device = ...;
    // ... create device in inventory
     
    ManagedObjectReferenceRepresentation child2Ref = new ManagedObjectReferenceRepresentation();
    child2Ref.setManagedObject(device);
    inventory.getManagedObject(agent.getId()). addChildDevice(child2Ref);

For example, assume that you would like to switch off a relay in a meter from an application. Similar to the previous examples, you create the operation to be executed locally, and then send it to the platform:

    DeviceControlApi control = platform.getDeviceControlApi();
    OperationRepresentation operation = new OperationRepresentation();
    operation.setDeviceId(mo.getId());
    relay.setRelayState(RelayState.OPEN);
    operation.set(relay);
    control.create(operation);

Now, if you would like to query the pending operations from an agent, the following code would need to be executed:

	OperationFilter operationFilter = new OperationFilter();
	operationFilter.byAgent(mo.getId().getValue());
	operationFilter.byStatus(OperationStatus.PENDING);
	OperationCollection oc = control.getOperationsByFilter(operationFilter);

Again, the returned result may come in several pages due to its potential size.

	OperationCollectionRepresentation opCollectionRepresentation;
	for (opCollectionRepresentation = oc.get(); opCollectionRepresentation != null; opCollectionRepresentation = oc.getNextPage(opCollectionRepresentation)) {
		for (OperationRepresentation op : opCollectionRepresentation.getOperations()) {
			System.out.println(op.getStatus());
		}
	}