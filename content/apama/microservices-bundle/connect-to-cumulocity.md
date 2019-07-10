---
weight: 30
title: Connecting to the Cumulocity platform
layout: redirect
---

To support making these requests we provide a helper event with actions to automatically connect to the Cumulocity platform and then create requests which can be used to call other microservices. You will need to copy this helper event and the associated imports into the top of your EPL file. This helper event provides a static action which will connect to Cumulocity and return an instance of the event. The instance has an action which will create a request to call a specific microservice. This helper event will automatically connect either from within a microservice or the Cumulocity platform itself, or from a remote correlator.

Import this code into your application:

```java
using com.apama.correlator.Component;
using com.softwareag.connectivity.ConnectivityPlugins;
using com.softwareag.connectivity.Chain;
using com.apama.util.AnyExtractor;
using com.softwareag.connectivity.httpclient.Request;
using com.softwareag.connectivity.httpclient.Response;
using com.softwareag.connectivity.httpclient.HttpTransport;
using com.softwareag.connectivity.httpclient.HttpOptions;
 
/** Cumulocity Request Interface.
 *
 * This is for making generic REST requests to other
 * Cumulocity microservices with JSON payloads.
 */
event CumulocityRequestInterface
{
   /** @private */
   HttpTransport transport;
    
   /**
   * Allows configuration of a HTTPTransport with
   * Cumulocity-specific configuration details.
   *
   * @returns The instance of the event that contains a transport
   */
   static action connectToCumulocity() returns CumulocityRequestInterface
   {
      string baseUrl := "";
      string basePath := "";
      string host := "";
      integer port := 0;
      string user := "";
      string password := "";
      boolean https := true;
      string tlsFile := "";
 
      dictionary<string, string> config := {};
      dictionary<string, string> envp := Component.getInfo("envp");
    
       
      if envp.hasKey("C8Y_BASEURL") and envp["C8Y_BASEURL"] != "" { // Running internal
         baseUrl := envp["C8Y_BASEURL"];
          
         user := envp["C8Y_TENANT"] + "/" + envp["C8Y_USER"];
         password :=envp["C8Y_PASSWORD"];
      }
      else { // Get the settings from the config properties when running remotely
         string k;
         dictionary<string, string> props := Component.getConfigProperties();
         for k in props.keys() {
            if (k = "CUMULOCITY_SERVER_URL") {
               baseUrl := props[k];
            }
            else if (k = "CUMULOCITY_USERNAME"){
               user := props[k];
            }
            else if (k = "CUMULOCITY_PASSWORD"){
               password := props[k];
            }
            else if (k = "CUMULOCITY_TLS_CERT_AUTH_FILE"){
               tlsFile := props[k];
            }
         }       
      }
 
      if baseUrl.find("/") < 0 {
         baseUrl := baseUrl + "/";
      }
   
      // Check if the baseUrl starts with either http or https
      if baseUrl.length()>=7 and baseUrl.substring(0,7).toLower() = "http://"{
         https := false;
         baseUrl := baseUrl.substring(7, baseUrl.length());
      }
      else if baseUrl.length()>=8 and baseUrl.substring(0,8).toLower() = "https://"{
         https := true;
         baseUrl := baseUrl.substring(8, baseUrl.length());
      }
      // Otherwise assume HTTPS and that the URL does not have such a prefix as http or https
 
      basePath := baseUrl.replace("[^/]*(/.*)?", "$1");
      host := baseUrl.replace("(?:(.*):|(.*)/|(.*)).*", "$1$2$3");
      port := baseUrl.replace("[^:]*:([0-9]*).*", "$1").toInteger();
      if (port = 0){
         if https = true{
            port := 443;
         }
         else{
            port := 80;
         }
      }
       
      config := {
         HttpTransport.CONFIG_USERNAME:user,
         HttpTransport.CONFIG_PASSWORD:password,
         HttpTransport.CONFIG_AUTH_TYPE:"HTTP_BASIC",
         HttpTransport.CONFIG_BASE_PATH:basePath
      };
       
      if https = true{
         config.add(HttpTransport.CONFIG_TLS,"true");
         config.add(HttpTransport.CONFIG_TLS_CERT_AUTH_FILE,tlsFile);
         config.add(HttpTransport.CONFIG_TLS_ACCEPT_UNRECOGNIZED_CERTS,"true");
      }
       
       
      log config.toString() at DEBUG;
      return CumulocityRequestInterface(HttpTransport.getOrCreateWithConfigurations(host, port, config));
   }
    
   /**
   * Allows creation of a request on a transport that
   * has been configured for a Cumulocity connection.
   *
   * @param method The type of HTTP request, for example "GET".
   * @param path A specific path to be appended to the request.
   * @param payload A dictionary of elements to be included in the request.
   */
   action createRequest(string method, string path, any payload) returns Request
   { 
      return transport.createRequest(method, path, payload, new HttpOptions);
   }
}
```

### Connecting to Cumulocity

To create the connection from your own code, simply call the `connectToCumulocity` method and store the result:

```java
CumulocityRequestInterface cumulocity := CumulocityRequestInterface.connectToCumulocity();
```

This will automatically create a connection using the credentials and connection details provided to your microservice, or using the configuration for the Cumulocity IoT transport when connecting from an external Apama instance.