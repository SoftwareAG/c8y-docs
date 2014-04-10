# Overview

This section discusses security aspects of cloud-enabled M2M systems using Cumulocity. It first gives an overview on how the communication channels between M2M devices and M2M applications are secured through encryption, authentication and authorization. Then it describes Cumulocity's user and permission management functionality. Finally, it shows how security-relevant events are logged for auditing purposes.

More information can be found in the [user management section](guides/reference-guide/users) of the reference guide. Authentication subjects are discussed in the [Java](guides/developers-guide/developing-java-clients) and [JavaScript](guides/developers-guide/developing-web-clients) sections of the developer's guide, and, on REST-level, in the [REST usage](guides/reference-guide/rest-implementation) section of the reference guide. Permissions required for individual API calls are documented in the respective reference guide sections for the APIs.

# Communication security

The figure below illustrates the communication channels from the sensor network with the M2M devices up to the web browser running the M2M applications.

![Communication security](images/c8yimages/commsecurity.png)

Inside the sensor networks and from the sensor networks to agents, device- and gateway-specific protocols are used. Hence, securing these is a device-specific matter. Some alternatives are described in the section on agent architectures in ["Interfacing with M2M data sources"](guides/concepts-guide/interfacing-with-m2m-data-sources). Agents run as client towards the Cumulocity core using [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure) to send and receive data. Similarly, M2M applications use HTTPS towards Cumulocity. If an M2M application exposes own interfaces towards web browsers, it is recommended that these also support HTTPS. This way, the whole path from agents to the end user is secured.

# Managing users

Cumulocity uses a standard authentication and authorization model based on realms, users, user groups and authorities. A *realm* is a database of users and user groups that follow the same authentication and authorization policy. A *user* is a person or an external system entitled to access protected resources in Cumulocity. Access is controlled through permissions. For simplifying administration, users can be grouped into *user groups* sharing similar permissions. A user can be a member of several user groups, so that the user has the combined permissions of the groups.

Cumulocity creates a new realm for each tenant to store the users of that tenant. Realms provide own name space for user names, allowing users to keep the names that they are familiar with from their own enterprise IT or other IT systems. There is no conflict between user names: A user "smith" of one particular tenant is different from a user "smith" of another tenant. This user name is valid for all Cumulocity applications that a tenant subscribes to.??

Each new realm is automatically populated with an initial administrator user who can create further users and user groups, and who can assign permissions to these users and user groups. This enables an enterprise to manage users and their permissions on their own using the user management application (accessible through https://\<Cumulocity server\>/ui/tenantadmin).

![User management screenshot](images/c8yimages/usermanagement.png)

Users can manage their own profile data inside M2M application that rely on the Cumulocity web framework.

![Profile editing screenshot](images/c8yimages/profileediting.png)

# Managing permissions and ownership

The ability to execute certain functionality in the system depends on two concepts: Permissions and ownership.

Permissions define explicitly what functionality can be executed by a user. Cumulocity distinguishes read permissions and administration permissions. Read permissions enable users to read data. Administration permissions enable users to create, update and delete data. Read and administration permissions are separately available for the different types of data in Cumulocity. For example, there are read permissions for inventory data, measurements, operations and so forth.

Objects in the inventory also have an owner associated with them. Owners can always, regardless of their other permissions,

-   Read, Update and delete the inventory objects they own.
-   Create, read, update and delete data associated with the objects they own.

For example, if you are the owner of a smart meter in the inventory, you can store meter readings for that smart meter even if you do not have any other measurement permissions.

The inventory also features a "create" permission. A user having just the create permission can store new objects in the inventory, but can not read, modify or delete any other data. This is beneficial for

-   Agents that can be limited to just manage the devices that they control and nothing else, reducing the impact of programming errors.
-   Public edition users that can be limited from modifying other user's data.??

# Authenticating users and devices

All access to Cumulocity and its APIs is protected through authentication and authorization ? regardless of whether that access is requested by actual users or by M2M devices. Hence, also devices respectively agents require a user to be created for them. Two authentication mechanisms are supported by the APIs currently:

-   Basic authentication: Clients are authenticated through a username and a password. The password is transmitted and stored in encrypted format in Cumulocity.
-   OAuth 2.0: Clients are authenticated through a username and a time-limited access token obtained from an external identity provider. The password for that identity provider is not stored in Cumulocity.

This is illustrated in the image below. A device can connect through an agent to Cumulocity by providing a username and a password as part of the API request. An application can connect to Cumulocity by providing a username and a token as part of the API request. This token is obtained from an external OAuth identity provider prior to connecting.

![authentication](images/c8yimages/authentication.png)

Since OAuth requires human interaction, a device respectively an agent will always use basic authentication. Please note that as of today, OAuth support is only provided for the tenant administration console, not for own applications.

If both mechanisms are configured, they can be used in parallel. Users can both set a password for themselves to be used for basic authentication and at the same time use OAuth single sign-on. This scenario is used for demonstration in the public tenant; it is not recommended for production scenarios.

# Logging security-relevant events

Whenever a security-relevant event occurs, it needs to be logged for potential later auditing. Security-relevant events may happen both on application level as well as in the M2M network. A simple example of a security-relevant event on application level is a login to the application. An example of a security-relevant event on the network level is using a local software or local control on a device to manipulate the device.

To capture security-relevant events, Cumulocity offers an [auditing interface](guides/reference-guide/auditing). This interface enables applications and agents to write audit logs, which are persistently stored and cannot be externally modified after being written. Cumulocity itself also writes own audit records related to login and device control operations.



	The separation concept that was originally described here should move to "securing m2m applications" (confidentiality section?).
