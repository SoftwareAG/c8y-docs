---
order: 10
title: Hello Microservice Python
layout: redirect
---

### Overview

In the Cumulocity platform, microservice hosting is build on top of Docker containers. This makes it technology-agnostic and allows developers to create applications in any technology stack.

In this tutorial, you will learn how to create and run a sample microservice written in Python. The provided example covers
 
* a sample Python application using the Flask framework to expose REST endpoints
* a manifest file with minimal content to run an application 
* the configuration of the dockerfile which enables to create a ready to run docker image with bundled application (inside light Alpine linux distribution)
* instructions for building and packaging a ZIP file containing the full application (ready to upload into platform)
* instructions for uploading and subscribing to the packaged microservice 


### Prerequisites

Create an account on cumulocity.com, for example by using a free trial. At this step you will be provided with a dedicated URL address.

Verify the docker installation:

Cumulocity hosts linux/amd64 docker containers and not Windows containers. The docker version must be >= 1.12.6

    $ docker version
    Client:
     Version:         1.12.6
     API version:     1.24
     OS/Arch:         linux/amd64

    Server:
     Version:         1.12.6
     API version:     1.24
     OS/Arch:         linux/amd64


### Developing the "Hello World" microservice 

To develop a simple "Hello, World!" microservice in Python, you need to
 
 * create a python web application
 * create the dockerfile
 * add the microservice manifest
 * build and run the application

#### Creating a Python web application

In this example, we will use Python 3 with a Flask microframework, which enables simple exposing of endpoints and embedded HTTP server. 

Start from creating the "application.py" script with the content
 
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
        
The application is configured to run on port 80 (which is required for the microservice), and exposes two endpoints: "/health" and "/hello".
The endpoint "/hello" reads some standard variables provided to the environment by the platform during the microservice installation and returns their values as JSON.

#### Creating the dockerfile

To be able to build a Docker image with our application, you need to create the "Dockerfile". For this example it should be in the same directory as the "application.py" script.

    FROM python:alpine3.6
    
    COPY . /app
    WORKDIR /app
    RUN pip install -r requirements
    ENTRYPOINT ["python"]
    CMD ["application.py"]
    
This build uses Alpine linux with Python SDK inside. This is a very thin distribution, and the resulting Docker image is small (about 100 MB). The line

    RUN pip install -r requirements
    
installs the required Python libraries using "pip" installer. These required libraries should be put into the "requirements" file in the same directory. In our example we use only Flask as non-standard library, so the "requirements" file has only 1 line
    
    Flask==0.10.1
    
#### Adding the manifest 
    
Finally, the microservice manifest file "cumulocity.json" is required for our application.

    {
      "apiVersion":"1",
      "version":"1.0.0",
      "provider": {
        "name":"Cumulocity GmbH"
      },
      "isolation":"MULTI_TENANT",
      "requiredRoles": [
      ],
      "roles":[
      ]
    }
    
#### Building the application
     
To build the Docker image and save it in "image.tar", run     

    $ docker build -t hello-python-microservice .
    $ docker save hello-python-microservice > "image.tar"

Then pack "image.tar" with the manifest "cumulocity.json" into a ZIP archive.
    
    $ zip hello-microservice cumulocity.json image.tar
    
The resulting "hello-microservice.zip" file contains the ready to upload microservice. 

#### Running the example

Uploading the "hello-microservice.zip" into the platform can be done via the UI. In the Administration application navigate to **Applications** > **Own applications** > **Add application** > **Upload ZIP file** and select **Subscribe**. 

For details on uploading a microservice ZIP file refer to Administration> Managing applications > Adding applications > [Administration > Managing applications > Adding applications > Uploading ZIP files](uploading-zip-files) in the User guide. 

#### Using "microservice" script

You can also build, upload and subscribe the application using the ["microservice" utility script](/guides/reference/microservice-package). In this case the files must follow the directory structure required by the script. In our example it would be

    /docker/Dockerfile
    /docker/application.py
    /docker/requirements
    /cumulocity.json
     
     

#### Example usage

After the application is uploaded and subscribed by any tenant it will run in the container. A request

    GET {{URL}}/service/hello-microservice/hello 
    Authorization: Basic ...

with proper credentials (user from any subscribed tenant), results with a response 
 
    {
       "microserviceIsolation": "MULTI_TENANT",
       "mqttPlatformUrl": "tcp://cumulocity:1881",
       "password": "fsDHwwdIZ5",
       "platformUrl": "http://cumulocity:8111",
       "tenant": "mytenant",
       "user": "servicebootstrap_hello-microservice"
    }

