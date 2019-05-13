---
weight: 30
title: Deploying
layout: redirect
---

Deploying your microservice application is rather easy, just execute the following command:

```shell
$ ./microservice deploy -n hello-world -d <URL> -u <username> -p <password> -te <tenant>
```

Note that you need to have a tenant and user credentials in order to deploy your microservice.    
The successful execution will create an application on the Cumulucity platform with the specified name, if it does not exist yet. Then it will upload the _hello-world.zip_ file into the platform. Once it has been uploaded, your application will be listed on **Applications** > **Own Applications** in the Administration application.
