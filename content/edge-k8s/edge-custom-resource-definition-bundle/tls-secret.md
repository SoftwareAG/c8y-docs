---
weight: 25
title: TLS secret
layout: redirect
---

Specifies the name of the Kubernetes Secret containing the TLS Key/Certificates chain. The operator retrieves this secret from the namespace corresponding to the name specified in the Edge CR. Ensure that this secret is created before initiating the Edge deployment or update process.

This secret should contain the fields described in the table below.

|Field|Required|Type|Default|Description|
|:---|:---|:---|:---|:---|
|tls.key|Yes|String||TLS Private key in the PEM format.
|tls.crt|Yes|String||Certificate chain of the private key in the PEM format.