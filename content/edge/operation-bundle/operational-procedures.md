---
weight: 70
title: Restarting services
layout: redirect
---

### Karaf processes

On the Edge server, execute the following commands as admin user. 

#### Start Karaf processes

To start the Karaf OSGi container, execute the following command:

	[admin@server ~]$ sudo service cumulocity-core-karaf start
	
#### Stop Karaf processes

To stop the Karaf OSGi container, execute the following command:

	[admin@server ~]$ sudo service cumulocity-core-karaf stop

### opcua-agent-server

On the Edge server, execute the following commands as admin user. 

#### Start opcua-agent-server

To start the opcua-agent-server, execute the following command:

	[admin@server ~]$ sudo systemctl start opcua-agent-server

#### Stop opcua-agent-server

To stop the opcua-agent-server, execute the following command:

	[admin@server ~]$ sudo systemctl stop opcua-agent-server

#### Restart opcua-agent-server

To restart the opcua-agent-server, execute the following command:

	[admin@server ~]$ sudo systemctl restart opcua-agent-server

### smartrule

On the Edge server, execute the following commands as admin user. 

#### Start smartrule

To start the smatrule, execute the following command:

	[admin@server ~]$ sudo systemctl start smartrule

#### Stop smartrule-agent-server-apama

To stop the smartrule, execute the following command:

	[admin@server ~]$ sudo systemctl stop smartrule

#### Restart smartrule

To restart the smartrule, execute the following command:

	[admin@server ~]$ sudo systemctl restart smartrule

### Apama

On the Edge server, execute the following commands as admin user. 

#### Start apama

To start the apama service, execute the following command:

	[admin@server ~]$ sudo service apama start

#### Stop apama

To stop the apama service, execute the following command:

	[admin@server ~]$ sudo service apama stop

#### Restart smartrule-agent-server-apama

To restart the apama service, execute the following command:

	[admin@server ~]$ sudo service apama restart