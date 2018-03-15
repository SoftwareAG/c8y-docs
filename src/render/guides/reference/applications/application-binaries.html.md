---
order: 60
title: Application binaries
layout: redirect
---

### POST - upload application binary

For the microservice application to be available for Cumulocity platform users, a binary zip file must be uploaded. 
     
     POST /application/applications/{APPLICATION_ID}/binaries
     Host: ...
     Authorization: Basic …
     Content-Type: multipart/form-data
     
The zip file must consist of:

* cumulocity.json - file describing the deployment
* image.tar - executable docker image
