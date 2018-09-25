---
order: 30
title: Send measurement
layout: redirect
---

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
