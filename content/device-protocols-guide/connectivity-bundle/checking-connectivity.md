---
weight: 60
title: Checking connectivity
layout: redirect
---

If you suspect that a device is not correctly reporting to Cumulocity IoT, or it is not receiving commands, you can verify the connectivity status of the device.

In the **Connectivity** tab, check if

* the SIM is activated. If the SIM card is not activated, you can activate it selecting "Activated" from the status drop-down menu. <br> ![Activate SIM card](/images/device-protocols-guide/SIM-connectivity/SIM-connectivity-status-activate.png) <br> It may take a while until the SIM card is activated in the network. There may be a reset of the device needed to make it dial up to the network again.
* The device is connected to the network. If the device is not connected to the network, this may have several reasons:
 * The device is in a location without mobile network coverage. If the device reports network quality parameters, you can navigate to the [**Measurements** tab](/users-guide/device-management#measurements) of the device and verify the last reported signal strength and error rate parameters.
 * There is a network or hardware problem (antenna, modem). For the Jasper Control Center, for example, click the cogwheel icon on the top right and select **SIM details**, then open the Jasper Control Center diagnostics tool. If the device is not attempting to connect to the network, it may be broken.
* The device is in a data session. If the device is not in a data session, this may, again, have several reasons:
 * The APN settings are incorrectly configured in the device.
 * The SIM card is over traffic limit.
 * Data roaming is disabled on the device and the device is not in the SIM card's home network.
 * Data roaming for the particular network is not included in the SIM card's plan.
 * The SIM configuration was changed.

Data connectivity can be analyzed in various places:

* If the device reports its network configuration, navigate to the **Network** tab and verify, potentially edit, APN settings.
* If the device supports shell, navigate to the [**Shell** tab](/users-guide/device-management/#shell) and verify, potentially edit, APN settings and roaming configuration.
* Check the **Sessions** section on the **Connectivity** tab to see if the device has been communicating earlier and how much traffic it used.
* Check the **Audit logs** section on the **Connectivity** tab to see if there were any recent changes to the SIM card.
* Finally, click the cogwheel on the top right and select **SIM details** to navigate to the SIM configuration in Jasper Control Center.

> The **SIM details** menu item requires you to have a login for Jasper Control Center. This login is independently provided by your administrator.

If the device is still not reporting to Cumulocity IoT, there may be a configuration or software problem on the device.

* The device may have lost its credentials, for example, due to a factory reset or full loss of power. In this case, you can [re-register the device](/users-guide/device-management/#connecting-devices).
* There may be a configuration or software problem with the device, which has to be analyzed in a device-specific way.
