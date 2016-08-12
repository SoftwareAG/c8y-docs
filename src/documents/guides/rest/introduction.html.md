---
order: 10
title: Introduction to REST
layout: default
---
## Overview

Cumulocity employs REST for all external communication. Regardless whether the communication originates from IoT devices, from web applications or from backoffice IT systems — the communication protocol is always REST.

REST is a very simple and secure protocol based on HTTP(S) and TCP. It is today the de-facto Internet standard supported by all networked programming environments ranging from very simple devices up to large-scale IT. One of the many books introducing REST is [RESTful Web Services](http://oreilly.com/catalog/9780596529260).

This guide explains how to use Cumulocity's REST interfaces to

-   Interface devices with Cumulocity.
-   Develop applications on top of Cumulocity.
-   Integrate other cloud services or IT backend applications with Cumulocity.

It first shows you how to use the REST interfaces in general, then discusses [device integration](/guides/rest/device-integration) and finally it describes [application development](/guides/rest/application-development). The description is closely linked to the reference guide, which describes each interface in detail. Relevant chapters in the reference guide are in particular

-   [REST implementation](/guides/reference/rest-implementation) is the reference for all general concepts.
-   [Device management library](/guides/reference/device-management) specifies the data model for device management.
-   [Sensor library](/guides/reference/sensor-library) specifies the data model for sensors and controls.

If you develop using Java ME/SE, JavaScript or C/C++, please check the relevant developer's guides for even more convenient access to Cumulocity's functionality. Also, if you use any of the supported development boards, see the corresponding "Devices" section for more information.

## Using the REST interfaces

Most programming environments today have particular support for REST-based communication. For experimentation and for understanding Cumulocity's REST interfaces, it is helpful to use one of the numerous available command line tools or browser extensions.

For example, many operating systems come pre-installed with the "curl" command. If you want to start browsing the Cumulocity APIs, enter on a command line:

	$ curl -u <username>:<password> https://<yourURL>.cumulocity.com/platform

Replace "username" and "password" with the username and password that you used to register to Cumulocity. Similarly, replace "yourURL" with the URL you used at registration time. If you subscribed to Deutsche Telekom's M2M DevFree, replace "yourURL" with "dev-dg". 

The command will return links to all basic interfaces of Cumulocity:

	...
    "inventory": {
        "managedObjects": {
            "references": [], 
            "self": "https://<yourURL>/inventory/managedObjects"
        }, 
        "managedObjectsForFragmentType": "https://<yourURL>/inventory/managedObjects?fragmentType={fragmentType}", 
        "managedObjectsForListOfIds": "https://<yourURL>/inventory/managedObjects?ids={ids}", 
        "managedObjectsForType": "https://<yourURL>/inventory/managedObjects?type={type}", 
        "self": "https://<yourURL>/inventory"
    },
    ...

To format the output more nicely on a Mac, try "curl ... | python -mjson.tool".

From this point, you can navigate further. For example, display the items in the inventory by following the "managedObjects" link:

    $ curl -u <username>:<password> https://<yourURL>.cumulocity.com/inventory/managedObjects

You will notice that just a subset of the items in the inventory is actually returned, a so-called "page". More information on page handling can be found under [Query result paging](/guides/reference/rest-implementation#paging).

## Using Postman

A convenient way to explore REST interface and the Cumulocity database content are browser extensions such as  [Postman](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=chrome-ntp-launcher) or [Advanced REST Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) for Chrome.

![Example REST client](/guides/rest/postman.png)

To set up Postman and import sample REST API commands, click the button below:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7c7d00719ab238097686)

Install Postman as described and import the examples ("API collection"). The collection comes with a sample, read-only environment. To configure further environments: 

* Click on drop-down menu next to the little "eye" widget to configure your Cumulocity URL. Click "Manage environments" and "Add". 
* Then type a name for your tenant. Configure a key "url" with a value of "https://&lt;yourURL&gt;.cumulocity.com". Click "Submit".
* Now, you can run REST calls. Click, for example, on "Cumulocity API", "Cumulocity API Overview", "GET Platform". By clicking the "Send" button, you can send the GET request to Cumulocity. The first time that you send a request to Cumulocity, you have to enter your credentials. Click on "Basic Auth" and enter your username and password, followed by a click on "Refresh Headers".
* To explore the API, click on the links in the responses. Similar to navigate through pages of results, click on the "next" link at the bottom of the response. Add, for example, "?pageSize=100" to the end of the request URL to get more data than the default five items.

> Note that Postman has two issues: It always sends a content type even if you do not specify one. If you see an error, please add the "Content-Type" header described in the reference manual. It also sometimes shows "Malformed JSON" as a response, which is a [bug](https://www.bountysource.com/issues/3141137-malformed-json-with-a-200-ok-and-no-content) in Postman.

> You can also configure a key "auth" in your Postman environment so that you do not have to enter your credentials each time. "auth" contains the HTTP authorization header with your Base64-encoded credentials. Example: Assume your username is "me" and your password is "secret". Go to http://ostermiller.org/calc/encode.html, type "me:secret" into the text area, then click the "Encode" button in the row "Base 64". The resulting text is "bWU6c2VjcmV0". Use "Basic bWU6c2VjcmV0" as value for "auth".
