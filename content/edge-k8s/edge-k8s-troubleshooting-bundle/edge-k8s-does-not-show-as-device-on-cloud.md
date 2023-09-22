---
weight: 20
title: Edge doesn't show up as a device in cloud tenant 
layout: redirect
---

{{< product-c8y-iot >}} Edge is unable to register itself as a device in your cloud tenant. 

Describe the Edge CR `kubectl describe edge c8yedge -n c8yedge`

In the events section, you will find an event with reason . For example: 

```yaml
Name: c8yedge
Namespace: c8yedge
API Version: edge.cumulocity.com/v1 
Kind: CumulocityIoTEdge

Status: 
	Deployed Generation:  x
	State: Ready

Events: 
 Type      Reason                       Age    From               Message 
 ----      ------                       ----   ----               ------- 
 Normal    Validating                   8m37s  cumulocityiotedge  validating 
 Normal    ValidationPassed             8m37s  cumulocityiotedge  validation passed 
 Normal    Installing                   8m34s  cumulocityiotedge  installing 
…… 
…… 
 Normal    Ready                        1m00s  cumulocityiotedge  installed successfully 
 Warning   FailedToRegisterCloudDevice  0m30s  cumulocityiotedge  Device failed to connect to <cloud tenant domain>, you might not have uploaded the device certificate to Cumulocity 
```
Possible reasons:
* You didn’t add the Certificate Authority (CA) certificate to the trusted certificate list of your tenant.
For completing the registration process, you must sign into your cloud tenant and follow the steps described in [Managing trusted certificates](/users-guide/device-management/#managing-trusted-certificates) to add the Certificate Authority (CA) certificate to the trusted certificate list of your tenant. For more details, see [Device certificates](/device-integration/mqtt/#device-certificates).
You can also see, [Connecting Cumulocity IoT Edge to the cloud](/edge-k8s/k8-edge-connecting-edge-to-cloud/). 

- Specified cloud tenant domain is not reachable or incorrect. 

If you need to contact Software AG support, include the output of the diagnostics dump. For more information about accessing diagnostic logs, see [Accessing logs](/edge-k8s/installing-edge-on-k8/#accessing-logs). 