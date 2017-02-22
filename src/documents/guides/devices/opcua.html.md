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
Cumulocity provides OPC-UA agent written in Java which integrates Cloud Fieldbus model and OPC-UA data model.
The OPC UA Server is connected to the OPC UA agent using OPC UA/SOAP or binary protocol. 
The OPC UA agent finally communicates with the Cumulocity using the REST API.

## Prerequisites
OPC-UA agent is written in java and needs to be running on industrial PC and required Java Runtime Environment 7 or newer.

> Note that Java must be in your path variable

## Configuration
### Configuration of OPC-UA Server
OPC-UA is specification owned by OPC Foundation, actual OPC-UA Servers are implemented by other companies and configuration is specific to the implementation. 
You need to follow instruction that is provided along with OPC-UA Server. 
Instruction have to provide URL of the server and credentials which will be needed to configure OPC-UA agent.

### Configuration of OPC-UA Agent
> Note that all shell commands are for linux
#### Installing using jar file
Connect or login to pc which will host the agent. 

Download the agent:

    wget http://resources.cumulocity.com/examples/cumulocity-opcua-agent.jar

Create configuration file

    cat > ~/.opcua/opcua-agent-gateway.properties
    
Then put content

    gateway.identifier=opcua
    
    platform.url=http://developers.cumulocity.com
    platform.bootstrap.user=devicebootstrap
    platform.bootstrap.tenant=management
    platform.bootstrap.password=Fhdt1bb1f

Start the agent

    java -jar cumulocity-opcua-agent-jar

#### Installing using rpm file

Download the agent:

    wget http://resources.cumulocity.com/examples/cumulocity-opcua-agent.rpm

Install the agent

    rpm -Uv cumulocity-opcua-agent.rpm

Start the agent

    service opcua-agent-server start
    
#### Configuration
If you want to change platform configuration or agent identifier you need to edit configuration files that are in following locations (depending on how you installed the agent):

For jar installation:
    
    ~/.opcua/opcua-agent-gateway.properties

For rpm installation

    /etc/opcua/opcua-agent-gateway.properties

##### To change platform url, edit following line:

    platform.url=http://developers.cumulocity.com
    
##### To change platform credentials used for bootstrap process:

    platform.bootstrap.user=devicebootstrap
    platform.bootstrap.tenant=management
    platform.bootstrap.password=Fhdt1bb1f

##### To change agent identifier used in bootstrap process:

> Note that identifier must be unique

    gateway.identifier=opcua

### Register to Cumulocity
To register the agent to Cumulocity, follow [Device registration guide](/guides/users-guide/device-management/#device-registration) using identifier configured in properties file. 
If identifier is already used, use unique one.

### Configure devices
To configure the agent, follow [Cloud Fieldbus connect guide](/guides/users-guide/cloud-fieldbus/#connect)

