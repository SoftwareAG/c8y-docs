# What is Cumulocity?

Cumulocity is a cloud-enabled platform for machine-to-machine systems . A [machine-to-machine (M2M) system](http://en.wikipedia.org/wiki/Machine-to-Machine) enables an enterprise to create services on remote assets that are equipped with sensors (such as GPS devices, electrictity meters and humidity sensors) and controls (such as switches and valves). ["Cloud-enabled"](http://en.wikipedia.org/wiki/Cloud_computing) means that the platform and applications are offered as a service to enterprises, so that the enterprises do no have to provide own, dedicated computing resources for their M2M applications.

As illustrated in the picture below, Cumulocity is [multitenant](http://en.wikipedia.org/wiki/Multitenancy). Several enterprises, or tenants, share the same instance of Cumulocity. Each tenant has

-   An own user database storing the tenant's users and their passwords.
-   A dedicated storage area keeping the data that is received from the tenant's M2M devices and that is entered by the tenant users. This storage area is, by default, invisible to other tenants on the same instance.
-   A set of subscribed M2M applications that the tenant can use.

Multitenancy reduces the cost for individual tenants. However, it also requires certain care from application developers. Application developers wishing to offer multi-tenant M2M applications themselves have to ensure that no data is leaked between tenants on application level.

![Multi-tenancy architecture](images/c8yimages/multitenancy.png)

# How does Cumulocity support developing M2M applications?

The Cumulocity platform makes two major contributions to M2M application development. First, it provides ready-made, reusable business logic for M2M applications. For example, most M2M applications will want to maintain an inventory of connected M2M devices and their relationship to remote assets (such as rooms, cars or machinery). Cumulocity provides the basic business logic for this task. As described in the picture below, this business logic is exposed through technology-neutral [REST](http://en.wikipedia.org/wiki/Representational_state_transfer) interfaces (JSON over HTTP). REST interfaces can be driven from practically any modern application environment. Access to the interfaces from Java and JavaScript is simplified through the provided client libraries and Eclipse support. Development and testing is simplified through a readily set up sandbox environment. The sandbox environment contains a public tenant that is accessible to all registered developers. Own tenants can be provided on request. More information can be found in the [developer's guide](index.php?option=com_k2&view=itemlist&task=category&id=297).

![Development architecture](images/c8yimages/development.png)

The second contribution is that Cumulocity provides a basic abstraction of device vendors and connectivity options. Most of the time, application developers do not need to care about the particular model and make of a device or if the device is connected through a mobile network or a DSL line. They will implement the application against a vendor-neutral domain model. A device driver, or "agent" is responsible for linking particular devices to Cumulocity and mapping their data to the domain model. This is shown in the picture below.

![Agent architecture](images/c8yimages/agents.png)

More information on the model can be found in the Section ["Modeling M2M assets"](index.php?option=com_k2&view=item&id=809). Agents are explained in the Section ["Interfacing with M2M data sources"](index.php?option=com_k2&view=item&id=811). Application development is disucssed in the Section ["Developing M2M applications"](index.php?option=com_k2&view=item&id=810).
