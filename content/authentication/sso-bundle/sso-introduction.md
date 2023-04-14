---
weight: 10
title: Introduction
layout: redirect
section:
  - platform_administration
---

{{< product-c8y-iot >}} provides single sign-on (SSO) functionality, that allows a user to login with a single 3rd-party authorization server using the OAuth2 protocol, for example Azure Active Directory (ADD). Currently authorization code grant is supported only with access tokens in form of JWT.

{{< c8y-admon-req >}}
To use the SSO feature the following requirements must be met:

* The authorization server you use supports OAuth2 authorization code grant.
* The access token is issued as JWT and you know what goes into the token content.
* The JWT must consist of a unique user identifier, "iss" (issuer), "aud" (audience) and "exp" (expiration time) fields.
* The {{< product-c8y-iot >}} platform is in version 10.4.6 but preferably higher.
* All microservices are built with Microservice Java SDK version 10.4.6 but preferably higher. For custom-built microservices, refer to [General aspects > Security](/microservice-sdk/concept/#security) in the *Microservice SDK guide*.
* For on premises installation the domain-based tenant resolution is configured properly.
* For {{< enterprise-tenant >}}s, the enterprise domain must be set up as redirect URI in the basic configurations. If SSO providers have a list of allowed domains, the enterprise domain should be added to that list.
* You must assign a role to the user with at least READ permission for "Own user management", otherwise the user cannot log in.
* Users must have cookies enabled in the browser settings, as the SSO feature is built on top of cookies technology.
{{< /c8y-admon-req >}}

To enable the SSO feature, the administrator must configure a connection with the authorization server. This is done in the Administration application.

### Configuration access

SSO configurations can be configured to be exclusively accessible by the {{< management-tenant >}}, thus preventing other tenants from accessing the configurations.
Users of such tenants are unable to update the configuration. This removes the risk of an incorrectly configured SSO, which can prevent other users from logging in via SSO.
The {{< management-tenant >}} can grant or restrict access to SSO configurations for specific tenants. For more information about configuration access, refer to the [Login options API](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#operation/putAccessLoginOptionResource) in the {{< openapi >}}.
