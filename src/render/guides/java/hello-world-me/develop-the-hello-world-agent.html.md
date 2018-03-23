---
order: 30
layout: redirect
title: Develop the "Hello, world!" agent
---

To develop the "Hello, world!" agent with the Oracle JavaME SDK and Eclipse, you need to

* Create an IMP-NG MIDlet project in Eclipse. IMP-NG is the JavaME profile used on embedded devices.
* Include the Cumulocity JavaME SmartREST client libraries into your project.
* Write the agent code.
* Run the agent.

### Create a MIDlet project

As first step, you need to create and configure a project that can run on a JavaME device or emulator. Such a project is called "MIDlet project" in Eclipse.

* Click "New", "Project" and select a "MIDlet Project" to be created.
* Give it a name, for example, "hello".
* Click "Add" next to the "Configurations" list.
* Select "Oracle Java Platform Micro Edition SDK 3.4" (or similar) as SDK and "IMPNGDevice1" as device. Click "OK".
* Make sure that "IMPNGDevice1" is marked as "active".
* Click "Next".
* Select "Connected Limited Device Configuration (1.1)" as "Microedition Configuration" and "Information Module Profile (NG)" as "Microedition Profile".
* Click "Finish".
* The application descriptor opens on the "Overview" tab. Click on the "Application Descriptor" tab. Replace "IMP-NG-2.0" with "IMP-NG" as shown below. Click "Save". You might get some error displays that you can ignore -- these are known issues with the Eclipse plugin implementation.


	MicroEdition-Profile: IMP-NG

### Prerequisites

To start developing your agent, you need to

* [Download](https://bitbucket.org/m2m/cumulocity-clients-java/get/tip.zip) our client libraries
* Copy the folder "java-me-smartrest-client/src/main/java/com" into the "src" folder of your project.
* Right-click your project and select "Refresh".

Beside this technical requirements you should check our [SmartREST guide](/guides/rest/smartrest) and the [SmartREST reference](/guides/reference/smartrest) to understand the protocol.

### Write the agent code

Finally, you need to create a MIDlet to contain your agent code. A MIDlet is roughly the JavaME equivalent of a "main" class in JavaSE.

* Right-click your project and select "New", "Java ME MIDlet".
* Specify a package name and a class name for your MIDlet and click "Finish".
* Paste the code below into the generated "startApp" method. Replace "&lt;&lt;yourUrl&gt;&gt;", "&lt;&lt;yourUser&gt;&gt;" and "&lt;&lt;yourPassword&gt;&gt;" with your URL (e.g., "https://myurl.cumulocity.com"), username and password. "&lt;&lt;tenantId&gt;&gt;" is the first part of your URL (e.g., "myurl" in this case). "&lt;&lt;yourXId&gt;&gt;" is the XId used in the SmartREST protocol. The code below creates a connection, registeres your template and finally creates a device by using the template.


	String mySmartRestTemplate = "10,100,POST,/inventory/managedObjects/,application/vnd.com.nsn.cumulocity.managedObject+json,application/vnd.com.nsn.cumulocity.managedObject+json,&&,,\"{\"\"name\"\":\"\"&&\"\",\"\"c8y_IsDevice\"\":{}}\"";
	SmartConnection connection = new SmartHttpConnection("<<yourUrl>>","<<tenantId>>","<<yourUser>>","<<yourPassword>>","<<yourXId>>");
	connection.templateRegistration(templateString);
	
	connection.executeRequest(new SmartRequestImpl("100,myDeviceName"));

### Run the agent

Now you can run your agent by right-clicking the project and selecting "Run as", "Emulated Java ME MIDlet". This will launch the emulator, deploy your code to the emulator and run it.