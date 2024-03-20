---
weight: 11
title: Configuring Proxy
layout: redirect
---

When Cumulocity IoT Edge is deployed behind a proxy, it needs to be configured to communicate with external endpoints over the internet through the proxy server.
To configure Cumulocity IoT Edge to use a proxy, you need to create or update a ConfigMap named `custom-environment-variables` in the c8yedge (or the one you deployed Edge into) namespace with the required proxy settings. The keys `http_proxy`, `https_proxy` and `socks_proxy` should be set to the URLs of the HTTP, HTTPS and Socks proxies, respectively. The key `no_proxy` should be set to specify a comma-separated list of domain suffixes, IP addresses, or CIDR ranges that Edge should bypass the proxy server for.

Here's an example of a ConfigMap with proxy settings:
`
apiVersion: v1
kind: ConfigMap
metadata:
  name: custom-environment-variables
data:
  http_proxy: http://proxy-server-ip:port
  https_proxy: http://proxy-server-ip:port
  socks_proxy: socks5://proxy-server-ip:port
  no_proxy: 127.0.0.1,::1,localhost,.svc,.cluster.local,cumulocity,<kubernetes cluster IP range e.g. 10.43.0.0/16>
`

By configuring Edge with the appropriate proxy settings, you ensure that it can seamlessly communicate with external endpoints through the proxy server, allowing it to function effectively in environments where proxy usage is mandated.

The table below provides more information:

|<div style="width:150px">Field</div>|Required|<div style="width:115px">Type</div>|Default|Description|
|:---|:---|:---|:---|:---|
|http_proxy|No|String||Specifies the URL of the HTTP proxy to be used for network connections.|
|https_proxy|No|String||Specifies the URL of the HTTPS proxy to be used for secure network connections.|
|socks_proxy|No|String||Specifies the URL of a SOCKS proxy.|
|no_proxy|No|String||Specifies a comma-separated list of addresses or domains for which the proxy should be bypassed. This should be configured with the specified entries, and Kubernetes Pod CIDR (Cluster Pod IP Address Range),  Kubernetes Service CIDR (Cluster Service IP Address Range) and any other domains, hosts or IPs you want to bypass the proxy when accessed.|
