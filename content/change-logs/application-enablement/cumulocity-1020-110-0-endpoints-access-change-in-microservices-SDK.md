---
date: 
title: Restricting Access to Spring boot actuator endpoints
product_area: Application enablement & solutions
change_type:
  - value: change-inv-3bw8e
    label: Announcement 
component:
  - value: component-Sv2buFZ5I
    label: Microservice SDK
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-58316
version: 1020.111.0 
---

Microservices SDK exposes certain spring boot actuator endpoints, including /loggers, and provides an initial security configuration regarding the exposed spring boot actuator endpoints. 
Due to security considerations, the POST-access to the /loggers endpoint has been restricted to the roles TENANT_ADMIN, TENANT_MANAGEMENT_ADMIN, APPLICATION_MANAGEMENT_ADMIN and APPLICATION_MANAGEMENT_UPDATE
