---
order: 80
title: Simulatoren
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

A message is defined by choosing a message template (like sending a temperature) and providing the values for this template (23.0 degrees). Many predefined message templates are provided, i.e. for creating a measurement, sending an event, creating and cancelling an alarm. These templates are based on MQTT static templates. Additionally, custom message templates can be defined using the [SmartREST template editor](#smartrest-templates). 

### The Simulator tab
In the navigator, click "Simulator" in the "Devices" menu to open the "Simulator" tab.

All simulators which you can access will be listed here. Click the menu icon at the top right of a simulator card to open a context menu from where you can edit, clone or remove a simulator.

<img src="/guides/images/users-guide/DeviceManagement/DevMgmt_SimulatorCard.png" alt="Simulator card" style="max-width: 50%">

### How to create a simulator

To set up a new simulator follow these steps:

1. Click **New Simulator** at the right of the top menu bar. 
2. In the upcoming window select a simulator type from the dropdown list in the "Presets" field. Select "Empty simulator" to create a simulator from scratch or select one of the sample simulators.
3. Enter a meaningful name for the simulator. 
4. Select the number of instances for this simulator (up to ten).
3. Click **Continue** to proceed to the next dialog.

<img src="/guides/images/users-guide/addsim.png" alt="Add Simulator" style="max-width: 60%">

### Instructions

After setting up a simulator you can add instructions which define what your simulator is supposed to do. Instructions are single tasks added to a playlist through which the simulator will work. 

Instructions can be viewed and edited on the "Instructions" tab of the simulator.

![Add Instructions](/guides/images/users-guide/addinstructions.png)

**Examples**

Within the presets, samples instructions are already added. For example, the "Temperature measurement" preset already has instructions in it for the steps "Create measurement" and "Sleep". 

![Add Instructions Step 2](/guides/images/users-guide/addinstructions2.png)

The measurement instruction refers to a fragment. Fragments are used to identify capabilities of a managed object. Find more details about fragments here: 
[Sensor Library ](/guides/reference/sensor-library/) 

![Add Instructions Step 3](/guides/images/users-guide/addinstructions3.png)

The "Sleep" instruction requires one value for its duration in seconds. 

The panel on the right changes according to the type of instruction selected on the left.

![Add Instructions Step 4](/guides/images/users-guide/addinstructions4.png)

### Supported operations

In the "Supported operations" tab of a simulator you can turn on or off specific operations like configurations or software/firmware updates.

![Operations Off](/guides/images/users-guide/supop1.png)

![Operations On](/guides/images/users-guide/supop2.png)

Click **Add custom operation** to specify a customized operation and add it to the list.

### Alarms (simulator)

The "Alarm" tab of a simulator displays alarms related to the simulator itself (not to the simulated device), i.e. if the simulator itself does not work correctly, you will find alarms here. Refer to [Working with alarms](#alarms) for information on alarms. 

![Simulator Alarm](/guides/images/users-guide/simalarm.png)
