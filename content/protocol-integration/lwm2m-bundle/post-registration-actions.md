---
weight: 50
title: Handling LWM2M post registration actions
layout: redirect
---

The LWM2M shell commands can be performed in the Shell tab of each device. It is also possible to execute some common commands when any new device is registered.
This can be done in the **LWM2M post-operations** tab under the Device protocols section. A set of shell commands can be saved in the Commands section, which will be performed on each device on registration.

![Post operations example](/images/device-protocols/lwm2m/lwm2m-post-operations.png)

The above image shows the **LWM2M post-operations** section with a set of sample shell commands.
More information on shell commands can be found [here](/protocol-integration/lwm2m-bundle/post-registration-actions.md).

### Device operations handling

The device operations can be created even when a device is offline. In such a scenario, the operations will remain in `PENDING` state. These pending operations will be
delivered to the device as soon as it gets connected. A huge number of pending operations might cause unexpected issues on the LWM2M agent. Hence, to avoid such cases
the maximum number of device operations can be limited internally. The default maximum limit of pending operations is 10.

>**Info:** The property that is used to set the limit is `C8Y.lwm2m.postReg.maxPendingOperationExecutions` in the agent properties file.

Please contact our [support](/about-doc/contacting-support), if access to the platform is required to change the aforesaid limit.