---
order: 15
title: Use
layout: default
---
<div id="table-of-contents">
<h2>Table of Contents</h2>
<div id="text-table-of-contents">
<ul>
<li><a href="#ch:use">1. Using the Library</a>
<ul>
<li><a href="#sec:start">1.1. Getting Started</a></li>
<li><a href="#sec-1-2">1.2. Integrate to Cumulocity</a></li>
<li><a href="#sec-1-3">1.3. Send Measurement</a></li>
<li><a href="#sec-1-4">1.4. Handle Operation</a></li>
<li><a href="#sec-1-5">1.5. Store SmartREST Templates in a File</a></li>
<li><a href="#sec-1-6">1.6. Lua Plugin</a></li>
</ul>
</li>
</ul>
</div>
</div>

# Using the Library<a id="ch:use" name="ch:use"></a>



## Getting Started<a id="sec:start" name="sec:start"></a>


Before we really get started, we will need a *Cumulocity* account. Go to <https://cumulocity.com/>, you can apply for a free trial account by click the "TRY CUMULOCITY FREE" button on the top-right corner. After signing-up and login to your tenant, you would find the device registration page in *Device Management*. Next, we will demonstrate how to register a device to *Cumulocity* using the library.

![img](/guides/cpp/img/register.png "Cumulocity Registration Page.")

Without any further ado, let's write our first program, the customary *hello world* example shown in Listing 1.

    // ex-01-hello: src/main.cc
    #include <sragent.h>
    #include <srlogger.h>
    using namespace std;
    
    int main()
    {
            const char *server = "http://developer.cumulocity.com";
            const char *credentialPath = "/tmp/helloc8y";
            const char *deviceID = "13344568";   // unique device identifier
            srLogSetLevel(SRLOG_DEBUG);          // set log level to debug
            SrAgent agent(server, deviceID);     // instantiate SrAgent
            if (agent.bootstrap(credentialPath)) // bootstrap to Cumulocity
                    return 0;
            cerr << "Hello, Cumulocity!" << endl;
            return 0;
    }

<div class="note">
It's strongly encouraged that you pick a different random value for `deviceID`, as it's the unique identifier of your device.

</div>

For convenience, let's define a shell variable `C8Y_LIB_PATH` to hold the library root path and use it to feed the compiler so it can find all necessary `C++` header files and shared library `.so` file.

    $ export C8Y_LIB_PATH=/library/root/path
    $ g++ -std=c++11 -I$C8Y_LIB_PATH/include -L$C8Y_LIB_PATH/lib -lsera main.cc

<div class="note">
You can define the variable `C8Y_LIB_PATH` in your `.bashrc` file so you don't need to define it every time when launching a new terminal. From now on, I'd assume you have done so and will mention no more about `C8Y_LIB_PATH` in later examples.

</div>

    $ LD_LIBRARY_PATH=$C8Y_LIB_PATH/lib ./a.out
    ...
    Hello, Cumulocity!

Finally, it's time to run our first program. Type the `deviceID` into the text field in your registration page (Fig 2) and click *Register device*. After the program is running, a green *Accept* button shall show up, click it to accept your device into your tenant.

As illustrated, the program will print *Hello, Cumulocity!* then exit. Voila, that's all we need to register a device to *Cumulocity*.

The obtained device credential is stored in `/tmp/helloc8y` as defined in variable `credentialPath`. You can also find the credential in the *Device credential* page in your *Cumulocity* portal.

<div class="note">
If you re-run the program the second time, the program will print *Hello, Cumulocity!* and exit immediately. This is because the program has loaded available credential from the given credential file. You can manually delete the credential file if you want the program to request a new credential.

</div>

## Integrate to Cumulocity<a id="sec-1-2" name="sec-1-2"></a>

Device integration is a little more complex. The whole process is depicted in Fig 12, please refer to the [device integration](http://cumulocity.com/guides/rest/device-integration/) guide for detailed explanation. Steps *1*, *2* and *3* are specific to SmartREST protocol as SmartREST requires predefined templates, see [SmartREST guide](http://cumulocity.com/guides/rest/smartrest/) and [SmartREST reference](http://cumulocity.com/guides/reference/smartrest/) for more information. Step *4* checks if the device is already stored in *Cumulocity*'s database and only create it when it's not found. Steps *6* and *7* get the *Cumulocity* ID of the device from *Cumulocity*'s database. Step *8* sets the *Cumulocity* ID as an alias for the device ID so that the device can find its *Cumulocity* ID next time by querying with its device ID.

![img](/guides/cpp/img/integrate.png "Device integration flowchart.")

    // ex-02-integrate: src/integrate.h
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

Listing 4 shows the required API interfaceby `SrAgent` when implementing your own integrate process. Basically, you need to subclass the pure virtual class `SrIntegrate` and realize its virtual function `integrate` with your particular integrate process. This is a callback function, which will be called by `SrAgent` when you call the `integrate` method of the `SrAgent`. By convention, the function shall returned 0 for success, and a non-0 value for failure.

    // ex-02-integrate: src/integrate.cc
    #include <srnethttp.h>
    #include <srutils.h>
    #include "integrate.h"
    using namespace std;
    
    
    int Integrate::integrate(const SrAgent &agent, const string &srv,
                             const string &srt)
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
                    id = r[2].second;                           // Step 6
                    return 0;
            }
            return -1;
    }

