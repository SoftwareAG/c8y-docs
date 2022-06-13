---
weight: 25
title: Configuring the microservice hosting feature
layout: redirect
---

Microservices are server-side applications which may be used to extend the {{< product-c8y-iot >}} Edge platform with customer-specific functionality. For more information, see [Microservice SDK](/microservice-sdk/introduction/). When you enable or disable the microservice feature, the Device simulator microservice also gets enabled or disabled. To use the Device simulator, add the **Simulator** permission. For more information, see [Global roles](/users-guide/administration/#a-nameglobalaglobal-roles).

For more information about Device simulator, see [Working with simulators](/users-guide/device-management/#simulator).

>**Info:** Ensure that you have fulfilled the minimum system requirements: 4 logical CPU cores and 8 GB RAM.

If you want to use the microservice hosting feature, ensure that you do not use these IP ranges in your local network where the Edge virtual machines are configured. When you enable the microservice hosting feature, the Kubernetes system reserves these IP ranges on the Edge instances.
- 10.96.0.0/12

Enabling the microservice hosting feature takes about 10 to 15 minutes to complete. 

### Enabling or disabling the microservice hosting feature using the UI

1. Log in to the {{< management-tenant >}} using the Edge administrator credentials created during the installation.

	- Username: management/<*Edge admin username*>
	- Password: password provided during the installation
2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.
3. Click **Edge** > **Microservices** in the navigator.
4. Use the toggle button to enable the microservice hosting feature.

>**Important:** If you have enabled the remote-connectivity and also the microservice hosting feature, disabling the microservice hosting feature, reconfiguring the network or updating the Edge appliance might result in an alarm in the remote tenant for the Kubernetes network interfaces that are removed or altered.

To deploy a microservice, in the Administration application, navigate to **Ecosystem** > **Microservices**, and click **Add microservice**. 

> **Info:** The **Add microservice** button will not be available if you have not enabled the microservice hosting feature.

Upload the ZIP file for your microservice application. For more information about deploying a microservice, see [Deploying the "Hello world" microservice](/microservice-sdk/java/#deploying-the-hello-world-microservice).

### Enabling or disabling the microservice hosting feature using the REST APIs

To enable or disable the microservice hosting feature, use the following endpoints:

>**Important:** To enable or disable the microservice hosting feature, you must have the "Tenant Manager" role.

- [GET /edge/configuration/microservices](/edge/rest-api/#get-edgeconfigurationmicroservices)
- [POST /edge/configuration/microservices](/edge/rest-api/#post-edgeconfigurationmicroservices)

After you enable the microservice hosting feature, ensure that the microservices are active and healthy before using the microservices.
For more information about microservices runtime, see [Microservice runtime](/microservice-sdk/concept/#microservice-runtime).

On some hardware configurations, enabling or disabling the microservice hosting feature may take more than 15 minutes.

Before disabling the microservice hosting feature, you should unsubscribe from all the microservices that have been uploaded.
You can also delete the microservice if you are not planning to enable again and subscribe to the same microservice.
For more information about developing and hosting a microservice, see [Microservices SDK](/microservice-sdk/introduction/).

>**Info:** {{< product-c8y-iot >}} Edge appliance will be temporarily non-operational during the operation.
