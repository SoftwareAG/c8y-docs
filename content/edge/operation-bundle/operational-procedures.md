---
weight: 70
title: Restarting services
layout: redirect
aliases:
  - https://cumulocity.com/guides/edge/operation/#operational-procedures
---

### Karaf processes

On the Edge server, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@server ~]$ sudo service cumulocity-core-karaf start
|Stop|[admin@server ~]$ sudo service cumulocity-core-karaf stop


### opcua-agent-server

On the Edge server, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@server ~]$ sudo systemctl start opcua-agent-server
|Stop|[admin@server ~]$ sudo systemctl stop opcua-agent-server
|Restart|[admin@server ~]$ sudo systemctl restart opcua-agent-server 

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

	