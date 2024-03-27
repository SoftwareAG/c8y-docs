---
weight: 50
title: Matching data
layout: redirect
---

In the Matching section of a profile configuration, you define rules to determine which machine data is used for the OEE input variables.

### Introduction {#introduction}

The following image provides an overview on the matching capabilities.

![Functional overview](/images/oee/administration/matching-functional-overview.png)

You can either define a single calculation rule or use categories to define at least two separate calculation rules for an input variable. The categories must be created under **Calculation categories** first, see [Calculation categories](/oee/oee-administration/#calculation-categories). Using categories to define multiple calculation rules can for example be used to define different rules for different kinds of losses (planned vs. unplanned) or to distinguish multiple sources of amounts. The different categories are calculated individually and then aggregated to the final input variable. In the chart of the **Machine Dashboard** it is possible to not only show the aggregated input variable but also the graphs for the individual categories.

#### Calculation rules {#calculation-rules}

Calculation rules can be defined as

* Transformation rules ("Define quality status event" or "Define machine status event" is not activated): The result of transformation rules is a value. This enables you to count parts, for example, and thus determine the Actual Production Amount.

* Machine status events ("Define quality status event" or "Define machine status event" is activated): The result machine status events is a Boolean. Here you can specify, for example, that all parts of the Actual Production Amount are counted towards the Actual Quality Amount while the machine has sent the status "Quality OK". In contrast to the other calculated values, which have a retroactive effect, this will count for upcoming measurements, events. Machine status is possible for the input variables: Actual Production Time, Availability Losses, Actual Quality Amount and Quality Losses. See the example mappings below.


#### Calculation reset {#calculation-reset}

You can keep input values valid as long as a new value arrives, that replaces the old one, (*false*) or you can delete the value after using it *once* and stop the calculation until a new value arrives, which replaces the old one (*true*).

Example:

measurement(564135,Drill machine 500,ActCycle,ActCycle,*false*)

If the value is *false*, the calculation can be continued with an old value for the Quality, whereas if the value is *true*, the calculation is performed only once, if the Quality value was the last missing part for the calculation.

#### Providing fixed values for inputs & KPIs {#providing-fixed-values-for-inputs--kpis}

If you want to have fixed KPIs or inputs follow these instructions:

**Fixed KPIs**

* Fixed Quality: Define the Actual Quality Amount or Quality Loss (amount) and take the Actual Production Amount formula and multiply it by the intended quality factor.
* Fixed Availability: Define a formula for Actual Production Time or Availability Loss (time) using the intended availability factor multiplied by the constant "intervalLength", for example "0.8 * intervalLength" for availability 80%.
* Fixed Performance: Does not make much sense as it is dependant on multiple inputs.

**Fixed Inputs**

* Actual Production Time: Can be provided as a static value, use "intervalLength" to ensure correct value per interval.
* Availability Loss (time): Can be provided as a static value, use "intervalLength" to ensure correct value per interval.
* Actual Production Amount: Must be derived from actual measurements.
* Actual Quality Amount & Quality Loss (amount): Can be defined as fraction of the Actual Production Amount using the same formula multiplied by fraction. Exceptions approach in calculation method 2 & 5 as they do not include the Actual Production Amount. Actual Quality Amount and Quality Loss (amount) must be defined.

![Matching](/images/oee/administration/matching-general.png)

### Conditional splitting {#conditional-splitting}

The Actual Production Amount can be determined, among other methods, with an IF-THEN rule.

In this example we derive the produced amount from an event "StateEvent" of the machine "Slicer". As soon as the "content$sub_state$id" of the event has the content "3", it can be deduced that a workpiece has been produced. The same also works for measurements or alarms.

![Mapping view for splitting](/images/oee/administration/mapping-view-for-splitting-1.png)

This rule looks like this in text form: "if evt("342", "StateEvent", "content$sub_state$id",false) = 3 then 1"

If the IF condition is fulfilled, this means for the OEE application that a workpiece has been created, see green events.<br>
If an IF condition is fulfilled, the created workpiece (quantity = 1) is split up to the last event, regardless of whether the event fulfills the If condition or not. The splitting is shown in red.

![Mapping view for splitting](/images/oee/administration/mapping-view-for-splitting-2.png)

This logic can also be applied to the Actual Quality Amount and Quality Loss Amount.<br>
Of course, all three input parameters can also be derived directly from MEAs, or the number of an MEA. The Actual Quality Amount and Quality Loss Quantity can also be determined by the machine status.

![Mapping view for splitting](/images/oee/administration/mapping-view-for-splitting-3.png)

### Measurements {#measurements}

The following image provides an overview on the matching capabilities for measurements.

![Measurement](/images/oee/administration/matching-measurements.png)

### Events & alarms {#events--alarms}

The following image provides an overview on the matching capabilities for events and alarms.

![Events & alarms](/images/oee/administration/matching-events-alarms.png)

### Events with path {#events-with-path}

There is no limit on the number of event types, but for each type there is a limit (150) to the number of unique paths that are stored.

Is it also possible to manually address events with path through the text editor during mapping if the 150 paths are not sufficient.

![Events with path](/images/oee/administration/matching-events-with-path.png)

<!-- This feature won’t be available in this version but it will be added back at a later date.

### Correlation {#correlation}

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
- Depending on the mode while saving the step, unused attributes are removed (for example when no correlation has been selected, the attribute *correlationId* and *correlationOffset* will be removed from the input).
- Correlation step gets also validated as part of the summary step, for example, to show that the step is not yet completed.
- All values are properly written to the BE.

![Correlation](/images/oee/administration/admin-correlation.png)

-->

### Example matching {#example-matching}

#### Machine status events for the Actual Quality Amount {#machine-status-events-for-the-actual-quality-amount}

This is an example of the case "Define quality status event" for the Actual Quality Amount:

If the measurement “torque” is below 100, the condition evaluates to “true” indicating good quality. All new produced parts (Actual Production Amount) are now counted as good parts towards the Actual Quality Amount while “torque” stays below 100.

![Example matching](/images/oee/administration/example-matching.png)

####  Using IF-THEN in a machine status {#-using-ifthen-in-a-machine-status}

Assume for example, that there is an event that is telling what is being produced (=flowing through a pipe) and besides that there is a measurement that represents the pressure on a sensor. The threshold pressure signalling that the machine is producing or that the quality is OK might be dependent on the product that is being produced. This can be captured by this:
```
if event(...) = "productA" then measurement(...) > 300.0; if event(...) = "productB" then measurement(...) > 210.0
```

So if productA is produced and the pressure is above 300 the machine status for Actual Production Time will be true and the future timeframe will be valued as Production Time.
