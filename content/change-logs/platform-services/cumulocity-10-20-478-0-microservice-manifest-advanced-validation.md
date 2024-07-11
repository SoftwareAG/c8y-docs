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
You can extend the Cumulocity IoT platform with customer-specific functionality by deploying microservices. The application manifest provides the necessary settings to manage microservice instances and the application deployment within the Cumulocity IoT platform. Some settings, such as httpGet, exec, and tcpSocket of type Probe, align with items in the Kubernetes PodSpec. For security reasons, there is now a check on upload to ensure these settings do not contain whitespace or line feed characters.