---
weight: 80
title: Device certificates
layout: redirect
---

### Overview
Devices can authenticate against the Cumulocity IoT platform using X.509 client certificates.
 
Cumulocity expects devices to connect using SSL on port 1884.

Each tenant individually defines whom it trusts by installing the base CA certificate. 

Devices connecting to the platform with certificates do not need to provides tenant, user or password.
This information will be obtained from the certificates.

#### General requirements for connection with certificates

* The CA certificate can also be a self-signed certificate.
* Certificate used by device must be a full chain, including uploaded CA certificate.
* Device need to trust cumulocity certificate.
* Uploaded certificate have to be version 3.
* Uploaded certificate need to have: BasicConstraints:[CA:true] set.
* Device have to be registered or uploaded certificate need to have flag autoRegistrationEnabled. (more below)
* Certificates used by devices must be signed by either uploaded CA certificate or by chain of certificates signed by uploaded CA certificates.
* Certificate used by device must be a full chain, including uploaded CA certificate.

### Device register

Cumulocity supports two ways to register device which will be able to connect using certificates :

* **Auto registration**

User for device will be created during the first MQTT call, if at least one uploaded certificate  have _autoRegistrationEnabled_ set on true.
* **Bulk registration**

User for device can be also created via standard bulk registration in Device Management.
 
The csv file used in bulk registration should meet the requirements described in [Bulk device credentials](/reference/device-credentials/#bulk-device-credentials) in the Reference guide and also there is required to csv file have additional column **AUTH_TYPE** with value: "CERTIFICATES" and column **CREDENTIALS**  should not be present or should have empty value.


### JWT Token retrieval

Device which is connected by certificates can receive a token which can be used later for authenticate http requests. Note [JWT token authentication](/reference/rest-implementation/#http-usage) must be enabled to receive token.


* Firstly device subscribe to the topic  <kbd>s/dat</kbd>.
* Then device publish empty message on the topic  <kbd>s/uat</kbd>.
* After a while token will be published on subscribed  <kbd>s/dat</kbd> topic in format :

	    71,<<Base64 encoded JWT token>>
	    
