---
order: 10
layout: default
title: Hello, world!
---

## Overview

This section gives a very basic example of using Java SE with Cumulocity through the Maven build tool. It can also be run straight from Eclipse, provided you have an Eclipse version with Maven support. Maven supported is by default included in recent versions of the [Eclipse IDE for EE Developers](http://eclipse.org/downloads/).

## Prerequisites

Verify that you have Maven 3 installed with Java (6 or 7):

	$ mvn -v
	Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 17:22:22+0200)
	Maven home: /usr/local/Cellar/maven/3.1.1/libexec
	Java version: 1.7.0_45, vendor: Oracle Corporation
	Java home: /Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk/Contents/Home/jre
	Default locale: en_US, platform encoding: UTF-8
	OS name: "mac os x", version: "10.9.4", arch: "x86_64", family: "mac"

Maven can be downloaded from http://maven.apache.org.

## Develop the "Hello, world!" agent

To develop a very simple "Hello, world!" agent for Cumulocity, you need to

* Create a Maven project.
* Add a dependency to the Cumulocity Java client library to the Maven pom.xml.
* Create a Java application.
* Build and run the Java application.

### Create a Maven project

To create a plain Java project with Maven, run

	$ mvn archetype:generate -DgroupId=c8y.example -DartifactId=hello-agent nt -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

This will create a folder "hello-agent" in the current directory with a skeleton structure for your project.

### Add the  Java client library

Edit the "pom.xml" in the "hello-agent" folder. Add a "repositories" and a "pluginRepositories" element to point to the Cumulocity Maven repository, which stores the client libraries.

	<repositories>
		<repository>
			<id>cumulocity</id>
			<layout>default</layout>
			<url>http://download.cumulocity.com/maven/repository</url>
		</repository>
	</repositories>
	<pluginRepositories>
		<pluginRepository>
			<id>public</id>
			<url>http://download.cumulocity.com/maven/repository</url>
		</pluginRepository>
        </pluginRepositories>


Add "dependency" elements for the Java client library ("java-client") and for the Cumulocity domain model ("device-capability-model") to the "dependencies" section.

	<dependency>
		<groupId>com.nsn.cumulocity.clients-java</groupId> 
		<artifactId>java-client</artifactId>
		<version>6.4.0</version>
	</dependency>
	<dependency>
		<groupId>com.nsn.cumulocity.model</groupId>
		<artifactId>device-capability-model</artifactId>
		<version>6.4.0</version>
	</dependency>

Edit the "version" elements to use the latest version of the client library. The version can be determined by checking the ["Announcements" section](https://cumulocity.zendesk.com/hc/en-us/sections/200381323-Announcements) of the Cumulocity Help Center. The full file after editing can be found [here](/guides/java/pom.xml).

### Create a Java application

Edit the "App.java" file in the folder "hello-agent/src/main/java/c8y/example" with the following content:

	package c8y.example;
	
	import c8y.IsDevice;
	import com.cumulocity.model.authentication.CumulocityCredentials;
	import com.cumulocity.rest.representation.inventory.ManagedObjectRepresentation;
	import com.cumulocity.sdk.client.Platform;
	import com.cumulocity.sdk.client.PlatformImpl;
	import com.cumulocity.sdk.client.inventory.InventoryApi;

	public class App 
	{
		public static void main( String[] args )
		{
			Platform platform = new PlatformImpl("<<yourURL>>", new CumulocityCredentials("<<yourUser>>", "<<yourPassword>>"));
			InventoryApi inventory = platform.getInventoryApi();
			ManagedObjectRepresentation mo = new ManagedObjectRepresentation();
			mo.setName("Hello, world!");
			mo.set(new IsDevice());
			mo = inventory.create(mo);
			System.out.println("URL: " + mo.getSelf());
		}
	}

Replace "&lt;&lt;yourUrl&gt;&gt;", "&lt;&lt;yourUser&gt;&gt;" and "&lt;&lt;yourPassword&gt;&gt;" with your URL (e.g., "https://myurl.cumulocity.com"), username and password.

What does the code in "main" do?

-   Line 1 connects the agent to the platform.
-   Line 2 retrieves a handle to the Cumulocity inventory.
-   Line 3 creates a new managed object.
-   Line 4 sets the display name of the new managed object.
-   Line 5 says that this managed object should be a device (should show up in device management).
-   Line 6 creates the managed object in the inventory. This will return the managed object back with a fresh, generated ID. (See "Object identity" section in ["Cumulocity's domain model"](/guides/concepts/domain-model)).
-   Line 7 prints the URL to the new managed object that has just been stored in the inventory.

### Build and run the agent

To build and run your agent:

	$ cd hello-agent
	$ mvn clean install
	[INFO] Scanning for projects...
	[INFO]                                                                         
	[INFO] ------------------------------------------------------------------------
	[INFO] Building hello-agent 1.0-SNAPSHOT
	[INFO] ------------------------------------------------------------------------
	...
	$ mvn exec:java -Dexec.mainClass="c8y.example.App"
	[INFO] Scanning for projects...
	[INFO]                                                                         
	[INFO] ------------------------------------------------------------------------
	[INFO] Building hello-agent 1.0-SNAPSHOT
	[INFO] ------------------------------------------------------------------------
	[INFO] 
	[INFO] --- exec-maven-plugin:1.3.2:java (default-cli) @ hello-agent ---
	[WARNING] Warning: killAfter is now deprecated. Do you need it ? Please comment on MEXEC-6.
	SLF4J: Failed to load class "org.slf4j.impl.StaticLoggerBinder".
	SLF4J: Defaulting to no-operation (NOP) logger implementation
	SLF4J: See http://www.slf4j.org/codes.html#StaticLoggerBinder for further details.
	URL: http://demos.cumulocity.com/inventory/managedObjects/110160902

The last line shows that a new device has been successfully created with a particular URL. Open the Cumulocity application and go to the device list. You should see a new "Hello, world!" device.

![Hello world device](/guides/java/hello.png)

**Got an error message?** Check the [troubleshooting section](/guides/java/troubleshooting).

## Improve the agent

Now that you have done your first step, check out the Section [Developing Java client](/guides/java/developing) or examine the [full examples](/guides/java/agents).
