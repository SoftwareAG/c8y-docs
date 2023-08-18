---
weight: 45
title: Microservices
layout: redirect
---

Microservices spec allows specifying resources to allocate to a Cumulocity microservice and skip deploying the Device Simulator and/or OPCUA Management Server. If not specified, the Operator deploys all the default Cumulocity microservices, which include the Apama, Smart Rules, SSL Management Server, Device Simulator and OPCUA Management Server microservices.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
name | Yes | String |  | Name of the Cumulocity microservice. Allowed values are apama-ctrl, smartrule, ssl-management-server, device-simulator and opcua-mgmt-service
disable | No | boolean | false | Specify 'true' to not deploy or undeploy the microservice. <p>**Note:** You can configure to not deploy or undeploy (if already deployed) the device-simulator and opcua-mgmt-service services only, as the rest of the services are essential for the functioning of the Cumulocity IoT Platform.
resources | No | Structure | | Specify resource limits for the microservice container. See [Resource Limits Spec](#resource-limits-spec) for details.