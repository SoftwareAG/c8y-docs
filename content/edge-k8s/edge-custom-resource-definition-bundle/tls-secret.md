---
weight: 25
title: TLS secret
layout: redirect
---

Specifies the name of the Kubernetes secret containing the TLS key/certificates chain. The operator retrieves this secret from the `EDGE-CR-NAMESPACE`. Ensure that the secret is created before initiating the {{< product-c8y-iot >}} Edge deployment or update process.

This secret should contain the fields described in the table below.

|Field|Required|Type|Default|Description|
|:---|:---|:---|:---|:---|
|tls.key|Yes|String||TLS Private key in the PEM format.
|tls.crt|Yes|String||Certificate chain of the private key in the PEM format.