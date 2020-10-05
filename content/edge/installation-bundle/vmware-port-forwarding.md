---
weight: 75
title: Port forwarding on a VMware platform
layout: redirect
---

To perform port forwarding on a VMware platform, follow the steps below.

>**Important:** The IP addresses used in the screenshots are sample IP addresses, for the purpose of example only. The IP addresses may vary in your set up.

1. Run the *vmnetcfg.exe* utility as an administrator.
<img src="/images/edge/edge-vmware-port-forwarding-01.png" name="Port forwarding on VMware"/>

2. Select the **NAT** adapter and click **NAT Settings**.
<img src="/images/edge/edge-vmware-port-forwarding-02.png" name="NAT Settings"/>

3. Click **Add** to add the port forwarding rules. Enter the details for the incoming port in the **Map Incoming Port** window and click **OK**.
<img src="/images/edge/edge-vmware-port-forwarding-03.png" name="NAT Settings"/>

	>**Info:** Ensure that the **Virtual machine IP address** is the same as the IP address that you have configured for the Edge VM.

	You can add port forwarding rules for HTTP, HTTPS, MQTT, MQTT over SSL protocols and so on.

4. Click **OK** in the **NAT Settings** window.

5. Click **Apply** > **OK**.

You can now access Cumulocity IoT Edge using the IP address of the host machine.