---
weight: 25
title: TLS secret
layout: redirect
---

Specifies the name of the Kubernetes Secret containing the TLS Key/Certificates chain. The Operator retrieves this secret from the **`EDGE-CR-NAMESPACE`**. Ensure that this secret is created before initiating the {{< product-c8y-iot >}} Edge deployment or update process.

This secret should contain the fields described in the table below.

|Field|Required|Type|Default|Description|
|:---|:---|:---|:---|:---|
|tls.key|Yes|String||TLS Private key in the PEM format.
|tls.crt|Yes|String||Certificate chain of the private key in the PEM format.