---
order: 10
layout: redirect
title: Overview
---

This section describes the JSON payload format that can be used with the Cumulocity MQTT implementation.

Compared to SmartREST 2.0 which only works with fixed templates, JSON support for MQTT was designed to combine the payload flexibility of our REST API with the low protocol overhead of MQTT. 

The SmartREST way should still be the preferred way if it is important to reduce your payload to the minimum (mobile traffic, low capability device).