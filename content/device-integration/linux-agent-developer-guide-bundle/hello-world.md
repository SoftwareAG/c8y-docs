---
title: Lua plugin tutorial - Hello world
layout: redirect
weight: 20
---

### <a name = hello-world-example>Hello world example</a>

For the first example, let's display "Hello world" as a debug message in the agent log file. Create a  _hello.lua_ file under the _/lua_ directory or copy an existing example code using:

```shell
cp lua/example/hello.lua lua/
```

Here is the Lua script.

```lua
-- hello.lua: lua/example/hello.lua

function init()  -- init() works like main function in C/C++
   srDebug("Hello world!")        -- Debug

   srInfo("Info message")         -- Info
   srNotice("Notice message")     -- Notice
   srError("Error message")       -- Error
   srCritical("Critical message") -- Critical
end
```

The agent supports the following log levels: "Debug", "Info", "Notice", "Error" and "Critical".

Change `lua.plugins` in your _cumulocity-agent.conf_ file:.

```shell
lua.plugins=hello
```

Lua is a scripting language so that you don't need to recompile the agent. Just copy your _hello.lua_ file to _/usr/share/cumulocity-agent/lua_ and the modified _cumulocity-agent.conf_ file to _/usr/share/cumulocity-agent_ to make them reachable by the agent. Or, simply run:

```shell
sudo make uninstall
sudo make install
```

Then copy both files to the destination.

Finally, run the agent. You will see that the debug messages are recorded with timestamps in your log file. By default, the path to log file is _/var/log/cumulocity-agent.log_.

```txt
Jun 16 12:57:05 DEBUG: Hello world!
Jun 16 12:57:05 INFO: Info message
Jun 16 12:57:05 NOTICE: Notice message
Jun 16 12:57:05 ERROR: Error message
Jun 16 12:57:05 CRITICAL: Critical message
```

{{< c8y-admon-info >}}
Once you started the agent and changed some parameters from the {{< product-c8y-iot >}} tenant (that is, the measurement sending interval), the agent loads the configurations from _/var/lib/cumulocity-agent/cumulocity-agent.conf_. In this case, run `sudo make uninstall` to remove the file before copying the modified _cumulocity-agent.conf_ file.
{{< /c8y-admon-info >}}
