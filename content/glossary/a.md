---
weight: 20
title: A
layout: bundle
section: 
  - getting_started
---

<a name="administration-app"></a>

### Administration application

The Administration application is one of the default applications of {{< product-c8y-iot >}}.
The Administration application enables administrators to manage their tenants, users, roles and applications. It also allows them to configure various settings for their accounts.

For details see [Administration](/users-guide/administration) in the *User guide*.

<a name="agent"></a>

### Agent

Agents are software components which translate the device-specific interface protocol into a single reference protocol and enable secure bi-directional communication in various network architectures.

<a name="alarm"></a>

### Alarm

An alarm represents an [event](#event) that requires an intervention. The user or operator of the system must take action to resolve the alarm (like a power outage).

<a name="analytics-builder"></a>

### Analytics Builder

Analytics Builder is part of the [{{< product-c8y-iot >}} Streaming Analytics](#c8y-streaming-analytics) application. It allows you to build analytic models that transform or analyze streaming data in order to generate new data or output events. The models are capable of processing data in real time.

See also [EPL Apps](#epl-apps).

For details see [Overview > Analytics Builder](/apama/overview-analytics/#analytics-builder) in the *Streaming Analytics guide*.

<a name="application"></a>

### Application

The {{< product-c8y-iot >}} User Interface (UI) is based on applications. By default, the {{< product-c8y-iot >}} UI consists of three main default applications: [Administration](#administration-app), [Cockpit](#cockpit-application) and [Device Management](#dev-management-application).

{{< product-c8y-iot >}} is designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. These applications can have two forms:

* web-based user interface applications (web applications)
* server-side business logic through microservices (microservices)

For details see [Developing applications](/concepts/applications/).

<a name="application-switcher"></a>

### Application switcher

The application switcher is a UI component which shows all {{< product-c8y-iot >}} applications the user has access to and allows switching between these applications.

<a name="asset"></a>

### Asset

Assets represent business objects in general like buildings, machines, production units or cars.
In {{< product-c8y-iot >}}, assets are organized in hierarchies which are composed of two types of objects:

* Groups: Objects which group single devices or other groups.
* Devices: Devices which can be linked into the asset hierarchy, after being connected to {{< product-c8y-iot >}}.

For details see [Cockpit > Managing assets](/users-guide/cockpit/#managing-assets) in the <i>User guide</i>.
