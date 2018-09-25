---
order: 40
title: Handle operation
layout: redirect
---

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

![img](/guides/images/cpp/img/restart.png "Execute a restart operation in *Cumulocity*.")
