---
weight: 15
title: Measurement fragments
layout: redirect
---

A measurement can be broken into individual measurement fragments. This can be done for each fragment and series present in the measurement. See [Cumulocity's domain model](/concepts/domain-model/) in the *Concepts guide* for more information on measurement fragments. 

Listen for events of type `com.apama.cumulocity.MeasurementFragment` when you require filtering based on measurement fragments or series, instead of listening for `Measurement` events and looking inside the `measurements` dictionary. For more information, see [Using measurement fragments](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_using_measurement_fragments.html) in the Apama documentation. To listen for measurement fragments, you must change the default behavior for the measurement format as described below. 

To customize the setting of the measurement format, you need to change the tenant options by sending a REST request to Cumulocity IoT. Specify a category, key, and value in the REST request:

- The category is `apama`.
- The key is `measurementFormat`.
- The value is one of the following: 
  - `MEASUREMENT_ONLY` - EPL can listen for complete `Measurement`events only (default).
  - `BOTH` - EPL can listen for both, complete `Measurement`events and `MeasurementFragment` events. 

For example, specify the following to set the measurement format value to send both, complete measurements and measurement fragments:

```
{
   "category": "apama",
   "key": "measurementFormat",
   "value": "BOTH"
}
```
See [Changing the tenant options](/apama/advanced/#tenant-options) for more information.
