---
weight: 30
title: C++ Device integration
layout: redirect
---

Before we really get started, we need a {{< product-c8y-iot >}} account. Go to <https://{{< domain-c8y >}}> and apply for a free trial. Click **Try for free** on the top-right corner. After signing-up and logging to your tenant, you can find the device registration page in the Device Management application. Later we will show how you may register a device in {{< product-c8y-iot >}} using the library.

![{{< product-c8y-iot >}} Registration Page](/images/cpp/img/registerd.png)

Without any further ado, let's start with the customary *Hello world* example. Open the *cumulocity-sdk-c/examples/ex-01-hello/main.cc* file with the following code:

```cpp
// ex-01-hello: examples/ex-01-hello/main.cc
#include <iostream>
#include <sragent.h>
#include <srlogger.h>

using namespace std;

int main ()
{
    const char *server = "http://developer.cumulocity.com";
    const char *credentialPath = "/tmp/helloc8y";
    const char *deviceID = "myID_1234";          // unique device identifier

    srLogSetLevel(SRLOG_DEBUG);                 // set log level to debug
    SrAgent agent(server, deviceID);            // instantiate the SmartREST agent

    if (agent.bootstrap(credentialPath))        // bootstrap to {{< product-c8y-iot >}}
        return 0;

    cout << "Hello world of {{< product-c8y-iot >}}!" << endl;

    return 0;
}
```

{{< c8y-admon-info >}}
It is strongly encouraged that you pick a different random value for `deviceID` as this is the unique identifier of your device.
{{< /c8y-admon-info >}}

For convenience, let's define a shell variable `C8Y_LIB_PATH` to hold the library root path and use it to feed the compiler, so it can find all the necessary C++ header files and shared library (*.so* file).

```shell
$ export C8Y_LIB_PATH=/library/root/path
$ g++ -std=c++11 -I$C8Y_LIB_PATH/include main.cc -L$C8Y_LIB_PATH/lib -lsera
```
{{< c8y-admon-info >}}
You can define the variable `C8Y_LIB_PATH` in your *.bashrc* file, so you don't need to define it every time when launching a new terminal. From now on, let's assume you have done it, so it won't be mentioned in later examples.
{{< /c8y-admon-info >}}

Finally, it's time to run our first program.

```shell
$ LD_LIBRARY_PATH=$C8Y_LIB_PATH/lib ./a.out
...
Hello world of {{< product-c8y-iot >}}!
```

Type the `deviceID` into the text field in your registration page as shown in the image below.

![{{< product-c8y-iot >}} Registration Page](/images/cpp/img/register-deviceID.png)

Click **Next** to continue with the registration.
After the program has run, click **Accept** and your device will be registered and shown in your tenant.

![{{< product-c8y-iot >}} Registration Page](/images/cpp/img/device-pending.png)

As illustrated previously, the program will print to the standard output *Hello world of {{< product-c8y-iot >}}!* and then exit. Voila! That's all we need to register a device to {{< product-c8y-iot >}}.

The obtained device credential is stored in the folder */tmp/helloc8y* as defined in the variable `credentialPath`. You can also find the credential in **Management** > **Device credentials** in the Device Management application.

{{< c8y-admon-info >}}
If you re-run the program a second time, it will print *Hello world of {{< product-c8y-iot >}}!* and exit immediately. This is because the program has loaded the available credential from the given credential file. You can manually delete the credential file if you want the program to request a new credential.
{{< /c8y-admon-info >}}

### Integrating to the platform

