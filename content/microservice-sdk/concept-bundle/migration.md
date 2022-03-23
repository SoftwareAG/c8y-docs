---
weight: 50
title: Microservice migration
layout: redirect
---

### Cumulocity IoT microservice user privilege deprecation

#### What's happening:

To comply with new security requirements, Software AG is announcing the availability of the Microservice apiVersion 2 and is deprecating apiVersion 1.  

**With release 10.14**, Software AG announces the availability of Microservice apiVersion 2 and the deprecation of apiVersion 1.  
Microservice apiVersion 2 provides an improved microservice container security context restricting the invocation of privileged Linux Kernel APIs.
In details this means that with microservice apiVersion 2 the microservice container is granted only specific capabilities. 

Please refer to the [Linux man page](https://man7.org/linux/man-pages/man7/capabilities.7.html) for more information on Kernel capabilities.
With the apiVersion change, the microservice is granted the capability NET_BIND_SERVICE.

#### What you need to do by release 10.15:

Please perform the following steps to migrate your microservice to the new apiVersion. 

1. Change the apiVersion to v2 in the microservice manifest. See <a href="#manifest">Microservice manifest</a>.   

2. Deploy your microservice to the test environment. 

3. Test the functionality of your microservice and analyse possible errors.
 
In the simplest case it is sufficient to set the apiVersion to v2 in your microservice manifest.  

However, for microservices which currently make use of Linux Kernel API which requires one of the above-mentioned user privileges,   
you additionally need to refactor the source code so that the service doesn't require the invocation of these privileged Linux Kernel APIs anymore.  

For details refer to section "Microservice migration" 
in the Microservice SDK user guide.

#### How to check whether your microservice is impacted?

Set the apiVersion field in the microservice manifest to "v2" and 
deploy this service to your Cumulocity IoT test environment. 
This environment must be in version 10.14. 
Verify that the functionality provided by the miroservice still works as expected.

#### What happens if your Cumulocity IoT microservice is still using one of these user privileges after the upgrade of the environment to the 10.15 release? 

If your microservice is using the deprecated apiVersion 1 and 
is deployed to a Cumulocity IoT environment in version 10.15 or higher, it might, 
depending on the configuration of this environment, be affected by the change. 
In such a case, you will not be able to upload or subscribe the microservice.
