---
weight: 21
title: Creating machine profiles
layout: redirect
---

Click **Create a machine profile** at the right of the top menu bar to start the configuration of a new machine profile in the profile configurator.  

### Profile

In the first step, you specify the profile name and type.

![Profile tab](/images/oee/administration/machine-profile-create.png)

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

![Workpiece tab](/images/oee/administration/profile-workpiece.png)

1. Provide a name for the workpiece.
2. Specify the quantity settings. Enter an amount, a unit (either "pcs" or "CMB") and a frequency (per minute or second).

You can either define a static workpiece or use a production plan by activating the toggle **Allow production plan workpiece**.

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

The following image provides an overview on the matching capabilities.

![Functional overview](/images/oee/administration/admin-matching-functional-overview.png)

You can either define a calculation rule or set the calulation by at least two categories for every input variable. The categories need to be created under **Calculation categories**, see [Calculation categories](/oee/administration/#categories). The different categories are calculated together and result in the final input variable. But unlike the input variable, different lines will be displayed in the chart of the **Machine Dashboard** for the categories in addition to the input variable.

#### Calculation rules

Calculation rules can be defined as

* Transformation rules ("Define quality status event" is not activated): This enables you to count parts, for example, and thus determine the actual production amount.

* Machine status events ("Define quality status event" is activated): Here you can specify, for example, that all parts of the Actual Production Amount are counted towards the Actual Quality Amount while the machine has sent the status "Quality OK". In contrast to the other calculated values, which have a retroactive effect, this will count for upcoming measurements, events. Machine status is possible for the input variables: Actual Production Time, Availability Losses, Actual Quality Amount and Quality Losses. See the example mappings below.


#### Calculation reset

You can keep input values valid as long as a new value arrives, that replaces the old one, (*false*) or you can delete the value after using it *once* and stop the calculation until a new value arrives, which replaces the old one (*true*).

Example:

measurement(564135,DMG MORI - DMF 600,ActCycle,ActCycle,*false*)

If the value is *false*, the calculation can be continued with an old value for the quality, whereas if the value is *true*, the calculation is performed only once, if the quality value was the last missing part for the calculation.

#### Extraordinary - fixed values

If you want to have fixed KPIs or inputs follow these instructions:

**Fixed KPIs**

* Fixed quality: Define the Actual Quality Amount or Quality Loss (amount) and take the Actual Production Amount formula and multiply it by the intended quality factor.
* Fixed availability: Define a formula for Actual Production Time or Availability Loss (time) using the intended availability factor multiplied by the constant "intervalLength", for example "0.8 * intervalLength" for availability 80%.
* Fixed performance: Does not make much sense as it is dependant on multiple inputs.

**Fixed Inputs**

* Actual Production Time: Can be provided as a static value, use "intervalLength" to ensure correct value per interval.
* Availability Loss (time): Can be provided as a static value, use "intervalLength" to ensure correct value per interval.
* Actual Production Amount: Needs to be derived from actual measurements.
* Actual Quality Amount & Quality Loss (amount): Can be defined as fraction of the Actual Production Amount using the same formula multiplied by fraction. Exceptions approach in calculation method 2 & 5 as they do not include the Actual Production Amount. Actual Quality Amount and Quality Loss (amount) need to be defined.


#### Conditional splitting for Actual Production Amount, Actual Quality Amount, Quality Loss Amount

The actual production amount can be determined, among other ways, with an If-Then rule.

In this example we derive the produced amount from an event "StateEvent" of the machine "CCS_804". As soon as the "content$sub_state$id" of the event has the content "3", it can be deduced that a workpiece has been produced. The same also works for measurements or alarms.

![Mapping view for splitting](/images/oee/administration/admin-mapping-view-for-splitting-1.png)

This rule looks like this in text form: "if evt("342", "StateEvent", "content$sub_state$id",false) = 3 then 1"

If the If condition is fulfilled, this means for the OEE app that a workpiece has been created, see green events.<br>
If an If condition is fulfilled, the created workpiece (quantity = 1) is split up to the last event, regardless of whether the event fulfills the If condition or not. The splitting is shown in red.

![Mapping view for splitting](/images/oee/administration/admin-mapping-view-for-splitting-2.png)

This logic can also be applied to the "Actual quality amount" and "Quality loss amount".<br>
Of course, all three input parameters can also be derived directly from MEAs, or the number of an MEA. The "Actual Quality Amount" and "Quality Loss Quantity" can also be determined by the machine status.

A possible extension would be to specify that the created workpieces are only split up to the last event that also fulfills the If condition. This function is currently not yet available. (Internal note #5915)

![Mapping view for splitting](/images/oee/administration/admin-mapping-view-for-splitting-3.png)

#### Measurements

The following image provides an overview on the matching capabilities for measurements.

![Measurement](/images/oee/administration/matching-measurements.png)

#### Events & alarms

The following image provides an overview on the matching capabilities for events and alarms.

![Events & alarms](/images/oee/administration/matching-events-alarms.png)

#### Events with path

There is no limit on the number of event types, but for each type there is a limit (150) to the number of unique paths that are stored.

Is it also possible to manually address events with path through the text editor during mapping if the 150 paths are not sufficient.


#### Correlation

It is possible to define correlations for the matching parameters.

* **(a)** no correlation
* **(b)** correlation offset
* **(c)** the correlation identifier

If **(b)** or **(c)** is defined, all values of every input are must be provided, otherwise the step cannot be saved.

**Correlation Offset (b):**

You must define the amount and the unit of time (for example "5" and "minutes"). Only values >= 0 are accepted for the amount. As the configuration only consists of the correlation offset in seconds as part of the input, an additional UI fragment has been introduced which contains the values and the respective units. This fragment is required to properly restore the UI state (if we only persist seconds, we cannot restore the proper units).

**Correlation Identifier (c):**

You must define an identifier which can either be a transformation or a machine event. If a machine event is defined, it might overwrite an existing event (for example quality event is defined in the matching step and in the correlation step) as the current configuration model is supposed to only hold one quality and one machine event. The respective subscriptions will also be created for all defined correlation identifiers (and potentially their machine events). The new created subscriptions are appended to those coming from the matching rules (duplicates are filtered beforehand).

- The definition of correlations will be allowed for machine and line profiles.
- Depending on the mode while saving the step, unused attributes are removed (e.g. when no correlation has been selected, the attribute *correlationId* and *correlationOffset* will be removed from the input).
- Correlation step gets also validated as part of the summary step, e.g. to show that the step is not yet completed.
- All values are properly written to the BE.

![Correlation](/images/oee/administration/admin-correlation.png)

### Short stoppages

Optionally, you can record short stoppages. By default, short stoppages are not tracked.

1. Select **Yes, should be tracked** to turn on the tracking.
2. Provide a duration in minutes and click **Save and Proceed**.

![Short stoppages](/images/oee/administration/profile-shortstoppages.png)

All Availability Losses shorter than the set duration are no longer treated as Availability Losses but instead as Performance Losses. When the duration is set to one minute and an Availability Loss (time) is shorter than 60 seconds it will be deducted from the Availability Losses (time) and added to the Performance Losses (time) and the Actual Production Time.

>**Info:** Short shutdowns currently only work if the Actual Production Time or the Availability Losses (time) are configured via machine status events. The reason is that you can only properly observe machine uptime or downtime with machine status events and thus correctly detect if a shutdown is a short shutdown. With transformation rules you actually get one value for the whole interval and it is unclear if the availability loss time is one long shutdown or consists out of multiple short shutdowns.

### Goals

Here you can set the OEE target goal values as a percentage value. These values will be displayed in the  [Andon Board](/oee/dashboards/#andon-board) and depending if the value is above or beyond this value the color will change.


Note:


The target is only fulfilled if the current value is above (>) the target value.

![Goals](/images/oee/administration/admin-goals.png)

### Summary

In case you didn't fill out all the needed information about the machine profile the open tasks will be listed here.

![Summary](/images/oee/administration/admin-summary.png)
