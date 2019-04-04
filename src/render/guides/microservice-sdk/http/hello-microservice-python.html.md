---
order: 20
title: Python Microservice
layout: redirect
---

On the Cumulocity platform, microservice hosting is built on top of Docker containers. This makes it technology-agnostic and allows developers to create applications in any technology stack.

In this tutorial, you will learn how to create and run a sample microservice written in Python. This example contains:

* A sample Python application using the Flask framework to expose REST endpoints
* A manifest file with minimal content to run an application
* The configuration of the Dockerfile which enables to create a ready to run docker image with bundled application (inside light Alpine linux distribution)
* Instructions for building and packaging a ZIP file containing the full application (ready to upload into the platform)
* Instructions for uploading and subscribing to the packaged microservice


### Prerequisites

Create an account on [cumulocity.com](https://cumulocity.com), for example by using a free trial. At this step you will be provided with a dedicated URL address.

Cumulocity hosts linux/amd64 Docker containers and not Windows containers. The Docker version must be >= 1.12.6. Verify your Docker installation with the following command:

```shell
$ docker version
    Client:
     Version:         1.12.6
     API version:     1.24
     OS/Arch:         linux/amd64

    Server:
     Version:         1.12.6
     API version:     1.24
     OS/Arch:         linux/amd64
```

### Developing the "Hello World" microservice

To develop a simple "Hello, World!" microservice in Python, you need to:

 * Create a Python web application
 * Create the Dockerfile
 * Add the microservice manifest
 * Build and run the application

#### Creating a Python web application

This example uses Python 3 with a Flask microframework which enables simple exposing of endpoints and embedded HTTP server.

Start by creating the _application.py_ script with the following content:

```python
#!flask/bin/python
from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/health')
def health():
    return '{"status":"UP"}'

@app.route('/hello')
def hello():
    # returns details about environment
    environment_data = {
        'platformUrl': os.getenv('C8Y_BASEURL'),
        'mqttPlatformUrl': os.getenv('C8Y_BASEURL_MQTT'),
        'tenant': os.getenv('C8Y_BOOTSTRAP_TENANT'),
        'user': os.getenv('C8Y_BOOTSTRAP_USER'),
        'password': os.getenv('C8Y_BOOTSTRAP_PASSWORD'),
        'microserviceIsolation': os.getenv('C8Y_MICROSERVICE_ISOLATION')
    }
    return jsonify(environment_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)
```

The application is configured to run on port 80 – which is required for the microservice – and exposes two endpoints: <kbd>/health</kbd> and <kbd>/hello</kbd>.

The endpoint <kbd>/hello</kbd> reads some standard variables provided to the environment by the platform during the microservice installation and returns their values in JSON format.

#### Creating the Dockerfile

To be able to build a Docker image with your application, you need to create a Dockerfile. For this example, it shall be in the same directory as the _application.py_ script.

```dockerfile
FROM python:alpine3.6

COPY . /app
WORKDIR /app
RUN pip install -r requirements
ENTRYPOINT ["python"]
CMD ["application.py"]
```

This build uses Alpine Linux with the Python SDK inside. It is a very thin distribution and the resulting Docker image is small (about 100 MB). The instruction `RUN pip install -r requirements` installs the required Python libraries using the `pip` installer. These required libraries shall be put into the _requirements_ file in the same directory. In our example, we use only Flask as non-standard library, so the _requirements_ file has only 1 line:

```properties
Flask==0.10.1
```

#### Adding the application manifest

The microservice manifest file _cumulocity.json_ is required for the application. Create that file with the following content:

```json
{
    "apiVersion": "1",
    "version": "1.0.0",
    "provider": {
        "name": "Cumulocity GmbH"
    },
    "isolation": "MULTI_TENANT",
    "requiredRoles": [
    ],
    "roles": [
    ]
}
```

#### Building the application

Execute the following Docker commands to build the Docker image and save it as _image.tar_:

```shell
$ docker build -t hello-python-microservice .
$ docker save hello-python-microservice > "image.tar"
```

Then pack _image.tar_ together with the manifest _cumulocity.json_ into a ZIP file.

```shell
$ zip hello-microservice cumulocity.json image.tar
```

The resulting _hello-microservice.zip_ file contains your microservice and it is ready to be uploaded to the Cumulocity platform.

#### Running the example

Uploading the _hello-microservice.zip_ into the platform can be done via the UI. In the Administration application, navigate to **Applications** > **Own applications** > **Add application** > **Upload ZIP file** and click on the **Subscribe** button.

![Subscribe microservice](/guides/images/microservices-sdk/admin-microservice-subscribe-up.png)

For more details about uploading a microservice ZIP file, refer to [Managing applications > Adding own applications](/guides/users-guide/administration#adding-applications) under the Administration section in the User guide.

### Using the microservice utility tool

You can also build, upload and subscribe the application using the [microservice utility tool](/guides/reference/microservice-package). In this case, the files must follow the directory structure required by the script.

For this particular Python microservice example, the structure shall be:

```plaintext
/docker/Dockerfile
/docker/application.py
/docker/requirements
/cumulocity.json
```

### Execution example

After the microservice has been successfully uploaded and subscribed by any tenant, it will run in a Docker container. A request similar to:

```http
GET <URL>/service/hello-microservice/hello

HEADERS:
  "Authorization": "<AUTHORIZATION>"
```

with proper credentials (user from any subscribed tenant), results with a response as:

```json
{
    "microserviceIsolation": "MULTI_TENANT",
    "mqttPlatformUrl": "tcp://cumulocity:1881",
    "password": "...",
    "platformUrl": "http://cumulocity:8111",
    "tenant": "mytenant",
    "user": "servicebootstrap_hello-microservice"
}
```
