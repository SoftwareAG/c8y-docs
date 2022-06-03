---
weight: 90
title: Microservice-based data broker
layout: redirect
aliases:
  - /users-guide/enterprise-edition/#ms-data-broker
---

The microservice-based data broker is powered by the {{< product-c8y-iot >}} Messaging Service that enables reliable, scalable and high-performance movement of IoT data. The microservice-based data broker is similar to the existing data broker in its functionality, except that a microservice, the `databroker-agent-server`, must be enabled to make use of it.

{{< c8y-admon-important >}}
At this time the {{< product-c8y-iot >}} Messaging Service and the microservice-based data broker are available on a limited trial basis, and not yet enabled in all {{< product-c8y-iot >}} public cloud environments. Please contact [product support](/welcome/contacting-support/) to inquire about using these capabilities in your {{< product-c8y-iot >}} environment. The original data broker will continue to operate alongside the microservice-based data broker for the time being. Users can choose which data broker to use on a per-tenant basis.
{{< /c8y-admon-important >}}

<a name="enabling-ms-data-broker"></a>
###  To enable the microservice-based data broker

1. In the {{< management-tenant >}}, navigate to **Administration** > **Tenants** > **Subtenants**, and select the tenant that will serve as the source of the data connector.
2. In the **Applications** tab, subscribe the tenant to the data broker agent (databroker-agent-server).

![Databroker-Agent-Server](/images/users-guide/enterprise-tenant/et-new-data-broker-agent.png)

{{< c8y-admon-info >}}
Tenants subscribing to a data connector don't need the data broker agent subscription.
{{< /c8y-admon-info >}}

<a name="ms-data-broker-connectors"></a>
###  Data connectors

See [Data connectors](#data-broker-connectors) for details on how to manage data connectors.

<a name="ms-data-broker-subscriptions"></a>
###  Data subscriptions

See [Data subscriptions](#data-broker-subscriptions) for details on how to manage data subscriptions.

<a name="migrating-data-broker-connectors-to-ms-data-broker"></a>
###  Migrating existing data connectors to the microservice-based data broker

After enabling the microservice-based data broker, your existing data connectors should continue to work without any additional configuration.

<a name="troubleshooting-ms-data-broker"></a>
###  Troubleshooting

#### Subscription alert

The {{< management-tenant >}} cannot be used as a data broker source tenant and this alarm is raised when trying to subscribe a {{< management-tenant >}} to the data broker agent.

#### Data broker connection error

The data broker agent is pre-configured to monitor each connector for the number of failed forwarding requests sent. If this number reaches a pre-configured threshold a CRITICAL alarm is raised in the tenant.
If this happens the data will be stored until the connection is restored and it can be forwarded again.
Failed requests can happen in the event the data broker subscriber tenant becomes unreachable.

#### Data broker slow processing alert

The data broker agent is pre-configured to monitor the rate at which events are being delivered to their destination. If events cannot be delivered fast enough, slow processing alarms will be raised. A slow processing alarm includes a connector ID to help identify which destination tenant is affected.

##### Queue backlog

This alarm is raised when latency for message delivery crosses a specified threshold. This usually happens if there is a backlog of undelivered events to the destination tenant due to various factors.

##### Average request bytes sent per second

The data broker monitors the data rate at which events are being forwarded. If this rate is lower than a pre-configured threshold, a slow processing alert will be raised. This can occur due to a slow network.

![New Data-Broker Alarms](/images/users-guide/enterprise-tenant/et-new-data-broker-alarms.png)

{{< c8y-admon-info >}}
Refer to the *Messaging Service Installation & operations guide* to find out more about how these parameters can be configured.
{{< /c8y-admon-info >}}
