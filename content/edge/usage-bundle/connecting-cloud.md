---
weight: 30
title: Connecting to the Cloud
layout: redirect
---

### Data exchange using Data Broker

Cumulocity IoT Edge provides the option to upload Edge data to a Cumulocity tenant account selectively. Note that you must first create a Cumulocity tenant account.

You can share the following data:

* devices (and more generically, managed objects)
* events
* alarms
* measurements
* operations

Go to **Data Broker** > **Data connectors** if you would like to send data to the tenant account. 

Go to **Data Broker** > **Data subscriptions** in your tenant account to receive the data from Edge.

<img src="/guides/images/users-guide/data-broker-navigator.png" alt="Data broker menus">

In the same way, you can push operations from a Cumulocity tenant account to Cumulocity IoT Edge devices.
 
For details about sending and receiving data in Cumulocity, see [Enterprise Tenant > Using the Data Broker](/guides/users-guide/enterprise-edition#data-broker).

### Remote Device Management

Cumulocity tenant allows you to remotely manage your Edge device by registering the Edge device in the tenant account. To do so, you must first configure the Cumulocity tenant account in Edge Agent and then register your Edge device in the tenant account.

To configure the tenant account in your Edge device, run the post-installation script and select [Option 7 - Configure Edge Agent](/guides/edge/installation/#option-7-configure-edge-agent). For more information, see [Configuring the Edge server](/guides/edge/installation/#configuring-the-edge-server).

The Cumulocity tenant uses the SSH protocal to access the remote Edge device through a web browser.   