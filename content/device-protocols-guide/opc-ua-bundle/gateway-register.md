---
weight: 20
title: Gateway configuration and registration
layout: redirect
---


YAML file and spring profiles are used for the configuration of the gateway. A default configuration file is embedded in the gateway JAR file, so you only need to set the properties which are different from the default.

> **Important**: When editing the YAML file, make sure to provide valid indentations.

To run the gateway locally, the default settings should be overridden in a customized profile. To use the customized profile, create a YAML file which must follow the naming convention:

    application-<<Profile_name>>.yaml

For example, to connect to a tenant, first a profile named *application-myTenant.yaml* will be created. The following properties will be added to the file:

```bash
C8Y:
    baseUrl: https://<<yourTenant>>.cumulocity.com
gateway:
    bootstrap:
        tenantId: <<yourTenantId>>
    identifier: Gateway_Device
    name: My Gateway
    db:
# The gateway uses the local database to store platform credentials and local cache. This parameter shows the location in which the local data should be stored.
        baseDir: C:/Users/<<userName>>/.opcua/data
```

> **Info:** Windows OS is used for the example.

#### Configuration profile location on the filesystem

The configuration profile can be stored either in the *same directory as the JAR file* or in a *default configuration directory*.
Depending on the operating system, the following default configuration directories can be used:

```
Windows OS
    /C:/opcua/
Linux OS
    /etc/opcua/
    /etc/opcua/data
Mac OS
    /opt/opcua/
    /opt/opcua/data
```

The number of profiles you may have is not limited. To use a specific profile on runtime, the "-Dspring.profiles.active" JVM argument has to be passed when running the gateway JAR file. For example, let’s use the previously created profile. Start a terminal and use the following command:

```bash
java -jar opcua-device-gateway-<<version>>.jar --spring.profiles.active=default,myTenant
```
The command above will start a gateway with the default profile and it will override the default properties with the properties defined in the “myTenant” profile. The list of profiles has to be provided as an ordered, comma-separated list. The default profile always needs to be the first profile in the list.

**Optional**: To specify your own configuration, Spring arguments can be used in your terminal to run the gateway JAR file. Multiple locations have to be comma-separated. The configuration locations should be either YAML files or directories. In case of directories, they must end with “/”. For example:

```bash
java -jar opcua-device-gateway-<<version>>.jar --spring.config.location=file:<<location>>/.opcua/conf/application-myTenant.yaml,file:<<location>>/.opcua/conf/
```

If both arguments "--spring.config.location" and "--spring.profiles.active" are provided, the configuration locations should be directories instead of files. Otherwise, the profile-specific variants will not be considered.

### Additional customizations

> **Info**: If no additional customizations are required, you can skip this section.

The following properties can be manually configured in the YAML file:

```bash
# Name of the application - this should not change
name: opcua-device-gateway
# Platform location and configuration
C8Y:
  baseUrl: http://localhost
  forceInitialHost: true

gateway:
# Gateway version - this is filled automatically during the build process - do not change this property
  version: ${project.version}
# The following two properties will be set to the name of the user that is running the gateway unless it's overridden manually
  identifier: mygateway
  name: mygateway
  db:
# The gateway uses the local database to store platform credentials and local cache. This parameter shows the location in which the local data should be stored.
    baseDir: ${user.home}/.opcua/data

# Credentials for device bootstrap - enter tenant that gateway should register to.
  bootstrap:
# ID of the tenant to which the device will be registered.
    tenantId: management
    username: devicebootstrap
    password: <devicebootstrap user password>
# On start, the gateway will wait <delay> milliseconds before connecting to the platform and searching for a      device.
    delay: 5000
# If true then gateway will drop stored device credentials and fetch them from platform
    force: false

# Scheduled tasks and thread pools configuration. Unless required, modifying these properties is not recommended.
  scheduler:
    threadpool:
      size: 10
  executor:
    threadpool:
      coreSize: 5
      maxSize: 20
# mappings execution thread pool configuration. Unless required, modifying these properties is not recommended.
  mappingExecution:
    http:
      connectionRequestTimeout: 3000
      connectionTimeout: 3000
      socketTimeout: 5000
    refreshInterval: 60000
    threadpool:
      size: 200
  cyclicRead:
    threadpool:
      size: 30
  subscription:
    reportingRate: 100
    maxKeepAliveCount: 200
# Should be at least 3 times greater than maxKeepAliveCount
    lifetimeCount: 600
# Repositories thread pool configuration. Unless required, modifying these properties is not recommended.

  repositories:
    flushInterval: 10000
    eventsThreadpool: 30
    alarmsThreadpool: 30
    measurementsThreadpool: 60
# Platform connection configuration. Unless required, modifying these properties is not recommended.

  platform:
    connectionPool:
      max: 250
      perHost: 150
# Monitoring interval - how often in milliseconds gateway sends monitoring data to Cumulocity IoT.
  monitoring:
    # This parameter describes how often in milliseconds the gateway sends monitoring data to Cumulocity IoT.
    interval: 10000
# Time after which the gateway will publish a snapshot of values for the UI to the server.
  valueMap:
    lifeTime: 30

# How often (in milliseconds) gateway checks for changes in configured servers.
  childrenAddedOrRemoveCheck:
    interval: 30000

# Interval in milliseconds after which the gateway will read pending operations from the platform.
  shortPolling:
    enabled: true
    fixedDelay: 15000

# Time in days for which the certificate is valid.
  applicationIdentity:
    validityTime: 3650
```

### Logging

Custom logging configuration can be set during startup by passing the "-Dlogging.config" jvm argument. For more info on how to set up custom logging settings, refer to the “Logback” documentation.
