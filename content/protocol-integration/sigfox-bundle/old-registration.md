---
weight: 50
title: Updating devices registered with the general device registration
layout: redirect
---

If devices have previously been registered via the general device registration the following URLs have to be manually changed in the Sigfox Cloud:

- `https://sigfox-agent.{{< URL >}}/sigfoxDataCallback` to `https://<tenantId>.{{< URL >}}/service/sigfox-agent/sigfoxDataCallback`.
- `https://sigfox-agent.{{< URL >}}/sigfoxServiceAcknowledgeCallback` to `https://<tenantId>.{{< URL >}}/service/sigfox-agent/sigfoxServiceAcknowledgeCallback`.
- `https://sigfox-agent.{{< URL >}}/sigfoxServiceStatusCallback` to `https://<tenantId>.{{< URL >}}/service/sigfox-agent/sigfoxServiceStatusCallback`.
- `https://sigfox-agent.{{< URL >}}/sigfoxErrorCallback` to `https://<tenantId>.{{< URL >}}/service/sigfox-agent/sigfoxErrorCallback`.

> **Info**: General device registration for Sigfox devices is no longer supported.
