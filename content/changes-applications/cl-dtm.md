---
title: Digital twin manager
layout: change_log
section:
  - change_log
weight: 20
---


### October 2023

#### -Change- Improved visualization of steps skipped during asset instance creation

Non-mandatory steps that are skipped during creation of an asset instance are now distinguished by a grey colored ticks. [CTM-654]

#### -Change- Immediate feedback from validation of Key field

Immediate feedback from validation of **Key** field upon value entry without requiring a click outside the field during creation of asset model, asset property and asset. With de-bouncing implementation, the API requests are triggered after a brief delay following the last key entry, significantly reducing the frequency of calls and enhancing the responsiveness of the application. [CTM-651]

#### -Change- Improved readability in Localization screen

Renamed <b>Keys</b> to <b>Identifier</b> and <b>Terms</b> to <b>Translation</b> in Localization page. [CTM-642]

#### -Change- Improved action buttons in Localization screen

Realigned **Edit/Delete** icon for translations under localization page. [CTM-696]

#### -Change- Improved validation for number property during asset instance creation

Asset property of type number is now handled for invalid exponential values during asset creation. [CTM-681]

#### -Change- Default values of asset properties available in assets bulk import template

If a default value is set for a property, the bulk import template will have it mentioned against the corresponding property. [CTM-702]

#### -Change- DTM version moved under Platform info section

The DTM version is now in the right drawer under the Platform info section [CTM-677]

#### -Change- Role-based access for bulk import of assets

Access to the bulk import feature can now be controlled using Cumulocity IoT global and inventory roles. [CTM-649,CTM-729]

#### -Feature- Implemented ordering of key value pairs in Complex properties

Key value pairs in a Complex property can now be ordered as needed by entering the desired order in the **Order** field. [CTM-846]

#### -Change- Improved asset model selection dropdown with search option

A search function has been added to the asset model dropdown when creating new assets. [CTM-771]

#### -Change- Modified DTM URLs to match naming conventions of DTM entities

DTM URLs have been modified to reflect the naming conventions followed for DTM entities. [CTM-689]

#### -Feature- Assign a location to an asset

A new default property "Location" has been introduced. Add the Location property to the desired asset model to assign co-ordinates or select the location on a map while creating an asset. [CTM-615]