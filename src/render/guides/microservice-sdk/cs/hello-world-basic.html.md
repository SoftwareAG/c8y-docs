---
order: 20
title: Hello, world!
layout: redirect
---

### Overview

This section provides an example of a C# microservice in Cumulocity. It uses Cake (C# Make), which is a cross-platform build automation system.

To start building .NET apps, you just need to download and install the [.NET SDK](https://www.microsoft.com/net/download). Follow the instructions on the download page for the last stable release or alternatively you can also try using 2.0.

If you use Linux, visit the [MonoDevelop website](http://www.monodevelop.com/) for download packages and more details about our cross-platform IDE. Follow the instructions on the download page for the last stable release or alternatively you can also try using 5.4 or higher version of mono [IDE](http://www.mono-project.com/download/#download-lin). Note, that Mono-devel is required to compile code.

The initial script was used to create a demo, which makes it easier to create an example microservice project with dependency management and then deploy it on the server. The script attempts to download the package from the sources listed in the project file and next a reference is added to the appropriate project file. In addition, the script creates the appropriate Docker file to take into account the naming of projects. Next it will create a Docker image based on a Docker file.

The application created in this way uses the ASP.NET Web API framework to create a web API. The API runs on an isolated web server called Kestrel and as a foreground job, which makes it work really well with Docker.


### Building and deploying Hello World on Windows

Building and deploying "Hello World" on Windows is similar to the way it is done for Linux. For Windows, powershell is installed by default and that's why we use it. For Linux, the Powershell Core can be considered as an alternative.

Download a script file to build a "Hello World" application. Manage the version of scripts and replace latest to the right version number.

```shell
Invoke-WebRequest  http://resources.cumulocity.com/cssdk/releases/microservicesdk-win-dev-latest.zip -OutFile microservicesdk-win-dev-latest.zip
```

The latest can be replaced by the version number e.g. microservicesdk-lin-dev-{X.X.X}.zip.

Once you have downloaded the source, unzip the file.

```shell
Expand-Archive c:\microservicesdk-win-dev-latest.zip -DestinationPath c:\microservicesdk-win-dev-latest
```

Change the current folder and navigate to a microservicesdk folder.

```shell
cd microservicesdk-win-dev-latest
```

Make sure to use the correct SDK version - 2.0.2 or define which .NET Core SDK version is used when you run .NET Core CLI commands.

```shell
dotnet new globaljson --sdk-version 2.0.2
```

Run the script *create.ps1* to create a sample project, provide the name of the project and the API application.

```shell
./create.ps1
```

Execute the bootstrapper script to build the application and an image from a Docker file.

```bash
./build.ps1
```

After a successful build you will be provided with a ZIP file in the target directory. The ZIP can be deployed to the platform as described in the Deployment section.

### <a name="run-locally"></a> Running microservice locally

In order to test the microservice for the calls from the microservice to Cumulocity, you can run the docker container locally.

To verify calls from Cumulocity to the microservice, the microservice must be deployed.

To run a microservice which uses Cumulocity API locally you need the following:

* URL address of the Cumulocity host of your tenant
* Authorization header = "Basic {Base64({username}:{password})}"
* Tenant - tenant ID

There are several ways to install cURL on Windows:

* Install it using Chocolatey.
* Install it with a one-click installer.
* Using official cURL binaries.

Assuming that  Chocolatey is installed:

```bash
choco install curl
```

**Step 1 - Create application**

If the application does not exist, create a new application on a platform:

```http
    POST {URL}/application/applications
```

HEADERS:

```http
    "Authorization": "{AUTHORIZATION}"
    "Content-Type": "application/vnd.com.nsn.cumulocity.application+json"
    "Accept: application/vnd.com.nsn.cumulocity.application+json"
```

BODY:

```http
    {
            "name": "{APPLICATION_NAME}",
            "type": "MICROSERVICE",
            "key": "{APPLICATION_NAME}-microservice-key"
    }
```

Example:

```shell
      curl -X POST -s \
      -d "{"name":"hello-microservice-1","type":"MICROSERVICE","key":"hello-microservice-1-key"}" \
      -H "Authorization: {AUTHORIZATION}" \
      -H "Content-Type: application/vnd.com.nsn.cumulocity.application+json" \
      -H "Accept: application/vnd.com.nsn.cumulocity.application+json" \
      "{URL}/application/applications"
```

Example response:

```json
    {
        "availability": "PRIVATE",
        "id": "{APPLICATION_ID}",
        "key": "{APPLICATION_NAME}-microservice-key",
        "manifest": {
            "imports": [],
            "noAppSwitcher": true
        },
        "name": "{APPLICATION_NAME}",
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

**Step 2 - Acquire microservice bootstrap user**

```http
    GET {URL}/application/applications/{APPLICATION_ID}/bootstrapUser
```

HEADERS:

```http
    "Authorization": {AUTHORIZATION}
    "Content-Type": application/vnd.com.nsn.cumulocity.user+json
```

Example response:

```json
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

After you find the image in the list, run the Ddocker container for the microservice by providing the baseurl and the bootstrap user credentials:

```bash
$ docker run -e C8Y_BASEURL={URL} -e C8Y_BOOTSTRAP_TENANT={BOOTSTRAP_TENANT} -e C8Y_BOOTSTRAP_USER={BOOTSTRAP_USERNAME} -e C8Y_BOOTSTRAP_PASSWORD={BOOTSTRAP_USER_PASSWORD} -e C8Y_MICROSERVICE_ISOLATION=MULTI_TENANT -i -t {DOCKER_REPOSITORY_IMAGE}:{TAG}
```

**Step 4 - Subscribe to microservice**

```http
    POST {URL}/tenant/tenants/{TENANT_ID}/applications
```

  HEADERS:

```http
    "Authorization": "{AUTHORIZATION}"
```

  BODY:

```json
    {"application":{"id": "{APPLICATION_ID}"}}
```

  Example:

```shell
    curl -X POST -d "{"application":{"id": "{APPLICATION_ID}"}}"  \
    -H "Authorization: {AUTHORIZATION}" \
    -H "Content-type: application/json" \
     "{URL}/tenant/tenants/{TENANT_ID}/applications"
```

**Step 5 - Verify if microservice is running**

Now you can verify if your application is running by executing

```shell
curl -H "Authorization: {AUTHORIZATION}" \
  {URL}/service/hello/api/values
```

The expected result is:

```json
["value1","value2"]
```

### Runnning application from inside the IDE

It is possible to check whether the application communicates with the platform by defining relevant environmental variables in *launchSettings.json*. This file sets up the different launch environments that Visual Studio can launch automatically. Here's a snippet of the default *launchSettings.json*.

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
        "C8Y_BASEURL": "<<url>>",
        "C8Y_BASEURL_MQTT": "",
        "C8Y_TENANT": "",
        "C8Y_PASSWORD": "",
        "C8Y_USERNAME": "",
        "C8Y_BOOTSTRAP_TENANT": "<<tenant>>",
        "C8Y_BOOTSTRAP_USERNAME": "<<username>>",
        "C8Y_BOOTSTRAP_PASSWORD": "<<password>>"
      }
    }
  }
}
```

### Microservice package and deploy

Cumulocity provides you with an utility tool for easy microservice packaging, deployment and subscription. The script requires running Docker and can be found in a ZIP file *microservicesdk-win-dev-latest.zip*.

```shell
Invoke-WebRequest  http://resources.cumulocity.com/cssdk/releases/microservicesdk-win-dev-latest.zip -OutFile microservicesdk-win-dev-latest.zip
```

To show all possibilities, type

```shell
PS C:\microservicesdk-win-dev> .\microservice.ps1 --help
```

The response will be:

```shell
[INFO] Read input
Following functions are available. You can specify them in single execution:
        pack - prepares deployable zip file. Requires following structure:
                /docker/Dockerfile
                /docker/* - all files within the directory will be included in the docker build
                /cumulocity.json
        deploy - deploys application to specified address
        subscribe - subscribes tenant to specified microservice application
        help | --help - prints help
Following options are available:
        -dir | --directory              # Working directory. Default value'C:\microservicesdk-win-dev'
        -n   | --name                   # Docker image name
        -t   | --tag                    # Docker tag. Default value 'latest'
        -d   | --deploy                 # Address of the platform the microservice will be uploaded to
        -u   | --user                   # Username used for authentication to the platform
        -p   | --password               # Password used for authentication to the platform
        -te  | --tenant                 # Tenant used
        -a   | --application    # Name upon which the application will be registered on the platform. Default value from --name parameter
        -id  | --applicationId  # Application used for subscription purposes. Required only for solemn subscribe execution
```

For further information refer to [Microservice package and deploy](https://cumulocity.com/guides/reference/microservice-package/) in the Reference guide.

**Deployment**

In addition, there is a *deploy.ps1* script that uses credentials stored locally. In order to deploy the application run the deploy script. You must provide the correct URL and credentials in the *settings.ini* file.
To deploy a microservice application on an environment you need the following:

* URL address of the Cumulocity host of your tenant
* username to log in with
* application name created on the platform
* ZIP build from previous step for deployment

The settings.ini:

```
[deploy]
username=tenant/user
password=pass
url=someurl
appname=sample_application
```

*  Call *deploy.ps1*
*  
	* The script looks for a *settings.ini* in the same directory. If found, it uses the credentials and tenant URL from that file.
	* If *settings.ini* is not found, an error is shown.

```shell
	./deploy.ps1
```

* Call the script with the .ini name
	* Loads the credentials and tenant URL from *settings_alternativ.ini*.
	* If *settings_alternative.ini* is not found, an error is shown.

```shell
	./deploy.ps1 -f settings.ini
```

* Merge the given arguments and ini configuration. Parameters from the file are overwritten by explicitly defined parameters.
* deploy.ps1  -an hello-world -f settings_alternative.ini

```shell
	./deploy.sh -s {siteurl} -u {username} -p {password}  -an hello-world -f settings.ini
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

Method BuildWebHost performs the following tasks:

* initializes a new instance of the WebHostBuilder class with pre-configured defaults

* specifies Kestrel as the server to be used by the web host

* configures the LoggerFactory

* specifies the class with the UseStartup&#60;TStartup&#62; 

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

Startup.cs responsibilities:

* Setup configuration in the Startup constructor
* Setup dependency injection in ConfigureServices
* Setup the middleware pipeline in Configure

**Dockerfile** created by *create.ps1*:

```
	FROM microsoft/dotnet:2.0-runtime
	WORKDIR /app
	COPY ./publish/Web ./
	ENV SERVER_PORT 4700
	ENTRYPOINT ["dotnet", "api.dll"]
```

**Dockerfile** defines what goes on in the environment inside a container:

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

It is possible to use the C# MQTT SDK as a nuget-package.  A developer can use it to perform basic operations against the platform. For further information, refer to [MQTT examples](https://cumulocity.com/guides/device-sdk/mqtt-examples) in the Device SDK guide.

### Building and deploying Hello World on Linux

Download a script file to build a "Hello World" application. Wget utility is the best option to download a file.

```shell
	sudo wget  http://resources.cumulocity.com/cssdk/releases/microservicesdk-lin-dev-latest.zip
```

The latest can be replaced by the version number e.g. microservicesdk-lin-dev-{X.X.X}.zip.

Once you have downloaded the source, unzip the file.

```shell
	unzip microservicesdk-lin-dev-latest.zip -d  microservicesdk-latest
```

Change the current folder, to navigate to a microservicesdk folder.

```shell
	cd microservicesdk-latest
```

Run the script *create.sh* to create a sample project, provide the name of the project and the API application.

```shell
	./create.sh

	Enter the solution name:
	<<demo>>

	Enter the name of a web API project:
	<<api>>
```

For a working cake you need the *build.sh* or *build.ps1* file to bootstrap cake and the *build.cake* file. *build.sh* and *build.ps1* are bootstrapper scripts that ensure you have Cake and other required dependencies installed. The bootstrapper scripts are also responsible for invoking Cake. *build.cake* is the actual build script.

*build.cake* contains tasks representing a unit of work in Cake, and you may use them to perform specific work in a specific order:

* Clean

* Build

* DotnetPublish

* SingleDockerImage

Execute the bootstrapper script, to build the application and an image from a Docker file.

```shell
	./build.sh
```

Launch the Docker container with the command

```shell
	docker run -p 8999:4700 imagename:latest
```

Check the status of an application that is running inside the Docker container.

```shell
	curl http://localhost:8999/api/values
```

In order to deploy the application run the deploy script. You must provide the correct URL and credentials in this script.


#### Microservice package and deploy

Cumulocity provides you with an utility tool for easy microservice packaging, deployment and subscription. The script requires running Docker and can be found here:

```shell
wget http://resources.cumulocity.com/examples/microservice
```

Next, run

```shell
chmod +x microservice
```

To show all options, type

```shell
/microservice help
```

For further information, refer to [Microservice package and deploy](https://cumulocity.com/guides/reference/microservice-package/)in the Reference guide.

**Deployment**

In addition, there is a *deploy.ps1* script that uses credentials stored locally. In order to deploy the application run the deploy script. You must provide the correct URL and credentials in the *settings.ini* file.

To deploy a microservice application on an environment you need the following:

* URL address of the Cumulocity host of your tenant
* username to log in with
* application name created on the platform
* ZIP build from previous step for deployment

The settings.ini:

```
[deploy]
username=tenant/user
password=pass
url=someurl
appname=sample_application
```

*  Call *deploy.sh*
	* The script looks for a *settings.ini* in the same directory. If found, uses the credentials and tenant URL from that file.
	* If *settings.ini* is not found, an error is shown.

```shell
	./deploy.sh
```

* Call the script with the .ini name
	* Loads the credentials and tenant URL from *settings_alternativ.ini*.
	* If *settings_alternative.ini* is not found, an error is shown.

```shell
	./deploy.sh -f settings.ini
```

* Merge the given arguments and ini configuration. Parameters from the file are overwritten by explicitly defined parameters.
	* deploy.sh  -an hello-world -f settings_alternative.ini

```shell
	./deploy.sh -s {siteurl} -u {username} -p {password}  -an hello-world -f settings.ini
```

