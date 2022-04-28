---
weight: 15
title: Uploading files using REST APIs
layout: redirect
---

The tasks like installing Cumulocity IoT Edge, updating Cumulocity IoT Edge, and updating the certificate require you to upload the files to complete the task successfully. To upload the files, you must use the URLs in the `uploads` array in the JSON response.

For example, to upload the license and the certificate files during the installation, you must use the URLs returned in the `uploads` array in the JSON response of the `/edge/install` endpoint. The URL layout is not static and can be changed anytime.

|HEADERS||
|:---|:---|
|Content-Type|application/octet-stream
|Content-Disposition|attachment; filename="\<filename\>"

**Request**

In the following JSON syntax, the `Content-Type` is set to `application/octet-stream` for the binary files. The `Content-Disposition` header must contain only the filename including the file extension and not the path to the file. The URL must be read from the `uploads` JSON response. You must not construct the URL.

```http
POST https://192.168.66.10/edge/upload/1/certificate_key

Content-Type: application/octet-stream
Content-Disposition: attachment; filename="myown-selfsigned.key"
```

**Timeout period**

For each task that requires files to be uploaded, a 10 second timeout is applied from when the bytes were last received for any upload that is part of this task, or from when the task was created. If this timeout is reached, the endpoint returns HTTP status 404.

>**Important:** If you have a large file to upload (such as an archive for the `/edge/update` endpoint), check whether your HTTP client loads the full file into the memory before sending the file. It can take more than 10 seconds to load a large file (in gigabytes) into memory, so the timeout could expire before the HTTP client can send the first byte. Software AG recommends that you stream the bytes directly from the file to the upload endpoint. If you cannot stream the bytes directly from the file, an alternative is to read the file into memory before calling the endpoint that starts the task.

**Response**

The endpoint returns:

- HTTP status 201, if the request is successful.

- HTTP status 400, if:

	- the file has been already uploaded for the specified task
	- the `Content-Disposition` header is set incorrectly
	
- HTTP status 404, if the upload timeout has expired	