---
weight: 30
title: Machine dashboard
layout: redirect
---




The machine dashboard offers a detailed view about the current status and development of the OEE of the machine.

![Machine dashboard](/images/oee/dashboards/dashboard-machine-dashboard.png)

At the top you find the general information (such as profile name or alarm status) provided in the **Machine Park Overview**, followed by the [**OEE status**](#oee-status) section and [**OEE data**](#data) section.

By default, the **Auto-refresh** option at the top left is activated and [**OEE status**](#oee-status) and [**OEE data**](#data) information is updated automatically according to the selected resolution. Switch the toggle to deactivate it.

Click **Andon Board** at the right of the top menu bar to switch to the **Andon Board** of this particular machine, see [Andon Board](#andon-board).

Click **Edit configuration** at the right of the top menu bar to edit the machine profile in the profile configurator, see [Creating machine profiles](/oee/oee-administration/#machine-profiles). This link is only visible if the user has a role assigned with the Oeeconfigurator Admin permission enabled.

{{< c8y-admon-info >}}
To access the OEE dashboards, the permission "Oeeconfigurator" with type READ or ADMIN must be enabled for the user/role. Without the required permission you might see error messages or not see any data in the machine dashboard.
{{< /c8y-admon-info >}}

#### Time period and resolution

In the **Time frame** dropdown field you can select a time period (for example "Last hour", "Last week") for which the OEE values will be displayed in the [**OEE status**](#oee-status) and [**OEE data**](#data) sections. Select "User-defined" from the dropdown list to specify an individual time period.

In the **Resolution** dropdown field you can select the resolution for the selected time period. The available resolutions (up to 4; for example 1 minute, 10 minutes, 1 hour, 8 hours) are configured during the profile creation, see [Creating machine profiles](/oee/oee-administration/#machine-profiles).

{{< c8y-admon-info >}}
If the selected time frame is "last hour" you can set the resolution to 1 minute and 10 minutes, but other resolutions that are equal or longer than 1 hour, won't be offered.
{{< /c8y-admon-info >}}

<a name="oee-status"></a>
### OEE status

In the **OEE status** section, the values for OEE, Availability, Performance and Quality according to the selected time frame and resolution are shown.

![OEE status](/images/oee/dashboards/dashboard-oee-status.png)

Below these values the losses caused by Availability, Performance and Quality are displayed in terms of time and amount.

{{< c8y-admon-info >}}
If you have selected the section view and a shift is selected (see below), the **OEE status** section displays the OEE and the losses for the entire shift.
{{< /c8y-admon-info >}}

<a name="data"></a>
### Data

In the **Data** section, two types of data charts are available, the *single view* and the *section view*, which can be selected at the top.

In each view, the components being displayed in the chart, like for example OEE, Availability, Performance, and Quality, can be selected at the right by activating/deactivating the respective toggles.

#### Single view

The single view chart shows the current values of the selected components for the specified time frame. The resolution interval equals the Potential Production Time.

![Single view](/images/oee/dashboards/dashboard-single-view.png)

{{< c8y-admon-info >}}
The time frame does not influence the direct calculation of the OEE. It only defines the time period for which the OEE is displayed here.
{{< /c8y-admon-info >}}

#### Section view

The section view chart shows the development of the OEE variables over a certain time period.

![Section view ](/images/oee/dashboards/dashboard-section-view.png)

Here, the Potential Production Time is no longer a fixed period, specified by the user, but a growing period, which is always extended by a certain interval, the resolution interval. If the Potential Production Time is as long as the specified time frame, it does no longer grow, but shifts forward by the interval (if auto-refresh is activated).

The following example shows the development of the section view during major Quality Losses. The drop in OEE (purple line) during the loss phase is clearly visible.

![Section view chart 2](/images/oee/dashboards/dashboard-section-view-chart-2.png)

![Section view chart 3](/images/oee/dashboards/dashboard-section-view-chart-3.png)

{{< c8y-admon-info >}}
Implausible values are taken into consideration for the section view calculation. Most implausible values are caused by a too low Ideal Cycle Amount. Even if implausible conductivity values arise over short periods of time, this will pay off over a longer interval. In order to obtain meaningful values for a shift, it is therefore useful to calculate with implausible values.
{{< /c8y-admon-info >}}

### Pareto chart

The **Pareto** chart shows the loss ranking according to Pareto. The Pareto principle assumes that 80 % of the losses can be attributed to 20 % of the causes of defects.

The losses can be shown in relation to pieces or time by switching the toggle at the top right.

If all losses are 0, the OEE is 100%. Since this is not possible in reality, as OEE is always measured against an ideal, there are always losses shown in the Pareto chart.

![Pareto chart](/images/oee/dashboards/dashboard-pareto-chart.png)

The faults that cause the most damage are listed first. It thus supports the decision-making by recommending the order in which the causes of faults should be eliminated.

In the Pareto chart on the right, all losses, divided into the areas Availability, Performance and Quality, are displayed and put in relation to each other. In this case, the Availability Losses make up 52.74% of the total losses. In a future version, the three main losses can be divided into further categories to better identify sources of faults.


### Alarm list

Click the alarm icon at the top to display the alarm list at the bottom of the machine dashboard.

![Alarm list](/images/oee/dashboards/dashboard-alarm-list.png)

The alarm list shows the following information for each alarm: ID, type, timestamp (time of occurrence) and severity.

The alarms can be filtered by severity:

![Alarm severity](/images/oee/dashboards/dashboard-alarm-severity.png)

{{< c8y-admon-info >}}
Only alarms belonging to the OEE calculation are displayed in the alarm list. Other alarms (for example machine alarms) are not shown here.
{{< /c8y-admon-info >}}

Clicking the arrows expands (or collapses) the alarm and shows (or hides) more detailed information.

![Alarm details](/images/oee/dashboards/dashboard-alarm-details.png)

To delete an alarm from the list, click the delete icon at the right of the respective row.

{{< c8y-admon-info >}}
Each alarm generated by the OEE application has a status flag "Oeedeleted", which is set to "true" on deletion. Alarms that are deleted in this way are only deleted from the alarm list and the alarm continues to exist in the {{< product-c8y-iot >}} platform. Alarms triggered by the OEE application always have the status CLEARED. For more information on the status of alarms and how to treat them, see the [{{< openapi >}}](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#tag/Alarm-API).
{{< /c8y-admon-info >}}

### Export CSV

Click **Export as CSV** at the right. The **Export** page in the Cockpit application will open.

1. Click **Add export** in the top menu bar.
2. Enter a name for the export and select the file type (CSV is the default) for the output.
3. In the **Filters** section, select **Objects to export**, enter the profile name to be exported and select it from the list.
4. In the **Fields** section, turn **Managed objects** on, and add the following columns:
    * OEE Profile > @com_adamos_oee_datamodel_MachineOEEConfiguration
    * Cumulocity ID > ID of the OEE calculation profile
    * Name > name
<br><br>
    ![Managed objects](/images/oee/dashboards/dashboard-export-csv-4-2.png)

    {{< c8y-admon-info >}}
  Column names are user defined, whereas the path is the fragment name of the managed object.
    {{< /c8y-admon-info >}}

5. Click **Save & close** to save your configuration.

6. Select the checkbox in front of your export in the export list and at the left of the top menu bar click **Export**.

An email will be sent to the user email address containing a link to the export file.

See also [Cockpit > Managing exports](/users-guide/cockpit/#exports) for details on the export functionality.


<!--
#### Shifts

If shifts are stored in the xHub Shift Plan Service, they can be selected here. By switching to the section view the OEE of the shift is calculated, therefore only OEE values calculated during the phase "PRODUCTION" are taken into account. Values during the Phase "NON-PRODUCTION" or "BREAK" will be ignored.

Exercise: Creating a shift.
<br>
Shifts can be created using [Swagger documentation](https://services.adamos-hub.dev/shift-service/swagger-ui.html#/shift/searchShiftsUsingGET).

Please note: Shifts of one location can't overlap, that means you are not able to enter this:

"Shift 1 End: 2019-08-05T12:00:00
<br> Shift 2 Start: 2019-08-05T12:00:00" ... instead you must enter this:

"Shift 1 End: 2019-08-05T11:59:59" &nbsp;or "Shift 2 Start: 2019-08-05T12:00:01"

#### Shifts

Shift phases are visible in the OEE chart, the correct phase name will be displayed when pointing on the regarding values (1st picture).<br>
Different phases are represented by different connecting lines in the graph (2nd picture).

![Shift in graph](/images/oee/dashboards/dashboard-shift-in-graph-1.png)

![Shift in graph](/images/oee/dashboards/dashboard-shift-in-graph-2.png)

-->
