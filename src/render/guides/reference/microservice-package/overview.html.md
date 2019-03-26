---
order: 10
title: Overview
layout: redirect
---



Cumulocity provides you with an utility tool for easy microservice packaging, deployment and subscription. The script requires a local installation of Docker and jq, which is a lightweight and flexible JSON processor.

### Prerequisites

Verify that you have a Docker installation. The Docker version must be >= 1.2.6

```shell
$ docker version
Client:
 Version:         1.12.6
 API version:     1.24
 OS/Arch:         linux/amd64

Server:
 Version:         1.12.6
 API version:     1.24
 OS/Arch:         linux/amd64
```

Execute the following command to install the JSON processor on Linux systems:

```shell
$ sudo yum install jq
```

or the following for macOS:

```shell
$ brew install jq
```

> **Note**: You don't need to run Homebrew using `sudo` as it is extremely dangerous and no longer supported. As Homebrew does not drop privileges on installation, you would be giving all
build scripts full access to your system.


### Download the microservice utility tool

Execute the following command to download the script on Linux systems:

```shell
$ wget http://resources.cumulocity.com/examples/microservice
```

or the following for macOS:

```shell
$ curl -O http://resources.cumulocity.com/examples/microservice
```

Change the mode to allow the script to be executed:

```shell
$ chmod +x microservice
```

Use the help option to see all the available functions (goals) and options:

```shell
$ ./microservice help
```
