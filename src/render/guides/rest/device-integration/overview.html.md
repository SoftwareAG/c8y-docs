---
order: 10
title: Overview
layout: redirect
---

The basic life cycle for integrating devices into Cumulocity is discussed in [Interfacing devices](/guides/concepts/interfacing-devices). In this section, we will show how this life cycle is implemented on REST level. The life cycle consists of two phases, a startup phase and a cycle phase. 

The startup phase is responsible for connecting the device to Cumulocity and updating the device data in the inventory. It also performs cleanup tasks required for operations. It consists of the following steps:

-   [Step 0](#step-0-request-device-credentials): Request device credentials, if they have not been requested yet.
-   [Step 1](#step-1-check-if-the-device-is-already-registered): Check if the device is already registered.
-   [Step 2](#step-2-create-the-device-in-the-inventory): If no, create the device in the inventory and
-   [Step 3](#step-3-register-the-device): Register the device.
-   [Step 4](#step-4-update-the-device-in-the-inventory): If yes, update the device in the inventory.
-   [Step 5](#step-5-discover-child-devices-and-create-or-update-them-in-the-inventory): Discover child devices and create or update them in the inventory.
-   [Step 6](#step-6-finish-operations-and-subscribe): Finish operations that required a restart and subscribe to new operations.

![Startup phase](/guides/images/rest/startupphase.png)

The cycle phase follows. It continuously updates the inventory, writes measurements, alarms and events and executes operations when required. It can be considered to be the "main loop" of the device which is executed until the device shuts down. The loop consists of the following steps:

-   [Step 7](#step-7-execute-operations): Execute operations.
-   [Step 8](#step-8-update-inventory): Update inventory.
-   [Step 9](#step-9-send-measurements): Send measurements.
-   [Step 10](#step-10-send-events): Send events.
-   [Step 11](#step-11-send-alarms): Send alarms.

![Cycle phase](/guides/images/rest/cyclephase.png)

Reference models for the data can be found in the [Device management library](/guides/reference/device-management) and in the [Sensor library](/guides/reference/sensor-library).
