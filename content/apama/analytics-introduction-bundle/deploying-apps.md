---
weight: 20
title: Deploying apps
layout: redirect
---

You can deploy the following to Cumulocity IoT:

* EPL apps. You can [develop or import a single \*.mon file with Apama EPL Apps](#single-mon-file). This is the simplest mechanism for deploying an EPL app.
* Apama applications. You can upload complex Apama applications (that is, Apama projects developed with Software AG Designer) to Cumulocity IoT and [deploy them as custom microservices](#deploying-as-microservice) using the Cumulocity IoT Microservice SDK.

> **Info:** In Apama EPL Apps, the term "activate" is used for deploying an app.


### <a name="single-mon-file"></a>Deploying EPL apps as single \*.mon files with Apama EPL Apps

>**Info**: To be able to deploy single \*.mon files with Apama EPL Apps, your tenant needs to be subscribed to both the Apama-ctrl microservice and the Apama EPL Apps web  application provided in Cumulocity IoT. If you have the Apama Starter microservice or the Apama Smart Rules-only microservice, Apama EPL Apps is not available in the application switcher. If you want to have this capability, contact [product support](/about-doc/contacting-support).

When an Apama EPL app (that is, a \*.mon file) is activated in Cumulocity IoT, the \*.mon file is assigned a unique package name. This prevents conflicts when multiple modules are activated. For this reason, you should not specify a `package` statement in a \*.mon file. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single \*.mon file.

There is a restricted set of utilities and base events available for your EPL app. At the time of writing, these include the **Time Format** and **HTTP Client > JSON with generic request/response event definitions** bundles.

When any EPL app signals a runtime error, this will be raised as an alarm. Runtime errors include uncaught exceptions, as well as any explicit logging of warnings and errors that your EPL app chooses to do. Health issues that relate to the Apama runtime in general will also be raised as alarms.

For more detailed diagnostics of the Apama runtime and any active EPL apps, you can look at the logs for the Apama-ctrl microservice. See [Managing applications](/users-guide/administration/#managing-applications) in the *User guide* for more information on log files. However, some familiarity with Apama is necessary to get the most out of an Apama log file.

### <a name="deploying-as-microservice"></a>Deploying Apama applications as microservices

Using Software AG Designer, you can also develop more complex projects which:

* are spread across multiple \*.mon files
* need to be isolated from other Apama applications
* use connectivity plug-ins or EPL plug-ins that are not enabled by default

These kinds of applications should be deployed as microservices to Cumulocity IoT.

>**Info**: This only applies if you are using Apama 10.3 or later.

#### Required settings in the microservice manifest

The microservice manifest provides the required settings to manage microservice instances and the application deployment in Cumulocity IoT. For detailed information, see [Microservice manifest](/microservice-sdk/concept/#manifest) in the *Microservice SDK guide*.

Apama can only be used in a single-tenant microservice. Therefore, the microservice manifest must set the isolation level to PER_TENANT. The reason for this is that Apama's Cumulocity IoT transport connectivity plug-in can only communicate with the tenant to which it is deployed. Therefore, having an Apama shared between multiple tenants is invalid.

The following permissions are required by the microservice in order to start up and and use all features in the Cumulocity IoT transport from EPL. These are set with requiredRoles in the microservice manifest.

- ROLE_APPLICATION_MANAGEMENT_READ
- ROLE_INVENTORY_READ
- ROLE_INVENTORY_ADMIN
- ROLE_INVENTORY_CREATE
- ROLE_MEASUREMENT_READ
- ROLE_MEASUREMENT_ADMIN
- ROLE_EVENT_READ
- ROLE_EVENT_ADMIN
- ROLE_ALARM_READ
- ROLE_ALARM_ADMIN
- ROLE_DEVICE_CONTROL_READ
- ROLE_DEVICE_CONTROL_ADMIN
- ROLE_IDENTITY_READ
- ROLE_OPTION_MANAGEMENT_READ
- ROLE_BULK_OPERATION_READ
- ROLE_SMS_ADMIN

> **Info:** The above is the minimum list of permissions that a custom Apama microservice needs. If you are developing a custom microservice, you may add more permissions to the microservice manifest.

#### To deploy an Apama application as a microservice

1. Develop your application in Software AG Designer in the usual way.

2. You can use Apama's Docker support to turn the entire project into a microservice. In the **Project Explorer** view, right-click the project and select **Apama > Add Docker Support**, which will add a Dockerfile to the root of your project directory.

	When used for building, it will make use of the Apama images available on Docker Hub. You will need Docker Hub credentials that give you access to the Apama images. Apama Docker images are exclusively Linux-based.

3. Add any custom steps to the Dockerfile that might be necessary, for example, building a custom plug-in, or copying your license file into the image.

4. Use the Cumulocity IoT microservice utility tool for packaging and deploying the project; for detailed information, see [Microservice utility tool](/microservice-sdk/concept/#ms-utility-tool) in the *Microservice SDK guide*. When creating the directory structure for the microservice utility tool to build from, copy your entire project directory inside that directory with the name "docker/". For example:

    *docker/monitors/*<br>
    *docker/eventdefinitions/*<br>
    *docker/Dockerfile*<br>
    *docker/...*<br>
    *cumulocity.json*

    You have to create the [microservice manifest](/microservice-sdk/concept/#manifest) manually, but there is no need for anything special in the microservice manifest; no roles or probes are required. However, if you want to configure a liveness or readiness probe, you can configure an `httpGet` probe for the path */ping* on port 15903 (Apama's default port). Enabling auto-scaling is not recommended, as Apama applications are usually stateful and do not automatically partition their input.

    You can pack, deploy and subscribe from this directory, resulting in your Apama application being turned into a running microservice. The behavior of the application when being run outside of Cumulocity IoT (from Software AG Designer or your test environment) will be near-identical to its behavior inside Cumulocity IoT. When deployed as a microservice doing requests to the Cumulocity IoT API, Apama will automatically pick up the credentials to connect to the tenant you deployed it to, overwriting any other credentials provided to Apama. However, if you wish to receive real-time events, you will need to have valid credentials specified in the project configuration as you do when connecting to Cumulocity IoT from an external Apama environment.

5. When you are ready to deploy to Cumulocity IoT, upload the application as a microservice. For details, refer to [Administration > Managing applications](/users-guide/administration#managing-applications) in the *User guide*.
