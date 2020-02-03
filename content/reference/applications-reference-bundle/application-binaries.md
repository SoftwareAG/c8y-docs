---
weight: 60
title: Application binaries
layout: redirect
---

### POST - upload application binary

For the applications of type "microservice" and "web application" to be available for Cumulocity platform users, a binary ZIP file must be uploaded.

```http
POST /application/applications/{APPLICATION_ID}/binaries
Host: ...
Authorization: Basic …
Content-Type: multipart/form-data
```

For the microservice application, the ZIP file must consist of:

* cumulocity.json - file describing the deployment
* image.tar - executable Docker image

For the web application, the zip file must include index.html in the root directory.
