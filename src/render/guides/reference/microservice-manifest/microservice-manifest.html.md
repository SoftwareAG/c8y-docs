---
order: 10
title: Microservice manifest
layout: redirect
---


## Manifest

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|apiVersion|String |Document type format discriminator, for future changes in format|Yes
|name|String |Application name|Yes
|contextPath|String|Default:<br> Microservice name  Microservice contextPath used to define extension points|No
|version |String |Application version|Yes
|provider|Provider|Application provider information. Simple name allowed for predefined providers e.g. c8y. Detailed object for external provider.|Yes
|isolation|Enum|Values: MULTI&#95;TENANT, PER&#95;TENANT<br/>Default: MULTI&#95;TENANT<br/><br/>Deployment isolation. In case of PER&#95;TENANT there is a separate instance for each tenant otherwise there is one single instance for all subscribed tenants. Should be overridable on subscription and should affect billing.|No
|scale|Enum|Values: AUTO, NONE<br/>Default: NONE <br/> <br/> Enables scaling policy. For NONE, the platform guarantees that there is maximally one instance of the service per isolation level.|No
|resources|Resources|Configuration for default resource limit. Can be overridden by tenant during subscription.<br/><br/>Guaranteed resources are CPU=0.25, Memory 256MB<br/>Default limits are CPU = 0.5 , Memory = 512MB|No
|settings|Option[]|Default: [] ( empty list )<br/>Set of tenant options available to define configuration of microservice|No
|requiredRoles|String[]|List of permissions required by microservice to work|Yes
|roles|String[]|Default: [] ( empty list )<br/>Roles provided by this microservice|No
|livenessProbe| Probe | Defines strategy used to verify if microservice is alive or requires restart | No |
|readinessProbe| Probe | Defines strategy used to verify if microservice is ready to accept traffic |No
|extensions| Extension[]|Default: [] ( empty list )<br/> Defines a set of extensions that should be enabled for microservice |No

### Provider

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|name|String |Company name of provider|Yes
|domain|String |Website of provider |No
|support|Email|Email to support person|No

### Resources

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|cpu|String |Default: 0.5 <br/>Limit for number of cpus or cpu time|No
|memory|String |Default: 512Mb <br/>Default limit for microservice memory usage|No

### Option

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|key|String |Key of option|Yes
|default|String|Default value|No
|editable|Boolean|Default: false <br/>Defines if option maybe changed by subscribed tenant on runtime|No
|valueSchema|Schema|Default: {type: ‘string‘}<br/>Defines schema of value and follows the json schema defined here | No

### Probe
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|exec | ExecAction | Commands to be executed on a container to probe the service | No
|tcpSocket | TCPSocketAction | TCP socket connection attempt as a probe | No
|httpGet | HTTPGetAction | HTTP request to be executed as a probe | No
|initialDelaySeconds |Number| Tells the platform for how long it should wait before performing the first probe <br/>Default: 200 | No
|periodSeconds|Number| How often the probe should be executed<br/>Default: 10 | No
|successThreshold|Number| Minimum consecutive successes for the probe to be considered successful after having failed<br/> Default: 1 | No
|timeoutSeconds|Number| Number of seconds after which the probe times out<br/> Default: 1 | No
|failureThreshold|Number| Number of failed probes after which action should be taken <br/>Default: 3 | No

### ExecAction
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|command | String[] | Commands to be executed on a container to probe the service | Yes

### TCPSocketAction
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|host | String | Host to verify | Yes
|port | Number | Port to verify <br/>Default:80 | Yes

### HTTPGetAction
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|host | String | Host name to connect to | Yes
|path | String | Path to access on the HTTP server | Yes
|port | Number | Port to verify <br/>Default: 80 | No
|scheme | String | Scheme to use for connecting to the host (HTTP or HTTPS)<br/> Default: HTTP | No
|headers | HttpHeader | HTTP headers to be added to a request | No

### HttpHeader
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|name | String | Header name | Yes
|value | String | Header value | Yes

### Extension
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|type | String | Type id of extension | Yes
|* | any | Configuration parameters | No


### Example Manifest

    {
        "apiVersion": "v1",
        "name": "first-microservice",
        "version": "1.0.0",
        "provider": {
            "name": "New Company Ltd.",
            "domain": "http://new-company.com",
            "support": "support@new-company.com"
        },
        "isolation": "MULTI_TENANT",
        "scale": "auto",
        "resources": {
            "cpu": "1",
            "memory": "1G"
        },
        "livenessProbe":{
          "httpGet":{
            "path": "/health"
          },
          "initialDelaySeconds": 60,
          "periodSeconds": 10
        },
        "readinessProbe":{
          "httpGet":{
            "path": "/health",
            "port": 80

          },
          "initialDelaySeconds": 20,
          "periodSeconds": 10
        },
        "extensions":[
          {
            "type":"prometheus.io"
          }
        ]
    }
## Supported Extensions
List of extensions supported by Cumulocity Microservice Manifest

### Prometheus Monitoring
Enables support for gathering of metrics exposed via prometheus endpoint.
Endpoint should not require authentication.

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|path | String | Path to prometheus endpoint. <br/> Default: /prometheus | No
|port | String | HTTP port where prometheus endpoint is available. <br/> Default: 80 | No

#### Example Extension
    {
      "type": "prometheus.io",
      "path": "/monitoring/prometheus"
      "port": "4444"
    }
