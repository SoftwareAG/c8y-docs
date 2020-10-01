---
weight: 120
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
