---
weight: 130
title: Troubleshooting
layout: redirect
---

### Permission denied error when running the gateway JAR file on a Linux OS

![Permission denied](/images/device-protocols/opcua/opcua-permission-denied-error.png)

If the following error appears,  add a baseDir property to the YAML file. For example:

```
db:
  baseDir: ${user.home}/.opcua/profile/data
```

### Unknown host exception when running the gateway JAR

This error appears if the provided baseUrl property in the YAML file is incorrect.

### Failed to load property source from location when running the gateway JAR

The following error appears if the indentation of the properties in the YAML file is incorrect.

![Failed to load](/images/device-protocols/opcua/opcua-failed-to-load.png)

### java.net.BindException: Address already in use

![Address in use](/images/device-protocols/opcua/opcua-address-in-use.png)

If this error appears, a Java process is running in the background. To fix this issue, the process must be stopped/killed.

### Changing the log level for troubleshooting

For troubleshooting purposes, we recommend you to enable the DEBUG log level for subpackages and root if required, and send the log file to [product support](/about-doc/contacting-support).

For example:

```

    <logger name="com.cumulocity.opcua.client.gateway" level="DEBUG"/>
    <logger name="com.cumulocity" level="DEBUG"/>
    <logger name="c8y" level="DEBUG"/>

    <root level="DEBUG">
        <appender-ref ref="STDOUT"/>
    </root>
```

For additional information about log levels, refer to the [Logback architecture documentation](http://logback.qos.ch/manual/architecture.html#effectiveLevel).
