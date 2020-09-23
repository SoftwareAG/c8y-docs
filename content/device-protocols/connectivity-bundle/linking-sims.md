---
weight: 40
title: Linking SIMs and mobile devices
layout: redirect
---


Switch to the Device Management application and navigate to a device that is connected through a SIM card managed by the SIM provider of your choice. The device should have a **Connectivity** tab. If this tab is not shown,

* your user does not have permissions for Connectivity,
* the device is not linked to a SIM card,
* the device is linked to a SIM card, but the card is not managed by the respective SIM provider account.

To assign permissions, navigate to the Administration application and make sure that your user has a role assigned with READ or ADMIN permission for Connectivity.

<img src="/images/device-protocols/connectivity/connectivity-permissions.png" alt="Connectivity permission settings"  style="max-width: 80%">

Jasper and Comarch identify SIM cards through their ICCID (Integrated Circuit Card Identifier). Ericsson is using MSISDN (Mobile Station International Subscriber Directory Number) instead. In most cases, devices will report the ICCID and MSISDN of their SIM card automatically to Cumulocity IoT.

If the ICCID is not shown automatically check the following:

* Determine the ICCID of the SIM card. It is printed on the SIM card and is visible in Control Center.
* Enter the ICCID in the **Info** tab, then click **Save**.
* Click **Reload** in the tab menu bar to make the **Connectivity** tab appear.

> Note that it may take a few seconds until the tab appears for the first time on a device, as Cumulocity IoT checks if the particular SIM card is managed by the SIM provider.
