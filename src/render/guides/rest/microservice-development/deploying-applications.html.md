---
order: 20
title: Deploying applications
layout: redirect
---

A microservice application gets available for Cumulocity platform users by uploading a binary zip file. 
     
     POST /application/applications/{APPLICATION_ID}/binaries
     Host: ...
     Authorization: Basic …
     Content-Type: multipart/form-data
     
The zip file must consist of:
* cumulocity.json - file describing the deployment
* image.tar - executable docker image