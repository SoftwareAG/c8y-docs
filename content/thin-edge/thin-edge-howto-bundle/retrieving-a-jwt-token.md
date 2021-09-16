---
weight: 100
title: Retrieve a JWT token to authenticate on Cumulocity IoT
layout: redirect
---

### Overview

In order to [authenticate HTTP requests on {{< product-c8y-iot >}}](https://{{< domain-c8y >}}/api/#section/Authentication),
a device can retrieve a JWT token using MQTT.

### Retrieving the token

Follow the below steps in order to retrieve the token from the {{< product-c8y-iot >}} cloud using MQTT.

Subscribe to the `c8y/s/dat` topic:

```
$ tedge mqtt sub c8y/s/dat --no-topic
```

Publish an empty message on the `c8y/s/uat` topic:

```
$ tedge mqtt pub c8y/s/uat ''
```

After a while, the token will be published on the subscribed topic `c8y/s/dat` in the below format:

```
71,[Base64 encoded JWT token]
```
