---
weight: 50
title: Migrating from Esper to Apama
layout: redirect
---
To migrate from Esper to Apama in Cumulocity, follow these guidelines:

1. Lock down the Esper custom CEP rules on the existing tenant to prevent change.
2. Make available the new tenant on which Apama has been enabled.
3. Manually convert all Esper custom CEP rules from the existing tenant into equivalent Apama EPL applications and move them to the new tenant.
4. Recreate all Smart Rules from the existing tenant and move them to the new tenant.
5. Manually recreate any scheduled exports from the existing tenant and move them to the new tenant.
6. Remove the existing tenant after all custom CEP rules, Smart Rules and scheduled exports have been moved to the new tenant.

You can also choose to work with Software AG Professional Services to help ensure the migration is as smooth as possible. Software AG Professional Services can help migrate Esper code into Apama code and they can also provide training on using Apama in Cumulocity.