---
date: ""
title: CRL support in Device Certificate authentication.
product_area: Platform services
change_type:
  - value: change-QHu1GdukP
    label: Feature
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-41760
version: 10.18.590.0
---
Administrators can configure the Certificate Revocation List (CRL) settings. When a certificate is compromised, the platform is now capable of performing the revocation check during the device authentication process. Administrators can choose an offline mode where one can manually add revoked certificate details or choose an online mode if their issuing CA maintains the revoked list of certificates.
