---
weight: 30
layout: redirect
title: Hello world tutorial
---

Here you will learn how to create your first microservice that can be run on the [Cumulocity platform](https://cumulocity.com) using the Microservice SDK for Java.

### Prerequisites

Create an account on the [Cumulocity platform](https://cumulocity.com), for example by using a free trial. At this step you will be provided with a dedicated URL address.

Use the following command to verify that you have Maven 3 installed with Java 7 or later.

```shell
$ mvn -v
Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 17:22:22+0200)
Maven home: /usr/local/Cellar/maven/3.1.1/libexec
Java version: 1.7.0_45, vendor: Oracle Corporation
Java home: /Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk/Contents/Home/jre
```

Maven can be downloaded from the [Maven website](http://maven.apache.org). You will also need a Docker installation, and in case that you don't have it, go to the [Docker website](https://www.docker.com/get-started) to download and install it.

Cumulocity hosts linux/amd64 Docker containers and not Windows containers. The Docker version must be 1.12.6 or above. Use the following command to verify your Docker installation:

```shell
$ docker version
Client: Docker Engine - Community
 Version:           18.09.2
 API version:       1.39
 OS/Arch:           darwin/amd64

Server: Docker Engine - Community
 Engine:
  Version:          18.09.2
  API version:      1.39 (minimum version 1.12)
  OS/Arch:          linux/amd64
```

### Developing the "Hello world" microservice

To develop a very simple "Hello world" microservice for Cumulocity, you need to

* create a Maven project,
* configure the _pom.xml_ file including a dependency to the Cumulocity Microservice SDK library,
* create a Java application,
* configure the microservice,
* configure the build,
* build and run the Java application.

#### Creating a Maven project

Execute the following Maven command to create a plain Java project:

```shell
$ mvn archetype:generate -DgroupId=c8y.example -DartifactId=hello-world-microservice -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false
```

This will create a folder *hello-world-microservice* in the current directory with a skeleton structure for your project.

#### Adding the Java Microservice library

Inside the _hello-world-microservice_ folder you will find the _pom.xml_ file. Start editing this file by adding a properties element as follows:

```xml
<properties>
    <maven.compiler.source>1.7</maven.compiler.source>
    <maven.compiler.target>1.7</maven.compiler.target>
    <spring-boot-dependencies.version>1.5.7.RELEASE</spring-boot-dependencies.version>
    <c8y.version>9.16.2</c8y.version>
    <microservice.name>my-first-microservice</microservice.name>
</properties>
```

Edit the `<c8y.version>` element to use the latest version of the client library. It may be obtained by reviewing the [Release notes](https://cumulocity.com/guides/release-notes/overview/). This particular example was implemented using version 9.16.2.

Now add repository and plugin elements to point to the Cumulocity Maven repository which stores the client libraries.

```xml
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
```

Also add a dependency element for the Java Microservice SDK library inside the `<dependencies>` node.

```xml
<dependency>
	<groupId>com.nsn.cumulocity.clients-java</groupId>
	<artifactId>microservice-autoconfigure</artifactId>
</dependency>
```

#### Creating a Java application

Edit the _App.java_ file located in the folder *hello-world-microservice/src/main/java/c8y/example* with the following content:

```java
package c8y.example;

import com.cumulocity.microservice.autoconfigure.MicroserviceApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@MicroserviceApplication
@RestController
public class App {
    public static void main (String[] args) {
        SpringApplication.run(App.class, args);
    }

    @RequestMapping("hello")
    public String greeting (@RequestParam(value = "name", defaultValue = "World") String you) {
        return "Hello " + you + "!";
    }
}
```

The code uses four annotations; three are part of the Spring Framework and one of the Cumulocity Microservice SDK. The `@RestController` annotation marks the class as a controller where every method returns a domain object instead of a view. The `@RequestMapping` annotation ensures that HTTP requests to <kbd>hello</kbd> endpoint are mapped to the `greeting()` method. `@RequestParam` binds the value of the query string parameter <kbd>name</kbd> into the `you` parameter of the `greeting()` method. Refer to the [Spring Guides](https://spring.io/guides) for more details about building RESTful Web Services using the Spring Framework.

Employing the `@MicroserviceApplication` annotation is a simple way to add required behavior for Cumulocity microservices including:

* Security
* Subscription
* Health endpoint at <kbd>/service/&lt;microservice-name>/health</kbd>
* Context
* Settings
* Internal platform API
* Spring Boot application

#### Configuring the microservice

Add an _application.properties_ file to the _src/main/resources_ directory with the following properties:

```properties
application.name=my-first-microservice
server.port=80
```

Add a _cumulocity.json_ file to the _src/main/configuration_ directory with the following content:

```json
{
  "apiVersion": "1",
  "version": "@project.version@",
  "provider": {
    "name": "Cumulocity GmbH"
  },
    "isolation": "MULTI_TENANT",
    "requiredRoles": [
    ],
    "roles": [
    ]
}
```

This is the [Manifest](/guides/microservice-sdk/concept/#manifest) file and it is required to deploy the microservice in the Cumulocity platform.

#### Configuring the build

To create a deployable ZIP file, you need to add the following code to your _pom.xml_ file:

```xml
<dependencyManagement>
    <dependencies>
        <!-- microservice api -->
        <dependency>
            <groupId>com.nsn.cumulocity.clients-java</groupId>
            <artifactId>microservice-dependencies</artifactId>
            <version>${c8y.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>

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
        </plugin>
        <plugin>
            <groupId>com.nsn.cumulocity.clients-java</groupId>
            <artifactId>microservice-package-maven-plugin</artifactId>
            <version>${c8y.version}</version>
            <executions>
                <execution>
                    <id>package</id>
                    <phase>package</phase>
                    <goals>
                        <goal>package</goal>
                    </goals>
                    <configuration>
                        <name>${microservice.name}</name>
                        <image>${microservice.name}</image>
                        <encoding>UTF-8</encoding>
                    </configuration>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>    
```

### Building the microservice

In a terminal, navigate to the folder where your _pom.xml_ is located and execute the following Maven command. Note that after a successful build you will find a ZIP file inside the _target_ directory.

```shell
$ mvn clean install
```

### <a name="run-locally"></a> Running the microservice locally

You can run the Docker container locally in order to test the REST calls from the microservice to Cumulocity.

The microservice must be deployed to verify the REST calls from Cumulocity to the microservice.

To run a microservice which uses the Cumulocity API locally, you need:

* A valid tenant, a user and a password in order to access Cumulocity.
* An authorization header as "Basic &lt;Base64(&lt;tenantID>/&lt;username>:&lt;password>)>".

For instance, if your tenant ID, username and password are **tenant**, **testuser** and **secret123** respectively, you can get the Base64 string with the following command:

```shell
$ echo -n tenant/testuser:secret123 | base64
dGVuYW50L3Rlc3R1c2VyOnNlY3JldDEyMw==
```

and your authorization header would look like `"Authorization": "Basic dGVuYW50L3Rlc3R1c2VyOnNlY3JldDEyMw=="`.

#### Step 1 - Create the application

If the application does not exist, create a new application on the Cumulocity platform employing a POST request.

```http
POST <URL>/application/applications

HEADERS:
  "Authorization": "<AUTHORIZATION>"
  "Content-Type": "application/vnd.com.nsn.cumulocity.application+json"
  "Accept: application/vnd.com.nsn.cumulocity.application+json"

BODY:
{
  "name": "<APPLICATION_NAME>",
  "type": "MICROSERVICE",
  "key": "<APPLICATION_NAME>-microservice-key"
}
```

You have to replace the values `<URL>` with the URL of your Cumulocity tenant, `<AUTHORIZATION>` is Basic with a Base64 encoded string, and for `<APPLICATION_NAME>` use the desired name for your microservice application and its `key` name.

> **Important**: When naming your microservice application use only lower-case letters, digits and dashes. The maximum length for the name is 23 characters.

The `curl` command can be used to create the application with a POST request:

```shell
$ curl -X POST -s \
  -d '{"name":"my-first-microservice","type":"MICROSERVICE","key":"my-hello-world-ms-key"}' \
  -H "Authorization: <AUTHORIZATION>" \
  -H "Content-Type: application/vnd.com.nsn.cumulocity.application+json" \
  -H "Accept: application/vnd.com.nsn.cumulocity.application+json" \
  "<URL>/application/applications"
```

In case of errors, e.g. invalid names, you will get the details printed in the console. When the application is created successfully, you will get a response in JSON format as the following example:

```json
{
  "id": "<APPLICATION_ID>",
  "key": "my-hello-world-ms-key",
  "name": "my-first-microservice",
  "type": "MICROSERVICE",
  "availability": "PRIVATE",

  "self": "<URL>/application/applications/<APPLICATION_ID>",

  "owner": {
    "self": "...",
    "tenant": {
      "id": "<TENANT>"
    }
  },
  "requiredRoles": [],
  "manifest": {
    "noAppSwitcher": true
  },
  "roles": [],
  "contextPath": "my-first-microservice"
}
```

In the Administration application, navigate to **Applications** > **Own applications**. There you will see the newly created microservice.

![Hello World of Microservices](/guides/images/microservices-sdk/admin-first-microservice.png)


#### Step 2 - Acquire the microservice bootstrap user

You will need the bootstrap user credentials in order to run the microservice locally. Get the details of your bootstrap user with a GET request as follows:

```http
GET <URL>/application/applications/<APPLICATION_ID>/bootstrapUser

HEADERS:
  "Authorization": <AUTHORIZATION>
  "Content-Type": application/vnd.com.nsn.cumulocity.user+json
```

> **Info**: Besides the `curl` command, you can also employ a graphical interface such as Postman.


#### Step 3 - Run the microservice locally

The Docker image was built and added to the local Docker repository during the Maven build. You can list all the Docker images available with the following command:

```shell
$ docker images
```

Get your image ID and tag from the list. While not strictly a means of identifying a container, you can specify a version of an image you would like to run the container with. Run the Docker container for the microservice also providing the URL of your tenant and the bootstrap user credentials. Do not forget to expose the port 80 to a port on your host system, e.g. 8082.

```shell
$ docker run -p 8082:80 -e C8Y_BOOTSTRAP_TENANT=<BOOTSTRAP_TENANT> -e C8Y_BOOTSTRAP_USER=<BOOTSTRAP_USERNAME> -e C8Y_BOOTSTRAP_PASSWORD=<BOOTSTRAP_USER_PASSWORD> -e C8Y_MICROSERVICE_ISOLATION=MULTI_TENANT -i -t -e C8Y_BASEURL=<URL> <DOCKER_REPOSITORY_IMAGE>:<TAG>
```

If your Docker image has run successfully, you shall see the output on the console similar to the one below.

```shell
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v1.5.7.RELEASE)

2019-03-01 13:57:13.638  INFO 8 --- [main] c8y.example.App                          : Starting App on 855d1971889b with PID 8 (/data/my-first-microservice.jar started by root in /)

...

2019-03-01 13:57:24.728  INFO 8 --- [main] s.b.c.e.t.TomcatEmbeddedServletContainer : Tomcat started on port(s): 80 (http)
2019-03-01 13:57:24.750  INFO 8 --- [main] c8y.example.App                          : Started App in 12.044 seconds (JVM running for 12.911)
```

At this point, you may open your favorite browser and test your microservice at [http://localhost:8082/hello](http://localhost:8082/hello). Enter your bootstrap user credentials using &lt;tenant>/&lt;username> and your password. You shall see a response message in JSON format like "Microservice my-first-microservice is not subscribed by tenant".


#### Step 4 - Subscribe to the microservice

In the Administration application, navigate to **Applications** > **Own applications**. Locate your microservice application and click it to open its details. On the top right side click **Subscribe**.

![Subscribe to a microservice](/guides/images/microservices-sdk/admin-microservice-subscribe.png)

Now you can test your microservice locally using the endpoint <kbd>/hello</kbd> and with a parameter, e.g. <kbd>/hello?name=Neo</kbd>.

It is also possible to subscribe to the microservice with a POST request:

```http
POST <URL>/tenant/tenants/<TENANT_ID>/applications

HEADERS:
  "Authorization": "<AUTHORIZATION>"

BODY:
  {
    "application": {
        "id": "<APPLICATION_ID>"
    }
  }
```

### Deployment

Once you have tested your microservice locally, you can deploy it on the Cumulocity platform and you need:

* A valid tenant, a user and a password in order to access Cumulocity.
* An authorization header as "Basic &lt;Base64(&lt;username>:&lt;password>)>".
* The application created on the previous steps.
* The ZIP file built with Maven on the previous steps.

You need to upload the ZIP file to the Cumulocity platform and this might require some seconds, depending on your internet connection. Make a POST request to upload your ZIP file as follows:

```http
POST <URL>/application/applications/<APPLICATION_ID>/binaries

HEADERS:
  "Authorization": "<AUTHORIZATION>"
  "Content-Type": "multipart/form-data"
```

Example:

```shell
$ curl -F "data=@<PATH_TO_YOUR_ZIP_FILE>" \
	     -H "Authorization: <AUTHORIZATION>" \
	     "<URL>/application/applications/<APPLICATION_ID>/binaries"
```

> **Important**: The **Microservice hosting** feature must be activated on your tenant, otherwise your request will return an error message like "security/Forbidden, access is denied". This feature is not assigned to tenants by default, so trial accounts won't have it. Contact us via [Empower Portal](https://empower.softwareag.com) so that we can assist you with the activation. Note that this is a paid feature.

It is also possible to upload the ZIP file directly on your tenant. In the Administration application, navigate to **Applications** > **Own applications**, click **Add application** and select **Upload microservice** from the options list.

![Upload microservice](/guides/images/microservices-sdk/admin-microservice-upload.png)

Locate the ZIP file of your microservice application and click **Subscribe** to subscribe the microservice afterwards.

![Subscribe microservice](/guides/images/microservices-sdk/admin-microservice-subscribe-up.png)

Once the ZIP file has been uploaded successfully, you will see a new microservice application created.

#### Test the deployed microservice

The `curl` command can be used to verify that the microservice is up and running using the <kbd>/health</kbd> endpoint:

```shell
$ curl -H "Authorization: <AUTHORIZATION>" \
       <URL>/service/my-first-microservice/health
```

You can also test your microservice with your favorite browser. Remember to enter your user credentials using &lt;tenant>/&lt;username> and your password.

### Improving the microservice

Now that you have done your first steps, check out the section [Developing microservices](/guides/microservice-sdk/java#developing-microservice) to find out what else can be implemented. Review also the [Java example](/guides//microservice-sdk/http) in this guide to learn using more features of the microservice SDK and REST API by employing third-party services.
