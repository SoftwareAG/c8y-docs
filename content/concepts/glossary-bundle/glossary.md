---
weight: 10
title: Glossary
layout: redirect
---

This glossary lists commonly used terminology in the {{< product-c8y-iot >}} platform and documentation and provides descriptions for its usage in the context of {{< product-c8y-iot >}}.

<a name="administration-app"></a>
### Administration application
The Administration application is one of the default applications of {{< product-c8y-iot >}}.
The Administration application enables administrators to manage their tenants, users, roles and applications. It also allows them to configure various settings for their accounts.

For details see [Administration](/users-guide/administration/#overview) in the *User guide*.

<a name="agent"></a>
### Agent
IoT devices come with a wide variety of protocols, parameters and network connectivity options. To interface IoT data sources such as devices {{< product-c8y-iot >}} uses agents.
Agents are software components which translate the device-specific interface protocol into a single reference protocol and enable secure remote communication in various network architectures.

<a name="analytics-builder"></a>
### Analytics Builder
Analytics Builder allows you to build analytic models that transform or analyze streaming data in order to generate new data or output events. The models are capable of processing data in real time.
Analytics Builder is part of the Streaming Analytics application.

See also [{{< product-c8y-iot >}} Streaming Analytics](#c8y-streaming-analytics) and [EPL Apps](#epl).

For details see [Using the Apama Event Processing Language (EPL)](/concepts/realtime/#using-epl).

<a name="application"></a>
### Application
The {{< product-c8y-iot >}} User Interface (UI) is based on applications. By default, the {{< product-c8y-iot >}} UI consists of three default applications: Administration, Cockpit and Device Management.
{{< product-c8y-iot >}} is designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. These applications can have two forms:

  * web-based user interface applications (web applications)
  * server-side business logic through microservices (microservices)

See also [Administration application](#administration-app), [Cockpit application](#cockpit-application) and [Device Management application](#dev-management-application).

For details see [Developing applications](/guides/concepts/#applications/).

<a name="application-switcher"></a>
### Application switcher
The application switcher is a UI component which shows all {{< product-c8y-iot >}} applications the user has access to and allows switching between these applications.

<a name="asset"></a>
### Asset
Assets represent business objects in general like buildings, machines, production units or cars.
In {{< product-c8y-iot >}}, assets are organized in hierarchies which are composed of two types of objects:
  * Groups: Objects which group single devices or other groups.
  * Devices: Devices which can be linked into the asset hierarchy, after being connected to {{< product-c8y-iot >}}.

<a name=""></a>
### Blocks
Related to [Analytics Builder](#analytics-builder).

Blocks are the basic processing units of the model. Each block has some predefined functionality and processes data accordingly. A block can have a set of parameters and a set of input ports and output ports.


<a name="cockpit-application"></a>
### Cockpit application
The Cockpit application is one of the default applications of {{< product-c8y-iot >}}. It provides options to manage and monitor IoT assets and data from a business perspective, like managing assets, visualizing data, working with dashboards and managing reports.

For details see [Cockpit](/users-guide/cockpit/) in the *User guide*.

<a name=""></a>
### Cumulocity IoT Core
TBD

<a name="c8y-datahub"></a>
### Cumulocity IoT DataHub
{{< product-c8y-iot >}} Datahub is a {{< product-c8y-iot >}} application for offloading data from the operational store of {{< product-c8y-iot >}} to a data lake and querying the data lake contents.

For details see the [DataHub guide](/datahub/datahub-overview/).

<a name="c8y-edge"></a>
### Cumulocity IoT Edge
{{< product-c8y-iot >}} Edge is the onsite solution of {{< product-c8y-iot >}} intended to run as a local software application on industrial PC’s or local servers.

For details see the [{{< product-c8y-iot >}} Edge guide](/edge/introduction/).

<a name="c8y-ml"></a>
### Cumulocity IoT Machine learning
{{< product-c8y-iot >}} Machine Learning simplifies the complexity of the data science process across the entire machine learning lifecycle from model training to deployment. {{< product-c8y-iot >}} Machine Learning is composed of two applications:
  * Machine Learning Workbench, which focuses on model training, and
  * Machine Learning Engine, which focuses on model deployment.

For details see the [Machine Learning guide](/machine-learning/introduction/).

<a name="c8y-operational-store"></a>
### Cumulocity IoT operational store
Internal datastore of {{< product-c8y-iot >}} where all data (alarms, events, inventory, measurements, etc.) are stored in so-called base collections.

<a name="c8y-sensor-app"></a>
### Cumulocity IoT Sensor App
The {{< sensor-app >}} is a free smartphone application available for iOS and Android smartphones. The app is designed to collect measurements from your smartphone, nearby Bluetooth device sensors, and vehicle On-board Debug (OBD) sensors, and send them to the {{< product-c8y-iot >}} platform. It has a straightforward registration workflow to get you up and running quickly and provides an easy way to get data into {{< product-c8y-iot >}}.

For details see [{{< sensor-app >}}](/users-guide/sensor-app-bundle/#overview) in the *User guide*.

<a name="c8y-streaming-analytics"></a>
### Cumulocity IoT Streaming Analytics
Using the Streaming Analytics application, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. These user-defined operations can, for example, alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.
The operation logic is based on [Apama’s Event Processing Language (EPL)](#epl).

For details see the [Streaming Analytics guide](/apama/overview-analytics/).

<a name="data-broker"></a>
### Data broker
The data broker functionality is an optional feature in Enterprise tenants which lets you share data selectively with other tenants.

For details see [Enterprise tenant > Using the data broker](/users-guide/enterprise-tenant/#data-broker) in the *User guide*.

<a name="data-explorer"></a>
### Data explorer
The data explorer visualizes all data points, i.e. measurements or sensor data, of either a particular asset or of all assets.

For details see [Cockpit > Data explorer](/users-guide/cockpit/#data-explorer) in the *User guide*.

<a name="data-lake"></a>
### Data lake
Used in the context of [DataHub](#c8y-datahub).

A data lake serves as a storage container for offloaded data either on the basis of ADLS Gen2/Azure Storage (Azure), S3 (Amazon), NAS, or HDFS.

<a name="data-point-library"></a>
### Data point library
The Data point library provides a collection of data points with default values for data point properties which serve as templates that can be applied easily to your data points from different devices.

For details see [Cockpit > Data point library](/users-guide/cockpit/#data-point-library) in the *User guide*.

<a name=""></a>
### Device
IoT devices are hardware components with a sensor that transmits data, like wireless sensors, actuators, and computer devices. They can be embedded into mobile devices, industrial equipment, environmental sensors, medical devices, and more.

<a name="dev-management-application"></a>
### Device Management application
The Device Management application is one of the default applications of {{< product-c8y-iot >}}.
The Device Management application provides functionalities for connecting, managing and monitoring devices and allows to control and troubleshoot devices remotely.

For details see [Device Management](/guides/users-guide/device-management-bundle/#overview) in the *User guide*.

<a name="ent-tenant"></a>
### Enterprise tenant
A tenant type in the [{{< product-c8y-iot >}} tenant hierarchy](/concepts/tenant-hierarchy/).

Enterprise tenants offer additional administrative functionality compared to a Standard tenant, the major difference being multi-tenancy. Using an Enterprise tenant, you can create and manage subtenants, manage the subscribed applications/features of the subtenants, and invoice subtenants based on usage statistics. Moreover, Enterprise tenants offer individual customization features, such as Branding for the creation of an individual look & feel.

See also [Standard tenant](#standard-tenant) and [Management tenant](#mgm-tenant).

<a name="epl"></a>
### Event Processing Language (EPL)
On top of {{< product-c8y-iot >}} you can use the Apama streaming analytics engine to define business operations for real-time processing. The operation logic is implemented in Apama’s Event Processing Language (EPL).
EPL covers statements, which are organized into actions and monitors. Monitor files can be edited directly from within {{< product-c8y-iot >}} using the Streaming Analytics application. Alternatively, you can install Apama on your local machine and develop your applications in an Eclipse-based development environment. You can deploy your monitor files as Apama applications to {{< product-c8y-iot >}}.

For details see [Overview > Streaming analytics with Apama EPL](/apama/overview-analytics/#streaming-analytics) in the *Streaming Analytics guide*.

<a name=""></a>
### Events

Cumulocity IoT: Events contain real-time information from the sensor network, such as the triggering of a door sensor. Events can also be alarms. The user or operator of the system has to take action to resolve the alarm (like a power outage). In addition, security-related events are shown as audit logs.

Apama: Conceptually, an event is an occurrence of a particular item of interest at a specific time.
Apama events are used for all interactions with {{< product-c8y-iot >}}, such as listening for and creating device measurements, alarms and ({{< product-c8y-iot >}}) events.

<a name="ga-release"></a>
### GA release
A GA release is a release with general availability (GA). GA releases are typically provided in a 3-month cycle. They are published on all {{< product-c8y-iot >}} public cloud instances and they are provided to customers with an on-premises instance through the Software Download Center on the {{< company-sag >}} {{< sag-portal >}}. GA releases include new features, improvements and fixes.

<a name="global-roles"></a>
### Global roles
Global roles contain permissions that apply to all data within a tenant.

For details see [Security aspects > Access control](/concepts/security/#access-control).

<a name=""></a>
### Instances
TBD

#### Cumulocity IoT Instances

#### Apama Instances
Relates to Apama Analytics Builder


<a name="inventory-roles"></a>
### Inventory roles
Inventory roles contain permissions that apply to groups or devices.

For details see [Administration > Managing permissions > Inventory roles](/users-guide/administration/#managing-permissions) in the *User guide*.

<a name="ml-engine"></a>
### Machine Learning Engine
Machine Learning Engine enables machine learning/IT operators to manage and operationalize production-ready models for generating predictions on data gathered from connected devices. These capabilities can be leveraged either from a web browser via an easy to use UI or programmatically via REST API. Machine Learning Engine provides a high-performance inference platform with deployed models exposed as endpoints that can be leveraged from Streaming Analytics and other applications for real-time inference.

For details see [Introduction > Machine Learning Engine](/machine-learning/introduction/#mle-overview) in the *Machine Learning guide*.

<a name="ml-workbench"></a>
### Machine Learning Workbench
Machine Learning Workbench enables data scientists and machine learning engineers to build, train and evaluate high-quality machine learning models using an intuitive, easy to use, no-code UI and a programmer-friendly Jupyter Notebook based environment. Machine Learning Workbench provides seamless access to data residing in {{< product-c8y-iot >}} operational store or any cloud data lakes with visual tools to ingest and transform the data.

For details see [Introduction > Machine Learning Workbench](/machine-learning/introduction/#mlw-overview) in the *Machine Learning guide*.

<a name="maintenance-release"></a>
### Maintenance release
{{< company-c8y >}} provides Maintenance releases for supported {{< product-c8y-iot >}} GA releases. A Maintenance release contains fixes and improvements for a GA release but no new features.

<a name=""></a>
### Managed objects
The inventory stores devices and other assets relevant to your IoT solution. We refer to them as managed objects.
Managed objects can be “smart objects” such as smart electricity meters, home automation gateways and GPS devices. They can be assets you would like to monitor, such as rooms in which sensors are installed, or cars containing GPS devices.

<!--- TBD Digital twin --->

<a name="mgm-tenant"></a>
### Management tenant
The {{< management-tenant >}} builds the highest level of the {{< product-c8y-iot >}} tenant hierarchy.
Every {{< product-c8y-iot >}} deployment is delivered with a {{< management-tenant >}}. The {{< management-tenant >}} is used to administer all tenants within the same deployment on platform level and thus provides full control of the platform.

See also [{{< standard-tenant >}}](#standard-tenant); [{{< enterprise-tenant >}}](#ent-tenant).

For details see [Tenant hierarchy > hierarchy levels](/concepts/tenant-hierarchy/#tenant-levels).

<a name=""></a>
### Measurements
Measurements contain numerical data produced by sensors (like temperature readings) or calculated data based on information from devices (service availability of a device).

Measurements consist of a time when the measurement was taken, the unique identifiers of the source of the measurement, and a list of fragments.

<!--- TBD time series --->

<a name="microservices"></a>
### Microservices
Microservices are server-side applications. Microservices can be used to develop for example the following functionality on top of {{< product-c8y-iot >}}:

  * Integrations
  * Batch analytics
  * Decoder
  * Backend applications

Microservices are deployed as Container images to {{< product-c8y-iot >}}, and follow specific conventions. They typically provide one REST API, which is available under /service/<microservice-name> and access {{< product-c8y-iot >}} using this REST API.

For details see [Developing applications > Microservices](/concepts/applications/#microservices).

<a name=""></a>
### Multi-tenancy
With the Enterprise tenant concept, {{< product-c8y-iot >}} supports full multi-tenancy. All data related to a tenant is stored in a dedicated database. This includes user data, inventory, events, measurements, operations and alarms.

For details see [Tenant hierarchy > Multi-tenancy](/concepts/tenant-hierarchy-bundle/#multi-tenancy).

<a name="navigator"></a>
### Navigator
The navigator is an element in the UI of the {{< product-c8y-iot >}} platform. It is located at the left of the UI. The navigator provides a list of menu items which lead you to the various pages of the application you are currently using.

<a name="operations"></a>
### Operations
Operations are cloud-to-device messages so that devices can be remotely controlled and managed by {{< product-c8y-iot >}}. Typical operations are installing a new software, switching a relay in a power meter or sending a credit to a vending machine.

For details see [{{< product-c8y-iot >}}'s domain model > Operations](/concepts/domain-model/#operations).

<a name=""></a>
### Real-time processing
{{< product-c8y-iot >}} allows developers and power users to run real-time IoT business logic inside {{< product-c8y-iot >}} based on a high-level real-time processing language, i.e. Apama’s Event Processing Language (EPL).

For details see [Real-time processing](/concepts/realtime/).

<a name="rest"></a>
### REST
In {{< product-c8y-iot >}}, REST (Representational State Transfer) is used for all external communication with IoT devices, other web applications or back-office IT systems.

<a name="roles"></a>
### Roles
The ability to execute certain functionality on the system depends on two concepts: Permissions and ownership. Permissions define explicitly what functionality can be executed by a user.
To manage permissions more easily, they are grouped into so-called “roles”. Every user can be associated with a number of roles, adding up permissions of the user.

For details see [Security aspects > Access control](/concepts/security/#access-control).

<a name="sensor-library"></a>
### Sensor library
{{< product-c8y-iot >}} includes a sensor library to model specific sensing and controlling skills across device products. A single device can have many sensor and control characteristics. The sensor library covers basic sensors and controls, and is supported by the {{< product-c8y-iot >}} client libraries. It also enables writing powerful generic IoT software plugins.
Technically, the sensor library defines standard fragments for inventory, measurements, events and device control, following the naming convention.

For details see [{{< product-c8y-iot >}}'s domain model > The sensor library](/concepts/domain-model/#sensor-library) and [{{< product-c8y-iot >}}'s domain model > Inventory](/concepts/domain-model/#inventory).

<a name="smart-rules"></a>
### Smart rules
{{< product-c8y-iot >}} includes a rule engine to analyze data in realtime and to perform actions based on data. To easily create rules, the Cockpit application includes a “smart rules” builder which allows you to create rules from templates (so-called smart rule templates).

For details see [Cockpit > Smart rules](/users-guide/cockpit/#smart-rules) in the *User guide*.

<a name="standard-tenant"></a>
### Standard Tenant
At the bottom of the tenant hierarchy in {{< product-c8y-iot >}} you can find single tenants which are represented by the concept of {{< standard-tenant >}}.
A {{< standard-tenant >}} offers most of the device management and monitoring functionality of the {{< product-c8y-iot >}} platform, but has certain limitations when it comes to administrative aspects.


See also [{{< enterprise-tenant >}}](#ent-tenant) and [{{< management-tenant >}}](#mgm-tenant).

For details see [Tenant hierarchy > Hierarchy levels > {{< management-tenant >}}](/concepts/tenant-hierarchy/#hierarchy-levels).

<a name="subscription"></a>
### Subscription
The application concept of {{< product-c8y-iot >}} includes a basic application marketplace.
Tenants can be subscribed to applications which have been deployed by their super tenant (Management tenant or Enterprise tenant).
Granting access to subtenants and subscribing to applications is done in the Administration application.

For details see [Developing applications > Subscribing applications](/concepts/applications/#subscription) as well as [Administration > Managing applications](/users-guide/administration/#managing-applications) in the *User guide*

<a name="tenant"></a>
### Tenant
Tenants are physically separated data spaces with a separate URL, which has a specific set of users, a separate application management and no data sharing by default. Users in a single tenant share the same URL and the same data space.

<a name="tenant-domain"></a>
### Tenant domain
A key feature of the Enterprise tenant is the ability to operate the {{< product-c8y-iot >}} platform using a custom domain name. This means that you can configure the platform to serve you and your customers using a host name of choice.

For details see [{{< enterprise-tenant >}} > Customizing your platform](/users-guide/enterprise-tenant/#customization) in the *User guide*.

<a name=""></a>
### Tenant hierarchy
The {{< product-c8y-iot >}} tenant concept builds a 3-level hierarchy, including the following levels from bottom to top:

  * {{< standard-tenant >}}
  * {{< enterprise-tenant >}}
  * {{< management-tenant >}}

These three levels differ in their scope, particularly with regards to administration.

See also [Tenant hierarchy](/concepts/tenant-hierarchy/#tenant-overview); [{{< standard-tenant >}}](#standard-tenant); [{{< enterprise-tenant >}}](#ent-tenant) and [{{< management-tenant >}}](#mgm-tenant).

<a name="tenant-id"></a>
### Tenant ID
The unique ID of a tenant or subtenant. When a tenant is created, it gets an auto-generated ID, which cannot be changed. The tenant ID is shown in the user dropdown menu in the UI.

<a name="web-applications"></a>
### Web applications
A {{< product-c8y-iot >}} web application can be:

  * a user interface application built on any web framework of your choice or
  * a user interface application built using the {{< product-c8y-iot >}} user interface framework as a set of user interface plugins.

All subscribed web applications are hosted by {{< product-c8y-iot >}} and the application will be made available through a URL like this: <tenant>.cumulocity.com/apps/<application>.

For details see [Developing applications > Web applications](/concepts/applications/#web-applications).

<a name="web-sdk"></a>
### Web SDK
The {{< product-c8y-iot >}} Web SDK enables you to develop web applications that can be:

  * deployed to the platform,
  * communicate authenticated with our API,
  * apply default or
  * branded UI components to your custom application.

For details see [Web SDK guide](/web/overview/).

<a name="widgets"></a>
### Widgets
Widgets are useful to track information, for example on alarms, assets or applications, or provide maps, quick links and more in dashboards or reports. {{< product-c8y-iot >}} provides preset widget types for various purposes.

For details see [Cockpit > Widgets collection](/users-guide/cockpit/#widgets-collection) and [Cockpit > Using widgets in dashboards and reports](/users-guide/cockpit/#using-widgets) in the *User guide*.

<a name=""></a>
### Wires
Relates to Apama Analytics Builder.
Wires are used to connect two or more blocks with each other.  They are used for all data transfer between the output port of one block and the input port of another block.
