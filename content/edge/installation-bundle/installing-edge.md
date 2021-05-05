---
weight: 15
title: Installing Cumulocity IoT Edge
layout: redirect
---

You can install Cumulocity IoT Edge using the GUI and using the REST APIs. Before you perform the installation, ensure that you have imported the Edge Appliance to the hypervisor. For your convenience, see the hypervisor examples for setting up Cumulocity IoT Edge:

* [Example setup for ESXi VMWare](/edge/installation#setting-up-esxi)
* [Example setup for VMWare Workstation Player](/edge/installation#setting-up-vmware)
* [Example setup for Hyper-V](/edge/installation#setting-up-hyper-v)

### Installing Cumulocity IoT Edge using the GUI

To install Cumulocity IoT Edge using the GUI:

1. Connect and start the Edge appliance in the hypervisor. Wait until the network configuration screen appears.
<img src="/images/edge/edge-network-configurator.png" name="Network Configurator" style="width:75%;"/>

2. Configure the network for your Edge appliance. For example, see the sample screenshot.
<img src="/images/edge/edge-network-configurator-1.png" name="Network Configurator" style="width:75%;"/>

3. Press **Enter** to save the network configuration. 
<img src="/images/edge/edge-network-configurator-2.png" name="Network Configurator" style="width:75%;"/>

   Note down the URL to perform the installation. In the screenshot above, the URL is `https://192.168.66.10/apps/installation/`.

4. Open the URL in a browser to start the installation process.

   Read the prerequisistes and ensure that you have the domain name, SSL certificate and key associated with your domain name, and the license file.

5. Click **Start Installation**.

6. Create an administrator account for the guest operating system below **Guest OS admin**.

7. Provide a password for the **root** user of the guest operating system below **Guest OS root**, and click **Next**.

8. Create an administrator account to access the Cumulocity IoT Edge tenant and the Cumulocity IoT Edge management tenant,and click **Next**.

9. Provide a fully qualified domain name below **Register domain**.

   For example, "myown.iot.com". Here, you must have the Cumulocity IoT Edge license for the domain name **iot.com** or **myown.iot.com**.

   The domain name must adhere to all the domain name validation rules as described in [Domain name validation](/edge/installation/#domain-name-validation-for-edge-license-key-generation).

	>**Important:** Once configured, the domain name cannot be changed. Ensure that you use the name finally desired.

10. Provide the Cumulocity IoT Edge license file associated with your domain name below **Product licence**.

11. Proide the SSL certificate file and the SSL certificate key file.

    If you do not have an SSL certificate, select **Generate self-signed certificate** to generate one.

12. Click **Finish Installation**.

The installation takes some time to complete. After the installation is complete, the "Cumulocity IoT Edge installation is now complete" message appears. If you still see the installation in progress, refresh the browser. 

Next steps, click **Open Cumulocity IoT Edge**.

### Installing Cumulocity IoT Edge using the REST APIs

Cumulocity IoT Edge supports REST APIs to perform the tasks like installation, configuring the network for the Edge appliance, updating the Edge appliance, changing the hostname, and so on. The REST APIs in Cumulocity IoT Edge use the HTTPS protocol for all the endpoints. Before the installation, Cumulocity IoT Edge generates a self-signed certificate for the IP address of the VM when you configure the network for the Edge VM. You must use the IP address of the Edge VM in the URL. For example, https://192.168.66.10/edge/tasks/latest-installation.

During the installation, the host of the URL changes from the IP address to the domain name that you have configured. For example, https://myown.iot.com/edge/configuration/domain. 

Cumulocity IoT Edge creates a new self-signed certificate for the domain name if you want Cumulocity IoT edge to generate a self-signed certificate. Otherwise, you must upload the self-signed certificate. Also, some of the endpoints could be temporarily unavailable during the installation. For example, the endpoint `/edge/tasks/latest-installation` can be used for polling to see the status (executing, succeeded, failed) of the installation process.

When you send a HTTPS request with the POST operation, some of the tasks return the response immediately with the task still running in the background. Here, the tasks refer to installation process, uploading license and certificate files, configuring a network and so on. The immediate response indicates if the task is created successfully or not. To check the status of a task, use the `/edge/tasks/{id}` endpoint.

>**Important:** Running two tasks concurrently results in conflicts between the tasks and might return HTTP status 409.

### POST /edge/configuration/network

Use this endpoint to configure the Cumulocity IoT Edge network.

|HEADERS||
|:---|:---|
|Content-Type|application/json

**Request**

Use the JSON format before the installation. After the installation, you can configure the Docker bridge network CIDR.

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
**Response**

The endpoint returns HTTP status 201, if the request is successful.

```json
{
	"id": "2"
}
```

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

### GET /edge/tasks/latest-installation

Use this endpoint to get the information about the latest installation of Cumulocity IoT Edge.

**Response**

The endpoint returns:

- HTTP status 200, if an attempt has been made to perform the installation.

		GET https://192.168.66.10/edge/tasks/latest-installation

		{
			"id":"1",
			"type":"installation",
			"status":"succeeded"
		}

	The `status` represents the current status of the installation: `executing`, `succeeded`, or `failed`.
	
- HTTP status 404, before attempting the installation.

### GET /edge/tasks/{id}

Use this endpoint to get the details of the task with the given ID.

**Response**

The endpoint returns:

- HTTP status 200.

	    GET https://192.168.66.10/edge/tasks/1

		{
			"id":"1",
			"type":"installation",
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


### GET /edge/configuration/domain

Use this endpoint to get the domain name configured in Cumulocity IoT Edge. This endpoint is available only after a successful installation.

**Response**:

This endpoint returns:

- HTTP status 200, after the installation.

		{
			"domain_name":"myown.iot.com"
		}