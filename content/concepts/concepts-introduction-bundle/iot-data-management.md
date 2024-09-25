---
weight: 40
title: IoT Data Management
---

{{< product-c8y-iot >}} leverages a canonical yet extensible [Data Model](/concepts/domain-model/) to represent data from different device types and protocols consistently. This approach decouples device integration from IoT applications.

To bring IoT sensor data into a meaningful context, {{< product-c8y-iot >}} offers the [Digital Twin Manager](/dtm/dtm-introduction/) (DTM). DTM enables users to create virtual representations of physical assets, complete with their [properties](/dtm/asset-types/#asset-properties) and [hierarchical relationships](/dtm/asset-hierarchy/). The Digital Twin Manager also allows users to [link sensor data](/dtm/asset-hierarchy/#to-assign-devices-to-an-asset) directly to this asset hierarchy. By [modeling assets](/dtm/asset-types/#asset-models) and their attributes, organizations can create a comprehensive view of their IoT data that is leveraged by all {{< product-c8y-iot >}} Applications and can also be queried via the [REST APIs](https://{{< domain-c8y >}}/api).

The [DataHub](/datahub/datahub-overview/) facilitates the efficient [querying](/datahub/working-with-datahub/#querying-offloaded) and [offloading](/datahub/working-with-datahub/#configuring-offloading-jobs) of IoT data into any Data Lake store. This capability is particularly valuable for organizations dealing with large volumes of data, as it enables long-term storage and analysis of historical data.
