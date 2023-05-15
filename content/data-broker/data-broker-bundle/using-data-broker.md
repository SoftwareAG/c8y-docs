---
weight: 10
title: Using the data broker
layout: bundle
section:
  - app_development
aliases:
  - /users-guide/enterprise-edition/
helpcontent:
  - label: data-broker
    title: Data broker
    content: "Data broker lets you share data selectively with other tenants such as devices (and more generically, managed objects), events, alarms, measurements, or operations."
  - label: data-connector
    title: Data connector
    content: "The **Data connectors** page shows a list of all currently defined data connectors with their status. A data connector describes the subset of the data that you would like to send to a destination tenant as well as the URL of that destination tenant. To add a data connector, click **Add data connector** at the top right."
  - label: data-subscriptions
    title: Data subscriptions
    content: "The **Data subscriptions** page shows a list of all currently defined data forwarded to your tenant. For each subscription, the name, target tenant and status (enabled or disabled) are provided on a card. Use the toggle to temporarily stop forwarding data to your tenant."
---

Data broker lets you share data selectively with other tenants. You can share:

- Devices (and more generically, managed objects)
- Events
- Alarms
- Measurements
- Operations

{{< c8y-admon-req >}}
To be able to use this feature, your tenant must be subscribed to the application “feature-broker”.
{{< /c8y-admon-req >}}

Navigate to **Data connectors** in the **Data broker** menu if you would like to send data to another tenant. Navigate to **Data subscriptions**, if you would like to receive data from another tenant.

{{< c8y-admon-important >}}
Devices that are forwarded using the data broker are charged like normal devices in the destination tenant.
{{< /c8y-admon-important >}}

Be aware of the following limitations of the data broker:

* Cloud Remote Access cannot be used on the destination tenant.
* The {{< management-tenant >}} cannot be used as data broker source tenant.
* Currently, the Fieldbus widget does not work on tenants that receive the fieldbus devices through data broker, as the corresponding data models are not synchronized.
* Data broker does not guarantee the same order of messages on destination tenants as it was on the source tenant.
* While we provide backwards compatibility, we cannot ensure that data broker can send data to {{< product-c8y-iot >}} tenants which run on earlier {{< product-c8y-iot >}} versions than the source.

<a name="data-broker-subscriptions"></a>
### Data subscriptions

In the **Data subscriptions** page, you can manage existing data subscriptions or create new ones.

Click **Data subscriptions** to see a list of all currently defined data forwarded to your tenant.

For each subscription, the name, the target tenant and the status (enabled or disabled) is provided on a card.

Use the toggle to temporarily stop forwarding data into your tenant.

#### To set up data forwarding on the receiving end

1. Click **Add data subscription** in the top menu bar to receive data.
2. In the new card, enter the security code that you received from the sending end of the data.
3. When the connection is established, click **Accept** to start forwarding data into your tenant. The subscription is active now.
4. You can use the toggle in the card to temporarily stop forwarding data into your tenant.

You can now navigate to the Device Management application or the Cockpit application. You will find a new "virtual group" with a specific icon (see the screenshot below) showing the forwarded devices. The group will have the same name as your subscription. Devices are "lazily" created on the destination side whenever they send data for the first time after setting up an active subscription.

![Data broker group in cockpit app](/images/users-guide/enterprise-tenant/et-data-broker-group-created.png)

#### To delete a data connector

Click the menu icon and then click **Delete** to stop data forwarding and delete the data connector.

<a name="data-broker-troubleshooting"></a>
### Troubleshooting

If the data broker is not able to connect to a destination tenant, a CRITICAL alarm is raised, showing the connector which is affected.

#### Queue overflow

On the source tenant, data broker queues data that cannot be forwarded immediately to the destination tenant. The amount of data that can be queued is limited. If {{< product-c8y-iot >}} cannot queue any further data, the oldest queued data is dropped. In this case, a MAJOR alarm is raised in the tenant, showing the connector which is affected.

![Data broker alarms](/images/users-guide/enterprise-tenant/et-data-broker-alarm.png)

Similarly, an alarm is raised when the input queue is overflown.

To reduce the number of alarms, alarms are not triggered more often than once per minute.
