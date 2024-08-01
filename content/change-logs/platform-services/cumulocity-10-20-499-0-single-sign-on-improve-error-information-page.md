---
date: ""
title: Single-sign-on improve error information page
product_area: Platform services
change_type:
  - value: change-2c7RdTdXo4
    label: Improvement
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-50975
version: 10.20.499.0
---
SSO configuration has been extended with the optional: `Redirect to the user interface application`.
If enabled: when login using SSO fails for whatever reason, the error information will be displayed on a proper error page.
Using this option requires updating the "Valid Redirect URIs" in the authorization server with the value "<tenant_domain>/apps/*".