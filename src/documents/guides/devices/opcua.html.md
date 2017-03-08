---
layout: devices
title: OPCUA Java gateway
---

## Overview
OPC-UA is the interoperability standard for the secure and reliable exchange of data in the industrial automation space and in other industries. 
It is platform independent and ensures the seamless flow of information among devices from multiple vendors.
The specification defined a standard set of objects, interfaces and methods for use in process control and manufacturing automation applications to facilitate interoperability. 
The most common OPC specification is OPC Data Access, which is used to read and write real-time data.
For details I refer you to [OPC-UA specification](https://opcfoundation.org/developer-tools/specifications-unified-architecture).
There is number of implementation of OPC-UA Servers provided by other companies like [Kepware](https://www.kepware.com/en-us/)


## Architecture
Cumulocity provides the OPC-UA agent written in Java which integrates the Cloud Fieldbus model and the OPC-UA data model.
The OPC UA Server is connected to the OPC UA agent using OPC UA/SOAP or a binary protocol. 
The OPC UA agent finally communicates with Cumulocity using the REST API.

## Prerequisites
The OPC-UA agent is written in java and runs on an industrial PC and the basic required Java Runtime Environment 7 or newer.

> Note that Java must be in your path variable

## Configuration
### Configuration of the OPC-UA Server
OPC-UA is a specification owned by the OPC Foundation, actually OPC-UA Servers are implemented by other companies and the configuration is specific to the implementation. 
You need to follow instructions which are provided along with the OPC-UA Server. 
Instructions must provide the URL of the server and credentials to configure the OPC-UA agent.

### Configuration of the OPC-UA Agent
> Note that all shell commands are for linux

#### Installing using a jar file
Connect or login to a pc which will host the agent. 

Download the agent:

    wget http://resources.cumulocity.com/examples/cumulocity-opcua-agent.jar

Create the configuration file:

    cat > ~/.opcua/opcua-agent-gateway.properties
    
Then add content:

    gateway.identifier=opcua

Start the agent:

    java -jar cumulocity-opcua-agent-jar

#### Installing using rpm file

Download the agent:

    wget http://resources.cumulocity.com/examples/cumulocity-opcua-agent.rpm

Install the agent:

    rpm -Uv cumulocity-opcua-agent.rpm

Start the agent:

    service opcua-agent-server start
    
#### Configuration
If you want to change the platform configuration or the agent identifier you need to edit configuration files that are in following locations (dependend on the installaltion of the agent):

For a jar installation:
    
    ~/.opcua/opcua-agent-gateway.properties

For a rpm installation

    /etc/opcua/opcua-agent-gateway.properties

##### To change the platform url, edit the following line:

    platform.url=http://developers.cumulocity.com
    
##### To change the platform credentials used for the bootstrap process:

    platform.bootstrap.user=devicebootstrap
    platform.bootstrap.tenant=management
    platform.bootstrap.password=<password>

##### To change the agent identifier used in the bootstrap process:

> Note that identifier must be unique.

    gateway.identifier=opcua

### Register to Cumulocity
To register the agent to Cumulocity, follow the [Device registration guide](/guides/users-guide/device-management/#device-registration) using an identifier configured in the properties file. 
If the identifier is already used, use an unique one.

### Configure devices
To configure the agent, follow [Cloud Fieldbus connect guide](/guides/users-guide/cloud-fieldbus/#connect).

