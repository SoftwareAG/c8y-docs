---
title: File-backed or memory-backed buffering
layout: redirect
weight: 60
---

The {{< product-c8y-iot >}} C++ SDK offers two message buffering methods in case of connection lost. To switch it, you just need to change the arguments to be parsed to `SrReporter()`. The {{< product-c8y-iot >}} Linux agent chooses memory-backed buffering by default.

The user guide of the  C++ SDK mentions the pros and cons of each buffering technique in the `SrReporter()` description.

{{< c8y-admon-info >}}
It implements a capacity limited buffering technique for counteracting long periods of network error. This buffering technique can be further categorized into memory backed and file backed buffering. Memory backed buffering is more efficient since there is no file I/O involved, while the buffering is limited by the available memory and doesn't survive a sudden outage. Oppositely, file backed buffering performs a lot of file I/O operations, but at the same time, its capacity is much larger and buffered messages will not be lost in case of a sudden outage.
{{< /c8y-admon-info >}}

This section shows you how to change to file-backed buffering method in the {{< product-c8y-iot >}} Linux agent. Change from

```cpp
rpt = new SrReporter(server + port, agent.deviceID(), agent.XID(),
                     agent.tenant() + '/' + agent.username(),
                     agent.password(), agent.egress, agent.ingress);
```

to

```cpp
rpt = new SrReporter(server + port, agent.deviceID(), agent.XID(),
        agent.tenant() + '/' + agent.username(), agent.password(),
        agent.egress, agent.ingress, 10000, "/path/to/file.cache");
```

You just need to add two new arguments when constructing the `SrRepoter` object:
- 10000: Capacity of the request buffer
- _/path/to/file.cache_: The file path for file-backed buffering
