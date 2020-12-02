---
weight: 30
title: Running the Gateway
layout: redirect
---

The gateway can run with either default or custom settings. To run the gateway run one of the commands below:

* Default settings and default logging configuration:

  ```shell
    java -jar opcua-device-gateway-<<version>>.jar
  ```

* Custom settings and default logging configuration:

  ```shell
    java --spring.profiles.active=default,PROFILE_NAME -jar opcua-device-gateway-<<version>>.jar
  ```

* Custom settings and custom logging configuration:

  ```shell
    java --logging.config=file:PATH_TO_LOGBACK_XML --spring.profiles.active=default,PROFILE_NAME -jar opcua-device-gateway-<<version>>.jar
  ```

For example, using the profile from the previous section we are going to register the gateway. First, open the terminal and navigate to the location of the gateway.jar file. Next, enter the following command:

```shell
java --spring.profiles.active=default,myTenant -jar opcua-device-gateway-<<version>>.jar
```

### Adjusting gateway memory settings

In certain scenarios it is required to adjust the memory settings of the gateway application. Examples for such scenarios are the integration of servers with very large address spaces or obtaining large amounts of data from servers using high sampling rates.

You can adjust the memory settings of the gateway like with any other Java program. Typically, it is sufficient to increase the initial heap size and the maximum heap size of the gateway process.

* Example: Run the gateway with a minimum heap size of 2 GB and a maximum heap size of 8 GB.

  ```shell
  java -Xms2g -Xmx8g -jar opcua-device-gateway-<<version>>.jar
  ```

> **Important** Please adjust the memory settings according to the physical memory available on the gateway host. The maximum heap size must be set in a way that it doesn't consume more RAM than physically available to the gateway. Otherwise, the virtual memory management of the host operating system might start paging, resulting in reduced gateway performance.

### Performance tuning for large setups

If you're running your setup with a large number of connected device and gateways the scan of these nodes could take a long time and may be fail with the default settings.  
It is recommended to improve the setting in the configuration YAML file like this:  

in _gateway_ settings  

_scheduler_-_threadpool_
* size: set to 300  

_executor_-_threadpool_  
* coreSize: set to 600  
* maxSize: set to 1200

_cyclicRead_-_threadpool_
*size: set to 3000

In general, it is a good behaviour to increase the number of available threads. The number of threads is corresponding to your available memory, more memory means more threads. 