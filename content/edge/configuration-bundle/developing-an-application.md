---
weight: 85
title: Developing applications
layout: redirect
---

If you are developing an application for the Edge appliance using a self-signed certificate, the self-signed certificate must be trusted by Node.js. For more information about application development, see [web SDK guide](/web/overview/).

To add the Edge appliance's self-signed certificate to the Node.js trust store, set the value of the environment variable`NODE_EXTRA_CA_CERTS` to the path of the certificate on your host machine. For example:

On Windows Powershell

```shell
$env:NODE_EXTRA_CA_CERTS=C:\certificate.pem; npm install
```

On Windows command prompt

```shell
set NODE_EXTRA_CA_CERTS=C:\certificate.pem
npm install
```

On Linux platforms

```shell
export NODE_EXTRA_CA_CERTS=<path-to-the-certificagte>/certificate.pem
npm install
```





