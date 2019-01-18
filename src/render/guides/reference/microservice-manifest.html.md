---
order: 190
title: Microservice manifest
layout: standalone
---

The manifest provides information about a microservice deployment. The definition is typically provided as cumulocity.json file in the binary uploaded to the Cumulocity platform. 

### Manifest

<table>
<col width = 150>
<col width = 150>
<thead>
<tr>
<th style="text-align:left">Name</th>
<th style="text-align:left">Type</th>
<th style="text-align:left">Description</th>
<th style="text-align:left">Required</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">apiVersion</td>
<td style="text-align:left">String</td>
<td style="text-align:left">Document type format discriminator, for future changes in format</td>
<td style="text-align:left">Yes</td>
</tr>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">String</td>
<td style="text-align:left">Application name</td>
<td style="text-align:left">Yes</td>
</tr>
<tr>
<td style="text-align:left">contextPath</td>
<td style="text-align:left">String</td>
<td style="text-align:left">Default:<br> Microservice name  Microservice contextPath used to define extension points</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">version</td>
<td style="text-align:left">String</td>
<td style="text-align:left">Application version. Must be correct <a href="https://semver.org" target="_blank">SemVer</a> value but "+" sign is disallowed</td>
<td style="text-align:left">Yes</td>
</tr>
<tr>
<td style="text-align:left">provider</td>
<td style="text-align:left">Provider</td>
<td style="text-align:left">Application provider information. Simple name allowed for predefined providers e.g. c8y. Detailed object for external provider.</td>
<td style="text-align:left">Yes</td>
</tr>
<tr>
<tr>
<td style="text-align:left">billingMode</td>
<td style="text-align:left">Enum</td>
<td style="text-align:left">Values: RESOURCES, SUBSCRIPTION<br>Default: RESOURCES<br><br> [Billing mode for the microservice](/guides/users-guide/enterprise-edition#managing-tenants). In case of RESOURCES the number of resources used is exposed for billing calculation per usage. In case of SUBSCRIPTION all resources usage is counted for the microservice owner and subtenant is charged for subscription. </td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">isolation</td>
<td style="text-align:left">Enum</td>
<td style="text-align:left">Values: MULTI_TENANT, PER_TENANT<br>Default: MULTI_TENANT<br><br>Deployment isolation. In case of PER_TENANT there is a separate instance for each tenant otherwise there is one single instance for all subscribed tenants. Should be overridable on subscription and should affect billing.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">scale</td>
<td style="text-align:left">Enum</td>
<td style="text-align:left">Values: AUTO, NONE<br>Default: NONE <br> <br> Enables scaling policy. For NONE, the platform guarantees that there is maximally one instance of the service per isolation level.</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">resources</td>
<td style="text-align:left">Resources</td>
<td style="text-align:left">Configuration for default resource limit. Can be overridden by tenant during subscription.<br><br>Guaranteed resources are CPU=0.25, Memory 256MB<br>Default limits are CPU = 0.5 , Memory = 512MB</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">settings</td>
<td style="text-align:left">Option[]</td>
<td style="text-align:left">Default: [] ( empty list )<br>Set of tenant options available to define configuration of microservice</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">requiredRoles</td>
<td style="text-align:left">String[]</td>
<td style="text-align:left">List of permissions required by microservice to work</td>
<td style="text-align:left">Yes</td>
</tr>
<tr>
<td style="text-align:left">roles</td>
<td style="text-align:left">String[]</td>
<td style="text-align:left">Default: [] ( empty list )<br>Roles provided by this microservice</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">livenessProbe</td>
<td style="text-align:left">Probe</td>
<td style="text-align:left">Defines strategy used to verify if microservice is alive or requires restart</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">readinessProbe</td>
<td style="text-align:left">Probe</td>
<td style="text-align:left">Defines strategy used to verify if microservice is ready to accept traffic</td>
<td style="text-align:left">No</td>
</tr>
<tr>
<td style="text-align:left">extensions</td>
<td style="text-align:left">Extension[]</td>
<td style="text-align:left">Default: [] ( empty list )<br> Defines a set of extensions that should be enabled for microservice</td>
<td style="text-align:left">No</td>
</tr>
</tbody>
</table>


#### Provider

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|name|String |Company name of provider|Yes
|domain|String |Website of provider |No
|support|Email|Email to support person|No

#### Resources

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|cpu|String |Default: 0.5 <br/>Limit for number of cpus or cpu time|No
|memory|String |Default: 512Mb <br/>Default limit for microservice memory usage|No

#### Option

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|key|String |Key of option|Yes
|default|String|Default value|No
|editable|Boolean|Default: false <br/>Defines if option maybe changed by subscribed tenant on runtime|No
|valueSchema|Schema|Default: {type: ëstringë}<br/>Defines schema of value and follows the json schema defined here | No

#### Probe
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

#### ExecAction
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|command | String[] | Commands to be executed on a container to probe the service | Yes

#### TCPSocketAction
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|host | String | Host to verify | Yes
|port | Number | Port to verify <br/>Default:80 | Yes

#### HTTPGetAction
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|host | String | Host name to connect to | Yes
|path | String | Path to access on the HTTP server | Yes
|port | Number | Port to verify <br/>Default: 80 | No
|scheme | String | Scheme to use for connecting to the host (HTTP or HTTPS)<br/> Default: HTTP | No
|headers | HttpHeader | HTTP headers to be added to a request | No

#### HttpHeader
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|name | String | Header name | Yes
|value | String | Header value | Yes

#### Extension
|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|type | String | Type id of extension | Yes
|* | any | Configuration parameters | No


#### Example Manifest

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
        "scale": "AUTO",
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

### Supported Extensions
List of extensions supported by Cumulocity Microservice Manifest

#### Prometheus Monitoring
Enables support for gathering of metrics exposed via prometheus endpoint.
Endpoint should not require authentication.

|Name|Type|Description|Required|
|:---|:---|:----------|:----------|
|path | String | Path to prometheus endpoint. <br/> Default: /prometheus | No
|port | String | HTTP port where prometheus endpoint is available. <br/> Default: 80 | No

##### Example Extension
    {
      "type": "prometheus.io",
      "path": "/monitoring/prometheus"
      "port": "4444"
    }
