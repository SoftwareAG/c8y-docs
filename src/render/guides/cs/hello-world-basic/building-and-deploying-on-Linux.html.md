---
order: 30
title: Building and deploying Hello World on Linux
layout: redirect
---

Download a script file to build a "Hello World" app. Wget utility is the best option to download a file.

	sudo wget  http://resources.cumulocity.com/cssdk/releases/microservicesdk-lin-dev-9.1.0.zip

The latest can be replaced by the version number e.g. microservicesdk-{X.X.X}.tar.gz

Once you have downloaded the source, untar the file.

	unzip microservicesdk-lin-dev-9.1.0.zip -d  microservicesdk-9.1.0

Change the current folder, to navigate to a microservicesdk folder.

	cd microservicesdk-9.1.0

Run the script **create.sh** to create a sample project, provide the name of the project and the API application.

	./create.sh

	Enter the solution name:

	<<demo>>

	Enter the name of a web API project:

	<<api>>

For a working cake you need the build.sh or build.ps1 file to bootstrap cake and the build.cake file. Build.sh and build.ps1 are bootstrapper scripts that ensure you have Cake and other required dependencies installed. The bootstrapper scripts are also responsible for invoking Cake. Build.cake is the actual build script. 

Build.cake contains tasks represent a unit of work in Cake, and you may use them to perform specific work in a specific order:

* Clean

* Build

* DotnetPublish

* SingleDockerImage

Execute the bootstrapper script, to build the application and an image from a Docker file.

	./build.sh


Launch the Docker container with the command

	docker run -p 8999:4700 imagename:latest

Check the status of an application that is running inside the Docker container.

	curl http://localhost:8999/api/values

In order to deploy the application run the deploy script. You must provide the correct URL and credentials in this script.
Ways to call the script
*  Just call deploy.sh
	* The script looks for a settings.ini in the same directory. If found, uses the credentials and tenant URL from that file
	* If settings.ini is not found, an error is shown
~~~
	./deploy.sh
~~~
* Calling the script with the .ini name
	* Loads the credentials and tenant URL from settings_alternativ.ini
	* If settings_alternative.ini is not found, an error is shown
~~~
	./deploy.sh -f settings.ini
~~~

* Merge the given arguments and ini configuration. Parameters from the file are overwritten by explicitly defined parameters.
	* deploy.sh  -an hello-world -f settings_alternative.ini
~~~
	./deploy.sh -t {tenant} -u {username} -p {password}  -an hello-world -f settings.ini
~~~

The ini sample
~~~
[deploy]
username=tenant/user
password=pass
tenant=url
appname=sample_application
~~~
