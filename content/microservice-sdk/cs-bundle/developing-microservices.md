---
weight: 30
title: Developing microservices
layout: redirect
---

The SDK is based on ASP.NET Core, a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. ASP.NET Core apps use a Startup class, which is named Startup by convention. The Startup class must include a `Configure` method to create the app's request processing pipeline, and can optionally include a `ConfigureServices` method to configure the app's services.

There are two possible deployment types on the platform:

* Hosted deployment - The default for microservices and it is the suggested one for typical use cases.
* External/legacy deployment - Requires custom installation of the platform and agent.

For development and testing purposes, you can deploy a microservice on a local Docker container. The process is described below.

### Microservice security {#microservice-security}

The `Configure` method is used to specify how the application responds to HTTP requests. The request pipeline is configured by adding middleware components to an `IApplicationBuilder` instance.

The `UseAuthentication` method adds a single authentication middleware component which is responsible for automatic authentication and the handling of remote authentication requests. It replaces all of the individual middleware components with a single, common middleware component. Since ASP.NET Security does not include Basic Authentication middleware, we must add custom Basic Authentication middleware.

```cs
public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
	app.UseAuthentication();
	app.UseBasicAuthentication();
}
```

Next, each authentication scheme is registered in the ConfigureServices method of _Startup.cs_.

```cs
public void ConfigureServices(IServiceCollection services)
{
	services.AddCumulocityAuthentication(Configuration);
}
```

### Platform {#platform}

The root interface for connecting to {{< product-c8y-iot >}} from C# is called `Platform`. It provides access to all other interfaces of the platform, such as the inventory. In its simplest form, it is instantiated as follows.

To enable service providers to run microservices together with the platform, it is required to execute the registration procedure. During this process each microservice receives a dedicated bootstrap user to ensure that the microservice can be identified by the platform and can only access allowed resources.

The platform is registered with the dependency injection container. Services that are registered with the dependency injection (DI) container are available to the controllers.

```cs
public void ConfigureServices(IServiceCollection services)
{
	// ...
	 services.AddPlatform(Configuration);
}
```

The `Configuration` object represents a set of key/value application configuration properties.

```cs
public IConfiguration Configuration { get; }

public Startup(IConfiguration configuration)
{
	Configuration = configuration;
}
```

In this way microservices receive very basic configuration. Besides the properties related to the isolation level, the microservices will receive the following variables:

Variable      | Description
--------------|----------------------
C8Y_BASEURL | URL which points to the core platform
C8Y_BASEURL_MQTT | URL which points to the core platform with MQTT protocol
SERVER_PORT | Port on which the microservice runs
C8Y_MICROSERVICE_ISOLATION | Isolation level
C8Y_TENANT | Application user tenant (available only for PER_TENANT isolation)
C8Y_USER | Application username (available only for PER_TENANT isolation)
C8Y_PASSWORD | Application user password (available only for PER_TENANT isolation)
C8Y_BOOTSTRAP_TENANT | Bootstrap user to get platform subscriptions
C8Y_BOOTSTRAP_USERNAME | Bootstrap user to get platform subscriptions
C8Y_BOOTSTRAP_PASSWORD | Bootstrap user to get platform subscriptions

### Role-based authorization {#rolebased-authorization}

Once a user has been authenticated, the next step is to check if the user is authorized to do what they are trying to do.

```cs
[Authorize]
public IActionResult Index()
{
  return View();
}
```

The authorize attribute is used to protect an action in a controller from being called. If no conditions have been specified, any user who is authenticated is able to perform the action.

To be more specific and allow only members of a certain role (in this case the ROLE_APPLICATION_MANAGEMENT_READ role) to perform actions in a controller, add the role as a requirement to the attribute like this:

```cs
[Authorize(Roles = "ROLE_APPLICATION_MANAGEMENT_READ")]
public class HomeController : Controller
{
    public HomeController(Platform platform)
    {

    }
}
```

### Accessing HTTPContext in ASP.net Core {#accessing-httpcontext-in-aspnet-core}

