---
weight: 65
title: Microservices registry
layout: redirect
---

This field is necessary when this Edge deployment needs to be configured to use an externally hosted Docker registry or to specify resource limits for the Docker registry containers deployed by the Operator.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
url | No | String | The Operator deploys a Docker registry. | URL to connect to an externally hosted Docker registry.
credentialsSecretName | No | String |  | Name of the Kubernetes Secret containing the credentials to connect to an externally hosted Docker registry. See [Microservices registry credentials secret](#microservices-registry-credentials-secret) for details. <p>**Note:** The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.
tlsSecretName | No | String |  | Name of the Kubernetes Secret containing the server certificate of an externally hosted Docker registry. See [Microservices Registry TLS secret](#microservices-registry-tls-secret) for details. <p>**Note:** The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.
resources | No | Structure | Defaults to CPU Limit: 500m, Memory Limit: 1Gi, CPU Requests: 250m, Memory Requests: 500Mi | Specify resource limits for the Docker Registry container. See [Resource Limits Spec](#resource-limits-spec) for details.