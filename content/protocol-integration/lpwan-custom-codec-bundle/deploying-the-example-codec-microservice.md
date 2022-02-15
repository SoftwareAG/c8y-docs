---
weight: 60
title: Deploying the example codec microservice
layout: redirect
---

Steps to build the example codec `lora-codec-lansitec` microservice.

1. Clone https://github.com/SoftwareAG/cumulocity-examples.git repository 
2. Build the microservice using `mvn clean install`. This creates a ZIP file of the codec microservice.
3. Deploy the microservice using the Cumulocity IoT Administration UI.
4. Open the device management application. Under device protocols, you should now see the device types with type "lpwan" created by the custom codec microservice.

The image below shows an example of the device types created by the custom codec microservice on subscription.

![List of device types created on subscription](/images/device-protocols/lpwan-custom-codec/lpwan-custom-codec-device-protocols-list.png)

Map one of these device types to the LPWAN device. To do so, navigate to a particular device, click on the LPWAN tab and then select the tab of the device types created above.

![Device type mapping](/images/device-protocols/lpwan-custom-codec/lpwan-custom-codec-device-type-mapping.png)

Supported device commands are available in the `Predefined commands` option from the **Device shell** tab.

![Device supported commands](/images/device-protocols/lpwan-custom-codec/lpwan-custom-codec-device-commands.png)