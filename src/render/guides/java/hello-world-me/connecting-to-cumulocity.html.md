---
order: 40
layout: redirect
title: Connecting to Cumulocity
---

Connections to Cumulocity can be created through implementations of the SmartConnection interface. Our library will already come with the SmartHttpConnection that you can use for sending requests.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","myTenant","myUser","myPassword","myXid");

### Device bootstrap

If you don't have credentials for your device you can generate new device credentials. Please have a look at the [Device Intergration](/guides/rest/device-integration#step-0-request-device-credentials) section for how to aquire the neccessary credentials for this process and any further information.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","deviceBootstrapTenant","deviceBootstrapUser","deviceBootstrapPassword","myXid");
	String authenticationHeader = connection.bootstrap("myUniqueDeviceId");

Please note that you can use this method to get the credentials only once for the device. The current connection will automatically use the new credentials but you have to store them for using them after a reboot of the device. You can create the connection also with the authentication header.

	SmartConnection connection = new SmartHttpConnection("http://mypartof.cumulocity.com","myXid","myAuthenticationHeader");


### Template registration

After creating a connection with valid credentials your first step should registering the SmarREST templates to Cumulocity. The library will automatically check within the following function if the templates are already registered and only if not send them to the platform.

	String myTemplateString = "...";
	connection.templateRegistration(myTemplateString);

Once the templates are registered your connection is ready to be used to send requests.