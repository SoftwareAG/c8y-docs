---
order: 100
layout: redirect
title: Deployment
---

### Hosted deployment

Please note that for your convenience we have prepared a utility deployment script available [here](/guides/reference/microservice-package)

To deploy an application on an environment you need:

* URL address of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant ID
* zip build from previous step


**Step 1 - Create application**

If the application does not exist, create a new application on a platform:

    POST /application/applications
    Host: ...
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Content-Type: "application/json"

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
      "{URL}/application/applications"

If the application has been created correctly, you can get the application ID by invoking:

    GET /application/applicationsByName/{APPLICATION_NAME}
    Host: ...
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Accept: "application/json"

Example:

    curl -H "Authorization:{AUTHORIZATION}" \
     {URL}/application/applicationsByName/hello-world


**Step 2 - Upload zip file**
       
    POST /application/applications/{APPLICATION_ID}/binaries
    Host: ...
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Content-Type: "multipart/form-data"

Example:

	  curl -F "data=@{PATH_TO_ZIP}" \
	  -H "Authorization: {AUTHORIZATION}" \
	  "{URL}/application/applications/{APPLICATION_ID}/binaries"


**Step 3 - Subscribe to microservice**
    
    POST /tenant/tenants/$TENANT/applications
    Host: ...
    Authorization: Basic xxxxxxxxxxxxxxxxxxx
    Content-Type: "multipart/form-data"

  BODY:

    {"application":{"id": "{APPLICATION_ID}"}}

  Example:

    curl -X POST -d "{"application":{"id": "{APPLICATION_ID}"}}"  \
    -H "Authorization: {AUTHORIZATION}" \
    -H "Content-type: application/json" \
     "{URL}/tenant/tenants/{TENANT}/applications"

### Local docker deployment

To deploy application on a local docker, one needs to inject environment variables into container. This is done via docker run -e parameter. Full description of available parameters is available in [Environment variables](/guides/reference/microservice-runtime) chapter. 

Example execution could be 
    
    docker run -e "C8Y_BASEURL={C8Y_BASEURL}" -e "C8Y_BASEURL_MQTT={C8Y_BASEURL_MQTT}" {IMAGE_NAME}
    