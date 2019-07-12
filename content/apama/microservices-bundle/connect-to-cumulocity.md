---
weight: 30
title: Connecting to the Cumulocity platform
layout: redirect
---

To support making these requests, we provide a helper event with actions to automatically connect to the Cumulocity platform and then create requests which can be used to call other microservices. This helper event is called `CumulocityRequestInterface` and is within the `com.apama.cumulocity` package. This helper event provides a static action which will connect to Cumulocity and return an instance of the event. The instance has an action which will create a request to call a specific microservice. This helper event will automatically connect either from within a microservice or the Cumulocity platform itself, or from a remote correlator.

To create the connection from your own code, simply call the `connectToCumulocity` method and store the result:

```java
CumulocityRequestInterface cumulocity := CumulocityRequestInterface.connectToCumulocity();
```

This will automatically create a connection using the credentials and connection details provided to your microservice, or using the configuration for the Cumulocity IoT transport when connecting from an external Apama instance.