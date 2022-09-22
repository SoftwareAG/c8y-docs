---
weight: 10
title: Installing the Messaging Service and the Microservice-based Data broker on Edge
layout: redirect
---

The Microservice-based Data broker is an optional component of {{< product-c8y-iot >}} Edge. The data broker is a {{< product-c8y-iot >}} feature that allows a {{< product-c8y-iot >}} tenant to send data in motion (live measurements, events and alarms), using the standard {{< product-c8y-iot >}} REST API requests, to another tenant as that data arrives in the first tenant. It is often used to 'ship' data from remote Edge {{< product-c8y-iot >}} instances in the field to a central {{< product-c8y-iot >}} instance, where all data from all remote 'field' locations can be seen and handled together. Another use case may be where devices are leased; the devices are managed by the leasing company in its tenant, and the devices' measurements, etc are sent, via a data broker connection, onto the leasing tenant for application data processing.

The bundle for installing the Messaging Service and the Microservice-based Data broker comes as a .tgz file which contains the Messaging Service and Data broker files, an install script and a digital signature. This bundle is unpacked, the signature verified and the install script executed by another script that is part of the standard Edge install. The bundle can be downloaded from the [Software AG Empower server](https://empower.softwareag.com/). The bundle is named "Cumulocity IoT Data Broker Edge".

You need to ensure that microservices are enabled for Edge as both the Messaging Service and Data broker run as Kubernetes pods. Running microservices on a basic Edge install requires the number of CPU cores to be increased from 2 to 4 and the RAM to be increased from 6GB to 8GB. Running the Messaging Service and Data broker requires an extra 4GB of RAM on top of this.

Using SCP, copy the bundle to the /tmp directory on the Edge server - you will need to enter the password for the Edge Linux administrative/login account when prompted. For Example:

```bash
scp C:\Temp\<BUNDLE_NAME> "<LOGIN_USERNAME>@<DNS_NAME_OF_SERVER>:/tmp/<BUNDLE_NAME>"
```

substituting the relevant values of `<LOGIN_USERNAME>`, `<DNS_NAME_OF_SERVER>` and `<BUNDLE_NAME>`. Then run:

```bash
ssh <LOGIN_USERNAME>@<DNS_NAME_OF_SERVER> -t "/bin/bash -c 'cd /tmp && sudo /opt/c8y/utilities/install_signed_package.sh /tmp/<BUNDLE_NAME>"
```

You will need to enter the Edge Linux admin account password again followed by the Cumulocity admin account password.

To confirm the Messaging Service and Data broker are now running, log into the Edge VM using ssh with the connection details used previously and run:

```bash
sudo kubectl get pods -A
```

Which should return something like this:

```
NAMESPACE                NAME                                                             READY   STATUS      RESTARTS   AGE
c8y-messaging-service    pulsar-bookie-0                                                  1/1     Running     0          4m14s
c8y-messaging-service    pulsar-bookie-init-765k9                                         0/1     Completed   0          4m14s
c8y-messaging-service    pulsar-broker-0                                                  1/1     Running     0          4m14s
c8y-messaging-service    pulsar-pulsar-init-z97xs                                         0/1     Completed   0          4m14s
c8y-messaging-service    pulsar-zookeeper-0                                               1/1     Running     0          4m14s
calico-system            calico-kube-controllers-5ddcc6fc8f-sln6x                         1/1     Running     0          82m
calico-system            calico-node-bxm9b                                                1/1     Running     0          82m
calico-system            calico-typha-7fd9df674f-24zwz                                    1/1     Running     0          82m
cumulocity-single-node   databroker-agent-server-scope-edge-deployment-7dc4dbdc5f-wxh8l   1/1     Running     3          3m36s
cumulocity-single-node   device-simulator-scope-management-deployment-78d5c6694-rlpjx     1/1     Running     0          80m
cumulocity-single-node   kube-registry-persistent-secure-7db46f57b5-vhlbh                 1/1     Running     0          81m
kube-system              coredns-74ff55c5b-5zkps                                          1/1     Running     0          82m
kube-system              etcd-localhost                                                   1/1     Running     0          82m
kube-system              kube-apiserver-localhost                                         1/1     Running     0          82m
kube-system              kube-controller-manager-localhost                                1/1     Running     0          82m
kube-system              kube-proxy-92lm6                                                 1/1     Running     0          82m
kube-system              kube-scheduler-localhost                                         1/1     Running     0          82m
kube-system              metrics-server-5b78d5f9c6-7l45k                                  1/1     Running     0          82m
tigera-operator          tigera-operator-76bbbcbc85-6clrf                                 1/1     Running     0          82m```

The key pods that should be running are the pulsar bookie, pulsar broker, pulsar zookeeper and databroker agent server. It may take a few minutes for the kubernetes pods to settle into a Running state after the install has been done.

For more information see the [Messaging Reference Guide](https://cumulocity.com/guides/reference/notifications/).