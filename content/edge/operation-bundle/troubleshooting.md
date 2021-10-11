---
weight: 10
title: Troubleshooting the system
layout: redirect
---

In case of any issues we provide a number of options which help you find out what might be the cause and give advice how to fix it.

We recommend you to follow these steps:

* Perform a health check, see the [Health check](#health-check) section.
* Monitor the system processes, see the [Monitoring](#monitoring) section.
* Check the log files, see the [Log files](#log-files) section.

If you still need to contact SAG support, include the output of the diagnostics script. See the [Diagnostics](#diagnostics) section on details how to run it.

### <a name="health-check"></a>Health check

#### Network

Without working network connection the system is not able to work. The following instructions show how to check the network connectivity of the platform.

##### Check network interface of the node

The following commands will show the interface and network settings of the machine:

	[admin@server ~]$ ip a

This will list all interfaces and their current configuration.

Example:

	[admin@server ~]$ ip a
	
	1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
	link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
	inet 127.0.0.1/8 scope host lo
	   valid_lft forever preferred_lft forever
	inet6 ::1/128 scope host
	   valid_lft forever preferred_lft forever
	
	2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
	link/ether 08:00:27:88:e7:de brd ff:ff:ff:ff:ff:ff
	inet 10.0.2.15/24 brd 10.0.2.255 scope global noprefixroute dynamic enp0s3
	   valid_lft 85338sec preferred_lft 85338sec
	inet6 fe80::a00:27ff:fe88:e7de/64 scope link noprefixroute
	   valid_lft forever preferred_lft forever
	
	3: enp0s8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
	link/ether 08:00:27:81:fe:9d brd ff:ff:ff:ff:ff:ff
	inet 192.168.56.120/24 brd 192.168.56.255 scope global noprefixroute enp0s8
	   valid_lft forever preferred_lft forever
	inet6 fe80::5b3a:bc65:40b5:f9ea/64 scope link noprefixroute
	   valid_lft forever preferred_lft forever

You need to make sure that the node has an external interface (ethX) and the loopback interface configured (lo). The loopback interface needs to have the fixed IP 127.0.0.1 with subnet mask 255.0.0.0 and the IP address of the external interface must reside in the correct subnet with the correct subnet mask (in this example 255.255.252.0).

The following command lists the local routing information.

	[admin@server ~]$ netstat -rn

Example:

	[admin@server ~]$ netstat -rn
	Kernel IP routing table
	Destination     Gateway         Genmask         Flags   MSS Window  irtt Iface
	0.0.0.0         10.0.2.2        0.0.0.0         UG        0 0          0 enp0s3
	10.0.2.0        0.0.0.0         255.255.255.0   U         0 0          0 enp0s3
	192.168.56.0    0.0.0.0         255.255.255.0   U         0 0          0 enp0s8

Make sure you have the destination 0.0.0.0 in the list which then also has the gateway flag (G) set.

##### Check access to the internet

Try to reach a well-known address in the internet with the following command:

	[admin@server ~]$ ping -s 1500 8.8.8.8
	PING 8.8.8.8 (8.8.8.8) 1500(1528) bytes of data.
	64 bytes from 8.8.8.8: icmp_seq=1 ttl=56 time=2.61 ms
	64 bytes from 8.8.8.8: icmp_seq=2 ttl=56 time=2.80 ms
	64 bytes from 8.8.8.8: icmp_seq=3 ttl=56 time=2.82 ms
	64 bytes from 8.8.8.8: icmp_seq=4 ttl=56 time=2.75 ms
	64 bytes from 8.8.8.8: icmp_seq=5 ttl=56 time=2.79 ms

As when checking the internal reachability you need to make sure that you can see replies from the address you tried to reach. Use Ctrl-C to end the ping command.

#### Processing

This section lists the required services and processes on the Edge server.

##### Check platform status

You can check the status of the platform by running the following command:

	curl -v http://localhost:8181/tenant/health
	
	* About to connect() to localhost port 8181 (#0)
	*   Trying ::1...
	* Connected to localhost (::1) port 8181 (#0)
	> GET /tenant/health HTTP/1.1
	> User-Agent: curl/7.29.0
	> Host: localhost:8181
	> Accept: */*
	>
	< HTTP/1.1 200 OK
	< Content-Type: application/json
	< Date: Sat, 05 May 2018 18:13:28 GMT
	< Transfer-Encoding: chunked
	< Server: Jetty(8.1.19.v20160209)
	<
	* Connection #0 to host localhost left intact
	{
		"status": "UP",
		"services": {
			"details": {},
			"status": "UP"
		},
		"mongodb": {
			"details": {},
			"status": "UP"
		},
		"tenant": {
			"details": {},
			"status": "UP"
		}
	}


The ‘status:”UP”’ shows that all services are running.

If something went wrong, the endpoint should respond a different error code then 200 OK. The response should contain something like:


	{
	   "status":"DOWN",
	   "services":{
	      "details":{
	
	      },
	      "status":"UP"
	   },
	   "mongodb":{
	      "details":{
	
	      },
	      "status":"UP"
	   },
	   "tenant":{
	      "details":{
	         "notFullyInitializedTenants":{
	            "savenindia":"PAYPAL_REFUND",
	            "nowa":"PAYPAL_REFUND",
	            "ttc":"PAYPAL_REFUND",
	            "controllogichh":"PAYPAL_REFUND",
	            "jonathan":"PAYPAL_REFUND",
	            "barcotrail":"PAYPAL_REFUND",
	            "ngservices":"PAYPAL_REFUND",
	            "sixsenses":"PAYPAL_REFUND",
	            "trav2":"PAYPAL_REFUND",
	            "lucaslocatrix":"PAYPAL_REFUND"
	         }
	      },
	      "status":"DOWN"
	   }
	}

The response contains checks for the most important components:

* services - status of OSGI services running within karaf container
* mongo - status of connection to mongo database
* tenant - tenant initialization status

The list describes the tenants which on the core node have not been fully initialized and the initialization status they are in.

|Status|Description|
|:---|:---|
|UNINITIALIZED|Tenant has not been initialized|
|DB_INITIALIZED|Database initialisation is performed|
|LOCAL&#95;APPLICATION_INITIALIZED|Local applications are deployed|
|CEP_INITIALIZED|CEP rules are been deployed|
|HEART&#95;BEAT&#95;MONITORING_INITIALIZED|Heartbeat monitoring for devices is been started|
|PAYPAL_REFUND|Failed PayPal operations are refunded (when tenant is using PayPal)|
|BULK&#95;OPERATION_INITIALIZED|Support for bulk operations is initialized|
|FULLY_INITIALIZED|Tenant is in working state (should not be displayed)|


#### Checking the system services

##### Checking REST API availability

Run the following command to check the REST API availability:

	[admin@server ~]$ curl -u 'edge/<username>:<password>' -v -X GET http://<base_url>/platform
	
	* About to connect() to <base_url> port 80 (#0)
	*   Trying 52.29.189.245... connected
	* Connected to <base_url> (52.29.189.245) port 80 (#0)
	* Server auth using Basic with user 'management/<username>'
	> GET /platform HTTP/1.1
	> Authorization: Basic bWFuYWdlbWVudC90c3NjaHVlbDohITQ3TmV1bjI3MQ==
	> User-Agent: curl/7.19.7 (x86_64-redhat-linux-gnu) libcurl/7.19.7 NSS/3.21 Basic ECC zlib/1.2.3 libidn/1.18 libssh2/1.4.2
	> Host: <base_url>
	> Accept: */*
	>
	< HTTP/1.1 200 OK
	< Server: nginx
	< Date: Tue, 23 Aug 2016 15:39:29 GMT
	< Content-Type: application/vnd.com.nsn.cumulocity.platformApi+json; charset=UTF-8; ver=0.9
	< Transfer-Encoding: chunked
	< Connection: keep-alive
	<
	{"alarm":{"alarms":{"alarms":null,"self":"http://management.<base_url>/alarm/alarms"},"alarmsForSource":"http://management.<base_url>/alarm/alarms?source={source}","alarmsForSourceAndStatus":"http://management.<base_url>/alarm/alarms?source={source}&status={status}","alarmsForSourceAndStatusAndTime":"http://management.<base_url>/alarm/alarms?source={source}&status={status}&dateFrom={dateFrom}&dateTo={dateTo}","alarmsForSourceAndTime":"http://management.<base_url>/alarm/alarms?source={source}&dateFrom={dateFrom}&dateTo={dateTo}","alarmsForStatus":"http://management.<base_url>/alarm/alarms?status={status}","alarmsForStatusAndTime":"http://management.<base_url>/alarm/alarms?status={status}&dateFrom={dateFrom}&dateTo={dateTo}","alarmsForTime":"http://management.<base_url>/alarm/alarms?dateFrom={dateFrom}&dateTo={dateTo}","self":"http://management.<base_url>/alarm"},…}

This example shows the correct response of the platform. The username and password need to have full read access to the management tenant. The &#60;base_url> needs to be given to connect to the correct platform and the management tenant must not be blocked from outside.  

### <a name="monitoring"></a>Monitoring

Monit is a small open-source utility for managing and monitoring Unix systems. It conducts automatic maintenance and repair and can execute meaningful causal actions in error situations.

In Edge, Monit is used to monitor processes and take a restart action if any of them is down/inactive. The usual Monit interval (cycle) is 30 seconds.

#### Using Monit

Monit can provide a quick status report of all configured services and processes by running the following command as admin user:

	[admin@server ~]$ sudo monit summary

There might be cases where Monit has stopped monitoring some resources because of timeout on constant failures or dependency issues.

<img src="/images/edge/edge-monitoring-02.png" name="Status report" style="width:75%;"/>

A specific component, for example, `apama-ctrl_proc`, can be restarted using the following command:

	[admin@server ~]$ sudo monit restart apama-ctrl_proc

The Monit status can be checked by running:

	[admin@server ~]$ sudo systemctl status monit

Monit can be restarted by running:

	[admin@server ~]$ sudo systemctl restart monit

The log file for monit is located in /var/log/monit.log.

### <a name="log-files"></a>Log files

#### Log level locations

The solution stores log files at the following locations for the different nodes.

##### Core node log file locations

|Directory|Files|Usage|
|:---|:---|:---
|/var/log/cumulocity|access.log<br> error.log <br>karaf.log<br> mqtt.log|logfile for client access<br> logfile for errors and general information<br> logfile for the Karaf Container<br> logfile for mqtt protocol communication
|/var/log/nginx|access.log<br> error.log|logfile for client access<br> logfile for nginx errors
|/var/log|messages|general log file, contains also the messages from HAProxy

##### Apama log file locations

To access the apama-ctrl log files, run the command:

	[admin@server ~]$ sudo docker logs apama-ctrl-edge

##### MongoDB log file locations

|Directory|Files|Description|
|:---|:---|:---
|/var/log/mongodb|mongod.log<br>mongod.log.X.gz<br>mongomongod7.log<br> mongomongod7.log.X.gz|Log file generated by mongod service<br> Archive of previous log files generated by mongod service<br>  Log file generated by mongodmongod7 service<br> Archive of previous log files generated by mongodmongod7 service
|/var/log|messages|general log file

##### Agent log file locations

|Component|Files|Location|
|:---|:---|:---
|opcua-mgmt-service|opcua-mgmt-service.log|/var/log/opcua/
|opcua-device-gateway|opcua-device-gateway.log|/var/log/opcua/
|Smartrule-agent-server-apama|smartrule-agent-server-apama-gc.log<br> smartrule-agent-server-apama.log<br>smartrule.log|/var/log/smartrule/
|cumulocity-agent|cumulocity-agent.log|/var/log/cumulocity-agent/

##### DataHub log file locations

See [Log files](/datahub/running-datahub-on-the-edge/#log-files) for details on DataHub log files.

#### Adjust log level

This section describes how to change the log level for Cumulocity IoT specific applications on the backend side. It does not explain how to change log settings for standard components like databases or other operating system related services.

##### Changing log level for Karaf

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

### <a name="diagnostics"></a>Diagnostics

The diagnostic utility is enabled by default and runs periodically. However, this can also be triggered manually on demand. To execute it manually, follow the steps below.

	cd /opt/c8y/utilities/diagnostic-utility
	sudo ./run_data_collector.py

#### Hardware information

The basic hardware information of the target system is captured.  These reports are placed under the 'hardware' directory.

The following hardware information is available:

|<div style="width:250px">Information</div>|Description|
|:----------------|:---|
|CPU|Reads and gathers CPU information from "/proc/cpuinfo"
|Memory|Reads and gathers memory information from "/proc/meminfo"
|Detailed system summary|Data is captured using the 'lswh' command. Data includes multiple components like network, display adapter, bridge, IDE etc. This command is executed as sudo to capture all available details.
|Short system summary|Data is captured using the 'lswh' command, here the data is in precise format. This command is executed as sudo to capture all available details.
|PCI|Data related to installed PCI devices is captured using the 'lspci' command
|Storage|Data is an aggregation of the output of the commands 'df' and 'lsblk'


#### Software information

The basic software information of the target system is captured. These reports are placed under the 'software' directory.

The following software information is available:

|<div style="width:250px">Information</div>|Description|
|:----------------|:---|
|IP|Reads basic IP information from the target system using the 'ip' command
|OS|Collects various OS information like name, version, release etc. using the commands 'lsb_release' and 'uname'
|Installed package|A list of installed packages is prepared using the 'rpm' command
|Running processes|A list of running processes is prepared using the 'ps' command
|Top result|Captures the output of top command. This report is very informative as it holds information of running processes at argument level and their respective resource consumption.

#### Cumulocity IoT information

This section contains information on the running Cumulocity IoT processes, health endpoint check result, Cumulocity IoT logs etc.

The following Cumulocity IoT information is collected:

|<div style="width:250px">Information</div>|Description|
|:---------------------|:---|
|Health endpoint result|Cumulocity IoT and its microservices provide health endpoints, from which the user can get the system status.
|Mongo command execution result|MongoDB supports commands execution, which can give the status of the MongoDB server. Currently 'ping', 'dbstats' and 'serverStatus' commands are executed on each of the MongoDB nodes (currently it is management and edge). The MongoDB commands give vital information about the MongoDB server like the db version, process-id, uptime information etc.
|Mongo top output|The output of mongo top command is captured here
|Thread dumps|Thread dumps of all the running java processes and mongo processes are captured. For java processes the 'jstack' command is executed to get the thread dumps. For non-java processes like MongoDB, the 'pstack' command is used. Furthermore the 'pstack' command is applied on java processes as well.
|Log files|Archive of log files from Cumulocity IoT, its microservices and Apama is created. In case of Cumulocity IoT, only the 'live' logs are considered and roll-over log files are discarded.
|Configuration files|Archive of Cumulocity IoT configuration files from Cumulocity IoT and its microservices is created.
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


#### Optional startup parameters

Following are the supported startup parameters for the monitor and the data collector.

##### Data collector

The data collector can be started by running the "run_data_collector.py" script located under "/opt/c8y/utilities/diagnostic-utility/src/".

Following are the supported command line arguments which can be used while invoking the script. More than one of the supported arguments can be used simultaneously.

* -hw or --hardware: Allows the script to collect only the hardware information
* -sw or --software: Allows the script to collect only the software information
* -c8y or --cumulocity: Allows the script to collect only the cumulocity information
* -h: Displays the help message

##### Monitor

The monitor can be started by running the "run_monitor.py" script located under "/opt/c8y/utilities/diagnostic-utility/src/".

The monitor script supports only one optional startup parameter:

*  -s or --skipDataCollector: Allows the user to skip the data collection even if one or more monitored components is not working.

#### Microservices log file locations

The logs of the Kubernetes components are captured at:
*/tmp/diagnostic-utility/diagnostic_report_XXXXX/cumulocity/log_archive/kubernetes_logs.zip.*

The kubernetes_logs.zip file contains the logs of all Kubernetes platform components at “kube-system” path in the archive. The components captured are:

* heapster-*XX*
* kube-apiserver-server
* kube-controller-manager-server
* kube-dns-*XX*
* kube-flannel-ds-*XX*
* kube-proxy-*XX*
* kube-scheduler-server

>**Info:** The *XX* represents randomly generated alphanumeric sequences in these pod names and would vary in your environment.

The hosted microservices are captured at *cumulocity-single-node* path in the archive. The pre-installed component **kube-registry-persistent-secure-xx-xx** is already available in the archive. The logs of any additional microservices that are uploaded will also be available at this path.

#### Utility configuration file

The diagnostic utility can be customized using a properties file located under "/etc/diagnostic-utility/diagnostic_utility.properties".

>**Important:** The SMTP properties in the table below are only for collecting diagnostics information. For configuring the email server, see [Administration > Changing settings> Configuration settings](/users-guide/administration/#config-platform) in the User guide.

Following are the available keys used in the configuration file:

|<div style="width:300px">Information</div>|Description|
|:----------------|:---|
|email.notification|Allows users to select whether they want to receive the diagnostic report via email
|recipient.email|Email ID to be used by the utility while sending support email
|smtp.server.host|SMTP host for sending support email
|smtp.server.port|SMTP port to be used by the utility while sending support email
|smtp.username|SMTP username to be used by the utility while sending support email
|smtp.password|SMTP password to be used by the utility while sending support email
|components.for.log.backup|Components for which the log backup has to be performed
|components.for.configuration.backup|Components for which the configuration backup has to be performed
|report.directory|Report directory where the diagnostic reports have to be placed
|{component-name}.log.path|Absolute log path of the components under "component.for.log.backup" which do not use /var/log as the logging directory
|containers.to.monitor|Containers for which log backup is required. The container names are separated by a comma. These log files are retrieved using `docker logs`.
|services.to.monitor|Services for which log backup is required. The service names are separated by a comma. These log files are retrieved using `journalctl`.

### Docker bridge network CIDR

The Docker bridge network fails in the following scenarios:

1. Docker bridge network unavailable on boot time.
	
	Description: The default Docker bridge network range is not available in the network. If the network range is already utilized, the Docker bridge network does not start properly and  the Kubernetes cluster startup fails.

2. Invalid Docker bridge network provided during IP change.

	Description: You tried to change the Docker bridge network of the properly running Edge VM, but the range is not available in the network.

To troubleshoot these scenarios:

1. Configure the Edge VM's network and gateway to a different network range using the post-installation script. Configure the Edge VM to a different network disconnects the Edge VM from the existing network.
2. Configure Docker CIDR to a new non-conflicting value using the post-installation script.
3. Configure the Edge VM's network and gateway back to the network range using the post-installation script.
