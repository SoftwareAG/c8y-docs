---
title: Install the Agent
layout: redirect
order: 20
---
The device has been tested to be supported by Cumulocity's Linux agent. First, login to the device, and make sure you are running as least Raspbian 8.0 (Jessie).

```shell
$ lsb_release -a
No LSB modules are available.
Distributor ID: Raspbian
Description:    Raspbian GNU/Linux 8.0 (jessie)
Release:        8.0
Codename:       jessie
```

Second, install the required dependencies for the agent by issuing the following command in the terminal:

```shell
$ sudo apt-get install libcurl3 liblua5.2-0
```

Third, download and install the latest Linux agent:

```shell
$ wget http://resources.cumulocity.com/examples/c8ydemo-agent-armhf-latest.deb
$ sudo dpkg -i c8ydemo-agent-armhf-latest.deb
```

Finally, reboot the device to automatically start the agent:

```shell
$ sudo reboot
```