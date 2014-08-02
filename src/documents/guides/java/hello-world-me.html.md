---
order: 25
layout: default
title: Hello, ME!
---

## Overview

In this section, we show how to run a "Hello, world!" on Java MicroEdition platforms. The Cumulocity client library for JavaME is very lightweight and has no dependencies on other software. Its interface is very close to that of the JavaSE client library with the exception of serialization of requests and deserialization of responses into Java objects. Most of the descriptions in the other sections apply to the JavaME client library as well.

The example in this section is run on the emulator contained in the Oracle JavaME SDK. For running the code on a real device, see the section on [Cinterion Java modules](/guides/devices/cinterion). JavaME is also supported on the Raspberry Pi. We use Eclipse for the example, but a similar approach should also work in other development environments.

## Prerequisites

To run the example, you need to

* [Download](http://www.oracle.com/technetwork/java/embedded/javame/javame-sdk/downloads/index.html) the Oracle JavaME SDK. We tested the example with Version 3.4 of the SDK.
* Install the SDK along with the associated Eclipse plugins according to Oracle's [Developer's Guide](http://docs.oracle.com/javame/dev-tools/jme-sdk-3.4/ecl/html/toc.htm).

## Develop the "Hello, world!" agent

To develop the "Hello, world!" agent with the Oracle JavaME SDK and Eclipse, you need to

* Create an IMP-NG MIDlet project in Eclipse. IMP-NG is the JavaME profile used on embedded devices.
* Include the Cumulocity JavaME client libraries into your project.
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

### Include the client libraries

The simplest way to include the Cumulocity JavaME client libraries into your project is to just copy the source code into your project. 

* [Download](https://bitbucket.org/m2m/cumulocity-clients-java/get/tip.zip) the source code and unpack it to some location.
* Copy the folder "java-me-client/src/main/java/com" into the "src" folder of your project.
* Right-click your project and select "Refresh".

### Write the agent code

Finally, you need to create a MIDlet to contain your agent code. A MIDlet is roughly the JavaME equivalent of a "main" class in JavaSE.

* Right-click your project and select "New", "Java ME MIDlet".
* Specify a package name and a class name for your MIDlet and click "Finish".
* Paste the code below into the generated "startApp" method. Replace "&lt;&lt;yourUrl&gt;&gt;", "&lt;&lt;yourUser&gt;&gt;" and "&lt;&lt;yourPassword&gt;&gt;" with your URL (e.g., "https://myurl.cumulocity.com"), username and password. Right-click in the editor and select "Source", "Organize Imports". For an explanation of what the code does, see the [basic "Hello, world!"](/guides/java/hello-world-basic).


	Platform platform = new PlatformImpl("<<yourURL>>", new CumulocityCredentials("<<yourUser>>", "<<yourPassword>>"));
	InventoryApi inventory = platform.getInventoryApi();
	ManagedObjectRepresentation mo = new ManagedObjectRepresentation();
	mo.setName("Hello, world!");
	mo.set(new IsDevice());
	mo = inventory.create(mo);
	System.out.println("URL: " + mo.getSelf());

### Run the agent

Now you can run your agent by right-clicking the project and selecting "Run as", "Emulated Java ME MIDlet". This will launch the emulator, deploy your code to the emulator and run it.
