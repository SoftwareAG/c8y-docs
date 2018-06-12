---
order: 40
layout: redirect
title: Deployment
---

To deploy a microservice application on an environment you need:

* URL address of the Cumulocity host of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant ID
* zip build from previous step for deployment

**Step 1 - Create application**

If the application does not exist, create a new application on a platform.
For details, refer to the 'Create application' step in [Run microservice locally](#run-locally).

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
 
For details, refer to the 'Subscribe to microservice' step in [Run microservice locally](#run-locally).

**Step 4 - Verify if microservice is running**

Now you can verify if your application is running by executing

    curl -H "Authorization: {AUTHORIZATION}" \
      {URL}/service/hello-world/hello?who=me

The expected result is:

    hello me!

