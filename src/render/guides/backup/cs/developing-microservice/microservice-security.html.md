---
order: 20
title: Microservice security
layout: redirect
---

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


---