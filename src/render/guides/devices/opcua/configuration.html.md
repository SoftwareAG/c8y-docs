---
title: Configuration
layout: redirect
order: 20
---

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
    
##### To set up proxy configuration used by agent to connect to platform:

    platform.proxyHost=<proxy-host>
    platform.proxyPort=<proxy-port>
    platform.proxyUsername=<proxy-username>
    platform.proxyPassword=<proxy-password>

### Register to Cumulocity
To register the agent to Cumulocity, follow the [Device registration guide](/guides/users-guide/device-management/#device-registration) using an identifier configured in the properties file. 
If the identifier is already used, use an unique one.

### Configure devices
To configure the agent, follow [Cloud Fieldbus connect guide](/guides/users-guide/cloud-fieldbus/#connect).

