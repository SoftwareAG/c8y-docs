---
weight: 25
title: Accessing Edge
layout: redirect
---

Kubernetes Ingress is an API object that manages external access to the services in a cluster, typically HTTP. You must have an Ingress controller to satisfy an Ingress. Only creating an Ingress resource has no effect. K3s and K3d installations by default deploy [Traefik](https://doc.traefik.io/traefik/providers/kubernetes-ingress/) ingress controller.

To connect to Edge, you need to find the IP address on which Ingress is reachable. Use `kubectl get service traefik -n kube-system` to find the external IP address of the traefik service. 

Below is the sample output of the `kubectl get service` command.

```
NAME      TYPE           CLUSTER-IP           EXTERNAL-IP             PORT(S)                      AGE
traefik   LoadBalancer   X.X.X.X **REDACTED   X.X.X.X **REDACTED      80:31640/TCP,443:30351/TCP   16h
```

You can connect to the Edge on this EXTERNAL-IP address.

### Configuring access through domain name

The Cumulocity IoT Edge is accessible using the domain name configured as part of the deployment in the Edge CR. In the [Sample Cumulocity IoT Edge Manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/cr/v1/cumulocity-iot-edge-manifest.yaml), we used `myown.iot.com`.

There are two ways to configure the accessibility with the domain names

1. Add an entry of the domain name and IP mapping in the DNS servers.
2. Add the host name alias in `/etc/hosts` or `C:\Windows\System32\drivers\etc\hosts` to access Edge through the domain name. This needs to be performed on each client host from which the Edge is accessed.

> **INFO**
> 
> The first option is always preferable so that the Edge is accessible over LAN.

### Accessing through domain name

Enter the URL `https://myown.iot.com` in the browser.

The Edge login screen appears. Log in with your credentials provided during the installation in the `admin-credentials-secret` of the [Sample Cumulocity IoT Edge Manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/cr/v1/cumulocity-iot-edge-manifest.yaml).

> **INFO**
> 
> Please refer to [Device integration using MQTT](https://cumulocity.com/guides/10.14.0/device-sdk/mqtt/) for connecting your devices over MQTT.
