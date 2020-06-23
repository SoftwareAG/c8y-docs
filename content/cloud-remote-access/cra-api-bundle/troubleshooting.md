---
title: Troubleshooting
weight: 40
layout: bundle
---

Remote access tab is not shown 
Check if Cloud remote access microservice is subscribed by tenant. Open Administration application, navigate to Applications, open Own Applications and Subscribed applications and check if microservice is subscribed. 
Check if user has ROLE_REMOTE_ACCESS_ADMIN authority. Open Administration application,  navigate to Accounts then Users. Select your user name and check if Remote access global role is assigned
Check if device supports c8y_RemoteAccessConnect operations (has c8y_RemoteAccessConnect fragment in supported operations) 
Check if request 
GET {{url}}/service/remoteaccess/devices/{{deviceId}}/configurations 
returns response with status 200
Microservice name troubleshoot
The only correct microservice name is cloud-remote-access.  On Kubernetes always install package with name cloud-remote-access-<version>.

If you install microservice older than 9.12.x on Kubernetes it will have incorrect name: remote-access-server. Always ensure that correct microservice version is used for Kubernetes deployment. 

Valid Cloud Remote Access versions for Kubernetes: 
9.12.12+
9.16.4+
9.20.0+
Later version
Cleanup invalid installation
GET applicationId of invalid deployment 
GET {{url}}/application/applicationsByName/{{applicationName}}, 
where {{applicationName}} can be remote-access, remote-access-server, etc. Note down applicationId.

GET all application subscriptions
GET {{url}}/application/applications/{{applicationId}}/subscriptions

Unsubscribe all tenants from result of above query
	DELETE {{url}}/tenant/tenants/{{tenant}}/applications/{{applicationId}}

Subscribe all tenants from second query to correct application. Refer to subscribe section.

Delete invalid application
	DELETE {{url}}/application/applications/{{applicationId}}

Health endpoint
HEAD {{url}}/service/remoteaccess/health
Known issues
Know issues in RPM installations
Symptoms
Reason / Solution
Frontend shows 1006 error
No operation in device control
Connect gets 401 response
No entry in microservice log

Nginx is not configured to redirect websocket upgrades to a special port, so the normal microservice in karaf is getting the request and is denying access.

Solution: Add websocket configuration to nginx.
Remote Access tab is not visible
Role REMOTE_ACCESS_ADMIN missing
Any request to {{url}}/service/remoteaccess/ returns 404

The microservice is not subscribed to the tenant.

Solution: Subscribe cloud-remote-access application to the tenant
Microservice is not available in management tenant for subscribing

The microservice is not installed on the system and still needs to register itself on management. This is done with every start of the service.

Solution: Deploy and configure the microservice correctly and start it.
Microservice can be subscribed
Remote Access tab is not available
Health endpoint reports: microservice/Not Found

Check if tenant options for remoteaccess microservice.url are present in management tenant. 

Solution: Create microservice.url in tenant options via REST. POST {{url}}/tenant/options:
       {
	  "category": "remoteaccess",
	  "key": "microservice.url",
	  "value": "http://{{domainName}}:8301"
	}


CRA is complaining about unsupported protocol
Version (e.g. 005.00x).
For Real VNC workaround:
Open VNC
Go to "Options"


Select "Export" TabSearch for "ProtocolVersion"
Enter "3.8" as ProtocolVersion



Known issues in Kubernetes installations
Symptoms
Reason / Solution
Microservice is not started and restarts constantly
Pod status is CrashLoopBackOff
There is an exception seen in logs:

Caused by: org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'remoteAccessServiceConfiguration': Injection of autowired dependencies failed; nested exception is java.lang.IllegalArgumentException: Could not resolve placeholder 'remoteaccess.encryption.password' in value "${remoteaccess.encryption.password}"


Reason: Microservice with wrong file name was deployed on Kubernetes. 

Solution: Undeploy microservice with wrong name (unsubscribe and delete it via UI). Download package with name cloud-remote-access-<version>.zip and deploy it.
References
Cloud remote access feature description (describes API and usage) --- https://docs.google.com/document/d/1RqYDt90U4L9St6uleOR6TUn76DYu3_6K_Q1IoGtcVeY/edit#heading=h.623nv984fojt
Raspberry Pi agent installation --- https://cumulocity.com/guides/devices/raspberry-pi
Java device agent build and installation: https://cumulocity.com/guides/device-sdk/java/#agents
