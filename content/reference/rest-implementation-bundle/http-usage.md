---
weight: 20
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

Cumulocity IoT uses the URL in the ["Host" header](http://en.wikipedia.org/wiki/List_of_HTTP_header_fields) to determine the tenant to authenticate against. Alternatively, you can pass the tenant's ID as part of the "Authorization" header in the following form:

	<<tenant ID>>/<<user name>>:<<password>>

For details on the tenant ID, refer to [Tenants > Tenant ID and tenant domain](/reference/tenants/#tenant-id-and-domain).

Cumulocity IoT supports two factor authentication. If it is enabled, the two factor authentication token is sent in header:

    TFAToken:<<tfa-token>>

If the token expires and requires renewal, the backend sends a response header:

    TFATokenExpired:TFATokenExpired

#### JWT token authentication

Cumulocity IoT supports [JWT token](https://en.wikipedia.org/wiki/JSON_Web_Token) authentication.

>**Info:** The JWT token authentication described in this section is deprecated and might not be supported in future releases. We recommend you to use the OAuth authentication grant instead (see next section).


The HTTP header must include:

	Authorization: Bearer <<Base64 encoded JWT token>>

The JWT token must be signed using RSA signature with SHA-256 (RS256). The minimal RSA key size is 512 bits, although the minimum recommended key length is 2048 bits. You can generate an example key using this [Online RSA Key Generator](http://travistidwell.com/jsencrypt/demo/).

You must upload your public key to the [tenant options](/reference/tenants) to the "token.publicKey" category.

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

Now you can generate the JWT token and sign it with the matching private key. For example you can do it at [jwt.io](https://jwt.io/#debugger-io).
Note however that this is a public website.
JWT.io claims that validation and debugging is done on the client side, but in general we do not recommend you to paste your credentials to a public website.
If you want to generate a JWT token locally, you can install a command line tool such as [jwt-cli](https://github.com/mike-engel/jwt-cli).

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

The login with OAuth requires a correct configuration on the [Cumulocity IoT side](/users-guide/administration#single-sign-on). With the configuration, an additional button is available on the Login page. After clicking the button, the user is redirected to authenticate with the configured authorization server. On successful login, the user is redirected to Cumulocity IoT.

Authentication details are exchanged using cookies. There are two parts to it, the first is the authentication cookie that is handled automatically by the Cumulocity IoT platform. The second is the XSRF-TOKEN cookie. When a client receives the cookie, it should take the value and put it in the X-XSRF-TOKEN request header in all subsequent requests.  

The flow of authenticating with OAuth authentication code grant is as follows:

![Authentication flow](/images/reference-guide/oauth-simple-flow.png)

The first request executed by the browser is:

    POST /tenant/loginOptions
    Host: ...
    Content-Type: application/vnd.com.nsn.cumulocity.loginoptioncollection+json;ver=...
    Accept: application/vnd.com.nsn.cumulocity.loginoptioncollection+json;ver=...

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

Authorization cookie is valid for 2 weeks.

### Application management

Cumulocity IoT uses a so-called "application key" to distinguish requests coming from devices and traffic from applications. If you write an application, pass the following header as part of all requests:

	X-Cumulocity-Application-Key: <<application key>>

For example, if you registered your application in the Cumulocity IoT administration application with the key "myapp", pass

	X-Cumulocity-Application-Key: myapp

This makes your application subscribable and billable. If you implement a device, do not pass the key.

> Make sure that you pass the key in **all** requests coming from an application. If you leave out the key,
> the request will be considered a device request and the corresponding device will be marked as "available".

### Limited HTTP clients

If you use an HTTP client that can only perform GET and POST methods in HTTP, you can emulate the other methods through an additional "X-HTTP-METHOD" header. Simply issue a POST request and add the header, specifying the actual REST method to be executed. For example, to emulate the "PUT" (modify) method, you can use:

	POST ...
	X-HTTP-METHOD: PUT

### <a id="processing-mode"></a> Processing mode

Every update request (PUT, POST, DELETE) executes with a so-called *processing mode*. The processing modes are as follows:

<table style="width: 100%">
<colgroup>
   <col style="width: 15%;">
   <col style="width: 85%;">
</colgroup>

<thead>
<th>Processing mode</th>
<th>Description</th>
</thead>
<tbody>
<tr>
<td> Persistent (default)</td>
<td> All updates will be send both to the Cumulocity IoT database and to real-time processing.</td>
</tr>
<tr>
<td> Transient</td>
<td> Updates will be sent only to real-time processing. As part of real-time processing, the user can decide case by case through scripts whether updates should be stored to the database or not.</td>
</tr>
<tr>
<td> Quiescent</td>
<td> The QUIESCENT processing mode behave like the PERSISTENT processing mode with the exception that no real-time notifications will be sent. Currently, the QUIESCENT processing mode is applicable for measurements and events only.</td>
</tr>
<tr>
<td> CEP </td>
<td> The CEP processing mode behaves like the TRANSIENT processing mode with the exception that no real-time notifications will be sent. Currently, the CEP processing mode is applicable for measurements and events only.</td>
</tr>
</tbody>
</table>

To explicitly control the processing mode of an update request, an "X-Cumulocity-Processing-Mode" header can be used with a value of either "PERSISTENT", "TRANSIENT", "QUIESCENT" or "CEP":

    X-Cumulocity-Processing-Mode: TRANSIENT

### Authorization

All requests issued to Cumulocity IoT are subject to authorization. To determine the required permissions, see the
"Required role" entries in the reference documentation for the individual requests. To learn more about the different permissions and the concept of ownership in Cumulocity IoT, see "Managing permissions and ownership" in the Section "[Security aspects](/concepts/security)".

### Media types

Each type of data is associated with an own media type. The general format of media types is

    application/vnd.com.nsn.cumulocity.<<type>>+json;ver=<<version>>;charset=UTF-8

Each media type contains a parameter "ver" indicating the version of the type. At the time of writing, the latest version is "0.9". The complete media type names are given in the respective sections of the reference guide. As an example, the media type for an error message in the current version is

    application/vnd.com.nsn.cumulocity.error+json;ver=0.9;charset=UTF-8

Media types are used in HTTP "Content-Type" and "Accept" headers. If you specify an "Accept" header in a POST or PUT request, the response will contain the newly created or updated object. If you do not specify the header, the response body will be empty.

If a media type without "ver" parameter is given, the oldest available version will be returned by the server. If the accept header contains the same media type in multiple versions the server will return a representation in the latest supported version.

Note that media type values should be treated as case insensitive.

### Date format

Data exchanged with Cumulocity IoT in HTTP requests and responses is encoded in [JSON format](http://www.ietf.org/rfc/rfc4627.txt) and [UTF-8](http://en.wikipedia.org/wiki/UTF-8) character encoding. Timestamps and dates are accepted and emitted by Cumulocity IoT in [ISO 8601](http://www.w3.org/TR/NOTE-datetime) format:

    Date: YYYY-MM-DD
    Time: hh:mm:ss±hh:mm
    Timestamp: YYYY-MM-DDThh:mm:ss±hh:mm

To avoid ambiguity, all times and timestamps must include timezone information. Please take into account that the plus character "+" must be encoded as "%2B".

### Cumulocity IoT API data types

Cumulocity IoT APIs are restricted by following data types:

<table>
<colgroup>
<col style="width: 10%;">
<col style="width: 20%;">
<col style="width: 10%;">
<col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th align="left">Type</th>
<th align="left">Description</th>
<th align="left">Size</th>
<th align="left">Possible values</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">boolean</td>
<td align="left">true or false</td>
<td align="left">1 bit</td>
<td align="left">true, false</td>
</tr>

<tr>
<td align="left">int</td>
<td align="left">two’s complement integer</td>
<td align="left">32 bit</td>
<td align="left">from -2,147,483,648 to +2,147,483,647</td>
</tr>

<tr>
<td align="left">long</td>
<td align="left">two’s complement integer</td>
<td align="left">64 bit</td>
<td align="left">from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807</td>
</tr>

<tr>
<td align="left">float</td>
<td align="left">IEEE 754 floating point</td>
<td align="left">32 bit</td>
<td align="left">from 1.40129846432481707e-45 to 3.40282346638528860e+38 (positive or negative)</td>
</tr>

<tr>
<td align="left">double</td>
<td align="left">IEEE 754 floating point</td>
<td align="left">64 bit</td>
<td align="left">from 4.94065645841246544e-324d to 1.79769313486231570e+308d (positive or negative)</td>
</tr>

<tr>
<td align="left">string</td>
<td align="left">represents character strings</td>
<td align="left">-</td>
<td align="left">maximum 2,147,483,647 characters</td>
</tr>

<tr>
<td align="left">datetime</td>
<td align="left">date or time or timestamp</td>
<td align="left">-</td>
<td align="left"><a href="http://www.w3.org/TR/NOTE-datetime">ISO 8601</a> datetime</td>
</tr>

<tr>
<td align="left">object</td>
<td align="left">A structure of key and value pairs</td>
<td align="left">-</td>
<td align="left">JSON objects, refer to <a href="https://www.w3schools.com/js/js_json_objects.asp">w3schools > JS JSON > JSON Objects</a></td>
</tr>

<tr>
<td align="left">array</td>
<td align="left">A list of values that have the same type</td>
<td align="left">-</td>
<td align="left">JSON arrays, refer to <a href="https://www.w3schools.com/js/js_json_arrays.asp">w3schools > JS JSON > JSON Arrays</a></td>
</tr>
</tbody>
</table>

### <a name="error_reporting"></a>Error reporting

In error cases, Cumulocity IoT returns standard HTTP response codes as described in [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). A Client should not only be able to handle individual codes but classes of codes as well (e.g., 4xx). The response body can contain more information about the error, see the error media type definition below. General error interpretations are:

|Code|Name|Description|
|:---|:---|:----------|
|400|Bad Request|The request could not be understood by the server due to malformed syntax. The client SHOULD NOT repeat the request without modifications.|
|401|Unauthorized|Authentication has failed, or credentials were required but not provided.|
|403|Forbidden|You are not authorized to access the API.|
|404|Not Found|Resource not found at given location.|
|405|Method not allowed|The employed HTTP method cannot be used on this resource (e.g., using "POST" on a read-only resource).|
|409|Update Conflict|Conflict on resource update, entity was changed in the meantime.|
|409|Duplicate|The entity already exists in the data source.|
|413|Execution timeout, operation will be abandoned|Query had been running too long and was timed out.|
|422|Invalid Data|General error with entity data format.|
|422|Non Unique Result|Resource constraints error. Non-unique result from the query.|
|422|Unprocessable entity|Resource cannot be processed.|
|429|Requests rate exceeds the limit|If the request rate limit per second is exceeded, the requests are delayed and kept in queue until the queue number limit is exceeded in which case the request is terminated with an error.|
|500|Internal Server Error|An internal error in the software system has occurred and the request could not be processed.|
|503|Service Unavailable|The service is currently not available. This may be caused by an overloaded instance or it is down for maintenance. Please try it again in a few minutes.|
