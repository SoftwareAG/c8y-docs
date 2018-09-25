---
order: 20
title: Integrate to Cumulocity
layout: redirect
---

Device integration is a little more complex. The whole process is depicted in Fig 12, please refer to the [device integration](http://cumulocity.com/guides/rest/device-integration/) guide for detailed explanation. Steps *1*, *2* and *3* are specific to SmartREST protocol as SmartREST requires predefined templates, see [SmartREST guide](http://cumulocity.com/guides/rest/smartrest/) and [SmartREST reference](http://cumulocity.com/guides/reference/smartrest/) for more information. Step *4* checks if the device is already stored in *Cumulocity*'s database and only create it when it's not found. Steps *6* and *7* get the *Cumulocity* ID of the device from *Cumulocity*'s database. Step *8* sets the *Cumulocity* ID as an alias for the device ID so that the device can find its *Cumulocity* ID next time by querying with its device ID.

![img](/guides/images/cpp/img/integrate.png "Device integration flowchart.")

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

![img](/guides/images/cpp/img/mo.png "Created device in *Cumulocity* after integrate process.")

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
