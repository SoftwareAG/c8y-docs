---
order: 20
title: Building and deploying Hello World on Windows
layout: redirect
---

Building and deploying "Hello World" on Windows is similar to the way it is done for Linux.  For windows powershell is installed by default and that's why we use it.

Download a script file to build a "Hello World" app.

	Invoke-WebRequest  http://resources.cumulocity.com/cssdk/releases/microservicesdk-win-dev-9.1.0.zip -OutFile microservicesdk-win-dev-9.1.0.zip

Once you have downloaded the source, unzip the file.

	Expand-Archive c:\microservicesdk-win-dev-9.1.0.zip -DestinationPath c:\microservicesdk-win-dev-9.1.0.zip

Change the current folder and navigate to a microservicesdk folder.

	cd microservicesdk-win-dev-9.1.0.zip

Run the script create.sh to create a sample project, provide the name of the project and the API application.

	./create.ps1

Execute the bootstrapper script, to build the application and an image from a Docker file.

	./build.ps1

In order to deploy the application run the deploy script. You must provide the correct URL and credentials in this script. Ways to call the script
*  Just call deploy.sh
	* The script looks for a settings.ini in the same directory. If found, uses the credentials and tenant URL from that file
	* If settings.ini is not found, an error is shown
~~~
	./deploy.ps1
~~~
* Calling the script with the .ini name
	* Loads the credentials and tenant URL from settings_alternativ.ini
	* If settings_alternative.ini is not found, an error is shown
~~~
	./deploy.ps1 -f settings.ini
~~~

* Merge the given arguments and ini configuration. Parameters from the file are overwritten by explicitly defined parameters.
	* deploy.ps1  -an hello-world -f settings_alternative.ini
~~~
	./deploy.sh -s {siteurl} -u {username} -p {password}  -an hello-world -f settings.ini
~~~


The ini sample
~~~
[deploy]
username=tenant/user
password=pass
url=someurl
appname=sample_application
~~~

The application starts executing from the entry point public static void Main() in Program class where the host for the application is created. The following shows an example of a program created by create.sh.

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

* initializes a new instance of the WebHostBuilder class with pre-configured defaults,

* specifies Kestrel as the server to be used by the web host,

* configures the LoggerFactory,

* specifies the Startup class with the UseStartup&#60;TStartup&#62; 

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

* setup configuration in the Startup constructor
* setup dependency injection in ConfigureServices
* setup the middleware pipeline in Configure

**Dockerfile** created by create.sh

	FROM microsoft/dotnet:2.0-runtime
	WORKDIR /app
	COPY ./publish/Web ./
	ENV SERVER_PORT 4700
	ENTRYPOINT ["dotnet", "api.dll"]

**Dockerfile** defines what goes on in the environment inside a container:

* sets the working directory

* copy all from an application directory to the working directory

* sets the environment variable, in this case SERVER_PORT

* specifies what executable to run when the container starts
