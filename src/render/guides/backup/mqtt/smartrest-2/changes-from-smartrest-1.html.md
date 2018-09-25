---
order: 20
layout: redirect
title: Changes from SmartREST 1.0
---

In its base SmartREST 2.0 is like the previous version a CSV-like payload format that is backed by previously created templates to finally create the targeted JSON structure.

Several changes in the functionality have been made:
* Templates no longer contain IDs of objects (instead IDs will be resolved by e.g. MQTT ClientId)
* Managed Objects can be created and retrieved directly with external IDs
* Creating request templates now uses JSON Path (like response templates)
* Support for lists in responses
* Responses also return if only part of the patterns were found
* Declaring a default X-Id for the connection