---
weight: 10
title: Install thin-edge.io
layout: redirect
opensource: true
---

### Installation with get-thin-edge_io.sh script

There are two options for installing thin-edge.io.
The easy way is to use the installation script with this command:
```
curl -fsSL https://raw.githubusercontent.com/thin-edge/thin-edge.io/main/get-thin-edge_io.sh | sudo sh -s 0.2.0
```
You can execute this command on your device and it will do all required steps for an initial setup.

If you prefer to have a little more control over the installation or the script did not work for you, follow the [Manual installation](#manual-installation).

### Manual installation

To install the thin-edge package it is required to use `curl` to download the package and `dpkg` to install it.

#### Dependency installation

thin-edge.io has a single dependency on `mosquitto` which is used for southbound and northbound communication.
Southbound, devices can publish measurements.
Northbound, the gateway may relay messages to the cloud.
`mosquitto` can be installed with your package manager.
For apt the command may look like the following:

```shell
apt install mosquitto
```

{{< c8y-admon-info >}}
Some operating systems may require you to use `sudo` to install packages.
{{< /c8y-admon-info >}}

```shell
sudo apt install mosquitto
```

#### thin-edge.io installation

When all dependencies are in place you can proceed with the installation of `thin-edge.io cli` and `thin-edge.io mapper` service.

##### Package download

The thin-edge.io package is in the [thin-edge.io repository on GitHub](https://github.com/thin-edge/thin-edge.io/releases).

To download the package from the GitHub repository use the following command (use the desired version):

```shell
curl -LJO https://github.com/thin-edge/thin-edge.io/releases/download/<package>_<version>_<arch>.deb
```

where `version` is the thin-edge.io version in `x.x.x` format and `arch` is the architecture type (amd64, armhf).

**Example:**

```shell
curl -LJO https://github.com/thin-edge/thin-edge.io/releases/download/0.1.0/tedge_0.1.0_armhf.deb
```

and for mapper:

```shell
curl -LJO https://github.com/thin-edge/thin-edge.io/releases/download/0.1.0/tedge_mapper_0.1.0_armhf.deb
```

##### Package installation

Now that you have downloaded the package you can proceed with the installation. First install the CLI tool `tedge`.

{{< c8y-admon-info >}}
Some operating systems may require you to use `sudo` to install packages and therefore all following commands may need `sudo`.
{{< /c8y-admon-info >}}

To install `tedge` use the following command:

```shell
dpkg -i tedge_<version>_<arch>.deb
```

**Example:**

```shell
dpkg -i tedge_0.1.0_armhf.deb
```

To install mapper for thin-edge.io use:

```shell
dpkg -i tedge_mapper_<version>_<arch>.deb
```

**Example:**

```shell
dpkg -i tedge_mapper_0.1.0_armhf.deb
```

##### Add your user to the tedge-users group

During the installation process a tedge-users group is automatically created to ease the administration of who can use the `sudo tedge` command on the device.
The `tedge` command needs to be run using `sudo`.
Unless all the users are granted sudo privileges, you must add a user to the tedge-users group for that user to be able to use `tedge`.

Run this command to add a user to the group.

```shell
sudo adduser <user> tedge-users
```
