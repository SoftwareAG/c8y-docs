---
weight: 30
title: Java microservice
layout: redirect
---

> **Note**: This example is an extension of the [Hello world tutorial](/guides/microservice-sdk/java/#java-microservice) presented in **Microservice SDK for Java** in this guide. You need to follow the setup steps there before continuing with this example.

This microservice application uses our Java SDK to verify user roles and create a warning alarm message (for demonstration purposes). It also exposes endpoints to:

- verify if the microservice is up and running,
- pass a parameter and return a formatted string,
- get some of the environment variables,
- track a user's approximate location (based on IP) and store it in the platform,
- get the tracked IPs and locations.

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

> **Note**: This example was implemented using Java 12 and Spring Boot 2. You may [install the JDK 12](https://www.oracle.com/technetwork/java/javase/downloads/jdk12-downloads-5295953.html) or adjust this example to the version you already have, e.g. JDK 7.

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

Edit the *App.java* file and add the following content:

```java
package c8y.example;

import java.io.IOException;
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

    private static Platform platform;

    private static Map<String, String> C8Y_ENV = null;
    private static String trackerId = "<trackerID>";

    public static void main (String[] args) {
        SpringApplication.run(App.class, args);

        // Load environment values
        C8Y_ENV = getEnvironmentValues();

        // Platform credentials
        var username = "<tenantID>/<user>";
        var password = "<password>";

        try {
            // Login to the platform
            platform = new PlatformImpl(C8Y_ENV.get("url"), new CumulocityCredentials(username, password));

            // Add the current user to the environment values
            var user = platform.getUserApi();
            var currentUser = user.getCurrentUser();
            C8Y_ENV.put("username", currentUser.getUserName());

            // Verify if the current user can create alarms
            var canCreateAlarms = false;
            for (Object role : currentUser.getEffectiveRoles()) {
                if (((HashMap) role).get("id").equals("ROLE_ALARM_ADMIN")) {
                    canCreateAlarms = true;
                }
            }
        } catch (SDKException sdke) {
            if (sdke.getHttpStatus() == 401) {
                System.err.println("[ERROR] Security/Unauthorized. Invalid credentials!");
            }
        }

    }

    /**
     * Get the environment variables of the container
     */
    private static Map<String, String> getEnvironmentValues () {
        var env = System.getenv();
        var map = new HashMap<String, String>();

        map.put("app_name", env.get("APPLICATION_NAME"));
        map.put("url", env.get("C8Y_BASEURL"));
        map.put("jdk", env.get("JAVA_VERSION"));
        map.put("tenant", env.get("C8Y_BOOTSTRAP_TENANT"));
        map.put("isolation", env.get("C8Y_MICROSERVICE_ISOLATION"));
        map.put("memory", env.get("MEMORY_LIMIT"));

        return map;
    }
}
```

The application will get environment values from the container it is running in, login to the platform, verify the user roles and create a warning alarm.

### Creating a managed object

An alarm must be associated to a source and it requires an ID. Hence, you need to create a managed object to be your source and use its ID in your microservice application. The same managed object will track the locations when the microservice get accessed on a particular endpoint.

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

You will get the ID of your managed object in the response. Assign this ID to the `trackerId` variable in your *App.java* file.

You can also use the UI and navigate to **Devices** > **All devices** in Device management to verify that your device has been created and its location is displayed on the map.

### Storing the location

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
    var location = rest.getForObject("http://api.ipstack.com/" + ip + "?access_key=<YOUR_IPSTACK_KEY>", Location.class);

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
    platform.getEventApi().create(event);

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

Finally, the application's endpoints shall be added. At this point, your application has the endpoints <kbd>hello</kbd> and <kbd>health</kbd>. Edit your *App.java* adding the following endpoints:

```java
// Return the environment values
@RequestMapping("environment")
public Map<String, String> environment () {
    return C8Y_ENV;
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
    var eventCollection = platform.getEventApi().getEventsByFilter(filter).get(max);

    eventCollection.getEvents().forEach((event) -> {
        var map = new HashMap<String, Object>();

        map.put("ip", event.getProperty("ip"));
        map.put("coordinates", event.getProperty("c8y_Position"));
        map.put("date", event.getCreationDateTime().toString("yyyy-MM-dd hh:mm:ss"));

        locations.add(map);
    });

    return locations;
}
```

### Build and deploy

Use the command `mvn clean install` and follow the same steps of the [Hello world tutorial](/guides/microservice-sdk/java/#java-microservice) to deploy your microservice.

### Test

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

Using the endpoint <kbd>location/locations</kbd> will return five stored events by default. You can use the `max` parameter to specify a bigger number.

In Device management, navigate to **Devices** > **All devices** and locate your Microservice tracker. Under **Tracking** you will be able to see a map with the tracked locations. It is also possible to develop your own web application and customize a map widget. Refer to the [Web SDK for Angular](https://cumulocity.com/guides/web/angular/#apps) for more details.

![Microservice tracking](/guides/images/microservices-sdk/ms-tracking-map.png)

### Source code

The code of this [iptracker-microservice](https://bitbucket.org/m2m/cumulocity-examples/src/default/microservices/iptracker-microservice/) can be found in our Bitbucket M2M repositories.
