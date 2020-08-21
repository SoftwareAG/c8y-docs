---
title: Lua plugin tutorial - Software management
layout: redirect
weight: 50
---

As the last example, let's write a script to support software management. The detail for our software
management feature, please refer to [Device Management > Managing device data](/users-guide/device-management/#managing-device-data).

### Software management example
This section introduces a Lua plugin that handles `c8y_SoftwareList` operation.
Sending the installed package list to **Cumulocity IoT** and triggering to install/remove packages from there.
This example assumes the device supports **Debian** packages.

First, the agent needs to send `c8y_SoftwareList` as `c8y_SupportedOperations` as we did in the restart example section.
Edit _src/demoagent.cc_. and add `Q(c8y_SoftwareList)`. Then recompile your agent.
Now your agent is ready for sending `c8y_SoftwareList` operation when the agent starts up.

Create _software.lua_ file under _/lua_ directory by copying the existing example code.
```shell
cp lua/example/software.lua lua/
```

Let's take a look at the example code step by step.

In the beginning, you can find `apt` commands to install/remove/list Debian packages. If your device supports different package controlling system, please modify this part.

```lua
-- Linux commands
local cmd_list = 'apt list --installed'
local cmd_install = 'apt install -y'
local cmd_remove = 'apt remove -y'

-- File extention
local file_ext = '.deb'
```

Next, go into init() function.

```lua
function init()
   c8y:addMsgHandler(837, 'clear')
   c8y:addMsgHandler(814, 'aggregate')
   c8y:addMsgHandler(815, 'perform')

   c8y:send('319,' .. c8y.ID .. ',' .. pack(pkg_list()))
   return 0
end
```

Before receiving any operation, it sends only installed software list with message template `319`. You can find `c8y_SoftwareList` format from [our documentation](/reference/device-management/#device-information).

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

If you create any `c8y_SoftwareList` operation from UI, the agent will receive the list of software packages which are supposed to be installed at last. In other words, the agent also receives unchanged packages information with the message template `814`. The `aggregate` function sums up all received packages information into a table.
![restarted-device](/images/device-sdk/software-install.png)

After the aggregation finishes, the `perform` function is called. All this function does are:
- Update the operation status to EXECUTING
- Validate package names
- Create a list for software packages to be installed
- Create a list for software packages to be removed
- Download software packages from the server (inventory/binaries)
- Remove software packages by the pre-defined command
- Install software packages by the pre-defined command
- If any of the above failed, update the operation status to FAILED with the reason
- Update the operation status to SUCCESSFUL
- Send the updated package list to the server

Let's try it out. Before you run the agent again, do not forget to add `software` to `lua.plugins=` in your _cumulocity-agent.conf_ file.
```shell
lua.plugins=hello,cpumeasurments,restart,software
```
Deploy _software.lua_ like [Hello world example](./#hello-world-example). Then run your agent.

Now go to your Cumulocity IoT tenant, create a software operation. You'll see the operation is managed by this script.

> **Note:** MQTT connection has a [payload limit](/device-sdk/mqtt/#implementation).
If the result of `cmd_list` (e.g. `apt list --installed`) is huge, the agent might fail to send its package list.
It is recommended to drop uninteresting packages from the sending list or pick up only interesting packages.
For example, if you want to manage only `lua` and `modbus` packages, you can define `cmd_list` to `apt list --installed | grep -e lua -e modbus`.
