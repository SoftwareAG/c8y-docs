---
order: 200
title: Microservice package and deploy
layout: default
---
## Overview
The Cumulocity provides you with an utility tool for easy microservice packaging, deployment and subscription. The script requires running docker, and can be found here:

    wget http://resources.cumulocity.com/examples/microservice
      
To show all possibilities type 

    $ microservice help 
    
Following response will be displayed
    
    Following functions are available. You can run specify them in single execution:
    	pack - prepares deployable zip file. Requires following stucture:
    		/docker/Dockerfile
    		/docker/* - all files within the directory will be included in the docker build
    		/cumulocity.json 
    	deploy - deploys applicaiton to specified address
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
    	-id  | --applicationId	# Applicaiton used for subscription purposes. Required only for solemn subscribe execution

## Pack goal
To pack the microservice following structure is required:
    
    /docker/Dockerfile
    /docker/* - all files within the directory will be included in the docker build
    /cumulocity.json 
The script can be run in a parent folder holding such structure, or by passing the path to the directory via --dir parameter. Sample execution:

    $microservice pack -n hello-world
    
will create a zip file with hello-world name, and intermediate image.tar - exported docker image. 

## Deploy 
To deploy application you can run deploy goal.

    $microservice deploy -n hello-world -d {url} -u {username} -p {password} -te {tenant}
    
The successfull execution will create application with specified name, if such does not exist yet. Then it will upload the hello-world.zip file into the platform. 

## Subscribe
To subscribe your tenant to the uploaded microservice you can execute:

    $microservice subscribe -n hello-world -d {url} -u {username} -p {password} -te {tenant} -id {applicaitonId}
    
It will result in tenant subscription to an application specified by id parameter. If user was already subscribed, a warning with such information will be displayed. 

## Multiple goals

Goals can be executed together to pack, deploy and subscribe the application in a single line. In such case the application id will be automatically pulled by the script. 

    $microservice pack deploy subscribe -n hello-world -d {url} -u {username} -p {password} -te {tenant}




 
