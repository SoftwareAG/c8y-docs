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

During the creation of asset models, asset properties and assets, upon entering input in the **Key** field, immediate feedback is now shown - no need to click outside the field. With de-bouncing implementation, the API requests are triggered after a short delay following the last key entry, significantly reducing the frequency of calls and enhancing the responsiveness of the application. [CTM-651]

#### -Change- Improved readability in Localization screen

Renamed the column heading <b>Keys</b> to <b>Identifier</b> and the column heading <b>Terms</b> to <b>Translation</b> in the Localization page. [CTM-642]

#### -Change- Improved action buttons in Localization page

Realigned the edit and delete icons for translations in the <b>Localization</b> page. [CTM-696]

#### -Change- Improved validation for number property during asset instance creation

Asset property of type number is now handled for invalid exponential values during asset creation. [CTM-681]

#### -Change- Default values of asset properties available in assets bulk import template

The bulk import template now shows any default values that are set for asset properties. [CTM-702]

#### -Change- DTM version moved under Platform info section

The DTM version is now displayed in the right drawer under the **Platform info** section. [CTM-677]

#### -Change- Role-based access for bulk import of assets

Access to the bulk import feature can now be controlled using Cumulocity IoT global and inventory roles. [CTM-649,CTM-729]

#### -Feature- Implemented ordering of key value pairs in Complex property

Key value pairs in a Complex property can now be ordered as needed by entering the desired order in the **Order** field. [CTM-846]

#### -Change- Improved asset model selection dropdown with search option

A search function has been added to the asset model dropdown when creating new assets. [CTM-771]

#### -Change- Modified DTM URLs to match naming conventions of DTM entities

DTM URLs have been modified to reflect the naming conventions followed for DTM entities. [CTM-689]

#### -Feature- Assign a location to an asset

A new default property "Location" has been introduced. Add the Location property to the desired asset model to assign co-ordinates or select the location on a map while creating an asset. [CTM-615]