In earlier versions of .Net Core, `IHttpContextAccessor` was automatically registered. This was removed. You must register it manually if you intend to use it inside services. `IHttpContextAccessor` is only intended for accessing the `HttpContext` in locations where it is not directly available.

```cs
public void ConfigureServices(IServiceCollection services)
{
    // ...
     services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
}
```

### Building a scheduled task {#building-a-scheduled-task}

In order to add a new scheduled task, add it as shown in the example below. All scheduled tasks should look similar to:

```cs
public class SomeTask : IScheduledTask
{
    public string Schedule => "0 1/6 * * *";

    public async Task ExecuteAsync(CancellationToken cancellationToken)
    {
        //...
    }
}
```

where the Schedule property is a cron expression and the `ExecuteAsync()` method is the work to execute asynchronously.

Then you can easily register scheduled tasks:

```cs
public void ConfigureServices(IServiceCollection services)
{
    // ...
    // Add scheduled tasks
    services.AddSingleton<IScheduledTask, SomeTask>();
}
```


### Microservice subscription {#microservice-subscription}

The following section refers to the user management as described under [General aspects](/microservice-sdk/concept) of microservices in {{< product-c8y-iot >}}.

This SDK has a task `CurrentApplicationSubscriptionsTask` which only fetches a list of all subscriptions. The `CurrentApplicationSubscriptionsTask` is the `IScheduledTask` implementation which runs every hour:

```cs
services.AddSingleton<IScheduledTask, CurrentApplicationSubscriptionsTask>();

services.AddScheduler((sender, args) =>
{
    Debug.Write(args.Exception.Message);
    args.SetObserved();
});
```

It should get all subscriptions and make it available for any other part of your application to work with.

As you can see, the `AddScheduler` takes a delegate that handles unobserved exceptions. In our scheduler code, `TaskFactory.StartNew()` is used to run the task's code. If there is an unhandled exception, you won't see this exception. Therefore, you may want to do some logging. This is normally done by setting `TaskScheduler.UnobservedTaskException`, that is global for this case so added our own to specifically catch scheduled tasks unhandled exceptions.

The SDK allows you to subscribe to the event application subscriptions changed.

Start by getting the singleton instance of the hub:

```cs
var hub = MessageHub.Instance;
```

You can now use the hub to subscribe to any publication of a given type, in our case `OnChangedSubscription`.

```cs
public class HomeController : Controller
{
    private readonly MessageHub _hub;
    private readonly Guid _subscriptionToken;

    public HomeController(Platform platform,MessageHub hub)
    {
        _hub = hub;
        _subscriptionToken =   _hub.Subscribe<List<ChangedSubscription>>(OnChangedSubscription);
    }

    private void OnChangedSubscription(List<ChangedSubscription> obj)
    {

    }
}
```

### Program class {#program-class}

In ASP.NET Core 3.1, the Program class is used to setup the `IWebHost`. This is the entry point to our application. The main method creates a host, builds and then runs it. The host then listens for HTTP requests.

There are multiple ways to configure the application.

#### Simplified configuration {#simplified-configuration}

By using the extension to `IWebHost` - `UseMicroserviceApplication` the configuration with `Startup` can be simplified.

`UseMicroserviceApplication` has an optional parameter by default `true`. This parameter indicates whether to create a health point.

```cs
public class Program
{
	public static void Main(string[] args)
	{
		BuildWebHost(args).Run();
	}

	public static IWebHost BuildWebHost(string[] args) =>
		WebHost.CreateDefaultBuilder(args)
			.UseKestrel(options =>
			{
				var port = Environment.GetEnvironmentVariable("SERVER_PORT");
				options.Listen(IPAddress.Parse("0.0.0.0"), Int32.TryParse(port, out var portNumber) ? portNumber : 8080);
			})
			.ConfigureLogging((hostingContext, logging) =>
			{
				logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
				logging.AddConsole().SetMinimumLevel(LogLevel.Information);
			})
			.UseMicroserviceApplication()
			.UseStartup<Startup>()
			.Build();
}
```

The minimum form of the `Startup` class may look like as follows:

