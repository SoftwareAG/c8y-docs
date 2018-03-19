---
order: 60
layout: redirect
title: Extending
---

Extending the agent with drivers for new hardware and new devices requires the following steps:

* Create a Java class that implements the interface [Driver](https://bitbucket.org/m2m/cumulocity-examples/src/c1ab2abac58e683697061d2f8740c54da055061b/linux-agent/lx-driver/src/main/java/c8y/lx/driver/Driver.java?at=default).
* Create a jar file with the class and an additional text file "META-INF/services/c8y.lx.driver.Driver". The text file needs to contain the fully-qualified class name of the Java class.
* Deploy the jar file either by copying it to the "lib" folder of the agent or by deploying it through Cumulocity's software management.

The [BitBucket repository](https://bitbucket.org/m2m/cumulocity-examples) contains numerous examples of drivers. Usage of the Java client library is described in [Developing Java clients](/guides/java/developing).
