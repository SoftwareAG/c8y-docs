---
weight: 40
title: Node.js microservice
layout: redirect
---

Cumulocity provides SDKs for developing microservices using C# or Java. Nevertheless, you are free to choose the tech-stack of your preference to develop a microservice as long as it fulfills the [general requirements](/guides/microservice-sdk/concept/#requirements).

In this example you will learn how to create and deploy a Node.js-based microservice. The application exposes endpoints to verify if the microservice is up and running and get some of the environment variables.

It uses the Cumulocity [@c8y/client JavaScript library](https://www.npmjs.com/package/@c8y/client) to subscribe to alarms. When a new alarm is created, a Slack channel gets notified.

### Prerequisites

- Cumulocity credentials (tenant, user and password)
- Slack credentials
- Docker local installation

### Developing the microservice

#### Configure a Node.js application

Start by creating a folder *node-microservice* to contain your files. Inside your folder, use the following command to initialize your project:

```shell
$ npm init
```

It will walk you through creating a *package.json* file which allows to identify the project as well as handling its dependencies. When prompted, enter your project's information and use *app.js* as entry point. Once the file has been created, edit it adding the project dependencies and a start property. Eventually, it shall look similar to:

```json
{
  "name": "node-microservice",
  "version": "1.0.0",
  "description": "Cumulocity microservice application",
  "main": "app.js",
  "dependencies": {
    "@c8y/client": "^1004.0.7",
    "@slack/web-api": "^5.0.1",
    "express": "4.17.0"
  },
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "<your-name>",
  "license": "MIT"
}
```

#### Add the source code

Now create a file *app.js* which is the main entry point of your application. It uses the Express framework to start a server listening on port 80, defines its endpoints and requires controllers to use the Cumulocity and Slack APIs.

```javascript
"use strict";

const express = require("express");
const app = express();
const port = process.env.PORT || 80;

// Application endpoints
const routes = require("./routes");
routes(app);

// Server listening on port 80
app.use(express.json());
app.listen(port);
console.log(`${process.env.APPLICATION_NAME} started on port ${port}`);

// Cumulocity and Slack controllers
const controllers = require("./controllers");
```

As you may have already noticed, `routes` and `controllers` are required. Create a *routes.js* file with the following content:

```javascript
"use strict";

module.exports = function(app) {

    // Hello world
    app.route("/").get(function(req, res) {
        res.json({ "message" : "Hello world!" });
    });

    // Health check
    app.route("/health").get(function(req, res) {
        res.json({ "status" : "UP" });
    });

    // Environment variables
    app.route("/environment").get(function(req, res) {
        res.json({
            "appName" : process.env.APPLICATION_NAME,
            "platformUrl" : process.env.C8Y_BASEURL,
            "microserviceIsolation" : process.env.C8Y_MICROSERVICE_ISOLATION,
            "tenant" : process.env.C8Y_BOOTSTRAP_TENANT,
            "bootstrapUser" : process.env.C8Y_BOOTSTRAP_USER,
            "bootstrapPassword" : process.env.C8Y_BOOTSTRAP_PASSWORD
        });
    });

};
```

At this point, your microservice would be accessible via web on its endpoints to return a "Hello world" message, verify that the microservice is up and running and get some environment variables.

In order to implement the controllers, you need first to create a Slack app and get a token to use the Web API. Go to [Slack API: Applications](https://api.slack.com/apps?new_app=1) to create a new app. Choose your workspace and give your app a name, e.g. C8Y Slack bot. Afterwards, [get an OAuth access token](https://slack.dev/node-slack-sdk/getting-started#getting-a-token-to-use-the-web-api).

Once you have your Slack app and token ready, create the *controllers.js* file with the following content:

```javascript
"use strict";

/********************* Slack *********************/

// Create a new instance of the WebClient class with the OAuth Access Token
const { WebClient } = require("@slack/web-api");
const web = new WebClient("xoxp-YOUR-TOKEN-GOES-HERE");

// Set your channel ID to know where to send messages to
const channelId = "MJGBXXX";

// Format a message and post it to the channel
async function postSlackMessage (adata) {
    // Alarm severity
    let color = {
        "WARNING" : "#1c8ce3",
        "MINOR"   : "#ff801f",
        "MAJOR"   : "#e66400",
        "CRITICAL": "#e0000e"
    };

    // Send a message from this app to the specified channel
    let src = adata.source;
    await web.chat.postMessage({
        channel: channelId,
        attachments : [{
            "text": adata.text,
            "fields": [
                {
                    "title": "Source",
                    "value": `<${src.self}|${src.name ? src.name : src.id}>`,
                    "short": true
                },
                {
                    "title": "Alarm type",
                    "value": adata.type,
                    "short": true
                }
            ],
            "color": color[adata.severity]
        }]
    });
}


/********************* Cumulocity *********************/

const { Client } = require ("@c8y/client");
const { BasicAuth } = require ("@c8y/client");

// Platform credentials
const auth = new BasicAuth({
    user:     "<user>",
    password: "<password>",
    tenant:   "<tenant>"
});

(async () => {
    try {
        // Platform authentication
        const client = await new Client(auth, process.env.C8Y_BASEURL);

        // List filter for unresolved alarms only
        const filter = {
            pageSize: 100,
            withTotalPages: true,
            resolved: false
        };

        // Get filtered alarms and post a message to Slack
        const { data } = await client.alarm.list(filter);
        data.forEach(alarm => {
            postSlackMessage(alarm);
        });

        // Real time subscription for active alarms
        client.realtime.subscribe("/alarms/*", (alarm) => {
            if (alarm.data.data.status === "ACTIVE") {
                postSlackMessage(alarm.data.data);
            }
        });
        console.log("listening to alarms...");
    }
    catch (err) {
        console.error(err);
    }
})();
```

The code has two parts. The first one needs your Slack OAuth token and channel ID (chat group where the messages will be posted).
A message is formatted using the colors of the different alarm severities that you may see in the Cockpit application. This message gets posted to the Slack channel.

The second part uses basic authentication to the Cumulocity platform, it gets all active alarms on the tenant and posts alarm messages to the Slack channel. After that, it subscribes to alarms and notifies the channel each time a new alarm is created.

#### Dockerfile and application manifest

Create a microservice manifest *cumulocity.json* with the following content:

```json
{
    "apiVersion": "1",
    "version": "1.0.0-SNAPSHOT",
    "provider": {
        "name": "Cumulocity GmbH"
    },
    "isolation": "MULTI_TENANT",
    "requiredRoles": [
        "ROLE_ALARM_READ",
        "ROLE_ALARM_ADMIN"
    ],
    "roles": [
    ]
}
```

Finally, Docker needs to know how to build your microservice. Create a *Dockerfile* as follows:

```docker
FROM node:alpine

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm", "start"]
```

### Deploying the microservice

Once you have all the required files, building and deploying the microservice application is fairly simple.
Execute the following Docker commands to build the Docker image and save it as _image.tar_:

```shell
$ docker build -t node-microservice .
$ docker save node-microservice > "image.tar"
```

Then pack _image.tar_ together with the manifest _cumulocity.json_ into a ZIP file.

```shell
$ zip node-microservice cumulocity.json image.tar
```

The resulting _node-microservice.zip_ file contains your microservice and it is ready to be uploaded to the Cumulocity platform.
Uploading the _node-microservice.zip_ into the platform can be done via the UI. In the Administration application, navigate to **Applications** > **Own applications** > **Add application** > **Upload microservice**. Drop the ZIP file of the microservice and then click **Subscribe**.

![Subscribe microservice](/guides/images/microservices-sdk/admin-microservice-subscribe-up.png)

For more details about uploading a microservice ZIP file, refer to [Managing applications > Adding own applications](/guides/users-guide/administration#adding-applications) under the Administration section in the User guide.

### Testing the microservice

After the microservice has been successfully uploaded and subscribed to your tenant, it will run in a Docker container. A request similar to:

```http
GET <URL>/service/node-microservice/environment

HEADERS:
  "Authorization": "<AUTHORIZATION>"
```

with proper credentials (user and password from any subscribed tenant), returns a response as:

```json
{
  "appName": "node-microservice",
  "platformUrl": "http://cumulocity:8111",
  "microserviceIsolation": "MULTI_TENANT",
  "tenant": "t...",
  "bootstrapUser": "...",
  "bootstrapPassword": "..."
}
```

If there are active alarms on your tenant, your Slack channel will get notified. You can also [create a new alarm](/guides/reference/alarms/#post-create-a-new-alarm) using the Cumulocity REST API and validate that your microservice is listening to new alarms. Your Slack channel will also get notified.

![Slack app posting alarms](/guides/images/microservices-sdk/microservice-slack-alarms.png)

### Source code

The code of this [node-microservice](https://bitbucket.org/m2m/cumulocity-examples/src/default/microservices/node-microservice/) can be found in our Bitbucket M2M repositories.
