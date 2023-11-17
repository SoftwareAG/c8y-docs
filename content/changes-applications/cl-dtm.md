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

Immediate feedback from validation of Key field upon value entry without requiring a click outside the field during creation of asset model, asset property and asset. With debouncing implementation, API requests are triggered after a brief delay following the last key entry, significantly reducing the frequency of calls and enhancing the responsiveness of the application. [CTM-651]

#### -Change- Improved readability in Localization screen

Renamed <b>Keys</b> to <b>Identifier</b> and <b>Terms</b> to <b>Translation</b> in Localization screen. [CTM-642]

#### -Change- Improved action buttons in Localization screen

Realigned Edit/Delete options for translations under localization screen. [CTM-696]

#### -Change- Improved validation for number property during asset instance creation

Added validation to handle only 'E' (exponent) entered for a property of type Number during asset creation. [CTM-681]

#### -Change- Bulk assets import to use logged in user instead of service user to import the assets

Implemented the bulk assets import to use logged in user instead of service user to import the assets also to enable inventory role access for bulk import. [CTM-729]

#### -Change- Default values of asset properties available in assets bulk import template

If a default value is set for a property, the bulk import template will have it mentioned against the corresponding property. [CTM-702]

#### -Change- DTM version moved under Platform info section

The DTM version is now in the right drawer under the Platform info section [CTM-677]

#### -Change- Role based access for bulk import of assets

Access to Bulk import feature can now be controlled using Cumulocity Global and Inventory roles. [CTM-649]

#### -Change- Implemented ordering of key value pairs in complex properties

Key value pairs in a Complex property can now be ordered as needed by entering the desired order in the Order field [CTM-902]

#### -Change- Improved asset model selection dropdown with search option

Asset model selection dropdown during asset creation is now searchable. [CTM-771]

#### -Change- Modified DTM URLs to match naming conventions of DTM entities.

DTM URLs are now modified to reflect the naming conventions followed for DTM entities. [CTM-689]

#### -Feature- Assign a location to an asset

Introduced **Location**,  a default property available out of the box. Add the Location property to the desired asset model to assign co-ordinates or select the location on a map while creating an asset. [CTM-615]