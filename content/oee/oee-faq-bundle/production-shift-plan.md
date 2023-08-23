---
weight: 70
title: Production & Shift plan
layout: redirect
---

The optional Shift and Production plans control the way the OEE calculation is performed. They provide the baseline for the Availability and Performance calculation. More information about Shift and Production plans can be found in [Shift plan](/oee/oee-administration/#shiftplan) & [Enable a production plan](/oee/oee-administration/#enable-a-production-plan).

### What happens if a profile uses the production plan, but no production is deposited for a timespan? {#what-happens-if-a-profile-uses-the-production-plan-but-no-production-is-deposited-for-a-timespan}

![Alarm](/images/oee/faq/faq-alarm-for-missing-production-plan.png)

If you did not deposit a production plan in your {{< product-c8y-iot >}} OEE profile, the platform cannot execute a calculation. Therefore, the platform displays an alarm on the Machine Dashboard.
