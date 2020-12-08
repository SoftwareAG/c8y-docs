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

If you're running your setup with a large number of connected devices and gateways the scan of these nodes can take a long time and may fail with the default settings.  
We recommend you to use the following settings in the configuration YAML file:  

```yaml
gateway:  

  scheduler:
    threadpool:
      size: 300  

  executor:
    threadpool:  
      coreSize: 600  
      maxSize: 1200

  cyclicRead:
    threadpool:
      size: 3000
```

In general, a larger number of threads will increase your performance. To increase the number of threads, add more memory.