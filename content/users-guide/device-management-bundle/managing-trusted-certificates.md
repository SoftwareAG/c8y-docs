---
weight: 65
title: Managing trusted certificates
layout: redirect
---

Cumulocity IoT allows devices to connect via MQTT protocol using a X509 certificate for authentication. To do so, a certificate must be trusted by Cumulocity IoT. A certificate is trusted when it is added to the trusted certificates and is in activated state.

>**Info:** This section describes how to manage trusted certificates. For information on connecting devices using certificates refer to [Device integration using MQTT > Device certificates](/device-sdk/mqtt#device-certificates) in the Device SDK guide.

### <a name="trusted-certificates"></a> Viewing trusted certificates

Click **Trusted certificates** in the **Management** menu in the navigator.

All certificates owned by the tenant will be displayed.

![Trusted certificates List](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-list.png)

The icon at the left of each entry indicates if the certificate is active (green), or inactive (red). At any given time a tenant can have any number of active or inactive certificates.

Expand a certificate to view more details.

![Trusted certificates Entry](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-entry.png)

The information in the table at the right is extracted from the provided certificate. The content is read-only and cannot be changed. 

![Trusted certificate details](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-details.png)


### Adding trusted certificates

Before adding a new trusted certificate, make sure that it:

* Is a X509 certificate in PEM format.
* Is in version 3.
* Contains `BasicConstraints:[CA:true]`.
* Has not already been uploaded to Cumulocity IoT.
* Is still valid (not expired).

#### To add a certificate

1. Click **Add trusted certificate** at the right of the top menu bar. 

	![Trusted certificate details](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-new.png)
 
2. In the resulting dialog box, set the following parameters:

	|Field|Description|
|:---|:---|
|Certificate name|User-provided name for the certificate. This name is not used by Cumulocity IoT and can serve as a description of the certificate.|
|Certificate|File containing a certificate in PEM format.|
|Auto registration| If selected, new devices which use a certificate signed by the authority owning this trusted certificate will automatically be registered.|
|Enabled/Disabled| When disabled, devices which use a certificate signed by the authority owning this certificate, will not be able to connect.|

3. Click **Add Certificate** to validate and save the certificate. 

>**Info:** For performance reasons, you shouldn't add the certificates of each device you want to connect, but only add the root certificate or one of the intermediate certificates from the chain which has been used to sign certificates used by devices.

### To edit a trusted certificate

In the detail view of a certificate you may change the parameters on the left, i.e. the certificate name, and the settings for the auto registration and enabled/disabled option. 

For details on the fields see the description on adding certificates above.

### To delete a trusted certificate

To permanently delete a certificate from the trusted certificates list, click the menu icon at the right of the respective entry and in the context menu click **Delete**.

![Trusted certificates delete](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-delete.png)

The certificate will be permanently deleted. 