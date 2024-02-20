---
weight: 40
title: Troubleshooting
layout: bundle
section:
  - edge_server
---

### Edge CR status ValidationLoopBackOff

After deploying or updating {{< product-c8y-iot >}} Edge, if the Edge CR status shows as “ValidationLoopBackOff” as shown below:

Output of `kubectl get edge c8yedge -n c8yedge`:

```shell
NAME        DOMAIN NAME     VERSION     STATUS
c8yedge     myown.iot.com   1017.0.0    ValidationLoopBackOff
```
Describe the Edge CR (c8yedge): `kubectl describe edge c8yedge -n c8yedge`.

In the events section, you will find the reasons for the validation failure. For example:

```shell
Name: c8yedge
Namespace: c8yedge
API Version: edge.cumulocity.com/v1
Kind: CumulocityIoTEdge

Status:
	Deploying Generation:  x
	State: ValidationLoopBackOff

Events:
 Type      Reason                   Age     From               Message
 ----      ------                   ----    ----               -------
 Normal    Validating               8m37s   cumulocityiotedge  validating
 Normal    ValidationLoopBackoff    8m37s   cumulocityiotedge  invalid [spec.licenseKey] value [empty]
```

### Edge CR status InstallLoopBackOff or UpdateLoopBackOff

After deploying or updating {{< product-c8y-iot >}} Edge, if the Edge CR status is `InstallationLoopBackOff` or `UpdateLoopBackOff`, as part of the output of `kubectl get edge c8yedge -n c8yedge`:

```shell
NAME         DOMAIN NAME     VERSION     STATUS     
c8yedge      myown.iot.com   1017.0.0    InstallLoopBackOff
```

Describe the Edge CR (cumulocity-iot-edge) with the command `kubectl describe edge c8yedge -n c8yedge`.

In the events section, you will find the reasons for the install or update failure. For example:

```yaml
Name: c8yedge
Namespace: c8yedge
API Version: edge.cumulocity.com/v1
Kind: CumulocityIoTEdge

Status:
	Deploying Generation: x
	State: InstallLoopBackOff

Events:
 Type    Reason               Age    From               Message
 ------  ------               ----   ----               -------
 Normal  Validating           8m37s  cumulocityiotedge  validating
 Normal  ValidationPassed     8m37s  cumulocityiotedge  validation passed
 Normal  Installing           8m34s  cumulocityiotedge  installing
……
……
 Normal  InstallLoopBackOff   1m00s  cumulocityiotedge  waiting for mongo server to be ready
```

Check the logs of the Edge Operator, MongoDB and core pods to get more insights.

The Edge Operator logs:

```shell
kubectl logs -n c8yedge deployment.apps/c8yedge-operator-controller-manager -c manager
```

MongoDB logs:

```shell
kubectl logs -n c8yedge logs stategulset.apps/edge-db-rs0 –all-containers --prefix
```

Core logs:

```shell
kubectl logs -n c8yedge logs stategulset.apps/c8ycore-sts –all-containers --prefix
```

### Pending external cumulocity-core service IP

The external IP is not assigned to the `cumulocity-core` service.

Output of `kubectl get service cumulocity-core -n c8yedge`:

```text
NAME              TYPE           CLUSTER-IP          EXTERNAL-IP   PORT(S)                                      AGE
cumulocity-core   LoadBalancer   X.X.X.X **REDACTED  <pending>     443:31342/TCP,1883:32751/TCP,8883:32270/TCP  12m           
```
For more information, see [Assigning an external IP](/edge-kubernetes/installing-edge-on-k8/#assigning-an-external-ip).

### Edge not showing up as a device in the cloud tenant

{{< product-c8y-iot >}} Edge is unable to register itself as a device in your cloud tenant.

Describe the Edge CR `kubectl describe edge c8yedge -n c8yedge`

In the events section, you will find an event with a reason. For example:

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
For completing the registration process, sign into your cloud tenant and follow the steps described in [Managing trusted certificates](/device-management-application/managing-device-data/#managing-trusted-certificates) to add the Certificate Authority (CA) certificate to the trusted certificate list of your tenant. For more details, see [Device certificates](/device-integration/mqtt/#device-certificates).
For more information see [Connecting {{< product-c8y-iot >}} Edge to the cloud](/edge-kubernetes/k8-edge-connecting-edge-to-cloud/).

* The specified cloud tenant domain is not reachable or incorrect.

If you must contact {{< sag-support >}}, include the output of the diagnostics dump. For more information about accessing diagnostic logs, see [Accessing logs](/edge-kubernetes/installing-edge-on-k8/#accessing-logs).
