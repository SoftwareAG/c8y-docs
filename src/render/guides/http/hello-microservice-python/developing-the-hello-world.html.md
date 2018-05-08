---
order: 30
layout: redirect
title: Developing the "Hello python" microservice 
---

To develop a simple "Hello, World!" microservice in python, you need to
 
 * create a python web application
 * create the dockerfile
 * add microservice manifest
 * build and run the application

### Create a python web application

In this example we will use Python 3 with a Flask microframework, which enables simple exposing endpoints and embedded HTTP server. Start from creating the "application.py" script with the content
 
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
        
The application is configured to run on port 80 (which is required for the microservice), and exposes 2 endpoints: "/health" and "/hello".
Endpoint "/hello" reads few standard variables provided into environment by platform during microservice installation and returns their values as JSON.

### Create Dockerfile

To enable building docker image with our application, you need to create the "Dockerfile". For this example it should be in the same directory as "application.py" script.

    FROM python:alpine3.6
    
    COPY . /app
    WORKDIR /app
    RUN pip install -r requirements
    ENTRYPOINT ["python"]
    CMD ["application.py"]
    
This build uses Alpine linux with python SDK inside. This is a very thin distribution, and resulting docker image is small (about 100 MB). The line

    RUN pip install -r requirements
    
installs required python libraries using "pip" installer. Those required libraries should be put into "requirements" file in the same directory. In our example we use only Flask as non-standard library, so "requirements" file has only 1 line
    
    Flask==0.10.1
    
### Add manifest 
    
The last thing, which is required for our application is the microservice manifest file "cumulocity.json"    

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
    
### Build the application
     
To build the docker image and save it in "image.tar" run     

    $ docker build -t hello-python-microservice .
    $ docker save hello-python-microservice > "image.tar"

then pack "image.tar" with the manifest "cumulocity.json" into .zip archive
    
    $ zip hello-microservice cumulocity.json image.tar
    
The resulting "hello-microservice.zip" file contains ready to upload microservice. 

### Running the example

Uploading "hello-microservice.zip" into platform can be done via UI. In "Administration" application go to 

Applications -> Own applications -> Add application -> Upload ZIP file

and choose "Subscribe". 

#### Using "microservice" script

You can also build, upload and subscribe the application using ["microservice" utility script](/guides/reference/microservice-package). In this case the files must follow the directory sctructure required by the script. In our example it would be

    /docker/Dockerfile
    /docker/application.py
    /docker/requirements
    /cumulocity.json
     
     

#### Example usage

After application is uploaded, and subscribed by any tenant it will run in the container. Request

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