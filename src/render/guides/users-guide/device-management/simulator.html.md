---
order: 80
title: Working with simulators
layout: redirect
---

With the Cumulocity simulator all aspects of IoT devices can be simulated:

* Setting up a simulated device or a network of simulated devices
* Specify which operations the device can process
* Create work instructions based on predefined message templates or user defined templates and schedule work steps
* Create up to ten devices of a defined type
* Generate messages for measurements, alarms, events and inventory
* View simulation problems as alarms

### What is a simulator?

With the simulator you can create artificial devices that have the same level of functionality as connected hardware devices.

A simulator uses a playlist to simulate messages that the device sends to the Cumulocity platform. A playlist is a series of instructions that the simulator executes one after the other. When the last instruction is reached, the simulator starts again with the first one.

An instruction can either send a message (measurements, alarms, events and inventory) or wait for a specified time (sleep). 

A message is defined by choosing a message template (like sending a temperature) and providing the values for this template (e.g. 23.0 degrees). Many predefined message templates are provided, e.g. for creating a measurement, sending an event, creating and cancelling an alarm. These templates are based on MQTT static templates. Additionally, custom message templates can be defined using the [SmartREST template editor](#smartrest-templates). 

### The Simulator tab

In the navigator, click **Simulators** in the **Devices** menu to open the **Simulators** page.

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-simulator.png" alt="Simulator page">

All simulators which you can access will be listed here. 

Click the menu icon at the top right of a simulator card to open a context menu from where you can edit, duplicate or remove a simulator.

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-simulator-card.png" alt="Simulator card menu">

### How to create a simulator

To set up a new simulator follow these steps:

1. Click **New Simulator** at the right of the top menu bar. 
2. In the upcoming window select a simulator type from the dropdown list in the **Presets** field. Select "Empty simulator" to create a simulator from scratch or select one of the sample simulators.
3. Enter a meaningful name for the simulator. 
4. Select the number of instances for this simulator (up to ten).
3. Click **Create** to save your settings.

<img src="/guides/images/users-guide/DeviceManagement/devmgmt-simulator-add.png" alt="Create simulator">

### Instructions

After setting up a simulator you can add instructions which define what your simulator is supposed to do. Instructions are single tasks added to a playlist through which the simulator will work. 

Instructions can be viewed and edited on the **Instructions** tab of the simulator.

![Add Instructions](/guides/images/users-guide/DeviceManagement/devmgmt-simulator-instructions.png)

**Examples**

Within the presets, samples instructions are already added. For example, the "Temperature measurement" preset already has instructions in it for the steps "Create measurement" and "Sleep", see image above. 

The panel on the right changes according to the type of instruction selected on the left.

![Fragment](/guides/images/users-guide/DeviceManagement/devmgmt-simulator-fragment.png)

The measurement instruction refers to a fragment. Fragments are used to identify capabilities of a managed object. Find more details about fragments here in the 
[Sensor Library](/guides/reference/sensor-library/) in the Reference guide. 

The "Sleep" instruction requires one value for its duration in seconds. 

![Sleep](/guides/images/users-guide/DeviceManagement/devmgmt-simulator-sleep.png)

### Supported operations

In the **Supported operations** tab of a simulator you can turn on or off specific operations like configurations or software/firmware updates.

![Supported operations](/guides/images/users-guide/DeviceManagement/devmgmt-simulator-supported-operations.png)

Click **Add custom operation** to specify a customized operation and add it to the list.

### Alarms (simulator)

The **Alarm** tab of a simulator displays alarms related to the simulator itself, not related to the simulated device, i.e. if the simulator itself does not work correctly. Refer to [Working with alarms](#alarms) for information on alarms. 

![Alarms](/guides/images/users-guide/DeviceManagement/devmgmt-simulator-alarm.png)
