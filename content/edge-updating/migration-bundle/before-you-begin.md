---
weight: 10
title: Before you begin
layout: redirect
---
- Import the Edge 10.9 appliance, see [Configuring the Edge infrastructure](/edge/setting-up-edge/) for further information.
- Configure the network and complete the installation procedure on your Edge 10.9 appliance. For details see [Installing {{< product-c8y-iot >}} Edge](/edge/installation/).

{{< c8y-admon-important >}} You can have both the Edge 10.7 and the Edge 10.9 appliances on the same host machine. Ensure that the IP address of the Edge 10.9 appliance is different from the IP address of the Edge 10.7 appliance.{{< /c8y-admon-important >}}

For information about upgrading from an earlier version to {{< product-c8y-iot >}} Edge 10.7, see:

- [Operating Cumulocity IoT Edge > Upgrading on VMware ESX](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_esxi),
- [Operating Cumulocity IoT Edge > Upgrading on VMware Workstation Player](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_vmware_workstation),
- [Operating Cumulocity IoT Edge > Upgrading on Hyper-V](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_hyper_v)

in the *10.7.0 Cumulocity IoT Edge guide*.

To migrate from Edge 10.7 to 10.9:

- back up the data on Edge 10.7,
- move the backup to Edge 10.9,
- restore the data on Edge 10.9.