---
weight: 40
title: Splitting
layout: redirect
---

The term "Splitting" describes the allocation of machine data to the OEE input parameters. This sections shows examples which explain the methodology used.

### Input variable calculation - Example 1

It is crucial for the OEE application to correctly allocate the input data to the corresponding intervals of the Possible Production Time or resolution time. This allocation is explained below using an example with reference to the data in the Machine dashboard. Within three intervals of the Possible Production Time, the machine sends four measured values (shown in blue), which indicate the number of products since the last measured value, that is, the actual production quantity.

The first measured value is 20 pieces. The previous measured value was 16 seconds ago, outside the display range. Thus it is proportionally taken into account to 25% of the first interval. With the same logic, 75% of the second measured value is calculated for the first interval. The total of the proportional allocation results in the actual production quantity for the first interval of 35 pieces. This results in a value of 30 pieces for the second interval. In this example, measured value number four is the most recent measured value sent by the machine. To be able to calculate the actual production quantity for the third interval, you must wait for the next measured value "z", which is received after "y" seconds.

![Splitting example 1](/images/oee/theory/theory-splitting-example-1.png)

### Input variable calculation - Example 2

If no measurement is received within an interval the next measurement will be calculated proportionally. The Actual Production Amount for the second interval will therefore be 35 pieces even if there was no measurement received.

![Splitting example 2](/images/oee/theory/theory-splitting-example-2.png)

### Input variable calculation - Example 3

The calculation of the quality looks more complex, since the quality data does not necessarily come to the same point as the corresponding measured value. Quality data or quality data derived from measurements can occur irregularly.

In contrast to the measurement of produced amount of pieces, the quality data refers to the future period. The last quality status before the first interval was OK, so the entire quantity of the first interval is taken into account as quality amount. Since the quality in interval one is OK from second six onwards, the quality in the second interval is also OK for the first eight seconds. This is not the case for the last two seconds. In interval two, 80% of the quantity actually produced corresponds to the quality requirements, that is, 28 pieces.

Of course, these calculations do not reflect reality to 100%, since the assumption is made that production will be uniform. This is more probable in process manufacturing than in discrete manufacturing, since several workpieces can be produced at once per operation. A better representation can be achieved by using data from the digital workpiece. In this case, the quality data is directly assigned to the workpiece and each workpiece is recorded individually.

![Splitting example 3](/images/oee/theory/theory-splitting-example-3.png)
