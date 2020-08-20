---
title: "Building packages"
layout: redirect
weight: 60
---

This repository includes RPM, Debian, and Snappy package building scripts.

>**Note:** We are currently planning to improve these package building scripts.

### RPM
After building of the agent, run:
```shell
sudo make rpm args='-r 1.1' # replace 1.1 with required rpm release number
```
You might need to edit _cumulocity-agents-linux/pkg/rpm/build_rpm.sh_ file to adjust package dependencies.

### Debian
After building of the agent, run:
```shell
make debian
```
You might need to edit _cumulocity-agents-linux/pkg/debian/DEBIAN/control_ file to adjust `Architecture` to your target machine's architecture and `Depends` to your using packages.

### Snappy
The requirements are the same as above, but the build requires special treatment because Ubuntu Snap Core uses its own file system structure, instead do:

```shell
make release  PREFIX=/snap/cumulocity-agent/current/usr DATAPATH=/var/snap/cumulocity-agent/common
make snap PREFIX=/snap/cumulocity-agent/current/usr DATAPATH=/var/snap/cumulocity-agent/common
```
This will create the snap package. Then the agent needs to be installed in developer mode, since snap sandboxing is currently too restrictive. To install it run:

```shell
sudo snap install <agent.snap> --devmode
```
The agent starts automatically after installation, also at every time the machine boots.

> **Note:** packaging requires `snapcraft >= 2.10` because lower versions do not support the confinement property, which is required for packaging the agent as a snap.
