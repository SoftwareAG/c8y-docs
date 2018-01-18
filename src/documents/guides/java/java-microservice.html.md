---
order: 45
layout: default
title: Java microservice
---

## Overview
This sections shows you how to create a microservice that can be run on cumulocity.com, using cumulocity-microservice sdk.

## Prerequisites

Create and account on cumulocity.com. For example by using free trial. At this step you will be provided with a dedicated URL address.

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
* @MicroserviceApplication - is a simple way to add required behavior for cumulocity microservice. Including:
  * security
  * subscription
  * health indicator
  * context
  * platform API
  * Spring Boot Application
* @RequestMapping - open and endpoint for greeting

### Configure microservice

Add an application.property file in src/main/resources directory with following properties:

    application.name=hello-world
    server.port=80
    C8Y.baseURL=http://{yourURL}

The C8Y.baseURL is automatically provided by platform when deploying on cumulocity platform. Although you can put your URL to run the microservice locally.

Add a cumulocity.json file in src/main/microservice directory with following content:

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

This file is required to deploy the microservice in cumulocity infrastructure.

### Configure build

To create a deployable zip file you need to add following to your pom file:

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.7</maven.compiler.source>
        <maven.compiler.target>1.7</maven.compiler.target>
        <spring-boot-dependencies.version>1.5.7.RELEASE</spring-boot-dependencies.version>
        <package.directory>hello-world</package.directory>
        <package.name>hello-world</package.name>
        <main.class>c8y.example.App</main.class>
    </properties>
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
                    </execution>
                    <execution>
                        <id>push</id>
                        <phase>package</phase>
                        <goals>
                            <goal>push</goal>
                        </goals>
                    </execution>
                    <execution>
                        <id>microservice-package</id>
                        <phase>package</phase>
                        <goals>
                            <goal>microservice-package</goal>
                        </goals>
                        <configuration>
                            <manifestFile>${basedir}/src/main/microservice/cumulocity.json</manifestFile>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

### Build microservice

To build the zip file use following command:

    $mvn clean install -Dskip.agent.package.container=false -Dskip.microservice.package=false

After a successful build you will be provided with a zip file in target directory. The zip can be deployed to the platform according to

## Improve the Microservice

Now that you have done your first step, check out the Section [Developing Java Microservice](/guides/java/developing-microservice).
