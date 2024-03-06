---
weight: 80
title: Device access tokens
layout: redirect
---

### Overview {#overview}

Devices can authenticate against the {{< product-c8y-iot >}} platform via mTLS over REST protocol using X.509 client certificates.  

Each tenant individually defines whom it trusts by uploading the base CA certificate.

Retrieving device access tokens from the platform with certificates does not require the tenant ID, username and password. Authentication information will be obtained from the certificates.

### JWT token retrieval {#jwt-token-retrieval}

The devices can connect to {{< product-c8y-iot >}} using the below REST endpoint and authenticate using the certificates. In response, a JWT session token is issued by the platform after successful authentication which can later be used to make subsequent requests.


	POST /devicecontrol/deviceAccessToken
    Accept: application/json
    X-Ssl-Cert-Chain: -----BEGIN CERTIFICATE----- MIIDTzCCAjegAwIB...TpaISZIs= -----END CERTIFICATE

This call can be done by executing the following curl statement:

    curl -v -cert domain-cert.pem -key domain-private-key.pem \
       -H 'Accept: application/json' \
       -H 'X-Ssl-Cert-Chain:<device certificate chain>' \
       -X POST \
       https://<{{< product-c8y-iot >}} tenant domain>/devicecontrol/deviceAccessToken

Replace `<device certificate chain>` with your valid certificate chain when registering with {{< product-c8y-iot >}}.

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

It is recommended that the devices invalidate the session by explicitly calling 'logout' API before closing the HTTP connection. This will avoid any misuse of JWT session tokens generated.
Here is the logout API.

        POST /user/logout
        Accept: application/json
        Content-Type: application/json
        Authorization: Bearer "JWT Session token"

{{< c8y-admon-caution >}}
Only devices that are registered to use certificate authentication can retrieve a JWT session token using this endpoint. Once the device successfully authenticates using certificates (ie., by using its private key and the certificate chain), the device retrieves the JWT session token. This mTLS over HTTP endpoint can be leveraged only over this endpoint.
{{< /c8y-admon-caution >}}


### x509 rest client {#x509-rest-client}

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
* TRUSTSTORE_NAME - The path to your truststore which contains the certificate of the server.
* TRUSTSTORE_PASSWORD - The password to access the truststore.
* TRUSTSTORE_FORMAT - Either "JKS" or "PKCS12" depending on the file format. The path is provided by TRUSTSTORE.
* PLATFORM_URL - The URL of the platform.
* DEVICE_ACCESS_TOKEN_PATH API - The endpoint responsible for the mTLS protocol.
* LOCAL_DEVICE_CHAIN - The whole chain in PEM format.

After filling in this data, the example client will use the provided data to retrieve the device access token to the specified platform using certificates.

In general, the mTLS protocol client uses the Java Secure Socket Extension, which is part of the Java Development Kit, to provide secure connections via SSL.
JSSE provides the Java implementation of the SSL and TLS protocol which can be configured by developers using its classes.
The documentation of the Java Secure Socket Extension shows how the SSL connection is established and provides some examples of customizing the implementation.
The full document is available on the [official Oracle website](https://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html).