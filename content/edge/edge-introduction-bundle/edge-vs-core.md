---
weight: 30
title: Cumulocity IoT Edge versus other Cumulocity deployments
layout: redirect
---

Cumulocity IoT Edge uses the same software as Cumulocity IoT Core. 

However, while the base software is the same, there are differences regarding the activated optional features and pre-installed agents.
 
The following differences apply:

|AREA|CUMULOCITY IOT EDGE|CUMULOCITY IOT CORE
|:---|:---|:--
|Multi-tenancy|No; single tenant, no access to management tenant|Yes
|Cluster|No; single server|Yes
|High availability|Traditional HA, server failure leads to temporary downtime|Full HA: No downtime on server failure, optionally even for data center failure
|Vertical scalability|Yes, limited to appr. 100 tps per CPU core|Yes, but not used
|Horizontal scalability|No|Yes, nearly unlimited scalability
|Upgrades with no downtime|No|Yes
|Root access|No|Yes, if customer is hosting
|Installation|Offline, with VM image|Online, with chef & RPM
|Cloud Field Bus|Included|Optional
|Apama real-time analytics|Included|Optional
|Data Broker|Included|Optional

>**Info**: In addition to Cumulocity IoT Edge, we provide a light-weight approach to implement Edge functionality: the Cumulocity Agent and Device SDK. These can be installed on less powerful devices like embedded devices. 
