---
weight: 100
title: Glossary
layout: redirect
---

This section gives you an overview of the most commonly used terms in {{< product-c8y-iot >}} application.

Administration application
Default application of {{< product-c8y-iot >}}.
The Administration application enables administrators to manage their tenants, users, roles and applications, and allows them to configure various settings for their accounts.

Application
The {{< product-c8y-iot >}} User Interface (UI) is based on applications. By default, the {{< product-c8y-iot >}} UI consists of three default applications: Administration, Cockpit and Device Management.
{{< product-c8y-iot >}} is designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. These applications can have two forms:
web-based user interface applications (web applications)
server-side business logic through microservices (microservices)

Application switcher
The application switcher is a UI component which shows all {{< product-c8y-iot >}} applications the user has access to and allows switching between these applications.

Cockpit application
Default application of {{< product-c8y-iot >}}.
The Cockpit application provides options to manage and monitor IoT assets and data from a business perspective, like managing assets, visualizing data, working with dashboards and managing reports.

{{< product-c8y-iot >}} DataHub
{{< product-c8y-iot >}} Datahub is an {{< product-c8y-iot >}} application for offloading data from the operational store of {{< product-c8y-iot >}} to a data lake and querying the data lake contents.
See also DataHub

Cumulocity IoT Edge
{{< product-c8y-iot >}} Edge is the onsite solution of {{< product-c8y-iot >}} intended to run as a local software application on industrial PC’s or local servers.

Cumulocity IoT Machine learning
{{< product-c8y-iot >}} Machine Learning simplifies the complexity of the data science process across the entire machine learning lifecycle from model training to deployment. {{< product-c8y-iot >}} Machine Learning is composed of two applications: Machine Learning Workbench, which focuses on model training, and Machine Learning Engine, which focuses on model deployment.

Cumulocity IoT operational store
Internal datastore of {{< product-c8y-iot >}} where all data (alarms, events, inventory, measurements, etc.) is stored in so-called base collections.

Cumulocity IoT Sensor App
The {{< sensor-app >}} is a free smartphone application available for iOS and Android smartphones. The app is designed to collect measurements from your smartphone, nearby Bluetooth device sensors, and vehicle On-board Debug (OBD) sensors, and send them to the {{< product-c8y-iot >}} platform. It has a straightforward registration workflow to get you up and running quickly and provides an easy way to get data into {{< product-c8y-iot >}}.

Cumulocity IoT Streaming Analytics
Using the Streaming Analytics application, you can add your own logic to your IoT solution for immediate processing of incoming data from devices or other data sources. These user-defined operations can, for example, alert applications of new incoming data, create new operations based on the received data (such as sending an alarm when a threshold for a sensor is exceeded), or trigger operations on devices.
The operation logic is based on Apama’s Event Processing Language (EPL).

Data broker
The data broker functionality is an optional feature in Enterprise tenants which lets you share data selectively with other tenants.

Data explorer
The data explorer visualizes all data points, i.e. measurements or sensor data, of either a particular asset or of all assets.

Data lake
Storage container for offloaded data either on the basis of ADLS Gen2/Azure Storage (Azure), S3 (Amazon), NAS, or HDFS.

Data point library
The Data Point Library provides a collection of data points with default values for data point properties which serve as templates that can be applied easily to your data points from different devices.

Device Management application
Default application of {{< product-c8y-iot >}}.
The Device Management application provides functionalities for connecting, managing and monitoring devices and allows to control and troubleshoot devices remotely.

Enterprise tenant
Tenant type in the {{< product-c8y-iot >}} tenant hierarchy (add link).
Enterprise tenants offer additional administrative functionality compared to a Standard tenant, the major difference being multi-tenancy. Using an Enterprise tenant, you can create and manage subtenants, manage the subscribed applications/features of the subtenants, and invoice subtenants based on usage statistics. Moreover, Enterprise tenants offer individual customization features, like for example Branding for the creation of an individual look & feel.
See also Standard tenant, Management tenant

Event Processing Language (EPL)
On top of {{< product-c8y-iot >}} you can use the Apama streaming analytics engine to define business operations for real-time processing. The operation logic is implemented in Apama’s Event Processing Language (EPL).
EPL covers statements, which are organized into actions and monitors. Monitor files can be edited directly from within {{< product-c8y-iot >}} using the Streaming Analytics application. Alternatively, you can install Apama on your local machine and develop your applications in an Eclipse-based development environment. You can deploy your monitor files as Apama applications to {{< product-c8y-iot >}}.

GA release
A GA release is a release with general availability (GA). GA releases are typically provided in a 3-month cycle. They are published on all {{< product-c8y-iot >}} public cloud instances and they are provided to customers with an on-premises instance through the Software Download Center on the Software AG Empower Portal. GA releases include new features, improvements and fixes.

Global roles
Global roles contain permissions that apply to all data within a tenant.

See also Roles

Inventory roles
Inventory roles contain permissions that apply to groups or devices.

See also Roles

