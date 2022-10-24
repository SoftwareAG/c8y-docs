---
title: "Building packages"
layout: redirect
weight: 60
---

This repository includes RPM, Debian, and Snappy package building scripts.

### RPM

After building the agent, run:

```shell
sudo make rpm args='-r 1.1' # replace 1.1 with required rpm release number
```

You might need to edit the *cumulocity-agents-linux/pkg/rpm/build_rpm.sh* file to adjust package dependencies.

To include the Cloud Remote Access feature, use *cumulocity-agents-linux/pkg/rpm/build_rpm_remoteaccess.sh* instead.

### Debian

After building the agent, run:

```shell
make debian
```

You might need to edit the _cumulocity-agents-linux/pkg/debian/DEBIAN/control_ file to adjust `Architecture` to your target machine's architecture and `Depends` to the packages you are using.

To include the Modbus feature, add your libmodbus library to the `Depends:` field of the *cumulocity-agents-linux/pkg/debian/DEBIAN/control* file.

To include the Cloud Remote Access feature, use *cumulocity-agents-linux/pkg/debian/DEBIAN-remoteaccess/* instead of the default *cumulocity-agents-linux/pkg/debian/DEBIAN/*. In addition, modify the `debian:` field of your *Makefile* with the following steps.

1. Add `$(BIN_DIR)/$(VNC_BIN)` to the line in which you copy the binaries to a staging directory. The line will look like:

  ```shell
  @cp $(BIN_DIR)/$(BIN) $(BIN_DIR)/srwatchdogd $(BIN_DIR)/$(VNC_BIN) $(STAGE_DIR)/$@$(PREFIX)/bin
  ```

2. Add the following line after the line in which you copy _utils/cumulocity-agent.service_.

  ```shell
  @sed 's#$$PREFIX#$(PREFIX)#g' utils/cumulocity-remoteaccess.service > $(STAGE_DIR)/$@/lib/systemd/system/cumulocity-remoteaccess.service
  ```

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

The agent starts automatically after installation and every time the machine boots.

{{< c8y-admon-info >}}
Packaging requires version 2.10 of snapcraft or higher because lower versions do not support the confinement property, which is required for packaging the agent as a snap.
{{< /c8y-admon-info >}}

To include the Modbus feature, add your libmodbus library to the `Depends:` field of *cumulocity-agents-linux/pkg/snapcraft.yaml*.

To include the CANopen feature, first build the CANopen service. After that, overwrite the content of *cumulocity-agents-linux/pkg/snapcraft_canopen.yaml* to the default *cumulocity-agents-linux/pkg/snapcraft.yaml*. In addition, modify the `snap:` field of your _Makefile_. Add `$(BIN_DIR)/c8y_canopend` to the line in which you copy the binaries to a staging directory. The line will look like:

```shell
@cp $(BIN_DIR)/$(BIN) $(BIN_DIR)/srwatchdogd $(BIN_DIR)/c8y_canopend $(STAGE_DIR)/$@/bin
```

Make sure the first two lines of _/lua/canopen.lua_ refer to your Lua version. By default,

```lua
package.path = package.path .. ';/snap/cumulocity-agent/current/usr/share/lua/5.2/?.lua'
package.cpath = package.cpath .. ';/snap/cumulocity-agent/current/usr/lib/x86_64-linux-gnu/lua/5.2/?.so'
```

If you built the agent with Lua 5.3, you must change `5.2` to `5.3`.

To include the Cloud Remote Access feature, first build the Cloud Remote Access service. After that, overwrite the content of *cumulocity-agents-linux/pkg/snapcraft_remoteaccess.yaml* to the default *cumulocity-agents-linux/pkg/snapcraft.yaml*. In addition, modify the `snap:` field of your _Makefile_. Add a `$(BIN_DIR)/$(VNC_BIN)` to the line in which you copy the binaries to a staging directory. The line will look like:

```shell
@cp $(BIN_DIR)/$(BIN) $(BIN_DIR)/srwatchdogd $(BIN_DIR)/$(VNC_BIN) $(STAGE_DIR)/$@/bin
```
