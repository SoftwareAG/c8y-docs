---
weight: 30
title: Admin Credentials Secret
layout: redirect
---

Specifies the name of the Kubernetes Secret containing the management/edge tenant's admin credentials. The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.

See sample [Admin credentials secret manifest](https://raw.githubusercontent.com/SoftwareAG/edge-k8s-operator-docs/main/samples/secret/admin-credentials-secret.yaml) file.

This secret should contain the fields described in the table below.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
username | Yes | String |  | admin username of the management and edge tenants.
password | Yes | String |  | admin user's password.
email | Yes | String |  | admin user's email id.