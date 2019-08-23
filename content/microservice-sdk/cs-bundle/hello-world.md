---
order: 20
title: Hello, world!
layout: redirect
---

### Overview

This example provides a step-by-step guide to develop a simple microservice in Cumulocity. It uses Cake (C# Make), which is a cross-platform build automation system.

To start building .NET apps, you just need to download and install the [.NET SDK](https://www.microsoft.com/net/download). Follow the instructions on the download page for the last stable release or alternatively you can also try using 2.0.

If you use Linux, visit the [MonoDevelop website](http://www.monodevelop.com/) for download packages and more details about our cross-platform IDE. Follow the instructions on the download page for the last stable release or alternatively you can also try using 5.4 or higher version of mono [IDE](http://www.mono-project.com/download/#download-lin). Note, that Mono-devel is required to compile code.

The initial script was used to create a demo, which makes it easier to create an example microservice project with dependency management and then deploy it on the server. The script attempts to download the package from the sources listed in the project file, and next a reference is added to the appropriate project file. In addition, the script creates the appropriate Dockerfile to take into account the naming of projects. Next it will create a Docker image based on a Dockerfile.

The application created in this way uses the ASP.NET Web API framework to create a web API. The API runs on an isolated web server called Kestrel and as a foreground job, which makes it work really well with Docker.


### Building and deploying Hello World on Windows

Building and deploying the "Hello, World" microservice on Windows is similar to the way it is done for Linux. For Windows, Powershell is installed by default and that is why we use it. For Linux, Powershell Core can be considered as an alternative.

Download the script file to build a "Hello World" application. Manage the version of scripts and replace latest to the right version number.

```shell
Invoke-WebRequest  http://resources.cumulocity.com/cssdk/releases/microservicesdk-win-dev-latest.zip -OutFile microservicesdk-win-dev-latest.zip
```

The latest can be replaced by the version number, e.g. microservicesdk-lin-dev-{X.X.X}.zip.

Once you have downloaded the source, unzip the file.

```shell
Expand-Archive c:\microservicesdk-win-dev-latest.zip -DestinationPath c:\microservicesdk-win-dev-latest
```

Change the current folder and navigate to the _microservicesdk_ folder.

```shell
cd microservicesdk-win-dev-latest
```

Make sure to use the correct SDK version - 2.0.3 or define which .NET Core SDK version is used when you run .NET Core CLI commands.

```shell
 dotnet --info
.NET Command Line Tools (2.0.3)

Product Information:
 Version:            2.0.3
 Commit SHA-1 hash:  12f0c7efcc
 ....
```

If the desired version of SDK has not been installed, it is possible to install SDK using Chocolatey. Run Powershell as Admin.

```shell
choco install dotnetcore-sdk --version 2.0.3
```

If you do not have the Chocolatey package manager, follow the [Installing Chocolatey](https://chocolatey.org/install) steps to install it.

For several installed SDKs in the root directory of the new project set the required SDK version

```shell
dotnet new globaljson --sdk-version 2.0.3
```

Run the script *create.ps1* to create a sample project, provide the name of the project and the API application.

```shell
./create.ps1
```

This script _create.ps1_ is able to create an application on the platform if it discovers _settigns.ini_ in the directory. More details in _Step 1 - Create application_

Execute the bootstrapper script to build the application and an image from a Docker file.

```shell
PS C:\tmp\c8y> .\build.ps1
Preparing to run build script...
Running build script...

========================================
Clean
========================================

========================================
DotnetPublish
========================================
Microsoft (R) Build Engine version 15.4.8.50001 for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  demo -> C:\tmp\c8y\src\demo\bin\Release\netcoreapp2.0\demo.dll
  demo -> C:\tmp\c8y\publish\Web\

========================================
Docker-Build
========================================
Sending build context to Docker daemon  65.47MB
Step 1/4 : FROM microsoft/dotnet:2.0-runtime
 ---> 79bb740a9a6e
Step 2/4 : WORKDIR /app
 ---> Using cache
 ---> 7e6f85882838
Step 3/4 : COPY ./publish/Web ./
 ---> 6c95b8196f9a
Step 4/4 : ENTRYPOINT ["dotnet", "demo.dll"]
 ---> Running in 433334757ce3
Removing intermediate container 433334757ce3
 ---> 6625aa14ea84
Successfully built 6625aa14ea84
Successfully tagged demo:latest
SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.

========================================
Default
========================================

Task                          Duration
--------------------------------------------------
Clean                         00:00:00.0673414
DotnetPublish                 00:00:25.2592712
Docker-Build                  00:01:01.8095063
--------------------------------------------------
Total:                        00:01:27.1455943
```

After a successful build you will be provided with a ZIP file in the target directory. The ZIP can be deployed to the Cumulocity platform as described in the Deployment section.

### <a name="run-locally"></a> Running the microservice locally

In order to test the microservice calls to Cumulocity, you can run the Docker container locally.

The microservice must be deployed  to verify calls from Cumulocity.

To run a microservice which uses Cumulocity API locally you need the following:

* URL address of the Cumulocity host of your tenant
* Authorization header = "Basic <Base64(<username>:<password>)>"
* Tenant - tenant ID

You may also install the cURL utility. There are several ways to install it on Windows:

* Install it using Chocolatey.
* Install it with a one-click installer.
* Using official cURL binaries.

Assuming that Chocolatey is installed:

```shell
choco install curl
```

**Step 1 - Create application**

If the application does not exist, create a new application on a platform:

```http
POST <URL>/application/applications

HEADERS:
  "Authorization": "<AUTHORIZATION>"
  "Content-Type": "application/vnd.com.nsn.cumulocity.application+json"
  "Accept: application/vnd.com.nsn.cumulocity.application+json"

BODY:
  {
    "name": "<APPLICATION_NAME>",
    "type": "MICROSERVICE",
    "key": "<APPLICATION_NAME>-microservice-key"
  }
```

Example:

```shell
curl -X POST -s \
-d '{"name":"hello-microservice-1","type":"MICROSERVICE","key":"hello-microservice-1-key"}' \
-H "Authorization: <AUTHORIZATION>" \
-H "Content-Type: application/vnd.com.nsn.cumulocity.application+json" \
-H "Accept: application/vnd.com.nsn.cumulocity.application+json" \
"<URL>/application/applications"
```

Example response:

```json
{
    "availability": "PRIVATE",
    "id": "<APPLICATION_ID>",
    "key": "<APPLICATION_NAME>-microservice-key",
    "manifest": {
        "imports": [],
        "noAppSwitcher": true
    },
    "name": "<APPLICATION_NAME>",
    "owner": {
        "self": "...",
        "tenant": {
            "id": "..."
        }
    },
    "requiredRoles": [],
    "roles": [],
    "self": "..",
    "type": "MICROSERVICE"
}
```

If the application has been created correctly, you can get the application ID from the response.

**Step 2 - Acquire the microservice bootstrap user**

```http
GET <URL>/application/applications/<APPLICATION_ID>/bootstrapUser

HEADERS:
  "Authorization": <AUTHORIZATION>
  "Content-Type": application/vnd.com.nsn.cumulocity.user+json
```

Example response:

```http
HTTP/1.1 200 Ok
Content-Type: application/vnd.com.nsn.cumulocity.user+json
{
  "tenant": "...",
  "name": "...",
  "password": "..."
}
```

**Step 3 - Run microservice locally**

The image is already added to the local Docker repository during the build. List all the Docker repository images available:

```shell
$ docker images

REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
api                 latest              a8298ed10cd9        16 hours ago        258MB
```

After you find the image in the list, run the Docker container for the microservice by providing the baseurl and the bootstrap user credentials:

```bash
$ docker run -e C8Y_BASEURL=<URL> -e C8Y_BOOTSTRAP_TENANT=<BOOTSTRAP_TENANT> -e C8Y_BOOTSTRAP_USER=<BOOTSTRAP_USERNAME> -e C8Y_BOOTSTRAP_PASSWORD=<BOOTSTRAP_USER_PASSWORD> -e C8Y_MICROSERVICE_ISOLATION=MULTI_TENANT -i -t <DOCKER_REPOSITORY_IMAGE>:<TAG>
```

**Step 4 - Subscribe to microservice**

```http
POST <URL>/tenant/tenants/<TENANT_ID>/applications

HEADERS:
  "Authorization": "<AUTHORIZATION>"

BODY:
  { "application":
      { "id": "<APPLICATION_ID>" }
  }
```

Example:

```shell
curl -X POST -d '{"application":{"id": "<APPLICATION_ID>"}}'  \
-H "Authorization: <AUTHORIZATION>" \
-H "Content-type: application/json" \
 "<URL>/tenant/tenants/<TENANT_ID>/applications"
```

**Step 5 - Verify if microservice is running**

Now you can verify if your application is running by executing

```shell
curl -H "Authorization: <AUTHORIZATION>" \
  <URL>/service/hello/api/values
```

The expected result is:

```plaintext
["value1","value2"]
```

### Runnning the application within the IDE

It is possible to check if the application communicates with the platform by defining relevant environmental variables in *launchSettings.json*. This file sets up the different launch environments that Visual Studio can launch automatically. Here is a snippet of the default *launchSettings.json*.

```json
{
  "iisSettings": {
    "windowsAuthentication": false,
    "anonymousAuthentication": true,
    "iisExpress": {
      "applicationUrl": "http://localhost:3288/",
      "sslPort": 0
    }
  },
  "profiles": {
    "IIS Express": {
      "commandName": "IISExpress",
      "launchBrowser": true,
      "environmentVariables": {
        "ASPNETCORE_ENVIRONMENT": "Development"
      }
    },
    "Api": {
      "commandName": "Project",
      "environmentVariables": {
        "SERVER_PORT": "47000",
        "C8Y_MICROSERIVCE_ISOLATION": "PER_TENANT",
        "C8Y_BASEURL": "<URL>",
        "C8Y_BASEURL_MQTT": "",
        "C8Y_TENANT": "",
        "C8Y_PASSWORD": "",
        "C8Y_USERNAME": "",
        "C8Y_BOOTSTRAP_TENANT": "<tenant>",
        "C8Y_BOOTSTRAP_USERNAME": "<username>",
        "C8Y_BOOTSTRAP_PASSWORD": "<password>"
      }
    }
  }
}
```

### Microservice package and deploy

Cumulocity provides you with an utility tool for easy microservice packaging, deployment and subscription. The script requires running Docker and can be found in the ZIP file *microservicesdk-win-dev-latest.zip*. Use the following command to download it.

```shell
Invoke-WebRequest  http://resources.cumulocity.com/cssdk/releases/microservicesdk-win-dev-latest.zip -OutFile microservicesdk-win-dev-latest.zip
```

To show all the functions are available, type

```shell
./microservice.ps1 --help
```

For further information refer to [Microservice package and deploy](https://cumulocity.com/guides/reference/microservice-package/) in the Reference guide.

**Deployment**

In addition, there is a *deploy.ps1* script that uses credentials stored locally. Run the script in order to deploy the application. You must provide the correct URL and credentials in the *settings.ini* file.

To deploy a microservice application on the platform, you need the following:

* URL address of the Cumulocity host of your tenant
* Username and password to log in with
* An application created on the platform
* ZIP build from previous steps for deployment

Configure the _settings.ini_ file as follows:

```properties
[deploy]
username=<tenant>/<user>
password=<password>
url=<tenanturl>
appname=sample_application
```

**_deploy.ps1_**

* The script looks for a *settings.ini* file in the same directory. If found, it uses the credentials and tenant URL from that file.
* If *settings.ini* is not found, an error is shown.

```shell
./deploy.ps1
tenant/user
someurl.com
appname
Header: ...


StatusCode        : 201
StatusDescription : Created
Content           : {}
RawContent        : HTTP/1.1 201 Created
                    Connection: keep-alive
                    Strict-Transport-Security: max-age=31536000; includeSubDomains
                    Content-Length: 0
                    Content-Type: application/vnd.com.nsn.cumulocity.managedobject+json;cha...
Headers           : {[Connection, keep-alive], [Strict-Transport-Security, max-age=31536000; includeSubDomains], [Content-Length, 0], [Content-Type, application/vnd.com.nsn.cumulocity.managedobject+json;charset=UTF-8;ver=0.9]...}
RawContentLength  : 0

I'm done!
```

**Call the script with the _.ini_ name**
* Loads the credentials and tenant URL from *settings_alternativ.ini*.
* If *settings_alternative.ini* is not found, an error is shown.

```shell
./deploy.ps1 -f settings.ini
```

* Merge the given arguments and ini configuration. Parameters from the file are overwritten by explicitly defined parameters.

```shell
./deploy.ps1 -an hello-world -f settings_alternative.ini
```

```shell
./deploy.ps1 -s <siteurl> -u <username> -p <password>  -an hello-world -f settings.ini
```

### Improving the microservice

The application starts executing from the entry point `public static void Main()` in Program class where the host for the application is created. The following shows an example of a program created by *create.sh*.

```cs
namespace api
{
	using System.Net;
	public class Program
  {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }
        public static IWebHost BuildWebHost(string[] args) =>

                WebHost.CreateDefaultBuilder(args)
                .ConfigureLogging((hostingContext, logging) =>
                {
                    logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                    logging.AddConsole();
                    logging.AddDebug();
                })
                .UseStartup<Startup>()
                .UseKestrel(options =>
                {
                    var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
                    var port = Environment.GetEnvironmentVariable("SERVER_PORT");
                    int portNumber = 8080;
                    if (Int32.TryParse(port, out portNumber))
                    {
                        options.Listen(IPAddress.Parse("0.0.0.0"), portNumber);
                    }
                    else
                    {
                        options.Listen(IPAddress.Parse("0.0.0.0"), 1);
                    }
                })
                .Build();
	}
}
```

The method BuildWebHost performs the following tasks:

* initializes a new instance of the WebHostBuilder class with pre-configured defaults
* specifies Kestrel as the server to be used by the web host
* configures the LoggerFactory
* specifies the class with the `UseStartup<Startup>`

An example application must include Startup class. As the name suggests, it is executed first when the application starts.

```cs
public class Startup
{
    public IConfiguration Configuration { get; }

    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddCumulocityAuthentication(Configuration);
        services.AddPlatform(Configuration);
        services.AddSingleton<IApplicationService, ApplicationService>();
        services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
        services.AddMvc().AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
        app.UseAuthentication();
        app.UseBasicAuthentication();
        app.UseMvcWithDefaultRoute();
    }
}
```

_Startup.cs_ responsibilities:

* Setup configuration in the Startup constructor
* Setup dependency injection in ConfigureServices
* Setup the middleware pipeline in Configure

The Dockerfile created by *create.ps1* contains:

```dockerfile
	FROM microsoft/dotnet:2.0-runtime
	WORKDIR /app
	COPY ./publish/Web ./
	ENV SERVER_PORT 4700
	ENTRYPOINT ["dotnet", "api.dll"]
```

The Dockerfile defines what goes on in the environment inside a container:

* Sets the working directory
* Copies all from an application directory to the working directory
* Sets the environment variable, in this case SERVER_PORT
* Specifies what executable to run when the container starts

**Platform API**

It is possible to use the C# REST SDK as an extension.  A developer can use it to perform basic operations against the platform. For hosted deployment, most of the properties are provided by the platform.

The API provides the following services:

* Alarm - AlarmApi
* AuditRecord - AuditRecordApi
* CepModule - CepApi
* Operation - DeviceControlApi
* Event - EventApi
* ExternalID - IdentityApi
* Binary - BinariesApi
* ManagedObject - InventoryApi
* Measurement - MeasurementApi

For further information, refer to the [Device SDK guide](https://cumulocity.com/guides/device-sdk/).

**C# MQTT SDK**

It is possible to use the C# MQTT SDK as a nuget-package. A developer can use it to perform basic operations against the platform. For further information, refer to [MQTT examples](https://cumulocity.com/guides/device-sdk/mqtt-examples) in the Device SDK guide.

### Building and deploying on Linux

use the wget command to download the script file to build a "Hello World" application.

```shell
$ sudo wget  http://resources.cumulocity.com/cssdk/releases/microservicesdk-lin-dev-latest.zip
```

The "latest" can be replaced by the version number, e.g. microservicesdk-lin-dev-<X.X.X>.zip.

Once you have downloaded the source, unzip the file.

```shell
$ unzip microservicesdk-lin-dev-latest.zip -d  microservicesdk-latest
```

Change the current folder, to navigate to a microservicesdk folder.

```shell
$ cd microservicesdk-latest
```

Run the script *create.sh* to create a sample project, provide the name of the project and the API application.

```shell
$ ./create.sh

Enter the solution name:
<demo>

Enter the name of a web API project:
<api>
```

For a working cake you need the *build.sh* or *build.ps1* file to bootstrap cake and the *build.cake* file. *build.sh* and *build.ps1* are bootstrapper scripts that ensure you have Cake and other required dependencies installed. The bootstrapper scripts are also responsible for invoking Cake. *build.cake* is the actual build script.

*build.cake* contains tasks representing a unit of work in Cake, and you may use them to perform specific work in a specific order:

* Clean
* Build
* DotnetPublish
* SingleDockerImage

Execute the bootstrapper script, to build the application and an image from a Dockerfile.

```shell
$ ./build.sh
```

Launch the Docker container with the command:

```shell
$ docker run -p 8999:4700 <imagename>:latest
```

Check the status of the application that is running inside the Docker container.

```shell
$ curl http://localhost:8999/api/values
```

In order to deploy the application, run the deploy script. You must provide the correct URL and credentials in this script.


#### Microservice package and deploy

Cumulocity provides you with an utility tool for easy microservice packaging, deployment and subscription. The script requires running Docker and can be found here:

```shell
$ wget http://resources.cumulocity.com/examples/microservice
```

Next, add execution permissions

```shell
$ chmod +x microservice
```

To show all options, type

```shell
$ ./microservice help
```

For further information, refer to [Microservice package and deploy](https://cumulocity.com/guides/reference/microservice-package/)in the Reference guide.

**Deployment**

In addition, there is a *deploy.ps1* script that uses credentials stored locally. In order to deploy the application run the deploy script. You must provide the correct URL and credentials in the *settings.ini* file.

To deploy a microservice application on an environment you need the following:

* URL address of the Cumulocity host of your tenant
* username and password to log in with
* application name created on the platform
* ZIP build from previous steps for deployment

The _settings.ini_ file contains:

```properties
[deploy]
username=<tenant>/<user>
password=<password>
url=<tenanturl>
appname=sample_application
```

* Call *deploy.sh*
  - The script looks for a *settings.ini* in the same directory. If found, uses the credentials and tenant URL from that file.
  - If *settings.ini* is not found, an error is shown.

```shell
$ ./deploy.sh
```

* Call the script with the _.ini_ name
  - Loads the credentials and tenant URL from *settings_alternativ.ini*.
  - If *settings_alternative.ini* is not found, an error is shown.

```shell
$ ./deploy.sh -f settings.ini
```

* Merge the given arguments and ini configuration. The parameters from the file are overwritten by explicitly defined parameters.
	* `deploy.sh  -an hello-world -f settings_alternative.ini`

```shell
$ ./deploy.sh -s <URL> -u <username> -p <password> -an hello-world -f settings.ini
```
