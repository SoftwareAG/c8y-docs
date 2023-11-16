---
title: Digital twin manager
layout: change_log
section:
  - change_log
weight: 20
---


### October 2023

#### -Change- Improved the visualization of skipped steps during asset instance creation

During asset instance creation skipped steps which are not mandatory are marked with grey coloured ticks. [CTM-654]

#### -Change- Asset entities creation page is implemented with UI debouncing to validate key field.

Implemented UI debouncing to validate key in asset model, asset and property creation page. This will improve the situation where save button is disabled until the focus is removed from the key field while creating these entities. [CTM-651]

#### -Change- Improved readability in Localization screen

Renamed <b>Keys</b> to <b>Identifier</b> and <b>Terms</b> to <b>Translation</b> in Localization screen. [CTM-642]

#### -Change- Improved action buttons in Localization screen

Realigned Edit/Delete options for translations under localization screen. [CTM-696]

#### -Change- Improved validation for number property during asset instance creation

Implemented validation when only E is entered as a value for Number property during asset instance creation. [CTM-681]

#### -Change- Bulk assets import to use logged in user instead of service user to import the assets

Implemented the bulk assets import to use logged in user instead of service user to import the assets also to enable inventory role access for bulk import. [CTM-729]

#### -Change- Considered default values for asset properties in case of bulk import of assets

If a default value is set for a property, then the bulk import template will have it mentioned against the corresponding property. [CTM-702]

#### -Change- Moved DTM version under platform info section

Moved DTM version on the right drawer under platform info section. [CTM-677]

#### -Change- Inventory role implementation for DTM assets

DTM UI and microservice is implemented with inventory role support for assets. [CTM-649]

#### -Change- Implemented ordering of key value pairs in complex properties

Complex properties are now implemented with ordering for key value pairs. [CTM-902]

#### -Change- Asset hierarchy dropdown with search option

Implemented asset hierarchy dropdown in asset creation page with searchable option. [CTM-771]

#### -Change- Modified DTM URLs to match naming conventions of DTM entities.

DTM URLs are now modified to reflect the naming conventions followed for DTM entities. [CTM-689]

#### -Feature- Assets are added with location details

Location is added as a default property with Altitude, Latitude and Longitude. If this property is associated with any asset model then assets are created with location details [CTM-615]