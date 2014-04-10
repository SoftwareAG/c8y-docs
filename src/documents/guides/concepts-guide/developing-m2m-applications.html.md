# Overview

This section explains the concepts relevant for implementing and deploying M2M applications. It first shows how Cumulocity supports developing web-based M2M applications and how they can be extended with server-side business logic. Then it describes the elementary application management concepts of Cumulocity.

More information on application development can be found in the web and Java sections of the [developer's guide](guides/developers-guide). More information on the application management interface can be found in the [general part](guides/reference-guide/rest-implementation) and the [client library documentation](guides/reference-guide/client-libraries) in the reference guide.

# Developing M2M user interfaces

Web-based M2M applications on top of Cumulocity can be developed using the Cumulocity JavaScript client library and a web application framework of your choice. The JavaScript client library provides an abstraction on top of the Cumulocity APIs. In the examples, an integration with the popular enterprise web application framework [ExtJS](http://www.sencha.com/products/extjs/) is demonstrated, showing login to the platform and displaying an inventory table.

The following code creates a simple user interface application using the example inventory browsing component (see the "Hello, world!"):

    C8Y.application({
      name : 'app',
      header: 'header',
      footer: 'footer',
      items : [ {
        xtype : 'c8yinventorygrid',
        menuOption : 'Inventory',
        iconCls : 'iconInventory',
        loadMOs : true
      } ]
    });

When run, the code looks like the screenshot below:

![Hello world](images/c8yimages/helloworld.png)

# Developing server-side business logic

Whenever server-side application logic is required, Cumulocity provides a Java client library and a runtime in the Eclipse SDK. This allows developers to use normal enterprise Java means (such as servlets) to develop the logic. Examples are:

-   You need to interfaces with devices or other IT systems (see [Interfacing with M2M data sources](guides/concepts-guide/interfacing-with-m2m-data-sources)).
-   You need to provide application logic without web user interface, such as sending regular email reports to tenant users.
-   You need to back the user interface with additional functionality, such as uploading files with additional asset information from the user interface, or exporting data to spreadsheets.??
-   You need to expose a REST interface to other systems.

The following code snippet demonstrates how to access Cumulocity from server-side business logic. In this case, it creates a new dummy managed object in the inventory.

    Platform platform = new PlatformImpl("?sandbox URL?", "?tenant?", "?user?", "?password?", "?application_key?");
    InventoryResource inventory = platform.getInventory();
    ManagedObjectRepresentation mo = new ManagedObjectRepresentation();
    mo.setName("Hello, world!");
    mo = inventory.getMOCollectionResource().create(mo);
    System.out.println("URL: " + mo.getSelf());

# M2M application management

The usage of M2M applications will typically be a paid service that tenants subscribe to. Hence, M2M applications are registered with Cumulocity. This allows Cumulocity to check subscriptions, make the applications visible in the user interface, monitor them and possibly charge on usage base.

M2M applications developed in Eclipse run on top of a minimal client runtime environment. This runtime environment can be exported from Eclipse together with the application and can be installed and run standalone on any server platform.
