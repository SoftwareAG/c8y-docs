---
order: 30
title: Using the data broker
layout: redirect
---

<a name="data-broker"></a>
Data broker lets you share data selectively with other tenants. You can share:

- devices (and more generically, managed objects),
- events,
- alarms,
- measurements,
- operations.

Navigate to **Data connectors** if you would like to send data to another tenant. Navigate to **Data subscriptions**, if you would like to receive data from another tenant.

<img src="/guides/images/users-guide/data-broker-on-navigator.PNG" alt="Data broker menus" >

>**Info**: Devices that are forwarded using the data broker are charged like normal devices in the destination tenant.
>
>Be aware of the following limitations of the data broker:
> 
> * Cloud Remote Access cannot be used on the destination tenant. 
> * The management tenant cannot be used as data broker source tenant.
> * Currently, the Fieldbus widget does not work on tenants that receive the fieldbus devices through data broker, as the corresponding data models are not synchronized.
> * Data broker does not guarantee the same order of messages on destination tenants as it was on the source tenant. 
> * While we provide backwards compatibility, we can not ensure that data broker can send data to Cumulocity tenants which run on later Cumulocity versions than the source.

### <a name="data-broker-connectors"></a> Data connectors

A data connector describes the subset of the data that you would like to send to a destination tenant as well as the URL of that destination tenant.

<a name="data-broker-connectors-list"></a> **Viewing data connectors**

In the **Data connectors** page, you can manage existing data connectors or create new ones. Click **Data connectors** to see a list of all currently defined data connectors with their status.

![Data broker connectors list](/guides/images/users-guide/data-broker-connectors-list.PNG)

For each data connector, the following information is provided:

* the data connector's name
* its destination tenant
* a description
* the status
* the number of filters set for the data connector

Use the slider to enable and disable data forwarding to the destination tenant. If data is being forwarded, the slider reads "active". If data is not being forwarded, the slider reads "suspended" or "pending". "Suspended" means that you have disabled forwarding. "Pending" means that the destination tenant has disabled forwarding.

* To modify the data connector's configuration, click the menu icon and from the context menu select **Edit**. The configuration is described in more detail below.
* Click "**Duplicate** in the context menu to create another data connector with the same configuration.
* Click **Delete** in the context menu to stop data forwarding and remove the data connector.

<a name="data-broker-connector-edit"></a> **Creating or editing data connectors**

Click **Add data connector** in the top menu bar to create a new data connector.

![Data broker edit connector](/guides/images/users-guide/data-broker-edit-connector.PNG)

To create a new data connector provide the following information:

|Field|Description|
|:---|:---|
|Title|The name of the data connector.
|Target URL for data connector|The URL of the tenant to which data will be forwarded. Once saved, you cannot edit this value anymore.
|Description|A textual description of the configuration. Both the name and the description will be visible on the destination side after accepting the subscription.
|Data filters|A set of filters that define what is copied to the destination. You need to configure at least one filter.

Each data filter contains the following information:

|Field|Description|
|:---|:---|
|Group or device|The group or device that is forwarded. Selecting a group here results in all sub-groups and sub-devices being forwarded. Leaving the default option "All objects" selected will synchronize all types of objects, including internal and technical ones (not exclusively groups and devices), which may cause issues on the target tenant.
|API|The type of data being forwarded (alarms, events, measurements, manages objects) or being received (operations).
|Fragments to filter|The fragments that need to be present in a device to be forwarded.
|Fragments to copy|The fragments that are copied to the destination. If nothing is specified here, only standard properties of managed objects, alarms, events and measurements are forwarded (see below). Select **Copy all fragments** to forward the entire object.
|Type filter|Forwarded data needs to have this value in its "type" property.

> **Info:** If the **Group or device** field is filled in the entire descendant structure of the inventory is forwarded to the destination as soon as the connector stays active. if the **Group or device** field is empty or set to  "all" the descendant structure of the inventory is not forwarded; in this case the filter works in "lazy" mode, i.e. forwards the device or asset along with its first event/measurement/alarm.

If operation API is checked in filters, operations created in the target tenant will be forwarded to the source tenant. This applies only to operations that meet the following conditions:

* operation's device itself is a result of forwarding data;
* operation matches other filter criteria.

Update of operation status coming from source will be forwarded to the destination tenant.

The heading of a data filter summarizes the configuration in one line. The standard properties that are copied by default are:

* **For created alarms**: type, text, time, severity, status.
* **For updated alarms**: status, text, severity.
* **For created events**: type, text, time.
* **For created measurements**: type, text, time
* **For created and updated devices**: type, name, c8y&#95;IsBinary, c8y&#95;IsDeviceGroup, c8y&#95;IsDevice, c8y&#95;DeviceGroup, c8y&#95;DeviceSubgroup, c8y&#95;SmartRule, c8y&#95;DynamicGroup, c8y&#95;DeviceQueryString.
* **For updated operations**: status

Once you have configured your data connector, click **Save** to save the configuration. 

After saving, you will see a security code displayed below your configuration. The security code prevents unintended forwarding of data. You need to communicate this security key separately to an administrative user of the destination tenant. You can use the icon next to the security code to copy the code to your clipboard.

![Security code](/guides/images/users-guide/securitycode.png)

### <a name="data-broker-subscriptions"></a> Data subscriptions

In the **Data subscriptions** page, you can manage existing data subscriptions or create new ones. 

Click **Data subscriptions** to see a list of all currently defined data forwarded to your tenant. 

<img src="/guides/images/users-guide/Administration/Admin_Subscriptions.png" alt="Data subscriptions" >

For each subscription, the name, the target tenant and the status (enabled or disabled) is provided on a card.

Use the slider to temporarily stop forwarding data into your tenant.

To stop data forwarding and remove the data connector, click the menu icon and from the context menu select **Delete**.

**How to set up data forwarding on the receiving end**

1. Click **Add data subscription** in the top menu bar to receive data. 
2. In the new card, enter the security code that you received from the sending end of the data.
3. When the connection is established, click **Accept** to start forwarding data into your tenant. The subscription is active now.
4. You can move the slider in the card to temporarily stop forwarding data into your tenant.

You can now navigate to the Device Management application or the Cockpit application. There will be a new "virtual group" with a specific icon (see the screenshot below) showing the forwarded devices. The group will have the same name as your subscription. Devices are "lazily" created on the destination side whenever they send data for the first time after setting up an active subscription.

![Data broker group in cockpit app](/guides/images/users-guide/data-broker-group-created.PNG)

### <a name="data-broker-troubleshooting"></a> Troubleshooting

On the source tenant, data broker queues data that cannot be forwarded immediately to the destination tenant. The amount of data that can be queued is limited. If Cumulocity cannot queue any further data, the oldest queued data is dropped. In this case, an alarm is raised in the tenant.

**Error message**

	Data broker processing is currently overloaded and may stop processing your events. Please contact support.

**Description**

The data broker queue for the respective tenant is full. This might for example happen when more events are created than currently can be handled.

In this case, the above alarm is raised. To reduce the number of alarms, alarms are not triggered more often than once per minute. 