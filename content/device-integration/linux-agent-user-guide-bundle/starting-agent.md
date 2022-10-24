---
title: Starting the agent process and other services
layout: redirect
weight: 50
---

* To start the {{< product-c8y-iot >}} Linux Agent with or without Modbus support, you must follow the steps in [Starting the agent process](#starting-the-agent-process).
* To start the {{< product-c8y-iot >}} Cloud Remote Access service, refer to [Starting the {{< product-c8y-iot >}} Cloud Remote Access service](#starting-the-cumulocity-cloud-remote-access-service).
* To start the {{< product-c8y-iot >}} CANopen service and CANopen device simulator, refer to [Starting the {{< product-c8y-iot >}} CANopen service](#starting-the-cumulocity-canopen-service).

<a name="starting-the-agent-process"></a>
### Starting the agent process

In your _cumulocity-agents-linux_ directory, run:

```shell
sudo cumulocity-agent
```

However, the agent process stops when the agent crashes.
To improve this, there is an alternative way for Linux distributions with systemd:

```shell
sudo systemctl enable cumulocity-agent
sudo systemctl start cumulocity-agent
```

This way, the agent automatically restarts by a watchdog process in case it crashes.

<a name="starting-the-cumulocity-cloud-remote-access-service"></a>
### Starting the Cloud Remote Access service

Make sure that you have the *vncproxy* file in the _cumulocity-agents-linux/bin_ directory. If this is not the case, refer to the section [Building the agent with Cloud Remote Access service](./#building-the-cumulocity-cloud-remote-access-service).

In your _cumulocity-agents-linux_ directory, run:

```shell
sudo vncproxy
```

Alternatively, you can use systemd. Make sure you have the *vncproxy* file in the _/usr/bin_ directory. If this is not the case, [install the agent](./#installing-the-agent) first.

Copy the service script to _/lib/systemd/system_, then enable and start the service.

```shell
sed 's#$PREFIX#/usr#g' utils/cumulocity-remoteaccess.service > /lib/systemd/system/cumulocity-remoteaccess.service
sudo systemctl enable cumulocity-remoteaccess
sudo systemctl start cumulocity-remoteaccess
```

<a name="starting-the-cumulocity-canopen-service"></a>
### Starting the CANopen service

Make sure that you have the *c8y_canopend* file in the _cumulocity-agents-linux/bin_ directory. If this is not the case, refer to the section [Building the agent with CANopen service](./#building-the-cumulocity-canopen-service) first.

In your _cumulocity-agents-linux_ directory, run:

```shell
./bin/c8y_canopend
```

#### CANopen simulator

There is also a CANopen simulator included in the repository for testing purposes. To build and run it, execute:

```shell
cd tools/canopen_simulator
make
./c8y_canopen_simulator 5 0
```

{{< c8y-admon-info >}}
5 is the CANopen node ID that you want the simulator to run with, and 0 is the CAN interface number (that is, `can0`). In this example, the simulator is automatically connected to the SocketCAN interface `can0`. Make sure that you have a proper `can0` CAN interface, or use the default CANopen settings in the {{< product-c8y-iot >}} Linux agent to have the agent create a vcan `can0` interface for you.
{{< /c8y-admon-info >}}
