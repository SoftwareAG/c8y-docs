---
order: 10
title: Operational procedures
layout: redirect
---

### Restarting services

#### Karaf processes

On the Edge server, execute the following commands as admin user. 

##### Start Karaf processes

Execute the following command:

	# systemctl start cumulocity-core-karaf

This will start the Karaf OSGi container when required. 

##### Stop Karaf processes

Execute the following command:

	# systemctl stop cumulocity-core-karaf

This will stop the Karaf OSGi container when required. 

#### opcua-agent-server

On the Edge server, execute the following commands as admin user. 

##### Start opcua-agent-server

Execute the following command:

	# systemctl start opcua-agent-server

This will start the opcua-agent-server when required. 

##### Stop opcua-agent-server

Execute the following command:

	# systemctl stop opcua-agent-server

This will stop the opcua-agent-server when required. 

##### Restart opcua-agent-server

Execute the following command:

	# systemctl restart opcua-agent-server

This will restart the opcua-agent-server when required. 

#### smartrule-agent-server-apama

On the Edge server, execute the following commands as admin user. 

##### Start smartrule-agent-server-apama

Execute the following command:

	# systemctl start smartrule-agent-server-apama

This will start the smartrule-agent-server-apama when required. 

##### Stop smartrule-agent-server-apama

Execute the following command:

	# systemctl stop smartrule-agent-server-apama

This will stop the smartrule-agent-server-apama when required. 

##### Restart smartrule-agent-server-apama

Execute the following command:

	# systemctl restart smartrule-agent-server-apama

This will restart the smartrule-agent-server-apama when required. 

#### MongoDB

On the Edge server, execute the following commands as root user.

##### Start MongoDB process
Execute the following command:

	# systemctl start mongo

This will start the mongodb server when required. 

##### Stop MongoDB process

Execute the following command:

	# systemctl stop mongo

This will stop the mongodb server when required. 

##### Restart MongoDB process

Execute the following command:

	# systemctl restart mongo

This will restart the mongodb server when required. 

#### cumulocity-agent

On the Edge server, execute the following commands as admin user. 

##### Start cumulocity-agent

Execute the following command:

	# systemctl start cumulocity-agent

This will start the cumulocity-agent when required. 

##### Stop cumulocity-agent

Execute the following command:

	# systemctl stop cumulocity-agent

This will stop the cumulocity-agent when required. 

##### Restart cumulocity-agent

Execute the following command:

	# systemctl restart cumulocity-agent

This will restart the cumulocity-agent when required. 

