---
weight: 20
title: Careful definition of additional columns and filter predicate
layout: redirect
---

An offloading configuration allows you to specify additional columns to be offloaded as well as filter predicates for filtering the data. For both settings, you should carefully think about which data you actually need for your processing.  Data being filtered out can not be retrieved any more. Even if you adapt the filter predicate afterwards, the data which would have qualified in previous offloading executions will not be offloaded. On the other side, data which definitely will be irrelevant for further analysis should not be included in the offloading process.

