---
order: 43
layout: default
title: Developing Microservice
---
## Overview
This document describes microservice SDK features. Including annotations, services, configuration files, logging and maven build plugin.

There are two possible deployment types. Hosted deployment - default for microservices and External/Legacy deployment. The first one is automatic, and the latter requires custom installation. For typical problems the hosted deployment is the suggested one.

## Annotations
The simplest way to add required behavior to your application is to annotate main class with @MicroserviceApplication. This is a collective annotation consisting of:
* @SpringBootApplication - comes from spring boot auto configure package.
* @EnableContextSupport - this annotation is required to use @UserScope, or @TenantScope scopes for method invocations.
* @EnableHealthIndicator - provides standard health endpoint used by platform to monitor microservice availability  
* @EnableMicroserviceSecurity - provides standard security mechanism, verifying user and roles against platform
* @EnableMicroserviceSubscription - is responsible for subscribing microservice to the platform, updating metadata and listen to tenant subscription change events.  
* @EnableMicroservicePlatformInternalApi - injects the platform API services into spring context for a microservice to use.

## Context Support

@UserScope and @TenantScope at type level annotation indicate that a bean created from class will be created in the scope defined. The user scope implies using user credentials to authorize against platform. The tenant scope implies using microservice credentials.

Example of injecting bean into tenant scope is available in Platform Api module as follows:

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

## Microservice Security

The @EnableMicroserviceSecurity annotation sets up the standard security configuration for microservice, which requires basic authorization for all endpoints (except for health check endpoint configured using @EnableHealthIndicator). A developer can secure it's endpoints using standard spring security annotations e.g. @PreAuthorize("hasRole('ROLE_A')") and user's permissions will be validated  against user's roles stored on the platform.

## Microservice Subscription

The microservice subscription module is responsible for two main features:
* registration
* tenant subscription event listening

The default behavior for the package is self-registration which means, that after you run the application it will try to register and use generated credentials for communication with the platform. The self-registration is required to correctly deploy the microservice on the platform.

The other way to register application to platform is to do it manually by creating a new application on the platform with same application name and providing following properties into microservice:

    application.name={application_name}
    C8Y.bootstrap.register=false
    C8Y.bootstrap.tenant={tenant}
    C8Y.bootstrap.user={user}
    C8Y.bootstrap.password={password}


