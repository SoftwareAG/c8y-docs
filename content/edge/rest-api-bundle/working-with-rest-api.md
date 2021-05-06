---
weight: 10
title: Working with REST APIs
layout: redirect
---

Cumulocity IoT Edge supports REST APIs to perform the tasks like installation, configuring the network for the Edge appliance, updating the Edge appliance, changing the hostname, and so on. The REST APIs in Cumulocity IoT Edge use the HTTPS protocol for all the endpoints. Before the installation, Cumulocity IoT Edge generates a self-signed certificate for the IP address of the VM when you configure the network for the Edge VM. You must use the IP address of the Edge VM in the URL. For example, https://192.168.66.10/edge/tasks/latest-installation.

During the installation, the host of the URL changes from the IP address to the domain name that you have configured. For example, https://myown.iot.com/edge/configuration/domain. 

Cumulocity IoT Edge creates a new self-signed certificate for the domain name if you want Cumulocity IoT edge to generate a self-signed certificate. Otherwise, you must upload the self-signed certificate. Also, some of the endpoints could be temporarily unavailable during the installation. For example, the endpoint `/edge/tasks/latest-installation` can be used for polling to see the status (executing, succeeded, failed) of the installation process.

When you send a HTTPS request with the POST operation, some of the tasks return the response immediately with the task still running in the background. Here, the tasks refer to installation process, uploading license and certificate files, configuring a network and so on. The immediate response indicates if the task is created successfully or not. To check the status of a task, use the `/edge/tasks/{id}` endpoint.

>**Important:** Running two tasks concurrently results in conflicts between the tasks and might return HTTP status 409.

### Authentication

If you are using the REST APIs for configuring the Edge appliance, most endpoints require authentication except `/edge/tasks/latest-installation` and `/edge/configuration/domain`. Cumulocity IoT Edge supports basic authentication and the authentication is performed by the **management** tenant. For a successful authentication, you must prefix **management** to the user name. The authorization header is formed as `Basic <Base64(<tenantID>/<c8yuser>:<password>)>`. For instance, if your tenantID, username and password are **management**, **admin** and **password** respectively, you can generate the Base64 string with the following command:

	$ echo -n management/admin:password | base64

Your authorization header would look like:

	Authorization: Basic bWFuYWdlbWVudC9hZG1pbjpwYXNzd29yZA==

### GET /edge/tasks/latest-installation

Use this endpoint to get the information about the latest installation of Cumulocity IoT Edge.

**Response**

The endpoint returns:

- HTTP status 200, if an attempt has been made to perform the installation.

		{
			"id":"4",
			"type":"installation",
			"status":"succeeded"
		}

	The `status` represents the current status of the installation: `executing`, `succeeded`, or `failed`.
	
- HTTP status 404, before attempting the installation.

### GET /edge/configuration/domain

Use this endpoint to get the domain name configured in Cumulocity IoT Edge. This endpoint is available only after a successful installation.

**Response**:

This endpoint returns:

- HTTP status 200, after the installation.

		{
			"domain_name":"myown.iot.com"
		}
		
### POST /edge/install

Use this endpoint to perform the initial installation.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://192.168.66.10/edge/install
Content-Type: application/json

	{
		"admin": {"username": "admin", "password": "Edge1!23"},
		"root_password": "Edge4!56",
		"edge_admin": {"username": "admin", "password": "Edge7!89", "email": "username@iot.com"},
		"domain_name": "myown.iot.com",
		"certificate": "upload"                            
	}
```
	
In the JSON syntax above, the value `certificate` can be `generate` or `upload`:

- If you have `"certificate": "generate"`, Cumulocity IoT Edge generates the certificate for you.

- If you have `"certificate": "upload"`, you must upload the certificate, before the installation starts.

**Response**

The endpoint returns:

- HTTP status 201, if the request is successful.

		
		{
		  "id":"1",
		  "uploads":[
			{"name":"licence","url":"https://192.168.66.10/edge/upload/1/licence"},
			{"name":"certificate","url":"https://192.168.66.10/edge/upload/1/certificate"},
			{"name":"certificate_key","url":"https://192.168.66.10/edge/upload/1/certificate_key"}
		 ]
		}
		
	If you have set `"certificate": "generate"`, the `uploads` array contains only the `licence` entry.
	
Note that this task does not start the installation. You must run the subsequent calls to upload the license and the certificate files to start the installation.

To upload the license and the certificate files, use the endpoint `/edge/upload/` with the combination of `task_id` and `upload_key`values. The `upload_key` represents the values of the keys: `license`, `certificate`, and `certificate_key`.

The syntax for this endpoint is not static and can be changed anytime.

|HEADERS||
|:---|:---|
|Content-Type|application/octet-stream
|Content-Disposition|attachment; filename="\<filename\>"

**Request**

In the following JSON syntax, the `Content-Type` is set to `application/octet-stream` for the binary files. The `Content-Disposition` header must contain only the filename with the file extension and not the path to the file. The URL for this endpoint `/edge/upload/` must be read from the `uploads` JSON response from the `/edge/install` endpoint. You must not construct the URL.

```http
POST https://192.168.66.10/edge/upload/1/certificate_key

