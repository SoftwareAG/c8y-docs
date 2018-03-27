---
order: 20
layout: default
title: Developing Microservices
---

## Overview

The SDK is based on ASP.NET Core, a cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. ASP.NET Core apps use a Startup class, which is named Startup by convention. The Startup class

* must include a Configure method to create the app's request processing pipeline.
* can optionally include a ConfigureServices method to configure the app's services.

This document describes microservice SDK features, services, configuration files, logging and Cake (C# Make).

There are two possible deployment types on the platform:

* Hosted deployment - the default for microservices. For typical use cases the hosted deployment is the suggested one.
* External/legacy deployment - requires custom installation of the platform and agent.

For development and testing purposes one can deploy a microservice on a local docker. The process is described in this document.


## Microservice security

The Configure method is used to specify how the app responds to HTTP requests. The request pipeline is configured by adding middleware components to an IApplicationBuilder instance.

The UseAuthentication method adds a single authentication middleware component which is responsible for automatic authentication and the handling of remote authentication requests. It replaces all of the individual middleware components with a single, common middleware component. Since ASP.NET Security does not include Basic Authentication middleware we must add custom Basic Authentication middleware.


	public void Configure(IApplicationBuilder app, IHostingEnvironment env)
	{
		app.UseAuthentication();
		app.UseBasicAuthentication();
	}

Next, each authentication scheme is registered in the ConfigureServices method of Startup.cs. 

	public void ConfigureServices(IServiceCollection services)
	{
		services.AddCumulocityAuthentication(Configuration);
	}

## Platform

The root interface for connecting to Cumulocity from C# is called "Platform". It provides access to all other interfaces of the platform, such as the inventory. In its simplest form, it is instantiated as follows.

To enable service providers to run microservices together with the platform, it is required to execute the registration procedure. During this process each microservice receives a dedicated bootstrap user to ensure that the microservice can be identified by the platform and can only access allowed resources.

The platform is registered with the dependency injection container. Services that are registered with the dependency injection (DI) container are available to the controllers.

	public void ConfigureServices(IServiceCollection services)
	{
		// ...
		 services.AddPlatform(Configuration);
	}

where Configuration represents a set of key/value application configuration properties.

	public IConfiguration Configuration { get; }

	public Startup(IConfiguration configuration)
	{
		Configuration = configuration;
	}

This way microservices should receive very basic configuration. Besides properties related to isolation level, microservices will receive the following variables:

* C8Y_BASEURL - URL which points to the core platform
* C8Y_BASEURL_MQTT - URL which points to the core platform with MQTT protocol
* SERVER_PORT - Port on which the microservice should run
* C8Y_MICROSERVICE_ISOLATION - Isolation level
* C8Y_TENANT - In PER_TENANT - Isolation level credentials for the tenant
* C8Y_USERNAME - In PER_TENANT - Isolation level credentials for the tenant
* C8Y_PASSWORD - In PER_TENANT - Isolation level credentials for the tenant
* C8Y_BOOTSTRAP_TENANT - Bootstrap user to get platform subscriptions
* C8Y_BOOTSTRAP_USERNAME - Bootstrap user to get platform subscriptions
* C8Y_BOOTSTRAP_PASSWORD - Bootstrap user to get platform subscriptions

## Role-based authorization

Once a user has been authenticated, the next step is to check if the user is authorized to do what they're trying to do.

	[Authorize]
	public IActionResult Index()
	{
	  return View();
	}

The authorize attribute is used to protect an action in a controller from being called. If no conditions have been specified, any user who is authenticated is able to perform the action.

To be more specific and allow only members of a certain role (in this case the "ROLE_APPLICATION_MANAGEMENT_READ" role) to perform actions in a controller, add the role as a requirement to the attribute like this:

    [Authorize(Roles = "ROLE_APPLICATION_MANAGEMENT_READ")]
    public class HomeController : Controller
    {

        public HomeController(Platform platform)
        {

        }
	}


## Accessing HTTPContext in ASP.net Core

In earlier versions of .Net Core, IHttpContextAccessor was automatically registered. This was removed. You need to register it manually if you intend to use it inside services. IHttpContextAccessor is only intended for accessing the HttpContext in locations where it's not directly available.

    public void ConfigureServices(IServiceCollection services)
    {
        // ...
         services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
    }

## Building a scheduled task

In order to add a new scheduled task, add it as shown in the example below. All scheduled tasks should look similar to

    public class SomeTask : IScheduledTask
    {
        public string Schedule => "0 1/6 * * *";

        public async Task ExecuteAsync(CancellationToken cancellationToken)
        {
            //...
        }
    }

where the Schedule property is a cron expression and ExecuteAsync() method is the work to execute asynchronously.

Then you can easily register scheduled tasks

    public void ConfigureServices(IServiceCollection services)
    {
        // ...
        // Add scheduled tasks
        services.AddSingleton<IScheduledTask, SomeTask>();
    }

## Microservice subscription

This SDK has a task CurrentApplicationSubscriptionsTask, which only fetches a list of all subscriptions. The CurrentApplicationSubscriptionsTask is the IScheduledTask implementation which runs every hour:

            services.AddSingleton<IScheduledTask, CurrentApplicationSubscriptionsTask>();

            services.AddScheduler((sender, args) =>
            {
                Debug.Write(args.Exception.Message);
                args.SetObserved();
            });

It should get all subscriptions and make it available for any other part of my application to work with.

As you can see, the AddScheduler takes a delegate that handles unobserved exceptions. In our scheduler code, TaskFactory.StartNew() is used to run the task’s code. If there is an unhandled exception, you won’t see this exception. 

Therefore you may want to so some logging. This is normally done by setting TaskScheduler.UnobservedTaskException, that is global for this case so added our own to specifically catch scheduled tasks unhandled exceptions.

The SDK allows you to subscribe to the event application subscriptions changed.

Start by getting the singleton instance of the hub:

    var hub = MessageHub.Instance;

You can now use the hub to subscribe to any publication of a given type, in our case OnChangedSubscription.

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


## Program class

In ASP.NET Core 2.0, the Program class is used to setup the IWebHost. This is the entry point to our application. The main method creates a host, builds and then runs it. The host then listens for HTTP requests.


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