```cs
public class Startup
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddMvc();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      app.UseMvcWithDefaultRoute();
		}
}
```

#### Advanced configuration {#advanced-configuration}

In this case, the entire configuration must be carried out manually:

```cs
public class Program
{
	public static void Main(string[] args)
	{
	    BuildWebHost(args).Run();
	}

	public static IWebHost BuildWebHost(string[] args) =>

	    WebHost.CreateDefaultBuilder(args)
	    .UseKestrel()
	    .ConfigureLogging((hostingContext, logging) =>
	    {
	        logging.SetMinimumLevel(LogLevel.Warning);
	        logging.AddConsole();
	        logging.AddDebug();
	    })
	    .UseStartup<Startup>()
	    .UseKestrel(options =>
	    {
	        var env = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
	        var port = Environment.GetEnvironmentVariable("SERVER_PORT");
	        int portNumber = 8080;

	        if (Int32.TryParse(port, out portNumber)){
	            options.Listen(IPAddress.Parse("0.0.0.0"), portNumber);
	        }
	        else {
	            options.Listen(IPAddress.Parse("0.0.0.0"), 1);
	        }
	    })
	    .Build();
}
```

The Startup class may look like the following code:

```cs
public class Startup
{
	ILogger _logger;

	public Startup(IConfiguration configuration, ILoggerFactory loggerFactory)
	{
		Configuration = configuration;
		_logger = loggerFactory.CreateLogger<Startup>();
	}

	public IConfiguration Configuration { get; }

	public void ConfigureServices(IServiceCollection services)
	{
		_logger.LogDebug($"Total Services Initially: {services.Count}");

		services.AddMemoryCache();
		services.AddPlatform(Configuration);
		ConfigureServicesLayer(services);
		services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

		// Add scheduled tasks & scheduler
		services.AddSingleton<IScheduledTask, TimerTask>();
		services.AddScheduler((sender, args) =>
		{
			Debug.Write(args.Exception.Message);
			args.SetObserved();
		});

		//MVC
		services.AddControllers(options => options.EnableEndpointRouting = false);
		//services.Replace(ServiceDescriptor.Singleton(typeof(ILogger<>), typeof(TimedLogger<>)));
	}
	public virtual void ConfigureServicesLayer(IServiceCollection services)
	{
		services.AddCumulocityAuthentication(Configuration);
		services.AddSingleton<IApplicationService, ApplicationService>();
	}

	public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
	{
		app.UseAuthentication();
		app.UseBasicAuthentication();
		app.UseMvcWithDefaultRoute();
	}
}
```

### Health check {#health-check}

Health monitoring can allow near-real-time information about the state of your containers and microservices. Health monitoring is critical to multiple aspects of operating microservices and is especially important when orchestrators perform partial application upgrades in phases.

For a service or web application to expose the health check endpoint, it must enable the `UseHealthChecks([url_for_health_checks])` extension method. This method goes at the `WebHostBuilder` level in the main method of the `Program` class of your ASP.NET Core service or web application, right after `UseKestrel` as shown in the code below.

```cs
public class Program
{
    public static void Main(string[] args)
    {
        BuildWebHost(args).Run();
    }

    public static IWebHost BuildWebHost(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
            .ConfigureLogging((hostingContext, logging) =>{})
            .UseStartup<Startup>()
            .UseKestrel(options =>{})
            .UseHealthChecks("/health")
            .Build();
}
```

Each microservice exposes the endpoint <kbd>/health</kbd>. This endpoint is created by the library ASP.NET Core middleware. When this endpoint is invoked, it runs all the health checks that are configured in the `AddHealthChecks` method in the `Startup` class.

The `UseHealthChecks` method expects a port or a path. That port or path is the endpoint to use to check the health state of the service. For instance, the catalog microservice uses the path <kbd>/health</kbd>.

The basic flow is that you register your health checks in your IoC container. You register these health checks via a fluent HealthCheckBuilder API in your Startup's `ConfigureServices` method. This HealthCheckBuilder will build a `HealthCheckService` and register it as an `IHealthCheckService` in your IoC container.

#### Built-in platform health checks {#builtin-platform-health-checks}

