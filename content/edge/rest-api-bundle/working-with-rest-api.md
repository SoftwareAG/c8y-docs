---
weight: 10
title: Working with REST APIs
layout: redirect
---

{{< product-c8y-iot >}} Edge supports REST APIs to perform the tasks like installation, configuring the network for the Edge appliance, updating the Edge appliance, changing the hostname, and so on. The REST APIs in {{< product-c8y-iot >}} Edge use the HTTPS protocol for all the endpoints. Before the installation, the self-signed certificate uses the currently configured IP address of the Edge appliance. You must use the IP address of the Edge appliance in the URL. For example, https://192.168.66.10/edge/tasks/latest-installation.

During the installation, the certificate changes from using the IP address to the domain name that you have configured. You must use the domain name in your browser to match the certificate. For example, https://myown.iot.com/edge/configuration/domain.

You can either upload a certificate (self-signed) issued by a certificate authority or have {{< product-c8y-iot >}} Edge generate a self-signed certificate for the domain name. Some of the endpoints could be temporarily unavailable during the installation. For example, the `edge/configuration/network` endpoint can be used only after the installation.

When you use a POST endpoint, the server starts a task running in the background and returns a response with the ID of the task. You can use that ID to track the progress of the task. Here, the tasks refer to the installation process, uploading license and certificate files, configuring a network, etc. The immediate response indicates if the task is created successfully or not. To check the status of a task, use the `/edge/tasks/{id}` endpoint.

>**Important:** You cannot run two tasks at the same time. If you attempt to run a task when another task is in progress, then you will get a HTTP status 409.

### Authentication

If you are using the REST APIs for configuring the Edge appliance, most endpoints require authentication except `/edge/tasks/latest-installation` and `/edge/configuration/domain`. {{< product-c8y-iot >}} Edge supports basic authentication and the authentication is performed by the {{< management-tenant >}}. For a successful authentication, you must prefix **management** to the user name. The authorization header is formed as `Basic <Base64(<tenantID>/<c8yuser>:<password>)>`. For instance, if your tenantID, username and password are **management**, **admin** and **password** respectively, you can generate the Base64 string with the following command:

	$ echo -n management/admin:password | base64

Your authorization header would look like:

	Authorization: Basic bWFuYWdlbWVudC9hZG1pbjpwYXNzd29yZA==

The following table lists the endpoints that need authentication and the endpoints that does not need authentication:

|Endpoints does not need authentication|Endpoints need authentication
|:---|:---
|/edge/tasks/latest-installation|/edge/configuration/network
|/edge/configuration/domain|/edge/tasks/{id}
|/edge/install|/edge/tasks/{id}/log
||/edge/version
||/edge/configuration/hostname
||/edge/update
||/edge/configuration/time-sync
||/edge/configuration/microservices
||/edge/configuration/remote-connectivity
||/edge/reboot
||/edge/configuration/certificate
||/edge/expand-disk

### GET /edge/tasks/latest-installation

Use this endpoint to get the information about the latest installation of {{< product-c8y-iot >}} Edge.

**Response**

The endpoint returns:

- HTTP status 200, if an attempt has been made to perform the installation.

		{
			"id":"4",
			"type":"installation",
			"status":"succeeded"
		}

	The `status` represents the current status of the installation: `executing`, `succeeded`, or `failed`.

- HTTP status 404, before an installation has been attempted.

### GET /edge/configuration/domain

Use this endpoint to get the domain name configured in {{< product-c8y-iot >}} Edge. This endpoint is available only after a successful installation.

**Response**:

The endpoint returns:

- HTTP status 200, after the installation.

		{
			"domain_name":"myown.iot.com"
		}

### POST /edge/install

Use this endpoint to perform the initial installation.

If the installation is successful, this endpoint will not be available.

If the installation fails, this endpoint will be available. You can use the endpoint to attempt the installation again.

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

In the JSON format above, the value of `certificate` can be `generate` or `upload`:

- If you have set `"certificate": "generate"`, {{< product-c8y-iot >}} Edge generates the certificate for you.

- If you have set `"certificate": "upload"`, you must upload the certificate, before the installation will start.

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

