---
weight: 65
title: Data Broker 2.0
layout: redirect
---

The Data Broker 2.0 is powered by the all-new Cumulocity Messaging Service that enables reliable, scalable and high-performance movement of IoT data. The Data Broker 2.0 is similar to the existing Data Broker in its functionality except that it needs a special microservice, known as Data-Broker microservice, to be enabled to make use of it.

### <a name="enabling-data-broker-2.0"></a> To Enable Data Broker 2.0

1. As a management tenant, navigate to Administration > Tenants > Subtenants & select the tenant that will serve as the Data connector.
2. Click on the Applications tab and subscribe the tenant to `databroker-agent-server`.

> **Info:** Tenants subscribing to data connector don't need `databroker-agent-server` application subscription.

### <a name="data-broker-connectors-2.0"></a> Data connectors

See [Data connectors](#data-broker-connectors) for details on how to manage data connectors.

### <a name="data-broker-subscriptions-2.0"></a> Data subscriptions
 
See [Data subscriptions](#data-broker-subscriptions) for details on how to managed data subscriptions.

### <a name="migrating-data-broker-connectors-to-2.0"></a> Migrating existing data connectors to Data Broker 2.0

After enabling Data Broker 2.0, your existing data connectors should continue to work without any additional configuration.

### <a name="troubleshooting-data-broker--2.0"></a> Troubleshooting

#### Management tenant subscription alert

This alarm is raised when trying to subscribe a management tenant to data connector. 

#### Data Broker connection error

The databroker is configured to monitor each connector for the number of bad forwarding requests sent. If this number reaches a configured threshold a CRITICAL alarm is raised in the tenant. 
If this happens the data will be stored until the connection is restored and it can be forwarded again.
Bad requests can happen in the event the databroker subscriber tenant becomes unreachable.
TODO screenshot
Maps to DATA_BROKER_ALARM_REST_REQUEST_FAILURE

#### Data Broker slow processing alert

The databroker agent is configured to monitor the rate at which events are being delivered to their destination. All forwarding events are stored by the databroker to ensure a reliable delivery. 
If data cannot be delivered fast enough, slow processing alarms will be raised. A slow processing alarm includes connector id to help identify which tenants are affected. 

* Queue Backlog

This alarm is raised if there is a backlog of undelivered events. When events cannot be delivered immediately they will get stored to disk, this increases delivery latency.
If the latency for message delivery crosses a specified threshold the databroker agent will log this and raise a CRITICAL alarm. 
This can happen when the rate at which events are being sent to the connector is higher than the rate they can be delivered to their destination tenant. This can lead to running out of disk space.
TODO what happens in the event of bookies running out of space?
TODO screenshot
Maps to DATA_BROKER_ALARM_PULSAR_BACKLOG

* Average request bytes sent per second

The databroker monitors the data rate at which events are being forwarded, if this rate is lower than a critical threshold a slow processing alert will be raised. This can occur due to slow network.
TODO description + screenshot
Maps to DATA_BROKER_ALARM_BYTES_SEND_PER_SECOND


