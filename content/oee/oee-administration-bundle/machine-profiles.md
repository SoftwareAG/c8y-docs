---
weight: 30
title: Creating machine profiles
layout: redirect
---

Click **Create a machine profile** at the right of the top menu bar to start the configuration of a new machine profile in the profile settings.  

{{< c8y-admon-info >}}
After saving the general profile information in the first step you may skip one or more of the following steps and provide the requested information at a later point in time.
{{< /c8y-admon-info >}}

### Profile

In the first step, you specify the profile name and type.

![Profile tab](/images/oee/administration/profile-create.png)

1. In the **Profile name** field, provide a name for the new profile.

2. Select the profile type:

    **Standard profile**<br>
    To set up a machine profile that is using internal machine data and calculating the values for OEE, Availability, Performance and Quality.

    At the right, you can select an existing machine profile to use its configuration as a template. After clicking **Save and proceed**, all settings will automatically be pre-populated with the configuration of the selected profile.

    **External profile**<br>
    To integrate external OEE data. It is not possible to define calculation rules or any other settings except the goals for OEE, Availability, Performance and Quality. The tethered external OEE data will be displayed without any calculation. Also no splitting takes place, so the intervals used in the incoming measurements should be configured to match the expectation.

	The only mandatory measurement is the OEE value itself, whereas measurements for Performance, Availability and Quality are recommended. Technically the measurements must meet the following criteria:

    **Type/Fragmenttype**

    * "OEE"
    * "Performance"
    * "Availability"
    * "Quality"
    * "PotentialProductionTime"
    * "IdealAmount
    * "ActualProductionTime"
    * "AvailabilityLossTime"
    * "AvailabilityLossAmount"
    * "IdealProductionAmount"
    * "IdealMachineRuntime"
    * "ActualProductionAmount"
    * "PerformanceLossTime"
    * "PerformanceLossAmount"
    * "IdealQualityTime"
    * "ActualQualityAmount"
    * "QualityLossAmount"
    * "QualityLossTime"
    * "IdealCycleTime"
    * "IdealCycleAmount"


    **Series**  

    * relates to the interval of the profile, so for example for a 10min interval, use "600s".


	Here is a basic example in JSON notation:

	```
	{
      "time": "2021-01-01T01:01:01.001Z",
      "id": "123456789",
      "type": "OEE",
      "OEE": {
        "600s": {
          "unit": "",
          "value": 99.306
        }
      }
    }
	```

3. Click **Save and continue** to proceed.


### Machine

Next, select a machine to be connected with the profile.

![Machine tab](/images/oee/administration/machine-profile-machine.png)

1. At the top, you may optionally enter a machine location. The machine location is used to associate shift plans with the machine. In the **Machine location** field you can enter free text for any type of location.

2. Select the machine that will be connected with the profile from the provided list. In the search field, you may filter the selection by the machine name or ID. If you have selected an existing machine profile in the previous step, the machine will already be set accordingly.

3. Click **Save and continue** to proceed.

{{< c8y-admon-info >}}
Once you have saved a profile, the selected machine cannot be changed.
{{< /c8y-admon-info >}}

#### Using a shift plan

Shift plans are optional and control the way the OEE calculation is performed. The shift plan tells the OEE application when production is planned to happen as opposed to breaks, refitting times, and non-production times (for example weekends). It provides the baseline for the Availability calculation. If no shift plan is provided, it is assumed the machine is running 24/7 for 100% Availability.

The OEE application provides a REST API to push the shift plans to the application. This REST API can either be invoked from Postman, the {{< product-c8y-iot >}} UI, or any other system that can access the {{< product-c8y-iot >}} tenant.

The REST API can be reached at https://[server]/service/oee-bundle/mes/shiftplan and offers two methods:

* GET: Retrieve the shift plan for the given location. The response might be empty if no shift plan was supplied before via the PUT method.

* PUT: Add or update the shift plan for the location defined in the body. If a shift plan exists for the given tenant and location, the new shift plan will be merged internally and obsolete timeslots will be removed. The resulting shift plan will then be sent to the Apama service.

