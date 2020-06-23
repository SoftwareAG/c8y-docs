---
weight: 40
layout: redirect
title: Troubleshooting
---

Some common problems and their solutions have been identified and documented below.

##### After deploying my microservice, requests to any endpoint returns an error message “Microservice not available Connection refused”

After uploading the microservice, the internal deployment and container run may take a couple of minutes. Once completed, the error message will disappear.

##### "Pod synchronization error" and "Back-off restarting failed container" errors when uploading/subscribing to the microservice for the first time

This generally happens because of some temporary network or environment related issue at that particular moment.
This error may happen when image pull fails for some reason. When we upload an image, it will be stored in database and a entry is made in docker-registry and when you subscribe to a microservice, platform core informs kubernetes to start this image, by then the docker registry will be used to refer to the image name and informs the worker node to start the instance. 
The worker node then, pulls out the image and creates an instance as a pod. If for some reason, during the instance creation/restart, if the image could not be obtained, then we start seeing these issues. For more info they can read Kubernetes Docs for this.

##### Error	NETSDK1045	The current .NET SDK does not support targeting .NET Core 3.1.  Either target .NET Core 2.2 or lower, or use a version of the .NET SDK that supports .NET Core 3.1.	Cumulocity.SDK.Microservices

The current version of Cumulocity.SDK.Microservices (1006.6.0) is compatible with .NET Core 3.1 and Visual Studio 2019 is a prerequsite for running applications built on .NET Core 3.1. This error will appear if we try running the SDK on Visual Studio 2017 or lower.

