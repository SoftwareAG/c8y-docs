---
order: 80
title: Program class
layout: redirect
---

In ASP.NET Core 2.0, the Program class is used to setup the IWebHost. This is the entry point to our application. The main method creates a host, builds and then runs it. The host then listens for HTTP requests.

### There are multiple ways to configure the application:

#### Simplified configuration

By using the extension to IWebHost - **UseMicroserviceApplication** the configuration with Startup can be simplified.
UseMicroserviceApplication has an optional parameter by default "true". This parameter indicates whether to create a healthpoint.

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


The minimum form of the Startup class may look like the code below

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

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
	        app.UseMvcWithDefaultRoute();
		}
    }

#### Advanced configuration:
In this case, the entire configuration must be carried out manually

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
                else{
                    options.Listen(IPAddress.Parse("0.0.0.0"), 1);
                }
            })
            .Build();
        }

The Startup class may look like the code below:

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
			services.AddMvc().AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
			//services.Replace(ServiceDescriptor.Singleton(typeof(ILogger<>), typeof(TimedLogger<>)));
		}
		public virtual void ConfigureServicesLayer(IServiceCollection services)
		{
			services.AddCumulocityAuthentication(Configuration);
			services.AddSingleton<IApplicationService, ApplicationService>();
		}

		public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
		{
			app.UseAuthentication();
			app.UseBasicAuthentication();
			app.UseMvcWithDefaultRoute();
		}
	}