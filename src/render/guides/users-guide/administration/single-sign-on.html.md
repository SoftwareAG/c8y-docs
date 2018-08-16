---
order: 90
title: Single sign on
layout: redirect
---

Cumulocity provides single sign on functionality, that allows a user to login with a single third party authorization server using OAuth2 protocol, for example Azure Active Directory. Currently only authorization code grant is supported with access tokens in form of JWT. 

The feature is built on top of cookies technology so please be aware we are using it. 

Please be aware that this feature is enabled since version 9.12, and for correct behavior any microservice needs to use microservice sdk with version 9.12 or later. 


### Configuration
To enable the feature administrator has to configure connection with the authorization server. There is a panel under administration -> Settings -> Single sign on. As OAuth protocol is based on execution of http requests and redirects, a generic request configuration was provided. The first part of the screen consists of request configuration, where an administrator can configure http request address, request parameters, headers and body in case of token and refresh requests. The authorize method is executed as a GET, and others as POST requests. 

![Request configuration](/guides/images/users-guide/Administration/sso/single_sign_on_1.png)

The second part consists of following configuration:
 Groups - a selector of initial group assigned to user on first login
 Applicaitons - a selector of initial applications assigned to user on first login
 Audience - expected aud parameter of JWT 
 Button name - name displayed on button name on a login page
 Client ID - OAuth connection client ID. It can be used in request definitions as a ${clientId} place holder 
 Redirect to platform - Redirect parameter. It can be used in request definitions as a ${clientId} place holder 
 Issuer - OAuth token issuer 
 Provider name - provider name
 Visible on login page - indicates whether the login option is enabled or not. 
 
 ![OAuth configuration](/guides/images/users-guide/Administration/sso/single_sign_on_2.png)

 When a user logs in with access token, the username can be derived from a jwt claims. The claim name can be configured using the User id config panel. 

 ![OAuth configuration](/guides/images/users-guide/Administration/sso/single_sign_on_3.png)

Each access token is signed by a signing certificate. Currently there are two options to configure the signing certificates. 
1. By specifying the Azure AD certificate discovery address. 

 ![OAuth configuration](/guides/images/users-guide/Administration/sso/single_sign_on_4.png)
2. By providing the public key of a certificate manually to the cumulocity. A certificate definition requires an algorithm information, public key value and validity period. 

 ![OAuth configuration](/guides/images/users-guide/Administration/sso/single_sign_on_5.png)

### Access 
When a user logs in for the first time to the cumulocity, there is a user instance created with default access; meaning groups and applications specified in the configuration panel. Administrator can further assign specific access to a user manually. 

### Integration with Azure AD
#### Azure AD Configuration
The integration was successfuly verified against Azure AD. The configuration steps are available [here](https://docs.microsoft.com/en-us/azure/active-directory/develop/v1-protocols-oauth-code). While configuring your Azure AD redirect_uri is your full domain address. For the purpose of this tutorial we assume that it is http://aad.cumulocity.com. There is no additional steps on Azure AD required. 

#### Cumulocity Configuration
Go to the Single sign on panel, Authorization request section should look similar to:
 
 ![Azure AD authorize request](/guides/images/users-guide/Administration/sso/aad_authorize.png)
 
 the url parameter consists of :
 * Base url, in this case https://login.microsoftonline.de. 
 * TENANT should be substituted with your microsoft tenant id. 
 * Static "oauth2/authorize" part
 
There is no need for headers, and there should be two request parameters:
* redirect_uri = ${redirectUri} -replaced in runtime by REDIRECT TO PLATFORM 
* client_id = ${clientId} replaced in runtime by CLIENT ID

Token request section should look similar to:
 
 ![Azure AD token request](/guides/images/users-guide/Administration/sso/aad_token.png)
 
  the url parameter consists of :
  * Base url, in this case https://login.microsoftonline.de. 
  * TENANT should be substituted with your microsoft tenant id. 
  * Static "oauth2/token" part
 
 Body parameter can be taken from Azure AD OAuth specification, an example is:
 "grant_type=authorization_code&client_id=${clientId}&code=${code}&redirect_uri=${redirectUri}&client_secret=SECRET=&resource=${clientId}"
 and consists of:
 * grant_type=authorization_code,
 * client_id=${clientId} - replaced in runtime by CLIENT ID,
 * code=${code} - parameter automatically read after successful redirect to the platform,
 * redirect_uri=${redirectUri} - replaced in runtime by REDIRECT TO PLATFORM,
 * client_secret=SECRET - a password specified in Azure AD -> App registration -> application -> Settings -> Keys -> Passwords,  
 * resource=${clientId} - replaced in runtime by CLIENT ID.
 
 There is no need to set headers or request parameters.
 
Refresh token request section should look similar to:
 
 ![Azure AD refresh request](/guides/images/users-guide/Administration/sso/aad_refresh.png)
 
  the url parameter consists of :
  * Base url, in this case https://login.microsoftonline.de. 
  * TENANT should be substituted with your microsoft tenant id. 
  * Static "oauth2/token" part
 
 Body parameter can be taken from Azure AD OAuth specification, an example is:
 "grant_type=refresh_token&refresh_token=${refreshToken}&client_id=${clientId}&resource=${clientId}&client_secret=SECRET"
 and consists of:
 * grant_type=refresh_token,
 * refresh_token=${refreshToken} - exchanged in runtime for known refresh token,
 * client_id=${clientId} - replaced in runtime by CLIENT ID,
 * client_secret=SECRET - a password specified in Azure AD -> App registration -> application -> Settings -> Keys -> Passwords,
 * resource=${clientId} - replaced in runtime by CLIENT ID.
 
 There is no need to set headers or request parameters.
 
Configuration section should look similar to:
 
 ![Azure AD configuration](/guides/images/users-guide/Administration/sso/aad_configuration.png)

* Groups and Applications sections should be specified according to a tenant requirement, but group business and cockpit applications are advised as a good start,
* Audience - This is the application ID parameter from Azure AD, it can be found in Azure AD -> App registration -> application,
* Button name - is a name of the button on welcome page,
* Client ID - For Azure AD is equal to Audience, it can be found in Azure AD -> App registration -> application, 
* Redirect to platform - Cumulocity address, in our example http://aad.cumulocity.com,
* Issuer - the token issuer, value taken from Azure AD -> App registration -> endpoints -> MICROSOFT AZURE AD GRAPH API ENDPOINT, 
* Provider name - Azure AD,
* Visible on login page.

User ID config 
 ![Azure AD user id](/guides/images/users-guide/Administration/sso/aad_user_id.png)

* uncheck the Use constant value,
* JWT field - upn - which is user principla name.

Signature verification
 ![Azure AD signature verification](/guides/images/users-guide/Administration/sso/aad_signature_verification.png)
   
For Azure AD Cumulocity provides support for automatic certificate rollover. From Certificate Type section choose Azure AD, and set public key discovery url to value consisting of:
 * Base url, in this case https://login.microsoftonline.de,
 * TENANT should be substituted with your microsoft tenant id, 
 * Static "discovery/keys" part.
   
