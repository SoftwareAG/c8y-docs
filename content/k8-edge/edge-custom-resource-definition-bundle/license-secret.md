---
weight: 20
title: License secret
layout: redirect
---

Specifies the name of the Kubernetes Secret containing the Edge license key. The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.

See sample [License secret manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/secret/license-secret.yaml) file.

This secret should contain the fields described in the table below.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
licence | Yes | String |  | Edge license key you received.