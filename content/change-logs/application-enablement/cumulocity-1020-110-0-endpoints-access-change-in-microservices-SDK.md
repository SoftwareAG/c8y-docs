---
date: 2024-06-27
title: Restricting access to Spring Boot actuator endpoints
product_area: Application enablement & solutions
change_type:
  - value: change-3BQrQ6adS
    label: API Change
component:
  - value: component-Sv2buFZ5I
    label: Microservice SDK
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
ticket: MTM-58316
version: 1020.111.0
---

The Microservice SDK exposes certain Spring Boot actuator endpoints, including `/loggers`, and provides an initial security configuration regarding the exposed Spring Boot actuator endpoints.
For security reasons, the POST access to the `/loggers` endpoint has been restricted to the roles TENANT_ADMIN, TENANT_MANAGEMENT_ADMIN, APPLICATION_MANAGEMENT_ADMIN and APPLICATION_MANAGEMENT_UPDATE.
