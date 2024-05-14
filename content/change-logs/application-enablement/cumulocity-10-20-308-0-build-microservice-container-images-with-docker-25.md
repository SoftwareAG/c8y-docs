---
date: 2024-05-14T18:00:24.832Z
title: Building microservice container images with Docker 25
change_type:
  - value: change-VSkj2iV9m
    label: Fix
product_area: Application enablement & solutions
component:
  - value: component-7lcnqU5FL
    label: Microservice SDK
build_artifact:
  - value: tc-QHwMfWtBk7
    label: cumulocity
---
Cumulocity IoT allows you to extend the platform API with customer-specific functionality by deploying microservices. Technically, microservices are Docker containers hosted by Cumulocity IoT and they follow specific conventions. When building the microservice container image with Docker version 25 it could happen that the microservice upload failed with the following error: config file does not .json extension. This issue is now fixed.