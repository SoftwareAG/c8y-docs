---
weight: 40
layout: redirect
title: Troubleshooting
---

Some common problems and their solutions have been identified and documented below.

##### After deploying my microservice, requests to any endpoint return an error message "Microservice not available Connection refused" {#after-deploying-my-microservice-requests-to-any-endpoint-return-an-error-message-microservice-not-available-connection-refused}

After uploading the microservice, the internal deployment and container run may take a couple of minutes. Once completed, the error message will disappear.

##### I get a message error saying "The current .NET SDK does not support targeting .NET Core 3.1." {#i-get-a-message-error-saying-the-current-net-sdk-does-not-support-targeting-net-core-31}

This error will appear if you try running the SDK on Visual Studio 2017 or lower. The current version of the {{< product-c8y-iot >}} Microservices SDK (1006.6.0) is compatible with .NET Core 3.1 and Visual Studio 2019, and it is a prerequisite for developing applications.
