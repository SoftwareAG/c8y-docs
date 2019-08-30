---
weight: 10
title: Developing applications
layout: redirect
---

Follow these steps to develop applications.

**Step 1 - Install Software AG Designer**

You can use Software AG Designer to develop your applications. [Download](http://www.apamacommunity.com/downloads/) and install Software AG Designer from the Apama Community. 

**Step 2 - Create a project**

Once installed, create an Apama project in Software AG Designer and enable it for Cumulocity IoT connectivity. For instructions on how to create an Apama project, refer to [Creating Apama projects](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/apama-webhelp/index.html#page/apama-webhelp%2FWIZARD_NEW_APAMA_PROJECT.html) in the Apama documentation.


**Step 3 - Add Apama bundles to the project**

Add the following Apama bundles to the newly created Apama project. For instructions on how to add bundles to a project, refer to [Adding bundles to projects](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/apama-webhelp/index.html#page/apama-webhelp%2Fco-UsiApaStu_adding_bundles_to_projects.html) in the Apama documentation.

* **Cumulocity IoT > Event Definitions for Cumulocity** <br>
Provides event APIs required for sending and receiving data to/from Cumulocity IoT.
* **Cumulocity IoT > Utilities for Cumulocity** <br>
Provides helper utility functions for working with data received from Cumulocity IoT.
* **Any Extractor** <br>
Provides support for extracting values from the `any` type.
* **Time Format** <br>
Required to access all the methods of the Time Format plug-in. Useful for formatting and parsing time.
* **HTTP Client Generic Events** <br>
Exposes predefined generic events used by the HTTP client connectivity plug-in.

**Step 4 - Create sample EPL application**

To create a new Apama EPL file, refer to [Creating new monitor files for EPL applications](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/apama-webhelp/index.html#page/apama-webhelp%2FWIZARD_NEW_MONITORSCRIPT.html) in the Apama documentation.

Follow the steps as described in [Using the Apama Event Processing Language (EPL)](/guides/concepts/realtime/#using-epl) to create a sample EPL application.

Before you deploy this EPL application to Cumulocity IoT, you might want to test if this application works as expected. To do so, you need to add the following bundles to your Software AG Designer project.

* **Automatic onApplicationInitialized**<br>
This starts all connectivity plug-ins immediately on start up.
* **HTTP Client > JSON with generic request/response event definitions**
* **Cumulocity IoT > Cumulocity Client**

For further information, see [The Cumulocity IoT Transport Connectivity Plug-in](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_the_cumulocity_connectivity_plug_in.html) in the Apama documentation.

**Step 5 - Provide credentials**

You will need to provide your Cumulocity IoT credentials in the project configuration. Configure the credentials in the *CumulocityIoT.properties* file under the Cumulocity client. For example:

```
CUMULOCITY_USERNAME=user@example.com 
CUMULOCITY_SERVER_URL=http://exampleTenant.cumulocity.com 
CUMULOCITY_PASSWORD=examplePassword 
CUMULOCITY_APPKEY=apamaAppKey
```

>**Info:** You need to [create an application](/guides/users-guide/administration#managing-applications) in Cumulocity IoT to get a value for `CUMULOCITY_APPKEY`.

Note that the above description assumes that you are connecting to a tenant where the URL identifies the tenant. If that is not true (for example, if you are connecting by IP address) you may need to set this in the *CumulocityIoT.properties* file: 

```
CUMULOCITY_TENANT=my_custom_tenant
```

You can now proceed with testing your EPL in Software AG Designer.

Once the EPL application is ready, refer to [Deploying applications](/guides/apama/analytics-introduction/#deploying-apps) to upload the EPL application as a single \*.mon file.
