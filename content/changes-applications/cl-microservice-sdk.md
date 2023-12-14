---
title: Microservice SDK
layout: change_log
section:
  - change_log
weight: 40
---

### December 2023

#### -Announcement- Deprecation of the Microservice SDK for C#

With the introduction of auto-generated SDKs, we provide an always up-to-date developer library with the purpose to facilitate the development of Cumulocity IoT microservices in different programming languages including C#.

The new auto-generated SDKs make our existing Microservice SDK for C# obsolete. For this reason, the Microservice SDK for C# has been removed from our public product documentation.

To learn more about using the auto-generated SDKs, refer to our respective [GitHub repository](https://github.com/SoftwareAG/cumulocity-clients-dotnet).


#### -Change-  Dependency updates

- Dependencies on <code>org.eclipse.jetty:jetty-*</code> were updated to version 9.4.51.v20230217. [MTM-53359]
- The Spring Boot dependency has been updated to version 2.7.11. [MTM-53342]
