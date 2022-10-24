---
title: Building and installing the Cumulocity IoT Linux agent
layout: redirect
weight: 30
---

Before getting started, make sure that you have compiled the {{< product-c8y-iot >}} C++ SDK.

* For using the **Cloud Remote Access** feature, refer to [Building the {{< product-c8y-iot >}} Cloud Remote Access service](#building-the-cumulocity-cloud-remote-access-service).  
* For using the **Modbus** support, make sure that you have the libmodbus and LuaSocket packages installed. Details on how to enable Modbus support are described in [Building the agent with a Modbus support](#building-the-agent-with-modbus-support).  
* For **CANopen** support, check if you have the CANopen library and SocketCAN connector commercially licensed by [port industrial automation GmbH](https://www.port.de/en/products/canopen/software.html) and the LuaSocket package installed. For details, refer to  [Building the {{< product-c8y-iot >}} CANopen service](#building-the-cumulocity-canopen-service).

<a name="basic-agent"></a>
### Building the basic agent

This section explains how to build the {{< product-c8y-iot >}} Linux agent without Modbus support.

1. Copy the {{< product-c8y-iot >}} Linux agent repository to a directory of your choice.

    ```shell
    cd ~/<my_working_directory>
    git clone  https://github.com/SoftwareAG/cumulocity-agents-linux.git
    ```

2. Export the SDK binaries and libraries path (that is, _/home/me/repos/cumulocity-sdk-c_). Preferably add the following code to your _~/.bashrc_ for permanence.

    ```shell
    export C8Y_LIB_PATH=/path/to/cumulocity-sdk-c
    ```

3. Enter the _cumulocity-agents-linux_ directory and copy the compiled binaries and libraries of the SDK. This is done by copying the _bin_ and _lib_ directories in the SDK to the _cumulocity-agents-linux_ directory.

    ```shell
    cd cumulocity-agents-linux
    cp -rP $C8Y_LIB_PATH/lib $C8Y_LIB_PATH/bin .
    ```

4. Customize your _Makefile_ and correct the libraries names. If you installed the liblua5.3-dev library, modify **lua** to **lua5.3** twice (in the `CPPFLAGS` and `LDLIBS` lines)


    ```shell
    CPPFLAGS+=-I$(C8Y_LIB_PATH)/include $(shell pkg-config --cflags lua)\
                      -DPKG_DIR='"$(PKG_DIR)"'
    LDLIBS:=-lsera $(shell pkg-config --libs lua) -pthread
    ```

    to

    ```shell  
    CPPFLAGS+=-I$(C8Y_LIB_PATH)/include $(shell pkg-config --cflags lua5.3)\
                      -DPKG_DIR='"$(PKG_DIR)"'
    LDLIBS:=-lsera $(shell pkg-config --libs lua5.3) -pthread
    ```
    {{< c8y-admon-info >}}
This step is required for the Ubuntu 18.04 LTS and Raspbian distributions. However, this step must be skipped for the CentOS 7 distribution. If you use other operating systems, run `pkg-config --cflags lua` and `pkg-config --libs lua` and confirm that no errors are returned.
    {{< /c8y-admon-info >}}

5. To build the agent in debug mode, run:

    ```shell
    make
    ```

    For production, to build in release mode, run:

    ```shell
    make release
    ```

<a name="building-the-cumulocity-cloud-remote-access-service"></a>
### Building the Cloud Remote Access service

The {{< product-c8y-iot >}} Linux agent supports the Cloud Remote Access feature. If your device supports VNC, Telnet, or SSH remote access, you can remotely manage it via {{< product-c8y-iot >}}. For details on the remote access functionality, refer to [Cloud Remote Access](/cloud-remote-access/cra-general-aspects/).

To support the feature, you must build the **{{< product-c8y-iot >}} Cloud Remote Access service** aside from building the agent. To build it, run:

```shell
make vnc
```

Now you have an execution file *vncproxy* in *cumulocity-agents-linux/bin*.

The {{< product-c8y-iot >}} Cloud Remote Access service needs no further configuration. It communicates with the {{< product-c8y-iot >}} Linux agent via a local socket.

<a name="building-the-agent-with-modbus-support"></a>
### Building the agent with Modbus support

Modbus support is disabled by default. In between step 4 and step 5 of [Building the basic agent](#basic-agent), you must do one additional step to enable it. The Modbus feature requires the libmodbus library, so make sure you have libdmobus installed before building the agent with Modbus support.

After step 4 of [Building the basic agent](#basic-agent), edit your _Makefile_ file and set `PLUGIN_MODBUS` to `1` (enabled). By default, this variable is set `0` (disabled).

```shell
PLUGIN_MODBUS:=1
```

After you have completed this step, continue with step 5 of [Building the basic agent](#basic-agent) to build the agent.

<a name="building-the-cumulocity-canopen-service"></a>
###  Building the CANopen service

CANopen support is disabled by default. After you have completed all steps described in [Building the basic agent](#basic-agent), you must do a couple of additional steps.

CANopen support is composed of two parts. One is a Lua plugin, which is included in the agent repository by default. However, to get actual CANopen support, you must also build the {{< product-c8y-iot >}} CANopen service, which is a C program based on the CANopen library and SocketCAN connector from port industrial automation GmbH.

The CANopen library and SocketCAN connector are commercially licensed by [port industrial automation GmbH](https://www.port.de/en/products/canopen/software.html), and are not included in this repository. You must get the CANopen library and the SocketCAN connector from [port industrial automation GmbH](https://www.port.de/en/products/canopen/software.html) if you want to build the {{< product-c8y-iot >}} CANopen service.

Assume you have the CANopen library and SocketCAN connector available, you must create a directory _ext/port_ in the repository and extract the ZIP files there. After the extraction, your _ext/port_ directory should have the following structure:

```shell
$ ls -hl ext/port/
drwxr-xr-x 1 tiens tiens   44 Nov 27 16:45 canopen
drwxr-xr-x 1 tiens tiens   80 Nov 27 16:45 drivers
$ ls -hl ext/port/canopen
-rw-r--r-- 1 tiens tiens 11K Nov 27 16:45 CHANGELOG
drwxr-xr-x 1 tiens tiens 664 Nov 27 16:45 include
drwxr-xr-x 1 tiens tiens 834 Nov 27 16:45 source
$ ls -hl ext/port/drivers
-rw-r--r-- 1 tiens tiens  21K Nov 27 16:45 CHANGELOG_DRV
drwxr-xr-x 1 tiens tiens   92 Nov 27 16:45 linux
-rw-r--r-- 1 tiens tiens 7.3K Nov 27 16:45 README
drwxr-xr-x 1 tiens tiens  206 Nov 27 16:45 shar_inc
drwxr-xr-x 1 tiens tiens  106 Nov 27 16:45 shar_src
```

To build the {{< product-c8y-iot >}} CANopen service, move to the repository root directory and run:

```shell
cd canopen
make
```

Then the *c8y_canopend* execution file is created in _cumulocity-agents-linux/bin_.

The {{< product-c8y-iot >}} CANopen service communicates with the {{< product-c8y-iot >}} Linux agent via UDP port 9677. It gets all configuration, including SocketCAN interface, baud rate and more, automatically from the {{< product-c8y-iot >}} Linux agent, so you just need to adjust all the CANopen settings in the {{< product-c8y-iot >}} Linux agent configuration file (_cumulocity-agent.conf_) as described in the section [Configuring the agent](#configuring-agent).

<a name=installing-the-agent></a>
### Installing the agent

{{< c8y-admon-info >}}
Before installing the agent, you must configure the agent parameters in the _cumulocity-agent.conf_ file. For details, refer to [Configuring the agent](#configuring-agent).
{{< /c8y-admon-info >}}


You can install and uninstall the agent using the same commands regardless of whether your agent supports Modbus, CANopen or none of them.
After you have built the agent, enter your _cumulocity-agents-linux_ directory and run:

```shell
sudo make install
```

The agent's binary files, the configuration file (_cumulocity-agent.conf_), the SmartREST template file (_srtemplate.txt_), the systemd service file, and the C++ SDK shared library files are now deployed to your device.

### Uninstalling the agent

In your _cumulocity-agents-linux_ directory, run:

```shell
sudo make uninstall
```

The agent binary files, the configuration file (_cumulocity-agent.conf_), the SmartREST template file (_srtemplate.txt_), the systemd service file, and the C++ SDK shared library files are now removed from your device.
