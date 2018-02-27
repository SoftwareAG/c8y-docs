---
order: 40
title: Developing applications
layout: default
---
## Overview

Cumulocity is designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. Tenants can subscribe to applications to get

* optional features extending the Cumulocity user interface,
* entirely new user interfaces,
* server-side business logic through microservices.

This section introduces the basic concepts around applications in Cumulocity.

## Cumulocity applications

The Cumulocity user interface itself is built around a framework based on AngularJS and Bootstrap, the currently most modern HTML5 web application frameworks. It is designed in a modular fashion around a set of plugins that can be dynamically enabled and disabled even by end users. Users can create their own configurations of the Cumulocity user interface, just showing functionality they need for their particular purpose. For this purpose, the Administration application contains a plugin editor -- which is itself a plugin.

![Plugin editor](/guides/concepts-guide/plugineditor.png)

For more information on developing plugins, refer to the [Web SDK for Plugins](/guides/web/introduction) in the Developer Guide.

Applications are identified by a so-called *application key*. The application key enables Cumulocity to associate a request with one particular application.

An application can be any combination of

* a complete, standalone user interface application, regardless if based on the Cumulocity UI framework (see below) or any other web components of your choice,
* a set of user interface plugins.

User interface applications appear in the application switcher on the top right of Cumulocity, so that users can navigate between the subscribed applications. They can be hosted on an external web site, in which case the application switcher just directs the user to that website. They can also be hosted through Cumulocity, in which case the application will be made available through a URL <tenant>.cumulocity.com/apps/<application>.

![App switcher](/guides/concepts-guide/appswitcher.png)

## Registering and subscribing to applications

For an application to be available it has to be registered at the Cumulocity platform and at least one subscription is required.