Listing 5 realizes the flow chart depicted in Fig 12. You may have noticed all requests are Comma Separated Values (CSV) since we are using SmartREST instead of REST APIs directly. The corresponding SmartREST templates can be found in Listing 6. Important thing to note is that, you must store the correct SmartREST *X-ID* and device's *Cumulocity ID* in the inherited member variables `xid` and `id`, respectively. They will be used by `SrAgent` after the integrate process for initializing corresponding internal variables.

![img](/guides/cpp/img/mo.png "Created device in *Cumulocity* after integrate process.")

Listing 6 extends the code in Listing 1. The only addition inside the `main` function is the call to `SrAgent`'s member function `integrate` for integrating to *Cumulocity* and `loop` for executing the agent loop. Above the `main` function is the definition of the SmartREST template version number and actual template content.

Please refer to Section (See section 1.1) about how to compile and run the code. After running this example code, you should see a device named `HelloC8Y-Agent` in *All devices* page in your *Cumulocity* tenant, as shown in Fig 15.

    // ex-02-integrate: src/main.cc
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
    
    int main()
    {
            const char *server = "http://developer.cumulocity.com";
            const char *credentialPath = "/tmp/helloc8y";
            const char *deviceID = "13344568"; // unique device identifier
            srLogSetLevel(SRLOG_DEBUG);        // set log level to debug
            Integrate igt;
            SrAgent agent(server, deviceID, &igt); // instantiate SrAgent
            if (agent.bootstrap(credentialPath))   // bootstrap to Cumulocity
                    return 0;
            if (agent.integrate(srversion, srtemplate)) // integrate to Cumulocity
                    return 0;
            agent.loop();
            return 0;
    }

## Send Measurement<a id="sec-1-3" name="sec-1-3"></a>

Now we have successfully integrated a demo device to *Cumulocity*, we can finally do something more interesting. Let's try sending CPU measurement every 10 seconds.

As shown in Listing 7, we need to first add a new SmartREST template for CPU measurement, and also increase the SmartREST template version number. Then we subclass the pure virtual class `SrTimerHandler` and implement the `()` operator. `CPUMEasurement` is a functor callback, which generates bogus CPU measurements using the `rand` function from the standard library. It will be called by the `SrAgent` at defined interval of the registered `SrTimer` .

In the `main` function, we instantiate a `CPUMEasurement` and register it to an `SrTimer` in the *constructor*. `SrTimer` supports millisecond resolution, so 10 seconds is 10 \* 1000 milliseconds.

The library is built upon an asynchronous model. Hence, the `SrAgent` class is not responsible for any networking duty, it is essentially a scheduler for all timer and message handlers. `SrAgent.send` merely places a message into the `SrAgent.egress` queue, and returns immediately after. For actually sending SmartREST requests to *Cumulocity*, we need to instantiate a `SrReporter` object and execute it in a separate thread.

    // ex-03-measurement: src/main.cc
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
    
    int main()
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

<div class="note">
If you add a `SrTimer` to the `SrAgent`, you must ensure its existence throughout the program lifetime, since there is no way to remove a `SrTimer` from the `SrAgent`. Instead, you can use `SrTimer.connect` to register a different callback or deactivate it by `SrTimer.stop`. This is a design choice for encouraging timer reuse, instead of dynamically creating and destroying timers.

</div>

## Handle Operation<a id="sec-1-4" name="sec-1-4"></a>

Besides sending requests, e.g., measurements to *Cumulocity*, the other important functionality is handle messages, either responses from *GET* queries or real-time operations from *Cumulocity*. Listing 8 demonstrates how to handle the *c8y<sub>Restart</sub>* operation. Again, first we will need to register necessary SmartREST templates. Then we define a message handler for handling restart operation.

In the `main` function, we register the `RestartHandler` for SmartREST template \(502\), which is the template for the restart operation. We also need to instantiate a `SrDevicePush` object and starting execute device push in another thread. From now on, as soon as you execute an operation from your *Cumulocity* portal, device push will receive the operation immediately and your message handler will be invoked by the `SrAgent`.

    // ex-04-operation: src/main.cc
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
                            cerr << r.value(i) << " ";
                    cerr << endl;
                    agent.send("105," + r.value(2) + ",SUCCESSFUL");
            }
    };
    
    int main()
    {
            // ...
            // Inform Cumulocity about supported operations
            agent.send("104," + agent.ID() + ",\"\"\"c8y_Restart\"\"\"");
            RestartHandler restartHandler;
            agent.addMsgHandler(502, &restartHandler);
            SrDevicePush push(server, agent.XID(), agent.auth(),
                              agent.ID(), agent.ingress);
            if (push.start() != 0)      // Start the device push thread
                    return 0;
            agent.loop();
            return 0;
    }

