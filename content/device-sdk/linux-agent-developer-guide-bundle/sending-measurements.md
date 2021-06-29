---
title: Lua plugin tutorial - Sending measurements
layout: redirect
weight: 30
---

Let's try sending CPU measurements to {{< product-name-1 >}}. In this section, you will learn how to use the pre-defined timer function, to read parameters defined in _cumulocity-agent.conf_ file and to send measurements using an existing SmartREST1.0 template.

### Sending measurements example

This example sends a test CPU usage measurement (20%) to {{< product-name-1 >}} platform using a random interval (10 seconds) which is configured in _cumulocity-agent.conf_ as `example.cpu.interval`.

First, add a line to your _cumulocity-agent.conf_ file.

```shell
example.cpu.interval=10
```

Next, create a _cpumeasurements.lua_ file under the _/lua_ directory or copy the existing example code by

```shell
cp lua/example/hello.lua lua/
```

Here is the Lua script.

```lua
-- cpumeasurements.lua: lua/example/cpumesurements.lua

local cpuTimer

function init()
   local intervalInSec = cdb:get('example.cpu.interval') -- Get the interval from the cumulocity-agent.conf file
   cpuTimer = c8y:addTimer(intervalInSec * 1000, 'sendCPU') -- Add the timer to the agent scheduler
   cpuTimer:start() -- Start the timer
   return 0
end

function sendCPU()
   local value = 20  -- Test CPU usage (20%)
   c8y:send("326," .. c8y.ID .. ',' .. value) -- Send the test CPU usage percentage to the {{< product-name-1 >}} as measurments
end
```

`cdb:get(key) -> value` returns the value of the corresponding key set in your _cumulocity-agent.conf_. It is very useful if you want to have custom configurable variables. In the Lua script, `cdb:get('example.cpu.interval')` returns `10` as configured above.

`c8y:addTimer(interval, callback) -> timer` needs two arguments. The first argument is the interval of your timer in milliseconds. The second argument is a function to a callback. It returns a timer object.

`timer:start()` starts the timer object. In this example, `cpuTimer:start()`. To learn more about the functions of the timer object, check your _cumulocity-sdk-c/src/master/doc/lua.html_ file.

The function `sendCPU()` is called every 10 seconds. It creates a CPU usage measurement value (set to 20%) and sends it to the {{< product-name-1 >}} platform.

`c8y:send(request, prio)` can have two arguments. The second argument is optional. The first argument is a comma-separed request. In this example, `326` means that this request will be translated to template No.326 in _srtemplate.txt_. No.326 is

```plain
10,326,POST,/measurement/measurements,application/json,,%%,DATE UNSIGNED NUMBER,"{""time"":""%%"",""source"":{""id"":""%%""},""type"":""c8y_CPUMeasurement"",""c8y_CPUMeasurement"":{""Workload"":{""value"":%%,""unit"":""%""}}}"
```

`c8y.ID` returns your device ID. Thus, the content of the sending request is actually `326,<device ID>,20`. To learn more about SmartREST1.0, refer to the [Reference guide > SmartREST](/reference/smartrest/) section. The second argument of `c8y:send()` is optional so it is omitted in this example. The detail of `c8y:send()` is documented in your _cumulocity-sdk-c/src/master/doc/lua.html_ file.

Before you run the agent again, change `lua.plugins` in your _cumulocity-agent.conf_ file:

```shell
lua.plugins=hello,cpumeasurments
```

Deploy _cpumeasurements.lua_ like the [Hello world](./#hello-world-example) example. Then run the agent. You can check your device in the **Device Management** application. The CPU Measurement (20%) will be reported periodically.
![cpumeasurments](/images/device-sdk/cpumeasurements.png)
