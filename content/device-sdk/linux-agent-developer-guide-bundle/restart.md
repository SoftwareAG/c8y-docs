---
title: Lua plugin tutorial - Restart device
layout: redirect
weight: 40
---

Besides sending requests, e.g., measurements to the Cumulocity IoT platform, another important function is handling incoming messages from Cumulocity IoT; either responses from GET queries or real-time operations.  
Here, two examples are presented. The first example only shows you how to handle the `c8y_Restart` operation in Lua. It is a simplified version of the [ex-06-lua](/device-sdk/cpp/#use) example in the Cumulocity IoT C++ SDK. The second example shows you a more practical implementation including saving the operation ID after rebooting.


<a name="restart"></a>
### Restart device example - simple

First, this example sends the operation status EXECUTING when it receives the `c8y_Restart` operation. Then, it logs "Executing restart.." in the log file, and sends SUCCESSFUL as the operation status update to the server.

In the beginning, the agent needs to send `c8y_Restart` as `c8y_SupportedOperations` to notify this agent can handle restart operation.

Edit the _src/demoagent.cc_ file like this to add `Q(c8y_Restart)`.

```cpp
const char *ops = ",\"" Q2(c8y_Command) Q(c8y_ModbusDevice) Q(c8y_SetRegister)
        Q(c8y_ModbusConfiguration) Q(c8y_SerialConfiguration) Q(c8y_SetCoil)
        Q(c8y_LogfileRequest) Q(c8y_RemoteAccessConnect)
        Q(c8y_CANopenAddDevice) Q(c8y_CANopenRemoveDevice)
        Q(c8y_CANopenConfiguration) Q(c8y_Restart)"\"";
```

Then recompile your agent. Now your agent will send the `c8y_Restart` operation when it starts up.

Next, create a _restart-simple.lua_ file under the _/lua_ directory or copy the existing example code

```shell
cp lua/example/restart-simple.lua lua/
```

Here is the Lua script.

```lua
-- restart-simple.lua: lua/restart-simple.lua
function restart(r)
   srDebug('Agent received c8y_Restart operation!')
   c8y:send('303,' .. r:value(2) .. ',EXECUTING', 1)
   srDebug('Executing restart..')
   c8y:send('303,' .. r:value(2) .. ',SUCCESSFUL', 1)
end

function init()
   c8y:addMsgHandler(804, 'restart')
   return 0   -- signify successful initialization
end
```

`c8y:addMsgHandler(MsgID, callback)` registers a message callback for the message ID. In this example, the message ID is 804, which is:

```plain
11,804,,$.c8y_Restart,$.id,$.deviceId
```

`11` means it is a response template. `804` is the message ID. The blank field is a base JSON path. `$.c8y_Restart` is a conditional JSON path, which is necessary for this example to identify the operation. `$.id` receives the operation ID and `$.deviceId` holds the device ID. For more details on the SmartREST response template, refer to [Reference guide > SmartREST > Template](/reference/smartrest/#templates).

When the agent receives the message ID, this message handler triggers to invoke `restart()`. `r` is the recursive variable. So, `r:value(2)` points the received operation ID.

The operation status needs to transit PENDING->EXECUTING->SUCCESSFUL/FAILED. The agent needs to update the operation status to EXECUTING first. This is what

```lua
c8y:send('303,' .. r:value(2) .. ',EXECUTING', 1)
```

is doing. In practice, the agent needs to execute reboot afterwards, but since this is a simple example, replace it by logging debug message "Executing restart..". This message will be buffered when the connection gets lost as the message priority is marked `1`.

After finishing the execution, the agent needs to inform that it is done using the following code.

```lua
c8y:send('303,' .. r:value(2) .. ',SUCCESSFUL', 1)
```

In case of failure, you can also mark FAILED with failure reason by using message template 304.

```
c8y:send('304,' .. r:value(2) .. ',Write your failure reason')
```

Now, it is your time to try it out. Before you run the agent again, change `lua.plugins` in your _cumulocity-agent.conf_ file:

```shell
lua.plugins=hello,cpumeasurments,restart-simple
```

Deploy _restart-simple.lua_ like [Hello world example](./#hello-world-example). Then run your agent.

Now go to your Cumulocity IoT tenant, execute a restart operation as shown in the image below. Afterwards, you should see the message printed in the log file and the operation status set to SUCCESSFUL in your control tab.
![restarted-device](/images/device-sdk/restarted-device.png)


### Restart device example - practical

The first example does not execute the real rebooting command. For practical usage, you need to take into account how to keep the operation ID before/after rebooting a device.

Here is the easiest example to overcome this problem.

```lua
-- restart.lua: lua/example/restart.lua
local fpath = '/usr/share/cumulocity-agent/restart.txt'

function restart(r)
   c8y:send('303,' .. r:value(2) .. ',EXECUTING', 1)
   local file = io.open(fpath, 'w')
   if not file then
      c8y:send('304,' .. r:value(2) .. ',"Failed to store Operation ID"', 1)
      return
   end
   file:write(r:value(2))  -- write the operation ID to the local file
   file:close()
   local ret = os.execute('reboot')
   if ret == true then ret = 0 end  -- for Lua5.2 and 5.3
   if ret == nil then ret = -1 end  -- for Lua5.2 and 5.3
   if ret ~= 0 then
      os.remove(fpath)  -- remove the local file when error occurs
      c8y:send('304,' .. r:value(2) .. ',"Error code: ' .. ret .. '"', 1)
   end
end

function init()
   c8y:addMsgHandler(804, 'restart')
   local file = io.open(fpath, 'r')
   local opid
   if file then  -- file should be exist after rebooting
      opid = file:read('*n')
      file:close()
      os.remove(fpath) -- delete the temporary local file
   end
   if opid then
      c8y:send('303,' .. opid .. ',SUCCESSFUL', 1)
   end
   return 0
end
```

It stores the operation ID in a local file before triggering the `reboot` command. After the reboot, the agent sends SUCCESSFUL with the stored operation ID to the server.

`os.execute()` is a Lua command, which is equivalent to the C `system()` function. It passes commands to be executed by an operating system shell. `os.execute('reboot')` calls the Linux reboot command. You can adjust it for your system.
