---
weight: 70
title: Restarting services
layout: redirect
---

>**Important:** If the processes are monitored by **monit**, the processes restart after you run the *stop* command.

### Karaf processes

On the Edge server, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@server ~]$ sudo service cumulocity-core-karaf start
|Stop|[admin@server ~]$ sudo service cumulocity-core-karaf stop


### opcua-mgmt-service

On the Edge server, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@server ~]$ sudo service opcua-mgmt-service start
|Stop|[admin@server ~]$ sudo service opcua-mgmt-service stop
|Restart|[admin@server ~]$ sudo service opcua-mgmt-service restart
|Status|[admin@server ~]$ sudo service opcua-mgmt-service status

### opcua-device-gateway

On the Edge server, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@server ~]$ sudo service opcua-device-gateway start
|Stop|[admin@server ~]$ sudo service opcua-device-gateway stop
|Restart|[admin@server ~]$ sudo service opcua-device-gateway restart
|Status|[admin@server ~]$ sudo service opcua-device-gateway status 

### smartrule

On the Edge server, run the following commands as admin user. 

|Process|Command|
|:---|:---
|Start|[admin@server ~]$ sudo systemctl start smartrule
|Stop|[admin@server ~]$ sudo systemctl stop smartrule
|Restart|[admin@server ~]$ sudo systemctl restart smartrule 

### Apama

On the Edge server, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@server ~]$ sudo service apama start
|Stop|[admin@server ~]$ sudo service apama stop
|Restart|[admin@server ~]$ sudo service apama restart  

	