---
weight: 10
title: Documentation
layout: bundle
---

The following documentation is available for Cumulocity IoT Edge:

|Section|Content|
|:---|:---|
|[Introduction](/edge/introduction)|Providing information on conceptual aspects of Cumulocity IoT Edge. 
|[Setting up Cumulocity IoT Edge](/edge/installation)|How to install the system on a virtual machine, including [setting up the environment for Cumulocity IoT Edge](/edge/installation#setting-up-the-environment) and [configuring the Edge server](/edge/installation#configuration). 
|[Working with Cumulocity IoT Edge](/edge/usage)|How to [use the IoT platform](/edge/usage#iot-platform), how to [connect a modbus device](/edge/usage#connecting-devices) using Cloud Fieldbus and how to [connect Edge to the cloud](/edge/usage#connecting-cloud) using the data broker. 
|[Operating Cumulocity IoT Edge](/edge/operation)|How to operate the system, including [troubleshooting](/edge/operation#troubleshooting), [upgrading the system](/edge/operation#update), [backup and restore](/edge/operation#backup-restore), and various [administrative tasks](/edge/operation#administration).
|[Release notes for Cumulocity IoT Edge](/edge/edge-release-notes)|Providing information on improvements and enhancements within each release.


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


