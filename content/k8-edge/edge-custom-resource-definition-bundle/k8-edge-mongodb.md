---
weight: 55
title: MongoDB
layout: redirect
---

This field is necessary when this Edge deployment needs to be configured to use an externally hosted MongoDB server or to specify resource limits for the MongoDB server containers deployed by the Operator.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
mongosHost | No | String | The Operator deploys a MongoDB server. | Hostname to reach an externally hosted Mongos server.
connectionString | No | String | | Connection string of externally hosted MongoDB shards.
credentialsSecretName | No | String |  | Name of the Kubernetes Secret containing the credentials and sharded key to connect to an externally hosted MongoDB server. See [MongoDB Credentials Secret](#mongodb-credentials-secret) for details. <p>**Note:** The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.
mongosResources | No | Structure | Defaults to CPU Limit: 500m, Memory Limit: 1G, CPU Requests: 100m, Memory Requests: 100M | Specify resource limits for the mongos container. See [Resource Limits Spec](#resource-limits-spec) for details.
configSvrResources | No | Structure | Defaults to CPU Limit: 2, Memory Limit: 1G, CPU Requests: 100m, Memory Requests: 100M | Specify resource limits for the config server container. See [Resource Limits Spec](#resource-limits-spec) for details.
shardSvrResources | No | Structure | Defaults to CPU Limit: 2, Memory Limit: 1G, CPU Requests: 100m, Memory Requests: 100M | Specify resource limits for the shard server container. See [Resource Limits Spec](#resource-limits-spec) for details.
arbiterResources | No | Structure | Defaults to CPU Limit: 250m, Memory Limit: 250M, CPU Requests: 100m, Memory Requests: 100M | Limits the Specify resource limits for the arbiter container. See [Resource Limits Spec](#resource-limits-spec) for details.