---
order: 20
title: Environment variables
layout: redirect
---

The following environment variables are available for microservices:

    APPLICATION_NAME - Application name
    SERVER_PORT - Default open port (80)
    MICROSERVICE_SUBSCRIPTION_ENABLED - True by default
    C8Y_BASEURL - Platform address
    C8Y_BASEURL_MQTT - Platform address of mqtt server (contains port number)
    C8Y_MICROSERVICE_ISOLATION - Isolation level (MULTI_TENANT or PER_TENANT)
    C8Y_BOOTSTRAP_REGISTER - Indicator whether microservice should perform self registration, false by default 
    C8Y_BOOTSTRAP_TENANT - Bootstrap user tenant, for MULTI_TENANT - microservice owner
    C8Y_BOOTSTRAP_USER - Bootstrap user name
    C8Y_BOOTSTRAP_PASSWORD - Bootstrap user password
    C8Y_TENANT - Application user tenant (available only for PER_TENANT isolation)
    C8Y_USER - Application user name (available only for PER_TENANT isolation)
    C8Y_PASSWORD - Application user password (available only for PER_TENANT isolation)
    MEMORY_LIMIT - Memory limit, default value: 256M
    PROXY_HTTP_HOST 
    PROXY_HTTP_PORT
    PROXY_HTTP_NON_PROXY_HOSTS
    PROXY_HTTPS_HOST
    PROXY_HTTPS_PORT
    PROXY_SOCKS_HOST
    PROXY_SOCKS_PORT

### Example usage

Prerequisite:

Microservice docker repository image is visible with the command:

    $ docker images 

Execute to run docker container with environment variables:

    $ docker run -e C8Y_BASEURL={URL} -e C8Y_BOOTSTRAP_TENANT={BOOTSTRAP_TENANT} -e C8Y_BOOTSTRAP_USER={BOOTSTRAP_USERNAME} -e C8Y_BOOTSTRAP_PASSWORD={BOOTSTRAP_USER_PASSWORD} -i -t {DOCKER_REPOSITORY_IMAGE}:{TAG}

Use backslash (\\) before special characters such as `&, !, ;, \`. 

### Proxy variables

Proxy variables (PROXY_HTTP_HOST, PROXY_HTTP_PORT, ...) are used to set proxy URL for different protocols. For the microservices written in Java, setting each of the variables will result with passing the corresponding parameter into JVM runtime (for the exact information see [Oracle DOC](https://docs.oracle.com/javase/8/docs/technotes/guides/net/proxies.html)).

Proxy variables will be passed into microservice environment during installation. Microservice installator passes variables into environment according to following settings:
 - tenant options in microservice owner tenant
 - platform application environment variables
 
Tenant options are more important. That means if the parameter is set in both places, the value from tenant option is taken.
 
Below table describes variable names:

| Tenant Option                | Platform env variable                            | Microservice env variable   |                               
|------------------------------|--------------------------------------------------|-----------------------------|
| `proxy.http.host`            | `MICROSERVICE_RUNTIME_PROXY_HTTP_HOST`           | `PROXY_HTTP_HOST`           |
| `proxy.http.port`            | `MICROSERVICE_RUNTIME_PROXY_HTTP_PORT`           | `PROXY_HTTP_PORT`           |
| `proxy.http.non.proxy.hosts` | `MICROSERVICE_RUNTIME_PROXY_HTTP_NON_PROXY_HOSTS`| `PROXY_HTTP_NON_PROXY_HOSTS`|
| `proxy.https.host`           | `MICROSERVICE_RUNTIME_PROXY_HTTPS_HOST`          | `PROXY_HTTPS_HOST`          |
| `proxy.https.port`           | `MICROSERVICE_RUNTIME_PROXY_HTTPS_PORT`          | `PROXY_HTTPS_PORT`          |
| `proxy.socks.host`           | `MICROSERVICE_RUNTIME_PROXY_SOCKS_HOST`          | `PROXY_SOCKS_HOST`          |
| `proxy.socks.port`           | `MICROSERVICE_RUNTIME_PROXY_SOCKS_PORT`          | `PROXY_SOCKS_PORT`          |

All tenant options have same category: `microservice.runtime`
 
For each protocol (http, https, socks) microservice environment variables are passed into runtime only if HOST parameter is set. If HOST parameter is missing, other parameters for same protocol are not processed. 
  
##### Examples:

1. Microservice owner tenant has tenant options:

     `{category: "microservice.runtime", key: "proxy.http.host", value: "10.11.12.13"}`    
     `{category: "microservice.runtime", key: "proxy.http.port", value: "8080"}`

   and there is an environment variable in platform application:

     `MICROSERVICE_RUNTIME_PROXY_HTTP_PORT=8181`
 
   Deploying and running microservice inside the docker will result in passing into microservice environment the following variables (notice PORT value)
     
     `PROXY_HTTP_HOST=10.11.12.13` 
     `PROXY_HTTP_PORT=8080`    
      
2. Microservice owner tenant has tenant option:
      
     `{category: "microservice.runtime", key: "proxy.https.host", value: "10.11.12.13"}`

   and there is an environment variable in platform application:

     `MICROSERVICE_RUNTIME_PROXY_HTTPS_PORT=8181`
       
   Deploying and running microservice inside the docker will result in passing into microservice environment the following variables 
        
     `PROXY_HTTP_HOST=10.11.12.13` 
     `PROXY_HTTP_PORT=8181`        
      
3. Microservice owner tenant has tenant options:
      
     `{category: "microservice.runtime", key: "proxy.http.port", value: "8080"}` 
     `{category: "microservice.runtime", key: "proxy.http.non.proxy.hosts", value: "localhost"}`

   and proxyHost is not set (either in tenant option, nor env variable)
       
   Deploying and running java microservice inside the docker will pass no proxy environment variable
       
            
4. Microservice owner tenant has tenant option:
      
     `{category: "microservice.runtime", key: "socks.http.host", value: "10.11.12.13"}`            
     
   Deploying and running microservice inside the docker will result in passing into microservice environment the following variable (only host parameter)
             
     `SOCKS_HTTP_HOST=10.11.12.13`