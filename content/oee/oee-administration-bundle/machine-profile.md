---
weight: 21
title: Creating a new machine profile
layout: redirect
---

### Profile

After giving the machine profile a unique name, you can select between two different types of profiles:

**Internal profile:** <br>
To setup a machine profile, that is using internal machine data and calculating the values for OEE, Availability, Performance and Quality itself you have to create an '*Internal profile*'. If you want to use the existing specifications of an existing machine profile as a template, you can select this profile in the box. The settings of the selected profile are then automatically adjusted in the profile modificator.

**External profile:** For the inbound of external OEE data you can create an 'external profile'. After giving the profile a name and setting goals for OEE, Availability, Performance and Quality the tethered external OEE data will be displayed without any calculation. It is not possible to set rules or a timeframe because there is no splitting. The incoming data form the external source will just be split and displayed.

For the tethered external OEE data, please ensure that the format of the values is in accordance with the demands of the OEE-App.

![External profile](/images/oee/administration/admin-external-profile.png)

### Machine

In this section of the modificator you can select the desired machine that will be connected to the profile.

In case you have already selected an existing machine profile in the '*Profile*' step before, the machine will already be set accordingly.

![Machine profile](/images/oee/administration/admin-machine-profile.png)

### Workpiece

You can either define a static workpiece that you want to process or you can use a production plan. The actual unit in the production is milliseconds.

1. **Static workpiece:**

  * First enter a name for the workpiece.
  * Second define the quantity characteristics. Therefor define the amount, the unit (either in pcs. or cbm.) per time (either seconds or minutes).

