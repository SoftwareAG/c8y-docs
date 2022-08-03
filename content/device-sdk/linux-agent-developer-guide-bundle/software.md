---
title: Lua plugin tutorial - Software management
layout: redirect
weight: 50
---

For the last example, let's write a script to support software management. For details on our software management feature, refer to [Device Management > Managing device data](/users-guide/device-management/#managing-device-data).

### Software management example

This section introduces a Lua plugin that handles `c8y_SoftwareList` operation, sending the installed package list to the {{< product-c8y-iot >}} platfrom and triggering the installation or removal of packages from there.
This example assumes that the device supports **Debian** packages.

First, the agent needs to send `c8y_SoftwareList` as `c8y_SupportedOperations` as we did in the restart example section.
Edit _src/demoagent.cc_ and add `Q(c8y_SoftwareList)`. Then recompile the agent.
Now the agent will send a `c8y_SoftwareList` operation when it starts up.

Create a _software.lua_ file under the _/lua_ directory or by copying the existing example code.

```shell
cp lua/example/software.lua lua/
```

Let's take a look at the example code step by step.

In the beginning, you can find the `apt` commands to install/remove/list Debian packages. If your device supports a different package controlling system, modify this part.

```lua
-- Linux commands
local cmd_list = 'apt list --installed'
local cmd_install = 'apt install -y'
local cmd_remove = 'apt remove -y'

-- File extention
local file_ext = '.deb'
```

Next, go into the init() function.

```lua
function init()
   c8y:addMsgHandler(837, 'clear')
   c8y:addMsgHandler(814, 'aggregate')
   c8y:addMsgHandler(815, 'perform')

   c8y:send('319,' .. c8y.ID .. ',' .. pack(pkg_list()))
   return 0
end
```

Before receiving any operation, it sends a list of installed software with message template `319`. You can find the `c8y_SoftwareList` format in the [Device information guide](/reference/device-management-library/#device-info).

`pkg_list()` returns a table. If your package control system is not `apt`, you also need to change how to extract software names and versions from the command you defined.

```lua
local function pkg_list()
   local tbl = {}
   local file = io.popen(cmd_list)
   for line in file:lines() do
      -- This pattern needs to be modified if not using apt
      local name, version = string.match(line, '([%w%-%.]+)/.- (.-) .+')
      if name and version then tbl[name] = version end
   end
   file:close()
   return tbl
end
```

If you create any `c8y_SoftwareList` operation from the UI, the agent will receive the list of software packages which are supposed to be installed. In other words, the agent also receives information about unchanged packages with the message template `814`. The `aggregate` function sums up information about all received packages in a table.
![restarted-device](/images/device-sdk/software-install.png)

After the aggregation is completed, the `perform` function is called. The function:

- Updates the operation status to EXECUTING
- Validates package names
- Creates a list for software packages to be installed
- Creates a list for software packages to be removed
- Downloads software packages from the server (inventory/binaries)
- Removes software packages by the pre-defined command
- Installs software packages by the pre-defined command
- Updates the operation status to FAILED (with a reason) if any of the above tasks failed
- Updates the operation status to SUCCESSFUL
- Sends the updated package list to the server

Before you run the agent again, change `lua.plugins` in your _cumulocity-agent.conf_ file:

```shell
lua.plugins=hello,cpumeasurments,restart,software
```

Deploy _software.lua_ like the [Hello world](./#hello-world-example) example. Then run the agent.

Now go to your {{< product-c8y-iot >}} tenant, create a software operation. You'll see the operation is managed by this script.

{{< c8y-admon-info >}}
MQTT connection has a [payload limit](/device-sdk/mqtt/#implementation).
If the result of `cmd_list` (for example `apt list --installed`) is huge, the agent might fail to send its package list.
It is recommended to drop uninteresting packages from the sending list or pick up only interesting packages.
For example, if you want to manage only `lua` and `modbus` packages, you can define `cmd_list` to `apt list --installed | grep -e lua -e modbus`.
{{< /c8y-admon-info >}}
