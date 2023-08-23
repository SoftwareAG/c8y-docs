---
weight: 20
title: Configuring columns
layout: redirect
---

The columns shown in the device list may be configured to your needs.

### To show/hide standard columns {#to-showhide-standard-columns}

1. In the table header, click **Configure columns**.
2. In the resulting dropdown, select/clear the checkboxes for all columns as required.

The device list will reflect your changes and only show the selected columns.

### To add custom columns {#to-add-custom-columns}

Moreover, you can add custom columns to show additional device properties.

1. In the **Configure columns** dropdown, click **Add custom column**.<br>
   ![Configure columns](/images/users-guide/DeviceManagement/devmgmt-device-list-custom-column.png)<br>
2. In the **Header** field, enter a header for the new custom column.
3. In the **Fragment path** field, enter the property of the device to be shown. Nested properties will be accepted. However, for nested properties its only possible to select {{< product-c8y-iot >}} standard fragments like `c8y_Mobile.mcc`.
4. Switch the **Add another column after saving this one** toggle to active to create another custom column right after saving the current one without leaving the dialog.
5. Click **Save**.

The new column will be added and displayed in the device list.

{{< c8y-admon-info >}}
While standard columns can only be shown/hidden as required, custom columns may be deleted permanently.
{{< /c8y-admon-info >}}
