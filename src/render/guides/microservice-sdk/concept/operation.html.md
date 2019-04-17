---
order: 120
title: Operating microservices
layout: redirect
---

Cumulocity manages microservices by monitoring the microservice instance and storing the metrics. In case a microservice exceeds the memory limit, it is restarted automatically.

Microservices can be scaled in case of high CPU usage. Refer to [Scaling](#scaling) for more information.

### Heap and perm/metadata

To calculate heap and perm/metadata, it takes the limit defined on the [microservice manifest](#manifest) and it is converted it into Megabytes (MB). <br>
50 MB are left for “system”. <br>
10% is taken for PermGen on JDK 7 or Metaspace on JDK 8, but not less than 128 MB and not more then 1024MB. <br>
The rest is allocated for heap size.
