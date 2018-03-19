---
order: 20
title: Link devices to assets
layout: redirect
---

Just like you link assets to other child assets, you can link assets also to devices that monitor and control the asset. For example, assume that you have a light sensor installed in the room, and that light sensor has the URL "https://.../inventory/managedObjects/2480500". POST to the "childDevices" of the room as follows:

    POST /inventory/managedObjects/2549700/childDevices HTTP/1.1
    Content-Type: application/vnd.com.nsn.cumulocity.managedObjectReference+json

    { "managedObject" : { "self" : "https://.../inventory/managedObjects/2480500" } } 

    HTTP/1.1 201 Created