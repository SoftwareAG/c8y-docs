---
weight: 10
title: Overview
layout: redirect
---

Streaming analytics applications using Apama can make use of applications running in other microservices. This section will use Zementis to build a Predictive Analytics application, but the steps apply to connecting to any other microservice running inside Cumulocity. This section is going to show you how to create a connection to the Cumulocity platform from within Apama EPL which can be used to invoke other microservices directly. It will then show you how to make a request and decode the result.

We will assume that you are developing an Apama EPL application within the Cumulocity EPL editor and demonstrate talking to a predictive model loaded through Zementis. The steps in this guide will also work with any other way you could be creating an Apama application and can be used to interact with any microservice.