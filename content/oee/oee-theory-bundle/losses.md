---
weight: 30
title: Losses
layout: redirect
---

### Availability Losses {#availability-losses}

For Availability Losses, we recommend you to record unplanned downtimes such as malfunctions, delays, line restrictions and, if necessary, planned downtimes such as maintenance, inspection, cleaning, repair and setup, conversion or format change. However, you define the exact definition when matching the individual parameters. A direct allocation of the losses to the cause is not necessary for the calculation.</p>

The special aspect of Availability Losses is that they can be recorded and measured time-wise through machine data. With regard to the quantity, they can only be calculated using the Ideal Cycle Amount. This is simply due to the fact that non-produced ideal amounts cannot be measured either.

### Performance Losses {#performance-losses}

Performance Losses reflect a reduced production speed and can include short stoppages. You can decide for yourself whether you want to record short stoppages or not, this can be set when matching the parameters. If you have specified that short stoppages must be recorded, you must define a time period for this. For example, you can define that Availability Losses (time) shorter than 20 seconds are no longer counted as Availability Losses (time), but instead as Performance Losses (time). Availability Losses (time) shorter than 20 seconds, are then deducted from the Availability Losses and added to the Performance Losses (time) and the Actual Production Time.

Of course, this also applies correspondingly to the Availability Losses (amount) and Performance Losses (amount) and the Ideal Production Amount.

This calculation of the short stoppages takes place between the matching of the machine data and the creation of the OEE input variables. For example, it becomes difficult when there is an interval boundary between a machine-down event and a machine-up event, a kind of standstill that counts as a loss of availability. It is now necessary to check whether the total downtime lasts less than 20 seconds, regardless of the interval limit. Thus, a short stoppage for the penultimate interval can only be identified with certainty if the last interval is already greater than or equal to 20 seconds, or if a machine-up event has already occurred previously.

The special feature of Performance Losses is that they are not measured directly. They must always be calculated.

### Quality Losses {#quality-losses}

We recommend you to define Quality Losses in such a way that they include all products that do not immediately meet the required quality requirements. The Quality Losses can be recorded quantitatively.
