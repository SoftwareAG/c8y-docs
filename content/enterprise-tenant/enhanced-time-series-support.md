---
weight: 120
title: Enhanced time series support
layout: bundle
outputs:
  - html
  - json
sector:
  - platform_administration
helpcontent:
  - label: enhanced-time-series-support
    title: Time series migration
    content: "The **Time series migration** page displays the migration status for the current tenant and its subtenants. From this page, you can schedule the selected tenants for migration. Migrated tenants require user approval and provide the option to remove legacy collection afterwards.\nNote that you might observe difficulties during migration if the DataHub application is subscribed. To learn more refer to [Analytics > DataHub](https://cumulocity.com/docs/datahub/datahub-overview/)."
---

The {{< product-c8y-iot >}} Operational Store provides an enhanced time series support (so-called time series collections) for measurements data. The following section summarizes how to enable/disable this feature.

{{< c8y-admon-info >}}
The enhanced time series support might be enabled for new tenants by default from a platform administrator.
{{< /c8y-admon-info >}}

### To configure time series support {#to-configure-time-series-support}

The enhanced time series support can be configured via a REST API as a tenant configuration.
The following example illustrates how to **enable** time series collections for a subtenant:

```http request
POST {sub-tenant-url}/tenant/options
Content-Type: application/json
{
    "category": "configuration",
    "key": "timeseries.mongodb.collections.mode",
    "value": "ENABLED"
}
```

The following example illustrates how to **disable** time series collections for a subtenant:

```http request
POST {sub-tenant-url}/tenant/options
Content-Type: application/json
{
    "category": "configuration",
    "key": "timeseries.mongodb.collections.mode",
    "value": "DISABLED"
}
```
{{< c8y-admon-info >}}
Tenant options are not inheritable from the parent tenant, that is, enabling the property on the {{< enterprise-tenant >}} does not affect the subtenants.
{{< /c8y-admon-info >}}

### Implications of the configuration {#implications-of-the-configuration}

The configuration affects the collection that stores measurement data.
By enabling or disabling the property, the system switches collections in the background.
This might lead to a situation where data resides in multiple collections.
To prevent such situations, configure the property only at the beginning of a tenant setup, ideally when no measurement data is stored yet.
Migration and seamless configuration will be part of future releases.

{{< c8y-admon-important >}}
Once enabled, avoid switching the property back to `DISABLED` as this can lead to experience data loss. Do this only in case of an issue or emergency.
{{< /c8y-admon-important >}}

### Unsupported APIs {#unsupported-apis}

The following APIs are not supported and do not have a replacement:

* `GET /measurement/measurements/{id}`
* `DEL /measurements/measurement/{id}`

The following API is partially supported:

* `DEL /measurements/measurement/`

In release 10.16+ the parameters `dateFrom` and `dateTo` are supported and must be truncated to full hours (for example, `2022-08-19T14:00:00.000Z`), otherwise an error is returned.

### To check whether time series collections are enabled {#to-check-whether-time-series-collections-are-enabled}

With the following request, you can check the value of the time series collections property:

```http request
GET /tenant/options/configuration/timeseries.mongodb.collections.mode
Content-Type: application/json
```

An example response if the configuration is enabled:

```JSON
{
"category": "configuration",
"key": "timeseries.mongodb.collections.mode",
"value": "ENABLED"
}
```

If the configuration is not set for the tenant at all, you will get a 404 response code for the request above.

### To trigger time series migration {#to-trigger-time-series-migration}

The administrator user can trigger the migration to time series collection via user interface of a plugin <provide the name of the plugin>, which is installed in the Administration application by default. Optionally, the plugin can be installed in other applications on {{< management-tenant >}} or {{< enterprise-tenant >}}.
The plugin provides an opportunity to migrate to time series collection for the current ({{< management-tenant >}} or {{< enterprise-tenant >}}) and for the list of subtenants, where you can select a specific tenant for the migration.

To start the tenant migration follow the steps below:

1. Navigate to **Migration > Time series** in the application where the plugin is installed (Administration by default).
2. Select the tenant you want to trigger the migration for from the list of available tenants.
3. Hover over on the row of tenant in the tenant list, then click appeared button **Add to queue** and confirm operation. Tenant migration status should be updated to *Queued*.
4. When migration process will be triggered its status for the tenant should be changed from *Queued* to *In progress*.
After the data will be processed, verified and migrated to the new collection the user can confirm progress by clicking **Approve and finish migration**.
5. Confirmation pop-up will appear to inform the user that the new format for time series measurements is going to be used after confirming the migration.
6. Accepting confirmation pop-up changes status of the migration to *Approved*.
7. After seven days, the legacy measurements collection will be deleted and the migration status will be changed to **Completed**.

{{< c8y-admon-info >}}
Migration of measurements can be cancelled when a tenant has the status **Queued**. After the status changed to **In progress**, the process can no longer be stopped. However, if you will not approve the migration manually, the migration stays in the status **Verified**.
{{< /c8y-admon-info >}}

### Progress monitoring {#progress-monitoring}

When a migration is being executed, you can monitor its progress in the **Ongoing migration** section. Here, you can see: what tenant is being migrated, what time range of data will be migrated, who started the migration. On the right side, you can see the percentage indicator showing how much data has already been migrated to the new collection.

{{< c8y-admon-important >}}
You can add more than one tenant into the migration queue, but migration will be executed only for one tenant at a time. It means that we won't start the migration of the next tenant in the queue, until you approve the previously migrated tenant to transition from **Verified** to **Complete** status.
{{< /c8y-admon-important >}}
