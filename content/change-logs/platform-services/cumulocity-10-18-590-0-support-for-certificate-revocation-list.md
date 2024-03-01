---
date: ""
title: Support for Certificate Revocation List.
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
Administrators can configure the Certificate Revocation List (CRL) settings (online or offline). If the revoked certificate information is maintained by the issuing Certificate Authority (CA), the online check option can be selected. If the CA does not maintain the CRL information, the offline setup can be selected. In offline setup, the revoked certificate serial number can either be added manually or can be uploaded in bulk using the file template attached.