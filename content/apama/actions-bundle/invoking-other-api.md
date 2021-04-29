---
weight: 30
title: Invoking other parts of the Cumulocity IoT REST API
layout: redirect
---

The Cumulocity IoT REST API covers some extra functionality which is not covered with the individual event types. To invoke any other part of the REST API, a generic request-response API is provided which you can use to invoke any part of the Cumulocity IoT API.

You can use the following request-response events:

* GenericRequest
* GenericResponse
* GenericResponseComplete

> **Info:** The Apama-ctrl microservice, and thus all EPL apps code within it, runs with a number of permissions which permit the EPL to access all objects in the inventory and also read user details.  
This includes personal identifiable information, such as username, email address, and so on.

For more information, see [REST implementation](https://www.cumulocity.com/api/#section/REST-implementation) and [Invoking other parts of the Cumulocity IoT REST API](https://documentation.softwareag.com/onlinehelp/Rohan/Apama/v10-7/apama10-7/apama-webhelp/index.html#page/apama-webhelp%2Fco-ConApaAppToExtCom_cumulocity_invoking_other_parts_of_the_cumulocity_rest_api.html) in the Apama documentation.
