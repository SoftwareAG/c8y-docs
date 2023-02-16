---
weight: 60
title: Connecting new Bluetooth devices to the Sensor App
layout: redirect
---

The {{< sensor-app >}} connects to a range of Bluetooth sensor devices.
Additional devices will be added in the future.

To connect a device, click the plus button at the bottom right of the screen.
If Bluetooth is enabled and all required permissions are granted, your smartphone starts scanning for any new supported Bluetooth devices in the area that are not already paired. If Bluetooth is not enabled, select **Enable Bluetooth** on the scanning screen and follow the instructions.

New devices will be added to the list as the smartphone discovers them.

![Bluetooth connection](/images/users-guide/csa/csa-available-bluetooth-devices.png)

{{< c8y-admon-info >}}
If there are no supported devices in range, there is an option to see a list of all currently supported device types.
{{< /c8y-admon-info >}}

Ensure that the device you wish to connect to is switched on and in pairing mode. For most devices, this automatically happens when they are switched on and not paired with any other device. Refer to the manufacturer's instructions if you are unsure.

Bring the device close to your smartphone, 30cm or less is ideal.

When the Bluetooth device appears in the list, tap **Pair Device** to start pairing. The Bluetooth device will then be connected to your smartphone and start sending data to {{< product-c8y-iot >}} if you are currently connected.

{{< c8y-admon-info >}}
To try connecting Bluetooth sensor devices without a physical device, {{< sensor-app >}} supports Bluetooth simulation. {{< /c8y-admon-info >}}

To enable or disable simulation in {{< sensor-app >}}, follow instructions at the beginning of the section to scan for connected Bluetooth devices. While scanning, a **ENABLE SIMULATION** button is be presented to enable the simulation mode. Once enabled, {{< sensor-app >}} will present devices supporting the simulation mode. Continue from here as with real physical devices.

To disable simulation, all simulated devices must be connected to get the **DISABLE SIMULATION** button. A second option is to disable via the {{< sensor-app >}} settings. In Android the settings are available via the main menu. On iOS, find {{< sensor-app >}} in the system Preferences app, select **Connectivity** and disable **Simulate Devices**. By disabling the simulation mode, all simulated devices will be disconneced and removed.