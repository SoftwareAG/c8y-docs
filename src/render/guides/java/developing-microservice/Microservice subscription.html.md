---
order: 50
layout: redirect
title: Microservice subscription
---

The microservice subscription module is responsible for two main features:

* registration
* tenant subscription event listening

The default behavior for the package is self-registration which means, that after you run the application it will try to register and use generated credentials for the communication with the platform. The self-registration is required to correctly deploy the microservice on the platform.

The other way to register an application to the platform is to do it manually by creating a new application on the platform with the same application name and providing the following properties into the microservice:
 
    application.name={application_name}
    C8Y.bootstrap.register=false
    C8Y.bootstrap.tenant={tenant}
    C8Y.bootstrap.user={user}
    C8Y.bootstrap.password={password}

To create an application and acquire credentials, refer to:

* [Create application](/guides/rest/microservice-development#create-application)
* [Acquire microservice credentials](/guides/rest/microservice-development#acquire-microservice-credentials)

The subscription package provides means to monitor and act upon changes in tenant subscriptions to a microservice. To add a custom behavior a developer can add an event listener for MicroserviceSubscriptionAddedEvent and MicroserviceSubscriptionRemovedEvent like in the following example:

    @EventListener
    public void onAdded(MicroserviceSubscriptionAddedEvent event{
        log.info("subscription added for tenant: " + event.getCredentials().getTenant());
    }

On application startup the MicroserviceSubscriptionAddedEvent is triggered for all subscribed tenants.