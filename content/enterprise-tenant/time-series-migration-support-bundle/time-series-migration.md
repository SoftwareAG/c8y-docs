---
weight: 20
title: Time series migration
layout: redirect
---


Tenant administrator user can schedule his tenant or any subtenant for migration to time series collection.  The controls for doing so available in **Administration** application and subscribed by default.

{{<c8y-admon-req>}}
Application access:
* Users must have access to the Administration application.
* Users must have timeseries-microservice subscribed to tenant

The user must have following permissions "Tenant management":
* To view all tenants: READ permission.
* To create tenants and perform activity permitted by UPDATE permission: ADMIN permission.
{{</c8y-admon-req>}}

### To trigger time series migration {#to-trigger-time-series-migration}

To start the tenant migration follow the steps below:

1. Navigate to **Migration > Time series** in the application where the plugin is installed. By default this is the Administration application.
2. Select the tenant you want to trigger the migration for from the list of available tenants.
3. Hover over the row of the tenant in the tenant list, then click **Add to queue** and confirm the operation. The tenant migration status should be updated to **Queued**.
4. When the migration process is triggered its status for the tenant should changed from **Queued** to **In progress**.
After the data is processed, verified and migrated to the new collection, confirm progress and click **Approve and finish migration**.
5. A confirmation pop-up informs you that the new format for time series measurements is going to be used after confirming the data migration process, after seven days the legacy collection will be removed and the action of approval is irreversible. Click **Confirm** to proceed.
6. Accepting the confirmation pop-up changes the status of the migration to **Approved**.
7. After seven days, the legacy measurements collection is deleted and the migration status is changed to **Completed**.

{{< c8y-admon-info >}}
The migration of measurements can be cancelled when a tenant has the status **Queued**. After the status changed to **In progress**, the process can no longer be stopped. However, if you do not approve the migration manually, the migration stays in the status **Verified**.
{{< /c8y-admon-info >}}

### Progress monitoring {#progress-monitoring}

When a migration is being executed, you can monitor its progress in the **Ongoing migration** section. Here, you can see: 
* What tenant is being migrated, 
* What time range of data will be migrated, and
* Who started the migration. 

On the right side, you can see the percentage indicator showing how much data has already been migrated to the new collection.

{{< c8y-admon-important >}}
You can add more than one tenant into the migration queue, but migration is executed only for one tenant at a time. It means that the migration of the next tenant in the queue will not start until you approve the previously migrated tenant to transition from **Verified** to **Complete** status.
{{< /c8y-admon-important >}}