To upload the license and the certificate files, use the URLs returned in the JSON response. The `upload_key` represents the values of the keys: `license`, `certificate`, and `certificate_key`. For more information, see [Uploading files using REST APIs](/edge/rest-api/#uploading-files-using-rest-api).

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

### POST /edge/update

Use this endpoint to update {{< product-c8y-iot >}} Edge to a newer version.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://myown.iot.com/edge/update
Content-Type: application/json

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
            "url": "https://myown.iot.com/edge/upload/5/archive"
        }
    ]
}
```

Upload the archive of the new {{< product-c8y-iot >}} Edge version using the URL returned in the JSON response. For more information, see [Uploading files using REST APIs](/edge/rest-api/#uploading-files-using-rest-api).

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

### POST /edge/configuration/network

Use this endpoint to configure the {{< product-c8y-iot >}} Edge network.

|HEADERS||
|:---|:---|
|Content-Type|application/json

>**Important:** Do not use the IP addresses 10.244.0.0 and 10.96.0.0 in your network configuration. These IP addresses are reserved for {{< product-c8y-iot >}} Edge internal purpose.

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
Use the above JSON format before the installation to configure the network.

>**Important:** For DNS, do not use the IP addresses 10.96.0.10 and 127.0.0.1.

After the installation, you can configure the IP range for network CIDR using the same JSON format with an additional key `ip_range`:

**Request**

```http
POST https://192.168.66.10/edge/configuration/network
Content-Type: application/json

{
	"address": "192.168.66.10",
	"netmask": "255.255.255.0",
	"gateway": "192.168.66.1",
	"dns": "8.8.8.8",
	"ip_range": "172.18.0.1/16"
}
```
Here, the `ip_range` is an IPv4 CIDR. The CIDR suffix must be between 0 and 27 inclusive. The default value for `ip_range` is 172.16.0.0/15.

The **ip_range** must not overlap with the reserved IP addresses. See [Reserved IP addresses](https://en.wikipedia.org/wiki/Reserved_IP_addresses).

Before the installation, the `dns` and the network CIDR keys are optional.

>**Info:** If the IP address of the Edge appliance overlaps with the Edge appliance's `ip_range`, then you must update the `ip_range`.

**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "2"
}
```

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

>**Info:** {{< product-c8y-iot >}} Edge appliance will be temporarily non-operational during the operation.

### GET /edge/configuration/network

Use this endpoint to get the network configuration of the Edge appliance.

**Response**

The endpoint returns HTTP status 200.

```json
{
	"address": "192.168.66.10",
	"netmask": "255.255.255.0",
	"gateway": "192.168.66.1",
	"dns": "8.8.8.8",
	"ip_range": "172.18.0.1/16"
}
```
### GET /edge/version

Use this endpoint to get the current version of the {{< product-c8y-iot >}} Edge installation. This endpoint is available only after a successful installation.

**Response**

The endpoint returns HTTP status 200.

```json
{
    "version": "10.9.0.0.384"
}
```

### POST /edge/reboot

Use this endpoint to reboot the Edge appliance.

This endpoint returns HTTP status 202. There is no guarantee that the reboot will not start before the response is returned. There could be errors or dropped connections as the connection is lost with the Edge appliance before the response is returned.

### GET /edge/configuration/hostname

Use this endpoint to get the current hostname of the {{< product-c8y-iot >}} Edge appliance.

**Response**

The endpoint returns HTTP status 200.

```json
{
    "hostname": "iot-edge-server"
}
```

### POST /edge/configuration/hostname

Use this endpoint to change the hostname of the {{< product-c8y-iot >}} Edge appliance.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://myown.iot.com/edge/configuration/hostname
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

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

### POST /edge/configuration/remote-connectivity

Use this endpoint to configure remote device management.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://myown.iot.com/edge/configuration/remote-connectivity
Content-Type: application/json

{
    "enabled": true,
    "remote_tenant_url": "https://edge-testing.latest.stage.c8y.io"
}
```

**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "6"
}
```

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

### GET /edge/configuration/remote-connectivity

Use this endpoint to get the remote-connectivity configuration.

**Response**

The endpoint returns HTTP status 200.

```json
{
    "remote_tenant_url": "https://edge-testing.latest.stage.c8y.io",
    "enabled": true,
    "device_id": "edge-agent-038e59f8-5efa-45f9-bd25-ca5f88191691"
}
```

You must use this `device_id` to register the Edge appliance with the {{< product-c8y-iot >}} tenant.

### POST /edge/configuration/time-sync

Use this endpoint to configure the time synchronization.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://myown.iot.com/edge/configuration/time-sync
Content-Type: application/json