2. **Production Plan:**

    By activating the toggle bar '*Allow Production Plan for Workpiece*' the filed production plan will be enabled. To file a production plan for a specific machine follow these steps:
  * First you need the required data objects in xHub: the machine needs to be created in the machine book and have a location, and you need a production plan for that location with an entry for the machine.
  * The ideal cycle time (e.g. 10 pcs/min) from the production plan for a workpiece machine combination is used as the ideal cycle time of the calculation. The cycle length is currently derived from the ideal cycle time and can either be 1 minute, 1 hour, or 1 day. Ideal cycle amount then is cycleLength/idealCycleTime.
  * Two things need to be configured in the profile (see 32022 on DEV for an example):
    * The isActive field of the workpiece section needs to “false” (we decided to retain the section if production plan is used to easily allow users to toggle between production plan and workpiece section in the profile)
    * In the xHub_MachineBook section plantLocationIdentity and uuid (machine book equipment id) need to be configured
  * If all of the above are true, the production plan is used. The assumption is that per machine only one production plan ever is active. If that is not the case the first (whatever will be the first) production plan will be used.
  * If no production plan is found, an error is logged and an alarm is raised that no production plan is available for the machine (most likely another alarm will be raised as the following OEE calculation is implausible)
  * [Swagger documentation](https://services.adamos-hub.dev/productionschedule-service/swagger-ui.html#/production-schedule-controller/createProductionScheduleUsingPOST)

![Workpiece profile](/images/oee/administration/admin-workpiece-profile.png)

### Resolution

In this section you can define up to 4 different resolution intervals. These intervals for the *Potential Production Time* will be available for the single- and section view of the profile in the OEE Chart.

![Resolution profile](/images/oee/administration/admin-resolution-profile.png)

### Computation

Here you can choose the values which you want to enter for the mapping of the OEE input variables. You have the choice between 6 different calculation methods. For each of the calculation methods there have to exist 3 out of the 5 values, see schema on the left side. For more information about the input variables and the naming conventions of the pathways check the [General Information](/oee/oee-theory/) section


**Note for pathway PQL(2) & LQL(5):**
You should not use 'status event' in the mapping formula for both *Actual Quality Amount* and *Quality Losses (Amount)*, because as a sum they form the *Actual Production Amount*. Unlike the other calculation methods, no subset of the *Actual Production Amount* can be derived using the 'status event', since calculation methods 2 & 5 only consist out of subsets.

![Resolution profile](/images/oee/administration/admin-computation-profile.png)

### Matching

#### Functional overview (0)

![Functional overview](/images/oee/administration/admin-matching-functional-overview.png)

#### General (1)

Define rules to determine which machine data is used for the OEE input variables.

You can define one calculation rule or at least two categories for every input variable. You can choose between the categories that you have created in the *Admin View*, see more in the categories section. The different categories are calculated together and result in the final input variable. But unlike the input variable, now different lines are displayed in the chart of the machine dashboard for the categories in addition to the input variable.

**Calculation Rules:**

* Calculation rules can be defined as transformation rules ('Define quality status event' is not activated): This enables you to count parts, for example, and thus determine the actual production amount. More examples with pictures are coming soon!

* Calculation rules can be defined as Machine Status Events ('Define quality status event' is activated): Here you can specify, for example, that all parts of the actual production amount are counted towards the Actual Quality Amount while the machine has sent the status 'Quality OK'. In contrast to the other calculated values, which have a retroactive effect, this will count for upcoming measurements, events. Machine Status is possible for the input variables: 'Actual Production Time', 'Availability Losses', 'Actual Quality Amount' and 'Quality Losses'. See the example mappings below.


**Calculation Reset:**

You can keep input values valid as long as a new values arrives, that replaces the old one, (false) or you can delete the value after using it *once* and stop the calculation until a new value arrives, which replaces the old one (*true*).

e.g. measurement(564135,DMG MORI - DMF 600,ActCycle,ActCycle,*false*)

For example, if the value is *false*, the calculation can be continued with an old value for the quality, whereas if the value is*true*, the calculation is performed only once, if the quality value was the last missing part for the calculation.

**Extraordinary - fixed values:**

If you want to have fixed KPIs or Inputs please follow the instructions:

Fixed KPIs

* *Fixed quality:* define the Actual Quality Amount or Quality Loss (amount) and take the Actual Production Amount formula and multiply it by the intended quality factor.
* *Fixed availability:* define a formula for Actual Production Time or Availability Loss (time) using the intended availability factor multiplied by the constant 'intervalLength' e.g. '0.8 * intervalLength' for availability 80%.
* *Fixed performance:* does not make much sense as it is dependant on multiple inputs.

**Fixed Inputs**

* *Actual Production Time:* can be provided as a static value, use 'intervalLength' to ensure correct value per interval.
* *Availability Loss (time):* can be provided as a static value, use 'intervalLength' to ensure correct value per interval.
* *Actual Production Amount:* needs to be derived from actual measurements.
* *Actual Quality Amount & Quality Loss (amount):* can be defined as fraction of the Actual Production Amount using the same formula multiplied by fraction. Exceptions approach in calculation method 2&5 as they do not include the Actual Production Amount. Actual Quality Amount and Quality Loss (amount) need to be defined.

![General](/images/oee/administration/admin-matching-general.png)

#### Conditional Splitting for “Actual Productionamount”, ”Actual Qualityamount“, “Quality Loss Amount“

The actual production amount can be determined, among other ways, with an If-Then rule.<br>
In this example we derive the produced amount from an event "SateEvent" of the machine "CCS_804". As soon as the "content$sub_state$id" of the event has the content "3", it can be deduced that a workpiece has been produced. The same would of course also work with measurements or alarms.

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

Matching capabilities for measurements.

![Measurement](/images/oee/administration/admin-matching-measurements.png)

#### Events & Alarms

Matching capabilities for events and alarms.

![Events & alarms](/images/oee/administration/admin-matching-events-alarms.png)

#### Events with Path

There is no limit on the number of event types, but for each type there's a limit (150) to the number of unique 'paths' that are stored.

Is it also possible to manually address events with path through the text editor during mapping if the 150 paths are not sufficient.

![Events with path](/images/oee/administration/admin-matching-events-with-path.png)

### Correlation

It is possibel to define correlations for the matchin parameters:

**(a)** no correlation
<br><br>
**(b)** correlation offset
<br><br>
**(c)** the correlation identifier

In case **(b)** or **(c)** is defined, all values of every input are necessary to be provided, otherwise the step can't be saved.

**Correlation Offset (b):**

The user needs to define the amount and the unit of time (e.g. '*5*' and '*minutes*'). Only values >= 0 are accepted for the amount. As the configuration only consists of the *correlation offset* in seconds as part of the input, an additional UI fragment has been introduced which contains the values and the respective units. This fragment is required to properly restore the UI state (if we would only persist seconds, we could not restore the proper units).

**Correlation Identifier (c):**

The user needs to define an identifier which can either be a transformation or a machine event. If a machine event is defined, it might overwrite an existing event (e.g. quality event is defined in the matching step and in the correlation step) as the current configuration model is supposed to only hold one quality and one machine event. The respective subscriptions will be also created for all defined correlation identifiers (and potentially their machine events). The new created subscriptions are appended to those coming from the matching rules (duplicates are filtered beforehand).

- the definition of correlations will be allowed for machine and line profiles
- depending on the mode while saving the step, unused attributes are removed (e.g. when no correlation has been selected, the attribute *correlationId* and *correlationOffset* will be removed from the input).
- correlation step gets also validated as part of the summary step, e.g. to show that the step is not yet completed
- all values are properly written to the BE

![Correlation](/images/oee/administration/admin-correlation.png)

### Short Stoppages

You can decide whether you would like to record short stoppages or not. All *Availability Losses* shorter than the set duration are no longer treated as *Availability Losses* but instead as *Performance Losses*.

When the duration is set to one minute and an *Availability Loss (time)* is shorter than 60 seconds it will be deducted from the *Availability Losses (time)* and added to the *Performance Losses (time)* and the *Actual Production Time*.

Please note:


Short shutdowns currently only work if the *Actual Production Time* or the *Availability Losses* (time) are configured via machine status events. The reason is that you can only properly observe machine up- or downtime with machine status events and thus correctly detect if a shutdown is a short shutdown. With transformation rules you actually get one value for the whole interval and it is unclear if the availability loss time is one long shutdown or consists out of multiple short shutdowns.

![Short stoppages](/images/oee/administration/admin-short-stoppages.png)

### Goals

Here you can set the OEE target goal values as a percentage value. These values will be displayed in the  [Andon Board](/oee/dashboards/#andon-board) and depending if the value is above or beyond this value the color will change.


Note:


The target is only fulfilled if the current value is above (>) the target value.

![Goals](/images/oee/administration/admin-goals.png)

### Summary

In case you didn't fill out all the needed information about the machine profile the open tasks will be listed here.

![Summary](/images/oee/administration/admin-summary.png)


### Example matching

#### Machine status events for the Actual Quality Amount

This is an example of the case 'Define quality status event' for the Actual Quality Amount:


If the measurement 'torque' is below 100 then quality is 'true'.<br>
All new produced parts (Actual Production Amount) are from now on good parts, until 'Tatsächliche_Produktionsmenge' is < 100.

![Example matching](/images/oee/administration/admin-example-matching.png)

####  Using IF THEN in a machine status

For example there is an event that is telling what is being produced (=flowing through a pipe) and besides that there is a measurement that represents the pressure on a sensor. The threshold pressure signaling that the machine is producing or that the quality is ok might be dependent on the product that is being produced. This can be captured this by:

if event(...) = "productA" then measurement(...) > 300.0; if event(...) = "productB" then measurement(...) > 210.0


So if productA is produced and the pressure is above 300 the machine status for Actual Production Time would be true and the future timeframe will be valued as Production Time.
