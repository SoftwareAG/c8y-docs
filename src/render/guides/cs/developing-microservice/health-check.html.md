---
order: 90
title: Health Check
layout: redirect
---

Health monitoring can allow near-real-time information about the state of your containers and microservices. Health monitoring is critical to multiple aspects of operating microservices and is especially important when orchestrators perform partial application upgrades in phases.

For a service or web application to expose the health check endpoint, it has to enable the UseHealthChecks([url_for_health_checks]) extension method. This method goes at the WebHostBuilder level in the main method of the Program class of your ASP.NET Core service or web application, right after UseKestrel as shown in the code below.

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

The process works like this: each microservice exposes the endpoint /health. That endpoint is created by the library ASP.NET Core middleware. When that endpoint is invoked, it runs all the health checks that are configured in the AddHealthChecks method in the Startup class.

The UseHealthChecks method expects a port or a path. That port or path is the endpoint to use to check the health state of the service. For instance, the catalog microservice uses the path /health.

The microservice is healthy if the platform is accessible via HTTP from  the application. To check it, it is possible to use an action that is built-in.

``
.AddPlatformCheck();
``

After that, you add the health check actions that you want to perform in that microservice. These actions are basically dependencies on other microservices (HttpUrlCheck) or databases (currently SqlCheck* for SQL Server databases). You add the action within the Startup class of each ASP.NET microservice or ASP.NET web application.

``

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

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            ...
            app.UseMvcWithDefaultRoute();
        }
    }