Now run the program, then go to your *Cumulocity* tenant, execute an restart operation as shown in Fig 26. You should see the message printed in `cerr` and the operation is set to *SUCCESSFUL* in your control tab in *Cumulocity*.

![img](/guides/cpp/img/restart.png "Execute a restart operation in *Cumulocity*.")

## Store SmartREST Templates in a File<a id="sec-1-5" name="sec-1-5"></a>

Over time, your template collection would grow large, and you would like to store them in a text file instead of hard coding them in your source code. The benefits are tow-fold: you don't need to recompile the code every time only because the templates change, and there is no need to escape special characters which is error-prone.

A utility function `readSrTemplate` is provided for reading template collection from a text file. Listing 9 shows the usage of this function. It reads file *srtemplate.txt* from the current directory and stores the version number and template content into arguments `srversion` and `srtemplate`, respectively.

    // ex-05-template: src/main.cc
    #include <srutils.h>
    // ...
    
    int main()
    {
            // ...
            string srversion, srtemplate;
            if (readSrTemplate("srtemplate.txt", srverision, srtemplate) != 0)
                    return 0;
            // ...
    }

The file format required by `readSrTemplate` is as simple as following:

-   First line contains only the template version number.
-   Every template must be on one line of its own.
-   A line starts with `#` as first character (with no leading spaces or tabs) is considered a comment line and will be ignored.
-   A complete empty line (with no spaces and tabs) will be ignored.
-   No trailing spaces or tabs are allowed for any line except comment lines.

See listing 10 for an example of template file.

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

## Lua Plugin<a id="sec-1-6" name="sec-1-6"></a>

Instead of using `c++` for your development, the library also supports rapid development in `Lua`. For `Lua` plugin support, you must build the library with explicitly enabling `Lua` support, as it's disabled by default, see Chapter (See section ) about how to enable `Lua` plugin support.

Listing 11 demonstrates how to load a `Lua` plugin and add path `lua/` into `Lua`'s `package.path` for library search path.

    // ex-06-lua: src/main.cc
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

Listing 12 shows how to send CPU measurements and handle operation in `Lua` instead of `c++`. All `Lua` plugins are managed by `SrLuaPluginManager`, it is exposed to all `Lua` plugins as an opaque object named *c8y*. The only requirement for a `Lua` plugin is having a `init` function, which will be called by `SrLuaPluginManager` at load time to initialize the `Lua` plugin.

The example also shows how to define your own `Lua` library and share its variable `myString` in your `Lua` plugins.

    -- ex-06-lua: lua/mylib.lua
    myString = "Hello, Cumulocity!"
    
    ----------------------------------------
    
    -- ex-06-lua: lua/myplugin.lua
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
       return 0                     -- signify successful initialization
    end

<div class="note">
You may encounter an error saying "Package lua was not found in the pkg-config search path." when building this example, then you would need to modify the expression `$(shell pkg-config --cflags lua)` to add a proper version number to `lua`. The proper version number depends on your installed Lua version and your Linux distribution.

</div>

<div id="footnotes">
<h2 class="footnotes">Footnotes: </h2>
<div id="text-footnotes">

<div class="footdef"><sup><a id="fn.1" name="fn.1" class="footnum" href="#fnr.1">1</a></sup> All examples can be found in the `examples` folder in the repository.</div>

<div class="footdef"><sup><a id="fn.2" name="fn.2" class="footnum" href="#fnr.2">2</a></sup> The API reference is located in relative path `doc/html/index.html` in the library repository.</div>

<div class="footdef"><sup><a id="fn.3" name="fn.3" class="footnum" href="#fnr.3">3</a></sup> The agent loop is an infinite loop, so it will never really returns. We will get back to this function later.</div>

<div class="footdef"><sup><a id="fn.4" name="fn.4" class="footnum" href="#fnr.4">4</a></sup> Consult the [SmartREST reference](http://cumulocity.com/guides/reference/smartrest/) about how to define SmartREST templates.</div>

<div class="footdef"><sup><a id="fn.5" name="fn.5" class="footnum" href="#fnr.5">5</a></sup> The code excerpt only includes the added part, check the *examples* folder for the complete example code.</div>

<div class="footdef"><sup><a id="fn.6" name="fn.6" class="footnum" href="#fnr.6">6</a></sup> This is especially important when you dynamically allocate a timer on the heap, you must not destroy it during the program is running.</div>

<div class="footdef"><sup><a id="fn.7" name="fn.7" class="footnum" href="#fnr.7">7</a></sup> Check `Lua` API reference in `doc/lua.html` for a complete list of all available APIs.</div>


</div>
</div>