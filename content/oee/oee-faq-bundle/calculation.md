---
weight: 30
title: Calculation
layout: redirect
---

### How accurate are the calculations of the ADAMOS OEE App?

After the OEE values have been calculated, they are then checked again for consistency and plausibility. No deviations greater than 0.0002 are allowed. However, it should be considered that OEE is fundamentally a statistical value.

### Are resolved alarms still considered in the calculations?

Resolved alarms are not taken into account in the calculation.

### Can the APA be calculated without using the APT?

If the APT is not calculated using a machine event, it is not used to calculate the APA.
Instead, the APA is split from event to event.

APA is not calculated based on machine status event (APT).

### The quality of a workpiece is not met but it is accounted to the Actual Quality Amount?

Short fluctuations of the quality status during discrete manufacturing can lead to a miscalculation of the Actual Quality Amount (AQA), see picture below. For example, if workpiece A represents a milled part. At the beginning it was milled correctly but in the middle of the machining process the parameters for quality were no longer met. Only at the end the milling process was carried out correctly again. As a result, the entire workpiece should actually be declared ;as scrap, but it is not. This is the result of a time-related calculation, which aims at a generic applicability for both discrete and process manufacturing. The problem can be avoided by deriving the quality from workpiece-based events. In the best case, an event for each workpiece is generated for each workpiece by the processing machine itself or a following measuring station with the content "OK" or "not OK".

![Quality status](/images/oee/faq/faq-quality-status-1.png)

If the quality status is "not OK" for a significantly longer period of time, this error is less pronounced:

![Quality status](/images/oee/faq/faq-quality-status-2.png)

This problem must also be considered when creating line profiles.

### Does the loss of connection affect the OEE calculation?

If the connection is interrupted and no machine data is received for an interval, this interval is ignored and the OEE calculation is not falsified.

You can see an example below:

The resolution interval is 60 seconds and for the intervals 08:00:14-08:01:14 and 08:01:14-08:02:14 no machine data was send to the Application and so no calculation has been triggered. These intervals are therefore also ignored in the section view, as you can easily deduce from the values of Availability and Actual Production Time. The red bars in the picture indicate the that a new calculation is triggered.

![Loss of connection](/images/oee/faq/faq-loss-of-connection.png)

### If I recalculate the values myself I get different values.

If the calculation is attempted on the basis of the input parameters (e.g.: Actual Production Time 60,3454 minutes), the following must be observed:
* The algorithm of the pathways must be followed
* The calculation is done on a millisecond basis (2019-12-09T10:07:04.773)
* No rounding is performed during the calculation in order not to multiply rounding errors. Only when the data is saved it is rounded to 4 decimal places, as can be seen when the data is exported (in the UI, it is rounded to 2 decimal places).

### How are measurements calculated of lines working in parallel?

![Line calculation of machines working in parallel](/images/oee/faq/faq-parallel-machine.png)

**Initial situation:**

Machine 1 is processing workpieces, this processing step only takes a short time. The workpieces finished by machine 1 must go through a second, time-consuming machining step. This second machining step is carried out by 2 machines (machines 2 & 3). The workpiece is always fed to the machine with the lowest capacity.

**Problem:**

If the performance is determined on the basis of the two machines working in parallel, it can happen that the performance reaches values greater than 100%, see figure on the left.

**Solution:**

* The performance is determined on the first machine, if possible.
* The smallest of the four defined intervals of a profile is x times larger than the machining time of a workpiece -> then the values average again. (However, this means that the 10 min. interval display in the machine park overview mostly shows incorrect values).
* Not only is a line profile created, but machine profiles are also used, whose calculated values are then used in the line calculation. (see 'Example of a line profile')

**Alternative starting situation:**

If after machine 2 & 3 the workpieces would converge again in machine 4, these machines could be used for bottleneck analysis and there would be no more problems with the performance.

### Why are there implausible values shortly after changing and saving the profile?

After entering a profile (via profilemodificator), all oee machine statuses are set to true (e.g. the machine is up and running, so the Availability is 100% ) until the first measurement is sent form the machine.

It is recommended to wait some time after editing and saving a running profile, to have plausible calculations, again.

Coming Soon: You will receive an alarm (with timestamp) if a profile has been saved again.

### What happens if the machine reports a produced part although its status is "not producing"?

If the information of a produced workpiece comes in while the machine is online it will be splitted, please see the picture in the left (colored lines and arrows). If the machine is not producing and we are receiving a WP event, the first event will still be splitted to the "machine on" time (pink), but the following events (black lines) are not splitted and just counted into the interval, in which they appear. Since it is not reasonable, that workpieces are produced while the machine is offline, alarms for the regarding interval will be raised. The produced amounts will still be displayed in the machine dashboard and is still taken into account for the section view.

However, if your machine sends always the information that a workpiece has been completed with a delay (e.g. by one minute), while the machine is already in a non-production status, this problem can be solved with the Correlation Offset (Can be setup with in profile modificator). In this way, the status can also be delayed for a certain time, so that the incoming information on a finished workpiece is received within the production status. (In this case the availability loss time is shifted, but in total the OEE calculation is correct).

![Status report](/images/oee/faq/faq-status-report.png)

### Why does the ideal amount change?

![Ideal amount change](/images/oee/faq/faq-ideal-amount.png)

The ideal amount is calculated based on the values you have entered for the workpiece, while creating the profile.

The displayed ideal amount in the chart of the machine overview can change over the time, if you have activated the usage of a production plan.

Another reason can be that you have changed the resolution. The displayed ideal amount is always calculated for the corresponding resolution.
e.g. You have entered "1.1 pcs/minute" on the workpiece section, while setting up the profile. 	
* If you choose the resolution "1 mins" on the machine overview the displayed ideal amount for an interval will be 1,1 pcs
* If you choose the resolution "10 mins" on the machine overview the displayed ideal amount for an interval will be 11 pcs.
