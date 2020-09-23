---
title: "Building packages"
layout: redirect
weight: 60
---

This repository includes RPM, Debian, and Snappy package building scripts.

>**Info:** We plan to improve these package building scripts in the future.

### RPM

After building the agent, run:

```shell
sudo make rpm args='-r 1.1' # replace 1.1 with required rpm release number
```

You might need to edit the *cumulocity-agents-linux/pkg/rpm/build_rpm.sh* file to adjust package dependencies.

### Debian

After building the agent, run:

```shell
make debian
```

You might need to edit the _cumulocity-agents-linux/pkg/debian/DEBIAN/control_ file to adjust `Architecture` to your target machine's architecture and `Depends` to the packages you are using.

### Snappy

The requirements are the same as above, but the build requires special treatment because Ubuntu Snap Core uses its own file system structure. Instead, run:

```shell
make release  PREFIX=/snap/cumulocity-agent/current/usr DATAPATH=/var/snap/cumulocity-agent/common
make snap PREFIX=/snap/cumulocity-agent/current/usr DATAPATH=/var/snap/cumulocity-agent/common
```

This will create the snap package. Then the agent needs to be installed in developer mode, since snap sandboxing is currently too restrictive. To install it, run:

```shell
sudo snap install <agent.snap> --devmode
```

The agent starts automatically after installation, also every time the machine boots.

> **Info:** Packaging requires version 2.10 of snapcraft or higher because lower versions do not support the confinement property, which is required for packaging the agent as a snap.
