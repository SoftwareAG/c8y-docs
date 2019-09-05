---
weight: 40
layout: redirect
title: Authentication
---

The C# SDK also supports OAuth tokens. Authentication with OAuth is based on cookies technology, so the access token has to be read from the request cookie header. Refer to [Security](/guides/microservice-sdk/concept/#security) for more details.

You can find a [microservice example](https://bitbucket.org/m2m/cumulocity-clients-cs/src/develop/Examples/MicroserviceSDK/MicroserviceExample/DemoOAuth/) in our repositories to learn how to use OAuth tokens. The microservice configures REST endpoints (GET, PUT, POST, DELETE) using basic and OAuth authentication schemes, but it does not add any business logic as it is just for demonstration. The configuration is done by runtime and adds the authentication. Finally, a web port is created and start listening on the specified port in the launch settings JSON. The bootstrap user is also specified there for local testing.

Note that when a request authenticated with OAuth arrives to the microservice, it must be verified using an access token saved in the authorization cookie and with the X-XSRF-TOKEN header. A request in user scope with OAuth must pass the cookie and header to the platform.

The `UseAuthentication` method adds a single authentication middleware component which is responsible for automatic authentication and the handling of remote authentication requests.

To employ OAuth you need to add the following code to the `ConfigureServices` method in the *Startup.cs* file:

```cs
services.AddCumulocityAuthenticationAll(Configuration);
```

This adds support to OAuth and Basic authentication – by default OAuth is being used.

```cs
public static IServiceCollection AddCumulocityAuthenticationAll(this IServiceCollection services, IConfiguration configuration)
{
    services.AddAuthentication(OAuthAuthenticationDefaults.AuthenticationScheme)
        .AddBasicAuthentication<BasicCredentialVerifier>()
        .AddOAuthAuthentication<OAuthVerifier>();
    return services;
}
```

It is important to remember that if you want to employ OAuth, only one authentication must be used. Add to the `Configure` method in the *Startup.cs* file the following code and do not use the method `AddBasicAuthentication`.

```cs
public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
    app.UseAuthentication();            // to employ OAuth
    app.UseMvcWithDefaultRoute();
}
```

To use multiple authentication schemes, the Controllers class must be decorated as follows:

```cs
[Route("api/[controller]")]
[Authorize(AuthenticationSchemes = AllSchemes)]
public class ValuesController : Controller
{
    public const string AllSchemes =
        BasicAuthenticationDefaults.AuthenticationScheme + ", " +
        OAuthAuthenticationDefaults.AuthenticationScheme;

    // REST endpoints methods ...

}
```

Refer to [Authorize with a specific scheme in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/security/authorization/limitingidentitybyscheme?view=aspnetcore-2.2&tabs=aspnetcore2x) for more details.

### Testing the microservice with OAuth tokens

Third-party tools such as Postman can be used to test your REST API. You need the Cookie and XSRF-token which must be captured from the platform (e.g. by watching network requests in the browser). Note that the token expires within few minutes.

```
$headers=@{}
$headers.Add("x-xsrf-token", "aiDljlXdgpIOdfEFAtJj")
$headers.Add("cookie", "authorization=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOm51bGwsImlzcyI6Im9hdXRoLnN0YWdpbmctbGF0ZXN0LmM4eS5pbyIsImF1ZCI6Im9hdXRoLnN0YWdpbmctbGF0ZXN0LmM4eS5pbyIsInN1YiI6ImxhcmEiLCJ0Y2kiOiJjNTU3OWE4Zi1iNDljLTQyNDItOWU0Mi03ZDIwYjEzZmUwMjIiLCJpYXQiOjE1NjM1Mjk0OTEsIm5iZiI6bnVsbCwiZXhwIjoxNTYzNTMzMDkxLCJ0ZW4iOiJvYXV0aCIsInhzcmZUb2tlbiI6ImFpRGxqbFhkZ3BJT2RmRUZBdEpqIn0.cI0JA-ci6Bs-caIIA-afA7zBn3Rle-EAmXtB9pkIGEGdKeqOJNoNd1JFgrX5gclxUlwIfZl27yuHC8_nowx66g; XSRF-TOKEN=aiDljlXdgpIOdfEFAtJj")
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$cookie = New-Object System.Net.Cookie
$cookie.Name = '.AspNetCore.Antiforgery.-EuFnr1Btkg'
$cookie.Value = 'CfDJ8OmxXswW3x1Bo477tHtFV5oyCbFcSJgZO0U8ZNxN-8Kh-frst-TnaNjnwDS6tp9EZoUbP7IvfBqKAMTxF6zx2FI5WpjKqSE2yWn5KjvNlbtwDVAjX2NVng4AGsQUGJu_Umxsd6e2FWgXVvv6BpLoVF0'
$cookie.Domain = 'url'
$session.Cookies.Add($cookie)
$response = Invoke-WebRequest -Uri 'http://url/api/values' -Method GET -Headers $headers -WebSession $session
```
