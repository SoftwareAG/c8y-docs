---
weight: 70
title: Microservices registry credentials secret
layout: redirect
---

Specifies the name of the Kubernetes Secret containing the credentials to connect to an externally hosted Docker registry (used to store Cumulocity microservice images). The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.

See sample [Microservices registry credentials secret manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/secret/microservices-registry-credentials-secret.yaml) file.

This secret should contain the fields described in the table below.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
username | Yes | String |  | Username to connect to an externally hosted Docker registry.
password | Yes | String |  | Password to connect to an externally hosted Docker registry.