---
order: 20
title: Diagnostics
layout: redirect
---

The diagnosis utility is auto-enabled and will be running periodically. However, this can also be triggered manually on demand. To execute it manually, follow the steps below. 

	# cd opt/c8y/utilities/diagnostic-utility
	# ./run_data_collector.py

The diagnosis utility provides the following information.

### Hardware information

The basic hardware information of the target system is captured.  These reports are placed under the 'hardware' directory.

The following hardware information is available:

* CPU - Reads and gathers CPU information from "/proc/cpuinfo" 
* Memory - Reads and gathers memory information from "/proc/meminfo" 
* Detailed system summary - Data is captured using the 'lswh' command. Data includes multiple components like network, display adapter, bridge, IDE etc. This command is executed as sudo to capture all available details.
* Short system summary - Data is captured using the 'lswh' command, here the data is in precise format. This command is executed as sudo to capture all available details.
* PCI - Data related to installed PCI devices is captured using the 'lspci' command 
* Storage - Data is an aggregation of the output of the commands 'df' and 'lsblk'


#### Software information

The basic software information of the target system is captured. These reports are placed under the 'software' directory.

The following software information is available:

* IP - Reads basic IP information from the target system using the 'ip' command 
* OS - Collects various OS information like name, version, release etc. using the commands 'lsb_release' and 'uname'
* Installed package - a list of installed packages is prepared using the 'rpm' command
* Running processes - a list of running processes is prepared using the 'ps' command
* Top result - Captures the output of top command. This report is very informative as it holds information of running processes at argument level and their respective resource consumption.


#### Cumulocity information

This section contains information on the running Cumulocity processes, health endpoint check result, Cumulocity logs etc.

The following Cumulocity information is collected:

* Health endpoint result - Cumulocity and its microservices provide health endpoints, from which the user can get the system status. Currently supported components are OPCUA, Smartrule-Apama, Apama, Cumulocity (platform-service, tenant).
* Mongo command execution result - MongoDB supports commands execution, which can give the status of the MongoDB server. Currently 'ping', 'dbstats' and 'serverStatus' commands are executed on each of the MongoDB nodes (currently it is management and edge). The MongoDB commands give vital information about the MongoDB server like the db version, process-id, uptime information etc.
* Mongo top output - The output of mongo top command is captured here
* Thread dumps - Thread dumps of all the running java processes and mongo processes are captured. For java processes the 'jstack' command is executed to get the thread dumps. For non-java processes like MongoDB, the 'pstack' command is used. Furthermore the 'pstack' command is applied on java processes as well.
* Log files - Archive of log files from Cumulocity, its microservices and Apama is created. In case of Cumulocity, only the 'live' logs are considered and roll-over log files are discarded.
* Configuration files - Archive of Cumulocity configuration files from Cumulocity and its microservices is created.
* Jstat dumps - Jstat command provides performance statistics for a given JVM. It can provide information on the following options
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
