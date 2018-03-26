---
order: 40
layout: redirect
title: Deployment
---

To deploy an application on an environment you need:

* URL address of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant ID
* zip build from previous step

**Step 1 - Create application**

If the application does not exist, create a new application on a platform:

	POST {URL}/application/applications

HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-type": "application/json"

BODY:

    {
			"name": "{APPLICATION_NAME}",
			"type": "MICROSERVICE",
			"key": "{APPLICATION_NAME}-microservice-key"
    }


Example:

    $curl -X POST -s \
      -d "{"name":"hello-microservice-1","type":"MICROSERVICE","key":"hello-microservice-1-key"}" \
      -H "Authorization: {AUTHORIZATION}" \
      -H "Content-type: application/json" \
      -H "Accept: application/json" \
      "{URL}/application/applications"
      
Example response:

    {
        "availability": "PRIVATE",
        "id": "{APPLICATION_ID}",
        "key": "{APPLICATION_NAME}-microservice-key",
        "manifest": {
            "imports": [],
            "noAppSwitcher": true
        },
        "name": "{APPLICATION_NAME}",
        "owner": {
            "self": "...",
            "tenant": {
                "id": "..."
            }
        },
        "requiredRoles": [],
        "roles": [],
        "self": "..",
        "type": "MICROSERVICE"
    }      

If the application has been created correctly, you can get the application ID by invoking:

	GET {URL}/application/applicationsByName/{APPLICATION_NAME}

HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-type": "application/json"

Example:

    curl -H "Authorization:{AUTHORIZATION}" \
     {URL}/application/applicationsByName/hello-world


**Step 2 - Upload zip file**
       
	POST {URL}/application/applications/{APPLICATION_ID}/binaries

HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-Type": "multipart/form-data"

Example:

	  curl -F "data=@{PATH_TO_ZIP}" \
	  -H "Authorization: {AUTHORIZATION}" \
	  "{URL}/application/applications/{APPLICATION_ID}/binaries"

**Step 3 - Subscribe to microservice**
    
	POST {URL}/tenant/tenants/$TENANT/applications

  HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-Type": "multipart/form-data"

  BODY:

    {"application":{"id": "{APPLICATION_ID}"}}

  Example:

    curl -X POST -d "{"application":{"id": "{APPLICATION_ID}"}}"  \
    -H "Authorization: {AUTHORIZATION}" \
    -H "Content-type: application/json" \
     "{URL}/tenant/tenants/{TENANT}/applications"  

Now you can verify if your application is running by executing

    curl -H "Authorization: {AUTHORIZATION}" \
      {URL}/service/hello-world/hello?who=me

The expected result is:

    hello me!