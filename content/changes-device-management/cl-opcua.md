---
title: OPC UA
layout: change_log
section:
  - change_log
weight: 40
---

### October 2023

#### -Change-  Disbaling endpoint validation

The endpoint validation happening during the connection to an OPC UA server can now optionally be disabled. This can be done in the gateway configuration by changing the <code>gateway.connectivity.validateDiscoveredEndpoints</code> setting to "false". Alternatively, it can be controlled via the OPC UA server managed object by setting the fragment <code>validateDiscoveredEndpoints</code> to "false".  For more details, refer to <a href="https://cumulocity.com/guides/protocol-integration/opcua/" class="no-ajaxy">OPC UA</a> in the <i>Protocol integration guide</i>. [DM-2425]
