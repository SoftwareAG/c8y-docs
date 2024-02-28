---
weight: 10
title: Overview
layout: redirect
---

Devices can authenticate against the {{< product-c8y-iot >}} platform using X.509 client certificates.  

Devices can communicate using the MQTT interface or using rest client of the platform, but MQTT over WebSocket is not supported. The {{< product-c8y-iot >}} platform expects devices to connect using SSL on port 8883.

Each tenant individually defines whom it trusts by uploading the base CA certificate.

Devices connecting to the platform with certificates do not need to provide the tenant ID, username and password. Authentication information will be obtained from the certificates.


### Prerequisites {#prerequisites}

In order to follow this tutorial, check if the following prerequisites are met:

-   You have a valid tenant, user and password in order to access {{< product-c8y-iot >}}.
-   The command line tool CURL is installed on your system.
