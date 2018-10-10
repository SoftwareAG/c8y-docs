---
order: 40
title: Operational procedures
layout: redirect
---

### Restarting services

#### Karaf processes

On the Edge server, execute the following commands as admin user. 

##### Start Karaf processes

Execute the following command:

	# sudo service cumulocity-core-karaf start
	

This will start the Karaf OSGi container if required. 

##### Stop Karaf processes

Execute the following command:

	# sudo service cumulocity-core-karaf stop

This will stop the Karaf OSGi container if required. 

#### opcua-agent-server

On the Edge server, execute the following commands as admin user. 

##### Start opcua-agent-server

Execute the following command:

	# sudo systemctl start opcua-agent-server

This will start the opcua-agent-server if required. 

##### Stop opcua-agent-server

Execute the following command:

	# sudo systemctl stop opcua-agent-server

This will stop the opcua-agent-server if required. 

##### Restart opcua-agent-server

Execute the following command:

	# sudo systemctl restart opcua-agent-server

This will restart the opcua-agent-server if required. 

#### smartrule-agent-server-apama

On the Edge server, execute the following commands as admin user. 

##### Start smartrule-agent-server-apama

Execute the following command:

	# sudo systemctl start smartrule-agent-server-apama

This will start the smartrule-agent-server-apama if required. 

##### Stop smartrule-agent-server-apama

Execute the following command:

	# sudo systemctl stop smartrule-agent-server-apama

This will stop the smartrule-agent-server-apama if required. 

##### Restart smartrule-agent-server-apama

Execute the following command:

	# sudo systemctl restart smartrule-agent-server-apama

This will restart the smartrule-agent-server-apama if required. 


#### Apama

On the Edge server, execute the following commands as admin user. 

##### Start apama

Execute the following command:

	# sudo service apama start

This will start the apama service if required. 

##### Stop apama
Execute the following command:

	# sudo service apama stop

This will stop the apama service if required. 

##### Restart smartrule-agent-server-apama

Execute the following command:

	# sudo service apama restart

This will restart the apama service if required.

### Log rotation 

Currently, there are two ways of configuring the log rotation for components.
<br>

**Under /usr/share/cumulocity-core-karaf/etc/ in org.ops4j.pax.logging.cfg file**

This configuration is done via configuring the RollingFileAppender provided by Log4J. 

The components for which log rotation is configured are as follows:

|Component|Log file location|Log file rotation|Max file size|Max backup index|
|:---|:---|:---|:---|:---|
|Karaf|${karaf.data}/log/error.log|Daily|50 MB|14|
|MQTT|${karaf.data}/log/mqtt.log|Daily|50 MB|14|
|Access|${karaf.data}/log/access.log|Daily|50 MB|14|
|DataBroker|${karaf.data}/log/databroker.log|Daily|50 MB|14|
 
<br>
**Under /etc/ configured via logrotate.conf and config files under /etc/logrotate.d**
 
The components for which log rotation is configured are as follows:
 
|Component|Log file location|Log file rotation|Max file size|Max backup index|
|:---|:---|:---|:---|:---|
|MongoDB|/var/log/mongodb/*.log|Daily|50 MB|14|
|NginX|/var/log/nginx/*.log|Daily|50 MB|14|
|Apama|/opt/softwareag/cumulocity-apama-rules/deploy/logs/*.log|Daily|50 MB|14|

Configuration can be altered by using daily/weekly/monthly and specifying the corresponding rotate count.

For microservices, there currently is no specific log rotation configured.
