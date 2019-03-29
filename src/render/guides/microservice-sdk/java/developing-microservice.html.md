---
order: 40
layout: redirect
title: Developing Microservices
---

This document describes microservice SDK features, including annotations, services, configuration files, logging and maven build plugin.

### Overview

There are two possible deployment types on the platform:

* Hosted deployment - the default for microservices. For typical use cases the hosted deployment is the suggested one.
* External/legacy deployment - requires custom installation of the platform and agent.

For development and testing purposes one can deploy a microservice on a local docker. <!--The process is described in this document. Info is missing!-->


### Annotations

The simplest way to add required behavior to your application is to annotate a main class with @MicroserviceApplication.

This is a collective annotation consisting of:

* @SpringBootApplication - comes from spring boot auto configure package
* @EnableContextSupport - is required to use @UserScope, or @TenantScope scopes for method invocations
* @EnableHealthIndicator - provides standard health endpoint used by the platform to monitor microservice availability  
* @EnableMicroserviceSecurity - provides standard security mechanism, verifying user and roles against the platform
* @EnableMicroserviceSubscription - is responsible for subscribing microservices to the platform, updating metadata and listen to tenant subscription change events
* @EnableMicroservicePlatformInternalApi - injects the platform API services into spring context for a microservice to use

### Context support

The following section describes context support as utility tool for the user management described in [General aspects of microservices in Cumulocity](/guides/microservice-sdk/concept).

@UserScope and @TenantScope at type level annotation indicate that a bean created from class will be created in the scope defined. The user scope implies using tenant platform user credentials for platform calls. The tenant scope implies using service user credentials.

Example of injecting a bean into the tenant scope is available in the platform API module as follows:

    @TenantScope
    public EventApi eventApi(Platform platform) throws SDKException {
        return platform.getEventApi();
    }  

And then sample utilization of the bean can be as follows:

    @Autowired
    private PlatformProperties platformProperties;
    @Autowired
    private ContextService<MicroserviceCredentials> contextService;
    @Autowired
    private EventApi eventApi;

    public PagedEventCollectionRepresentation get10Events() {
        return contextService.callWithinContext(
                (MicroserviceCredentials) platformProperties.getMicroserviceBoostrapUser()
                , new Callable<PagedEventCollectionRepresentation>(){
            public PagedEventCollectionRepresentation call(){
                return eventApi.getEvents().get(10);
            }
        });
    }


### Microservice security

The @EnableMicroserviceSecurity annotation sets up the standard security configuration for microservices, which requires basic authorization for all endpoints (except for health check endpoint configured using @EnableHealthIndicator). A developer can secure its endpoints using standard spring security annotations e.g. @PreAuthorize("hasRole('ROLE_A')") and user's permissions will be validated  against user's roles stored on the platform.


### Microservice subscription

The microservice subscription module is responsible for two main features:

* registration
* tenant subscription event listening

The default behavior for the package is self-registration, which means that after you run the application it will try to register and use generated credentials for the communication with the platform. The self-registration is required to correctly deploy the microservice on the platform.

The other way to register an application to the platform is to do it manually by creating a new application on the platform with the same application name and providing the following properties into the microservice:

    application.name={application_name}
    C8Y.bootstrap.register=false
    C8Y.bootstrap.tenant={tenant}
    C8Y.bootstrap.user={user}
    C8Y.bootstrap.password={password}

To create an application and acquire credentials, refer to:

