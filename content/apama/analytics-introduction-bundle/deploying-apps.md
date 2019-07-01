---
weight: 20
title: Deploying applications
layout: redirect
---

>**Info**: To be able to upload single .mon files to Cumulocity, your tenant needs to be subscribed to both Apama applications provided in Cumulocity. See [applications](/guides/reference/applications#application-names) in the Reference guide for details.

### Deploying Apama applications as a single .mon file with the Apama-epl application

The Apama-epl application provides an interface for uploading and deploying EPL apps (.mon files), as well as interactively editing new or pre-existing EPL apps. Any user on the tenant wishing to use this application will need to be a **CEP Manager**. See [managing permissions](/guides/users-guide/administration/#managing-permissions).

When the EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.

The only non-Cumulocity bundles that your EPL is able to use are the Time Format bundles and the HTTP Client - JSON with generic request/response event definitions.

When any EPL app signals a runtime error, this will be raised as an alarm. Runtime errors include uncaught exceptions, as well as any explicit logging of warnings and errors that your EPL app chooses to do. Health issues that relate to the Apama runtime in general will also be raised as alarms.

For more detailed diagnostics of the Apama runtime and any active EPL apps, you can look at the logs for the “apama-ctrl” microservice. See [log files](/guides/users-guide/administration#managing-applications) for more details. However, some familiarity with Apama is necessary to get the most out of an Apama log file.


>**Side note** Be aware that the EPL editor makes use of a standard web component. It provides many generic developer functions, some of which are not relevant to EPL, including but not limited to Quick Fix and Show Hover.

### Deploying Apama applications as microservices

You may also develop more complex projects which:

* are spread across multiple .mon files
* need to be isolated from other Apama applications
* use connectivity plug-ins or EPL plug-ins that are not enabled by default

These kinds of applications should be deployed as microservice to Cumulocity. 

>**Info**: This only applies if you are using Apama 10.3 or later.

#### To deploy an Apama application as microservice

1. Develop your Cumulocity application in Designer in the usual way (just as shown above). 

2. You can use Apama's Docker support to turn the entire project into a microservice. In the **Project Explorer** view, right-click the project and select **Apama > Add Docker Support**, which will add a Dockerfile to the root of your project directory. <br>
When used for building, it will make use of the Apama images available in the Docker Store. You will need Docker Store credentials that give you access to the Apama images. Apama Docker images are exclusively Linux-based.
3. Add any custom steps to the Dockerfile that might be necessary e.g. building a custom plug-in, or copying your license file into the image.
4. Use the Cumulocity microservice utility for packaging and deploying the project, see [Microservice package and deploy](/guides/reference/microservice-package) in the Reference guide. When creating the directory structure for the 'microservice' tool to build from, copy your entire project directory inside that directory with the name "docker/" e.g.

		docker/monitors/
		docker/eventdefinitions/
		docker/Dockerfile
		docker/...
		cumulocity.json


	You have to create the [microservice manifest](/guides/reference/microservice-manifest) manually, but there is no need for anything special in the microservice manifest; no roles or probes are required. However, if you want to configure a liveness or readiness probe, you can configure an 'httpGet' probe for the path '/ping' on port 15903 (Apama's default port). Enabling auto-scaling is not recommended, as Apama applications are usually stateful and do not automatically partition their input.

	You can pack, deploy and subscribe from this directory, resulting in your Apama application being turned into a running microservice. The behaviour of the application when being run outside of Cumulocity (from Designer or your test environment) will be near-identical to its behaviour inside Cumulocity. As Apama will be using identical Cumulocity configuration in both environments, make sure that the credentials and application key that you are using in your local environment are long-lived.

5. When you are ready to deploy to Cumulocity, upload the application as a microservice through the **Own applications** page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#managing-applications). 