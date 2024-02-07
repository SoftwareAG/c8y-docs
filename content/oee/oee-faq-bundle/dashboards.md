---
weight: 50
title: Dashboards
layout: redirect
---

### Does the OEE application consider missing data points? {#does-the-oee-application-consider-missing-data-points}

Connection lines are displayed for all consecutive points in the diagram. This happens even if values are "missing" between the points.

In the example below the selected calculation interval is '1 minute'. There are no values received for 07:48 and 07:49, but as there are values for 07:47 and 07:50 these two points were connected by a line. This line starts from the value of 07:47 and extends to the value 07:50.

![Connection of lines](/images/oee/faq/faq-connection-of-lines.png)

### What do alarms in a Machine Dashboard mean? {#what-do-alarms-in-a-machine-dashboard-mean}

If an alarm occurs in an OEE Machine Dashboard, this indicates that the mapping must be revised and adapted again. If this has been done, no further alarms should occur. Nevertheless, it is recommended to clear the alarm in the device details of the profile in the {{< product-c8y-iot >}} Device management application. This is the only way, the parameters displayed in the alarm will be renewed if a similar alarm occurs. The time stamp is also updated automatically without further action.

![Dashboard alarm](/images/oee/faq/faq-dashboard-alarm.png)

### An alarm has been raised but I can't see it in the dashboard {#an-alarm-has-been-raised-but-i-cant-see-it-in-the-dashboard}

Alarms raised for a device will not be shown for the child device (OEE profile) and therefore not displayed on the machine dashboard.

Only alarms raised for the child device (OEE profile), for example an APAMA calculation error, will be shown in {{< product-c8y-iot >}} for the child device and thus also in the Machine Dashboard.

### Why does the Machine Dashboard not show all requested data for longer time spans? {#why-does-the-machine-dashboard-not-show-all-requested-data-for-longer-time-spans}

That is not a calculation error, this is only an UI issue. All values are calculated and are stored in the platform. The UI does not show all values as the amount is too high.

To see all values, reduce the time span or select a lower resolution, for example a longer interval.

![Dashboard alarm](/images/oee/faq/faq-chart-loading-issue.png)
