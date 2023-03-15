---
weight: 40
title: C
layout: bundle
section: 
  - getting_started
---

<a name="cockpit-application"></a>

### Cockpit application

The Cockpit application is one of the default applications of {{< product-c8y-iot >}}. It provides options to manage and monitor IoT assets and data from a business perspective, like managing assets, visualizing data, working with dashboards and managing reports.

For details see [Cockpit](/users-guide/cockpit/) in the *User guide*.

<a name="cumulocity-iot-core"></a>

### Cumulocity IoT Core

{{< product-c8y-iot >}} is the foundation of the {{< product-c8y-iot >}} platform. It comprises all major components such as the default [applications](#application) (Administration, Cockpit and Device Management), the [{{< product-c8y-iot >}} operational store](#c8y-operational-store), [microservices](#microservices), [REST API](#rest-api), [MQTT API](#mqtt), and [smart rules](#smart-rules).

<a name="c8y-datahub"></a>

### Cumulocity IoT DataHub

{{< product-c8y-iot >}} Datahub is a {{< product-c8y-iot >}} application for offloading data from the operational store of {{< product-c8y-iot >}} to a data lake and querying the data lake contents.

For details see the [DataHub guide](/datahub/datahub-overview/).

<a name="c8y-edge"></a>

### Cumulocity IoT Edge

{{< product-c8y-iot >}} Edge is the onsite solution of {{< product-c8y-iot >}} intended to run as a local software application on industrial PC’s or local servers.

For details see the [{{< product-c8y-iot >}} Edge guide](/edge/introduction/).

<a name="c8y-ml"></a>

### Cumulocity IoT Machine Learning

{{< product-c8y-iot >}} Machine Learning simplifies the complexity of the data science process across the entire machine learning lifecycle from model training to deployment. {{< product-c8y-iot >}} Machine Learning is composed of two applications:

* Machine Learning Workbench, which focuses on model training, and
* Machine Learning Engine, which focuses on model deployment.

For details see the [Machine Learning guide](/machine-learning/introduction/).

<a name="c8y-operational-store"></a>

### Cumulocity IoT operational store

Internal datastore of {{< product-c8y-iot >}} where all data (such as [alarms](#alarm), [events](#event), [inventory](#inventory), and [measurements](#measurement)) are stored in so-called base collections.

<a name="c8y-sensor-app"></a>

### Cumulocity IoT Sensor App

The {{< sensor-app >}} is a free smartphone application available for iOS and Android smartphones. The app is designed to collect measurements from your smartphone, nearby Bluetooth device sensors, and vehicle On-board Debug (OBD) sensors, and send them to the {{< product-c8y-iot >}} platform. It has a straightforward registration workflow to get you up and running quickly and provides an easy way to get data into {{< product-c8y-iot >}}.

For details see [{{< sensor-app >}}](/users-guide/sensor-app) in the *User guide*.

<a name="c8y-streaming-analytics"></a>

### Cumulocity IoT Streaming Analytics

Using the Streaming Analytics application, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. These user-defined operations can, for example, alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices. The operation logic is based on [Apama’s Event Processing Language (EPL)](#epl).

See also [Analytics Builder](#analytics-builder) and [EPL Apps](#epl-apps).

For details see the [Streaming Analytics guide](/apama/overview-analytics/).
