---
date: ""
title: Removal of deprecated JWT login mode
product_area: Platform services
change_type:
  - value: change-inv-3bw8e
    label: Announcement
component:
  - value: q3kclF6pO
    label: Authentication
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-53448
version: "10.20"
---
JWT authentication with {{< product-c8y-iot >}} is deprecated since release 10.6 and will be removed in Q3 2024 for the SaaS instances and in 2025 for the yearly releases.
This authentication method is not to be confused with SSO (single sign-on) or OAI-Secure authentication, which are both recommended and still supported.
This change will only impact you if your organisation was an early adopter of SSO on Cumulocity.
For customers on public Cloud we will have been in touch with you if you are using this type of authentication.
For self-hosted or self-managed instances you need to do the following:
Ask your Operations Team to run the [script](https://getsupport.softwareag.com/servicedesk/customer/kb/view/429359127). This will verify
whether any tenant collections have an authenticationProviders configuration, and
verify if any tenant has tenant options configured with the category "token.publicKey".
If either an “authenticationProvider” configuration or the tenant option "token.publicKey" category exists it will indicate that the deprecated JWT is, or was, used in the past. In this case you need to check your external services for use of the JWT authentication and change it to use either SSO or OAuthSecure. These two approaches provide a better and more secure approach to authentication.
These two methods are documented here: using [SSO](https://cumulocity.com/docs/authentication/sso/#configuration) or [authentication with external tokens](https://cumulocity.com/docs/authentication/sso/#configuring-access-tokens).