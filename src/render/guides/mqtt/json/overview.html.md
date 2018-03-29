---
order: 10
layout: redirect
title: Overview
---

This section describes the JSON payload format that can be used with the Cumulocity MQTT implementation.

In compare to the SmartREST 2.0 which works only with fixed templates, JSON support for MQTT was designed to combine
the payload flexibility of our REST API with the low protocol overhead of MQTT. 

The SmartREST way should still be the prefered way if reducing your payload to the minimum is important (mobile traffic, low capability device).