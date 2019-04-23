---
order: 20
title: Docker image and container
layout: redirect
---

Cumulocity microservices are based on Docker. Hence, a microservice has to be packaged as a Docker image in order to run on the Cumulocity platform. A Docker image is an executable package which includes everything needed to run an application. Refer to the [Docker documentation](https://docs.Docker.com/get-started/)) for more information about Docker.  

A microservice is executed in a Docker container during runtime. The Docker container ensures that a microservice does not harm other microservices running in Cumulocity. Moreover, Kubernetes is used to orchestrate Docker containers, and it provides many enterprise-grade features for hosting Docker containers including auto-scaling, high availability, load balancing, rolling upgrades to limit downtime, resource quota and more.

>**Info:** Currently Kubernetes is not exposed to developers or users. This allows changing of the underlying infrastructure in the future.
