---
weight: 15
title: Specification
layout: redirect
---

The spec section defines the Edge deployment's configurations.

Field | Required | Type | Default | Description
----- | -------- | ---- | ------- | -----------
version | Yes | String |  | Cumulocity IoT Edge version to deploy.
licenseSecretName | Yes | String |  | Name of the Kubernetes Secret containing the Edge license key. See [License Secret](#license-secret) for details. <p>**Note:** The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.
company | Yes | String |  | Name of the edge tenant, e.g. the company's name.
domain | Yes | String |  | A fully qualified domain name. <p>For example, “myown.iot.com”. Here, you must have the Edge license for the domain name iot.com or myown.iot.com.
tlsSecretName| No | String | The Operator generates and assigns self-signed certificates. | Name of the Kubernetes Secret containing the TLS key and certificates for the name specified in the `spec.domain` field. See [TLS Secret](#tls-secret) for details. <p>**Note:** The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.
adminCredentialsSecretName| Yes | String |  | Name of the Kubernetes Secret containing the management/edge tenant's admin credentials. See [Admin Credentials Secret](#admin-credentials-secret) for details. <p>**Note:** The Operator fetches this secret from the namespace with the name of the Edge CR. Create this secret before deploying or updating the Edge.
core | Yes | Structure |  | Cumulocity IoT platform configurations. See [Cumulocity IoT Core configurations](#cumulocity-iot-core-configurations) for details.
microservices. | No | Array of Structure | The Operator deploys all the default Cumulocity microservices, which include the Apama, Smart Rules, SSL Management Server, Device Simulator and OPCUA Management Server microservices. |  Specify resources to allocate to a Cumulocity microservice and skip deploying the Device Simulator and/or OPCUA Management Server. See [Microservices](#microservices) for details.
applications | No | Array of Structure | The Operator deploys all default applications, which include the Administration, Cockpit, Device Management and Apama Streaming Analytics applications. | Specify the applications to skip deploying. For example, Apama Streaming Analytics application. See [Applications](#applications) for details.
mongoDb | No | Structure | The Operator deploys a MongoDB server. |  See [MongoDB](#mongodb) for details.
microservicesRegistry | No | Structure | The Operator deploys a Docker registry (used to store Cumulocity microservice images). | See [Microservices Registry](#microservices-registry) for details.