Machine Learning Engine
Machine Learning Engine enables machine learning/IT operators to manage and operationalize production-ready models for generating predictions on data gathered from connected devices. These capabilities can be leveraged either from a web browser via an easy to use UI or programmatically via REST API. Machine Learning Engine provides a high-performance inference platform with deployed models exposed as endpoints that can be leveraged from Streaming Analytics and other applications for real-time inference.

Machine Learning Workbench
Machine Learning Workbench enables data scientists and machine learning engineers to build, train and evaluate high-quality machine learning models using an intuitive, easy to use, no-code UI and a programmer-friendly Jupyter Notebook based environment. Machine Learning Workbench provides seamless access to data residing in {{< product-c8y-iot >}} operational store or any cloud data lakes with visual tools to ingest and transform the data.

Maintenance release
{{< company-c8y >}} provides Maintenance releases for supported {{< product-c8y-iot >}} GA releases. A Maintenance release contains fixes and improvements for a GA release but no new features.

Multi-tenancy
With the Enterprise tenant concept, {{< product-c8y-iot >}} supports full multi-tenancy. All data related to a tenant is stored in a dedicated database. This includes user data, inventory, events, measurements, operations and alarms.

Navigator
The navigator is an element in the UI of the {{< product-c8y-iot >}} platform. It is located at the left of the UI. The navigator provides a list of menu items which lead you to the various pages of the application you are currently using.

Real-time processing


{{< product-c8y-iot >}} allows developers and power users to run real-time IoT business logic inside {{< product-c8y-iot >}} based on a high-level real-time processing language, i.e. Apama’s Event Processing Language (EPL).
See also {{< product-c8y-iot >}} Streaming Analytics

REST
In {{< product-c8y-iot >}}, REST (Representational state transfer) is used for all external communication with IoT devices, other web applications or back-office IT systems.

Roles
The ability to execute certain functionality on the system depends on two concepts: Permissions and ownership. Permissions define explicitly what functionality can be executed by a user.
To manage permissions more easily, they are grouped into so-called “roles” (add link). Every user can be associated with a number of roles, adding up permissions of the user.

Sensor library
{{< product-c8y-iot >}} includes a sensor library to model specific sensing and controlling skills across device products. A single device can have many sensor and control characteristics. The sensor library covers basic sensors and controls, and is supported by the {{< product-c8y-iot >}} client libraries. It also enables writing powerful generic IoT software plugins.
Technically, the sensor library defines standard fragments for inventory, measurements, events and device control, following the naming convention (see Inventory).

Smart rules
{{< product-c8y-iot >}} includes a rule engine to analyze data in realtime and to perform actions based on data. To easily create rules, the Cockpit application includes a “smart rules” builder which allows you to create rules from templates (so-called smart rule templates).

Standard Tenant
At the bottom of the tenant hierarchy in {{< product-c8y-iot >}} you can find single tenants which are represented by the concept of Standard tenants.
A Standard tenant offers most of the device management and monitoring functionality of the {{< product-c8y-iot >}} platform, but has certain limitations when it comes to administrative aspects.
See also Enterprise tenant, Management tenant

Subscription
The application concept of {{< product-c8y-iot >}} includes a basic application marketplace.
Tenants can be subscribed to applications which have been deployed by their super tenant (Management tenant or Enterprise tenant).
Granting access to subtenants and subscribing to applications is done in the Administration application.

Subtenant
Using an Enterprise tenant, you can make use of the multi-tenancy concept of {{< product-c8y-iot >}}.
Enterprise tenants can create subtenants that will then again function like Standard tenants in the platform and have their own tenant management.

Tenant
Tenants are physically separated data spaces with a separate URL, with a specific set of users, a separate application management and no data sharing by default. Users in a single tenant share the same URL and the same data space.

Tenant domain
A key feature of the Enterprise tenant is the ability to operate the {{< product-c8y-iot >}} platform using a custom domain name. This means that you can configure the platform to serve you and your customers using a host name of choice.

Tenant hierarchy
The {{< product-c8y-iot >}} tenant concept builds a 3-level hierarchy, including the following levels from bottom to top:
Standard tenant > add link
Enterprise tenant > add link
Management tenant > add link
These three levels differ in their scope, particularly with regards to administration.

Tenant ID
The unique ID of a tenant or subtenant. When a tenant is created, it gets an auto-generated ID, which cannot be changed. The tenant ID is shown in the user dropdown menu in the UI.

Web applications
A {{< product-c8y-iot >}} web application can be a
a user interface application built on any web framework of your choice
a user interface application built using the {{< product-c8y-iot >}} user interface framework as a set of user interface plugins.
All subscribed web applications are hosted by {{< product-c8y-iot >}} and the application will be made available through a URL <tenant>.cumulocity.com/apps/<application>.

Web SDK
The {{< product-c8y-iot >}} Web SDK enables you to
develop web applications that can be deployed to the platform,
communicate authenticated with our API,
apply default or branded UI components to your custom application.

Widgets
Widgets are useful to track information, for example on alarms, assets or applications, or provide maps, quick links and more in dashboards or reports. {{< product-c8y-iot >}} provides preset widget types for various purposes, for details see the Widgets collection.
