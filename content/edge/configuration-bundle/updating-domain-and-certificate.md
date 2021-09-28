---
weight: 35
title: Changing the domain name
layout: redirect
---

After the installation, you can change the domain name of your Edge appliance. You must always have a supporting license file and an SSL certificate for your domain name that is configured. You can change the domain name using the GUI and REST APIs.

>**Important:** Before you change the domain name, see [Domain name validation for Edge license key generation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).

### Changing the domain name using the GUI

1. Log in to the {{< management-tenant >}}.

	- Username: management/<*username*>
	- Password: password provided during the installation

2. Switch to the **Administration** application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge Configuration** > **Domain/Certificate** in the navigator.

   Review the domain name and the SSL certificate.

4. Click **Edit** below **Domain name** to edit the domain name.

5. Provide the new domain name and click **Update**.

6. Provide the licence file for the new domain name.

   If the current SSL certificate is compatible with the new domain name, you do not have to upload a new certificate. 

   If the current SSL certificate is not compatible, upload the SSL certificate.

   Click **Save**.

7. If you are just uploading a new SSL certificate for your existing domain name:

   - Click **Edit** below **SSL Certificate** to upload the new SSL certificate file and the key file.
   
   - Provide the new SSL certificate file and the SSL certificate key file.
   
     If you do not have an SSL certificate, select **Generate self-signed certificate** to generate one.
      
   - Click **Save**.

### Changing the domain name using the REST APIs

To change the domain name, use the following endpoints:

- [GET /edge/configuration/domain](/edge/rest-api/#get-edgeconfigurationcertificate)
- [POST /edge/configuration/domain](/edge/rest-api/#post-edgeconfigurationcertificate)
