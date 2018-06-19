---
order: 10
layout: redirect
title: Using Services Platform
---

The "services platform interface" is responsible for connecting to the Services (SMS) API from Java.

    ServicesPlatform platform = new ServicesPlatformImpl("<<URL>>", new CumulocityCredentials("<<tenant>>", "<<user>>", "<<password>>", "<application key>"));

The URL pointing to the platform must be of the form {tenant}.cumulocity.com, for example https://demos.cumulocity.com, which will process all the API requests.

**Info**: You need to have appropriate credentials to be able to access the Services API from outside, see example above.