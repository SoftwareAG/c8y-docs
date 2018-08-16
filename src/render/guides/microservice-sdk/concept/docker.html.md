---
order: 20
title: Docker image and container
layout: redirect
---

The Cumulocity microservice is based on docker. This requires that a microservice is packaged as docker image in order to run on the Cumulocity platform. The docker image is an executable package that includes everything needed to run an application. For more information on docker refer to the [Docker documentation](https://docs.docker.com/get-started/)). 

During run-time, the microservice is executed in a docker container. A docker container ensures that the microservices cannot harm other microservices running in Cumulocity. To execute docker containers, Cumulocity uses kubernetes. Kubernetes provides many enterprise-grade features for hosting docker containers, including auto-scaling, high availability, load balancing, rolling upgrades to limit downtime, resource quota and more.

>**Info:** Currently kubernetes is not exposed to developers or users. This allows changing of the underlying infrastructure in the future.