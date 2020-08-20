---
title: Lua plugin tutorial - Sending measurements
layout: redirect
weight: 20
---

Let's try sending CPU measurements to **Cumulocity IoT**. In this section, you will learn how to use the pre-defined timer function, to read parameters defined in _cumulocity-agent.conf_ file, and to send measurements with existing SmartREST1.0 template.

### Sending measurements example
This example sends fake CPU usage (20%) to Cumulocity with the interval which is configured in _cumulocity-agent.conf_ as `example.cpu.interval`.

First, add a line to your _cumulocity-agent.conf_.
```shell
example.cpu.interval=10
```

Next, create _cpumeasurements.lua_ file under _/lua_ directory with the following code or copy the existing example code by
```shell
cp lua/example/hello.lua lua/
```

Here is the Lua script.
```lua
-- cpumeasurements.lua: lua/example/cpumesurements.lua

local cpuTimer

function init()
   local intervalInSec = cdb:get('example.cpu.interval') -- Get the interval from cumulocity-agent.conf
   cpuTimer = c8y:addTimer(intervalInSec * 1000, 'sendCPU') -- Add the timer to agent scheduler
   cpuTimer:start() -- Start the timer
   return 0
end

function sendCPU()
   local value = 20  -- Fake cpu usage (20%)
   c8y:send("326," .. c8y.ID .. ',' .. value) -- Send the fake cpu usage to Cumulocity as measurments
end
```

`cdb:get(key) -> value` returns the value of the corresponding key set in your _cumulocity-agent.conf_. It is very useful if you want to have custom configurable variables. With this example, `cdb:get('example.cpu.interval')` returns `10` as you configured above.

`c8y:addTimer(interval, callback) -> timer` needs two arguments. The first argument is an interval of your timer in milliseconds. The second argument is a function to a callback. It returns a timer object.

`timer:start()` starts the timer object. In this example, `cpuTimer:start()`. To know more functions timer object can do, please check out your _cumulocity-sdk-c/src/master/doc/lua.html_.

So, the function `sendCPU()` is called every 10 seconds. It creates fake CPU value (always 20%) and sends it to Cumulocity.

`c8y:send(request, prio)` can have two arguments. The second argument is optional. The first argument is comma-separed request. In this example, `326` means that this request will be translated to template No.326 in _srtemplate.txt_. No.326 is
```plain
10,326,POST,/measurement/measurements,application/json,,%%,DATE UNSIGNED NUMBER,"{""time"":""%%"",""source"":{""id"":""%%""},""type"":""c8y_CPUMeasurement"",""c8y_CPUMeasurement"":{""Workload"":{""value"":%%,""unit"":""%""}}}"
```
`c8y.ID` returns your device ID. Thus, the content of the sending request is actually `326,<device ID>,20`. To know more about SmartREST1.0, our [Reference guide > SmartREST](/reference/smartrest/) is helpful. The second argument of `c8y:send()` is optional so that this example omits it. The detail of `c8y:send()` is documented in your _cumulocity-sdk-c/src/master/doc/lua.html_.

Before you run the agent again, do not forget to add `cpumesurements` to `lua.plugins=` in your _cumulocity-agent.conf_ file.
```shell
lua.plugins=hello,cpumeasurments
```
Deploy _cpumeasurements.lua_ like [Hello world example](./#hello-world-example). The run your agent! You can check your device in **Device Management**. CPU Measurements 20% is being reported periodically.
![cpumeasurments](/images/device-sdk/cpumeasurements.png)
