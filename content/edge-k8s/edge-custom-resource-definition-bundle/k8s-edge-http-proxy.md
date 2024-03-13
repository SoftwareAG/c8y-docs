---
weight: 42
title: HTTP Proxy
layout: redirect
---

When connecting your Kubernetes cluster, where the Edge is hosted, to external endpoints, a ConfigMap is required if routing traffic through a proxy. The Edge Operator uses this proxy to access Harbor registry.

|<div style="width:150px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|http_proxy|Yes|String||Specifies the URL of the HTTP proxy to be used for network connections.|
|https_proxy|Yes|String||Specifies the URL of the HTTPS proxy to be used for secure network connections.|
|socks_proxy|No|String||Optional setting that specifies the URL of a SOCKS proxy.|
|no_proxy|Yes|String||Specifies a comma-separated list of addresses or domains for which the proxy should be bypassed.|
