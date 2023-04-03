---
weight: 60
title: Managing data
helpcontent:
- label: retention-rules
  title: Retention rules
  content: "Retention rules gives you control on how long data is stored in your account. By default, all historical data is deleted after 60 days (configurable in the system settings). You can however store measurements for 90 days for example, but delete alarms already after 10 days."
- label: files
  title: Files repository
  content: "The file repository provides an overview of the files stored in your account. The files can come from various sources. They can be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded from the **Own applications** page."
---

<a name="retention-rules"></a>
### Retention rules

**Retention rules** give you control on how long data is stored in your account. By default, all historical data is deleted after 60 days (configurable in the system settings by the platform administrator). You might however want to store measurements for 90 days for example, but delete alarms already after 10 days.

{{< c8y-admon-info >}}
Retention rules are usually run during the night. When you edit a retention rule, you will not see an immediate effect in the **Usage** section on the **Home** screen of the Administration application.
{{< /c8y-admon-info >}}

{{< c8y-admon-related >}}
- [Enterprise tenant > Managing tenants > Tenant policies](/users-guide/enterprise-tenant/#tenant-policies) in the <i>User guide</i> for details on the creation of tenant policies and retention rules on tenant level.
- [Retention rules](https://{{< domain-c8y >}}/api/core/{{< c8y-current-version >}}/#tag/Retention-rules) in the {{< openapi >}} for details on managing retention rules via REST.
{{< /c8y-admon-related >}}


<a name="view-retention-rule"></a>
#### To view retention rules

Click **Retention rules** in the **Management** menu to view a list of retention rules configured for your account.

<img src="/images/users-guide/Administration/admin-retention-rules.png" alt="Retention rules">

For each rule, the rule name, details on the data to be deleted (fragment type, type and source, see below) and the maximum age in days is provided.

The asterisk ("*") indicates that data with any value will be cleaned up.

#### Data types

The following data types are covered under retention rules:
+ Alarms
+ Audits
+ Bulk operations
+ Events
+ Measurements
+ Operations

{{< c8y-admon-info >}}
Retention rules do not apply to files stored in the files repository.
{{< /c8y-admon-info >}}

<a name="add-retention-rule"></a>
#### To add a retention rule

1. Click **Add rule** in the top menu bar.
2. In the resulting dialog box, select the type of data to be cleaned up (alarms, measurements, events, operations, audit logs or all).
3. Enter a fragment type if you want to be more specific about the data to be cleaned up. To clean up all connection loss alarms with this rule, select "Alarm" and enter "c8y_UnavailabilityAlarm" as property into the **Type** field.
4. If you want to remove data only from a specific device, enter the device ID into the **Source** field.
5. Enter the **Maximum age** in days (max. allowed value is 10 years in days).
6. Click **Save** to save your settings.

The retention rule will be added to the list.

{{< c8y-admon-info >}}
Per default, an asterisk ("*") is set in all fields except the **Maximum age** field, to include all values.
Alarms are only removed if they have a status of CLEARED.
{{< /c8y-admon-info >}}



#### To edit a retention rule

Simply click the row of the rule you want to edit.

For details on the fields, see [To add a retention rule](#add-retention-rule).


#### To delete a retention rule

Hover over the row with the rule you want to delete and click the delete icon that appears on the right.

All retention rules are executed sequentially and independent of each other. So if we have two retention rules, a more specific one with a greater maximum age that defines a subset of the documents that are defined by a more common rule with a lower maximum age, then effectively it will work as if we had a single, more common rule.

For example given the two following rules:

| **Data type** | **Fragment type** | **Type**        | **Source** | **Maximum age** |
|---------------|-------------------|-----------------|------------|-----------------|
| MEASUREMENT   | *                 | c8y_Temperature | *          | 30 days         |
| MEASUREMENT   | *                 | c8y_Temperature | 12345      | 60 days         |

All measurements with the type `c8y_Temperature` which are older than 30 days will be removed, including those where the source equals `12345`.

On the other hand when we have the following retention rules defined:

| **Data type** | **Fragment type** | **Type**        | **Source** | **Maximum age** |
|---------------|-------------------|-----------------|------------|-----------------|
| MEASUREMENT   | *                 | c8y_Temperature | *          | 30 days         |
| MEASUREMENT   | *                 | *               | *          | 60 days         |

The retention process removes the measurements with the type `c8y_Temperature` which are older than 30 days, all other measurements will be removed when they are older than 60 days.

{{< c8y-admon-info >}}
The source parameter is the ID of the device. When it is defined, the retention process only removes the documents directly related to the device represented by the source, not its children or groups it belongs to.
{{< /c8y-admon-info >}}

<a name="files"></a>
### Managing files in the file repository

The file repository provides an overview of the files stored in your account.

Click **Files repository** in the **Management** menu to see a list of files.

The files listed can come from various sources. They can be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded from the **All applications** page.

For each file, the name of the file, its owner, the file type (for example, image/bmp, text/csv), its size and the date when it was last updated is provided.

<img src="/images/users-guide/Administration/admin-files-repository.png" alt="Files Repository" style="max-width: 100%">

#### To upload a file from your file system

Click **Upload file** in the top menu bar. In the resulting dialog box, select a file to be uploaded. If you want to upload more than one file, click **Add file** to select another file. You may also delete a file before uploading by clicking the delete icon on the right of the file field.


#### To download a file from your account

Click the menu icon at the right of the respective row and then click **Download**.


#### To delete a file from your account

Click the menu icon at the right of the respective row and then click **Delete**.

{{< c8y-admon-info >}}
If the file corresponds to an active application, it cannot be deleted. You must first remove or upgrade the application to be able to delete it.
{{< /c8y-admon-info >}}
