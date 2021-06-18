---
weight: 120
title: Tenant SLA Monitoring
layout: redirect
aliases:
  -/users-guide/optional-services/#tenant-sla-monitoring
---

## Overview

The Tenant SLA Monitoring service lets service providers monitor the availability and response time of tenants and subtenants.

>**Info:** The Tenant SLA Monitoring service is only available to the main Management Tenant.

In detail, it offers the following features:

* monitoring of the availability for each tenant
* information on the current availability status of tenants (yes/no)
* information on the tenants availability in percentage
	* during the last day
	* during the last week
	* during the last month

By using Tenant SLA Monitoring, service providers can instantly check

* if any tenant is currently down,
* if all tenants are fully functional,
* the current response time for each tenant,
* the current status of a specific tenant,
* the availability KPIs (key performance indicators) of all tenants in the last day/week/month.

Use the the Device Management application to visualize Tenant SLA Monitoring data.

## Using Tenant SLA Monitoring

### Prerequisites  

The Management tenant needs to be subscribed to the application "Tenant-sla-monitoring" to see any monitoring results.

![Sla-monitoring subscribe](/images/users-guide/sla-monitoring/sla-subscribe.png)

For details on application subscription, refer to [Enterprise tenant > Managing tenants > Applications](/users-guide/enterprise-edition#subscribe) in the User guide.

### How the service works

Every 5 minutes, the Tenant SLA Monitoring service probes for the response time of each tenant, and all its subtenants (if not disabled), and stores the results.

To be able to do so, the service automatically subscribes to all subtenants of a subscribed tenant, to get its credentials and gain access to its API.

Moreover, for each subscribed tenant (i.e. Management tenant), a source in the Device Management application is created in which the monitoring results, including those of the subtenants, are stored as measurements.

### Viewing measurements

To view the measurements showing the monitoring results, open the Management tenant´s source (device) in **All devices** in the Device Management application and switch to the **Measurements** tab.

<img src="/images/users-guide/sla-monitoring/sla-Tenant-Monitoring-Measurements.png" alt="Tenant Monitoring measurements" style="max-width: 100%">

In the API Response Time diagram, you see the response time of the tenants in milliseconds.

Additionally, you will find diagrams showing the average availability values for the tenants for the following periods:

* Api Availability Day Average - 24 hours
* Api Availability Week Average - 7 days
* Api Availability Month Average - 30 days

These average values are calculated by summing up the timespan of all timeout and response time alarms (e.g. created if data is missing, see below) for the specific time period and divide it by the total timespan.

<img src="/images/users-guide/sla-monitoring/sla-Tenant-Monitoring-Day-Average.png" alt="Tenant Monitoring Day Average" style="max-width: 100%">

For further details on measurements refer to [Device Management > Device details > Measurements](/users-guide/device-management#measurements) in the User guide.

### Creating alarms

The Tenant SLA Monitoring service will create alarms in case of the following scenarios:

* Unavailability of a tenant - Whenever a tenant is not reachable, the service will not store any measurement but will leave gaps in the measurement series. When the tenant becomes available again, the service will search for the last measurement stored for the tenant and create an alarm for the calculated time of unavailability.
* High response times - If the required response time is not met (defaults to 300ms). This alarm will be active until the response time drops below the defined limit again.
* Time spans which have not been monitored

These alarms are used to calculate the availability of the system in percentage, shown as measurements (see above).

To view recent alarms, switch to the **Alarms** tabs of the Management tenant´s source.
