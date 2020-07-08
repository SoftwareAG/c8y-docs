---
weight: 60
title: Application binaries
layout: redirect
---

### POST - upload application binary

Required role: ROLE_APPLICATION_MANAGEMENT_ADMIN

For the applications of type "microservice" and "web application" to be available for Cumulocity IoT platform users, a binary ZIP file must be uploaded.

```
POST /application/applications/<APPLICATION_ID>/binaries
Host: ...
Authorization: Basic <AUTHORIZATION>
Content-Type: multipart/form-data
```

For a microservice application, the ZIP file must consist of:

*  cumulocity.json - file describing the deployment
*  image.tar - executable Docker image

For a web application, the ZIP file must include a *index.html* file in the root directory.
