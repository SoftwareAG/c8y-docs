---
order: 90
title: Health Check
layout: redirect
---

Health monitoring can allow near-real-time information about the state of your containers and microservices. Health monitoring is critical to multiple aspects of operating microservices and is especially important when orchestrators perform partial application upgrades in phases.

For a service or web application to expose the health check endpoint, it has to enable the **UseHealthChecks([url_for_health_checks])** extension method. This method goes at the WebHostBuilder level in the main method of the Program class of your ASP.NET Core service or web application, right after UseKestrel as shown in the code below.

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

The process works like this: each microservice exposes the endpoint e.g. /health. That endpoint is created by the library ASP.NET Core middleware. When that endpoint is invoked, it runs all the health checks that are configured in the AddHealthChecks method in the Startup class.

The UseHealthChecks method expects a port or a path. That port or path is the endpoint to use to check the health state of the service. For instance, the catalog microservice uses the path /health.

The basic flow is that you register your health checks in your IoC container. You register these Health Checks via a fluent HealthCheckBuilder API in your Startup‘s ConfigureServices method.  This HealthCheckBuilder will build a HealthCheckService and register it as an IHealthCheckService in your IoC container.

#### Built-in Platform Health Checks
The microservice is healthy if the platform is accessible via HTTP from the application. To check it, it is possible to use an action that is built-in.

```
.AddPlatformCheck();
```

After that, you add the health check actions that you want to perform in that microservice. These actions are basically dependencies on other microservices (HttpUrlCheck) or databases (currently SqlCheck* for SQL Server databases). You add the action within the Startup class of each ASP.NET microservice or ASP.NET web application.

#### Custom Health Check

It is also possible to make your own custom Health Check. However, to do that, derive from IHealthCheck and implement the interface.  Below is an example of one that checks to make sure the C drive has at least 1 GB of free space.

```
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
Then in your ConfigureServices method, register the custom Health Check with adequate the lifetime of the service that makes sense for the Health Check and then add it to the AddHealthChecks registration that has been done before.

```
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

An example that combines built-in checking and custom checking
```
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
```
