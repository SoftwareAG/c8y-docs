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

-   [REST implementation](/guides/reference-guide/rest-implementation) is the reference for all general concepts.
-   [Device management library](/guides/reference-guide/device-management) specifies the data model for device management.
-   [Sensor library](/guides/reference-guide/sensor-library) specifies the data model for sensors and controls.

If you develop using Java ME/SE, JavaScript or C/C++, please check the relevant developer's guides for even more convenient access to Cumulocity's functionality. Also, if you use any of the supported development boards, see the corresponding "Devices" section for more information.

## Using the REST interfaces

Most programming environments today have particular support for REST-based communication. For experimentation and for understanding Cumulocity's REST interfaces, it is helpful to use one of the numerous available command line tools or browser extensions.

For example, many operating systems come pre-installed with the "curl" command. If you want to start browsing the Cumulocity APIs, enter on a command line:

	curl -u <username>/<password> https://<yourURL>.cumulocity.com/platform

Replace "username" and "password" with the username and password that you used to register to Cumulocity. Similarly, replace "yourURL" with the URL you used at registration time. If you subscribed to Deutsche Telekom's M2M DevFree, use "yourURL" with "dev-dg". 

The command will return links to all basic interfaces of Cumulocity:

	...
    "inventory": {
        "managedObjects": {
            "references": [], 
            "self": "http://<yourURL>/inventory/managedObjects"
        }, 
        "managedObjectsForFragmentType": "http://<yourURL>/inventory/managedObjects?fragmentType={fragmentType}", 
        "managedObjectsForListOfIds": "http://<yourURL>/inventory/managedObjects?ids={ids}", 
        "managedObjectsForType": "http://<yourURL>/inventory/managedObjects?type={type}", 
        "self": "http://<yourURL>/inventory"
    },
    ...

To format the output more nicely on a Mac, try ?curl ? | python -mjson.tool?.

From this point, you can navigate further. For example, display the items in the inventory by following the ?managedObjects? link:

    curl -u <username>/<password> https://<URL>/inventory/managedObjects

You will notice that just a subset of the items in the inventory is actually returned, a ?page?. More information on page handling can be found under [Query result paging](/guides/reference-guide/rest-implementation).

More convenient than command line tools are browser extensions such as [POSTMAN](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop?utm_source=chrome-ntp-launcher) or [Advanced REST Client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo) for Chrome.

[Here](/images/c8yimages/Cumulocity.json.postman_collection) is a simple setup for POSTMAN to use Cumulocity interfaces that you can use by clicking ?Import collection? in POSTMAN. Click on, for example, ?Platform?. Enter your Cumulocity URL by clicking on the drop-down menu next to the ?eye? icon on the top right. Enter your credentials by clicking on ?Basic Auth?, typing your username and password and clicking on ?Refresh headers?. You can now navigate through the APIs simply by clicking the links in the output and hitting ?Send?. Similar, if you want to navigate, for example, between pages of items in the inventory, click on the ?next? link at the bottom of the output.

![Example REST client](/images/c8yimages/postman.png)
