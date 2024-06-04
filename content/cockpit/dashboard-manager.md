---
weight: 70
title: Dashboard manager
layout: bundle
outputs:
  - html
  - json
section:
  - app_enablement
helpcontent:
  - label: dashboard-manager
    title: Dashboard manager
    content: "This dashboard manager shows a list of device type dashboards by aggregating all dashboards that have a device type assigned. 
    

Dashboards can be removed via the list. Moreover you can view all devices that have access to a particular dashboard. Dashboards can be edited by navigating to the device view."
---

Dashboard manager shows a list of device type dashboards by aggregating all dashboards that have a device type assigned.
It also provides information about the number of devices that have access to a particular dashboard, date of creation and last modification date.

To open Dashboard manager, click **Dashboard manager** in the **Configuration** menu of the navigator.

<img src="/images/users-guide/cockpit/dashboard-manager.png" name="Dashboard manager"/>


### To add a type dashboard {#to-add-type-dashboard}

To add a new dashboard for a device type select the device from the device list in the **Groups** menu, refer to [To create a dashboard](/cockpit/working-with-dashboards/#to-create-a-dashboard) and [Dashboard template](/cockpit/working-with-dashboards/#dashboard-template) for more information. 

### To remove type dashboard {#to-remove-type-dashboard}

Removing type dashboard is possible both from device view and dashboard manager. To remove a dashboard, click **Delete** button on the corresponding row.

{{< c8y-admon-info >}}
Removing type dashboard will remove it from all devices that have access to it. There is no possibility to remove a dashboard from a single device.
{{< /c8y-admon-info >}}

### To edit type dashboard {#to-edit-type-dashboard}

Click edit button on the corresponding row to open list with all devices that has access to the dashboard. 
Click **Open instance** button to navigate to dashboard view in context of the device. Then, see [To edit a dashboard](/cockpit/working-with-dashboards/#to-edit-a-dashboard) for more.

<img src="/images/users-guide/cockpit/dashboard-manager-edit.png" name="Dashboard manager edit"/>