For details, see the [REST API documentation](https://{{< domain-c8y >}}/oee/api/{{< c8y-current-version >}}/#tag/Shiftplan).


### Workpiece

Next, specify the workpiece.

You can either provide static workpiece information if the machine is always producing the same thing in the same quantity or you can use a production plan, where the workpiece information is provided dynamically at runtime. Note that if you select to use a production plan, OEE calculation will only be performed for times when a production plan is available.

#### Define a static workpiece

![Workpiece tab](/images/oee/administration/profile-workpiece.png)

1. Provide a name for the workpiece.
2. Specify the quantity settings. Enter an amount, a unit (either "pcs" or "CMB") and a frequency (per minute or second).

#### Enable a production plan

Activate the toggle **Allow production plan workpiece** if you want to use a production plan.

The production plan of a machine defines how many products are to be produced at any given time and controls the way the OEE calculation is performed. It provides the baseline for the performance calculation. If no production plan is available, the work piece information from the calculation profile is used.

If the **Allow production plan workpiece** option is enabled the Ideal Cycle Time (for example 60,000 milliseconds/pcs) from the production plan is used as the Ideal Cycle Time of the OEE calculation.

The OEE application provides a REST API to push the production plans to the application. This REST API can either be invoked from Postman, the {{< product-c8y-iot >}} UI, or any other system that can access the {{< product-c8y-iot >}} tenant.

The REST API can be reached at https://[server]/service/oee-bundle/mes/productionplanlist and offers two methods:

* GET: Retrieve the production plans for the given device. Response might be empty if no production plan was supplied before via the PUT method.

* PUT: Add or update the list of production plans for the device defined in the body. If a production plan exists for the given tenant and device, the new production plans will be merged internally and obsolete instances will be removed. The resulting production plans will then be sent to the Apama service.

For details, see the [Rest API documentation](https://{{< domain-c8y >}}/oee/api/{{< c8y-current-version >}}/#tag/Productionplan).


### Resolution

Next, define the resolution intervals.

![Resolution tab](/images/oee/administration/profile-resolution.png)

For each resolution interval, provide an interval and a unit (one of min, hour, days).

OEE calculation is performed on the basis of the configured resolution intervals.

### Computation

Next, select a calculation method, that means, the values for the mapping of the OEE input variables.

![Computation](/images/oee/administration/profile-computation.png)

You can select one of six supported calculation methods. The calculation methods differ in what input parameters they require. There are five potential input parameters of which each of the calculation methods requires three. The five input parameters are:

* Actual Production Time
* Availability Losses (Time)
* Actual Production Amount
* Actual Quality Amount
* Quality Losses (Time)

Either Actual Production Time or Availability Losses (Time) are required as the other one can be derived from the one provided. As Actual Production Amount is the sum of Actual Quality Amount and Quality Losses (Time), only two of the three inputs are required as the remaining one can be derived from the other two.

The six calculation methods shown in the screenshot represent the possible combinations of the five input parameters following the rule described above.

For more information on the input variables and the naming conventions of the pathways, see [OEE theory](/oee/oee-theory/).

{{< c8y-admon-info >}}
For the calculation methods 2 & 5 (PQL & LQL), you should not use "status event" in the mapping formula for both Actual Quality Amount and Quality Losses (Amount), because as a sum they form the Actual Production Amount. Unlike the other calculation methods, no subset of the Actual Production Amount can be derived using the "status event", since calculation methods 2 & 5 only consist out of subsets.
{{< /c8y-admon-info >}}

### Matching

Next, define rules to determine which machine data is used for the OEE input variables.

For details on matching data, see [Matching data](/oee/oee-administration/#matching-data).


### Short stoppages

Optionally, you can record short stoppages. By default, short stoppages are not tracked.

1. Select **Yes, should be tracked** to turn on the tracking.
2. Provide a duration in minutes and click **Save and Proceed**.

![Short stoppages](/images/oee/administration/profile-shortstoppages.png)

All Availability Losses shorter than the set duration are no longer treated as Availability Losses but instead as Performance Losses. When the duration is set to one minute and an Availability Loss (time) is shorter than 60 seconds it will be deducted from the Availability Losses (time) and added to the Performance Losses (time) and the Actual Production Time.

{{< c8y-admon-info >}}
Short shutdowns currently only work if the Actual Production Time or the Availability Losses (time) are configured via machine status events. The reason is that you can only properly observe machine uptime or downtime with machine status events and thus correctly detect if a shutdown is a short shutdown. With transformation rules you actually get one value for the whole interval and it is unclear if the Availability Loss Time is one long shutdown or consists out of multiple short shutdowns.
{{< /c8y-admon-info >}}

### Goals

Next, you may  specify OEE target goal values in percentage. These values will be displayed in the [Andon Board](/oee/oee-dashboards/#andon-board).

![Goals](/images/oee/administration/profile-goals.png)

{{< c8y-admon-info >}}
The target is only fulfilled if the current value is above (>) the target value.
{{< /c8y-admon-info >}}

### Summary

Finally, the summary shows if the profile configuration is complete or if any (and which) information is missing.

![Summary](/images/oee/administration/profile-summary.png)
