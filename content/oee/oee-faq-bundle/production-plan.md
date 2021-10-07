---
weight: 70
title: Production & Shift plan
layout: redirect
---

The optional Production & Shift plans control the way the OEE calculation is performed. They provide the baseline for the Availability & Performance calculation. More information about Production & Shift plans can be found in [Administration > Using a shift plan](/oee/oee-administration/#using-a-shift-plan) & [Administration > Enable a production plan](/oee/oee-administration/#enable-a-production-plan).

### What happens if a profile uses the production plan, but no production is deposited for a timespan?

![Alarm](/images/oee/faq/faq-alarm-for-missing-production-plan.png)

If you did not deposit a production plan in your {{< product-c8y-iot >}} OEE profile, the platform cannot execute a calculation. Therefore, the platform displays an alarm on the Machine Dashboard.
