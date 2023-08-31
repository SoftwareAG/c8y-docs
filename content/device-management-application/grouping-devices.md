---
weight: 30
title: Grouping devices
layout: bundle
outputs:
  - html
  - json
section:
  - device_management
helpcontent:
  - label: grouping-devices
    title: Grouping devices
    content: "Devices can be grouped according to your requirements. A device can be located in multiple groups and groups themselves can again be part of multiple groups.


    Select a group from the groups list or from the navigator to see its details. To add a group, click **Add group** at the top right.

    You can easily restructure groups or assign devices to groups by dragging and dropping groups or devices in the navigator."
---

{{< c8y-admon-related >}}
* [Application enablement & solutions > Cockpit > Managing assets > Assets hierarchy](/cockpit/managing-assets/#asset-hierarchy) for information on the asset hierarchy, assets and groups.
* [Platform administration > {{< standard-tenant >}} administration > Managing permissions > Inventory roles](/standard-tenant/managing-permissions/#inventory-roles) on how to assign inventory roles to groups of devices.
* The [managed objects API](https://cumulocity.com/api/core/{{< c8y-current-version >}}/#tag/Managed-objects) for REST API methods concerning managed objects (devices or groups of devices).
* The [bulk operations API](https://cumulocity.com/api/core/{{< c8y-current-version >}}/#tag/Bulk-operations) for REST API methods concerning bulk operations.
{{< /c8y-admon-related >}}

Devices can be grouped according to a particular use case. A device can be located in multiple groups and groups themselves can again be part of multiple groups.

{{< product-c8y-iot >}} distinguishes between top-level groups and subgroups:

* **Top-level groups** are shown in the **Group** menu in the navigator at top-level.
* **Subgroups** can be used to further subdivide top-level groups.
