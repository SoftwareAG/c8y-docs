---
weight: 100
title: Glossary
layout: redirect
---

This section gives you an overview of the most commonly used terms in {{< product-c8y-iot >}} application.

Administration
application
Default application of Cumulocity IoT.
The Administration application enables administrators to manage their tenants, users, roles and applications, and allows them to configure various settings for their accounts.

Application
The Cumulocity IoT User Interface (UI) is based on applications. By default, the Cumulocity IoT UI consists of three default applications: Administration, Cockpit and Device Management.
Cumulocity IoT is designed to accommodate arbitrary vertical IoT applications in addition to its generic functionality. These applications can have two forms:
web-based user interface applications (web applications)
server-side business logic through microservices (microservices)

Application switcher
The application switcher is a UI component which shows all Cumulocity IoT applications the user has access to and allows switching between these applications.

Cockpit application
Default application of Cumulocity IoT.
The Cockpit application provides options to manage and monitor IoT assets and data from a business perspective, like managing assets, visualizing data, working with dashboards and managing reports.

Cumulocity IoT DataHub
Cumulocity IoT Datahub is an Cumulocity IoT application for offloading data from the operational store of Cumulocity IoT to a data lake and querying the data lake contents.
See also DataHub

Cumulocity IoT Edge
Cumulocity IoT Edge is the onsite solution of Cumulocity IoT intended to run as a local software application on industrial PC’s or local servers.

Cumulocity IoT Machine learning
Cumulocity IoT Machine Learning simplifies the complexity of the data science process across the entire machine learning lifecycle from model training to deployment. Cumulocity IoT Machine Learning is composed of two applications: Machine Learning Workbench, which focuses on model training, and Machine Learning Engine, which focuses on model deployment.

Cumulocity IoT operational store
Internal datastore of Cumulocity IoT where all data (alarms, events, inventory, measurements, etc.) is stored in so-called base collections.

Cumulocity IoT Sensor App
The Cumulocity IoT Sensor App is a free smartphone application available for iOS and Android smartphones. The app is designed to collect measurements from your smartphone, nearby Bluetooth device sensors, and vehicle On-board Debug (OBD) sensors, and send them to the Cumulocity IoT platform. It has a straightforward registration workflow to get you up and running quickly and provides an easy way to get data into Cumulocity IoT.

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
Default application of Cumulocity IoT.
The Device Management application provides functionalities for connecting, managing and monitoring devices and allows to control and troubleshoot devices remotely.

Enterprise tenant
Tenant type in the Cumulocity IoT tenant hierarchy (add link).
Enterprise tenants offer additional administrative functionality compared to a Standard tenant, the major difference being multi-tenancy. Using an Enterprise tenant, you can create and manage subtenants, manage the subscribed applications/features of the subtenants, and invoice subtenants based on usage statistics. Moreover, Enterprise tenants offer individual customization features, like for example Branding for the creation of an individual look & feel.
See also Standard tenant, Management tenant

Event Processing Language (EPL)
On top of Cumulocity IoT you can use the Apama streaming analytics engine to define business operations for real-time processing. The operation logic is implemented in Apama’s Event Processing Language (EPL).
EPL covers statements, which are organized into actions and monitors. Monitor files can be edited directly from within Cumulocity IoT using the Streaming Analytics application. Alternatively, you can install Apama on your local machine and develop your applications in an Eclipse-based development environment. You can deploy your monitor files as Apama applications to Cumulocity IoT.
