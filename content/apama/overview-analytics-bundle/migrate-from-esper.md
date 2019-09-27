---
weight: 50
title: Migrating from CEL (Esper) to Apama
layout: redirect
---
To migrate from CEL (Esper) to Apama in Cumulocity, follow these guidelines:

1. Lock down the CEL custom CEP rules on the existing tenant to prevent change.
2. Make available a new tenant on which Apama has been enabled.
3. Manually convert all CEL custom CEP rules from the existing tenant into equivalent Apama EPL applications on the new tenant.
4. Manually recreate all Smart Rules from the existing tenant on the new tenant.
5. Manually recreate any scheduled exports from the existing tenant on the new tenant.
6. Remove the existing tenant after all custom CEP rules, Smart Rules and scheduled exports have been moved to or recreated on the new tenant.

You can also choose to work with Software AG Professional Services to help ensure the migration is as smooth as possible. Software AG Professional Services can help migrate CEL code into EPL code and they can also provide training on using Apama in Cumulocity.