{
    "enabled": true,
    "interval_power_of_two": 10,
    "servers": ["pool.ntp.org"]
}
```
>**Important:** If the interval is set to a value of 'n', the time synchronizes every 2<sup>n</sup> seconds. For example, if `"interval: 10"`, the time synchronizes every 2<sup>10</sup> seconds, that is 1024 seconds.

The servers must be NTP servers. If you specify multiple servers, any server specified in the configuration can be used for time synchronization.

**Response**

The endpoint returns HTTP status 201.

```json
{
	"id": "7"
}
```

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

### GET /edge/configuration/time-sync

Use this endpoint to get the time synchronization configuration.

**Response**

The endpoint returns HTTP status 200.

```json
{
    "enabled": true,
    "interval": 10,
    "servers": ["pool.ntp.org"]
}
```

### GET /edge/configuration/microservices

Use this endpoint to get the status of the microservices hosting feature.

**Response**

The endpoint returns HTTP status 200.

```json
{
    "enabled": false,
}
```

The endpoint returns `"enabled": true` if the microservices hosting feature is enabled.

### POST /edge/configuration/microservices

Use this endpoint to configure the microservice hosting feature.

>**Important:** To enable or disable the microservice hosting feature, you must have the "Tenant Manager" role.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://myown.iot.com/edge/configuration/microservices
Content-Type: application/json

{
    "enabled": true
}
```

If the value of `enabled` is set to `true`, the installation service enables the microservices hosting feature.

**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "9"
}
```

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

>**Info:** {{< product-c8y-iot >}} Edge appliance will be temporarily non-operational during the operation.

### GET /edge/configuration/certificate

Use this endpoint to review the validity of the current SSL certificate.

**Response**

The endpoint returns HTTP status 200.

If the certificate is self-signed:

```json
{
    "signing_type": "self-signed",
    "expiry": "2019-04-26T05:28:52Z"
}
```

The value of `signing_type` can be `self-signed` or `not-self-signed`.

If the certificate is not self-signed:

```json
{
    "signing_type": "not-self-signed",
    "signed_by": "A-Certificate-Authority",
    "expiry": "2019-04-26T05:28:52Z"
}
```

The format of the `expiry` field is in the ISO format and is always in the UTC timezone.

### POST /edge/configuration/certificate

Use this endpoint to upload the new SSL certificate and the key file.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

```http
POST https://myown.iot.com/edge/configuration/certificate
Content-Type: application/json

{
    "renewal_type": "upload"
}
```
In the JSON format above, the value of `renewal_type` can be `generate` or `upload`:

- If you have set `"renewal_type": "generate"`, {{< product-c8y-iot >}} Edge generates the certificate for you.

- If you have set `"renewal_type": "upload"`, you must upload the certificate.

**Response**

- If you have set `"renewal_type": "upload"`, the endpoint returns HTTP status 201.

		{
		    "id": "14",
		    "uploads": [
		        {
		            "name": "certificate",
		            "url": "https://myown.iot.com/edge/upload/14/certificate"
		        },
		        {
		            "name": "certificate_key",
		            "url": "https://myown.iot.com/edge/upload/14/certificate_key"
		        }
		    ]
		}

- If you have set `"renewal_type": "generate"`, the endpoint returns HTTP status 201.

		{
    		"id": "15"
		}

To upload the certificate, use the URLs returned in the JSON response. The `upload_key` represents the values of the keys: `certificate`, and `certificate_key`. For more information, see [Uploading files using REST APIs](/edge/rest-api/#uploading-files-using-rest-api).

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

### POST /edge/expand-disk

Use this endpoint to expand the disk size of the installation disk and the data disk. You can either expand the disk size for both the disks or any one of the disk at a time. There is no limit on the number of the disk expansion process.

Before using this endpoint, you must set or edit the disk size in the hypervisor. See the hypervisor specific documentation for editing the disk size.

>**Info:** If there is no disk space to expand, the task will be marked as success.

**Request**

An empty POST request triggers a new disk expansion task.

**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "20"
}
```

The `id` returned in the JSON response is the task ID. Use the task ID for polling the task. See [GET /edge/tasks/{id}](/edge/rest-api/#get-edgetasksid).

### GET /edge/tasks/{id}

Use this endpoint to get the details of the task with the given ID.

**Response**

The endpoint returns:

- HTTP status 200.

	    {
			"id":"1",
			"type":"network",
			"status":"executing"
		}

	The `type` refers to the type of task: `network`, `installation`, `hostname`, `remote-connectivity`, `certificate-renewal`, `microservices-state`, `update`, `time-sync`, `reboot`.

	The `status` refers to the status of the task: `executing`, `succeeded`, `failed`.

### GET /edge/tasks/{id}/log

Use this endpoint to get the log for the task with the given ID.

**Response**

The endpoint returns:

- A JSON array containing the lines from the Ansible log, if a task is found with the given ID. The log may be empty when this request is made, returning an empty JSON array. Each log line is contained in an object as shown in this example:

		[
		  {"text":"This is a log line"},
		  {"text":"This is another log line"}
		]
- HTTP status 410, if the log has been deleted to save disk space.
