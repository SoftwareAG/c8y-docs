---
order: 10
title: Overview
layout: redirect
---

Our platform microservice hosting is build at the top of docker containers. This makes it technology agnostic and allows developers to create applications in any technology stack.

In this tutorial, you will learn how to create and run sample microservice written in Python. Provided example covers:
 
* sample Python application using Flask framework to expose REST endpoints
* manifest file with minimal content to run an application 
* configuration of the dockerfile which enables to create ready to run docker image with bundled application (inside light Alpine linux distribution)
* instructions for building and packaging .zip file containing full application (ready to upload into platform)
* instructions for uploading and subscribe packaged microservice 

