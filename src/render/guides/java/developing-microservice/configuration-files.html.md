---
order: 70
layout: redirect
title: Configuration files
---

The property file used by the hosted deployment must be located in src/main/resources/application.yml

For external/legacy deployment, the following paths will be searched in order to find a property file specific for the environment the application is run on:
* {UPPERCASE(application_name)}_CONF_DIR/.{application_name}
* {UPPERCASE(application_name)}_CONF_DIR/{application_name}
* {user/home}/.{application_name}
* {user/home}/{application_name}
* {CONF_DIR}/.{application_name}
* {CONF_DIR}/{application_name}
* /etc/{application_name}

Properties used by a microservice are:

    application.name - Application name
    C8Y.bootstrap.register - Indicates whether microservice should follow self-registration process. True by default
    C8Y.baseURL - Address of the platform. Provided by the deployment process
    C8Y.baseURL.mqtt - Address of the MQTT service. Provided by the platform
    C8Y.bootstrap.tenant - Microservice owner tenant
    C8Y.bootstrap.user - User used by microservice, or by microservice registration process
    C8Y.bootstrap.password - Password used by microservice, or by microservice registration process
    C8Y.bootstrap.delay - Subscription refresh delay
    C8Y.bootstrap.initialDelay - Initial subscription delay
    C8Y.microservice.isolation - Microservice isolation. Only PER_TENANT or MULTI_TENANT values are available. MULTI_TENANT by default