---
order: 20
title: Diagnostics
layout: redirect
---

The diagnostic utility is auto-enabled and will be running periodically. However, this can also be triggered manually on demand. To execute it manually, follow the steps below. 

	# cd opt/c8y/utilities/diagnostic-utility
	# ./run_data_collector.py

The diagnostic utility provides the following information.

### Hardware information

The basic hardware information of the target system is captured.  These reports are placed under the 'hardware' directory.

The following hardware information is available:

|Information|Description|
|:----------------|:---|
|CPU|Reads and gathers CPU information from "/proc/cpuinfo"
|Memory|Reads and gathers memory information from "/proc/meminfo" 
|Detailed system summary|Data is captured using the 'lswh' command. Data includes multiple components like network, display adapter, bridge, IDE etc. This command is executed as sudo to capture all available details.
|Short system summary|Data is captured using the 'lswh' command, here the data is in precise format. This command is executed as sudo to capture all available details.
|PCI|Data related to installed PCI devices is captured using the 'lspci' command 
|Storage|Data is an aggregation of the output of the commands 'df' and 'lsblk'


### Software information

The basic software information of the target system is captured. These reports are placed under the 'software' directory.

The following software information is available:

|Information|Description|
|:----------------|:---|
|IP|Reads basic IP information from the target system using the 'ip' command
|OS|Collects various OS information like name, version, release etc. using the commands 'lsb_release' and 'uname'
|Installed package|A list of installed packages is prepared using the 'rpm' command
|Running processes|A list of running processes is prepared using the 'ps' command
|Top result|Captures the output of top command. This report is very informative as it holds information of running processes at argument level and their respective resource consumption.

### Cumulocity information

This section contains information on the running Cumulocity processes, health endpoint check result, Cumulocity logs etc.

The following Cumulocity information is collected:

|Information|Description|
|:---------------------|:---|
|Health endpoint result|Cumulocity and its microservices provide health endpoints, from which the user can get the system status. 
|Mongo command execution result|MongoDB supports commands execution, which can give the status of the MongoDB server. Currently 'ping', 'dbstats' and 'serverStatus' commands are executed on each of the MongoDB nodes (currently it is management and edge). The MongoDB commands give vital information about the MongoDB server like the db version, process-id, uptime information etc.
|Mongo top output|The output of mongo top command is captured here
|Thread dumps|Thread dumps of all the running java processes and mongo processes are captured. For java processes the 'jstack' command is executed to get the thread dumps. For non-java processes like MongoDB, the 'pstack' command is used. Furthermore the 'pstack' command is applied on java processes as well.
|Log files|Archive of log files from Cumulocity, its microservices and Apama is created. In case of Cumulocity, only the 'live' logs are considered and roll-over log files are discarded.
|Configuration files|Archive of Cumulocity configuration files from Cumulocity and its microservices is created.
|Jstat dumps|Jstat command provides performance statistics for a given JVM. 

Jstat dumps can provide information on the following options:

* class - Statistics on the behavior of the class loader
* compiler - Statistics of the behavior of the HotSpot Just-in-Time compiler
* gc -  Statistics of the behavior of the garbage collected heap
* gccapacity -  Statistics of the capacities of the generations and their corresponding spaces
* gccause - Summary of garbage collection statistics (same as -gcutil), with the cause of the last and current (if applicable) garbage collection events
* gcnew – statistics of the behavior of the new generations
* gcnewcapacity  - Statistics of the sizes of the new generations and its corresponding spaces
* gcold - Statistics of the behavior of the old and permanent generations
* gcoldcapacity - Statistics of the sizes of the old generations
* gcpermcapacity - Statistics of the sizes of the permanent generations
* gcutil – Summary of garbage collection statistics
* printcompilations –  HotSpot compilation method statistics
	
As per the current implementation, the 5 statistics counts are collected at an interval of 50ms. To improve performance, this task is executed via threads.


### Optional startup parameters

Following are the supported startup parameters for the monitor and the data collector.

#### Data collector

The data collector can be started by running the "run_data_collector.py" script located under "/opt/c8y/utilities/diagnostic-utility/src/".

Following are the supported command line arguments which can be used while invoking the script. More than one of the supported arguments can be used simultaneously.

* -h or --hardware: Allows the script to collect only the hardware information
* -s or --software: Allows the script to collect only the software information
* -c or --cumulocity: Allows the script to collect only the cumulocity information

#### Monitor

The monitor can be started by running the "run_monitor.py" script located under "/opt/c8y/utilities/diagnostic-utility/src/".

The monitor script supports only one optional startup parameter:

*  -s or --skipDataCollector: Allows the user to skip the data collection even if one or more monitored components is not working.


### Utility configuration file

The diagnostic utility can be customized using a properties file located under "/etc/diagnostic-utility/diagnostic_utility.properties".

Following are the available keys used in the configuration file:

|Information|Description|
|:----------------|:---|
|notify.support.by.email|Allows users to select whether they want to receive the diagnostic report via email
|support.email|Email ID to be used by the utility while sending support email
|smtp.server.host|SMTP host for sending support email
|smtp.server.port|SMTP port to be used by the utility while sending support email
|smtp.username|SMTP username to be used by the utility while sending support email
|smtp.password|SMTP password to be used by the utility while sending support email
|log.backup|Components for which log backup has to be done
|configuration.backup|Components for which configuration backup has to be done
|report.directory|Report directory where the diagnostic reports have to be placed
|{component-name}.log.path|Absolute log path of components who do not use /var/log as their logging directory