The microservice is healthy if the platform is accessible via HTTP from the application. To check it, it is possible to use an action that is built-in.

```cs
.AddPlatformCheck();
```

After that, you add the health check actions that you want to perform in that microservice. These actions are basically dependencies on other microservices (HttpUrlCheck) or databases (currently SqlCheck* for SQL Server databases). You add the action within the Startup class of each ASP.NET microservice or ASP.NET web application.

#### Custom health check {#custom-health-check}

It is also possible to make your own custom health check. However, to do that, derive from IHealthCheck and implement the interface. Below is an example of one that checks to make sure the C drive has at least 1 GB of free space.

```cs
public class CheckCDriveHasMoreThan1GbFreeHealthCheck : IHealthCheck
{
    public ValueTask<IHealthCheckResult> CheckAsync(CancellationToken cancellationToken = default(CancellationToken))
    {
        long freeSpaceInGb = GetTotalFreeSpaceInGb(@"C:\");
        CheckStatus status = freeSpaceInGb > 1 ? CheckStatus.Healthy : CheckStatus.Unhealthy;

        return new ValueTask<IHealthCheckResult>(HealthCheckResult.FromStatus(status, $"Free Space [GB]: {freeSpaceinGb}"));

    }

    private long GetTotalFreeSpaceInGb(string driveName)
    {
        foreach (DriveInfo drive in DriveInfo.GetDrives())
        {
            if (drive.IsReady && drive.Name == driveName)
            {
                return drive.TotalFreeSpace / 1024 / 1024 / 1024;
            }
        }
        throw new ArgumentException($"Invalid Drive Name {driveName}");
    }
}
```

Then in your `ConfigureServices` method, register the custom health check with adequate the lifetime of the service that makes sense for the health check and then add it to the `AddHealthChecks` registration that has been done before.

```cs
public void ConfigureServices(IServiceCollection services)
{
    services.AddSingleton<CDriveHasMoreThan1GbFreeHealthCheck>();

    services.AddHealthChecks(checks =>
    {
        checks.AddCheck<CheckCDriveHasMoreThan1GbFreeHealthCheck>("C Drive has more than 1 GB Free");
    });

    services.AddMvc();
}
```

The following example combines built-in checking and custom checking:

```cs
public class Startup
{
    ILogger _logger;
    public Startup(IConfiguration configuration, ILoggerFactory loggerFactory)
    {
        Configuration = configuration;
        ...
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        ...
        // Add framework services
        services.AddHealthChecks(checks =>
        {
            checks.AddPlatformCheck();
            checks.AddCheck("long-running", async cancellationToken =>
            {
                await Task.Delay(1000, cancellationToken);
                return HealthCheckResult.Healthy("I ran too long");
            });
        });

        ...
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
    {
        ...
        app.UseMvcWithDefaultRoute();
    }
}
```

### Cake {#cake}

Cake is a cross platform build automation system, and it is built on top of Roslyn and the Mono Compiler which uses C# as the scripting language to do things like compiling code, copy files/folders, running unit tests, compress files and build NuGet packages.

The Cake script called _build.cake_ has has the predefined tasks. These tasks represent a unit of work in Cake, and you use them to perform specific work in a specific order.

*	Clean - Cleans the specified directory, deletes files.
*	Build – Restores the dependencies and tools of projects and the task builds all projects, but before that it does the cleaning task.
*	Publish – The task compiles the application, reads through its dependencies specified in the project file, and publishes the resulting set of files to a directory. The result will be placed in the output folder
*	Docker-Build - Will save an image and an application manifest to _images/multi/image.zip_. Inside the root folder of your application, the so-called "application manifest" is stored in a file named _cumulocity.json_. The ZIP archive contains _image.tar_ and _cumulocity.json_.
*	Single-DockerImage - Will save an image and an application manifest  to _images/single/image.zip_. Inside the root folder of your application, the so-called "application manifest" is stored in a file named _cumulocity.json_. The ZIP archive contains _image.tar_ and _cumulocity.json_.
*	Docker-Run - Creates a new container using default settings.
