---
weight: 40
title: Creating line profiles
layout: redirect
---
The following section walks you through the steps required to create a new line profile.

### Step 1 - Create a new site

Since lines are attached to a site or an area, you must first have such an entity available.

Switch to the [Organization](/oee/oee-administration/#organization) page under **Administration** and create a new site as described in [Organization > To create a new entity](/oee/oee-administration/#create-entity).

You can skip this step if you have already a site or area available to which you want to attach the new line profile.

### Step 2 - Create a new line

Next, create a new line in a similar way, this time selecting "Line" as entity type.

### Step 3 - Attach the line to a site

1. Click the **Add** button on the site to which you want to attach a line (entity).
2. Select your desired line and click **Add**.

The line will be added to the site in the **Organization structure** and get represented in the [**Machine Park Overview**](/oee/oee-dashboards/#machine-park).

### Step 4 Add machines to the line

1. Click the **Add** button at the right of the line.
2. Select the machines you want to assign to the line and click **Add**.


### Step 5 - Create a line profile

Switch to the **Profile** Page under **Administration**. Click **Create a line profile** at the right of the top menu bar to start the configuration of a new line profile in the profile configurator.  

1. In the first step (**Profile**), specify a profile name and type (either **Standard profile** or **External profile**). As with machine profiles, you can also create a new line profile based on an existing profile.

2. Next, select a line.

  ![Line](/images/oee/administration/line-profile-line.png)

3. Continue with the line mapping. You can now use the data of the machines you have previously assigned to the line.

For details on all steps of the profile configuration refer to [**Creating machine profiles**](#machine-profiles).


### Step 6 - Activate the line profile

To complete the creation of a new line profile, activate it in the **Profile settings** page. For more information see also [Managing profiles](#managing-profiles).

{{< c8y-admon-info >}}
Make sure that all machine profiles of the line are activated as well.
{{< /c8y-admon-info >}}
