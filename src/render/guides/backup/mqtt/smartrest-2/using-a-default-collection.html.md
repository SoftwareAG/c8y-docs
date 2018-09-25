---
order: 50
layout: redirect
title: Using a default collection
---

Having the X-ID as part of the topic gives you the freedom to easily use multiple template collections but adds additional bytes for every message.
If the device anyways uses mostly (or completely) a single collection it makes sense to specify this collection as you default collection.
With a default collection specified the client can use special topics which don't require the X-ID and instead the server will use the X-ID previously specified.

You can specify one X-ID within your MQTT ClientID (see [here](/guides/mqtt/implementation#mqtt-clientid)).
Your MQTT ClientID could look like this:

```
d:myDeviceSerial:myDefaultTemplateXID
```

_Note:_

If you use a default X-ID in the ClientId you need to include the "d:" at the beginning to specify that the client is a device.

It is not required that the default template exists at the time of establishing the MQTT connection (it will be verified once the client uses it).
