---
order: 31
layout: redirect
title: Run microservice locally
---

In order to test the microservice for the calls from the microservice to Cumulocity, you can run the docker container locally.

To verify calls from Cumulocity to the microservice, the microservice must be deployed.

To run a microservice, which uses Cumulocity API, locally you need:

* URL address of the Cumulocity host of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant ID

**Step 1 - Create application**

If the application does not exist, create a new application on a platform:

    POST {URL}/application/applications

HEADERS:

    "Authorization": "{AUTHORIZATION}"
    "Content-Type": "application/vnd.com.nsn.cumulocity.application+json"
    "Accept: application/vnd.com.nsn.cumulocity.application+json"

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
      -H "Content-Type: application/vnd.com.nsn.cumulocity.application+json" \
      -H "Accept: application/vnd.com.nsn.cumulocity.application+json" \
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

If the application has been created correctly, you can get the application Id from response.

**Step 2 - Acquire microservice bootstrap user**

    GET {URL}/application/applications/{APPLICATION_ID}/bootstrapUser

HEADERS:

    "Authorization": {AUTHORIZATION}
    "Content-Type": application/vnd.com.nsn.cumulocity.user+json

Example response:

    HTTP/1.1 200 Ok
    Content-Type: application/vnd.com.nsn.cumulocity.user+json
    {
      "tenant": "...",
      "name": "...",
      "password": "..."
    }

**Step 3 - Run microservice locally**

The image is already added to the local docker repository during the build. List all the docker repository images available:

    $ docker images

After you find the image in the list, run docker container for the microservice by providing baseurl and bootstrap user credentials:

    $ docker run -e C8Y_BASEURL={URL} -e C8Y_BOOTSTRAP_TENANT={BOOTSTRAP_TENANT} -e C8Y_BOOTSTRAP_USER={BOOTSTRAP_USERNAME} -e C8Y_BOOTSTRAP_PASSWORD={BOOTSTRAP_USER_PASSWORD} -i -t {DOCKER_REPOSITORY_IMAGE}:{TAG}

**Step 4 - Subscribe to microservice**
    
    POST {URL}/tenant/tenants/{TENANT_ID}/applications

  HEADERS:

    "Authorization": "{AUTHORIZATION}"

  BODY:

    {"application":{"id": "{APPLICATION_ID}"}}

  Example:

    curl -X POST -d "{"application":{"id": "{APPLICATION_ID}"}}"  \
    -H "Authorization: {AUTHORIZATION}" \
    -H "Content-type: application/json" \
     "{URL}/tenant/tenants/{TENANT_ID}/applications"


