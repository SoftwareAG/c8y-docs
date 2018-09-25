---
order: 30
title: Platform
layout: redirect
---

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

