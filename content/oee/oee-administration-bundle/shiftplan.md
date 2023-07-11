---
weight: 80
title: Working with shift plans
layout: redirect
---

![Shift Plans](/images/oee/administration/admin-shift-plans.png)

Each known location can have a shift plan which consists of one or more shifts. You create a location by assigning it to a machine profile. A shift defines the time when all machines in this location are in a specific mode, i.e. in production or non-production mode.

If a machine is in production mode, it is running and produces goods. If it is non-production mode, it might be in maintenance and no goods should be produced.

The OEE application takes these shift definitions into account when calculating the OEE values, especially the Availability and the Ideal Production Time.

A shift can be defined to be an one-off event for a specific date/time (e.g. for a public holiday) or a recurring instance. The recurring shifts are typically used to define morning or evening shifts that are scheduled every working day in every week.

If there are overlapping shifts defined, the shifts are handled in the following decreasing priority:
-	non-recurring
-	non-production
-	non-recurring production
-	recurring non-production
-	recurring production

### To create a shift

1.	Select the appropriate location in the dropdown menu at the top of the screen.
2.	Click the **Create Shift** button to add a new shift to the selected location.
3.	Fill in all required details in the form on the right-hand side.
4.	Click the **Save** button to save the shift.

### To change a shift

1.	Click the row of the shift that you want to update.
2.	Update the required fields.
3.	Click the **Save** button to save the shift.

Be aware that a non-recurring shift cannot be edited if it is currently running. If you edit a recurring shift, the
changes only affect the instances that start after you saved it. No currently running shift is altered.

### To delete a shift

- Click the red icon in the row of the shift that you want to delete.
- Alternatively, you can click the row of the shift that you want to delete and then click the **Delete** button on the bottom right-hand side.
