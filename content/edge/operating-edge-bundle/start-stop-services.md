---
weight: 10
title: Starting and stopping services
layout: bundle
section:
  - edge_server
---

{{< c8y-admon-important >}}
If the processes are monitored by **monit**, the processes restart after you run the *stop* command.
{{< /c8y-admon-important >}}

### Karaf processes {#karaf-processes}

In the {{< product-c8y-iot >}} Edge appliance, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@iot-edge-server ~]$ sudo service cumulocity-core-karaf start
|Stop|[admin@iot-edge-server ~]$ sudo service cumulocity-core-karaf stop


### opcua-mgmt-service {#opcuamgmtservice}

In the {{< product-c8y-iot >}} Edge appliance, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service start
|Stop|[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service stop
|Restart|[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service restart
|Status|[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service status

### opcua-device-gateway {#opcuadevicegateway}

In the {{< product-c8y-iot >}} Edge appliance, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@iot-edge-server ~]$ sudo service opcua-device-gateway start
|Stop|[admin@iot-edge-server ~]$ sudo service opcua-device-gateway stop
|Restart|[admin@iot-edge-server ~]$ sudo service opcua-device-gateway restart
|Status|[admin@iot-edge-server ~]$ sudo service opcua-device-gateway status

### smartrule {#smartrule}

In the {{< product-c8y-iot >}} Edge appliance, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@iot-edge-server ~]$ sudo systemctl start smartrule
|Stop|[admin@iot-edge-server ~]$ sudo systemctl stop smartrule
|Restart|[admin@iot-edge-server ~]$ sudo systemctl restart smartrule

### Apama {#apama}

In the {{< product-c8y-iot >}} Edge appliance, run the following commands as admin user.

|Process|Command|
|:---|:---
|Start|[admin@iot-edge-server ~]$ sudo service apama start
|Stop|[admin@iot-edge-server ~]$ sudo service apama stop
|Restart|[admin@iot-edge-server ~]$ sudo service apama restart  
