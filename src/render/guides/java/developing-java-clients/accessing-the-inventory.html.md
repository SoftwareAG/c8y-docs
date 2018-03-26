---
order: 30
layout: redirect
title: Accessing the inventory
---

The following code snippet shows how to obtain a handle to the inventory from Java:

	InventoryApi inventory = platform.getInventoryApi();

Using this handle, you can create, retrieve and update managed objects. For example, if you would like to retrieve all objects that have a geographical position, use

	InventoryFilter inventoryFilter = new InventoryFilter();
	inventoryFilter.byFragmentType(Position.class);
	ManagedObjectCollection moc = inventory.getManagedObjectsByFilter(inventoryFilter);

This returns a query to get the objects -- it does not actually get them. In practice, such a list of objects could be very large. Hence, it is return in "pages" from the server. To get all pages and iterate over them, use:

	for (ManagedObjectRepresentation mo : moc.get().allPages()) {
			System.out.println(mo.getName());
	}

To create a new managed object, simply construct a local representation of the object and send it to the platform. The following code snippet shows how to create a new electricity meter with a relay in it:

    ManagedObjectRepresentation mo = new ManagedObjectRepresentation();
    mo.setName("MyMeter-1");
    Relay relay = new Relay();
    mo.set(relay);
    SinglePhaseElectricitySensor meter = new SinglePhaseElectricitySensor();
    mo.set(meter);
    // Set additional properties, e.g., tariff tables, ...
    mo = inventory.create(mo);
    System.out.println(mo.getId());

The result of invoking "create" is a version of the new managed object with a populated unique identifier. 

Now assume that you would like to store additional, own properties along with the device. This can be simply done by creating a new "fragment" in the form of a Java bean. For example, assume that you would like to store tariff information along with your meter. There is a day and a night tariff, and we need to store the hours during which the night time tariff is active:

    public class Tariff {
      public int getNightTariffStart() {
        return nightTariffStart;
      }
      public void setNightTariffStart(int nightTariffStart) {
        this.nightTariffStart = nightTariffStart;
      }
      public int getNightTariffEnd() {
        return nightTariffEnd;
      }
      public void setNightTariffEnd(int nightTariffEnd) {
        this.nightTariffEnd = nightTariffEnd;
      }
      private int nightTariffStart = 22;
      private int nightTariffEnd = 6;
    }

Now, you can simply add tariff information to your meter:

    Tariff tariff = new Tariff();
    mo.set(tariff);

This will store the tariff information along with the meter. For converting Java objects from and towards JSON/REST, Cumulocity uses Svenson. The [Svenson documentation](https:/fforw.github.io/svenson/) provides more information on how to influence the JSON format that is produced respectively accepted.

When creating own fragments in OSGi, you need to make the fragments visible to the Cumulocity client libraries. To do this, add the following line to the manifest file of the bundle containing the fragments:

    Eclipse-RegisterBuddy: com.nsn.cumulocity.model.core-model

It is a good practice to maintain your domain model in a separate project in the SDK. That way, you can share the domain model between your agent and your application.