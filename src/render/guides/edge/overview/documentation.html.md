---
order: 10
title: Documentation
layout: redirect
---

The following documentation is available for Cumulocity IoT Edge:

|SECTION|CONTENT|
|:---|:---|
|[Introduction](/guides/edge/introduction)|Providing information on conceptual aspects of Cumulocity IoT Edge. 
|[Setting up Cumulocity IoT Edge](/guides/edge/installation)|How to install the system on a virtual machine, including [setting up the environment for Cumulocity IoT Edge](/guides/edge/installation#setting-up-the-environment) and [configuring the Edge server](/guides/edge/installation#configuration). 
|[Working with Cumulocity IoT Edge](/guides/edge/usage)|How to [use the IoT platform](/guides/edge/usage#iot-platform), how to [connect a modbus device](/guides/edge/usage#connecting-devices) using Cloud Fieldbus and how to [connect Edge to the cloud](/guides/edge/usage#connecting-cloud) using Data Broker. 
|[Operating Cumulocity IoT Edge](/guides/edge/operation)|How to operate the system, including [operational procedures](/guides/edge/operation#operational-procedures), [health checks](/guides/edge/operation#health-check), [backup and restore](/guides/edge/operation#backup-restore), and [log files](/guides/edge/operation#log-files).


#### Conventions in this document

The following conventions are used in this document:

Lines starting with ´#´ are meant as commands to be executed by the root user.  Example:

	# ls -l

Lines starting with ´&#36;´ represent commands to be executed by a non-root user. Example:
	
	$ ls /etc

Items marked in brackets &lt;x&gt; need to be replaced by a custom value when executing commands or editing files. Example:

	user=<username>;

should be edited like

	user=johndoe


