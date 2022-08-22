---
weight: 51
title: Configuring CPU and memory for OPCUA and Apama
layout: redirect
---

The memory limit for Apama and OPCUA containers is set to 2048 MB and the CPU limit is set to 256 as default values.

`CTRL_DOCKER_OPTIONS="--memory 2048m --cpu-shares 256"`

For most use cases, these values are sufficient. You can change the values as per your requirements.

To change the memory and CPU limit:

1. Log in to the Edge appliance.
2. Open the files:
   - /etc/init.d/opcua-device-gateway
   - /etc/init.d/apama
   - /etc/init.d/opcua-mgmt-service
3. Edit the parameter `CTRL_DOCKER_OPTIONS` to the required values.
4. Restart the Apama and OPCUA services:
   - `[admin@iot-edge-server ~]$ sudo service apama restart`
   - `[admin@iot-edge-server ~]$ sudo service opcua-mgmt-service restart`
   - `[admin@iot-edge-server ~]$ sudo service opcua-device-gateway restart`

>**Important:** Since the changes to this file are overwritten when the Edge appliance is updated, you must reapply the changes to this file after the update process.