Device integration is a bit more complex as illustrated in the flow diagram below. Refer to [Device SDK for REST > Device integration](/device-sdk/rest#device-integration) for a detailed explanation. **Steps 1**, **2** and **3** are specific to the SmartREST protocol as SmartREST requires predefined templates, see [Using the REST interface > Using SmartREST](/microservice-sdk/rest#smartrest) in the *Microservice SDK guide* and the [SmartREST reference](/reference/smartrest-two/) in the *Reference guide* for more information. **Step 4** checks if the device is already stored in {{< product-c8y-iot >}}'s database and only creates it when it's not found. **Steps 6** and **7** get the ID of the device from the {{< product-c8y-iot >}}'s database. **Step 8** sets the {{< product-c8y-iot >}} ID as an alias for the device ID, so that the device can find its {{< product-c8y-iot >}} ID next time by querying with its device ID.

![Device integration flowchart](/images/cpp/img/integrate.png)

The code snippet below shows the required API interface by `SrAgent` when implementing your own integrate process. Basically, you must subclass the pure virtual class `SrIntegrate` and implement its virtual function `integrate` with your particular integrate process. This is a callback function, which will be called by `SrAgent` when you call the `integrate` method of the `SrAgent`. By convention, the function shall return 0 for success, and a non-0 value for failure.

```cpp
// ex-02-integrate: examples/ex-02-integrate/integrate.h
#ifndef INTEGRATE_H
#define INTEGRATE_H
#include <sragent.h>

class Integrate: public SrIntegrate
{
public:
    Integrate(): SrIntegrate() {}
    virtual ~Integrate() {}
    virtual int integrate(const SrAgent &agent, const string &srv,
                          const string &srt);
};
#endif /* INTEGRATE_H */
```

The following code snippet implements the flow diagram depicted above. You may have noticed that all requests are comma-separated values (CSV) since we are using SmartREST instead of REST APIs directly. It is important to mention that you must store the correct SmartREST *X-ID* and device's *{{< product-c8y-iot >}} ID* in the inherited member variables `xid` and `id` respectively. They will be used by `SrAgent` after the integrate process for initializing the corresponding internal variables.

```cpp
// ex-02-integrate: examples/ex-02-integrate/integrate.cc
#include <srnethttp.h>
#include <srutils.h>
#include "integrate.h"
using namespace std;

int Integrate::integrate(const SrAgent &agent, const string &srv, const string &srt)
{
    SrNetHttp http(agent.server()+"/s", srv, agent.auth());
    if (registerSrTemplate(http, xid, srt) != 0) // Step 1,2,3
        return -1;

    http.clear();
    if (http.post("100," + agent.deviceID()) <= 0) // Step 4
        return -1;
    SmartRest sr(http.response());
    SrRecord r = sr.next();
    if (r.size() && r[0].second == "50") { // Step 4: NO
        http.clear();
        if (http.post("101") <= 0) // Step 5
            return -1;
        sr.reset(http.response());
        r = sr.next();
        if (r.size() == 3 && r[0].second == "501") {
            id = r[2].second; // Step 7
            string s = "102," + id + "," + agent.deviceID();
            if (http.post(s) <= 0) // Step 8
                return -1;
            return 0;
        }
    } else if (r.size() == 3 && r[0].second == "500") { // Step 4: YES
        id = r[2].second;                               // Step 6
        return 0;
    }
    return -1;
}
```

The corresponding SmartREST templates can be found in the snippet below, which extends the code presented above. The only addition inside the `main` function is the call to `SrAgent`'s member function `integrate` for integrating to {{< product-c8y-iot >}} and `loop` for executing the agent loop. Above the `main` function is the definition of the SmartREST template version number and actual template content.


```cpp
// ex-02-integrate: examples/ex-02-integrate/main.cc
#include <sragent.h>
#include <srlogger.h>
#include "integrate.h"

using namespace std;

static const char *srversion = "helloc8y_1"; // SmartREST template version
static const char *srtemplate =              // SmartREST template collection
    "10,100,GET,/identity/externalIds/c8y_Serial/%%,,"
    "application/json,%%,STRING,\n"

    "10,101,POST,/inventory/managedObjects,application/json,"
    "application/json,%%,,\"{\"\"name\"\":\"\"HelloC8Y-Agent\"\","
    "\"\"type\"\":\"\"c8y_hello\"\",\"\"c8y_IsDevice\"\":{},"
    "\"\"com_cumulocity_model_Agent\"\":{}}\"\n"

    "10,102,POST,/identity/globalIds/%%/externalIds,application/json,,%%,"
    "STRING STRING,\"{\"\"externalId\"\":\"\"%%\"\","
    "\"\"type\"\":\"\"c8y_Serial\"\"}\"\n"

    "11,500,$.managedObject,,$.id\n"
    "11,501,,$.c8y_IsDevice,$.id\n";

int main ()
{
    const char *server = "http://developer.cumulocity.com";
    const char *credentialPath = "/tmp/helloc8y";
    const char *deviceID = "13344568"; // unique device identifier

    srLogSetLevel(SRLOG_DEBUG);        // set log level to debug

    Integrate igt;
    SrAgent agent(server, deviceID, &igt); // instantiate SrAgent

    if (agent.bootstrap(credentialPath))   // bootstrap to {{< product-c8y-iot >}}
        return 0;
    if (agent.integrate(srversion, srtemplate)) // integrate to {{< product-c8y-iot >}}
        return 0;

    agent.loop();
    return 0;
}
```

After running this example, you will see a device named *HelloC8Y-Agent* in the devices list under **Devices** > **All devices** in the Device Management application.

![Created device in {{< product-c8y-iot >}} after integration process](/images/cpp/img/all-devices.png)

### Sending measurements

Now that we have successfully integrated a demo device to {{< product-c8y-iot >}}, we can indeed do something more interesting. Let's try sending CPU measurements every 10 seconds.

As shown in [Integrating to {{< product-c8y-iot >}}](#integrating-to-cumulocity-iot), first we must add a new SmartREST template for CPU measurement and also increase the template version number. Then we subclass the pure virtual class `SrTimerHandler` and implement the `()` operator. `CPUMEasurement` is a callback functor which generates bogus CPU measurements using the `rand` function from the standard library. It will be called by the `SrAgent` at a defined interval of the registered `SrTimer`.

In the `main` function, we instantiate a `CPUMEasurement` and register it to a `SrTimer` in the class constructor. `SrTimer` supports millisecond resolution, so 10 seconds are 10,000 milliseconds.

The library is built upon an asynchronous model. Hence, the `SrAgent` class is not responsible for any networking duty, rather it is essentially a scheduler for all timer and message handlers. `SrAgent.send` merely places a message into the `SrAgent.egress` queue and returns immediately after. For actually sending SmartREST requests to {{< product-c8y-iot >}}, we must instantiate a `SrReporter` object and execute it in a separate thread.

```cpp
// ex-03-measurement: examples/ex-03-measurement/main.cc
#include <cstdlib>

static const char *srversion = "helloc8y_2";
static const char *srtemplate =
// ...
    "10,103,POST,/measurement/measurements,application/json,,%%,"
    "NOW UNSIGNED NUMBER,\"{\"\"time\"\":\"\"%%\"\","
    "\"\"source\"\":{\"\"id\"\":\"\"%%\"\"},"
    "\"\"type\"\":\"\"c8y_CPUMeasurement\"\","
    "\"\"c8y_CPUMeasurement\"\":{\"\"Workload\"\":"
    "{\"\"value\"\":%%,\"\"unit\"\":\"\"%\"\"}}}\"\n"
// ...

class CPUMeasurement: public SrTimerHandler {
public:
    CPUMeasurement() {}
    virtual ~CPUMeasurement() {}
    virtual void operator()(SrTimer &timer, SrAgent &agent) {
        const int cpu = rand() % 100;
        agent.send("103," + agent.ID() + "," + to_string(cpu));
    }
};

int main ()
{
    // ...
    CPUMeasurement cpu;
    SrTimer timer(10 * 1000, &cpu); // Instantiate a SrTimer
    agent.addTimer(timer);          // Add the timer to agent scheduler
    timer.start();                  // Activate the timer
    SrReporter reporter(server, agent.XID(), agent.auth(),
                        agent.egress, agent.ingress);

    if (reporter.start() != 0)      // Start the reporter thread
        return 0;
    agent.loop();

    return 0;
}
```

{{< c8y-admon-info >}}
If you add a `SrTimer` to the `SrAgent`, you must ensure its existence throughout the program lifetime since there is no way to remove a `SrTimer` from the `SrAgent`. Alternatively, you can use `SrTimer.connect` to register a different callback or deactivate it by `SrTimer.stop`. This is a design choice for encouraging timer reuse, instead of dynamically creating and destroying timers.
{{< /c8y-admon-info >}}

### Handling operations

Besides sending requests, such as measurements to {{< product-c8y-iot >}}, the other important functionality is to handle messages; either responses from GET queries or real-time operations from {{< product-c8y-iot >}}. The following example shows how to handle the `c8y_Restart` operation. Again, first we must register the necessary SmartREST templates. Then we define a message handler for handling the restart operation.

```cpp
// ex-04-operation: examples/ex-04-operation/main.cc
static const char *srversion = "helloc8y_3";
static const char *srtemplate =
// ...
    "10,104,PUT,/inventory/managedObjects/%%,application/json,,%%,"
    "UNSIGNED STRING,\"{\"\"c8y_SupportedOperations\"\":[%%]}\"\n"

    "10,105,PUT,/devicecontrol/operations/%%,application/json,,%%,"
    "UNSIGNED STRING,\"{\"\"status\"\":\"\"%%\"\"}\"\n"
// ...
    "11,502,,$.c8y_Restart,$.id,$.deviceId\n";
// ...

class RestartHandler: public SrMsgHandler {
public:
    RestartHandler() {}
    virtual ~RestartHandler() {}
    virtual void operator()(SrRecord &r, SrAgent &agent) {
        agent.send("105," + r.value(2) + ",EXECUTING");
        for (int i = 0; i < r.size(); ++i)
            cout << r.value(i) << " ";
            cout << endl;
            agent.send("105," + r.value(2) + ",SUCCESSFUL");
    }
};

int main()
{
    // ...
    // Inform {{< product-c8y-iot >}} about supported operations
    agent.send("104," + agent.ID() + ",\"\"\"c8y_Restart\"\"\"");
    RestartHandler restartHandler;
    agent.addMsgHandler(502, &restartHandler);
    SrDevicePush push(server, agent.XID(), agent.auth(), agent.ID(), agent.ingress);

    if (push.start() != 0)      // Start the device push thread
        return 0;
    agent.loop();

    return 0;
}
```

In the `main` function, we register the `RestartHandler` for SmartREST template (502), which is the template for the restart operation. We must also instantiate a `SrDevicePush` object and start executing device push in another thread. From now on, as soon as you execute an operation from your {{< product-c8y-iot >}} tenant, device push will receive the operation immediately and your message handler will be invoked by the `SrAgent`.

Now run the program and go to your {{< product-c8y-iot >}} tenant, execute a restart operation as shown in the image below.
Afterwards, you should see the message printed in the standard output `cout` and the operation status set to SUCCESSFUL in your control tab.

![Execute a restart operation](/images/cpp/img/restarted-device.png)

### Storing SmartREST templates in a file

Your template collection could grow large over time. Hence, you would like to store them in a text file instead of hard coding them in your source code.
The benefits are two-fold: you don't need to recompile the code every time only because the templates change, and there is no need to escape special characters which is error-prone.

An utility function `readSrTemplate` is provided for reading a template collection from a text file. The following example shows the usage of this function.
It reads the file *srtemplate.txt* from the current directory and stores the version number and template content into arguments `srversion` and `srtemplate` respectively.

```cpp
// ex-05-template: examples/ex-05-template/main.cc
#include <srutils.h>
// ...

int main ()
{
    // ...
    string srversion, srtemplate;
    if (readSrTemplate("srtemplate.txt", srverision, srtemplate) != 0)
        return 0;
    // ...
}
```

The file format required by `readSrTemplate` is as simple as follows:

-   The first line contains only the template ID.
-   Every template must be in a separate line.
-   A line starting with `#` as first character (with no leading spaces or tabs) is considered a comment line and will be ignored.
-   A complete empty line (with no spaces and tabs) will be ignored.
-   No trailing spaces or tabs are allowed for any line except comment lines.

See below an example of a template file.

```
helloc8y_3

10,100,GET,/identity/externalIds/c8y_Serial/%%,,application/json,%%,STRING,

10,101,POST,/inventory/managedObjects,application/json,application/json,%%,, "{""name"":""HelloC8Y-Agent"",""type"":""c8y_hello"", ""c8y_IsDevice"":{},""com_cumulocity_model_Agent"":{}}"

10,102,POST,/identity/globalIds/%%/externalIds,application/json,,%%,STRING STRING,"{""externalId"":""%%"",""type"":""c8y_Serial""}"

10,103,POST,/measurement/measurements,application/json,,%%,NOW UNSIGNED NUMBER,"{""time"":""%%"",""source"":{""id"":""%%""}, ""type"":""c8y_CPUMeasurement"", ""c8y_CPUMeasurement"":{""Workload"":{""value"":%%,""unit"":""%""}}}"

10,104,PUT,/inventory/managedObjects/%%,application/json,,%%,UNSIGNED STRING, "{""c8y_SupportedOperations"":[%%]}"

10,105,PUT,/devicecontrol/operations/%%,application/json,,%%,UNSIGNED STRING, "{""status"":""%%""}"

11,500,$.managedObject,,$.id

11,501,,$.c8y_IsDevice,$.id

11,502,,$.c8y_Restart,$.id,$.deviceId
```

### Lua plugin

Instead of using C++ for development, the library also supports rapid development in Lua. For this, you must build the library explicitly enabling Lua support as it is disabled by default. Refer to [Customizing the build](/device-sdk/cpp/#custom) for more details.

The following example shows how to load the Lua plugin and add the path *lua/* into Lua's *package.path* for library search path.

```cpp
// ex-06-lua: examples/ex-06-lua/main.cc
#include <srluapluginmanager.h>
// ...

int main()
{
    // ...
    SrLuaPluginManager lua(agent);
    lua.addLibPath("lua/?.lua");  // add given path to Lua package.path
    lua.load("lua/myplugin.lua"); // load Lua plugin
    // ...

    return 0;
}
```

It is feasible to send CPU measurements and handle operations in Lua instead of C++. All Lua plugins are managed by `SrLuaPluginManager`, and it is exposed to all Lua plugins as an opaque object named `c8y`. The only requirement for a Lua plugin is to have an `init` function, which will be called by `SrLuaPluginManager` at load time to initialize the Lua plugin.

The following example shows how to send CPU measurements, define your own Lua library and share its variable `myString` in your Lua plugins.

```
-- ex-06-lua: examples/ex-06-lua/lua/mylib.lua
myString = "Hello, {{< product-c8y-iot >}}!"

----------------------------------------

-- ex-06-lua: examples/ex-06-lua/lua/myplugin.lua
require('mylib')
local timer

function restart(r)
   c8y:send('105,' .. r:value(2) .. ',EXECUTING')
   for i = 0, r.size - 1 do     -- index in C++ starts from 0.
      srDebug(r:value(i))
   end
   c8y:send('105,' .. r:value(2) .. ',SUCCESSFUL')
end

function cpuMeasurement()
   local cpu = math.random(100)
   c8y:send('103,' .. c8y.ID .. ',' .. cpu)
end

function init()
   srDebug(myString)            -- myString from mylib
   timer = c8y:addTimer(10 * 1000, 'cpuMeasurement')
   c8y:addMsgHandler(502, 'restart')
   timer:start()
   return 0                     -- signify successful initialization
end
```

{{< c8y-admon-info >}}
If you encounter an error saying "Package lua was not found in the pkg-config search path." when building this example, then you must modify the expression `$(shell pkg-config --cflags lua)` to add a proper version number to Lua. The proper version number depends on your installed Lua version and your Linux distribution.
{{< /c8y-admon-info >}}

### Using MQTT instead of HTTP

MQTT is a publish and subscribe based light-weight messaging protocol, and it renders very suitable for IoT communication. It solves two major issues inherit to HTTP: 1) HTTP header predominantly overweights SmartREST payload since SmartREST messages are generally very short. 2) MQTT has built-in support for real-time notification via subscribe and publish mechanism, hence, there is no need for a separate connection for device push.

All the previous examples are using HTTP as the transportation layer. Besides HTTP, `SrReporter` also supports MQTT as the transportation layer. The following example shows the modification needed for using MQTT instead of HTTP.

```cpp
// ex-07-mqtt-legacy: examples/ex-07-mqtt-legacy/main.cc

int main()
{
    // ...
    SrReporter reporter(string(server) + ":1883", deviceID, agent.XID(),
                        agent.tenant() + '/' + agent.username(),
                        agent.password(), agent.egress, agent.ingress);

    // set MQTT keep-alive interval to 180 seconds.
    reporter.mqttSetOpt(SR_MQTTOPT_KEEPALIVE, 180);
    if (reporter.start() != 0)      // Start the reporter thread
        return 0;

    agent.loop();
    return 0;
}
```

As you can see, the modification needed is to construct `SrReporter` with a different constructor, so `SrReporter` now uses MQTT as underlying communication protocol, and removes `SrDevicePush` in the code since MQTT has built-in support for real-time notification. Optionally, you can set the keep-alive interval for MQTT to prevent the underlying TCP connection from being interrupted.

### Final remarks

1. All examples can be found in the [cumulocity-sdk-c/examples](https://github.com/SoftwareAG/cumulocity-sdk-c/tree/master/examples) folder in the GitHub repository.
2. The API reference is located in relative path *doc/html/index.html* in the library repository.
3. The agent loop is an infinite loop, so it will never really return.
4. Consult the [SmartREST reference](/reference/smartrest-two/) about how to define SmartREST templates.
5. The code excerpts only include the added part. Check the *examples* folder for the complete example code.
6. This is especially important when you dynamically allocate a timer on the heap: you must not destroy it while the program is running.
7. Check the Lua API reference in *doc/lua.html* for a complete list of all available APIs.
