---
weight: 15
title: Measurement fragments
layout: redirect
---

A measurement can be broken into individual measurement fragments. This can be done for each fragment and series present in the measurement. See [Cumulocity's domain model](/concepts/domain-model/) in the *Concepts guide* for more information on fragments. 

Listen for events of type `MeasurementFragment` when you require filtering based on fragments or series, instead of listening for `Measurement` events and looking inside the `measurements` dictionary. To listen for measurement fragments, you must change the default behavior for the measurement format as described below.

For your EPL application, you can either have only complete measurements (default) or both complete measurements and measurement fragments. For more information, see [Using measurement fragments](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-5/apama10-5/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_using_measurement_fragments.html) in the Apama documentation.

To customize the setting of the measurement format, you need to change the tenant options by sending a REST request to Cumulocity IoT. Specify one of the following values in the REST request: 

- `MEASUREMENT_ONLY` - listens for complete measurements only (default).
- `BOTH` - listens for both, complete measurements and measurement fragments. 

Specify a category and key with the above value:

- The category is `apama`.
- The key is `measurementFormat`.

For example, specify the following to set the measurement format value to send both, complete measurements and measurement fragments:

```
{
   "category": "apama",
   "key": "measurementFormat",
   "value": "BOTH"
}
```
See [Changing the tenant options](/apama/advanced/#tenant-options) for more information.
