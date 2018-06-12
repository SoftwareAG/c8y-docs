---
order: 80
title: Program class
layout: redirect
---

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