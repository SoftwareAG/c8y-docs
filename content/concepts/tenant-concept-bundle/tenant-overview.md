---
weight: 10
title: Overview
layout: redirect
---

Cumulocity IoT supports full multi-tenancy. 
All data related to a tenant is stored in a dedicated database. This includes user data, Inventory, Events, Measurements, Operations and Alarms
Every Cumulocity instance/installation is delivered with a Management Tenant
The Management Tenant is used to administrate all Tenants within the same instance/installation
You will only have access to the management tenant, when you setup your own Cumulocity IoT instance within an on-premise installation, a dedicated instance or the Cumulocity IoT Edge offering
For some scenarios multiple parties want to administer a portfolio of tenants
For this, the concept of the Enterprise Tenant was introduced
Every Standard Tenant can be upgraded to an Enterprise Tenant
Enterprise tenant provides own tenant management and can create subtenants
So essentially Cumulocity provides 3 levels of tenants: management, Standard or Enterprise Tenants, Subtenants

RBAC:
Background: Other products only provide RBAC for multi-tenancy.
Cumulocity provides RBAC in addition to multi-tenancy. Both concepts are complementary. Each tenant can have its own RBAC setup.
RBC can be used e.g. in consumer cases, where the data for each tenant is small and [list other reasons]
[There are also slides about this, which I currently cannot find]

