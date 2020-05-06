---
weight: 10
title: Checking system information
layout: redirect
---

In the navigator, select **Administration** to get information about the system configuration and its status.

Under **Microservice** you will find the status of the microservice, which is either marked as green or red. This status reflects whether the microservice can be accessed from the web application. If the microservice is accessible, its current version is shown. If not, check the status of the microservice and its logs as described in section [Managing applications](/users-guide/administration#managing-applications).

Under **Web application** you will find the version of the web application.

Under **Management** you will find the setup of the system. If you expand that box by clicking on the arrow to the right, all relevant system properties and their values are listed. Note that these values cannot be modified for a running microservice. The tenant administrator needs to redeploy the microservice with corresponding new values.