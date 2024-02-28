---
weight: 10
layout: redirect
title: Overview
---

Devices can authenticate against the {{< product-c8y-iot >}} platform via mTLS protocol using X.509 client certificates.  

Each tenant individually defines whom it trusts by uploading the base CA certificate.

Retrieving device access tokens from the platform with certificates does not require the tenant ID, username and password. Authentication information will be obtained from the certificates.