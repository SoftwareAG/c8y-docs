---
weight: 60
title: Deploying the example codec microservice
layout: redirect
---

Cumuloctiy provides the sample codec microservice for reference.First, clone this repository [lora-codec-lansitec](https://github.com/SoftwareAG/cumulocity-examples/tree/develop/lora-codec-lansitec). Next, build the microservice using `mvn clean install`. The build will create a zip file of the codec microservice.

In the next step, deploy the microservice using the Cumulocity IoT UI. Once the decoder microservice has been deployed, it can take couple of minutes for the Cumulocity platform to discover the new decoder. Then, open the device management application. Under device protocols, you should now see the device types with type as 'lpwan' created by the custom codec microservice. 

The below image shows an example of the device types created by the custom codec microservice on subscription. 

![List of device types created on subscription](/images/device-protocols/lpwan-custom-codec/lpwan-custom-codec-device-protocols-list.png)

Map one of these device types to the LPWAN device. In order to do so, navigate to a particular device, click on the LPWAN tab and then select the one of the device types created above.

![Device type mapping](/images/device-protocols/lpwan-custom-codec/lpwan-custom-codec-device-type-mapping.png)

Supported device commands are available in `Predefined commands` option from device shell tab.

![Device supported commands](/images/device-protocols/lpwan-custom-codec/lpwan-custom-codec-device-commands.png)