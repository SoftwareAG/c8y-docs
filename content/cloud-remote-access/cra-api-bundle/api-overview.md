---
title: Overview
weight: 10
layout: bundle
---

Cumulocity IoT offers a public API to enable device integrators to support the Cloud Remote Access functionality on their devices. For this functionality the gateway needs to listen for an operation which triggers establishing a new tunnel to a device endpoint. For this purpose, the gateway needs to create a Websocket connection to the cloud and a TCP connection to the device. Using these connections simple tunneling of protocol data is done on a binary level.