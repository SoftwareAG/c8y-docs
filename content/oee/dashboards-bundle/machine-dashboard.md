---
weight: 30
title: Machine dashboard
layout: redirect
---

The machine dashboard offers a detailed view about the current status and development of the OEE of the machine or line (if an line profile exists).

![Machine dashboard](/images/oee/dashboards/dashboard-machine-dashboard.png)

### Opening the Andon Board

Click **Andon Board** at the right of the top menu bar to switch to the **Andon Board** of this particular machine, see   [Andon Board](#andon-board).


### (2) Enter Quality Data

In case only quality data is to be added, tis can be done directly via te UI. The existing data is overwritten and a new OEE calculation is triggered.&nbsp;For the entered data te same calculation logic is used as for the [CSV upload](/oee/csv-upload/).

How to use:

**1. Step:**<br>
Specify the start time of the first period for which you want to enter the quality data by clickin the button 'Add start time'

![Entering data 1](/images/oee/dashboards/dashboard-manual-date-entry-1.png)

**2. Step:**<br>
After specifying the beginning of the time frame in the first step you can now enter the quality data. By clicking the button 'Add quality data' a new fill out form appears where you have to enter the quality amount that has been produced and the end time of the first period for which you want to upload the quality data. It is possible to change or delete the manual entry at a later time.

By clicking the '*Save*' button you can save the input, which will then be processed by the app.

![Entering data 2](/images/oee/dashboards/dashboard-manual-date-entry-2.png)

**3. Step:**<br>
Entering further quality data is also possible, you can do so by clicking the '+ add quality data' button.

The time of the previous input, which represents the end time of the premeditately time frame, is used as the start time and the time of the current input as end time for the interval of the quality input.

Example: See illustration on the left.

* A quality amount of 10 pieces is entered for the period 7-8 pm.
* A quality amount of 10 pieces is entered for the period 8-9 pm.

![Entering data 3](/images/oee/dashboards/dashboard-manual-date-entry-3.png)



### Export CSV

Click **Export as CSV** at the right. The **Export** page in the Cockpit application will open.

1. Click **Add export** in the top menu bar.
2. Enter a name for the export and select the file type (CSV is the default) for the output.
3. Under **Filters**, select **Objects to export**, enter the profile name to be exported and select it from the list.
4. Under **Fields**, turn **Managed objects** on, and add the following columns:
  * <br>"OEE Profile" - > "@com_adamos_oee_datamodel_MachineOEEConfiguration"
  * <br>"Cumulocity Id" - >id
  * <br>"Name" -> name

>**Info**: Column names are user defined, whereas the path is the fragment name of the managed object.


See also [Cockpit > Managing exports](/users-guide/cockpit/#exports/) for details on the export functionality. 

![Step 4](/images/oee/dashboards/dashboard-export-csv-4-1.png)
![Step 4](/images/oee/dashboards/dashboard-export-csv-4-2.png)

**Step 5**<br>
After all the mandatory fields are filled, click on "**Save & close**"

![Step 5](/images/oee/dashboards/dashboard-export-csv-5.png)

**Step 6**<br>
Select the profile you want to export

![Step 6](/images/oee/dashboards/dashboard-export-csv-6.png)

**Step 7**<br>
Click on "**Export**" button on top-left corner

![Step 7](/images/oee/dashboards/dashboard-export-csv-7.png)

Profile is mailed to the user email address.

**Example:**

File with exported data can be downloaded from [https://adamosoeedev01.adamosdev.com/inventory/binaries/29966297](https://adamosoeedev01.adamosdev.com/inventory/binaries/29966297)

### (5) Edit configuration

By clicking this button you will be directed to the '*Machine Profile Modificator*'. More information about this modificator in the section '[Profile Settings](/oee/oee-administration/#profiles)' of this documentation.

### (6) Alarm-Icon

Clicking on this icon will send you to the alarm list that is described later in section (11) of this chapter.

### (7) Navigation Bar

The purpose of the *Navigation Bars* is to adjust the settings for the following two elements of the machine dashboard, the *OEE Mini Andon Board* and the *OEE Chart*.


#### Time Period Settings

The first drop down menu lets you select different time periods (shortcuts for "Last Hour", "Last Day" etc.) for which the OEE values will be displayed in the *OEE Mini Andon Board* and *OEE Chart*. Besides that is is possible to select an user defined time period. When the '*User defined'* option is selected for the desired time period the '*Date Time Range*' window will get accessible and the required time period can be entered.

Furthermore it is possible to select different resolutions for the selected time period. Up to four different resolutions can be selected, which are defined during profile creation. For example. resolution can be set to 1 minute, 10 minutes, 1 hour or 8 hours.

If the selected time period is "last hour" it possible to set the resolution to 1 minute and 10 minutes, but other resolutions, that are equal or longer than 1 hour, won't be offered.

By default the *Auto-refresh* option is selected and in consequence the *Mini Andon Board* and *OEE Chart* will update automatically according to the selected resolution. It can be deactivated by clicking on the *Auto-refresh* button (point = auto-refresh activated; circle = auto-refresh deactivated).

It is also possible to change between the *Single view* and the *Section view* .These different views of the* OEE Chart* will be explained in point (9) of this chapter.


#### Shifts

If shifts are stored in the xHub Shift Plan Service, they can be selected here. By switching to the section view the OEE of the shift is calculated, therefore only OEE values calculated during the phase "PRODUCTION" are taken into account. Values during the Phase "NON-PRODUCTION" or "BREAK" will be ignored.

Exercise: Creating a shift.
<br>
Shifts can be created using [Swagger documentation](https://services.adamos-hub.dev/shift-service/swagger-ui.html#/shift/searchShiftsUsingGET).

Please note: Shifts of one location can't overlap, that means you are not able to enter this:

"Shift 1 End: 2019-08-05T12:00:00
<br> Shift 2 Start: 2019-08-05T12:00:00" ... instead you have to enter this:

"Shift 1 End: 2019-08-05T11:59:59" &nbsp;or "Shift 2 Start: 2019-08-05T12:00:01"

### (8) Mini Andon Board

The *Mini Andon Board* of the *Machine Dashboard* displays the values for OEE, Availability, Performance and Quality according to the selected time period and resolution in the *Navigation Bar*.

The values displayed in the *Andon Board* refer to the last selected resolution interval and thus always show the current status for the selected time frame.

Especially if you have selected the Section View and a shift is selected, the Andon board displays the OEE and the losses for the entire shift.

Below these values the losses caused by availability, performance and quality are listed in terms of time and amount.

![Andon board](/images/oee/dashboards/dashboard-mini-andon-board.png)

### (9) OEE Chart

#### Single View

One view, hereinafter referred to as the "single view", represents the stand-alone OEE value, including the variables availability, performance, quality and target values for a specific period.

![Single view chart](/images/oee/dashboards/dashboard-single-view-chart.png)

In the "single view" the base size of the calculation, the potential production time (equals the resolution interval), was extended by a further time interval, the "timeframe". This interval does not influence the direct calculation of the OEE. It only defines the total time period in which the OEE displayed to the user. In addition to the length of the time span, the specification of a start time is of decisive relevance here.

For the potential production time, the user can define a period for in which the OEE is calculated. For each new segment of the possible production time, a new calculation of the OEE is made on the basis of the operating data assigned for this interval.

#### Section view

The second view "Section view" shows the development of the OEE variables over a certain period.

![Section view chart 1](/images/oee/dashboards/dashboard-section-view-chart-1.png)

The "timeframe" fulfils the same task with this view as with the "Single view". The potential production time on the other hand is redefined.<br>
The potential production time is no longer a fixed period, which is defined by the user, but a growing period, which is always extended by a certain interval, the "single interval" (equals the resolution interval). If the potential production time is as long as the "timeframe", it does not grow any longer, but always shifts forward by the single interval (if auto-refresh is actiaved).

The section OEE will always be calculated for the selected timeframe, or shift. For more information about the shift OEE please find the chapter "Shifts" above.



The following is an example of the development of the Section View during major quality losses. The drop in OEE (purple line) during the loss phase is clearly visible.

![Section view chart 2](/images/oee/dashboards/dashboard-section-view-chart-2.png)

![Section view chart 3](/images/oee/dashboards/dashboard-section-view-chart-3.png)

Developer mode: Implausible values are taken into consideration for the section view calculation. Tip: Most implausible values are caused by an too low ideal cycle amount. Even if implausible conductivity values arise over short periods of time, this will pay off over a longer interval. In order to obtain meaningful values for a shift, it is therefore useful to calculate with implausible values.

#### Legend

Via the legend, the values displayed in the OEE chart can be chosen.

![Chart legend](/images/oee/dashboards/dashboard-chart-legend.png)

#### Shifts

Shift phases are visible in the OEE chart, the correct phase name will be displayed when pointing on the regarding values (1st picture).<br>
Different phases are represented by different connecting lines in the graph (2nd picture).

![Shift in graph](/images/oee/dashboards/dashboard-shift-in-graph-1.png)

![Shift in graph](/images/oee/dashboards/dashboard-shift-in-graph-2.png)

### (10) Pareto Chart

The Pareto principle assumes that 80 % of the losses can be attributed to 20 % of the causes of defects. The faults that cause the most damage are listed first. It thus represents a decision-making aid by recommending the order in which the causes of faults should be eliminated.<br>
In the Pareto chart on the right, all losses, divided into the areas "availability", "performance" and "quality", are displayed and put in relation to each other. In this case, the availability losses make up 52.74% of the total losses. In a future version, the three main losses can be divided into further categories to better identify sources of faults.<br>
As usual in the OEE-App the losses can be displayed in relation to the unit of quantity or time.<br>
If all losses are 0, the OEE is 100%. Since this is not possible in reality, as OEE is always measured against an ideal, losses are always shown in the Pareto chart.

![Pareto chart](/images/oee/dashboards/dashboard-pareto-chart.png)

### (11) Alarm List

The alarm list is located at the bottom of the machine dashboard. The ten most recent alarms of the corresponding machine profile are displayed. The user has the possibility to hide or show alarms according to their severity, see picture.

![Alarm severity](/images/oee/dashboards/dashboard-alarm-severity.png)

**Note:**

Only alarms that belong to the OEE calculation are displayed in the alarm list. Other alarms (e.g. machine alarms) are not displayed.

By clicking on a specific alarm, you will get more detailed information about the respective alarm. This includes the type, severity, time of occurrence of an alarm and the respective status of the alarm.<br> Besides, it is possible to delete an alarm from the list. By clicking the red trash can icon and confirming the deletion request, an alarm can be removed from the alarm list.

**Note:**

Each alarm generated by the OEE application has a status flag "Oeedeleted", which is set to "true" when deleted. Alarms that are deleted in this way are only deleted from the alarm list and the alarm continues to exist in the Cumulocity platform. There it can still be viewed by the user.  Alarms triggered by the OEE application always have the status "CLEARED". For more information on the status of alarms and how to act on them, see the [Cumulocity documentation](https://{{<domain-c8y>}}/api/#tag/Alarm-API)

![Alarm list](/images/oee/dashboards/dashboard-alarm-list.png)
