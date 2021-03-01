---
weight: 10
title: Overview
layout: redirect
---

Streaming analytics applications using Apama can make use of applications running in other microservices. This section uses a Machine Learning application built with the Zementis microservice, but the steps apply to connecting to any other microservice running inside Cumulocity IoT. This section is going to show you how to create a connection to the Cumulocity IoT platform from within Apama EPL which can be used to invoke other microservices directly. It will then show you how to make a request and decode the result.

We will assume that you are developing an EPL app using the EPL editor that is part of the Streaming Analytics application and demonstrate talking to a Machine Learning model loaded through the Zementis microservice. The steps in this guide will also work with any other way you could be creating an Apama application and can be used to interact with any microservice.