---
order: 50
title: Accessing HTTPContext in ASP.net Core
layout: redirect
---

In earlier versions of .Net Core, IHttpContextAccessor was automatically registered. This was removed. You need to register it manually if you intend to use it inside services. IHttpContextAccessor is only intended for accessing the HttpContext in locations where it's not directly available.

    public void ConfigureServices(IServiceCollection services)
    {
        // ...
         services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
    }

