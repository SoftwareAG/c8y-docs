---
order: 10
layout: redirect
title: Using Services Platform
---

The "services platform interface" is responsible for connecting to Services (Email, SMS) API from Java.

    ServicesPlatform platform = new ServicesPlatformImpl("<<URL>>", new CumulocityCredentials("<<tenant>>", "<<user>>", "<<password>>", "<application key>"));

For example, an URL pointing to the platform can be https://demos.cumulocity.com which will process all the API requests.