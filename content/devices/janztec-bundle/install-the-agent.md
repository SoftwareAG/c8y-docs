---
title: Configuration
layout: redirect
weight: 20
---

### Installing the agent

The device has been tested to be supported by Cumulocity's Linux agent. 

1. Log into the device and make sure you are running Raspbian 8.0 (Jessie) or higher.
 
	```shell
$ lsb_release -a
No LSB modules are available.
Distributor ID: Raspbian
Description:    Raspbian GNU/Linux 8.0 (jessie)
Release:        8.0
Codename:       jessie
```
 
2. Install the required dependencies for the agent:
	
	```shell
$ sudo apt-get install libcurl3 liblua5.2-0
```
 
3. Download and install the latest Linux agent:

	```shell
$ wget http://resources.cumulocity.com/examples/c8ydemo-agent-armhf-latest.deb
$ sudo dpkg -i c8ydemo-agent-armhf-latest.deb
 ```
 
4. Finally, reboot the device to automatically start the agent:

	```shell
$ sudo reboot
 ```