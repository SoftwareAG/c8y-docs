---
order: 20
title: Docker image and container
layout: redirect
---

Cumulocity microservices are based on Docker. Hence, a microservice have to be packaged as a docker image in order to run on the Cumulocity platform. A docker image is an executable package which includes everything needed to run an application. Refer to the [Docker documentation](https://docs.docker.com/get-started/)) for more information about Docker.  

A microservice is executed in a docker container during runtime. The docker container ensures that a microservice cannot harm other microservices running in Cumulocity. Moreover, Kubernetes is used to orchestrate docker containers and it provides many enterprise-grade features for hosting docker containers including auto-scaling, high availability, load balancing, rolling upgrades to limit downtime, resource quota and more.

>**Info:** Currently Kubernetes is not exposed to developers or users. This allows changing of the underlying infrastructure in the future.
