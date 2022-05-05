---
weight: 50
title: Migrating from CEL (Esper) to Apama
layout: redirect
---
### Migrating from CEL when only using smart rules 

If a tenant is only using smart rules and not any custom rules, you can simply unsubscribe the tenant from CEL and subscribe to Apama instead (or ask your operations team to do this for your tenant).

Any previously configured smart rules will be restarted. For smart rules which are stateful, this will, as with any restart of the microservice hosting the smart rules, lose state within the smart rule. In this case, the input (measurements, alarms, etc.) for the devices in question must be sent again before the smart rule will be functioning as before. 

Smart rules will only work correctly if moving from CEL to Apama, not in the opposite direction.

The smart rules listed in the following table are stateful:

<table>
<colgroup>
   <col style="width: 40%;">
   <col style="width: 60%;">
</colgroup>
<thead>
<tr>
<th style="text-align:left">For this smart rule</th>
<th style="text-align:left">Check the following</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">On geofence create alarm</td>
<td style="text-align:left">Which devices are currently in or out of the geofence?</td>
</tr>
<tr>
<td style="text-align:left">On geofence send email</td>
<td style="text-align:left">Which devices are currently in or out of the geofence?</td>
</tr>
<tr>
<td style="text-align:left">On alarm escalate it</td>
<td style="text-align:left">Which alarms have been created?</td>
</tr>
<tr>
<td style="text-align:left">On alarm duration increase severity</td>
<td style="text-align:left">Which alarms have been created?</td>
</tr>
<tr>
<td style="text-align:left">Calculate energy consumption</td>
<td style="text-align:left">What are the last meter readings?</td>
</tr>
<tr>
<td style="text-align:left">On missing measurements create alarm</td>
<td style="text-align:left">What is the previous time of measurement and which devices have sent the measurement before?</td>
</tr>
</tbody>
</table>

The following smart rules are stateless:

- On alarm send email 
- On alarm send SMS 
- On alarm execute operation
- On measurement threshold create alarm 
- On measurement explicit threshold create alarm 

### Migrating from CEL when also using custom rules

Migrating from custom rules written in CEL to Apama EPL requires rewriting and retesting the custom rules. If any of the CEL generated from smart rules has been modified, you must convert that to an Apama EPL app as well, and delete the smart rule when migrating. As with any scripting or programming, you should thoroughly test significant changes before deploying into a production environment. Thus, the recommended approach is to create a separate tenant for hosting Apama EPL apps as they are developed, and replicate any input data required in that tenant. The CEP rules can continue to run in your production tenant while you develop the new Apama EPL apps. To do this, follow these steps:

1. Lock down the CEP custom rules on the existing tenant to prevent change.
2. Make available a new tenant on which Apama has been enabled.
3. Manually convert all old custom rules from the existing tenant into equivalent Apama EPL apps on the new tenant. Refer to the rest of this guide, in particular [Best practices and guidelines](/apama/best-practices/). This includes smart rules where the CEL has been modified.
4. Test the behavior of the new EPL apps by sending, for example, measurements or events into the new tenant and verifying that the new EPL apps respond appropriately.
    > **Important:** CEL allowed measurements with null values. This is no longer supported. Therefore, you must make sure that all of your measurements send numeric values. 
5. When all new EPL apps have been developed and tested, move your production tenant from CEP to Apama, that is: subscribe the new tenant to the Apama-ctrl microservice (and unsubscribe it from CEP). 
	* Any unmodified smart rules will migrate automatically. 
	* Delete any smart rules where the CEL version had been modified and a new EPL app has been implemented. 
	* Activate your newly developed EPL apps in the production tenant.


You can also work with {{< company-sag >}} Professional Services to help ensure the migration is as smooth as possible. {{< company-sag >}} Professional Services can help migrate CEL code into Apama EPL code and they can also provide training on using Apama in {{< product-c8y-iot >}}.

### Handling scheduled exports

Scheduled exports must be migrated to the report-agent microservice. This can be performed by opening a report in the Cockpit application. See also [Managing exports](/users-guide/cockpit/#exports) in the *User guide*.


>**Info:** To use the new export schedule feature and for the migration to work, the report-agent microservice must be subscribed. New tenants will be subscribed to it automatically. Existing tenants should make sure that they are subscribed to it.

### Using the Esper-to-Apama EPL translation tool

The open-source Esper-to-Apama EPL translation tool assists you in the migration of Esper CEL to Apama EPL. It generates EPL that is compatible with the Apama microservice version 10.6.6 and above. The translation tool is available from GitHub at [https://github.com/SoftwareAG/apama-streaming-analytics-esper2apama](https://github.com/SoftwareAG/apama-streaming-analytics-esper2apama). 

This tool focuses on reducing (though not eliminating) the amount of human involvement needed during migration by automating translation of some of the most commonly occurring Esper constructs. See the README in GitHub for more details.