The subscription package provides means to monitor and act upon changes in tenant subscriptions to microservice. To add a custom behavior a developer can add an event listener for MicroserviceSubscriptionAddedEvent and MicroserviceSubscriptionRemovedEvent like in a following example:

    @EventListener
    public void onAdded(MicroserviceSubscriptionAddedEvent event{
        log.info("subscription added for tenant: " + event.getCredentials().getTenant());
    }

On the application startup the MicroserviceSubscriptionAddedEvent is triggered for all subscribed tenants.

## Platform API
The package consists of number of services that are build and injected into spring context. A developer can use them to perform basic operations against platform. The beans are built based on properties read from file. For Hosted deployment, most of the properties are provided by the platform.

The API prvides following services:
* Alarm - AlarmApi
* AuditRecord - AuditRecordApi
* CepModule - CepApi
* Operation - DeviceControlApi
* Event - EventApi
* ExternalID - IdentityApi
* Binary - BinariesApi
* ManagedObject - InventoryApi
* Measurement - MeasurementApi

API provides basic CRUD methods, below presented Alarms interface example:

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

## Configuration files
Property file used by hosted deployment must be placed in src/main/resources/application.yml

For External/Legacy deployment following paths will be searched in order to find a property file specific for the environment the application is run on:
* {UPPERCASE(application_name)}_CONF_DIR/.{application_name}
* {UPPERCASE(application_name)}_CONF_DIR/{application_name}
* {user/home}/.{application_name}
* {user/home}/{application_name}
* {CONF_DIR}/.{application_name}
* {CONF_DIR}/{application_name}
* /etc/{application_name}

Properties used by microservice are:

    application.name - Aplication name
    C8Y.bootstrap.register - Indicates whether microservice should follow self-registration process. True by default
    C8Y.baseURL - Address of the platform. Provided by the deployment process
    C8Y.baseURL.mqtt - Address of the mqtt service. Provided by the platform
    C8Y.bootstrap.tenant - Microservice owner tenant
    C8Y.bootstrap.user - User used by microservice, or by microservice registration process
    C8Y.bootstrap.password - Password used by microservice, or by microservice registration process
    C8Y.bootstrap.delay - Subscription refresh delay
    C8Y.bootstrap.initialDelay - Initial subscription delay
    C8Y.microservice.isolation - Microservice isolation only PER_TENANT or MULTI_TENANT values are available.

# Logging
For hosted deployment the standard output should be used.

For external/legacy deployment logging in the application implies using spring logging described in [this article](https://docs.spring.io/spring-boot/docs/current/reference/html/howto-logging.html).Following locations are searched for logback file:
* {UPPERCASE(application_name)}_CONF_DIR/.{application_name}/logging.xml
* {UPPERCASE(application_name)}_CONF_DIR/{application_name}/logging.xml
* {user/home}/.{application_name}/logging.xml
* {user/home}/{application_name}/logging.xml
* {CONF_DIR}/.{application_name}/logging.xml
* {CONF_DIR}/{application_name}/logging.xml
* /etc/{application_name}/logging.xml

# Maven plugin
The package module provides maven plugin to prepare a zip file required by microservice deployment, with simple configuration. The build requires an executable jar, to make one a developer can use spring-boot-maven-plugin. Example with minimum configuration is presented below


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
        <version>8.20.0-SNAPSHOT</version>
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
The package plugin is responsible for creation of a docker container and rpm file. It can be configured with following parameters:

* name (alias package.name) - Default to project.artifactId
*  description (alias package.description) - Default to project.description
*  jvmArgs (alias agent-package.jvmArgs) - jvm-gc arguments
*  arguments (alias agent-package.arguments) - Arguments passed on java application startup
*  encoding (alias project.build.sourceEncoding)  - Default to UTF-8
*  heap (alias agent-package.heap) - Default to min = 128MB max = 384MB
*  perm (alias agent-package.perm) - Default to min = 64MB max = 128MB
*  skip (alias skip.agent.package) - To skip the whole packaging part
*  rpmSkip (alias skip.agent.package.rpm) - To skip rpm file creation. False by default
*  containerSkip (alias skip.agent.package.container) - To skip docker image creation. True by default

Example configuration:

    <configuration>
      <name>hello-world</name>
      <encoding>UTF-8</encoding>
      <rpmSkip>true</rpmSkip>
      <containerSkip>false</containerSkip>
    </configuration>

#### Push goal
The push plugin is responsible for pushing the docker image to a registry. The registry can be configured by:

* containerSkip  (alias skip.agent.package.container) - Prevents the push to execute.  True by default
* registry (alias agent-package.container.registry) - Docker registry address


    <configuration>
      <registry>http://{yourregistry.com}</registry>
      <containerSkip>false</containerSkip>
    </configuration>

#### Microservice-package goal
Microservice-package plugin is responsible for creating zip file, that can be deployed on the platform. It can be configured by:

* skip (alias skip.microservice.package) - Skip the zip creation. True by default.
* manifestFile - Points to a manifest file location. Default value: ${basedir}/src/main/configuration/cumulocity.json


    <configuration>
      <skip>false</registry>
      <manifestFile>${basedir}/src/main/microservice/cumulocity.json</manifestFile>
    </configuration>

#### Microservice-deploy goal
Microservice-deploy is responsible for deploying the microservice to a server, defined in standard maven settings.xml file. The plugin can be configured by:

* skip (alias skip.microservice.deploy) - Indicates whether the deploy should be skipped or not. True by default
* serviceId (alias serviceId) - Service id that will be used for the deployment. default value: "microservice".


    <configuration>
      <serviceId>microservice</serviceId>
      <skip>false</skip>
    </configuration>
