---
order: 10
title: Overview
layout: redirect
---


Cumulocity provides you with an utility tool for easy microservice packaging, deployment and subscription. The script requires a local installation of Docker and jq, which is a lightweight and flexible JSON processor.

### Prerequisites

#### Docker

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

#### JSON processor

Execute the following command to install the JSON processor on Linux systems:

```shell
$ sudo yum install jq
```

For macOS, use the following command:

```shell
$ brew install jq
```

> **Info**: You don't need to run Homebrew using `sudo` as it is extremely dangerous and no longer supported. As Homebrew does not drop privileges on installation, you would be giving all
build scripts full access to your system.

#### Bash

The microservice utility tool (script) needs version 4+ to run. Verify your Bash version with the following command:

```shell
$ bash --version

GNU bash, version 5.0.3(1)-release (x86_64-apple-darwin18.2.0)
Copyright (C) 2019 Free Software Foundation, Inc.
```

macOS systems come with a preinstalled Bash version 3.x. Hence, you must update it in order to execute the microservice script. To do so, execute the following commands:

```shell
$ brew install bash
$ chsh -s /usr/local/bin/bash
```

If your Bash version has not changed while executing `bash --version`, you may need to restart your system. Note that the updated interpreter gets installed at */usr/local/bin/bash* and you will have to modify the first line of the microservice script as follows:

```bash
#!/usr/local/bin/bash

or

#!
```

### Configure the microservice utility tool

Execute the following command to download the script on Linux systems:

```shell
$ wget http://resources.cumulocity.com/examples/microservice
```

For macOS, use the following command:

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
