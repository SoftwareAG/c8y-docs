---
weight: 75
title: Microservices registry TLS secret
layout: redirect
---

Specifies the name of the Kubernetes Secret containing the server certificate of an externally hosted Docker registry. The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.

See sample [Microservices registry TLS secret manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/secret/microservices-registry-tls-secret.yaml) file.

This secret should contain the fields described in the table below.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
certificate | Yes | String |  | Externally hosted Docker Registry's server certificate.