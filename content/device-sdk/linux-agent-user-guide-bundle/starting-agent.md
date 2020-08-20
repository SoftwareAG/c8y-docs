---
title: Starting the agent process and other services
layout: redirect
weight: 40
---

To start the Cumulocity Linux Agent regardless of with/without **Modbus** support, you need to follow [Starting the agent process](#starting-the-agent-process) Section. To start the **Cumulocity Cloud Remote Access Service**, please also refer to [Starting the Cumulocity Cloud Remote Access Service](#starting-the-cumulocity-cloud-remote-access-service) section. To start the **Cumulocity CANopen Service** and **CANopen slave simulator**, please follow the [Starting the Cumulocity CANopen Service](#starting-the-cumulocity-canopen-service) section.

### <a name= starting-the-agent-process> Starting the agent process </a>
In your _cumulocity-agents-linux_ directory, simply run:
```shell
sudo cumulocity-agent
```
However, the agent process stops when the agent crashes.
To improve this, there is an alternative way for Linux distributions with systemd:
```shell
sudo systemctl enable cumulocity-agent
sudo systemctl start cumulocity-agent
```
In this way, the agent restarts automatically by watchdog process when the agent crashes.

### <a name = starting-the-cumulocity-cloud-remote-access-service>Starting the Cumulocity Cloud Remote Access service</a>
Make sure that you have `vncproxy` in _cumulocity-agents-linux/bin_ directory. If not, please do [Building the agent with Cloud Remote Access Service](./#building-the-cumulocity-cloud-remote-access-service).

In your _cumulocity-agents-linux_ directory, simply run:
```shell
sudo vncproxy
```

Or you can use systemd as well. Make sure you have `vncproxy` in _/usr/bin_ directory. If not, do [Installing the agent](./#installing-the-agent) first.
First, copy the service script to _/lib/systemd/system_, then enable and start the service.
```shell
sed 's#$PREFIX#/usr#g' utils/cumulocity-remoteaccess.service > /lib/systemd/system/cumulocity-remoteaccess.service
sudo systemctl enable cumulocity-remoteaccess
sudo systemctl start cumulocity-remoteaccess
```

### <a name=starting-the-cumulocity-canopen-service>Starting the Cumulocity CANopen Service</a>
Make sure that you have `c8y_canopend` in _cumulocity-agents-linux/bin_ directory. If not, please do [Building the agent with CANopen service](./#building-the-cumulocity-canopen-service) first.

In your _cumulocity-agents-linux_ directory, run:
```shell
./bin/c8y_canopend
```

#### Cumulocity CANopen simulator
There is also a CANopen simulator included in the repo for testing purposes. To build and run it:
```shell
cd tools/canopen_simulator
make
./c8y_canopen_simulator 5 0
```

> **Note:** 5 is the CANopen Node-ID that you want the simulator to run with, and 0 is the CAN interface number, i.e., `can0`. In this example, the simulator is automatically connected to SocketCAN interface `can0`, make sure that you have a proper `can0` CAN interface, or use the default CANopen settings in the Linux Agent to have the agent creates a vcan `can0` interface for you.
