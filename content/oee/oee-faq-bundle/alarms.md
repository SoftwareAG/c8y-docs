---
weight: 60
title: Alarms
layout: redirect
---

### What raises the "implausible calculation" alarm? {#what-raises-the-implausible-calculation-alarm}

The "implausible calculation" alarm can be caused by many reasons. The most common one is a partly inconsistent mapping.

The following example describes an "implausible calculation" alarm with focus on quality (%).

The mapping rule for the Actual Production Amount is: countEvents("{{deviceID}}","StopWorkpieceStep") * 10. When this measurement appears, it is possible to deduce that 10 workpieces have been created.

The mapping rule for the Actual Quality Amount is: countEvents("{{deviceID}}","MEASURING_PROCESS_OK") * 10. When this measurement appears, it is possible to deduce that those 10 workpieces are good quality.

The problem is explained in the image below.

If events do not occur simultaneously, minor inconsistencies may occur. Further information on the solution for this problem will follow.

![Dashboard alarm](/images/oee/faq/faq-implausible-calculation-alarm.png)