Content-Type: application/octet-stream
Content-Disposition: attachment; filename="myown-selfsigned.key"
```

**Timeout period**

For each task that requires uploading the files, a 10 second timeout is applied from when the bytes were last received for any upload that is part of this task, or from when the task was created. If this timeout is reached, the endpoint returns HTTP status 404.

>**Important:** If you have a large file to upload (such as an archive for the `/edge/update` endpoint), then pay attention to whether your HTTP client loads the full file into the memory before sending the file. It can take more than 10 seconds to load a large file (in gigabytes) into the memory, so the timeout could expire before the HTTP client can send the first byte. Software AG recommends you to stream the bytes directly from the file to the upload endpoint. If you fail to stream the bytes directly from the file and read the file into the memory before calling the endpoint that starts the task, then the client is ready to stream the upload immediately.

**Response**

The endpoint returns:

- HTTP status 201, if the request is successful.

- HTTP status 400, if:

	- The file has been already uploaded for the specified task
	- The `Content-Disposition` header is set incorrectly
	
- HTTP status 404, if:
	- The upload timeout has expired
	- The task doesn't exist
	- The upload key is not recognized

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

### POST /edge/update

Use this endpoint to update Cumulocity IoT Edge to a newer version.

|HEADERS||
|:---|:---|
|Content-Type|application/octet-stream
|Content-Disposition|attachment; filename="\<filename\>"

**Request**

```http
POST https://192.168.66.10/edge/update

Content-Type: application/octet-stream
Content-Disposition: attachment; filename="CumulocityIoTEdge.tar.gz"

{
    "type": "upload"
} 
```
**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
    "id": "5",
    "uploads": [
        {
            "name": "archive",
            "url": "https://192.168.66.10/edge/upload/5/archive"
        }
    ]
}
```

Upload the archive of the new Cumulocity IoT Edge version at the URL returned in the JSON.

### GET /edge/version

Use this endpoint to get the current version of the Cumulocity IoT Edge installation. This endpoint is available only after a successful installation.

**Response**

The endpoint returns HTTP status 200.

```json
{
    "version": "10.9.0.0.384"
}
```

### POST /edge/reboot

Use this endpoint to reboot the Edge appliance. This endpoint returns an error as the connection is lost with the Edge appliance before the response is returned.

### GET /edge/configuration/hostname

Use this endpoint to get the current hostname of the Cumulocity IoT Edge server.

**Response**

The endpoint returns HTTP status 200.

```json
{
    "hostname": "iot-edge-server"
}
```

### POST /edge/configuration/hostname

Use this endpoint to change the hostname of the Cumulocity IoT Edge server.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://192.168.66.10/edge/configuration/hostname
Content-Type: application/json

{
    "hostname": "new.iotedge.hostname"
}
```
**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "2"
}
```

### POST /edge/configuration/remote-connectivity

Use this endpoint to configure remote device management.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://192.168.66.10/edge/configuration/remote-connectivity
Content-Type: application/json

{

    "enabled": true,

    "remote_tenant_url": "https://edge-testing.latest.stage.c8y.io/apps/cockpit/index.html"

}
```

**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "6"
}
```

### GET /edge/configuration/remote-connectivity

Use this endpoint to get the remote-connectivity configuration.

**Response**

The endpoint returns HTTP status 200.

```json
{
    "remote_tenant_url": "https://edge-testing.latest.stage.c8y.io/apps/cockpit/index.html",

    "enabled": true,

    "device_id": "edge-agent-038e59f8-5efa-45f9-bd25-ca5f88191691"
}
```

### POST /edge/configuration/time-sync

Use this endpoint to configure the time synchronization.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://192.168.66.10/edge/configuration/time-sync
Content-Type: application/json

{

    "enabled": true,

    "interval": 10,

    "servers": ["timenet.eur.ad.sag"]

}
```
If the interval is set to a value of 'n', the time synchronizes every 2<sup>n</sup> seconds. For example, if `"interval: 10"`, the time synchronizes every 2<sup>10</sup> seconds, that is 1024 seconds.

**Response**

The endpoint returns HTTP status 200.

```json
{
	"id": "7"
}
```

### GET /edge/configuration/time-sync

Use this endpoint to get the time synchronization configuration.

**Response**

```json
{
    "enabled": true,

    "interval": 10,

    "servers": ["timenet.eur.ad.sag"]
}
```

### GET /edge/configuration/microservices

Use this endpoint to get the status of the microservices.

**Response**

The endpoint returns HTTP status 200.

```json
{

    "enabled": false,

}
```

The endpoint returns `"enabled": true` if the microservices feature is enabled. 

### POST /edge/configuration/microservices

Use this endpoint to configure the microservices.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://192.168.66.10/edge/configuration/microservices
Content-Type: application/json

{

    "enabled": true

}
```

If the value of `enabled` is set to `true`, the installation service enables the microservices feature.

**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "9"
}
```

### GET /edge/tasks/{id}

Use this endpoint to get the details of the task with the given ID.

**Response**

The endpoint returns:

- HTTP status 200.

	    {
			"id":"1",
			"type":"configure-network",
			"status":"executing"
		}
		
	The `type` refers to the type of task: `configure-network`, `installation`, `configure-hostname`.
	
	The `status` refers to the status of the task: `executing`, `succeeded`, `failed`.
- HTTP status 404, if a task is not found with the given ID.

### GET /edge/tasks/{id}/log

Use this endpoint to get the log for the task with the given ID.

**Response**

The endpoint returns:

- A JSON array containing the lines from the Ansible log, if a task is found with the given ID. The log may be empty when this request is made, returning an empty JSON array. Each log line is contained in an object as shown in this example:
		
		[
		  {"text":"This is a log line"},
		  {"text":"This is another log line"}
		]
- HTTP status 404, if a task is not found with the given ID.
- HTTP status 410, if the log has been deleted to save disk space.