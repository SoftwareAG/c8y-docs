---
weight: 15
title: Measurement fragments
layout: redirect
---

A measurement can be broken into individual measurement fragments. This can be done for each fragment and series present in the measurement. Use `MeasurementFragment` when you require filtering based on fragments or series.

Instead of listening for all measurements and looking inside a dictionary, you can listen for measurement fragments directly. This improves listener performance. 

You can also use measurement fragments when you have just a single fragment and series. This makes coding simpler.

For your EPL application, you can enable having both, complete measurements and measurement fragments, or you can chose to only have complete measurements.

To customize the setting of the measurement format, you need to change the tenant options by sending a REST request to Cumulocity IoT. Specify one of the following values in the REST request: 

- `MEASUREMENT_ONLY` - listens for complete measurements only (default).
-  `BOTH` - listens for both, complete measurements and measurement fragments. 

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

You can also change the tenant options using the command line. For example, specify the following when using the curl command-line tool (see https://curl.haxx.se/ for detailed information on curl):

```
curl --user User123 -X POST -H 'Content-Type: application/json' -d '{"category": "apama", "key": "measurementFormat", "value": "BOTH"}' -k https://mytenant/tenant/options
```

See also [Tenants](/reference/tenants/) in the *Reference guide*.

