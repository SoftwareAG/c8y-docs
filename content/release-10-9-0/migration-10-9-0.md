---
weight: 12
title: Migration notes
layout: bundle
---

### Announcements

#### Removal of Basic Auth browser-based authentication

With the 10.5 GA release a new token-based mechanism for browser-based authentication was introduced (O-Auth Internal) in order to tighten the security of the Cumulocity IoT platform.

With the 10.10 GA release, scheduled for July 2021, the O-Auth Internal authentication will be enabled by default for all tenants. With the 10.11 GA release, scheduled for October 2021, the Basic Authentication option will be removed for browser-based applications and all applications  will be forced to use the token-based authentication mechanism O-Auth Internal. Note, that Basic Authentication will still be available for devices connecting to the Cumulocity IoT platform.

If not done already, we recommend you not to wait for the 10.11 release but enable O-Auth Internal as soon as possible. Documentation how to enforce O-Auth Internal can be found in [Administration > Changing settings](https://cumulocity.com/guides/users-guide/administration/#changing-settings) in the *User guide*.

In case you have developed your own web applications or microservices, please make sure that they do support the O-Auth Internal Authentication mechanism. This will be the case if your web applications are based on the Web SDK 10.5 or higher as well as the Microservice SDK 10.5 or higher.

#### Deprecation of RxJS usage in the '@c8y/client' component of the Web SDK

In favor of decoupling the '@c8y/client' library from RxJS library methods, using observables or other RxJS features will be removed with the 10.11 GA release. To continue using real-time data in your code use the new Observable(), defer() or from() to compose an observable on your own.

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

The following ciphers are the supported ciphers from GA release 10.10.

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

#### Removal of older documentation versions from the documentation website

With the 10.10 GA release, scheduled for July 2021, product documentation for releases that are no longer in maintenance will be hidden from the version dropdown list at [https://cumulocity.com/guides/about-doc/intro-documentation/](https://cumulocity.com/guides/about-doc/intro-documentation/).  

However, the documentation is still available and all links to it still work. To access it, use the full URL including the respective version number, for example [https://cumulocity.com/guides/**10.5.7**/about-doc/intro-documentation/](https://cumulocity.com/guides/10.5.7/about-doc/intro-documentation/).


### Implemented measures

#### Internet Explorer 11 end of support

As announced previously, Cumulocity IoT no longer supports Internet Explorer 11. Cumulocity IoT continues to support the latest version of the Chromium-based Microsoft Edge browser as the successor to the Internet Explorer. This will allow us to continue to provide you with a state-of-the-art user experience.

#### Enforcing user passwords to meet password complexity

As announced previously, user passwords have been enforced to meet password complexity by default. The new password validation will not impact the existing users until they need to change or reset the password. The password complexity is enforced:

* During user creations
* During password change
* During password reset

For details on password validation refer to [Getting started > User options and settings](https://cumulocity.com/guides/users-guide/getting-started/#user-settings) and [Administration > Changing settings > Login settings](https://cumulocity.com/guides/users-guide/administration/#login-settings).

#### Removal of OPC UA legacy integration

As announced previously, the OPC UA legacy integration has been removed from the product. With Cumulocity IoT 10.5.7 a new version of our OPC UA integration was introduced supporting many advanced features. If you are still using the legacy OPC UA integration, we ask you to upgrade to the latest version. For more information, refer to [OPC UA](https://cumulocity.com/guides/10.7.0/protocol-integration/opcua) in the *Protocol integration guide*.


<!--#### Smart REST response codes

The error code "40" will be removed in Cumulocity IoT 1.8 January 2021 release.  

Why are we doing this?  Currently, when connecting to Cumulocity IoT via SmartREST 1.0 you may receive an error "40", often looking like this:

	40,,/meta/connect,402::Unknown client
	86,,,0,handshake

This error means that the platform has restarted, the session has expired, or some other connectivity problem occurred. The number is misleading though, as according to the documentation "40" means "Template not found".

After the error code "40" has been removed the error will look like this:

	86,,,0,handshake

No change is required for devices integrated via our Device SDK and agents. However, be aware of this change, in case you have designed your own device integration.


#### ngx-boostrap upgrade to 5.6.1

To fix various layout issues around tooltips and scrollbars, the ngx-bootstrap library will be upgraded to version 5.6.1. The change applies the first time to the 10.7.1 Incremental Release and to the 10.8 GA Release in January 2021.

This change may affect developers building Cumulocity IoT UI extensions or custom web applications. It may also affect existing extensions and web applications.

An important change is the ngx-bootstrap module's import. Now, when importing a module, e.g. BsModalRef, you need to specify the exact directive to import from:

	import { BsModalRef } from 'ngx-bootstrap/modal';

instead of

	import { BsModalRef } from 'ngx-bootstrap’;

For details, see the [ngx-bootstrap release notes](https://github.com/valor-software/ngx-bootstrap/releases).


-->

### Streaming Analytics

#### Single Streaming Analytics application

Where previously Apama Analytics Builder and Apama EPL Apps were separate applications, these have now been combined into a single Streaming Analytics application available from the Cumulocity IoT application switcher.

The Streaming Analytics application provides mechanisms to control visibility of the Analytics Builder and EPL Apps pages.
If the old Apama Analytics Builder or Apama EPL Apps applications had been assigned to specific groups or users, a tenant will need to
configure role-based access and assign roles to control the visibility of the corresponding pages within the Streaming Analytics application.
See [Controlling access to the Streaming Analytics application](https://cumulocity.com/guides/apama/advanced/#control-access) for more information.
This migration is a one-time step that needs to be performed manually.

#### Backwards incompatibility change to the Cumulocity IoT bundles in Apama

As of Apama 10.7.0 (that is, the standalone version, not the Apama-ctrl microservice that is included in Cumulocity IoT), 
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
AnyExtractor dict := 
AnyExtractor(AnyExtractor(response.body).getDictionary("")[""]);
```

You have to replace this with:
```
AnyExtractor dict := AnyExtractor(response.body);
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
