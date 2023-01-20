---
weight: 120
title: Enhanced time series support
layout: redirect
aliases:
  - /users-guide/enterprise-edition/#timeseires
---

Starting with 10.16, the Cumulocity IoT operational data store has the capability of an enhanced time series support (so-called time series collections) for measurements data. This chapter summarizes how to enable or disable the feature.

{{< c8y-admon-info >}}
The feature might be enabled for new tenants by default from a Cumulocity IoT administrator.
{{< /c8y-admon-info >}}

### How to configure

The feature can be configured via a REST API as a tenant configuration.
The following example illustrates how to _**enable**_ time series collections for a sub-tenant:

```http request
POST {sub-tenant-url}/tenant/options
Content-Type: application/json
{
    "category": "configuration",
    "key": "timeseries.mongodb.collections.mode",
    "value": "ENABLED"
}
```

The following example illustrates how to _**disable**_ time series collections for a sub-tenant:

```http request
POST {sub-tenant-url}/tenant/options
Content-Type: application/json
{
    "category": "configuration",
    "key": "timeseries.mongodb.collections.mode",
    "value": "DISABLED"
}
```

### Implications of the configuration

The configuration affects the collection that stores measurement data.
By enabling or disabling the property, the system switches collections in the background.
This might lead to a situation where data resides in multiple collections.
To prevent such situations, configure the property only at the beginning of tenant setup, ideally when no measurement data is stored yet.
Migration and seamless configuration will be part of future releases.

{{< c8y-admon-info >}}
Once enabled, avoid switching the property back to `DISABLED` as this can lead to experience data loss. Do this only in case of an issue or emergency.
{{< /c8y-admon-info >}}

### Unsupported APIs

The following APIs are not supported and do not have a replacement:

* `GET /measurement/measurements/{id}`
* `DEL /measurements/measurement/{id}`

The following API is no longer supported:

* `DEL /measurements/measurement/`

Instead, you can use retention rules to remove expired measurements data from the operational store.

### How to check whether time series collections are enabled

With the following request, you can check the value of the time series collections property:

GET /tenant/options/configuration/timeseries.mongodb.collections.mode
Content-Type: application/json

An example response if the configuration is enabled:

```JSON
{
"category": "configuration",
"key": "timeseries.mongodb.collections.mode",
"value": "ENABLED"
}
```

If the configuration is not set for the tenant at all, you will get a 404 response code for the request above.