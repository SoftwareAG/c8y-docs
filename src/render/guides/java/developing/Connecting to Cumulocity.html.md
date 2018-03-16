---
order: 20
layout: redirect
title: Connecting to Cumulocity
---

The root interface for connecting to Cumulocity from Java is called "Platform" (see "Root interface" in the [REST implementation section](/guides/reference/rest-implementation) of the reference guide). It provides access to all other interfaces of the platform, such as the inventory. In its simplest form, it is instantiated as follows:

    Platform platform = new PlatformImpl("<<URL>>", new CumulocityCredentials("<<user>>", "<<password>>"));

As an example:

    Platform platform = new PlatformImpl("https://demos.cumulocity.com", new CumulocityCredentials("myuser", "mypassword"));

If you use the Java client for developing an application, you need to register an application key (through "Own applications" in the Cumulocity administration application, or through the [Application API](/guides/reference/applications)).

	new CumulocityCredentials("<<tenant>>", "<<user>>", "<<password>>", "<<application key>>")

For testing purposes, every tenant is subscribed to the demo application key "uL27no8nhvLlYmW1JIK1CA==". The constructor for PlatformImpl also allows you to specify the default number of objects returned from the server in one reply with the parameter "pageSize".