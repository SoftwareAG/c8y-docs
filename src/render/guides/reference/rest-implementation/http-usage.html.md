---
order: 20
title: HTTP usage
layout: redirect
---

### Authentication

All requests need to be authenticated. There are two ways to do that. First is  
to include the HTTP ["Authorization" header](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields). The second is [OAuth2 authentication code grant](https://oauth.net/2/grant-types/authorization-code). Both are described below.

For the Authorization header method the format is:

	Authorization: Basic <<Base64 encoded credentials>>

An example can be found in the [Wikipedia entry](http://en.wikipedia.org/wiki/Basic_access_authentication). 

For OAuth authentication the format is:

	Authorization: Bearer <<Base64 encoded access token>>

Cumulocity uses the URL in the ["Host" header](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields) to determine the tenant to authenticate against. Alternatively, you can pass the tenant's ID as part of the "Authorization" header in the following form:

	<<tenant ID>>/<<user name>>:<<password>>

Typically, the tenant ID corresponds to the first part of the URL that you are using to access Cumulocity, e.g. if you use "mytenant.cumulocity.com" as URL, the tenant ID will be "mytenant".

Cumulocity supports two factor authentication. If it is enabled, the two factor authentication token is sent in header:

    TFAToken:<<tfa-token>>

If the token expires and requires renewal, the backend sends a response header:

    TFATokenExpired:TFATokenExpired

#### JWT token authentication

Cumulocity supports [JWT token](https://en.wikipedia.org/wiki/JSON_Web_Token) authentication. The HTTP header must include:
	
	Authorization: Bearer <<Base64 encoded JWT token>>
	
The JWT token must be signed using RSA signature with SHA-256 (RS256). The minimal RSA key size is 512 bit. You can generate an example key [here](http://travistidwell.com/jsencrypt/demo/).

You must upload your public key to the [tenant options](/guides/reference/tenants) to the "token.publicKey" category.

Example:

    POST /tenant/options
    Host: ...
    Authorization: Basic ...
    Content-Type: application/vnd.com.nsn.cumulocity.option+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.option+json;ver=...
    {
        "category": "token.publicKey",
        "key": "myPubKey",
        "value": "..."
    }

The "key" is an identifier of the public key, which will be referenced in the JWT token header, and the "value" is the public key in PEM format.

Now you can generate the JWT token and sign it with th ematching private key. For example you can do it [here](https://jwt.io/#debugger-io).

Token format:

    {
      "typ": "JWT",
      "alg": "RS256",
      "kid": "myPubKey"
    }
    {
      "iss": "cumulocity",
      "aud": "myTenant",
      "sub": "username",
      "nbf": 1515678716,
      "exp": 1516629116
    }
    
* "kid" is the public key identifier used in tenant options
* "iss" must be set to "cumulocity"
* "aud" is the tenant ID
* "sub" is the user ID
* "nbf" and "exp" is token validity from/to time range in unix time format

If tenant/username don't match or the token is expired or the signature is invalid then a 401 error will be returned.

#### OAuth authentication code grant 

The login with OAuth requires a correct configuration on the [Cumulocity side](/guides/users-guide/administration#single-sign-on). With the configuration, an additional button is available on the Login page. After clicking the button, the user is redirected to authenticate with the configured authorization server. On successful login, the user is redirected to Cumulocity. 

Authentication details are exchanged using cookies. There are two parts to it, the first is the authentication cookie that is handled automatically by the Cumulocity platform. The second is the XSRF-TOKEN cookie. When a client receives the cookie, it should take the value and put it in the X-XSRF-TOKEN request header in all subsequent requests.  

The flow of authenticating with OAuth authentication code grant is as follows:

![Authentication flow](/guides/images/reference-guide/oauth-simple-flow.png)

The first request executed by the browser is:

    POST /tenant/loginOptions
    Host: ...
    Content-Type: application/vnd.com.nsn.cumulocity.loginOptionCollection+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.loginOptionCollection+json;ver=...
    
Response:

    {
        "loginOptions": [
            {
                "buttonName": "Login with oauth",
                "grantType": "AUTHORIZATION_CODE",
                "initRequest": "https://TENANT.cumulocity.com/tenant/oauth?response_type=code&tenant_id=TENANT",
                "self": "http://TENANT.cumulocity.com/tenant/loginOptions/oauth2",
                "type": "oauth2"
            },
            {
                "self": "http://dev-d.cumulocity.com/tenant/loginOptions/basic",
                "type": "basic"
            }
        ],
        "self": "http://dev-d.cumulocity.com/tenant/loginOptions/"
    }

Here we have two login options, one with basic and the other with OAuth2. If a user decides to login with OAuth, the browser must invoke the request provided in the initRequest parameter. 

The initRequest initiates the redirect, in which the user is prompted for credentials. After successful login, the user is redirected back to the browser, where it must capture the code request parameter. Then the request to exchange the code for the token is as follows:

    POST /tenant/oauth?grant_type=authorization_code&code=<<code>>
    Host: ...

A successful response will have no body but the following response headers:
    
    Set-Cookie: authorization=<<token>>;
    Set-Cookie: XSRF-TOKEN=<<xsrfToken>>;


### Application management

Cumulocity uses a so-called "application key" to distinguish requests coming from devices and traffic from applications. If you write an application, pass the following header as part of all requests:

	X-Cumulocity-Application-Key: <<application key>>

For example, if you registered your application in the Cumulocity administration application with the key "myapp", pass 

	X-Cumulocity-Application-Key: myapp

This makes your application subscribable and billable. If you implement a device, do not pass the key.

> Make sure that you pass the key in **all** requests coming from an application. If you leave out the key, 
> the request will be considered a device request and the corresponding device will be marked as "available".

### Limited HTTP clients

If you use an HTTP client that can only perform GET and POST methods in HTTP, you can emulate the other methods through an additional "X-HTTP-METHOD" header. Simply issue a POST request and add the header, specifying the actual REST method to be executed. For example, to emulate the "PUT" (modify) method, you can use:

	POST ...
	X-HTTP-METHOD: PUT

### <a id="processing-mode"></a> Processing mode

Every update request (PUT, POST, DELETE) executes with a so-called *processing mode*. The default processing mode is *PERSISTENT*, which means that all updates will be send both to the Cumulocity database and to real-time processing. The *TRANSIENT* processing mode will only send updates to real-time processing. As part of real-time processing, the user can decide case by case through Cumulocity Event Language scripts whether updates should be stored to the database or not. The *QUIESCENT* processing mode will behave like PERSISTENT processing mode with an exception that no real-time notifications will be sent. Currently, the QUIESCENT processing mode is applicable for measurements and events only. The *CEP* processing mode will behave like TRANSIENT processing mode with an exception that no real-time notifications will be sent. Currently, the CEP processing mode is applicable for measurements and events only.    

To explicitly control the processing mode of an update request, an "X-Cumulocity-Processing-Mode" header can be used with a value of either "PERSISTENT", "TRANSIENT", "QUIESCENT" or "CEP":

    X-Cumulocity-Processing-Mode: TRANSIENT

### Authorization

All requests issued to Cumulocity are subject to authorization. To determine the required permissions, see the
"Required role" entries in the reference documentation for the individual requests. To learn more about the different permissions and the concept of ownership in Cumulocity, see "Managing permissions and ownership" in the Section "[Security aspects](/guides/concepts/security)".

### Media types

Each type of data is associated with an own media type. The general format of media types is

    application/vnd.com.nsn.cumulocity.<<type>>+json;ver=<<version>>;charset=UTF-8

Each media type contains a parameter "ver" indicating the version of the type. At the time of writing, the latest version is "0.9". The complete media type names are given in the respective sections of the reference guide. As an example, the media type for an error message in the current version is

    application/vnd.com.nsn.cumulocity.error+json;ver=0.9;charset=UTF-8

Media types are used in HTTP "Content-Type" and "Accept" headers. If you specify an "Accept" header in a POST or PUT request, the response will contain the newly created or updated object. If you do not specify the header, the response body will be empty. 

If a media type without "ver" parameter is given, the oldest available version will be returned by the server. If the accept header contains the same media type in multiple versions the server will return a representation in the latest supported version.

### Date format

Data exchanged with Cumulocity in HTTP requests and responses is encoded in [JSON format](http://www.ietf.org/rfc/rfc4627.txt) and [UTF-8](http://en.wikipedia.org/wiki/UTF-8) character encoding. Timestamps and dates are accepted and emitted by Cumulocity in [ISO 8601](http://www.w3.org/TR/NOTE-datetime) format:

    Date: YYYY-MM-DD
    Time: hh:mm:ss±hh:mm
    Timestamp: YYYY-MM-DDThh:mm:ss±hh:mm

To avoid ambiguity, all times and timestamps must include timezone information. Please take into account that the plus character "+" must be encoded as "%2B".

### <a name="error_reporting"></a>Error reporting

In error cases, Cumulocity returns standard HTTP response codes as described in [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). A Client should not only be able to handle individual codes but classes of codes as well (e.g., 4xx). The response body can contain more information about the error, see the error media type definition below. General error interpretations are:

|Code|Name|Description|
|:---|:---|:----------|
|400|Bad Request|The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.|
|401|Unauthorized|Authentication has failed, or credentials were required but not provided.|
|403|Forbidden|You are not authorized to access the API.|
|404|Not Found|Resource not found at given location.|
|405|Method not allowed|The employed HTTP method cannot be used on this resource (e.g., using "POST" on a read-only resource).|
|409|Update Conflict|Conflict on resource update, entity was changed in the meantime.|
|409|Duplicate|The entity already exists in the data source.|
|422|Invalid Data|General error with entity data format.|
|422|Non Unique Result|Resource constraints error. Non-unique result from the query.|
|422|Unprocessable entity|Resource cannot be processed.|
|500|Internal Server Error|An internal error in the software system has occurred and the request could not be processed.|
|503|Service Unavailable|The service is currently not available. This may be caused by an overloaded instance or it is down for maintenance. Please try it again in a few minutes.|
