---
weight: 70
title: Calculation categories
layout: redirect
---

Calculation categories can be used to provide multiple calculation rules for the same input variable. The calculation rules together make up the input variable.

This allows you to define multiple rules that will handle different types of losses, for example, planned versus unplanned, or to distinguish between multiple sources of incoming data. Each category will be calculated individually and then aggregated to give the final input variable. Further information on the creation of calculation profiles can be found in [Matching data](/oee/oee-administration/#matching-data).

#### Using calculation categories

In order to use a calculation category in your OEE calculation profiles, the category itself must first be created in **Administration** > **Calculation Categories** in the application. Categories are considered specific to a given input parameter. So, for each input parameter that requires the use of categories, the input parameter must have its categories defined before the input parameter itself can be created. Typically, calculation categories are used when at least two different types of calculation must be combined in order to form an input parameter.

* **Example 1:** You may wish to have "Planned Maintenance" and "Manual Stoppage" categories for the Availability Loss (Time) input in order to distinguish these two different kinds of losses from each other.

* **Example 2:** You may wish to use "Source Left" and "Source Right" categories for Actual Production Amount in order to distinguish the different incoming paths a machine has for its input items.

{{< c8y-admon-info >}}
As categories may be used in many different OEE calculation profiles, it is not possible to remove a category from the application once it is created. It is therefore important to consider the categories to be used and ensure that they make sense long-term. If an old category should no longer be used, it may be set to "deactivated". This will prevent it from being used in any new calculation profiles.
{{< /c8y-admon-info >}}
