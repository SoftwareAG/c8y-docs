---
weight: 20
title: Packing
layout: redirect
---

To pack the microservice, the following structure is required:
    
    /docker/Dockerfile
    /docker/* - all files within the directory will be included in the docker build
    /cumulocity.json 

The script can be run in a parent folder holding such structure, or by passing the path to the directory via --dir parameter. 

The sample execution

    microservice pack -n hello-world
    
will create a zip file with the name "hello-world", and an intermediate image.tar - exported docker image. 
