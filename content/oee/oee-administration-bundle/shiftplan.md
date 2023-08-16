---
weight: 110
title: Shiftplan
layout: redirect
---

![Shift Plans](/images/oee/administration/admin-shift-plans.png)

Shift plans are optional and control the way the OEE calculation is performed. The shift plan tells the OEE application when production is planned to happen as opposed to breaks, refitting times, and non-production times (for example, weekends). It provides the baseline for the Availability calculation. If no shift plan is provided, it is assumed the machine is running 24/7 for 100% Availability.

Each known location can have a shift plan which consists of one or more shifts. You create a location by assigning it to a machine profile. A shift defines the time when all machines in this location are in a specific mode, that is, in production or non-production mode.

If a machine is in production mode, it is running and produces goods. If it is non-production mode, it might be in maintenance or there might be a staff break. During non-production mode no goods are being produced.

The OEE application takes these shift definitions into account when calculating the OEE values, especially the Availability and the Ideal Production Time.

A shift can be defined to be an one-off event for a specific date/time (for example, for a public holiday) or a recurring instance. The recurring shifts are typically used to define morning or evening shifts that are scheduled every working day in every week.

If there are overlapping shifts defined, the shifts are handled in the following decreasing priority:
-	non-recurring non-production
-	non-recurring production
-	recurring non-production
-	recurring production

### To create a shift

1.	Select the appropriate location in the dropdown menu at the top of the screen.
2.	Click **Create Shift** to add a new shift to the selected location.
3.	Fill in all required details in the form on the right-hand side.
4.	Click **Save** to save the shift.

### To change a shift

1.	Select the row of the shift that you want to update.
2.	Update the required fields.
3.	Click **Save** to save the shift.

Be aware that a non-recurring shift cannot be edited if it is currently running. If you edit a recurring shift, the
changes only affect the instances that start after you saved it. No current running shift is altered.

### To delete a shift

- Click the red icon in the row of the shift that you want to delete.
- Alternatively, select the row of the shift that you want to delete and then click **Delete** on the bottom right-hand side.

The OEE application provides a REST API to work with the shift plans which can either be invoked from the [go-c8y-cli](https://goc8ycli.netlify.app/) and its [OEE extension](https://github.com/SoftwareAG/c8y-oee), Postman, or any other system that can access the {{< product-c8y-iot >}} tenant.

For details of the API, see the [REST API documentation](https://{{< domain-c8y >}}/api/oee/10.10.0/#tag/Shiftplan).
