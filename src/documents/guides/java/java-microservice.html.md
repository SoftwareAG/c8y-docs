---
order: 27
layout: default
title: Hello, microservice!
---

## Overview
This sections shows you how to create a microservice that can be run on cumulocity.com, using Cumulocity Microservice SDK.

## Prerequisites

Create an account on cumulocity.com. For example by using free trial. At this step you will be provided with a dedicated URL address.

Verify that you have Maven 3 installed with Java (7+):

    $ mvn -v
    Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 17:22:22+0200)
    Maven home: /usr/local/Cellar/maven/3.1.1/libexec
    Java version: 1.7.0_45, vendor: Oracle Corporation
    Java home: /Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk/Contents/Home/jre
    Default locale: en_US, platform encoding: UTF-8
    OS name: "mac os x", version: "10.9.4", arch: "x86_64", family: "mac"

Maven can be downloaded from http://maven.apache.org.

Verify docker installation

    $ docker -v
    Docker version 17.12.0-ce, build c97c6d6

## Develop the "Hello, world!" agent

To develop a very simple "Hello, world!" agent for Cumulocity, you need to

* Create a Maven project.
* Add a dependency to the Cumulocity Microservice SDK library to the Maven pom.xml.
* Create a Java application.
* Configure microservice
* Configure build
* Build and run the Java application.

### Create a Maven project

To create a plain Java project with Maven, run

	$ mvn archetype:generate -DgroupId=c8y.example -DartifactId=hello-world-microservice -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

This will create a folder "hello-world-microservice" in the current directory with a skeleton structure for your project.

### Add the  Java Microservice library

Edit the "pom.xml" in the "hello-world-microservice" folder. Add a "repositories" and a "pluginRepositories" element to point to the Cumulocity Maven repository, which stores the client libraries.

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


Add "dependency" elements for the Java Microservice SDK library ("microservice-autoconfigure") to the "dependencies" section.

	<dependency>
		<groupId>com.nsn.cumulocity.clients-java</groupId>
		<artifactId>microservice-autoconfigure</artifactId>
		<version>8.21.0</version>
	</dependency>

