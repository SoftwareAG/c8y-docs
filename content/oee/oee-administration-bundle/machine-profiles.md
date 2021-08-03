---
weight: 30
title: Creating machine profiles
layout: redirect
---

Click **Create a machine profile** at the right of the top menu bar to start the configuration of a new machine profile in the profile configurator.  

>**Info:** After saving the general profile information in the first step you may skip one or more of the following steps and provide the requested information at a later point in time.


### Profile

In the first step, you specify the profile name and type.

![Profile tab](/images/oee/administration/profile-create.png)

1. In the **Profile name** field, provide a name for the new profile.

2. Select the profile type:

    **Standard profile**<br>
    To set up a machine profile that is using internal machine data and calculating the values for OEE, Availability, Performance and Quality. At the right, you can select an existing machine profile as a template. The settings of the selected profile are then automatically adjusted in the profile modificator.

    **External profile**<br>
    To integrate external OEE data. After setting goals for OEE, availability, performance and quality the tethered external OEE data will be displayed without any calculation. It is not possible to set rules or a timeframe because there is no splitting. The incoming data from the external source will just be split and displayed.

    >**Info:** For the tethered external OEE data, make sure that the format of the values is in accordance with the demands of the OEE application.

3. Click **Save and continue** to proceed.



### Machine

Next, select a machine to be connected with the profile.

![Machine tab](/images/oee/administration/machine-profile-machine.png)

1. At the top, you may optionally enter a machine location. The machine location is used to associate shift plans with the machine. In the **Machine location** field you can enter free text for any type of location.

2. Next, select the machine that will be connected with the profile from the provided list. In the search field, you may filter the selection by the machine name or ID. If you have selected an existing machine profile in the previous step, the machine will already be set accordingly.

3. Click **Save and continue** to proceed.


### Workpiece

Next, specify the workpiece.

You can either define a static workpiece that you want to process or you can use a production plan. The actual unit in the production is milliseconds.

#### Define a static workpiece

![Workpiece tab](/images/oee/administration/profile-workpiece.png)

1. Provide a name for the workpiece.
2. Specify the quantity settings. Enter an amount, a unit (either "pcs" or "CMB") and a frequency (per minute or second).

#### Enable a production plan

Activate the toggle **Allow production plan workpiece** if you want to use a production plan.

The production plan of a machine defines what is to be produced at any given time. If this option is enabled the ideal cycle time (e.g. 10 pcs/min) from the production plan is used as the Ideal Cycle Time of the OEE calculation.


a production plan for a specific machine follow these steps:
  * First you need the required data objects in xHub: the machine needs to be created in the machine book and have a location, and you need a production plan for that location with an entry for the machine.
  * The ideal cycle time (e.g. 10 pcs/min) from the production plan for a workpiece machine combination is used as the ideal cycle time of the calculation. The cycle length is currently derived from the ideal cycle time and can either be 1 minute, 1 hour, or 1 day. Ideal cycle amount then is cycleLength/idealCycleTime.
  * Two things need to be configured in the profile (see 32022 on DEV for an example):
    * The isActive field of the workpiece section needs to “false” (we decided to retain the section if production plan is used to easily allow users to toggle between production plan and workpiece section in the profile)
    * In the xHub_MachineBook section plantLocationIdentity and uuid (machine book equipment id) need to be configured
  * If all of the above are true, the production plan is used. The assumption is that per machine only one production plan ever is active. If that is not the case the first (whatever will be the first) production plan will be used.
  * If no production plan is found, an error is logged and an alarm is raised that no production plan is available for the machine (most likely another alarm will be raised as the following OEE calculation is implausible)
  * [Swagger documentation](https://services.adamos-hub.dev/productionschedule-service/swagger-ui.html#/production-schedule-controller/createProductionScheduleUsingPOST)


### Resolution

Next, define the resolution intervals.

![Resolution tab](/images/oee/administration/profile-resolution.png)

For each resolution interval, provide an interval and a unit (one of min, hour, days).

These resolution intervals are used as incremental Potential Production Time for the calculation, based on the OEE model.

### Computation

Next, select a calculation method, i.e. the values for the mapping of the OEE input variables.

![Computation](/images/oee/administration/profile-computation.png)

You can select one of 6 different calculation methods. *For each of the calculation methods there have to exist 3 out of the 5 values, see schema on the left side. *

For more information on the input variables and the naming conventions of the pathways, see [OEE theory](/oee/oee-theory/).

>**Info:** For the calculation methods 2 & 5 (PQL & LQL), you should not use "status event" in the mapping formula for both Actual Quality Amount and Quality Losses (amount), because as a sum they form the Actual Production Amount. Unlike the other calculation methods, no subset of the Actual Production Amount can be derived using the "status event", since calculation methods 2 & 5 only consist out of subsets.


### Matching

Next, define rules to determine which machine data is used for the OEE input variables.

For details on matching data, see [Matching](/oee/administration/#matching).


### Short stoppages

Optionally, you can record short stoppages. By default, short stoppages are not tracked.

1. Select **Yes, should be tracked** to turn on the tracking.
2. Provide a duration in minutes and click **Save and Proceed**.

![Short stoppages](/images/oee/administration/profile-shortstoppages.png)

All Availability Losses shorter than the set duration are no longer treated as Availability Losses but instead as Performance Losses. When the duration is set to one minute and an Availability Loss (time) is shorter than 60 seconds it will be deducted from the Availability Losses (time) and added to the Performance Losses (time) and the Actual Production Time.

>**Info:** Short shutdowns currently only work if the Actual Production Time or the Availability Losses (time) are configured via machine status events. The reason is that you can only properly observe machine uptime or downtime with machine status events and thus correctly detect if a shutdown is a short shutdown. With transformation rules you actually get one value for the whole interval and it is unclear if the availability loss time is one long shutdown or consists out of multiple short shutdowns.

### Goals

Next, you may  specify OEE target goal values in percentage. These values will be displayed in the [Andon Board](/oee/dashboards/#andon-board).

![Goals](/images/oee/administration/profile-goals.png)

>**Info:** The target is only fulfilled if the current value is above (>) the target value.

### Summary

Finally, the summary shows if the profile configuration is complete or if any (and which) information is missing.

![Summary](/images/oee/administration/profile-summary.png)
