---
order: 60
title: Managing data retention
layout: redirect
---

### <a name="retention-rules"></a>Retention rules

Retention rules gives you control on how long data is stored in your account. You might for example want to store measurements for 90 days, but delete alarms already after 10 days. By default, all historical data is deleted after 60 days (configurable in the system settings).

Retention rules are usually run during the night. When you edit a retention rule, you will not see an immediate effect in the "Usage" section on the Home screen of the Administration application.

Click **Retention rules** in the **Management** menu to view a list of retention rules configured for your account.

<img src="/guides/images/users-guide/Administration/Admin_RetentionRules.png" alt="Retention rules" style="max-width: 50%">

For each rule, the rule name, details on the data to be deleted (fragment type, type and source, see below) and the maximum age in days is provided.

The asterisk ("*") indicates that data with any value will be cleaned up.


**Creating retention rules**

To add additional retention rules, click **Add rule** in the top menu bar. 

<img src="/guides/images/users-guide/addrulepage.png" alt="Add retention rule" style="max-width: 50%">

>**Info**: Per default, an asterisk ("*") is set in all fields except the "Maximum age" field, to include all values.

1. Select the type of data to be cleaned up (alarms, measurements, events, operations, audit logs or all).
2. Enter a fragment type if you want to be more specific about the data to be cleaned up. To clean up all connection loss alarms with this rule, select "alarms" and enter "c8y_UnavailabilityAlarm" as property into the **Type** field.
3. If you want to remove data only from a specific device, enter the device ID into the **Source** field.
4. Enter the **Maximum age** in days (max. allowed value is 10 years in days).
5. Click **Save** to create the rule.

>**Info**: Alarms are only removed if they are in CLEARED state.

<img src="/guides/images/users-guide/Administration/Admin_RetentionRulesDelete.png" alt="Delete retention rule" style="max-width: 50%">

To delete a rule, hover over it and click the **Delete** button at the right.


### <a name="files"></a>Managing files in the file repository

The file repository provides an overview of the files stored in your account.

Click **Files repository** in the **Management** menu to see a list of files. 

The files listed can come from various sources. They can be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded from the **Own applications** page. 

For each file, the name of the file, its owner, the file type (i.e. image/bmp, text/csv), its size and the date when it was last updated is provided.

<img src="/guides/images/users-guide/Administration/Admin_FilesRepository.png" alt="Files Repository" style="max-width: 100%">

To upload a file from your computer, click **Upload file** in the top menu bar.

To download a file from your account, click the menu icon and from the context menu select **Download**.

To delete a file from your account, click **Delete** in the context menu.

>**Info**: If the file corresponds to an active application, it cannot be deleted. You first need to remove or upgrade the application to be able to delete it.
