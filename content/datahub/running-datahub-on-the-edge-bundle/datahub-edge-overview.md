---
weight: 10
title: DataHub Edge overview
layout: redirect
---

### Documentation overview

The following sections will walk you through all the functionalities of Cumulocity IoT DataHub Edge in detail.

For your convenience, here is an overview of the contents:

| Section | Content |
| -----   | -----   |
| [Getting started](/datahub/running-datahub-on-the-edge/#getting-started) | Log into DataHub Edge |
| [Setting up DataHub Edge](/datahub/running-datahub-on-the-edge/#setting-up-datahub-edge) | Set up DataHub Edge and its components |
| [Working with DataHub Edge](/datahub/running-datahub-on-the-edge/#working-with-datahub-edge) | Manage offloading pipelines and query the offloaded results |
| [Operating DataHub Edge](/datahub/running-datahub-on-the-edge/#operating-datahub-edge) | Run administrative tasks |

### DataHub Edge at a glance

Cumulocity IoT Edge (TODO: add link to edge docu) is an onsite, single-server variant of the Cumulocity IoT Core platform. It is delivered as a software appliance designed to run on industrial PC’s or local servers. This appliance can optionally include DataHub Edge, which is the edge variant of DataHub.

DataHub Edge offers the same functionality as the cloud-variant of DataHub does. You can define offloading pipelines, which regularly move data from the internal Cumulocity database into a data lake. Dremio as internal engine of DataHub can access the datalake and run analytical queries against its contents, using standard SQL as query interface. In an edge setup, the data lake is typically defined as an NAS for local storage of the data.

TODO: usage scenarios for CDH edge

<img src="/images/datahub-guide/datahub-edge-overview.png" alt="Overview of DataHub Edge" style="max-width: 70%">

DataHub Edge consists of the following building blocks:
* The DataHub UI is deployed as web application into the Cumulocity core. It is the frontend for managing offloading pipelines and operating DataHub Edge.
* The DataHub backend manages offloading pipelines and their scheduled execution. The backend and its internal database run within one Docker container in the Docker daemon. Its associated state is persisted on the central data disk.
* The query processing engine bases on a Dremio master and a Dremio executor as well as of a Zookeeper instance. Dremio master and Zookeeper run in one Docker container and Dremio executor runs in another one. Both containers run in the Docker daemon. The associated state of the containers is persisted on the central data disk.
* The data lake is also hosted on the central data disk.

#### DataHub Edge versus DataHub cloud deployments

DataHub Edge uses the same software as DataHub does, though in the following aspects those two variants differ:

| Area | DataHub Edge | DataHub |
| -----   | -----   | -----   |
| High Availability | Depending on the underlying virtualization technology  | ??? |
| Vertical scalability | Yes | ??? |
| Horizontal scalability | No | Yes |
| Upgrades with no downtime | No | Yes??? |
| Root access | No | Yes, if customer is hosting |
| Installation | Offline | Online |
| Dremio cluster setup | 1 master, 1 executor | scalable in the number of masters and executors |
| Dremio container management | Docker daemon | Kubernetes |
| DataHub backend container management | Docker daemon | Microservice in Cumulocity Core |
| Data lakes | NAS, (S3, ADLS, Azure Storage only if edge has internet access) | S3, ADLS, Azure Storage |