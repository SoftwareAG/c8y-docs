---
weight: 85
title: Java REST client with certificates
layout: redirect
---

In this tutorial, you will learn how to use the Java REST client with {{< product-c8y-iot >}} using X.509 certificates for authentication.

In the GitHub repository [cumulocity-examples](https://github.com/SoftwareAG/cumulocity-examples/tree/develop/device-rest-client), you can find a sample Java  client program using X.509 certificates and all necessary scripts used in this tutorial.

### Prerequisites {#prerequisites}

In order to follow this tutorial, check the following prerequisites:

*   You have correctly configured the Java client based on the [Hello REST Client Java](#java-rest-with-certificates) tutorial.
*   You have a valid tenant, a user and a password in order to access {{< product-c8y-iot >}}.
*   You have a valid certificate. If you don't have it, follow the instructions in the next section to generate one.

#### To generate a valid certificate {#to-generate-a-valid-certificate}

If you don't have a valid certificate, you can generate one for testing purposes, following the instructions below.

1.  Download the scripts from the [cumulocity-examples](https://github.com/SoftwareAG/cumulocity-examples/tree/develop/mqtt-client/scripts) repository.
2.  Create a root self-signed certificate (execute the script *00createRootSelfSignedCertificate.sh*) and upload it to your tenant. You can do it via [the Device management application in the UI](/device-management-application/managing-device-data/#managing-trusted-certificates) or via [REST](https://{{< domain-c8y >}}/api/core/#tag/Tenant-API).
3.  Create and sign the certificate (execute the script *01createSignedCertificate.sh*).
4.  Move the certificates to keystore (execute the script *02moveCertificatesToKeystore.sh*).
5.  Download Public Server key from respective environment and import it into JKS using this command:

```shell
$ keytool -import -file platform.dev.c8y.io.crt -alias servercertificate -keystore truststore.jks 
```

#### To copy and upload the certificate {#to-copy-and-upload-the-certificate}

Copy the certificate from the file *chain-iot-device-0001.pem* and upload it to the platform employing a POST request:

**Endpoint:**  <kbd>/tenant/tenants/{tenantId}/trusted-certificates</kbd> <br/>
**Authorization:** Basic <br/>
**Content-Type:** application/json <br/>
**Request body:**

```json
{
    "status" :  "ENABLED",
    "name" : "sampleName",
    "autoRegistrationEnabled" : "true",
    "certInPemFormat" : "<<certificate in pem format>>"
}
```

### To change the configuration {#to-change-the-configuration}

To change the configuration in the REST java client, copy the file *chain-with-private-key-iot-device-0001.jks* into the resource folder and set the configuration. Note that the script employed (Step 4.) uses the password `changeit`. If you changed the value in the script, also do it for `KEYSTORE_PASSWORD` and `TRUSTSTORE_PASSWORD` in the following example.

```java
// Configuration
private static final String KEYSTORE_NAME = "chain-with-private-key-iot-device-0001.jks";
private static final String KEYSTORE_PASSWORD = "changeit";
private static final String KEYSTORE_FORMAT = "jks";

private static final String TRUSTSTORE_NAME = "truststore.jks";
private static final String TRUSTSTORE_PASSWORD = "changeit";
private static final String TRUSTSTORE_FORMAT = "jks";

private static final String LOCAL_DEVICE_CHAIN = "-----BEGIN CERTIFICATE----- MIIcQhNJJ0F/lfjm -----END CERTIFICATE-----";
private static final String PLATFORM_URL = "<URL of the platform>";
```  

The device can now generate JWT token. Note that before the first connect no other actions are required, for example, creating a user. The user is created during the [auto registration](/device-integration/certificate/#device-certificates) process.

{{< c8y-admon-info >}}
You do not need to set a password, user or tenant for the REST java client using certificates. {{< product-c8y-iot >}} will recognize the tenant and the user by the provided certificate.
{{< /c8y-admon-info >}}
