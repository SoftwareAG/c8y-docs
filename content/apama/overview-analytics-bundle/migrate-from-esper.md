---
weight: 50
title: Migrating from CEL (Esper) to Apama
layout: redirect
---
### Migrating from CEL when only using Smart Rules 

If a tenant is only using Smart Rules and not any custom rules, you can simply unsubscribe the tenant from CEL and subscribe to Apama instead (or ask your operations team to do this for your tenant).

Any previously configured Smart Rules will be restarted. For Smart Rules which are stateful, this will, as with any restart of the microservice hosting the Smart Rules, lose state within the Smart Rule. In this case, the input (measurements, alarms, etc.) for the devices in question will need to be sent again before the Smart Rule will be functioning as before. 

Smart Rules will only work correctly if moving from CEL to Apama, not in the opposite direction.

### Migrating from CEL when also using custom rules

Migrating from custom rules written in CEL to Apama EPL requires rewriting and retesting the custom rules. As with any scripting or programming, you should thoroughly test significant changes before deploying into a production environment. Thus, the recommended approach is to create a separate tenant for hosting Apama rules as they are developed, and replicate any input data required in that tenant. To do this, follow these steps:

1. Lock down the CEP custom rules on the existing tenant to prevent change.

2. Make available a new tenant on which Apama has been enabled.

3. Manually convert all CEP custom rules from the existing tenant into equivalent Apama EPL applications on the new tenant.

4. Manually recreate all Smart Rules from the existing tenant on the new tenant.

5. Manually recreate any scheduled exports from the existing tenant on the new tenant.

6. Test the behavior of the new custom rules, checking for memory leaks and performance as well as correctness. 

    Smart Rules with state:

   - On geofence create alarm: which devices are currently in or out of the geofence?
   - On geofence send email: which devices are currently in or out of the geofence?
   - On alarm escalate it: which alarms have been created?
   - On alarm duration increase severity: which alarms have been created?
   - Calculate energy consumption: what are the last meter readings?
   - On missing measurements create alarm: what is the previous time of measurement and which devices have sent the measurement before?
   
    

    Stateless Smart Rules:

   - On alarm send email 
   - On alarm send SMS 
   - On alarm execute operation
   - On measurement threshold create alarm 
   - On measurement explicit threshold create alarm 
   
   

7. Remove the existing tenant after all CEP custom rules, Smart Rules and scheduled exports have been moved to or recreated on the new tenant.

You can also choose to work with Software AG Professional Services to help ensure the migration is as smooth as possible. Software AG Professional Services can help migrate CEL code into Apama EPL code and they can also provide training on using Apama in Cumulocity.