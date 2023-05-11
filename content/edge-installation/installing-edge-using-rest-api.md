---
weight: 20
title: Installing Edge using the REST APIs
layout: bundle
section:
  - edge_server
---

{{< product-c8y-iot >}} Edge supports REST APIs to perform the tasks like installation, configuration, updating the Edge appliance, and so on. For more information about working with REST APIs, see [REST APIs for Edge](/edge/rest-api/).

To install {{< product-c8y-iot >}} Edge using the REST APIs, use the following endpoints:

- [POST /edge/install](/edge/rest-api/#post-edgeinstall)
- [GET /edge/tasks/latest-installation](/edge/rest-api/#get-edgetaskslatest-installation)

To check the status of the installation, use the following endpoints:

- [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid)
- [GET /edge/tasks/{id}/log](/edge/rest-api/#get-edgetasksidlog)
