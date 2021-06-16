---
weight: 12
title: Important announcements
layout: bundle
aliases:
  - /release-10-9-0/migration-10-9-0
---

### Core platform

#### Deprecation of /devicecontrol/notifications endpoint

The `/devicecontrol/notifications` endpoint is deprecated. We recommend you to use the  `/notification/operations` endpoint instead. With the 10.11 release, the `/devicecontrol/notifications` endpoint is supposed to be removed.


#### Deprecation of /cep/realtime endpoint

The `/cep/realtime` endpoint is deprecated. We recommend you to use the `/notification/realtime` endpoint instead. With the  10.11 release, the `/cep/realtime` endpoint is supposed to be removed.


#### Enforcement of usage of bootstrap credentials

In order to improve the security posture of the platform as of release 10.10 we shall be enforcing the use of the bootstrap user when subscribing to `dcr/ucr`. With this enforcement of behaviour any subscription to `s/ucr` or `s/dcr` topics with other credentials than the bootstrap user will fail.
The requirement to use the bootstrap user is documented at [Device integration using MQTT](https://cumulocity.com/guides/device-sdk/mqtt/) in the <i>Device SDK guide</i>.


#### Disallow to use special characters for category and key for Tenant Option Collection API

Currently the Tenant Option Collection API returns 400 instead of collection results due to usage of special characters in category and key. After creating a new tenant option when special characters are used in key or category, the generated self link points to a non-existing option. In other cases when special characters are used the self link is broken and the user is unable to get or delete such an option via REST. With the 10.11 release creating tenant options with special characters will be disabled to prevent any issues in this regard in the future.

For reference, we disable all HTTP-encoded and control characters (like \u0000). The full list of HTTP-encoded characters equals the one here: https://secure.n-able.com/webhelp/NC_9-1-0_SO_en/Content/SA_docs/API_Level_Integration/API_Integration_URLEncoding.html).


#### Removal of Basic Auth browser-based authentication

With the 10.5 release a new token-based mechanism for browser-based authentication was introduced (O-Auth Internal) in order to tighten the security of the Cumulocity IoT platform.

With the 10.11 release, the O-Auth Internal authentication will be enabled by default for all tenants. With the 10.12, release the Basic Authentication option will be removed for browser-based applications and all applications  will be forced to use the token-based authentication mechanism O-Auth Internal. Note, that Basic Authentication will still be available for devices connecting to the Cumulocity IoT platform.

If not done already, we recommend you not to wait for the 10.12 release but enable O-Auth Internal as soon as possible. Documentation how to enforce O-Auth Internal can be found in [Administration > Changing settings](https://cumulocity.com/guides/users-guide/administration/#changing-settings) in the *User guide*.

In case you have developed your own web applications or microservices, please make sure that they do support the O-Auth Internal Authentication mechanism. This will be the case if your web applications are based on the Web SDK 10.5 or higher as well as the Microservice SDK 10.5 or higher.


#### Deprecation of RxJS usage in the '@c8y/client' component of the Web SDK

In favor of decoupling the '@c8y/client' library from RxJS library methods, using observables or other RxJS features will be removed with the 10.11 release. To continue using real-time data in your code use the new Observable(), defer() or from() to compose an observable on your own.

For example:

	observable(channel: string) {
	  return new Observable<any>(observer => {
	    const subscription = this.realtime.subscribe(channel, msg => {
	      const data = {
	        channel: msg.channel,
	        data: msg.data.data,
	        id: msg.id,
	        realtimeAction: msg.data.realtimeAction
	      };
	      return observer.next(data);
	    });
	    return () => this.realtime.unsubscribe(subscription);
	  });
	}


#### Change of supported SSL cipher suites

In order to retain the SSL Labs A+ rating, Cumulocity IoT must make continual updates to the supported cyphers for the Cumulocity IoT platform. For the Cumulocity IoT Cloud instances the weaker ciphers will be removed, for customers running their own instances the defaults will be changed with the option to enable the weaker ciphers if they are required.  

The following ciphers are the supported ciphers from release 10.10.

* rsa&#95;pkcs1&#95;sha256
* dsa&#95;sha256
* ecdsa_secp256r1&#95;sha256
* rsa&#95;pkcs1&#95;sha384
* ecdsa&#95;secp384r1&#95;sha384
* rsa&#95;pkcs1&#95;sha512
* ecdsa&#95;secp521r1&#95;sha512
* rsa&#95;pss&#95;rsae&#95;sha256
* rsa&#95;pss&#95;rsae&#95;sha384
* rsa&#95;pss&#95;rsae&#95;sha512
* ed25519 ed448
* rsa&#95;pss&#95;pss&#95;sha256
* rsa&#95;pss&#95;pss&#95;sha384
* rsa&#95;pss&#95;pss&#95;sha512


#### Internet Explorer 11 support has ended

As announced previously, Cumulocity IoT no longer supports Internet Explorer 11. Cumulocity IoT continues to support the latest version of the Chromium-based Microsoft Edge browser as the successor to the Internet Explorer. This will allow us to continue to provide you with a state-of-the-art user experience.


#### Removal of older documentation versions from the documentation website

With the 10.10 release, product documentation for releases that are no longer in maintenance will be hidden from the version dropdown list at [https://cumulocity.com/guides/about-doc/intro-documentation/](https://cumulocity.com/guides/about-doc/intro-documentation/).  

However, the documentation is still available and all links to it still work. To access it, use the full URL including the respective version number, for example [https://cumulocity.com/guides/**10.5.7**/about-doc/intro-documentation/](https://cumulocity.com/guides/10.5.7/about-doc/intro-documentation/).


### Streaming Analytics

#### Single Streaming Analytics application

Where previously Apama Analytics Builder and Apama EPL Apps were separate applications, these have now been combined into a single Streaming Analytics application available from the Cumulocity IoT application switcher.

The Streaming Analytics application provides mechanisms to control visibility of the Analytics Builder and EPL Apps pages.
If the old Apama Analytics Builder or Apama EPL Apps applications had been assigned to specific groups or users, a tenant will need to
configure role-based access and assign roles to control the visibility of the corresponding pages within the Streaming Analytics application.
See [Controlling access to the Streaming Analytics application](https://cumulocity.com/guides/apama/advanced/#control-access) for more information.
This migration is a one-time step that needs to be performed manually.

#### Backwards incompatibility change to the Cumulocity IoT bundles in Apama

As of Apama 10.7.0 (that is, the standalone product, not the Apama-ctrl microservice that is included in Cumulocity IoT),
the names of the Cumulocity IoT bundles that you can add using Software AG Designer no longer include a version number.
These are the following bundles:
- Cumulocity Client
- Event Definitions for Cumulocity
- Utilities for Cumulocity

This has the advantage that with future versions, you can seamlessly upgrade to the latest Cumulocity IoT bundles.

If you are using the old, versioned Cumulocity IoT bundles in Apama, you have to replace them. Proceed as follows:
1. Go to Software AG Designer.
2. Add the new Cumulocity IoT bundles to your Apama projects.
3. Copy any changes you applied to the *CumulocityIoT.yaml* and *CumulocityIoT.properties* files over from the old, versioned bundles into the new bundles.
4. Remove the old, versioned bundles from your Apama projects.

See the [Apama documentation](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/) for more information on the Cumulocity IoT transport connectivity plug-in.

#### Cumulocity IoT transport in Apama

Generic requests that are sent using the Cumulocity IoT transport now return the response body with exactly what is returned from Cumulocity IoT.
In previous versions, this was put into a dictionary with an empty key. So if you have existing code such as the following

```
AnyExtractor dict := AnyExtractor(AnyExtractor(response.body).getDictionary("")[""]);
```

You have to replace this with:

```
AnyExtractor dict := AnyExtractor(response.body);
```

Alternatively, you can change your code to the following form in advance of the upgrade, since it works with both versions:

```
AnyExtractor dict := AnyExtractor(AnyExtractor(response.body).getDictionary("").getOr("", response.body));
```

See also [Invoking other parts of the Cumulocity IoT REST API](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_invoking_other_parts_of_the_cumulocity_rest_api.html) in the Apama documentation.

#### Cumulocity API in Apama

The `withResponse` action is now deprecated for all of the predefined types
(`ManagedObject`, `Alarm`, `Event`, `Measurement`, `MeasurementFragment` and `Operation`) and will be removed in a future release.

It is recommended that you now use the new `withChannelResponse` action for the predefined types.
This allows your application to receive a response on the `<type>.SUBSCRIBE_CHANNEL` channel when one of these object types is created or updated.

See the following topics in the Apama documentation for more information:

* [Updating a managed object](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_updating_a_managed_object.html)
* [Creating a new alarm](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_creating_a_new_alarm.html)
* [Creating a new event](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_creating_an_event.html)
* [Creating a new measurement](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_creating_a_new_measurement.html)
* [Creating measurement fragments](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_creating_measurement_fragments.html)
* [Creating a new operation](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_creating_a_new_operation.html)

#### Removed items in Apama EPL

Several minor features which have been deprecated over the past few years have been removed from Apama EPL.
The following table lists the removed items that are relevant for Cumulocity IoT and their recommended replacements.

| Removed item          | Replacement       |
| --------------------- | ----------------- |
| aggregate prior       | aggregate nth     |
| decimal.nextafter     | decimal.nextAfter |
| dictionary.getDefault | dictionary.getOr  |
| float.nextafter       | float.nextAfter   |
