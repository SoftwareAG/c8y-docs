---
order: 30
layout: redirect
title: Hello microservice!
---

This section shows you how to create a microservice that can be run on cumulocity.com, using Cumulocity Microservice SDK.

### Prerequisites

Create an account on cumulocity.com, for example by using a free trial. At this step you will be provided with a dedicated URL address.

Verify, that you have Maven 3 installed with Java (7+):

    $ mvn -v
    Apache Maven 3.1.1 (0728685237757ffbf44136acec0402957f723d9a; 2013-09-17 17:22:22+0200)
    Maven home: /usr/local/Cellar/maven/3.1.1/libexec
    Java version: 1.7.0_45, vendor: Oracle Corporation
    Java home: /Library/Java/JavaVirtualMachines/jdk1.7.0_45.jdk/Contents/Home/jre
    Default locale: en_US, platform encoding: UTF-8
    OS name: "mac os x", version: "10.9.4", arch: "x86_64", family: "mac"

>**Info:** Maven can be downloaded from [http://maven.apache.org](http://maven.apache.org).

Verify the docker installation:

Cumulocity hosts linux/amd64 docker containers and not Windows containers. The docker version must be >= 1.12.6

    $ docker version
    Client:
     Version:         1.12.6
     API version:     1.24
     OS/Arch:         linux/amd64

    Server:
     Version:         1.12.6
     API version:     1.24
     OS/Arch:         linux/amd64


### Developing the "Hello, world!" agent

To develop a very simple "Hello, world!" agent for Cumulocity, you need to

* create a Maven project,
* add a dependency to the Cumulocity Microservice SDK library to the Maven pom.xml,
* create a Java application,
* configure the microservice,
* configure the build,
* build and run the Java application.

#### Creating a Maven project

To create a plain Java project with Maven, run

	$ mvn archetype:generate -DgroupId=c8y.example -DartifactId=hello-world-microservice -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false

This will create a folder "hello-world-microservice" in the current directory with a skeleton structure for your project.

#### Adding the Java Microservice library

Edit the "pom.xml" in the "hello-world-microservice" folder. Add a `repositories` and a `pluginRepositories` element to point to the Cumulocity Maven repository, which stores the client libraries.

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


Add `dependency` elements for the Java Microservice SDK library (`microservice-autoconfigure`) to the `dependencies` section.

	<dependency>
		<groupId>com.nsn.cumulocity.clients-java</groupId>
		<artifactId>microservice-autoconfigure</artifactId>
		<version>${c8y.version}</version>
	</dependency>

Edit the `version` elements to use the latest version of the client library. The version can be determined by checking the [Announcements section](https://cumulocity.zendesk.com/hc/en-us/sections/200381323-Announcements) of the Cumulocity Help Center. The full file after editing can be found [here](/guides/microservice-sdk/java#developing-microservice).

#### Creating a Java application

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

@RequestMapping - opens an endpoint for greeting.

#### Configuring the microservice

Add an "application.properties" file to the "src/main/resources" directory with the following properties:

    application.name=hello-world
    server.port=80

Add a "cumulocity.json" file to the "src/main/configuration" directory with the following content:

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

#### Configuring the build

To create a deployable ZIP file, you need to add the following to your .pom file:

    <properties>
        <maven.compiler.source>1.7</maven.compiler.source>
        <maven.compiler.target>1.7</maven.compiler.target>
        <spring-boot-dependencies.version>1.5.7.RELEASE</spring-boot-dependencies.version>
        <c8y.version>9.8.0</c8y.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.nsn.cumulocity.clients-java</groupId>
            <artifactId>microservice-autoconfigure</artifactId>
        </dependency>
    </dependencies>

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
                            <name>hello-world</name>
                            <image>hello-world</image>
                            <encoding>UTF-8</encoding>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>    

### Building the microservice

To build the ZIP file, use the following command:

    $mvn clean install

After a successful build you will be provided with a ZIP file in the target directory. The ZIP can be deployed to the platform as described in the Deployment section.

### <a name="run-locally"></a> Running microservice locally

In order to test the microservice for the calls from the microservice to Cumulocity, you can run the docker container locally.

To verify calls from Cumulocity to the microservice, the microservice must be deployed.

To run a microservice which uses Cumulocity API locally you need the following:

* URL address of the Cumulocity host of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant ID

**Step 1 - Create application**

If the application does not exist, create a new application on a platform:

    POST {URL}/application/applications

HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-Type": "application/vnd.com.nsn.cumulocity.application+json"
    "Accept: application/vnd.com.nsn.cumulocity.application+json"

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
      -H "Content-Type: application/vnd.com.nsn.cumulocity.application+json" \
      -H "Accept: application/vnd.com.nsn.cumulocity.application+json" \
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

If the application has been created correctly, you can get the application ID from the response.

**Step 2 - Acquire microservice bootstrap user**

    GET {URL}/application/applications/{APPLICATION_ID}/bootstrapUser

HEADERS:

    "Authorization": {AUTHORIZATION}
    "Content-Type": application/vnd.com.nsn.cumulocity.user+json

Example response:

    HTTP/1.1 200 Ok
    Content-Type: application/vnd.com.nsn.cumulocity.user+json
    {
      "tenant": "...",
      "name": "...",
      "password": "..."
    }

**Step 3 - Run microservice locally**

The image is already added to the local docker repository during the build. List all the docker repository images available:

    $ docker images

After you find the image in the list, run the docker container for the microservice by providing the baseurl and the bootstrap user credentials:

    $ docker run -e C8Y_BASEURL={URL} -e C8Y_BOOTSTRAP_TENANT={BOOTSTRAP_TENANT} -e C8Y_BOOTSTRAP_USER={BOOTSTRAP_USERNAME} -e C8Y_BOOTSTRAP_PASSWORD={BOOTSTRAP_USER_PASSWORD} -e C8Y_MICROSERVICE_ISOLATION=MULTI_TENANT -i -t {DOCKER_REPOSITORY_IMAGE}:{TAG}

**Step 4 - Subscribe to microservice**
    
    POST {URL}/tenant/tenants/{TENANT_ID}/applications

  HEADERS:

    "Authorization": "{AUTHORIZATION}"

  BODY:

    {"application":{"id": "{APPLICATION_ID}"}}

  Example:

    curl -X POST -d "{"application":{"id": "{APPLICATION_ID}"}}"  \
    -H "Authorization: {AUTHORIZATION}" \
    -H "Content-type: application/json" \
     "{URL}/tenant/tenants/{TENANT_ID}/applications"


#### Deployment

To deploy a microservice application on an environment you need the following:

* URL address of the Cumulocity host of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant ID
* ZIP build from previous step for deployment

**Step 1 - Create application**

If the application does not exist, create a new application on a platform.
For details, refer to the "Create application" step in [Run microservice locally](#run-locally).

**Step 2 - Upload ZIP file**
       
	POST {URL}/application/applications/{APPLICATION_ID}/binaries

HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-Type": "multipart/form-data"

Example:

	  curl -F "data=@{PATH_TO_ZIP}" \
	  -H "Authorization: {AUTHORIZATION}" \
	  "{URL}/application/applications/{APPLICATION_ID}/binaries"

**Step 3 - Subscribe to microservice**
 
For details, refer to the "Subscribe to microservice" step in [Run microservice locally](#run-locally).

**Step 4 - Verify if microservice is running**

Now you can verify if your application is running by executing

    curl -H "Authorization: {AUTHORIZATION}" \
      {URL}/service/hello-world/hello?who=me

The expected result is:

    hello me!


### Improving the microservice

Now that you have done your first step, check out the section [Developing Java Microservice](/guides/microservice-sdk/java#developing-microservice).
