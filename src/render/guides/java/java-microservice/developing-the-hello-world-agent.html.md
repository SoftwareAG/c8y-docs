---
order: 20
layout: redirect
title: Developing the "Hello, world!" agent
---

To develop a very simple "Hello, world!" agent for Cumulocity, you need to

* create a Maven project,
* add a dependency to the Cumulocity Microservice SDK library to the Maven pom.xml,
* create a Java application,
* configure the microservice,
* configure the build,
* build and run the Java application.

### Create a Maven project

To create a plain Java project with Maven, run

	$ mvn archetype:generate -DgroupId=c8y.example -DartifactId=hello-world-microservice -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

This will create a folder "hello-world-microservice" in the current directory with a skeleton structure for your project.

### Add the Java Microservice library

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


@MicroserviceApplication - is a simple way to add required behavior for Cumulocity Microservice, including:

  * security
  * subscription
  * health indicator
  * context
  * internal platform API
  * spring boot application

@RequestMapping - opens an endpoint for greeting

### Configure the microservice

Add an application.properties file to the "src/main/resources" directory with the following properties:

    application.name=hello-world
    server.port=80

Add a cumulocity.json file to the "src/main/configuration" directory with the following content:

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

This file is required to deploy the microservice in the Cumulocity infrastructure.

### Configure the build

To create a deployable zip file, you need to add the following to your pom file:

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