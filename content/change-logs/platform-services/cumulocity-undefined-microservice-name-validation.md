---
date: 2024-07-22T14:53:24.832Z
title: Microservice name validation
change_type:
  - value: change-inv-3bw8e
    label: Announcement
product_area: Application enablement & solutions
component:
  - value: component-rlV-4nEfO
    label: Microservice Hosting
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-59870
---
The {{< product-c8y-iot >}} platform can be extended with customer-specific functionality by deploying microservices. The application manifest provides the necessary settings to manage microservice instances and the application deployment within {{< product-c8y-iot >}}. There are specific restrictions for the `name` and `context-path` fields:
- `name`: A string that contains lowercase characters (a-z), digits (0-9), or hyphens (-) and is between 1 and 23 characters long.
- context-path: A string that contains lowercase (a-z) and uppercase (A-Z) characters, digits, hyphens (-), dots (.), underscores (_), or tildes (~).
In certain situations, it was possible that these validations were not executed when deploying a microservice. This will be changed in Q1 2025 in Cumulocity IoT SaaS instances and in the yearly 2025 release. Therefore, ensure that your microservices are configured in accordance with the above-mentioned restrictions. You can verify the correctness of your microservices by uploading them via the UI or REST API. If this is successful, your configuration is correct.