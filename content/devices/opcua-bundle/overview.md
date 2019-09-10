---
title: Overview
layout: redirect
weight: 10
---
OPC-UA is the interoperability standard for the secure and reliable exchange of data in the industrial automation space and in other industries. 
It is platform independent and ensures the seamless flow of information among devices from multiple vendors.

The specification defines a standard set of objects, interfaces and methods for use in process control and manufacturing automation applications to facilitate interoperability. 

The most common OPC specification is OPC Data Access, which is used to read and write real-time data.
For details, refer to [OPC-UA specification](https://opcfoundation.org/developer-tools/specifications-unified-architecture).

### Architecture

Cumulocity provides the OPC-UA agent written in Java which integrates the Cloud Fieldbus model and the OPC-UA data model.

The OPC UA Server is connected to the OPC UA agent using OPC UA/SOAP or a binary protocol. 

The OPC UA agent finally communicates with Cumulocity using the REST API.

>**Important**: The OPC UA agent is in beta state and not supported. 

### Prerequisites

The OPC-UA agent is written in Java and runs on an industrial PC and the basic required Java Runtime Environment 7 or newer.

>**Info:** The Java must be in your path variable.

The OPC UA agent has to connect to the Cumulocity server with a certificate. Any certificate would work, including a self signed certificate.

> **Info:** The server needs to have a certificate even when it is not used.