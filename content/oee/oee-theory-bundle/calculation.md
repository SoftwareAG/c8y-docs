---
weight: 20
title: Calculation logic & variables
layout: redirect
---

### Ideal Cycle Amount and Ideal Cycle Time (1), (2), (3)

The Ideal Cycle Amount describes the maximum quantity that can be applied within a certain period of time, see formula (1). This value can only be achieved by an ideal machine, therefore the cycle quantity is described as ideal. This applies to all sizes described as ideal.

![Ideal cycle amount](/images/oee/theory/theory-ideal-cycle-amount-formula.png)

Its counterpart represents the Ideal Cycle Time, see formula (2).

![Ideal cycle time](/images/oee/theory/theory-ideal-cycle-time-formula.png)

The quantities can be converted into each other by simply applying the exponent "-1".

![Ideal cycle amount inverse](/images/oee/theory/theory-ideal-cycle-amount-inverse-formula.png)

### Potential Production Time (4)

The Potential Production Time describes the period of time in which production is planned for the machine. This production time is given the adjective "potential" and not "ideal", since the organization defines it as a possible time period for production without any direct connection to the ideal machine.

![Potential production time](/images/oee/theory/theory-potential-production-time-formula.png)

### Ideal Amount (5)

The Ideal Amount describes the maximum possible quantity to be produced within the Possible Production Time, see formula (5).

![Ideal amount](/images/oee/theory/theory-ideal-amount-formula.png)

### Actual Production Time (APT) (6)

The Actual Production Time describes the actual time period during which the machine produces products, regardless of speed or quality. In this respect, the adjective "actual" is added to this variable to make it easier to understand (this also applies to the following variables). Since Availability Losses, see below, prevent production the Actual Production Time is always shorter than the Potential Production Time, unless it is an ideal machine.

![Actual production time](/images/oee/theory/theory-actual-production-time-formula.png)

The Actual Production Time can also be represented as a quantitative figure, the Ideal Production Amount, see formula (7), (8) or (9).

### Ideal Production Amount (7), (8), (9)

The Ideal Production Amount describes the amount that an ideal machine running at maximum speed could have produced within the Actual Production Time.

![Ideal production time 1](/images/oee/theory/theory-ideal-production-amount-formula-1.png)

The calculation of the Actual Production Time explained above was carried out on the basis of a time reference. The same calculation is also possible with a quantity reference; for example, the Ideal Production Amount could also be calculated directly with the Ideal Amount minus the Availability Losses (amount).

![Ideal  production time 2](/images/oee/theory/theory-ideal-production-amount-formula-2.png)

It is also possible to calculate the Ideal Production Amount on the basis of the Potential Production Time, since the Potential Production Time and the Ideal Amount, as shown in the diagram, are equivalent to each other.

![Ideal production time 3](/images/oee/theory/theory-ideal-production-amount-formula-3.png)

Thus it is shown that many possible ways of calculation exist to obtain equivalent values. For reasons of clarity, the following calculations are only given under respect to a time reference and not showing all possible calculation paths.

### Ideal Machine Runtime (10)

The Ideal Machine Runtime describes the time it would have taken for an ideal machine to produce the Actual Production Amount at maximum speed.

![Ideal machine runtime](/images/oee/theory/theory-ideal-machine-runtime-formula.png)

As the diagram shows, the Ideal Machine Runtime can also be represented as  Actual Production Amount.

### Actual Production Amount (APA) (11)

The Actual Production Amount reflects the products manufactured in reality within the Actual Production Time and Possible Production Time.

![Actual production amount](/images/oee/theory/theory-actual-production-amount-formula.png)

### Ideal Quality Time (12)

The Ideal Quality Time is calculated by subtracting the Quality Losses from the Ideal Machine Runtime, see [Losses](#losses). It reflects the time that an ideal machine, which ultimately only produces good parts, would have needed to produce the Actual Quality Amount.

![Ideal quality time](/images/oee/theory/theory-ideal-quality-time-formula.png)

### Actual Quality Amount (13)

The Actual Quality Amount reflects the produced good parts. It is also calculated using the Ideal Cycle Amount.

![Actual quality amount](/images/oee/theory/theory-actual-quality-amount-formula.png)

### Availability (14)

Availability can be represented either by the ratio of Actual Production Time to Potential Production Time, or by the ratio of Ideal Production Amount to Ideal Amount. This results in a percentage value for Availability, which must be less than 100% if the machine is not ideal.

![Availability](/images/oee/theory/theory-availability-formula.png)

### Performance (15)

The Performance can be calculated either from the ratio of Ideal Machine Runtime to Actual Production Time or Actual Production Amount to Ideal Production Amount. This also results in a percentage value for the activity. If it is not an ideal machine, it must be less than 100%.

![Performance](/images/oee/theory/theory-performance-formula.png)

### Quality (16)

The Quality can either be calculated from the ratio of Ideal Quality Time to Ideal Machine Runtime or Actual Quality Amount to Actual Production Amount. This results in a percentage value for the Quality, which, if it is not an ideal machine, must be less than 100%.

![Quality](/images/oee/theory/theory-quality-formula.png)

### OEE (17)

The OEE is calculated using the following formula:

![OEE](/images/oee/theory/theory-oee-formula.png)
