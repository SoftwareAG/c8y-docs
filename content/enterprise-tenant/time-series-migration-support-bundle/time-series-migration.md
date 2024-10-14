---
weight: 20
title: Time series migration
layout: redirect
# sector:
#   - platform_administration
---


The administrator user can trigger the migration to time series collection via user interface of a plugin <provide the name of the plugin>, which is installed in the Administration application by default. Optionally, the plugin can be installed in other applications on {{< management-tenant >}} or {{< enterprise-tenant >}}.
The plugin provides an opportunity to migrate to time series collection for the current ({{< management-tenant >}} or {{< enterprise-tenant >}}) and for the list of subtenants, where you can select a specific tenant for the migration.

### To trigger time series migration {#to-trigger-time-series-migration}

To start the tenant migration follow the steps below:

1. Navigate to **Migration > Time series** in the application where the plugin is installed (Administration by default).
2. Select the tenant you want to trigger the migration for from the list of available tenants.
3. Hover over the row of the tenant in the tenant list, then click **Add to queue** and confirm the operation. The tenant migration status should be updated to **Queued**.
4. When the migration process is triggered its status for the tenant should changed from **Queued** to **In progress**.
After the data is processed, verified and migrated to the new collection, confirm progress and click **Approve and finish migration**.
5. A confirmation pop-up will inform the user that the new format for time series measurements is going to be used after confirming the data migration process, after 7 days legacy collection will be removed and the action of approval is irreversable. Click **Confirm** to proceed.
6. Accepting the confirmation pop-up changes the status of the migration to **Approved**.
7. After seven days, the legacy measurements collection will be deleted and the migration status will be changed to **Completed**.

{{< c8y-admon-info >}}
Migration of measurements can be cancelled when a tenant has the status **Queued**. After the status changed to **In progress**, the process can no longer be stopped. However, if you will not approve the migration manually, the migration stays in the status **Verified**.
{{< /c8y-admon-info >}}

### Progress monitoring {#progress-monitoring}

When a migration is being executed, you can monitor its progress in the **Ongoing migration** section. Here, you can see: what tenant is being migrated, what time range of data will be migrated, who started the migration. On the right side, you can see the percentage indicator showing how much data has already been migrated to the new collection.

{{< c8y-admon-important >}}
You can add more than one tenant into the migration queue, but migration will be executed only for one tenant at a time. It means that we won't start the migration of the next tenant in the queue, until you approve the previously migrated tenant to transition from **Verified** to **Complete** status.
{{< /c8y-admon-important >}}
