---
weight: 70
title: Handling LWM2M post registration actions
layout: redirect
---

The LWM2M shell commands can be performed in the **Shell** tab of each device. It is also possible to execute some common commands when any new device is registered.
This can be done in the **LWM2M post-operations** page accessible from the **Device types** menu in the navigator. A set of shell commands can be saved in the Commands section, which will be performed on each device on registration.

![Post operations example](/images/device-protocols/lwm2m/lwm2m-post-operations.png)

The above image shows the **LWM2M post-operations** page with a set of sample shell commands.
More information on shell commands can be found in [LightweightM2M > Handling LWM2M shell commands](/protocol-integration/lwm2m/#shell-commands) in the <em>Protocols integration guide</em>.

### Device operations handling

The device operations can be created even when a device is offline. In such a scenario, the operations will remain in PENDING state. These pending operations will be
delivered to the device as soon as it gets connected. A huge number of pending operations might cause unexpected issues on the LWM2M agent. Hence, to avoid such cases
the maximum number of device operations is limited to a certain value internally.

>**Info:** The default maximum limit of the pending operations is 10, which is a configurable value for the agent. In case this limit is not sufficient for your use case please contact our [support](/about-doc/contacting-support).
