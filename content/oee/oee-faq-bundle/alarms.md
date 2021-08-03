---
weight: 60
title: Alarms
layout: redirect
---

### What raises the Implausible Calculation Alarm?

The Implausible Calculation Alarm can be caused by many reasons. The most common is a partly inconsistent mapping.

The following example describes an Implausible Calculation Alarm with focus on quality (%).

The mapping rule for the actual production amount is: countEvents("{{deviceID}}","adamos_StopWorkpieceStep") * 10. When this measurement appears, it is possible to deduce that 10 workpieces have been created.

The mapping rule for the actual quality amount is: countEvents("{{deviceID}}","MEASURING_PROCESS_OK") * 10. When this measurement appears, it is possible to deduce that those 10 workpieces are good quality.

The problem is explained on the left hand side of the graphic. Please find a detailed presentation in the next section.

If events do not occur simultaneously, minor inconsistencies may occur. Further information on the solution to this problem are coming soon.

<!---A solution to this problem has already been found. Information on the release date will follow.--->

![Dashboard alarm](/images/oee/faq/faq-implausible-calculation-alarm.png)

<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/b9b7-3nlseA"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen>
</iframe>
