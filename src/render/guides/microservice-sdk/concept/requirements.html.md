---
order: 100
title: Microservice requirements
layout: redirect
---

The following requirements towards Cumulocity microservices must be met:

* A microservice MUST be a (linux/amd64) docker image run.
* The docker image MUST be packaged as “image.tar” and MUST include a manifest file (cumulocity.json).
* A microservice MUST be stateless, i.e. it must contain only ephemeral state. Reason is that the microservice must be able to survive (random) restarts because of hardware (server failure) and operations reasons (upgrade, migration).
* All persistent state MUST be stored at the Cumulocity platform via inventory, binary, tenant options and other APIs. Persistent volumes are not supported.
* A microservice cannot access the database directly and must use Cumulocity API.
* A microservice must provide one inbound REST API. Additional inbound ports are not supported.
* A microservice can use multiple outbound ports.
* The request lifetime MUST have the maximum. The infrastructure might terminate too long running requests. 
* Log informations needs to be send to standard output to be captured and persisted by infrastructure.