Edit the "version" elements to use the latest version of the client library. The version can be determined by checking the ["Announcements" section](https://cumulocity.zendesk.com/hc/en-us/sections/200381323-Announcements) of the Cumulocity Help Center. The full file after editing can be found [here](/guides/java/pom.xml).

### Create a Java application

Edit the "App.java" file in the folder "hello-world-microservice/src/main/java/c8y/example" with the following content:

    package c8y.example;

    import com.cumulocity.microservice.autoconfigure.MicroserviceApplication;
    import org.springframework.boot.SpringApplication;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RequestParam;
    import org.springframework.web.bind.annotation.RestController;

    @MicroserviceApplication
    @RestController
    public class App{
      public static void main(String[] args) {
          SpringApplication.run(App.class, args);
      }

      @RequestMapping("hello")
      public String greeting(@RequestParam(value = "who", defaultValue = "world") String who) {
          return "hello " + who + "!";
      }
    }

What does the code do:
* @MicroserviceApplication - is a simple way to add required behavior for Cumulocity Microservice. Including:
  * Security
  * Subscription
  * Health indicator
  * Context
  * Internal platform API
  * Spring Boot Application
* @RequestMapping - open an endpoint for greeting

### Configure microservice

Add an application.properties file in src/main/resources directory with following properties:

    application.name=hello-world
    server.port=80

Add a cumulocity.json file in src/main/configuration directory with following content:

    {
    "apiVersion":"1",
    "version":"@project.version@",
    "provider": {
      "name":"Cumulocity GmbH"
      },
      "isolation":"MULTI_TENANT",
      "requiredRoles": [
      ],
      "roles":[
      ]
    }

This file is required to deploy the microservice in Cumulocity infrastructure.

### Configure build

To create a deployable zip file you need to add following to your pom file:

    <properties>
        <maven.compiler.source>1.7</maven.compiler.source>
        <maven.compiler.target>1.7</maven.compiler.target>
        <spring-boot-dependencies.version>1.5.7.RELEASE</spring-boot-dependencies.version>
        <main.class>c8y.example.App</main.class>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.nsn.cumulocity.clients-java</groupId>
            <artifactId>microservice-autoconfigure</artifactId>
            <version>8.21.0-SNAPSHOT</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>${spring-boot-dependencies.version}</version>
                <executions>
                    <execution>
                        <goals>
                            <goal>repackage</goal>
                        </goals>
                    </execution>
                </executions>
                <configuration>
                    <mainClass>${main.class}</mainClass>
                </configuration>
            </plugin>
            <plugin>
                <groupId>com.nsn.cumulocity.clients-java</groupId>
                <artifactId>microservice-package-maven-plugin</artifactId>
                <version>8.21.0</version>
                <executions>
                    <execution>
                        <id>package</id>
                        <phase>package</phase>
                        <goals>
                            <goal>package</goal>
                        </goals>
                        <configuration>
                            <name>hello-world</name>
                            <encoding>UTF-8</encoding>
                            <rpmSkip>true</rpmSkip>
                            <containerSkip>false</containerSkip>
                        </configuration>
                    </execution>
                    <execution>
                        <id>microservice-package</id>
                        <phase>package</phase>
                        <goals>
                            <goal>microservice-package</goal>
                        </goals>
                        <configuration>
                            <name>hello-world</name>
                            <image>hello-world</image>
                            <encoding>UTF-8</encoding>
                            <skip>false</skip>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

## Build microservice

To build the zip file use following command:

    $mvn clean install

After a successful build you will be provided with a zip file in target directory. The zip can be deployed to the platform according to deployment guide.

## Deployment

To deploy application on an environment you need
* URL address of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant Id 
* ZIP build from previous step


1. If Application does not exist create new application on a platform:

POST {URL}/application/applications

HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-type": "application/json"
BODY:


    {
			"name": "{APPLICATION_NAME}",
			"type": "MICROSERVICE",
			"key": "{APPLICATION_NAME}-microservice-key"
    }

Example:

    $curl -X POST -s \
      -d "{"name":"hello-microservice-1","type":"MICROSERVICE","key":"hello-microservice-1-key"}" \
      -H "Authorization: {AUTHORIZATION}" \
      -H "Content-type: application/json" \
      -H "Accept: application/json" \
      "{URL}/application/applications"
      
Example response:

    {
        "availability": "PRIVATE",
        "id": "{APPLICATION_ID}",
        "key": "{APPLICATION_NAME}-microservice-key",
        "manifest": {
            "imports": [],
            "noAppSwitcher": true
        },
        "name": "{APPLICATION_NAME}",
        "owner": {
            "self": "...",
            "tenant": {
                "id": "..."
            }
        },
        "requiredRoles": [],
        "roles": [],
        "self": "..",
        "type": "MICROSERVICE"
    }      

If application was created correctly, you can get application id by invoking:

GET {URL}/application/applicationsByName/{APPLICATION_NAME}

HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-type": "application/json"
Example

    curl -H "Authorization:{AUTHORIZATION}" \
     {URL}/application/applicationsByName/hello-world

2. Upload zip file
POST {URL}/application/applications/{APPLICATION_ID}/binaries
HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-Type": "multipart/form-data"

Example

  curl -F "data=@{PATH_TO_ZIP}" \
  -H "Authorization: {AUTHORIZATION}" \
  "{URL}/application/applications/{APPLICATION_ID}/binaries"

3. Subscribe to microservice

  POST {URL}/tenant/tenants/$TENANT/applications

  HEADERS:


    "Authorization": "{AUTHORIZATION}"
    "Content-Type": "multipart/form-data"

  BODY:

    {"application":{"id": "{APPLICATION_ID}"}}

  Example:

    curl -X POST -d "{"application":{"id": "{APPLICATION_ID}"}}"  \
    -H "Authorization: {AUTHORIZATION}" \
    -H "Content-type: application/json" \
     "{URL}/tenant/tenants/{TENANT}/applications"


Now you can verify your application is running by executing

    curl -H "Authorization: {AUTHORIZATION}" \
      {URL}/service/hello-world/hello?who=me

The expected result is:

    hello me!

## Improve the Microservice

Now that you have done your first step, check out the Section [Developing Java Microservice](/guides/java/developing-microservice).
