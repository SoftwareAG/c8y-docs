---
weight: 40
layout: redirect
title: Authentication
---

The C# SDK also supports OAuth tokens. Authentication with OAuth is based on cookies technology, so the token must be read from the request cookie header. Refer to [General aspects > Security](/microservice-sdk/concept/#security) for more details.

You can find a [microservice example](https://github.com/SoftwareAG/cumulocity-clients-cs/tree/develop/Examples/MicroserviceSDK/MicroserviceExample/DemoOAuth) in our GitHub repository to learn how to use OAuth tokens. The microservice configures REST endpoints (GET, PUT, POST, DELETE) using basic and OAuth authentication schemes, but it does not add any business logic as it is just for demonstration. The configuration is done by runtime and adds the authentication. Finally, a web port is created and starts listening on the specified port in the *Properties/launchSettings.json* file.

Note that when a request authenticated with OAuth arrives to the microservice, it must be verified using a token saved in the authorization cookie and with the X-XSRF-TOKEN header. A request in user scope with OAuth must pass the cookie and header to the platform.

The `UseAuthentication` method adds a single authentication middleware component which is responsible for automatic authentication and the handling of remote authentication requests.

To employ OAuth you must add the following code to the `ConfigureServices` method in the *Startup.cs* file:

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

Moreover, you must register the authentication middleware. To do so, call the `UseAuthentication` method within the `Configure` method in the *Startup.cs* file as shown below:

```cs
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    app.UseAuthentication();            // to employ OAuth
    app.UseMvcWithDefaultRoute();
}
```

{{< c8y-admon-important >}}
Do not use the `AddBasicAuthentication` method if you want OAuth-based authentication for your microservice.
{{< /c8y-admon-important >}}

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

Refer to [Authorize with a specific scheme in ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/security/authorization/limitingidentitybyscheme?view=aspnetcore-3.1&tabs=aspnetcore2x) for more details.

### Testing the microservice with OAuth tokens

Third-party tools such as Postman can be used to test your REST API. You need the cookie and X-XSRF-TOKEN headers which must be captured from the platform (for example by watching network requests in the browser). Note that the token expires within few minutes as configured by the administrator. Make sure you test this feature before the token expires. The cURL equivalent to test the [microservice example](https://github.com/SoftwareAG/cumulocity-clients-cs/tree/develop/Examples/MicroserviceSDK/MicroserviceExample/DemoOAuth) is as follows:

```
curl 'http://<URL>/api/values' \
  -H 'X-XSRF-TOKEN: CHMkPIteHmTiihocpPwZ' \
  -H 'Cookie: authorization=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOm51bGwsImlzcyI6Im9hdXRoLWp3a3MubGF0ZXN0LnN0YWdlLmM4eS5pbyIsImF1ZCI6Im9hdXRoLWp3a3MubGF0ZXN0LnN0YWdlLmM4eS5pbyIsInN1YiI6ImRvbWluaWthIiwidGNpIjoiMjY0NjBjNGItZWJmNy00OGRlLWE1ZmMtYzkxZGJhZWM3MWFlIiwiaWF0IjoxNTk3ODk4OTcyLCJuYmYiOjAsImV4cCI6MTU5NzkwMjU3MiwidGZhIjpmYWxzZSwidGVuIjoidDU5MDA4IiwieHNyZlRva2VuIjoiQ0hNa1BJdGVIbVRpaWhvY3BQd1oifQ.laooVzd3jS2Vj9Pj86To1M1ONl7_m7bPX0cGH8dYnUltDu5jxwNjpaCy7L8Hei59VYB7euGO7qn0LeqNZGt9Nw; XSRF-TOKEN=CHMkPIteHmTiihocpPwZ' \
  --compressed
```

You can get the headers from the **Network** tab and replace them in the example above to hit the endpoint which returns 200 OK response code.
