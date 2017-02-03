---
order: 40
layout: default
title: Developing Java clients for services
---
## Overview

## Connecting to Cumulocity

The root interface for connecting to Cumulocity's services from Java is called "ServicesPlatform". It provides access to all other interfaces of the platform for services, such as the sms and email. In its simplest form, it is instantiated as follows:

    ServicesPlatform platform = new ServicesPlatformImpl("<<URL>>", new CumulocityCredentials("<<tenant>>", "<<user>>", "<<password>>", "<application key>"));

As an example:

    Platform platform = new PlatformImpl("https://demos.cumulocity.com", new CumulocityCredentials("mytenant", "myuser", "mypassword", null));

## Accessing the Service APIs

### Accessing SMS API

The following code snippet shows how to obtain a handle to the sms api from Java:

	SmsMessagingApi smsMessaging = platform.getSmsMessagingApi();

Using this handle, you can send and retrieve the sms messages. User of the platform should have the required role to use this feature.

### Accessing Email API

