---
date: 2023-12-06T16:07:39.231Z
title: Endpoint validation can optionally be disabled
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area: Device Management
component:
  - value: component-Tf05_KQ-B
    label: OPC UA
technical_component:
  - value: tc-QHwMfWtBk7
    label: cumulocity
jira: DM-2425
version: 10.18.253.0
---
The endpoint validation happening during the connection to an OPC UA server can now optionally be disabled. This can be done in the gateway configuration by changing the <code>gateway.connectivity.validateDiscoveredEndpoints</code> setting to "false". Alternatively, it can be controlled via the OPC UA server managed object by setting the fragment <code>validateDiscoveredEndpoints</code> to "false".  For more details, refer to <a href="https://cumulocity.com/guides/protocol-integration/opcua/" class="no-ajaxy">OPC UA</a> in the <i>Protocol integration guide</i>.
