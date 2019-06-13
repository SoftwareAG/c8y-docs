---
weight: 30
title: Java microservice
layout: redirect
---

> **Info**: This example is an extension of the [Hello world tutorial](/guides/microservice-sdk/java/#java-microservice) presented in **Microservice SDK for Java** in this guide. You need to follow the setup steps there before continuing with this example.

This microservice application uses our Java SDK to verify user roles and create a warning alarm message (for demonstration purposes). It also exposes endpoints to:

- Verify if the microservice is up and running.
- Pass a parameter and return a formatted string.
- Get some of the environment variables.
- Track a user's approximate location (based on IP) and store it in the platform.
- Get the tracked IPs and locations.

It also uses the Cumulocity UI to display the tracked locations on a map.

### Updating the application

Assuming that you have the base code of the "Hello world" example presented in **Microservice SDK for Java**, modify your *pom.xml* file adding the following dependency:

```xml
<dependency>
    <groupId>com.fasterxml.jackson.core</groupId>
    <artifactId>jackson-databind</artifactId>
    <scope>compile</scope>
</dependency>
```

> **Info**: This example was implemented using Java 12 and Spring Boot 2. You may [install the JDK 12](https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html) or adjust this example to the version you already have, e.g. JDK 7.

Modify your *pom.xml* file to specify the Java version you want to use:

```xml
<properties>
    <java.version>12</java.version>
    <maven.compiler.source>${java.version}</maven.compiler.source>
    <maven.compiler.target>${java.version}</maven.compiler.target>
    <spring-boot-dependencies.version>2.1.4.RELEASE</spring-boot-dependencies.version>
    <c8y.version>9.16.2</c8y.version>
    <microservice.name>iptracker-microservice</microservice.name>
</properties>
```

In your _cumulocity.json_ file, add the required roles to be able to create events and alarms.
Also set the isolation level to PER_TENANT, which means that there will be a separate instance for each tenant. Review the **Settings** of the [Microservice manifest](/guides/microservice-sdk/concept/#manifest) for more details. Your file should look similar to this:

```json
{
	"apiVersion": "1",
	"version": "@project.version@",
	"provider": {
		"name": "Cumulocity GmbH"
	},
	"isolation": "PER_TENANT",
	"requiredRoles": [
		"ROLE_EVENT_READ",
		"ROLE_EVENT_ADMIN",
		"ROLE_ALARM_READ",
		"ROLE_ALARM_ADMIN"
	],
	"roles": []
}

```

Your microservice will get a subset of the container's environment variables including the service user. It will then login into the platform and create a warning alarm. To achieve this, edit the *App.java* file and add the following content (the endpoints will be added afterwards).

```java
package c8y.example;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.joda.time.DateTime;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.cumulocity.microservice.autoconfigure.MicroserviceApplication;
import com.cumulocity.model.authentication.CumulocityCredentials;
import com.cumulocity.model.idtype.GId;
import com.cumulocity.rest.representation.alarm.AlarmRepresentation;
import com.cumulocity.rest.representation.event.EventRepresentation;
import com.cumulocity.rest.representation.inventory.ManagedObjectRepresentation;
import com.cumulocity.sdk.client.Platform;
import com.cumulocity.sdk.client.PlatformImpl;
import com.cumulocity.sdk.client.SDKException;
import com.cumulocity.sdk.client.event.EventFilter;

import net.minidev.json.JSONObject;

@MicroserviceApplication
@RestController
public class App {

  private Platform platform;
  private Map<String, String> c8yEnv = new HashMap<>();
  private final String trackerId = "<YOUR_TRACKER_ID>";
  private final String ipstackKey= "<YOUR_IPSTACK_KEY>";

  public static void main (String[] args) {
    SpringApplication.run(App.class, args);

    App microservice = new App();

    microservice.platformLogin();
    microservice.createAlarm();
  }


  /**
  * Get some of the environment variables of the container
  */
  private void subsetEnvironmentValues () {
    var env = System.getenv();

    c8yEnv.put("app_name", env.get("APPLICATION_NAME"));
    c8yEnv.put("url", env.get("C8Y_BASEURL"));
    c8yEnv.put("jdk", env.get("JAVA_VERSION"));
    c8yEnv.put("tenant", env.get("C8Y_TENANT"));
    c8yEnv.put("user", env.get("C8Y_USER"));
    c8yEnv.put("password", env.get("C8Y_PASSWORD"));
    c8yEnv.put("isolation", env.get("C8Y_MICROSERVICE_ISOLATION"));
    c8yEnv.put("memory_limit", env.get("MEMORY_LIMIT"));
  }


  /**
  * Login into the platform using the environment credentials
  */
  private void platformLogin () {
    subsetEnvironmentValues();

    try {
      // Platform credentials
      var username = c8yEnv.get("tenant") + "/" + c8yEnv.get("user");
      var password = c8yEnv.get("password");

      // Login to the platform
      platform = new PlatformImpl(c8yEnv.get("url"), new CumulocityCredentials(username, password));
    }
    catch (SDKException sdke) {
      if (sdke.getHttpStatus() == 401) {
        System.err.println("[ERROR] Security/Unauthorized. Invalid credentials!");
      }
    }
  }

  /**
  * @return the platform with an authenticated user
  */
  private Platform getPlatform () {
    if (platform == null) {
      platformLogin();
    }

    return platform;
  }


  /**
  * Create a warning alarm if the current user has permissions
  */
  @SuppressWarnings("rawtypes")
  private void createAlarm () {
    // Get current user from the platform
    var currentUser = getPlatform().getUserApi().getCurrentUser();

    // Verify if the current user can create alarms
    var canCreateAlarms = false;
    for (Object role : currentUser.getEffectiveRoles()) {
      if (((HashMap) role).get("id").equals("ROLE_ALARM_ADMIN")) {
        canCreateAlarms = true;
      }
    }

    // Create a warning alarm
    if (canCreateAlarms) {
      var source = new ManagedObjectRepresentation();
      source.setId(GId.asGId(trackerId));

      var alarm = new AlarmRepresentation();
      alarm.setSeverity("WARNING");
      alarm.setSource(source);
      alarm.setType("c8y_Application__Microservice_started");
      alarm.setText("The microservice " + c8yEnv.get("app_name") + " has been started");
      alarm.setStatus("ACTIVE");
      alarm.setDateTime(new DateTime(System.currentTimeMillis()));

      getPlatform().getAlarmApi().create(alarm);
    }
  }
}
```

### Creating a managed object

An alarm must be associated to a source and it requires an ID. Hence, you need to create a managed object to be your source and use its ID in your microservice application. The same managed object will track the locations when the microservice gets accessed on a particular endpoint.

Get your current location (latitude, longitude) using a free service, e.g. [My Current Location](https://mycurrentlocation.net).

Create a managed object as a device named "Microservice tracker" employing a POST request as follows:

```http
POST <URL>/inventory/managedObjects

HEADERS:
  Content-Type: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9
  Accept: application/vnd.com.nsn.cumulocity.managedObject+json; charset=UTF-8; ver=0.9
  Authorization: <AUTHORIZATION>

BODY:
  {
    "c8y_IsDevice": {},
    "c8y_Position": {
      "lat": <latitude>,
      "lng": <longitude>
    },
    "name": "Microservice tracker"
  }
```

You will get the ID of your managed object in the response. Assign this ID to `trackerId` in your *App.java* file.

You can also use the UI and navigate to **Devices** > **All devices** in the Device Management application to verify that your device has been created and its location is displayed on the map.

### Storing the tracked locations

The microservice will get the approximate location based on the client's IP. To achieve this, it uses the free service ipstack and you need to [get a free API key](https://ipstack.com/product). Once you have your key, add the following method to your *App.java* file:

```java
/**
* Create a LocationUpdate event based on the client's IP
*
* @param String    The public IP of the client
* @return The event
*/
public EventRepresentation createLocationUpdateEvent (String ip) {
  // Get location details from ipstack
  var rest = new RestTemplate();
  var apiURL = "http://api.ipstack.com/" + ip + "?access_key=" + ipstackKey;
  var location = rest.getForObject(apiURL, Location.class);

  // Prepare a LocationUpdate event using Cumulocity's API
  var c8y_Position = new JSONObject();
  c8y_Position.put("lat", location.getLatitude());
  c8y_Position.put("lng", location.getLongitude());

  var source = new ManagedObjectRepresentation();
  source.setId(GId.asGId(trackerId));

  var event = new EventRepresentation();
  event.setSource(source);
  event.setType("c8y_LocationUpdate");
  event.setDateTime(new DateTime(System.currentTimeMillis()));
  event.setText("Accessed from " + ip +
  " (" + (location.getCity() != null ? location.getCity() + ", " : "") + location.getCountry_code() + ")");
  event.setProperty("c8y_Position", c8y_Position);
  event.setProperty("ip", ip);

  // Create the event in the platform
  getPlatform().getEventApi().create(event);

  return event;
}
```

This method creates a location update event using Cumulocity's API. The GET request to the ipstack API using your key will return a location object. Create a new file named *Location.java* in the same directory of your *App.java* with the following content:

```java
package c8y.example;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Location {

  private String city;
  private String country_code;
  private String latitude;
  private String longitude;

  public String getLongitude() {
    return longitude;
  }

  public void setLongitude(String longitude) {
    this.longitude = longitude;
  }

  public String getLatitude() {
    return latitude;
  }

  public void setLatitude(String latitude) {
    this.latitude = latitude;
  }

  public String getCountry_code() {
    return country_code;
  }

  public void setCountry_code(String country_code) {
    this.country_code = country_code;
  }

  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }
}
```

Finally, the application's endpoints shall be defined. Edit your *App.java* adding the following endpoints:

```java
// Check the microservice status/health (implemented by default)
// GET /health

// Greeting endpoints
@RequestMapping("hello")
public String greeting (@RequestParam(value = "name", defaultValue = "World") String you) {
  return "Hello " + you + "!";
}

@RequestMapping("/")
public String root () {
  return greeting("World");
}

// Return the environment values
@RequestMapping("environment")
public Map<String, String> environment () {
  if (c8yEnv.isEmpty()) {
    subsetEnvironmentValues();
  }
  return c8yEnv;
}

// Track client's approximate location
@RequestMapping("location/track")
public String trackLocation (HttpServletRequest request) {
  // Get the public IP address and create the event
  return createLocationUpdateEvent(request.getHeader("x-real-ip")).toJSON();
}

// Get the tracked IPs and locations
@RequestMapping("location/locations")
public ArrayList<Object> getLocations (@RequestParam(value = "max", defaultValue = "5") int max) {
  var locations = new ArrayList<Object>();
  var filter = new EventFilter().byType("c8y_LocationUpdate");
  var eventCollection = getPlatform().getEventApi().getEventsByFilter(filter).get(max);

  eventCollection.getEvents().forEach((event) -> {
    var map = new HashMap<String, Object>();

    map.put("ip", event.getProperty("ip"));
    map.put("coordinates", event.getProperty("c8y_Position"));
    map.put("when", event.getCreationDateTime().toString("yyyy-MM-dd hh:mm:ss"));

    locations.add(map);
  });

  return locations;
}
```

### Building and deploying the application

Use the command `mvn clean install` and follow the same steps of the [Hello world tutorial](/guides/microservice-sdk/java/#java-microservice) to deploy your microservice.

### Testing the application

You can test any endpoint of your application using the command line or a web browser. For example, a GET request on <kbd>location/track</kbd> will obtain the client's IP from the request header and use the `createLocationUpdateEvent` method to get the approximate location. A response will be similar to:

```http
{
  time: "2019-06-03T08:44:21.730Z",
    source: {
      id: "..."
    },
    text: "Accessed from ... (Sofia, BG)",
    type: "c8y_LocationUpdate",
    c8y_Position: {
      lng: "23.3175",
      lat: "42.683"
    },
    ip: "..."
}
```

Using the endpoint <kbd>location/locations</kbd> will return by default five stored events. You can use the `max` parameter to specify a higher number.

In the Device Management application, navigate to **Devices** > **All devices** and locate your microservice tracker. Under **Tracking** you will be able to see a map with the tracked locations. It is also possible to develop your own web application and customize a map widget. Refer to the [Web SDK for Angular](https://cumulocity.com/guides/web/angular/#apps) for more details.

![Microservice tracking](/guides/images/microservices-sdk/ms-tracking-map.png)

### Source code

The code of this [iptracker-microservice](https://bitbucket.org/m2m/cumulocity-examples/src/default/microservices/iptracker-microservice/) can be found in our Bitbucket M2M repositories.
