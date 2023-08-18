---
weight: 40
title: Cumulocity IoT Core values
layout: redirect
---

Core values spec specifies the fields to configure Cumulocity IoT Core node.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
managementTenantAllowedIPBlocks | No | Array of String | Defaults to allow all | Specify the IP address blocks to allow access to the Management tenant from only a specific range of IP addresses. Allowed to add multiple blocks. For example, 10.0.0.0/8
edgeTenantAllowedIPBlocks | No | Array of String | Defaults to allow all | Specify the IP address blocks to allow access to the Edge tenant from only a specific range of IP addresses. Allowed to add multiple blocks.