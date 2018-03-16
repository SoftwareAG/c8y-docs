---
order: 10
title: Overview
layout: redirect
---

Cumulocity provides you with an utility tool for easy microservice packaging, deployment and subscription. The script requires running docker and can be found here:

    wget http://resources.cumulocity.com/examples/microservice
      
To show all possibilities, type 

    $ microservice help 
    
The response will be:
    
    Following functions are available. You can run specify them in single execution:
    	pack - prepares deployable zip file. Requires following structure:
    		/docker/Dockerfile
    		/docker/* - all files within the directory will be included in the docker build
    		/cumulocity.json 
    	deploy - deploys application to specified address
    	subscribe - subscribes tenant to specified microservice application
    	help | --help - prints help
    
    Following options are available:
    	-dir | --directory 		# Working directory. Default value'/home/ddud/work/cumulocity_repos/develop/java/cumulocity-examples/hello-world-microservice' 
    	-n   | --name 	 		# Docker image name
    	-t   | --tag			# Docker tag. Default value 'latest'
    	-d   | --deploy			# Address of the platform the microservice will be uploaded to
    	-u   | --user			# Username used for authentication to the platform
    	-p   | --password 		# Password used for authentication to the platform
    	-te  | --tenant			# Tenant used
    	-a   | --application 	# Name upon which the application will be registered on the platform. Default value from --name parameter
    	-id  | --applicationId	# Application used for subscription purposes. Required only for solemn subscribe execution
