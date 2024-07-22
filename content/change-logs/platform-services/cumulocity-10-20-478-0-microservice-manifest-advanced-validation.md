---
date: 2024-07-11T14:53:24.832Z
title: Microservice manifest advanced user input validation
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
ticket: MTM-59087
version: 10.20.478.0    
---
The {{< product-c8y-iot >}} platform can be extended with customer-specific functionality by deploying microservices. The application manifest provides the necessary settings to manage microservice instances and the application deployment within {{< product-c8y-iot >}}. Some settings, such as HttpGet, exec, and TCPSocket of type Probe, align with items in the Kubernetes PodSpec. For security reasons, there is now a check on upload to ensure these settings do not contain line feed characters.