---
title: Prerequisites
layout: redirect
weight: 20
---

### Required and optional packages

- Required packages
  - A C++11-standard-compliant compiler
  - liblua (>= 5.1)
  - libcurl (>=7.57.0)<br><br>
- Optional packages
  - systemd (for auto-start of the agent on boot)
  - libmodbus (>= 3.0.8), for the use of Modbus only
  - lua-socket (>=3.0), for the use of CANopen only

The packages can be installed with the following commands in the terminal window on Ubuntu 18.04:

```shell
# compiler
sudo apt install build-essential
# required
sudo apt install liblua5.3-dev libcurl4-gnutls-dev
# optional for Modbus
sudo apt install libmodbus-dev lua-socket
# optional for CANopen
sudo apt install lua-socket
```

{{< c8y-admon-info >}}
The following steps have been tested for Ubuntu 18.04, but should work with other distributions as well.
{{< /c8y-admon-info >}}

Make sure that the following libraries (-dev version) are installed.

- libcurl >= 7.57.0
- lua >= 5.1

Confirm that the libraries are installed by using the `apt` command (should show something like libcurl4-gnutls-dev or liblua5.3-dev).

```shell
apt list --installed | grep libcurl
apt list --installed | grep lua
```

In case they are not installed in your environment, search for the libraries' packages.

```shell
apt-cache search libcurl | grep dev
apt-cache search liblua | grep dev
```

Then, install the proper libraries. For example:

```shell
sudo apt install libcurl4-gnutls-dev
sudo apt install liblua5.3-dev
```

### Building the C++ SDK

The agent software requires the [{{< product-c8y-iot >}} C++ SDK](https://github.com/SoftwareAG/cumulocity-sdk-c), so you must build the {{< product-c8y-iot >}} C++ SDK first, before starting to build the software.


1. Launch a Git client and clone the SDK repository to a directory of your choice. For example:

    ```shell
    cd ~/<my_working_directory>
    git clone https://github.com/SoftwareAG/cumulocity-sdk-c.git
    ```

2. Enter the directory and pull in all submodule dependencies.

    ```shell
    cd cumulocity-sdk-c
    git submodule init
    git submodule update
    ```

3. In the _cumulocity-sdk-c_ directory, create an _init.mk_ file by copying the _common.mk_ file.

    ```shell
    cp common.mk init.mk
    ```

    Also, create a custom _Makefile_ file by copying _Makefile.template_.

    ```shell
    cp Makefile.template Makefile
    ```

4. Modify your _init.mk_ file with the proper library name on the `CPPFLAGS` and `LDLIBS` line. If you installed the liblua5.3-dev library then modify from:

    ```shell
    CPPFLAGS:=$(shell pkg-config --cflags libcurl lua)
    CXXFLAGS:=-Wall -pedantic -Wextra
    LDLIBS:=$(shell pkg-config --libs libcurl lua)
    ```

    to:

    ```shell
    CPPFLAGS:=$(shell pkg-config --cflags libcurl lua5.3)
    CXXFLAGS:=-Wall -pedantic -Wextra
    LDLIBS:=$(shell pkg-config --libs libcurl lua5.3)
    ```

    {{< c8y-admon-info >}}
This step is required for the Ubuntu 18.04 LTS and Raspbian distributions. However, this step must be skipped for the CentOS 7 distribution. If you use other operating systems, run `pkg-config --cflags lua` and `pkg-config --libs lua` and confirm that no errors are returned.
    {{< /c8y-admon-info >}}

    If you don't know which liblua version has already been installed on your device, you can find the version which you need to add to your _init.mk_ by:

    ```shell
    ldconfig -p | grep lua
    ```

    It will return a name like "liblua**5.3**.so.0", so you can assume that lua5.3 should be added.

5. To build the SDK in debug mode, run:

    ```shell
    make
    ```

    For production, to build in release mode, run:

    ```shell
    make release
    ```

    To remove all intermediate build files, run:

    ```shell
    make clean
    ```
