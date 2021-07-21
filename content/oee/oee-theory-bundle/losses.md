---
weight: 30
title: Losses
layout: redirect
---

### Availability losses

For 'Availability Losses', the user is recommended to record unplanned downtimes such as malfunctions, delays, line restrictions and, if necessary, planned downtimes such as maintenance, inspection, cleaning, repair and setup, conversion or format change. However, the user defines the exact definition when 'matching' the individual parameters. A direct allocation of the losses to the cause is not necessary for the calculation.</p>

The special aspect of Availability Losses is that they can be recorded and measured time-wise through machine data. With regard to the quantity, they can only be calculated using the Ideal Cycle Amount. This is simply due to the fact that non-produced ideal amounts cannot be measured either.

### Performance losses

'Performance Losses' reflect a reduced production speed and can include short stoppages. The user can decide for himself whether he wants to record short stoppages or not, this can be set when 'matching' the parameters. If the user has specified that short stoppages have to be recorded, he has to define a time period for this. For example, the user can define that Availability Losses (time) shorter than 20 seconds are no longer counted as Availability Losses (time), but instead as Performance Losses (time). Availability Losses (time) shorter than 20 seconds, are then deducted from the Availability Losses and added to the Performance Losses (time) and the Actual Production Time.

Of course, this also applies correspondingly to the Availability Losses (amount) and Performance Losses (amount) and the Ideal Production Amount.

This calculation of the short stoppages takes place between the matching of the machine data and the creation of the OEE input variables. For example, it becomes difficult when there is an interval boundary between a machine down event and a machine up event, a kind of standstill that counts as a loss of availability. It is now necessary to check whether the total downtime lasts less than 20 seconds, regardless of the interval limit. Thus, a short stoppage for the penultimate interval can only be identified with certainty if the last interval is already greater than or equal to 20 seconds, or if a machine-up event has already occurred previously.

The special feature of Performance Losses is that they are not measured directly; they must always be calculated.

### Quality losses

The user is advised to define 'Quality Losses' in such a way that they include all products that do not immediately meet the required quality requirements. The quality losses can be recorded quantitatively.
