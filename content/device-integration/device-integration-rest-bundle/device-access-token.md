---
weight: 80
title: Device access tokens
layout: redirect
---

### Overview {#overview}

Devices can authenticate against the {{< product-c8y-iot >}} platform via mTLS protocol using X.509 client certificates.  

Each tenant individually defines whom it trusts by uploading the base CA certificate.

Retrieving device access tokens from the platform with certificates does not require the tenant ID, username and password. Authentication information will be obtained from the certificates.

#### General requirements for connecting devices with certificates {#general-requirements-for-connecting-devices-with-certificates}

* The CA certificate may also be a self-signed certificate.
* Certificates must be uploaded as X.509 version 3 certificates.
* Uploaded certificates must have set `BasicConstraints:[CA:true]`.
* Devices must trust the {{< product-c8y-iot >}} server certificate.
* Certificates used by devices must contain the certificate chain that includes the uploaded CA certificate.
* Certificates used by devices must be signed either by uploaded CA certificates or by intermediate certificates signed by uploaded CA certificates.

### Registering devices using certificates {#registering-devices-using-certificates}

{{< product-c8y-iot >}} supports two ways to register devices which will be able to connect using certificates:

**Auto registration**

The user for the device will be created during the first API call, if a device certificate is derived from a trusted certificate which was uploaded to the {{< product-c8y-iot >}} platform with a flag _autoRegistrationEnabled_ with a value of true.
Auto-registration must be activated for the uploaded certificate.
If auto-registration is not activated it is required to use the bulk registration (see below).
To manage the auto registration field of uploaded certificates in the UI refer to [Managing trusted certificates](/device-management-application/managing-device-data/#managing-trusted-certificates).

**Bulk registration**

The user for the device can also be created via the standard [bulk registration](/device-management-application/registering-devices/#to-bulk-register-devices) in the Device management application.

The CSV file used in bulk registration should meet the requirements described in [Create a bulk device credentials request](https://{{< domain-c8y >}}/api/core/#operation/postBulkNewDeviceRequestCollectionResource) in the {{< openapi >}}. Moreover, it is required that the CSV file has an additional column AUTH_TYPE with value CERTIFICATES, and that the column CREDENTIALS is either not present or has an empty value.

**Single registration**

Single registration is not supported for devices which are going to use certificates for authentication.

{{< c8y-admon-info >}}
During device registration, the device user is created, which is necessary for device communication with the platform.
{{< /c8y-admon-info >}}

### JWT token retrieval {#jwt-token-retrieval}

A device which is authenticated by certificates and retrieves tokens from the {{< product-c8y-iot >}} platform which can later be used to authenticate HTTP requests.


	POST /devicecontrol/deviceAccessToken
    Accept: application/json
    X-Ssl-Cert-Chain: -----BEGIN CERTIFICATE----- MIIDTzCCAjegAwIB...TpaISZIs= -----END CERTIFICATE

This call can be done by executing the following curl statement:

    curl -v -cert domain-cert.pem -key domain-private-key.pem \
       -H 'Accept: application/json' \
       -H 'X-Ssl-Cert-Chain:<cert-chain>' \
       -X POST \
       https://<{{< product-c8y-iot >}} tenant domain>/devicecontrol/deviceAccessToken

Replace `<cert-chain>` with your valid certificate chain when registering with {{< product-c8y-iot >}}.

The same credentials used to access the {{< product-c8y-iot >}} Web UI can be used to execute the REST calls.

You will receive a response like that:

    HTTP/1.1 200 Success
    Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json; charset=UTF-8; ver=0.9
    ...
    {
        "accessToken": "eyJhbGciOiJSUI6IkpXVCJ9.eyJktYTJmYy0x...S 04HPk3GQUd-fHyJ2oKSuetWFWpUSBPzJzl_73_3yauIlplHorlSoQ"
    }

A device token lifetime can be configured using tenant options with a category of `oauth.internal` and a key of `device-token.lifespan.seconds`.
The default value is 1 hour.
The minimum allowed value is 5 minutes.
Refer to the [Tenant API](https://{{< domain-c8y >}}/api/core/#tag/Tenant-API) in the {{< openapi >}} for more details.

A device can fetch a new device token before the old one expires, if it requests a JWT token after half of the token's lifetime has passed.

{{< c8y-admon-caution >}}
Only devices which are registered to use cert auth can retrieve a JWT token via mTLS protocol using this endpoint. Once the certificate-based mutual authentication is successful with a valid certificate chain the device retrieves the token. The mTLS protocol can be leveraged using the device certificate and its key using this endpoint only.
{{< /c8y-admon-caution >}}


### mTLS example client {#mTLS-example-client}

The code of the {{< product-c8y-iot >}} mTLS example client implemented in Java, which connects to the platform using x.509 certificates, is available here: https://github.com/SoftwareAG/cumulocity-examples/tree/develop/mtls-client.

The following configuration is required before calling the device access token API:

    private static final String KEYSTORE_NAME = "";
	 private static final String KEYSTORE_PASSWORD = "";
	 private static final String KEYSTORE_FORMAT = "";
	 private static final String TRUSTSTORE_NAME = "";
	 private static final String TRUSTSTORE_PASSWORD = "";
	 private static final String TRUSTSTORE_FORMAT = "";
	 private static final String PLATFORM_URL = "";
	 private static final String X_SSL_CERT_CHAIN = "x-ssl-cert-chain";
	 private static final String DEVICE_ACCESS_TOKEN_PATH = "/devicecontrol/deviceAccessToken";
	 private static final String LOCAL_DEVICE_CHAIN = "";

* KEYSTORE_NAME - The path to your keystore which contains the private key and the chain of certificates, which the device uses to authenticate itself.
* KEYSTORE_PASSWORD is the password created for keystore to use its private key.
* KEYSTORE_FORMAT - Either "JKS" or "PKCS12" depending on the file format. The path is provided by KEYSTORE_NAME.
* TRUSTSTORE_NAME is the path to your truststore, which contains the certificate of the server.
* TRUSTSTORE_PASSWORD - The password to access the truststore.
* TRUSTSTORE_FORMAT should be "JKS" or "PKCS12" depending on the file format. The path is provided by TRUSTSTORE.
* PLATFORM_URL should be platform URL.
* DEVICE_ACCESS_TOKEN_PATH API - The endpoint responsible for the mTLS protocol.
* LOCAL_DEVICE_CHAIN - The whole chain in PEM format.

After filling in this data, the example client will use the provided data to retrieve the device access token to the specified platform using certificates.

In general, the mTLS protocol client uses the Java Secure Socket Extension, which is part of the Java Development Kit, to provide secure connections via SSL.
JSSE provides the Java implementation of the SSL and TLS protocol which can be configured by developers using its classes.
The documentation of the Java Secure Socket Extension shows how the SSL connection is established and provides some examples of customizing the implementation.
The full document is available on the [official Oracle website](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html).
