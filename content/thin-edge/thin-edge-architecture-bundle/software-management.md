---
weight: 50
title: Software management with thin-edge.io
layout: redirect
opensource: true
---

With thin-edge.io you can ease the burden of managing packages on your device. Software management operates end-to-end from a cloud to the OS of your device and reports the statuses accordingly.

### Installation

#### tegde_agent

The tedge_agent is distributed as a Debian package and can be installed with following command:

```shell
sudo dpkg -i tedge_agent
```

The installation adds systemd service `tedge-agent.service` and new user specific to the agent (tedge-agent). As some of the operations may require root permissions or sudo access we reccomend you to add the tedge-agent user to the sudo group which allows it to execute elevated commands.

This is executed using the following command:

```shell
sudo usermod -aG sudo tedge-agent
```

To start the agent, use the following command:

```shell
sudo systemctl restart tedge-agent
```

##### Plugins

SM plugins must be stored in the */etc/tedge/sm-plugins* directory.
