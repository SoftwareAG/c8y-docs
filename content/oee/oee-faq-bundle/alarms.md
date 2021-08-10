---
weight: 60
title: Alarms
layout: redirect
---

### What raises the "implausible calculation" alarm?

The "implausible calculation" alarm can be caused by many reasons. The most common is a partly inconsistent mapping.

The following example describes an "implausible calculation" alarm with focus on quality (%).

The mapping rule for the actual production amount is: countEvents("{{deviceID}}","StopWorkpieceStep") * 10. When this measurement appears, it is possible to deduce that 10 workpieces have been created.

The mapping rule for the actual quality amount is: countEvents("{{deviceID}}","MEASURING_PROCESS_OK") * 10. When this measurement appears, it is possible to deduce that those 10 workpieces are good quality.

The problem is explained in the image on the left.

If events do not occur simultaneously, minor inconsistencies may occur. Further information on the solution to this problem are coming soon.

![Dashboard alarm](/images/oee/faq/faq-implausible-calculation-alarm.png)
