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

	# systemctl start cumulocity-core-karaf

This will start the Karaf OSGi container if required. 

##### Stop Karaf processes

Execute the following command:

	# systemctl stop cumulocity-core-karaf

This will stop the Karaf OSGi container if required. 

#### opcua-agent-server

On the Edge server, execute the following commands as admin user. 

##### Start opcua-agent-server

Execute the following command:

	# systemctl start opcua-agent-server

This will start the opcua-agent-server if required. 

##### Stop opcua-agent-server

Execute the following command:

	# systemctl stop opcua-agent-server

This will stop the opcua-agent-server if required. 

##### Restart opcua-agent-server

Execute the following command:

	# systemctl restart opcua-agent-server

This will restart the opcua-agent-server if required. 

#### smartrule-agent-server-apama

On the Edge server, execute the following commands as admin user. 

##### Start smartrule-agent-server-apama

Execute the following command:

	# systemctl start smartrule-agent-server-apama

This will start the smartrule-agent-server-apama if required. 

##### Stop smartrule-agent-server-apama

Execute the following command:

	# systemctl stop smartrule-agent-server-apama

This will stop the smartrule-agent-server-apama if required. 

##### Restart smartrule-agent-server-apama

Execute the following command:

	# systemctl restart smartrule-agent-server-apama

This will restart the smartrule-agent-server-apama if required. 


#### Apama

On the Edge server, execute the following commands as admin user. 

##### Start apama

Execute the following command:

	# service apama start

This will start the apama service if required. 

##### Stop apama
Execute the following command:

	# service apama stop

This will stop the apama service if required. 

##### Restart smartrule-agent-server-apama

Execute the following command:

	# service apama restart

This will restart the apama service if required.