---
weight: 85
title: Developing Cumulocity web applications
layout: redirect
---

If you are developing a Cumulocity web application using [web SDK](/web/overview/), for an Edge appliance configured with a certificate not trusted by Node.js (for example, a self-signed certificate), then you need to ensure that Node.js trusts the root certificate.

To add the Edge appliance's self-signed certificate to the Node.js trust store, set the environment variable `NODE_EXTRA_CA_CERTS` to the path of the certificate before executing the `npm` commands.

For example:

On Windows Powershell

```shell
$env:NODE_EXTRA_CA_CERTS=<path-to-the-certificagte>\certificate.pem;
```

On Windows command prompt

```shell
set NODE_EXTRA_CA_CERTS=<path-to-the-certificagte>\certificate.pem
```

On Linux platforms

```shell
export NODE_EXTRA_CA_CERTS=<path-to-the-certificagte>/certificate.pem
```

 For more information about the Cumulocity web application development, see [web SDK guide](/web/overview/).



