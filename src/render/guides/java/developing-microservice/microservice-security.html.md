---
order: 40
layout: redirect
title: Microservice security
---

The @EnableMicroserviceSecurity annotation sets up the standard security configuration for microservices, which requires basic authorization for all endpoints (except for health check endpoint configured using @EnableHealthIndicator). A developer can secure its endpoints using standard spring security annotations e.g. @PreAuthorize("hasRole('ROLE_A')") and user's permissions will be validated  against user's roles stored on the platform.