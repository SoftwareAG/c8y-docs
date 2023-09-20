---
weight: 50
title: Uninstalling the Messaging Service and the microservice-based data broker on Edge
layout: redirect
---

The bundle for the Messaging Service and data broker microservice does not have an uninstall command. 
If a mistake is made, or and installation fails, the bundle components must be manually uninstalled.
Once manually uninstalled, the installation can be reattempted.

#### To manually uninstall:
1. Login to {{< product-c8y-iot >}} Edge using SSH.
   
2. Uninstall the Pulsar helm chart.
```shell
sudo helm uninstall pulsar -n c8y-messaging-service
```
3. Wait for the pulsar pods to terminate.  
   This command updates its state every 2 seconds. When it reports there are no resources, press CTL-C to return to the command line.

```shell
watch sudo kubectl get pods -n c8y-messaging-service
```
4. Delete Pulsar's persistent volume claims.
```shell
sudo kubectl delete pvc -n c8y-messaging-service --all
```
5. Find the names of the persistent volumes used by the Pulsar components.
   
   Here the GREP command is used to filter the output. The names are in the output's leftmost column.

```shell
sudo kubectl get pv | grep pulsar
journal0     2Gi        RWO            Retain           Released    c8y-messaging-service/pulsar-bookie-journal-pulsar-bookie-0      local-storage            3h
ledgers0     10Gi       RWO            Retain           Released    c8y-messaging-service/pulsar-bookie-ledgers-pulsar-bookie-0      local-storage            3h
zookeeper0   2Gi        RWO            Retain           Released    c8y-messaging-service/pulsar-zookeeper-data-pulsar-zookeeper-0   local-storage            3h
```
6. Delete each of the persistent volumes found in step 5.
```shell 
sudo kubectl delete pv journal0 ledgers0 zookeeper0
```
7. Delete the directories used by the persistent volumes.
```shell
sudo rm -rf /opt/bookie/ledgers /opt/bookie/journal /opt/zookeeper
```
8. Unsubscribe the edge tenant from and undeploy, the databroker-agent-server microservice.

   The databroker-agent-server application ID is required for the HTTP requests used to do both of these.   
   To find its application ID, you can use a CURL command of the following form and redirect the output to a JQ command to make it easier to read the JSON response.
   The general structure of command is:
```shell
curl http://<EDGE-HOSTNAME>/application/applicationsByName/databroker-agent-server -su <TENANT>/admin | jq --indent 2
```   
   The ID required is the `id` field at the root level of the JSON response.
   In the following example, it has the value '19' (the penultimate JSON field).
```shell
curl http://myown.iot.com/application/applicationsByName/databroker-agent-server -su edge/admin | jq --indent 2
Enter host password for user 'edge/admin':
{
  "next": "https://myown.iot.com/application/applications?pageSize=5&currentPage=2",
  "self": "https://myown.iot.com/application/applications?pageSize=5&currentPage=1",
  "statistics": {
    "pageSize": 5,
    "currentPage": 1
  },
  "applications": [
    {
      "owner": {
        "self": "https://myown.iot.com/tenant/tenants/edge",
        "tenant": {
          "id": "edge"
        }
      },
      "requiredRoles": [
        "ROLE_DATA_BROKER_READ",
        "ROLE_INVENTORY_READ",
        "ROLE_INVENTORY_CREATE",
        "ROLE_ALARM_ADMIN"
      ],
      "manifest": {
        "livenessProbe": {
          "failureThreshold": 3,
          "periodSeconds": 10,
          "timeoutSeconds": 5,
          "successThreshold": 1,
          "initialDelaySeconds": 50,
          "httpGet": {
            "path": "/health",
            "port": 80
          }
        },
        "requiredRoles": [
          "ROLE_DATA_BROKER_READ",
          "ROLE_INVENTORY_READ",
          "ROLE_INVENTORY_CREATE",
          "ROLE_ALARM_ADMIN"
        ],
        "roles": [],
        "resources": {
          "cpu": "1000m",
          "memory": "1Gi"
        },
        "isolation": "PER_TENANT",
        "version": "1017.0.275",
        "apiVersion": "2",
        "provider": {
          "name": "Cumulocity GmbH"
        },
        "readinessProbe": {
          "failureThreshold": 3,
          "periodSeconds": 10,
          "timeoutSeconds": 5,
          "successThreshold": 1,
          "initialDelaySeconds": 50,
          "httpGet": {
            "path": "/health",
            "port": 80
          }
        },
        "billingMode": "RESOURCES",
        "name": "databroker-agent-server",
        "dockerBuildInfo": {
          "builderInfo": "com.nsn.cumulocity.clients-java:microservice-package-maven-plugin:1017.0.275",
          "hostOS": "Linux",
          "hostPlatform": "amd64",
          "buildDate": "2023-08-11T13:35:08Z",
          "imageArch": "linux/amd64",
          "hostOSVersion": "5.4.238-148.347.amzn2.x86_64"
        },
        "noAppSwitcher": true,
        "settingsCategory": null
      },
      "roles": [],
      "contextPath": "databroker-agent-server",
      "availability": "MARKET",
      "type": "MICROSERVICE",
      "activeVersionId": "1345",
      "name": "databroker-agent-server",
      "self": "https://myown.iot.com/application/applications/19",
      "id": "19",
      "key": "databroker-agent-server-key"
    }
  ]
}
```
   Use that ID value in the request to unsubscribe from the microserive, and again when deleting it. 

   To unsubscribe, use a command of the following form:
