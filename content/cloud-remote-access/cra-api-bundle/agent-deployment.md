---
title: Agent deployment
weight: 40
layout: bundle
---

### To install on Kubernetes

1. Log in to the node where the platform is installed.
2. Change the directory to */tmp* and download the ZIP file from the Cumulocity IoT resources: 
	
		$wget https://resources.cumulocity.com/kubernetes-images/<package_name>
 
3. Copy the downloaded ZIP file to */webapps/2Images/*: 
 
 		#cp /tmp/cloud-remote-access-<version>.zip /webapps/2Images/
 

When the deployment was successful the */webapps/2Images/cloud-remote-access-<version>.zip.installed* file is created.

Subscribe for the management tenant to create the deployment and run the microservice.

Monitor log output:

	# kubectl -n {{namespace}} logs -f $(kubectl get pod -oname -lmicroservice=cloud-remote-access,tenant={{tenant}})

### Subscribe to the application 

#### Via UI

Navigate to **Accounts > Users** in the Administration application Administratio Administration application <domain>/apps/administration. Navigate to Own Applications, find and open Cloud remote access application, then click Subscribe on top right corner

Hover over the applications under **Available applications** on the right and click **Subscribe** on the Cloud remote access application.

#### Via REST API
 
Find the application ID with: 

	GET {{url}}/application/applicationsByName/cloud-remote-access

Subscribe to the application using the ID from the response of the previous request: 

	POST {{url}}/tenant/tenants/management/applications 
	{
	   "application":{
	      "id":"{{applicationId}}",
	      "self":"{{url}}/application/applications/{{applicationId}}"
	   }
	}

### Ports and configuration

#### RPM installation

The following parameters can be configured in */etc/remote-access/remote-access-server.properties*:

|Parameter|Default|Description|
|:---|:---|:---|
|application.name|cloud-remote-access|Application name used for tenant subscription
|server.port|8301|Port this microservice is listening
|C8Y.baseURL|http://localhost:8181|Base URL for core
|C8Y.bootstrap.tenant|management|Bootstrap tenant
|C8Y.bootstrap.user|servicebootstrap|Bootstrap user
|C8Y.bootstrap.password|<present>|Bootstrap password
|remoteaccess.encryption.password|-|Encryption password to store credentials
|remoteaccess.encryption.salt|-|Encryption salt to store credentials
|remoteaccess.operation.timeout|30|Number of seconds until a connection attempt (operation) is considered as failed
|remoteaccess.ws.idle.timeout|3600000 (1 hour)|The time after which an idle websocket will be closed 



### Kubernetes installation

The following parameters can be configured with tenant options under the remoteaccess category. Use `POST {{url}}/tenant/options`.

#### hostkey-autosave

Boolean value. Automatically accept host key on first SSH connection when it’s not provided in configuration. Default: “true”. 

Per tenant option. No restart required.

JSON request:

	{
	  "category": "remoteaccess",
	  "key": "hostkey-autosave",
	   "value": "true|false"
	}


#### remoteaccess.operation.timeout

Allows to override the default timeout. See RPM installation. 

Per tenant option. No restart required.

	{
	  "category": "remoteaccess",
	  "key": "remoteaccess.operation.timeout",
	   "value": 35
	}


#### credentials.remoteaccess.encryption.password

Allows to override the default password. Only the microservice owner can override it. See RPM installation.

Requires microservice restart. Credentials for existing configurations must be provided again after this change.

	{
	  "category": "remoteaccess",
	  "key": "credentials.remoteaccess.encryption.password",
	   "value": <password>
	}

#### credentials.remoteaccess.encryption.salt

Allows to override the default salt. Only the microservice owner can override it. See RPM installation. 

Requires microservice restart. Credentials for existing configurations must be provided again after this change.

	{
	  "category": "remoteaccess",
	  "key": "credentials.remoteaccess.encryption.salt,
	   "value": <hex_salt_value>
	}


### Logging

The logging mode will output logging information at the following package:

*com.cumulocity.remoteaccess*

The logging configuration can be found at:

*/etc/remote-access/remote-access-server-logging.xml*