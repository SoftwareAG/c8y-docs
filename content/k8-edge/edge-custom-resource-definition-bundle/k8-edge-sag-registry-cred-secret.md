---
weight: 85
title: Software AG registry credentials secret
layout: redirect
---

This secret named `sag-registry-credentials` is required to supply the Software AG Registry (registry.c8y.io) credentials to the Operator. The Operator explicitly searches for the secret named `sag-registry-credentials`, so you can't change its name. Create this secret before deploying or updating the Edge.

See sample [Software AG Registry Credentials Secret manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/secret/sag-registry-credentials-secret.yaml) file.

This secret should contain the fields described in the table below.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
username | Yes | String |  | Edge Repo username you received.
password | Yes | String |  | Edge Repo password you received.
