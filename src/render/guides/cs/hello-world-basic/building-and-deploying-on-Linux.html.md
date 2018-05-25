---
order: 20
title: Building and deploying Hello World on Linux
layout: redirect
---

Download a script file to build a "Hello World" app. Wget utility is the best option to download a file.

	sudo wget  http://resources.cumulocity.com/cssdk/releases/microservicesdk-lin-dev-9.1.0.zip

The latest can be replaced by the version number e.g. microservicesdk-{X.X.X}.tar.gz

Once you have downloaded the source, untar the file.

	unzip microservicesdk-lin-dev-9.1.0.zip -d  microservicesdk-9.1.0

Change the current folder, to navigate to a microservicesdk folder.

	cd microservicesdk-9.1.0

Run the script **create.sh** to create a sample project, provide the name of the project and the API application.

	./create.sh

	Enter the solution name:

	<<demo>>

	Enter the name of a web API project:

	<<api>>

For a working cake you need the build.sh or build.ps1 file to bootstrap cake and the build.cake file. Build.sh and build.ps1 are bootstrapper scripts that ensure you have Cake and other required dependencies installed. The bootstrapper scripts are also responsible for invoking Cake. Build.cake is the actual build script. 

Build.cake contains tasks represent a unit of work in Cake, and you may use them to perform specific work in a specific order:

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

In order to deploy the application run the script. You must provide the correct URL and credentials in this script.

	./deploy.sh -t {tenant} -u {username} -p {password}  -an hello-world -f settings.ini
    
Ways to call the script
*  Just call deploy.sh
	* The script looks for a settings.ini in the same directory. If found, uses the credentials and tenant URL from that file
	* If settings.ini is not found, an error is shown
* Calling deploy.sh -f settings_alternative.ini
	* Loads the credentials and tenant URL from settings_alternativ.ini
	* If settings_alternative.ini is not found, an error is shown
* Merge the given arguments and ini configuration.
	* deploy.sh  -an hello-world -f settings_alternative.ini

The ini sample
~~~
[deploy]
username=tenant/user
password=pass
tenant=url
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


