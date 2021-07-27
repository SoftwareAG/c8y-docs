---
weight: 50
title: Updating devices registered with the general device registration
layout: redirect
---

If devices have previously been registered via the general device registration the following URLs have to be manually changed in the Sigfox Cloud:

- `https://sigfox-agent.cumulocity.com/sigfoxDataCallback` to `https://<tenantId>.cumulocity.com/service/sigfox-agent/sigfoxDataCallback`.
- `https://sigfox-agent.cumulocity.com/sigfoxServiceAcknowledgeCallback` to `https://<tenantId>.cumulocity.com/service/sigfox-agent/sigfoxServiceAcknowledgeCallback`.
- `https://sigfox-agent.cumulocity.com/sigfoxServiceStatusCallback` to `https://<tenantId>.cumulocity.com/service/sigfox-agent/sigfoxServiceStatusCallback`.
- `https://sigfox-agent.cumulocity.com/sigfoxErrorCallback` to `https://<tenantId>.cumulocity.com/service/sigfox-agent/sigfoxErrorCallback`.

> **Info:** General device registration for Sigfox devices is no longer supported.
