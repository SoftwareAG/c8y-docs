---
weight: 110
title: Logs
layout: redirect
---

In the **Logs** tab you can manage log information from devices.

### To request log information

1. In the **Logs** tab, click **Request log file** at the right of the top menu bar.
2. In the resulting dialog box, specify a date and time range for the log information.
3. Select the type of log from the dropdown field. The supported logs listed are usually device-specific.
4. Optionally, specify a text filter. For example, if you enter "Users", only lines including the term "Users" will appear in the returned log information.
5. Specify the maximum number of lines to be returned (counted from the end). The default value is 1000.
1. Click **Request log file**.

The log information will be requested from the device.

![Logs tab](/images/users-guide/DeviceManagement/devmgmt-devices-logs.png)

>Requesting a log from a device may take some time.

After the log has been transferred from the device to {{< product-c8y-iot >}}, it will be listed in the **Logs** tab. The row in the list shows the requested log time range.

Click on the entry in the list to show the entire log information.

### To download a log

Hover over a row and click the download icon, to download the log excerpt to your file system.

### To delete a log

Hover over a row and click the delete icon, to delete the log information.
