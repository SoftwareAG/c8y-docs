---
weight: 30
title: Invoking other parts of the Cumulocity IoT REST API
layout: redirect
---

The {{< product-c8y-iot >}} REST API covers some extra functionality which is not covered with the individual event types. To invoke any other part of the REST API, a generic request-response API is provided which you can use to invoke any part of the {{< product-c8y-iot >}} API.

You can use the following request-response events:

* com.apama.cumulocity.GenericRequest
* com.apama.cumulocity.GenericResponse
* com.apama.cumulocity.GenericResponseComplete

{{< c8y-admon-info >}}
The Apama-ctrl microservice, and thus all EPL apps code within it, runs with a number of permissions which permit the EPL to access all objects in the inventory and also read user details.  
This includes personal identifiable information, such as username, email address, and so on.
{{< /c8y-admon-info >}}

For more information, see [REST implementation](https://{{< domain-c8y >}}/api/{{< c8y-current-version >}}/#section/REST-implementation) in the {{< openapi >}}
and [Invoking other parts of the Cumulocity IoT REST API]({{< link-apama-webhelp >}}index.html#page/pam-webhelp%2Fco-ConApaAppToExtCom_cumulocity_invoking_other_parts_of_the_cumulocity_rest_api.html) in the Apama documentation.
