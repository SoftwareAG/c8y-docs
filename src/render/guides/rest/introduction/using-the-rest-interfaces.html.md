---
order: 20
title: Using the REST interfaces
layout: redirect
---

Most programming environments today have particular support for REST-based communication. For experimentation and for understanding Cumulocity's REST interfaces, it is helpful to use one of the numerous available command line tools or browser extensions.

For example, many operating systems come pre-installed with the "curl" command. If you want to start browsing the Cumulocity APIs, enter on a command line:

	$ curl -u <username>:<password> https://<yourURL>.cumulocity.com/platform

Replace "username" and "password" with the username and password that you used to register to Cumulocity. Similarly, replace "yourURL" with the URL you used at registration time. 

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