---
weight: 50
title: Dashboards
layout: redirect
---

### Are missing data points considered?

Connection lines are displayed for all consecutive points in the diagram. This happens even if values are 'missing' between the points.

In the example considered, see left, the selected calculation interval is '1 minute'. There are no values reveived for 07:48 and 07:49, but as there are values for 07:47 and 07:50 these two points were connected by a line. This line starts from the value of 07:50 and extends to 07:47.

![Connection of lines](/images/oee/faq/faq-connection-of-lines.png)

### What do alarms in the machine dashboard mean?

If an alarm occurs in the OEE Machine Dashboard, this indicates that the mapping needs to be revised/adapted again. If this has been done, no further alarms should occur. Nevertheless, it is recommended to clear the alarm in the Cumulocity device management of the profile. This is the only way, the parameters displayed in the alarm will be renewed if a similar alarm occurs (but the time stamp is also updated automatically without further action).

![Dashboard alarm](/images/oee/faq/faq-dashboard-alarm.png)


### An alarm has been raised but I can't see it in the dashboard.

Alarms raised for a device will not be shown for the subdevice (OEE-profile) and therefore not displayed on the machine dashboard.

Only alarms raised for the childdevice (OEE-Profile), e.g. APAMA calculation error, will be shown in c8y for the child device and so therefore also in the machine dashboard.

### Why does the Machine Dashboard not show all requested data for longer time spans?

That is not a calculation error, this is only an UI issue. All values have been calculated and are stored on the platform, but the UI doesn't load them, because the amount is too much.

Please reduce the time span or choose a lower resolution (longer interval).

![Dashboard alarm](/images/oee/faq/faq-chart-loading-issue.png)
