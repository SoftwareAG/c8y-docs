---
order: 10
title: Overview
layout: standalone
---

### Documentation

The following documentation is available for Cumulocity Edge:

|SECTION|CONTENT|
|:---|:---|
|[Introduction](/guides/edge/introduction)|Providing information on conceptual aspects of Cumulocity Edge. 
|[Setting up Cumulocity Edge](/guides/edge/installation)|How to install the system on a virtual machine, including [setting up the environment for Cumulocity Edge](/guides/edge/installation#setting-up-the-environment) and [configuring the Edge server](/guides/edge/installtion#configuration). 
|[Working with Cumulocity Edge](/guides/edge/usage)|How to [use the IoT platform](/guides/edge/usage#iot-platform), how to [connect a modbus device](/guides/edge/usage#connecting-device) using Cloud Fieldbus and how to [connect Cumulocity Edge to the cloud](/guides/edge/usage#connecting-cloud) using Data Broker. 
|[Operating Cumulocity Edge](/guides/edge/operation)|How to operate the system, including [operational procedures](/guides/edge/operation#operational-procedures), [health checks](#health-check), [backup and restore](/guides/edge/operation#backup-restore), and [log files](/guides/edge/operation#log-files).


### Conventions in this document

The following conventions are used in this document:

Lines starting with ´#´ are meant as commands to be executed by the root user.  Example:

	# ls -l

Lines starting with ´&#36;´ represent commands to be executed by a non-root user. Example:
	
	$ ls /etc

Items marked in brackets &lt;x&gt; need to be replaced by a custom value when executing commands or editing files. Example:

	user=&lt;username&gt;

should be edited like

	user=johndoe
