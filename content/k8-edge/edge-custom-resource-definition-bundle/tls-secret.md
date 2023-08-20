---
weight: 25
title: TLS secret
layout: redirect
---

Specifies the name of the Kubernetes Secret containing the TLS Key/Certificates chain. The operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.

This secret should contain the fields described in the table below.

|Field|Required|Type|Default|Description|
|:---|:---|:---|:---|:---|
|tls.key|Yes|String||TLS Private key in the PEM format.
|tls.crt|Yes|String||Certificate chain of the private key in the PEM format.