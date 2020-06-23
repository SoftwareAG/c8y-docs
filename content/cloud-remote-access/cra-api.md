---
title: Cloud Remote Access API
weight: 40
layout: bundle
---
Websocket Microservice 
As normal microservice request are typically REST requests and do follow the Request-Response-Pattern, a new module has been added to provide microservices with long lasting websocket connections.
Karaf Module
Starting with Version 7.43 Karaf contains a new module which can be found at

	:: Cumulocity Platform Services :: Microservice Management :: Websocket 

It should start with Karaf startup and should normally be in active state. This module is responsible to forward websocket requests to registered microservices. 
Instances and Scaling
For the current version the microservice is not capable to run on multiple nodes. So all karaf nodes should contain the same url for the microservice and only one installation is necessary.
Agent deployment
RPM installation (for versions before 9.12.x)
Check if the environment has a dedicated agents node - then install this agent on that node. 
Otherwise choose an LB or core node.

# yum install remote-access-server-<version> (since 9.12.x: cloud-remote-access-<version>)
# chkconfig --add remote-access-server
# chkconfig remote-access-server on

Start the service:
# service remote-access-server start

Monitor log output:
# tail -f /var/log/remote-access/cloud-remote-access.log

Install on Kubernetes (since 9.12.12)
Login to node where platform is installed
Change directory to /tmp and download zip file from cumulocity resources: 
$wget https://resources.cumulocity.com/kubernetes-images/<package_name>
Copy downloaded zip file to /webapps/2Images/: 
#cp /tmp/cloud-remote-access-<version>.zip /webapps/2Images/
When deployment was successful  /webapps/2Images/cloud-remote-access-<version>.zip.installed file is created.

Subscribe for management tenant to create deployment and run microservice.

Monitor log output:
# kubectl -n {{namespace}} logs -f $(kubectl get pod -oname -lmicroservice=cloud-remote-access,tenant={{tenant}})

Subscribe application 
Use either one of the ways:
With User Interface. 
Login and open Administration application <domain>/apps/administration. Navigate to Own Applications, find and open Cloud remote access application, then click Subscribe on top right corner
With REST API: 
Find application id with: 
GET {{url}}/application/applicationsByName/cloud-remote-access
Subscribe application using id found in response of previous request: 
POST {{url}}/tenant/tenants/management/applications 
{
   "application":{
      "id":"{{applicationId}}",
      "self":"{{url}}/application/applications/{{applicationId}}"
   }
}
Ports and Configuration
RPM installation
The following parameters can be configured in /etc/remote-access/remote-access-server.properties

Parameter
Default
Description
application.name
cloud-remote-access
Application name used for tenant subscription 
server.port
8301
Port this microservice is listening
C8Y.baseURL
http://localhost:8181
Base URL for core
C8Y.bootstrap.tenant
management
Bootstrap tenant
C8Y.bootstrap.user
servicebootstrap
Bootstrap user
C8Y.bootstrap.password
<present>
Bootstrap password
remoteaccess.encryption.password
-
Encryption password to store credentials
remoteaccess.encryption.salt
-
Encryption salt to store credentials
remoteaccess.operation.timeout
30
Number of seconds until a connection attempt (operation) is considered as failed
remoteaccess.ws.idle.timeout
3600000 (1 hour)
The time after which idle websocket will be closed 

Kubernetes installation
Since 10.4.0 following parameters can be configured with tenant options under remoteaccess category. Use POST {{url}}/tenant/options

Parameter
Json Request
Description
hostkey-autosave
{
  "category": "remoteaccess",
  "key": "hostkey-autosave",
   "value": "true|false"
}


Boolean value. Automatically accept host key on first SSH connection when it’s not provided in configuration. Default: “true”
Per tenant option. No restart required.


remoteaccess.operation.timeout
{
  "category": "remoteaccess",
  "key": "remoteaccess.operation.timeout",
   "value": 35
}
Allows to override default timeout. See RPM installation.
Per tenant option. No restart required.
credentials.remoteaccess.encryption.password
{
  "category": "remoteaccess",
  "key": "credentials.remoteaccess.encryption.password",
   "value": <password>
}
Allows to override default password. Only microservice owner can override it. See RPM installation.
Requires microservice restart. Credentials for existing configurations must be provided again after this change.
credentials.remoteaccess.encryption.salt
{
  "category": "remoteaccess",
  "key": "credentials.remoteaccess.encryption.salt,
   "value": <hex_salt_value>
}
Allows to override default salt. Only microservice owner can override it. See RPM installation. Requires microservice restart. Credentials for existing configurations must be provided again after this change.

Logging
The mode will output logging information at the following package

com.cumulocity.remoteaccess

The logging configuration can be found at

	/etc/remote-access/remote-access-server-logging.xml

Troubleshooting
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
