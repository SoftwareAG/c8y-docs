---
order: 100
title: Microservice requirements
layout: redirect
---

The following requirements towards Cumulocity microservices must be met:

* A microservice must be a (linux/amd64) docker image run.
* The docker image must be packaged as _image.tar_ and must include a manifest file (_cumulocity.json_).
* A microservice must be stateless, i.e. it must contain only ephemeral state. The reason is that a microservice must be able to survive (random) restarts due to hardware reasons (server failure) and operations reasons (upgrade, migration).
* All persistent states must be stored at the Cumulocity platform via inventory, binary, tenant options and other APIs. Persistent volumes are not supported.
* A microservice cannot access the database directly and must use Cumulocity API.
* A microservice must provide one inbound REST API. Additional inbound ports are not supported.
* A microservice can use multiple outbound ports.
* The request lifetime must have the maximum. The infrastructure might terminate too long running requests.
* All log information has to be sent to standard output in order to be captured and persisted by the infrastructure.
