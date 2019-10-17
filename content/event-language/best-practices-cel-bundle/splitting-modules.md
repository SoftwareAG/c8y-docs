---
weight: 40
title: Splitting modules
layout: redirect
aliases:
  - /event-language/best-practises#splitting-modules
---

If your module gets really big it might be helpful to split it into multiple modules.
If you declare schematas or functions they will be available in all modules of your tenant.
A good approach can be:

* Module 1: filtering incoming data and load additional data from database
* Module 2: Calculation
* Module 3: Creating data in database

Keep in mind that this will create dependencies within the modules (e.g. module 2 needs a schema defined in module 1). You must avoid circular dependencies.