```shell
curl -X DELETE http://<EDGE-HOSTNAME>/tenant/tenants/<TENANT>/applications/<APP-ID> -u <TENANT>/admin -v

```
   This should return an HTTP 204 (no content) response. For example: 
```shell
curl -X DELETE http://myown.iot.com/tenant/tenants/edge/applications/19 -u edge/admin -v
Enter host password for user 'edge/admin':
* About to connect() to myown.iot.com port 80 (#0)
*   Trying 127.0.0.1...
* Connected to myown.iot.com (127.0.0.1) port 80 (#0)
* Server auth using Basic with user 'edge/admin'
> DELETE /tenant/tenants/edge/applications/19 HTTP/1.1
> Authorization: Basic ZWRnZS9hZG1pbjpFZGdlN184OV9fX19fX18=
> User-Agent: curl/7.29.0
> Host: myown.iot.com
> Accept: */*
>
< HTTP/1.1 204 No Content
< Date: Thu, 07 Sep 2023 16:27:32 GMT
< Connection: keep-alive
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 1; mode=block
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Pragma: no-cache
< Expires: 0
< X-Frame-Options: DENY
<
* Connection #0 to host myown.iot.com left intact
```

   To delete, the use a command of the form:
```shell
curl -X DELETE http://<EDGE-HOSTNAME>/application/applications/<APP-ID> -su <TENANT>/admin -v
```   
   This should return an HTTP 204 (no content) response. For example:
```shell
curl -X DELETE http://myown.iot.com/application/applications/19 -su edge/admin -v
Enter host password for user 'edge/admin':
* About to connect() to myown.iot.com port 80 (#0)
*   Trying 127.0.0.1...
* Connected to myown.iot.com (127.0.0.1) port 80 (#0)
* Server auth using Basic with user 'edge/admin'
> DELETE /application/applications/19 HTTP/1.1
> Authorization: Basic ZWRnZS9hZG1pbjpFZGdlN184OV9fX19fX18=
> User-Agent: curl/7.29.0
> Host: myown.iot.com
> Accept: */*
>
< HTTP/1.1 204 No Content
< Date: Thu, 07 Sep 2023 16:35:11 GMT
< Content-Type: application/vnd.com.nsn.cumulocity.error+json;charset=UTF-8;ver=0.9
< Connection: keep-alive
< X-Content-Type-Options: nosniff
< X-XSS-Protection: 1; mode=block
< Cache-Control: no-cache, no-store, max-age=0, must-revalidate
< Pragma: no-cache
< Expires: 0
< X-Frame-Options: DENY
<
* Connection #0 to host myown.iot.com left intact
```
