---
weight: 52
title: Configuring Apama
layout: redirect
---

The memory limit for Apama container is set to 2048 MB and the CPU limit is set to 256 as default values.

`CTRL_DOCKER_OPTIONS="--memory 2048m --cpu-shares 256"`

For most use cases, these values are sufficient. You can change the values as per your requirements.

To change the memory and CPU limit:

1. Log in to the Edge appliance.
2. Open the file "/etc/init.d/apama".
3. Edit the parameter `CTRL_DOCKER_OPTIONS` to the required values.
4. Restart the Apama service:
   - `[admin@iot-edge-server ~]$ sudo service apama restart`

{{< c8y-admon-important >}}

Since the changes to this file are overwritten when the Edge appliance is updated, you must reapply the changes to this file after the update process.

{{< /c8y-admon-important >}}

