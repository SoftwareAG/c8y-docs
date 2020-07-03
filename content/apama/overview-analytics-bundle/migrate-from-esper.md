---
weight: 50
title: Migrating from CEL (Esper) to Apama
layout: redirect
---
### Migrating from CEL when only using smart rules 

If a tenant is only using smart rules and not any custom rules, you can simply unsubscribe the tenant from CEL and subscribe to Apama instead (or ask your operations team to do this for your tenant).

Any previously configured smart rules will be restarted. For smart rules which are stateful, this will, as with any restart of the microservice hosting the smart rules, lose state within the smart rule. In this case, the input (measurements, alarms, etc.) for the devices in question will need to be sent again before the smart rule will be functioning as before. 

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

Migrating from custom rules written in CEL to Apama EPL requires rewriting and retesting the custom rules. If any of the CEL generated from smart rules has been modified, you will need to convert that to a custom Apama rule as well, and delete the smart rule when migrating. As with any scripting or programming, you should thoroughly test significant changes before deploying into a production environment. Thus, the recommended approach is to create a separate tenant for hosting Apama rules as they are developed, and replicate any input data required in that tenant. The CEP rules can continue to run in your production tenant while you develop the new Apama rules. To do this, follow these steps:

1. Lock down the CEP custom rules on the existing tenant to prevent change.
2. Make available a new tenant on which Apama has been enabled.
3. Manually convert all CEP custom rules from the existing tenant into equivalent Apama EPL apps on the new tenant.
4. Manually recreate all smart rules from the existing tenant on the new tenant, if the custom rules depend on the output of smart rules.
5. Test the behavior of the new custom rules, checking for memory leaks and performance as well as correctness. 
6. When all rules have been developed and tested, move your production tenant from CEP to Apama. Any unmodified smart rules will migrate automatically. Delete any smart rules where the CEL version had been modified and a new Apama custom rule implements those changes. Deploy your newly developed Apama rules in the production tenant.

You can also choose to work with Software AG Professional Services to help ensure the migration is as smooth as possible. Software AG Professional Services can help migrate CEL code into Apama EPL code and they can also provide training on using Apama in Cumulocity IoT.