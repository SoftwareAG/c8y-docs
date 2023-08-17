---
weight: 60
title: E
layout: bundle
section:
  - getting_started
---


### Enterprise tenant

A tenant type in the [{{< product-c8y-iot >}} tenant hierarchy](/concepts/tenant-hierarchy/).

Enterprise tenants offer additional administrative functionality compared to a Standard tenant, the major difference being multi-tenancy. Using an Enterprise tenant, you can create and manage subtenants, manage the subscribed applications/features of the subtenants, and invoice subtenants based on usage statistics. Moreover, Enterprise tenants offer individual customization features, such as Branding for the creation of an individual look & feel.

See also [Standard tenant](#standard-tenant) and [Management tenant](#management-tenant).


<a name="epl"></a>
### Event Processing Language (EPL)

On top of {{< product-c8y-iot >}} you can use the Apama streaming analytics engine to define business operations for real-time processing. The operation logic is implemented in Apama’s Event Processing Language (EPL).
EPL covers statements, which are organized into actions and monitors. Monitor files can be edited directly from within {{< product-c8y-iot >}} using the [{{< product-c8y-iot >}} Streaming Analytics](#c8y-streaming-analytics) application. Alternatively, you can install Apama on your local machine and develop your applications in an Eclipse-based development environment. You can deploy your monitor files as Apama applications to {{< product-c8y-iot >}}.

For details see [Using the Apama Event Processing Language (EPL)](/concepts/realtime/#using-epl).


### EPL Apps

EPL Apps is part of the [{{< product-c8y-iot >}} Streaming Analytics](#c8y-streaming-analytics) application. It allows you to develop EPL apps (that is, single *.mon files) directly within {{< product-c8y-iot >}}, written in Apama EPL. You can also import existing*.mon files as EPL apps into {{< product-c8y-iot >}}. When you activate an EPL app from the Streaming Analytics application, you deploy it to {{< product-c8y-iot >}}.

See also [Event Processing Language (EPL)](#epl) and [Analytics Builder](#analytics-builder).

For more details see [EPL Apps](/apama/overview-analytics/#apama-epl-apps).


### Event

In the context of {{< product-c8y-iot >}}:

Events contain real-time information from the sensor network, such as the triggering of a door sensor. Events can also be [alarms](#alarm). In addition, security-related events are shown as audit logs.

In the context of Apama:

Conceptually, an event is an occurrence of a particular item of interest at a specific time.
Apama events are used for all interactions with {{< product-c8y-iot >}}, such as listening for and creating device measurements, alarms and ({{< product-c8y-iot >}}) events.
