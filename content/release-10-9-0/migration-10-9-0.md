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


### Implemented measures

#### Single Streaming Analytics application

Where previously Apama Analytics Builder and Apama EPL apps were separate applications, these have now been combined into a single **Streaming Analytics** application available from the Cumulocity IoT application switcher.

See the [Streaming Analytics release notes](/release-10-9-0/streaming-analytics-10-9-0/#10_9_0) for details on migrating if your tenant had configured access to the old applications.

#### Internet Explorer 11 end of support

As announced previously, Cumulocity IoT no longer supports Internet Explorer 11. Cumulocity IoT continues to support the latest version of the Chromium-based Microsoft Edge browser as the successor to the Internet Explorer. This will allow us to continue to provide you with a state-of-the-art user experience.

#### Enforcing user passwords to meet password complexity

As announced previously user passwords have been enforced to meet password complexity by default. The new password validation will not impact the existing users until they need to change or reset the password. The password complexity is enforced:

* During user creations
* During password change
* During password reset

For details on password validation refer to [Administration > Getting started > User settings](https://cumulocity.com/guides/users-guide/getting-started/#user-settings) and [Administration > Changing settings > Login settings](https://cumulocity.com/guides/users-guide/administration/#changing-settings).


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