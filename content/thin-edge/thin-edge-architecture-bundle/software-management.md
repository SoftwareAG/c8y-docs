---
weight: 40
title: Software Management with thin-edge.io
layout: redirect
---

With thin-edge.io you can ease the burden of managing packages on your device. Software Management operates end-to-end from a cloud to the OS of your device and reports the statuses accordingly.

### Software management components

Software Management uses the following components to perform software operations:

TBD

#### Cloud Mapper

TBD

#### Tedge Agent

TBD

#### Software Manager Plugin

TBD

### Installation

#### tegde_agent

The `tedge_agent` is distributed as a debian package and can be installed with following command:

```shell
sudo dpkg -i tedge_agent
```

The installation adds `systemd` service `tedge-agent.service` and new user specific to the agent (`tedge-agent`). As some of the operations may require `root` permissions or `sudo` access we reccomend that the tedge-agent user is added to the `sudo` group which allows it to execute elevated commands.

This is executed using the following command:

```shell
sudo usermod -aG sudo tedge-agent
```

To start the agent, use the following command:

```shell
sudo systemctl restart tedge-agent
```

##### Plugins

SM Plugins must be stored in the `/etc/tedge/sm-plugins` directory.
