---
weight: 20
title: Careful definition of additional columns and filter predicate
layout: redirect
---

An offloading configuration allows you to specify additional columns to be offloaded as well as filter predicates for filtering the data. For both settings, you should carefully think about which data you actually need for your processing. Data being filtered out cannot be retrieved any more. Even if you adapt the filter predicate afterwards, the data which would have qualified in previous offloading executions will not be offloaded. You can, however, stop an offloading, change the configuration to include additional fields, etc., and then restart it. When it is restarted, DataHub Console will ask you whether you want to flush existing data (i.e., re-import) or append. Note that DataHub can only re-import data that is still present in Cumulocity's Operational Store, i.e., be careful with this option and keep in mind that data retention policies in Cumulocity might have deleted data.

On the other side, data which will definitely be irrelevant for further analysis should not be included in the offloading process.



