---
weight: 10
title: Installing Apache Pulsar and Cumulocity Data broker on Edge
layout: redirect
---

Data broker is an optional component of {{< product-c8y-iot >}} Edge. The data broker is a {{< product-c8y-iot >}} feature that allows a {{< product-c8y-iot >}} Tenant to send data in motion (live measurements, events and alarms), using the standard {{< product-c8y-iot >}} REST API requests, to another Tenant as that data arrives in the first Tenant. The other, second Tenant can be within the same {{< product-c8y-iot >}} instance or another remote one. It is often used to 'ship' data from remote Edge {{< product-c8y-iot >}} instances in the field to a central {{< product-c8y-iot >}} instance, where all data from all remote 'field' locations can be seen and handled together. Another use case may be where devices are leased; the devices are managed by the leasing company in its Tenant, and the devices' measurements, etc are sent, via a data broker connection, onto the leasing tenant for application data processing.

The bundle for installing Apache Pulsar and the Cumulocity Data broker comes as a .tgz file which contains the Pulsar and Data broker files, an install script and a digital signature. This bundle is unpacked, the signature verified and the install script executed by another script that is part of the standard Edge install. The bundle can be downloaded from the Empower server. [NEED DETAILS]

You need to ensure that microservices are enabled for Edge as both Pulsar and Data broker run as Kubernetes pods. Running microservices on a basic Edge install requires the number of CPU cores to be increased from 2 to 4 and the RAM to be increased from 6GB to 8GB. Running Pulsar and Data broker requires an extra 4GB of RAM on top of this.

Using SCP, copy the bundle to the /tmp directory on the Edge server - you will need to enter the password for the Edge Linux admin account (management tenant) when prompted.

Then run:

```bash
ssh <ADMIN_USERNAME>@<DNS_NAME_OF_SERVER> -t "/bin/bash -c 'cd /tmp && sudo /opt/c8y/utilities/install_signed_package.sh/tmp/<BUNDLE_NAME>"
```

substituting the relevant values of `<ADMIN_USERNAME>`, `<DNS_NAME_OF_SERVER>` and `<BUNDLE_NAME>`. You will need to enter the Edge Linux admin account password again followed by the Cumulocity admin account password.

To confirm Pulsar and Data broker are now running, log into the Edge VM using ssh with the Linux admin credentials and run:

```bash
sudo kubectl get pods -A
```

The key pods that should be running are the pulsar bookie, pulsar broker, pulsar zookeeper and databroker agent server. It may take a few minutes for the kubernetes pods to settle into a Running state after the install has been done.
