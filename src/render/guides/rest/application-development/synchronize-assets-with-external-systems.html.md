---
order: 30
title: Synchronize assets with external systems
layout: redirect
---

Often, Cumulocity will not be the only IT system dealing with a company's asset. The technical procedure for synchronizing assets stored in external IT systems is exactly the same as the [procedure used for registering devices](/guides/rest/device-integration#device_registration_and_inventory_synchronization):

-   Use the Identity API to link the asset ID of the external IT system to the asset ID of Cumulocity.
-   Use the Inventory API to create or update the assets in Cumulocity's inventory based on the external system's data.