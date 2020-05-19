---
weight: 65
title: Managing trusted certificates
layout: redirect
---

Cumulocity IoT allows devices to connect by Mqtt protocol using X509 certificate for authentication. To do so, a certificate must be trusted by Cumulocity IoT. Certificate is trusted when it is added to trusted certificates and is in activated state.

>**Info:** This guide provide information about managing trusted certificates. For information about connecting devices using certificates look at: [Device certificates](/device-sdk/mqtt#device-certificates)

### <a name="trusted-certificates"></a> Managing trusted certificates

Click **Trusted certificates** in the **Management** menu in the navigator.

Certificates owned by tenant will be displayed.

![Trusted certificates List](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-list.png)

Each entry contains icon on the left hand side. If it is green certificate is active, when it is red certificate is disabled. At any given time tenant can have any number of active or inactive certificates.

To display additional information about certificate click on arrow icon on the right side.

![Trusted certificates Entry](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-entry.png)

Information in table on the right are extracted from provided certificate. Content of certificate is read only and cannot be changed. 

![Trusted certificate details](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-details.png)

#### Editing trusted certificate

Detail view of a certificate allow to change parameters of the certificate. Editable fields are:

|Field|Description|
|:---|:---|
|Name| To change name, click on a pencil icon, provide new name and accept changes by clicking **Save** button. Name is not used by Cumulocity IoT it can be used as description of a certificate|
|Auto registration| If checked, new devices that uses certificate signed by authority owning this trusted certificate, will be automatically registered|
|Enabled/Disable| When disabled devices that uses certificate, signed by authority owning this certificate, will not be able to connect|


#### Adding trusted certificate

Before adding a new trusted certificate, make sure it fulfill all requirements:
* It must be X509 certificate in PEM format.
* It must be in version 3
* It must contain: *BasicConstraints:[CA:true]*
* It must not be already uploaded to Cumulocity IoT
* It must not be expired 

To add new certificate click on **Add trusted certificate** in the right top corner of the screen. New overlay box will appear. 

![Trusted certificate details](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-new.png)

|Field|Description|
|:---|:---|
|Certificate Name|User provided name of certificate. It is not used by Cumulocity IoT it can be used as description of a certificate, |
|Certificate|Certificate in PEM format| 
|Auto registration| If checked, new devices that uses certificate signed by authority owning this trusted certificate, will be automatically registered|
|Enabled/Disable| When disabled devices that uses certificate, signed by authority owning this certificate, will not be able to connect|

After clicking **Add Certificate** certificate is validated and saved. 

>**Info:** For performance reasons you shouldn't add certificate of each device you want to connect, but only a root or one of a intermediate certificates from chain that was used to sign certificates used by devices.

#### Removing trusted certificate

To permanently remove certificate from trusted certificates, expand actions by clicking on three dots icon on the right side of the entry you want to delete.
![Trusted certificates delete](/images/users-guide/DeviceManagement/devmgmt-trusted-certificates-delete.png)
Choose action **Delete**.
Certificate will be removed from Cumulocity IoT. 