---
order: 70
title: Use MQTT instead of HTTP
layout: redirect
---

MQTT is a publish and subscribe based light-weight messaging protocol, renders it very suitable for IoT communication. It solves two major issues inherit to HTTP: 1) HTTP header predominantly overweights SmartREST payload since SmartREST messages are generally very short. 2) MQTT has built-in support for real-time notification via subscribe and publish mechanism, hence, there is no need for a separate connection for device push.

Above examples are all using HTTP as the transportation layer. Besides HTTP, `SrReporter` also supports MQTT as the transportation layer. Listing 13 shows the modification needed for transforming the example in Section (See section 1.4) from using HTTP into using MQTT.

    // ex-07-mqtt-legacy: src/main.cc
    
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

As you can see, all modification needed is to construct `SrReporter` with a different constructor so `SrReporter` knows to use MQTT as underlying communication protocol, and remove `SrDevicePush` in the code since MQTT has built-in support for real-time notification. Optionally, you can set the keep-alive interval for MQTT to prevent the underlying TCP connection from being interrupted.

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