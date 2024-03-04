---
weight: 70
title: Device access tokens
layout: redirect
---
Devices can authenticate against the {{< product-c8y-iot >}} platform via mTLS protocol using X.509 client certificates.

Each tenant individually defines whom it trusts by uploading the base CA certificate.

Retrieving device access tokens from the platform with certificates does not require the tenant ID, username and password. Authentication information will be obtained from the certificates.

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

You will receive a response like that:

    HTTP/1.1 200 Success
    Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json; charset=UTF-8; ver=0.9
    ...
    {
        "accessToken": "eyJhbGciOiJSUI6IkpXVCJ9.eyJktYTJmYy0x...S 04HPk3GQUd-fHyJ2oKSuetWFWpUSBPzJzl_73_3yauIlplHorlSoQ"
    }
A device token used to access {{< product-c8y-iot >}} REST calls.
A device token lifetime can be configured using tenant options with a category of `oauth.internal` and a key of `device-token.lifespan.seconds`.
The default value is 1 hour.
The minimum allowed value is 5 minutes.
Refer to the [Tenant API](https://{{< domain-c8y >}}/api/core/#tag/Tenant-API) in the {{< openapi >}} for more details.

A device can fetch a new device token before the old one expires, if it requests a JWT token after half of the token's lifetime has passed.

{{< c8y-admon-caution >}}
Only devices which are registered to use cert auth can retrieve a JWT token via REST protocol using this endpoint. Once the certificate-based mutual authentication is successful with a valid certificate chain the device retrieves the token. The mTLS protocol can be leveraged using the device certificate and its key using this endpoint only.
{{< /c8y-admon-caution >}}