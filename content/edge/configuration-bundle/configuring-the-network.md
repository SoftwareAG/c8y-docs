---
weight: 15
title: Configuring the network
layout: redirect
---



### Configuring the network using the GUI

[Placeholder - instructions for configuring the network using GUI]\

### Configuring the network using the REST APIs

### POST /edge/configuration/network

Use this endpoint to configure the Cumulocity IoT Edge network.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://192.168.66.10/edge/configuration/network
Content-Type: application/json

{
	"address": "192.168.66.10",
	"netmask": "255.255.255.0",
	"gateway": "192.168.66.1",
	"dns": "8.8.8.8"
}
```
Use the above JSON format before the installation. After the installation, you can configure the Docker bridge network CIDR.

**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "2"
}
```