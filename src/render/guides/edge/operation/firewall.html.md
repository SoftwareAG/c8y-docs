---
order: 30
title: Firewall settings
layout: redirect
---

### External firewall settings

The external firewall separates the system from the internet. It is the main point of protection and should be configured as restrictive as it can be.

#### Incoming traffic

The following ports need to be enabled by default in order to accept traffic from users and devices on the internet:

|Source IP|Source Port|Destination IP|Destination Port|Service|
|:---|:---|:---|:---|:---|
|any|any|external load balancer IP|TCP/80|HTTP|
|any|any|external load balancer IP|TCP/443|HTTPS|
|any|any|external load balancer IP|TCP/1883|MQTT|
|any|any|external load balancer IP|TCP/8883|MQTT/TLS|

Depending on additional integrations more ports must be opened. 

In addition, the firewall must support long lasting sessions. The TCP session timeout should be set to 14.400 seconds.

#### Outgoing traffic

The core node and Apama will need to be able to connect to the internet. Ports required to outside are:

|Service|Port|
|:---|:---
|HTTP|80
|HTTPS|443
|SMTP|25

Depending on the installed integrations (eMail, SMS, etc…) different ports might have to be opened in order to make these services available to the Cumulocity platform. The descriptions of these ports are delivered with the corresponding integrations.

Depending on the DNS and NTP setup it might be the case that DNS (UDP/53) and NTP (UDP/123) connections to the internet must be possible from all hosts.

### Server side agents

The server side agents require the following ports to be opened to reach the platform:

|Agent|Inbound|Outbound
|:---|:---|:---
|opcua|TCP/6670|TCP/80
|Smartrule-apama|TCP/8334|TCP/80

In addition, the firewall must support long lasting sessions. The TCP session timeout should be set to 14.400 seconds.

### Internal traffic settings

The following table lists the connections between the different node types. It is assumed that between nodes of the same type always all traffic is possible. In other words, an “allow any-2-any” traffic pattern is required.

|Source IP|Source Port|Destination IP|Destination Port|Service|
|:---|:---|:---|:---|:---|
|any|any|any|TCP/22|SSH (for management purposes)|
|Internal network|any|any|any|All traffic in between Cumulocity must be allowed|