For details on how to deploy an application to Cumulocity, refer to [Administration > Managing applications](/guides/users-guide/administration#applications). 

A management tenant can provide access to the application to Enterprise tenants by subscription. Subscribing subtenants to applications is done using the Administration application.

![Application Subscription](/guides/concepts-guide/applicationsubscription.png)

For details on subscribing applications to subtenants refer to [Administration > Managing tenants](/guides/users-guide/administration#tenants). 

## Hosting

To host your own HTML5 and JavaScript web applications through Cumulocity, navigate to "Own applications" in the Cumulocity Administration application and click "Add new".

![List of own applications](/guides/concepts-guide/ownapplications.png)

There are two types of applications that can be configured:

-  Hosted: The applications are served from a repository such as Bitbucket or Github to a user-defined path and are visible in the application switcher.
-   External: The applications are completely external and are just shown in the application switcher.

Assume that you are developing a web application using Bitbucket as a code repository. In this case, exposing the application through Cumulocity can be done as follows:

1. Enter the name of the application. This is shown in the application switcher at the top left of the screen.
1. Optionally, enter an application key. This is used to distinguish your application from other applications in case you want to publish your application to other companies.
1. Select "Hosted" as type.
1. Select the URL that is used to make your application available to users.
1. Enter the URL to your repository. In case of Bitbucket, the URL has the following structure:<br>
<pre><code>https://bitbucket.org/<bitbucket user>/<bitbucket repository>/raw/<branch>/[path inside repository]</code></pre>

1. If your repository is private, enter the username and password of a Bitbucket user that is permitted to access the repository. Currently, basic authentication is the only supported authentication method (i.e. straight Bitbucket username and password, not any of the OpenID providers).
1. Save the application.

Now the application shows up in the application switcher. You can click on the link in the list of own applications to verify if the configuration was successful.

![Configuring a new application](/guides/concepts-guide/ownapplicationdetail.png)

## Developing microservices

### Overview

Microservices are standalone applications, which follow specific conventions and are deployed within the Cumulocity infrastructure. 

When developing a Cumulocity microservice, a developer is not restricted  to any programming language. However, a microservice must serve as a HTTP server working on port 80 and be encapsulated in a docker image. 

>**Info:** For Java developers Cumulocity provides a [Microservice SDK](/guides/java/developing-microservice) and a [Hello World](/guides/java/java-microservice) example for developing microservices.

Cumulocity implements a PaaS paradigm. This way developers can focus on business logic and leave hosting, scaling and availability monitoring to Cumulocity. Moreover, Cumulocity provides its API on which you can build functionalities, as well as other microservices that you can orchestrate. This way, Cumulocity microservices are a comfortable means to provide new functionalities to Cumulocity and extend existing ones. 

![microservice_infrastructure](/guides/concepts-guide/microservice_infrastructure.png)

The Cumulocity microservice infrastructure is built with docker. This requires that a program is packaged as docker image in order to run on the Cumulocity platform. Docker image is an executable package that includes everything needed to run an application, while docker container is a running image. For more information on docker refer to the [Docker documentation](https://docs.docker.com/get-started/)). 

An application must be stateless as it can be restarted by the platform, scaled up or down based on CPU usage, although a microservice can persist data on the Cumulocity platform using its API. 

### Microservice manifest

The microservice manifest provides the required settings to manage microservice instances and the Cumulocity application.
Refer to the [Microservice manifest reference](/guides/reference/microservice-manifest) to see the full list of options.

### Microservice isolation levels

* Multi-tenant: Single microservice docker container instantiated for all subscribed tenants unless microservice is scaled.
* Single tenant: Dedicated microservice docker container instantiated for each subscribed tenant.

The isolation level is set using the microservice manifest.

### Scaling

If scaling is enabled, the microservice is horizontally auto-scaled in case of high CPU usage. 

The scale option is set using the microservice manifest.

### Security

Cumulocity proxies the microservice requests to the microservice container. Therefore, the incoming request for the microservices goes through Cumulocity with authorization, and HTTP over TLS secures the communication.

Type of users that are used for platform and managing microservices:

* Tenant platform user: The user that is created using the Cumulocity Administration application. This user logs into the application.
* Microservice Bootstrap user: The user that is created for each microservice for microservice bootstrap operations. This user is authorized to get the microservice subscriptions and do requests for its application. Refer to [Microservice development](/guides/rest/microservice-development) for more details.
* Service user: The user that is created when a tenant subscribes to the microservice application.

Any request to the platform must be done with the platform user.
For microservices, it is best practice to switch context to the subscribed tenant's service user instead of using the tenant's platform user when doing a request from microservice to Cumulocity platform.

The following role types are defined for users:

* Required roles: The roles that are predefined to allow access to Cumulocity Rest APIs.
As an example, if a microservice creates measurements using the service user, measurement admin role must be added as a required role of the application.
Required roles are added to the service users.
* Roles: The custom roles provided to tenant platform users by the microservice developer.
These roles can be assigned or revoked to the tenant platform users or groups using the Administration application.

The roles are provided in the microservice manifest.

### Environment variables

A microservice running in a dedicated environment can retrieve and use the injected environment variables of the dedicated environment.

Refer to [Microservice container runtime reference](guides/reference/microservice-runtime) for more information.

### <a name="packaging"></a>Packaging

To deploy a microservice, it needs to be packaged in a specific structure. It requires a docker image.tar and cumulocity.json files packed into a zip file. For your convenience, Cumulocity provides a script. 

Refer to [Microservice package reference](/guides/reference/microservice-package) in order to prepare and deploy the microservice package.

### Additional microservice development practices

* Use other microservices, if the user has permission.
* The microservice must be stateless: Ephemeral state, both for in-process state and disk state
* All persistent state must be stored at the Cumulocity platform via inventory, binary, tenant options and other APIs.
* Do not use additional inbound ports except REST endpoint.
* The request lifetime must have the maximum setting.

### Operating microservices

Cumulocity manages microservices by monitoring the microservice instance and storing the metrics. In case a microservice exceeds the memory limit, it is restarted automatically. Microservices can be scaled in case of high CPU usage.

### Registering microservices

After development, developers can register the microservice package using their tenant.

The microservice package must contain the manifest file and docker image of the microservice.

Refer to [Microservice manifest reference](/guides/reference/microservice-manifest) to create a manifest file with applicable settings.

Refer to [Packaging](#packaging) for details on how to prepare and deploy the microservice package.


## Summary

Cumulocity is designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. An application can be any combination of a complete, standalone user interface application, or a set of user interface plugins.
Applications are once registered in Cumulocity and can be subscribed to tenants in the Administration application. 
With Cumulocity users can publish any software to other users or customers.

