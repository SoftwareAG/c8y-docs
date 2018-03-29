---
title: LuvitRED example
layout: redirect
order: 50
---

The following example workflow is a bit more complex but shows a possible use case. Imagine that you have a device which measures the temperatures and publishes the measurements via MQTT. With the help of the "MQTT" node in LuvitRED, we are able to subscribe to the channel the measurements are published on.

![c8y platform](/guides/images/devices/cloudgate/luvitred_example_mqtt_publisher.png)

After the measurement was received, the "json" node converts the input to JSON format. Then the "switch" node decides to which node it will forward the input to depending on a user-defined condition. In this case, if the temperature is above a certain threshold, an alarm will be sent. Otherwise, a measurement will be sent to Cumulocity.

If you do not have a device which supports MQTT, you can use this workflow instead to simulate such a device.

![c8y platform](/guides/images/devices/cloudgate/luvitred_example_mqtt_subscriber.png)

This workflow uses two "inject" nodes to simulate a measurement which triggers either the "c8y measurement" node or the "c8y alarm" node in the other workflow.

## Import/Export LuvitRED flows

To facilitate the reuse of workflows LuvitRED offers the possibility to import/export workflows.

### Export LuvitRED flows

To export your workflows, you can either use the LuvitRED or Cumulocity user interface.

If you want to use the LuvitRED user interface

* Click on the icon in the top right corner to open the menu.
* Go to the menu item "Export".
* Select "File - All nodes".
* Choose a name for your JSON file.
* Click on the "OK" button.

If you want to use the Cumulocity user interface, you have to make sure that one of your workflows contains a "c8y" node with a correctly configured "c8y platform" configuration node. Moreover, the "Flow deploy ?" checkbox needs to be checked in this "c8y platform" configuration node.

* Navigate to your CloudGate device in the "Device Management" application.
* Open the "Configuration" tab.
* Click on the "Get new snapshot from device" button.
* After the command successfully completed, you can find the JSON file in the "Configuration repository" menu.

> Note that if there is no correctly configured "c8y platform" configuration node in your workflows, Cumulocity will not be able to communicate with the device and therefore will not be able to retrieve the JSON file.

> Note that when a "c8y platform" configuration node contains credentials (usernames and passwords), these are not exported via the LuvitRED editor.

### Import LuvitRED flows

To import your workflows, you can either use the LuvitRED or Cumulocity user interface.

If you want to use the LuvitRED user interface

* Click on the icon in the top right corner to open the menu.
* Go to the menu item "Import".
* Select "From File".
* Click on the "Choose a file" button.
* Navigate to the JSON file you want to import and select it.
* Click on the "OK" button.

If you want to use the Cumulocity user interface, you have to make sure that one of your current workflows contains a "c8y" node with a correctly configured "c8y platform" configuration node. Moreover, the "Flow deploy ?" checkbox needs to be checked in this "c8y platform" configuration node. When importing, your current workflows will be replaced with the workflows in the JSON file so make sure to save workflows that are not to be replaced, too.

* Navigate to your CloudGate device in the "Device Management" application.
* Open the "Configuration" tab.
* Go to the "Apply new snapshot" section and select the JSON file you want to import in the drop-down menu.
* Click on the "Put new snapshot to device" button.
* After the command successfully completed, refresh the LuvitRED tab in your browser. You should be able to see the imported workflows now.

> Note that if there is no correctly configured "c8y platform" configuration node in one of your current workflows, Cumulocity will not be able to communicate with the device and therefore will not be able to push the JSON file onto the device.

The workflows should start automatically as soon as they are imported which means that it is not necessary to deploy them, provided that the "c8y platform" configuration node(s) in your imported workflows were configured correctly.
