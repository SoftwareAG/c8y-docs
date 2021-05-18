---
weight: 50
title: Configuring Karaf
layout: redirect
---

### Increasing the system performance

If the system performance is slow, you must increase the memory. Stop the Edge appliance and increase the memory of the Edge appliance using the hypervisor.

<img src="/images/edge/edge-vm-increasing-memory.png" name="Increasing memory"/>

Increasing the memory of the Edge appliance must be followed by increasing the memory of the JVM. 

To increase the memory of the JVM:

1. Start the Edge appliance.
2. Log in to Edge appliance.
3. Open the file */usr/share/cumulocity-core-karaf/bin/setenv*.
4. Edit the value of the parameter `JAVA_MAX_MEM`. The default size is 1024 MB.

	export JAVA_MAX_MEM=1024M # Maximum memory for the JVM

After increasing the size, restart Karaf:

```shell
[admin@iot-edge-server ~]$  sudo service cumulocity-core-karaf stop
```

and

```shell
[admin@iot-edge-server ~]$  service cumulocity-core-karaf start
```

### Changing log level for Karaf

This section describes how to change the log level for Cumulocity IoT specific applications on the backend side. It does not explain how to change log settings for standard components like databases or other operating system related services.

The log level for Karaf is defined in the following file.

	/usr/share/cumulocity-core-karaf/etc/org.ops4j.pax.logging.cfg

The file has the following structure:

	# Root logger
	log4j.rootLogger=INFO,out,osgi:*
	log4j.throwableRenderer=org.apache.log4j.OsgiThrowableRenderer

	# Error appender
	log4j.appender.out=org.apache.log4j.rolling.RollingFileAppender
	log4j.appender.out.rollingPolicy=org.apache.log4j.rolling.FixedWindowRollingPolicy
	log4j.appender.out.rollingPolicy.maxIndex=10
	log4j.appender.out.triggeringPolicy=org.apache.log4j.rolling.SizeBasedTriggeringPolicy
	log4j.appender.out.triggeringPolicy.MaxFileSize=104857600
	log4j.appender.out.rollingPolicy.FileNamePattern=${karaf.data}/log/error-%i.log.gz
	log4j.appender.out.rollingPolicy.ActiveFileName=${karaf.data}/log/error.log
	log4j.appender.out.layout=org.apache.log4j.PatternLayout
	log4j.appender.out.layout.ConversionPattern=%d{yyyy-MM-dd} %d{HH:mm:ss}  | %-5.5p | %-16.16t | %-32.32c{1} | %X{bundle.id} - %X{bundle.name} - %X{bundle.version} | %m%n
	log4j.appender.out.append=true

	# CXF request and response info:
	# * ERROR - none
	# * INFO - just headers (default)
	# * DEBUG - whole, with payloads
	log4j.additivity.com.cumulocity.rest.interceptors=false
	log4j.logger.com.cumulocity.rest.interceptors=INFO,access

	# Access appender
	log4j.appender.access=org.apache.log4j.rolling.RollingFileAppender
	log4j.appender.access.rollingPolicy=org.apache.log4j.rolling.FixedWindowRollingPolicy
	log4j.appender.access.rollingPolicy.maxIndex=10
	log4j.appender.access.triggeringPolicy=org.apache.log4j.rolling.SizeBasedTriggeringPolicy
	log4j.appender.access.triggeringPolicy.MaxFileSize=262144000
	log4j.appender.access.rollingPolicy.FileNamePattern=${karaf.data}/log/access-%i.log.gz
	log4j.appender.access.rollingPolicy.ActiveFileName=${karaf.data}/log/access.log
	log4j.appender.access.layout=org.apache.log4j.PatternLayout
	log4j.appender.access.layout.ConversionPattern=%d{yyyy-MM-dd} %d{HH:mm:ss}  | %-5.5p | %-16.16t | %-32.32c{1} | %X{bundle.id} - %X{bundle.name} - %X{bundle.version} | %m%n
	log4j.appender.access.append=true

	# Error response info:
	# * INFO - just error message (default)
	# * DEGUB - full stack trace
	log4j.logger.com.cumulocity.rest.mediatypes=INFO


Change the following entries to adjust the log levels:

	log4j.rootLogger=INFO,out,osgi:*

	log4j.logger.com.cumulocity.rest.interceptors=INFO,access

	log4j.logger.com.cumulocity.rest.mediatypes=INFO

Adjust the log levels by changing the level attribute according to the following values. The levels are inclusive - meaning a given level will also include all “lower” log levels, e.g. when you set the level to WARN you will also get ERROR events.

|Level|Description|
|:---|:---
|ERROR|Log errors only
|WARN|Give information up to warnings
|INFO|Give information about normal operations
|DEBUG|Log all internal debug information

Save the file. It is re-read by the application every few minutes so you do not have to restart the Java process.