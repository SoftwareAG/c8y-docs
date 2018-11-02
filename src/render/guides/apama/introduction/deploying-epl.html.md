---
order: 20
title: Deploying EPL
layout: redirect
---


You can use [Software AG Designer](http://www.apamacommunity.com/downloads/) to develop your applications. 

Create an Apama project in Software AG Designer and enable it for Cumulocity connectivity. For further information on that refer to "The Cumulocity IoT Transport Connectivity Plug-in" in the section "Connecting Apama Applications to External Components" in the Apama documentation.

You will need to provide your Cumulocity credentials in the project configuration. Configure the credentials in the CumulocityIoT.properties file under the Cumulocity client as follows:

```
CUMULOCITY_USERNAME=user@example.com
CUMULOCITY_TENANT=exampleTenant
CUMULOCITY_PASSWORD=examplePassword
CUMULOCITY_APPKEY=apamaAppKey

```

>**Info:** You need to [create an application](/guides/users-guide/administration#managing-applications) in Cumulocity to get a value for CUMULOCITY_APPKEY.

Develop and test your EPL in Software AG Designer.

### Deploying Apama applications as a single .mon file

When you are ready to deploy to Cumulocity, upload the .mon file containing your application through the **Own applications** page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#managing-applications). 

> **Info:** To be able to upload custom EPL rules as applications to Cumulocity you need to be subscribed to the application "apama-small". 

When the EPL is deployed to Cumulocity, each .mon file is assigned a unique package name. This prevents conflicts when multiple modules are uploaded. For this reason, you should not specify a 'package' statement in the .mon files. If you need to share events between different parts of your application, then write the event definitions and monitors that use it in a single .mon file.

The only non-Cumulocity bundles that your EPL is able to use are the Time Format bundles and the HTTP Client - JSON with generic request/response event definitions.

### Deploying Apama applications as microservices

You may also develop more complex projects which:

* are spread across multiple .mon files
* need to be isolated from other Apama applications
* use connectivity plug-ins or EPL plug-ins that are not enabled by default

These kinds of applications should be deployed as microservice to Cumulocity. 

>**Info**: This only applies if you are using Apama 10.3 or later.

Develop your Cumulocity application in Designer in the usual way (just as shown above). 

Next, you can use Apama's Docker support to turn the entire project into a microservice. In the **Project Explorer** view, right-click the project and select **Apama > Add Docker Support**, which will add a Dockerfile to the root of your project directory. When used for building, it will make use of the Apama images available in the Docker Store. You will need Docker Store credentials that give you access to the Apama images. Apama Docker images are exclusively Linux-based.

Add any custom steps to the Dockerfile that might be necessary e.g. building a custom plug-in, or copying your license file into the image.

Use the Cumulocity microservice utility for packaging and deploying the project, see [Microservice package and deploy](/guides/reference/microservice-package) in the Reference guide. When creating the directory structure for the 'microservice' tool to build from, copy your entire project directory inside that directory with the name "docker/" e.g.

	docker/monitors/
	docker/eventdefinitions/
	docker/Dockerfile
	docker/...
	cumulocity.json


You have to create the [microservice manifest](/guides/reference/microservice-manifest) manually, but there is no need for anything special in the microservice manifest; no roles or probes are required. However, if you want to configure a liveness or readiness probe, you can configure an 'httpGet' probe for the path '/ping' on port 15903 (Apama's default port). Enabling auto-scaling is not recommended, as Apama applications are usually stateful and do not automatically partition their input.

You can pack, deploy and subscribe from this directory, resulting in your Apama application being turned into a running microservice. The behaviour of the application when being run outside of Cumulocity (from Designer or your test environment) will be near-identical to its behaviour inside Cumulocity. As Apama will be using identical Cumulocity configuration in both environments, make sure that the credentials and application key that you are using in your local environment are long-lived.

When you are ready to deploy to Cumulocity, upload the application as a microservice through the **Own applications** page in the Administration application. For details, refer to [Administration > Managing applications](/guides/users-guide/administration#managing-applications). 




