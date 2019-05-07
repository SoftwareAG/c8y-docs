---
weight: 60
title: Application binaries
layout: redirect
---

### POST - upload application binary

For the applications of type "microservice", "web application" and "custom Apama rule" to be available for Cumulocity platform users, a binary zip file must be uploaded.
     
     POST /application/applications/{APPLICATION_ID}/binaries
     Host: ...
     Authorization: Basic …
     Content-Type: multipart/form-data

For the microservice application, the zip file must consist of:

* cumulocity.json - file describing the deployment
* image.tar - executable docker image

For the web application, the zip file must include index.html in the root directory.

For the custom Apama rule application, the zip file must consist of a single .mon file.
