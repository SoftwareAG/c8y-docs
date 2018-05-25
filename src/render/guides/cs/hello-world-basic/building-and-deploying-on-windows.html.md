---
order: 30
title: Building and deploying Hello World on Windows
layout: redirect
---

Building and deploying "Hello World" on Windows is similar to the way it is done for Linux.

Download a script file to build a "Hello World" app.

	Invoke-WebRequest  http://resources.cumulocity.com/cssdk/releases/microservicesdk-win-dev-9.1.0.zip -OutFile microservicesdk-win-dev-9.1.0.zip

Once you have downloaded the source, unzip the file.

	Expand-Archive c:\microservicesdk-win-dev-9.1.0.zip -DestinationPath c:\microservicesdk-win-dev-9.1.0.zip

Change the current folder and navigate to a microservicesdk folder.

	cd microservicesdk-win-dev-9.1.0.zip

Run the script create.sh to create a sample project, provide the name of the project and the API application.

	./create.ps1

Execute the bootstrapper script, to build the application and an image from a Docker file.

	./build.ps1

In order to deploy the application run the script. You must provide the correct URL and credentials in this script.

	./deploy.ps1 -t {tenant} -u {username} -p {password}  -an hello-world -f settings.ini
Ways to call the script
*  Just call deploy.ps1
	* The script looks for a settings.ini in the same directory. If found, uses the credentials and tenant URL from that file
	* If settings.ini is not found, an error is shown
* Calling deploy.ps1 -f settings_alternative.ini
	* Loads the credentials and tenant URL from settings_alternativ.ini
	* If settings_alternative.ini is not found, an error is shown
* Merge the given arguments and ini configuration.
	* deploy.ps1 -an hello-world -f settings_alternative.ini

The ini sample
~~~
[deploy]
username=tenant/user
password=pass
tenant=url
appname=sample_application
~~~
 
