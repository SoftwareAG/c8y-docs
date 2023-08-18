---
weight: 25
title: TLS secret
layout: redirect
---

Specifies the name of the Kubernetes Secret containing the TLS Key/Certificates for the domain. The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.

See sample [TLS secret manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/secret/tls-secret.yaml) file.

This secret should contain the fields described in the table below.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
tls.key | Yes | String |  | Private key for the domain.
tls.crt | Yes | String |  | Certificate chain of the private key for the domain.