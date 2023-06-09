---
weight: 30
title: Managing software
layout: redirect
---

In the software repository, {{< product-c8y-iot >}} offers to collect reference software for devices. Multiple software packages can be installed on a device.

### To view software

Click **Software repository** in the **Management** menu in the navigator.

The available software objects will be displayed as a list.

![Software list](/images/users-guide/DeviceManagement/devmgmt-software-repository.png)

Each entry shows the software name, the device type it is applicable for (if set), the software type (if set), and a badge indicating if and how many versions are available for a particular software.
The values in every column except for the **Versions** column can be filtered and sorted by clicking the filter and sort icons in the column header.

When clicking on an entry, the details for this software are displayed along with all available versions.

![Software details](/images/users-guide/DeviceManagement/devmgmt-software-details.png)

At the top, the software name, a description, an optional device type filter(s), and a software type are shown.
If a device type filter is set, the software will show up for installation only for devices of that type.
If no filter is set, it will be available for all devices.
The software type will make the software installable only on devices that specifically support the particular software type.

{{< c8y-admon-info >}}
The **Software type** field suggests you a list of types already used in your software repository. Before you consider defining a new software type (the field accepts new values directly) check if the type you need has already been defined before for another software by looking at the suggestions in the dropdown. This will help you keep software types consistent within your organization. If you use, for example, container images you may look for `container` or `image`, or try to search for more specific types like `docker`, `lxc`, and so on. This may prevent you from scattering your software types and using different names for effectively the same software type.
{{< /c8y-admon-info >}}

The list of versions shows the version name and the name of the software binary.
The versions are ordered by their creation time (descending).

### To add a new software or software version

1. In the **Software repository** page, click **Add software** at the right of the top menu bar.
2. In the resulting dialog box,
	* to add a new software, enter a name for the software (and confirm it by clicking **Create new** in the resulting window), a description, and its version (all required).
	* to add a new version, select the software for which you want to add a new version from the dropdown list in the **Software** field and enter a version.
3. Optionally, you can define the device type filter when adding a new software.
4. Define the software type. It will make the software installable only on devices that have declared to support the particular software type.
5. Either upload a binary from the file system or specify a URL from where the software can be downloaded.
6. Click **Add software**.

![Add software](/images/users-guide/DeviceManagement/devmgmt-software-add.png)

The software object will be added to the software list or the software version will be added to the software details and the version count label will be updated accordingly.

If you click **Add software** from within the details of a specific software, the dialog box looks slightly different as the software is already selected. Enter the new version number and upload a binary or provide a file path.

### To edit a software

1. Click the menu icon at the right of a specific software item and in the context menu click **Edit**.
2. Update the name, description, device type filter or software type by clicking the pencil icon next to it. Make the desired changes and click **Save**.

The software will be updated accordingly.


### To delete a software

Click the menu icon at the right of a specific software item and in the context menu click **Delete**.

The software and all its versions will be deleted from the software repository.

### To delete a software version

In the details of a specific software, hover over the version entry you want to delete and click the delete icon. The software version will be deleted from the software details.
