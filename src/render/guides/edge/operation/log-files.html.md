---
order: 60
title: Log files
layout: redirect
---

### Log level locations

The solution stores log files at the following locations for the different nodes. 

#### Core node log file locations

|Directory|Files|Usage|
|:---|:---|:---
|/var/log/cumulocity|access.log<br> error.log <br>karaf.log<br> mqtt.log|logfile for client access<br> logfile for errors and general informations<br> logfile for the Karaf Container<br> logfile for mqtt protocol communication
|/var/log/nginx|access.log<br> error.log|logfile for client access<br> logfile for nginx errors
|/var/log|messages|general log file, contains also the messages from HAProxy

#### Apama log file locations

|Directory|Files|Usage|
|:---|:---|:---
|/opt/softwareag/cumulocity-apama-rules/deploy/logs/|correlator.log|Apama log file

#### MongoDB log file locations

|Directory|Files|Usage|
|:---|:---|:---
|/var/log/mongodb|mongodb_config.log<br>mongors01.log<br> mongors02.log<br> mongors03.log<br> mongomongod7.log |Config server logfile<br> Replication set 1 logfile<br> Replication set 2 logfile<br> Replication set 3 logfile<br> Standalone mongodb logfile
|/var/log|messages|general log file


#### Agent log file locations

|Component|Files|Location|
|:---|:---|:---
|opcua-agent-server|opcua-agent-server-gc.log<br>opcua-agent-server.log<br> opcua-agent-server-2018-04-30.0.log|/var/log/opcua/
|Smartrule-agent-server-apama|smartrule-agent-server-apama-gc.log<br> smartrule-agent-server-apama.log|/var/log/smartrule-apama/
|cumulocity-agent|cumulocity-agent.log|/var/log/

### Adjust log level

This section describes how to change the log level for Cumulocity-specific applications on the backend side. It does not explain how to change log settings for standard components like databases or other operating system related services. 

#### Changing log level for Karaf

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
			
	og4j.logger.com.cumulocity.rest.mediatypes=INFO

Adjust the log levels by changing the level attribute according to the following values. The levels are inclusive - meaning a given level will also include all “lower” log levels, e.g. when you set the level to WARN you will also get ERROR events.

|Level|Description|
|:---|:---|:---
|ERROR|Log errors only
|WARN|Give information up to warnings
|INFO|Give information about normal operations
|DEBUG|Log all internal debug information

Save the file. It is re-read by the application every few minutes so you do not have to restart the Java process.

#### Changing log level for Apama

The log level for Apama is defined by the property  “correlator.logLevel” in the file `/opt/softwareag/cumulocity-apama-rules/deploy/correlator.properties`,  e.g. correlator.logLevel=INFO.

Possible values for the Apama log level are:

|Level|Description|
|:---|:---|:---
|ERROR|Log errors only
|WARN|Give information up to warnings
|INFO|Give information about normal operations
|DEBUG|Log all internal debug information

Save the file. It is re-read by the application every few minutes so you do not have to restart the Java process.
