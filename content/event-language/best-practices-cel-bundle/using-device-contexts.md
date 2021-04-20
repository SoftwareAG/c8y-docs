---
weight: 30
title: Using device contexts
layout: redirect
aliases:
  - /event-language/best-practises#using-device-contexts
---

If you need a device context, it is usually not necessary to put every statement into context.
If you use aggregation of measurements most of the time you only need the context in the statement that executes the actual aggregation.
It is a useful concept to develop the module completely without the context first and add it at the end to those statements where the context applies.