* [Create application](/guides/microservice-sdk/rest#creating-application)
* [Acquire microservice credentials](/guides/microservice-sdk/rest#acquiring-microservice-credentials)

The subscription package provides means to monitor and act upon changes in tenant subscriptions to a microservice. To add a custom behavior a developer can add an event listener for MicroserviceSubscriptionAddedEvent and MicroserviceSubscriptionRemovedEvent like in the following example:

    @EventListener
    public void onAdded(MicroserviceSubscriptionAddedEvent event{
        log.info("subscription added for tenant: " + event.getCredentials().getTenant());
    }

On application startup the MicroserviceSubscriptionAddedEvent is triggered for all subscribed tenants.


### Platform API

The package consists of a number of services that are build and injected into spring context. A developer can use them to perform basic operations against the platform. The beans are built based on properties read from a file. For hosted deployment, most of the properties are provided by the platform.

The API provides the following services:

* Alarm - AlarmApi
* AuditRecord - AuditRecordApi
* CepModule - CepApi
* Operation - DeviceControlApi
* Event - EventApi
* ExternalID - IdentityApi
* Binary - BinariesApi
* ManagedObject - InventoryApi
* Measurement - MeasurementApi

The API provides basic CRUD methods, see alarm interface example below:

    AlarmRepresentation create(final AlarmRepresentation alarm)
    Future createAsync(final AlarmRepresentation alarm)

    AlarmRepresentation getAlarm(final GId gid)
    AlarmCollection getAlarms()
    AlarmCollection getAlarmsByFilter(final AlarmFilter filter)

    AlarmRepresentation update(final AlarmRepresentation alarm)

Sample usage:

    @Autowired
    private AlarmApi alarms;

    public AlarmRepresentation addHelloAlarm(){
          AlarmRepresentation alarm = new AlarmRepresentation();
          alarm.setSeverity("CRITICAL");
          alarm.setStatus("Hello");
          return alarms.create(alarm);
    }


### Configuration files

The property file used by the hosted deployment must be located in src/main/resources/application.xml.

For external/legacy deployment, the following paths will be searched in order to find a property file specific for the environment the application is run on:
* {UPPERCASE(application_name)}_CONF_DIR/.{application_name}
* {UPPERCASE(application_name)}_CONF_DIR/{application_name}
* {user/home}/.{application_name}
* {user/home}/{application_name}
* {CONF_DIR}/.{application_name}
* {CONF_DIR}/{application_name}
* /etc/{application_name}

Properties used by a microservice are:

    application.name - Application name
    C8Y.bootstrap.register - Indicates whether microservice should follow self-registration process. True by default
    C8Y.baseURL - Address of the platform. Provided by the deployment process
    C8Y.baseURL.mqtt - Address of the MQTT service. Provided by the platform
    C8Y.bootstrap.tenant - Microservice owner tenant
    C8Y.bootstrap.user - User used by microservice, or by microservice registration process
    C8Y.bootstrap.password - Password used by microservice, or by microservice registration process
    C8Y.bootstrap.delay - Subscription refresh delay
    C8Y.bootstrap.initialDelay - Initial subscription delay
    C8Y.microservice.isolation - Microservice isolation. Only PER_TENANT or MULTI_TENANT values are available. MULTI_TENANT by default


### Logging

For hosted deployment the standard output should be used.

For external/legacy deployment logging into the application implies using spring logging described in [this article](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-logging.html).

The following locations are searched for log-back file:

* {UPPERCASE(application_name)}_CONF_DIR/.{application_name}/logging.xml
* {UPPERCASE(application_name)}_CONF_DIR/{application_name}/logging.xml
* {user/home}/.{application_name}/logging.xml
* {user/home}/{application_name}/logging.xml
* {CONF_DIR}/.{application_name}/logging.xml
* {CONF_DIR}/{application_name}/logging.xml
* /etc/{application_name}/logging.xml


### Maven plugin

The package module provides a maven plugin to prepare a ZIP file required by the microservice deployment, with simple configuration. The build requires an executable jar. To create one, a developer can use spring-boot-maven-plugin.

An example with minimum configuration is presented below:

    <plugin>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-maven-plugin</artifactId>
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
        <version>9.0.0</version>
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

#### Package goal

The package plugin is responsible for creation of a docker container, rpm file and for creating a ZIP file, that can be deployed on the platform.
It can be configured with the following parameters:

* name (alias package.name) - defaults to project.artifactId
*  description (alias package.description) - defaults to project.description
*  jvmArgs (alias agent-package.jvmArgs) - jvm-gc arguments. The default value is `-XX:+UseConcMarkSweepGC -XX:+CMSParallelRemarkEnabled -XX:+ScavengeBeforeFullGC -XX:+CMSScavengeBeforeRemark`". Will be overwritten if   other options are provided.
*  arguments (alias agent-package.arguments) - arguments passed on Java application startup
*  encoding (alias project.build.sourceEncoding)  - defaults to UTF-8
*  heap (alias agent-package.heap) - defaults to min = 128MB max = 384MB
*  perm (alias agent-package.perm) - defaults to min = 64MB max = 128MB
*  skip (alias skip.agent.package) - to skip the whole packaging part
*  rpmSkip (alias skip.agent.package.rpm) - to skip rpm file creation. False by default
*  containerSkip (alias skip.agent.package.container) - to skip docker image creation. True by default
* manifestFile - points to a manifest file location. Default value: ${basedir}/src/main/configuration/cumulocity.json

Example configuration:

    <configuration>
      <name>hello-world</name>
      <encoding>UTF-8</encoding>
      <rpmSkip>true</rpmSkip>
      <containerSkip>false</containerSkip>
      <manifestFile>${basedir}/src/main/microservice/cumulocity.json</manifestFile>
    </configuration>

#### Push goal

The push plugin is responsible for pushing the docker image to a registry. The registry can be configured by:

* containerSkip  (alias skip.agent.package.container) - prevents the push to execute.  True by default
* registry (alias agent-package.container.registry) - docker registry address

Example configuration:

	    <configuration>
	      <registry>http://{yourregistry.com}</registry>
	      <containerSkip>false</containerSkip>
	    </configuration>

#### Upload goal

Microservice upload goal is responsible for deploying the microservice to a server.

We have three options to configure server url and credentials:

* settings.xml - maven global configuration placed at ~/.m2/settings.xml
* pom.xml - maven project configuration file
* command line

All three ways can be used together, i.e. goal partially can be configured in settings.xml and partially in pom.xml.
In case of conflicts the command line configuration has the highest priority and settings xml configuration the lowest.

To upload a microservice to the server you need to configure the following properties:

* url - Mandatory URL that will be used for deployment. Empty by default.
* username - Mandatory tenant name and user name used for authorization. Empty by default.
* password - Mandatory password used for authorization. Empty by default.
* name - Optional name of uploaded application. By default the same as "package.name" property or "artifactId" if "package.name" is not provided.

#### settings.xml

To configure the goal in the settings.xml file we need to add the server configuration as follows:

    <server>
        <id>microservice</id>
        <username>demos/username</username>
        <password>******</password>
        <configuration>
            <url>https://demos.cumulocity.com</url>
        </configuration>
    </server>

#### pom.xml

To configure the plugin in the pom.xml file we need to add the server configuration as follows.

    <plugin>
        <groupId>com.nsn.cumulocity.clients-java</groupId>
        <artifactId>microservice-package-maven-plugin</artifactId>
        <configuration>
            <application>
                <name>cep</name>
            </application>

            <!-- please note that the credentials are optional if they are already configured in settings.xml -->
            <credentials>
                <url>https://demos.cumulocity.com</url>
                <username>demos/username</username>
                <password>******</password>
            </credentials>
        </configuration>
    </plugin>

##### Command line

To pass the configuration only to the particular build, run

    mvn microservice:upload -Dupload.application.name=cep -Dupload.url=https://demos.cumulocity.com -Dupload.username=demos/username -Dupload.password=******


### Deployment

#### Hosted deployment

> 	**Info**: For your convenience we have prepared a utility deployment script available [here](/guides/reference/microservice-package).

To deploy an application on an environment you need the following:

* URL address of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant ID
* ZIP build from previous step


**Step 1 - Create application**

If the application does not exist, create a new application on the platform:

    POST /application/applications
    Host: ...
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Content-Type: "application/json"

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
      "{URL}/application/applications"

If the application has been created correctly, you can get the application ID by invoking:

    GET /application/applicationsByName/{APPLICATION_NAME}
    Host: ...
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Accept: "application/json"

Example:

    curl -H "Authorization:{AUTHORIZATION}" \
     {URL}/application/applicationsByName/hello-world


**Step 2 - Upload zip file**

    POST /application/applications/{APPLICATION_ID}/binaries
    Host: ...
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Content-Type: "multipart/form-data"

Example:

	  curl -F "data=@{PATH_TO_ZIP}" \
	  -H "Authorization: {AUTHORIZATION}" \
	  "{URL}/application/applications/{APPLICATION_ID}/binaries"


**Step 3 - Subscribe to microservice**

    POST /tenant/tenants/$TENANT/applications
    Host: ...
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Content-Type: "multipart/form-data"

  BODY:

    {"application":{"id": "{APPLICATION_ID}"}}

  Example:

    curl -X POST -d "{"application":{"id": "{APPLICATION_ID}"}}"  \
    -H "Authorization: {AUTHORIZATION}" \
    -H "Content-type: application/json" \
     "{URL}/tenant/tenants/{TENANT}/applications"

#### Local docker deployment

To deploy the application on a local docker, one needs to inject the environment variables into a container. This is done via the docker run -e parameter. The full description of available parameters is available in [Microservice runtime > Environment variables](/guides/reference/microservice-runtime) in the Reference guide.

An example execution could be:

    docker run -e "C8Y_BASEURL={C8Y_BASEURL}" -e "C8Y_BASEURL_MQTT={C8Y_BASEURL_MQTT}" {IMAGE_NAME}


### Monitoring

To check if a hosted microservice is running successfully, the microservice's health endpoint can be checked.
This endpoint is enabled by default for all microservices that are developed using Java Microservice SDK.

    GET {URL}/service/{APPLICATION_NAME}/health

Example response:

    HTTP/1.1 200
    {
      "status":"UP"
    }

  or

    HTTP/1.1 503
    {
      "status":"DOWN"
    }
 
