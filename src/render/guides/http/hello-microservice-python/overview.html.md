---
order: 10
title: Overview
layout: redirect
---

In the Cumulocity platform, microservice hosting is build on top of docker containers. This makes it technology-agnostic and allows developers to create applications in any technology stack.

In this tutorial, you will learn how to create and run a sample microservice written in Python. The provided example covers:
 
* a sample Python application using the Flask framework to expose REST endpoints
* a manifest file with minimal content to run an application 
* the configuration of the dockerfile which enables to create a ready to run docker image with bundled application (inside light Alpine linux distribution)
* instructions for building and packaging a .zip file containing the full application (ready to upload into platform)
* instructions for uploading and subscribing to the packaged microservice 

