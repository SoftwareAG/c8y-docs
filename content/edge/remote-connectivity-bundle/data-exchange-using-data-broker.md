---
weight: 50
title: Data exchange using data broker
layout: redirect
---

Data broker lets you upload the data to a {{< product-c8y-iot >}} tenant account selectively. Note that you must first create a {{< product-c8y-iot >}} tenant account.

{{< c8y-admon-important >}}
Data broker and Edge connectivity are compatible only with the current version and previous two releases of {{< product-c8y-iot >}}.
{{< product-c8y-iot >}} has a release every three months.
{{< /c8y-admon-important >}}

You can share the following data with the tenant account:

* devices (and more generically, managed objects)
* events
* alarms
* measurements

{{< c8y-admon-important >}}
Data broker in Edge does not support synchronization of the [operations](/concepts/domain-model/#operations).
{{< /c8y-admon-important >}}

To upload the data to a {{< product-c8y-iot >}} tenant account, you must first create a data connector in the Edge appliance and subscribe this connector in the tenant account.

A data connector describes the subset of the data that you would like to send to a destination tenant. For more information, see [{{< enterprise-tenant >}} > Using the data broker > Data connector](/users-guide/enterprise-tenant/#data-connectors) in the *User guide*.

To create a data connector and upload the data to the tenant account, perform the following steps:

1. In your Edge applaince, log in to the *edge* tenant.

2. In your Edge appliance, go to the Administration application. Click **Data broker** > **Data connectors**.

   <img src="/images/users-guide/enterprise-tenant/et-data-broker-navigator.png" alt="Data broker menus">

3. Click **Add data connector** and provide all the information and filters. See [{{< enterprise-tenant >}} > Using the data broker > Data connector > To add a data connector](/users-guide/enterprise-tenant/#to-add-a-data-connector) in the *User guide*.

   Note down the security code. This security code will be used to subscribe the connector in the tenant account.

4. Log in to the {{< product-c8y-iot >}} tenant account.

5. In the tenant account, go to the Administration application. Click **Data broker** > **Data subscriptions** to subscribe the connector created in your Edge appliance.

   Click **Add data subscription** and provide the security code. Click **Submit** and accept the subscription. See [{{< enterprise-tenant >}} > Using the data broker > Data subscriptions](/users-guide/enterprise-tenant/#data-subscriptions) in the *User guide*.

   You can now navigate to the Device Management application or the Cockpit application. You will find a new “virtual group” with a specific icon showing the forwarded devices. The group will have the same name as your subscription.

For more information about sending and receiving data in {{< product-c8y-iot >}}, see [{{< enterprise-tenant >}} > Using the data broker](/users-guide/enterprise-tenant#data-broker) in the *User guide*.
