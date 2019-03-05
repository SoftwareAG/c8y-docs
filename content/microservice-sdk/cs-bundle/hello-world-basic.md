---
weight: 20
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

Building and deploying "Hello World" on Windows is similar to the way it is done for Linux. For Windows, powershell is installed by default and that's why we use it.

Download a script file to build a "Hello World" application. Manage the version of scripts and replace X.X.X to the right version number.

	Invoke-WebRequest  http://resources.cumulocity.com/cssdk/releases/microservicesdk-win-dev-latest.zip -OutFile microservicesdk-win-dev-X.X.X.zip

The latest can be replaced by the version number e.g. microservicesdk-lin-dev-{X.X.X}.zip.

Once you have downloaded the source, unzip the file.

	Expand-Archive c:\microservicesdk-win-dev-X.X.X.zip -DestinationPath c:\microservicesdk-win-dev-X.X.X

Change the current folder and navigate to a microservicesdk folder.

	cd microservicesdk-win-dev-X.X.X

Run the script "create.ps1" to create a sample project, provide the name of the project and the API application.

	./create.ps1

Execute the bootstrapper script to build the application and an image from a Docker file.

	./build.ps1

In order to deploy the application run the deploy script. You must provide the correct URL and credentials in this script.

**How to call the script**

*  Call "deploy.ps1"
	* The script looks for a settings.ini in the same directory. If found, it uses the credentials and tenant URL from that file.
	* If settings.ini is not found, an error is shown.
	
~~~
	./deploy.ps1
~~~
* Call the script with the .ini name
	* Loads the credentials and tenant URL from settings_alternativ.ini.
	* If settings_alternative.ini is not found, an error is shown.
	
~~~
	./deploy.ps1 -f settings.ini
~~~

* Merge the given arguments and ini configuration. Parameters from the file are overwritten by explicitly defined parameters.
	* deploy.ps1  -an hello-world -f settings_alternative.ini

~~~
	./deploy.sh -s {siteurl} -u {username} -p {password}  -an hello-world -f settings.ini
~~~

The ini sample:

~~~
[deploy]
username=tenant/user
password=pass
url=someurl
appname=sample_application
~~~

The application starts executing from the entry point `public static void Main()` in Program class where the host for the application is created. The following shows an example of a program created by "create.sh".

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

Method BuildWebHost performs the following tasks:

* Initializes a new instance of the WebHostBuilder class with pre-configured defaults

* Specifies Kestrel as the server to be used by the web host

* Configures the LoggerFactory

* Specifies the Startup class with the UseStartup&#60;TStartup&#62; 

An example application must include Startup class. As the name suggests, it is executed first when the application starts.

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

Startup.cs responsibilities:

* Setup configuration in the Startup constructor
* Setup dependency injection in ConfigureServices
* Setup the middleware pipeline in Configure

**Dockerfile** created by "create.ps1":

	FROM microsoft/dotnet:2.0-runtime
	WORKDIR /app
	COPY ./publish/Web ./
	ENV SERVER_PORT 4700
	ENTRYPOINT ["dotnet", "api.dll"]

**Dockerfile** defines what goes on in the environment inside a container:

* Sets the working directory

* Copies all from an application directory to the working directory

* Sets the environment variable, in this case SERVER_PORT

* Specifies what executable to run when the container starts


### Building and deploying Hello World on Linux

Download a script file to build a "Hello World" app. Wget utility is the best option to download a file.

	sudo wget  http://resources.cumulocity.com/cssdk/releases/microservicesdk-lin-dev-latest.zip

The latest can be replaced by the version number e.g. microservicesdk-lin-dev-{X.X.X}.zip.

Once you have downloaded the source, unzip the file.

	unzip microservicesdk-lin-dev-latest.zip -d  microservicesdk-latest

Change the current folder, to navigate to a microservicesdk folder.

	cd microservicesdk-latest

Run the script "create.sh" to create a sample project, provide the name of the project and the API application.

	./create.sh

	Enter the solution name:

	<<demo>>

	Enter the name of a web API project:

	<<api>>

For a working cake you need the "build.sh" or "build.ps1" file to bootstrap cake and the "build.cake" file. "build.sh" and "build.ps1" are bootstrapper scripts that ensure you have Cake and other required dependencies installed. The bootstrapper scripts are also responsible for invoking Cake. "Build.cake" is the actual build script.

"build.cake" contains tasks representing a unit of work in Cake, and you may use them to perform specific work in a specific weight:

* Clean

* Build

* DotnetPublish

* SingleDockerImage

Execute the bootstrapper script, to build the application and an image from a Docker file.

	./build.sh

Launch the Docker container with the command

	docker run -p 8999:4700 imagename:latest

Check the status of an application that is running inside the Docker container.

	curl http://localhost:8999/api/values

In order to deploy the application run the deploy script. You must provide the correct URL and credentials in this script.

**How to call the script**

*  Call "deploy.sh"
	* The script looks for a settings.ini in the same directory. If found, uses the credentials and tenant URL from that file.
	* If settings.ini is not found, an error is shown.
	
~~~
	./deploy.sh
~~~

* Call the script with the .ini name
	* Loads the credentials and tenant URL from settings_alternativ.ini.
	* If settings_alternative.ini is not found, an error is shown.
	
~~~
	./deploy.sh -f settings.ini
~~~

* Merge the given arguments and ini configuration. Parameters from the file are overwritten by explicitly defined parameters.
	* deploy.sh  -an hello-world -f settings_alternative.ini
	
~~~
	./deploy.sh -s {siteurl} -u {username} -p {password}  -an hello-world -f settings.ini
~~~

The ini sample:

~~~
[deploy]
username=tenant/user
password=pass
url=someurl
appname=sample_application
~~~

