---
weight: 65
title: Data Broker 2.0
layout: redirect
---

The Data Broker 2.0 is powered by the all-new Cumulocity Messaging Service that enables reliable, scalable and high-performance movement of IoT data. The Data Broker 2.0 is similar to the existing Data Broker in its functionality except that it needs a special microservice, known as Data-Broker microservice, to be enabled to make use of it.

### <a name="enabling-data-broker-2.0"></a> To Enable Data Broker 2.0

1. As a management tenant, navigate to Administration > Tenants > Subtenants & select the tenant that will serve as the Data connector.
2. Click on the Applications tab and subscribe the tenant to `databroker-agent-server`.

![Databroker-Agent-Server](/images/users-guide/enterprise-tenant/et-new-data-broker-agent.png)

> **Info:** Tenants subscribing to data connector don't need `databroker-agent-server` application subscription.

### <a name="data-broker-connectors-2.0"></a> Data connectors

See [Data connectors](#data-broker-connectors) for details on how to manage data connectors.

### <a name="data-broker-subscriptions-2.0"></a> Data subscriptions
 
See [Data subscriptions](#data-broker-subscriptions) for details on how to managed data subscriptions.

### <a name="migrating-data-broker-connectors-to-2.0"></a> Migrating existing data connectors to Data Broker 2.0

After enabling Data Broker 2.0, your existing data connectors should continue to work without any additional configuration.

### <a name="troubleshooting-data-broker--2.0"></a> Troubleshooting

#### Management tenant subscription alert

The management tenant cannot be used as a data broker source tenant & this alarm is raised when trying to subscribe a management tenant to the data broker agent.

#### Data Broker connection error

The data broker agent is configured to monitor each connector for the number of bad forwarding requests sent. If this number reaches a configured threshold a CRITICAL alarm is raised in the tenant. 
If this happens the data will be stored until the connection is restored and it can be forwarded again.
Bad requests can happen in the event the data broker subscriber tenant becomes unreachable.

#### Data Broker slow processing alert

The data broker agent is configured to monitor the rate at which events are being delivered to their destination. If events cannot be delivered fast enough, slow processing alarms will be raised. A slow processing alarm includes a connector id to help identify which destination tenant is affected.

* Queue Backlog

This alarm is raised when latency for message delivery crosses a specified threshold. This usually happens if there is a backlog of undelivered events to the destination tenant due to various factors.

* Average request bytes sent per second

The data broker monitors the data rate at which events are being forwarded. If this rate is lower than a configured threshold, a slow processing alert will be raised. This can occur due to a slow network.

![New Data-Broker Alarms](/images/users-guide/enterprise-tenant/et-new-data-broker-alarms.png)


