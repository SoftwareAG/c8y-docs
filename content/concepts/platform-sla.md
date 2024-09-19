---
title: Service-level agreement
layout: bundle
sector:
  - getting_started
weight: 90
---

<h3 style="margin-top: -1em; padding-top: 0">for {{< product-c8y-iot >}} Platforms</h3>

**This Agreement** is made between {{< company-c8y >}} ("Provider") and the Customer ("Customer") who utilizes {{< product-c8y-iot >}} Platform ("Service") for managing Internet of Things ("IoT") devices ("IoT devices", "devices") on Provider's cloud instances ("software-as-a-service", "SaaS").

### Service Description

{{< product-c8y-iot >}} is a comprehensive Internet of Things (IoT) platform designed to enable seamless connectivity, management, and control of IoT devices. The platform provides a range of capabilities including:

* **Device Connectivity and Management:** The platform facilitates the connection, data collection, and remote control of IoT devices. These functionalities can be accessed through the {{< product-c8y-iot >}} Device Management application or via application programming interfaces (APIs; REST/MQTT).
* **Data Visualization:** Users can visualize their connected devices and corresponding data within the {{< product-c8y-iot >}} Cockpit, offering an intuitive interface for monitoring and managing IoT deployments.
* **Real-Time and Batch Data Processing:** {{< product-c8y-iot >}} supports both real-time and batch processing of IoT data, enabling users to efficiently manage and analyze large volumes of data as it is generated.
* **Extended Platform Capabilities:** The platform's functionality can be further enhanced with additional features, which may require separate agreements:
    * **Additional Connectivity Options:** This includes extended connectivity support such as LPWAN and LWM2M.
    * **Enhanced Applications:** Users can leverage value-added Cumulocity applications from the Cumulocity product catalog, e.g., for advanced analytics and digital twin management.
    * **Custom Application Development:** The platform supports the creation of custom applications using {{< product-c8y-iot >}} Microservices and {{< product-c8y-iot >}} Web SDK.
    * **Enterprise-Grade Services:** Users can provide derived services to their own customers, utilizing Enterprise Functions and Multi-Tenancy features.

This service-level agreement applies solely to {{< product-c8y-iot >}} Basic, {{< product-c8y-iot >}} Advanced and {{< product-c8y-iot >}} Enterprise Dedicated operated by {{< company-c8y >}}, excluding optional features. {{< product-c8y-iot >}} Software-Operated-as-a-Service and {{< product-c8y-iot >}} Edge are outside the scope of this agreement.

### Service Features

The {{< product-c8y-iot >}} platform offers a comprehensive set of features designed to support the needs of enterprise IoT deployments, ensuring robust performance, security, and flexibility. Key service features include:

* **Real-Time Data Processing and Storage:** The platform supports real-time data processing, enabling instant insights and actions based on IoT data. Data storage is customer-configurable, allowing you to define retention periods according to your specific requirements.
* **Enterprise-Grade User and Permission Management:** {{< product-c8y-iot >}} includes advanced user and permission management features, allowing organizations to maintain strict control over access and operations within the platform.
* **Flexible Deployment Options:**
    * The platform is deployed using shared ("{{< product-c8y-iot >}}") or dedicated cloud instances ("{{< product-c8y-iot >}} Enterprise Dedicated"), tailored to meet the needs of your organization.
    * Optionally, separate environments for pre-production (non-production) activities can be purchased to ensure smooth development and testing processes.
    * {{< product-c8y-iot >}} is hosted in customer-selected regions (EMEA, APAC, Japan, and the US).
* **Support Services:**
    * The platform offers tiered product support to meet varying operational needs, including 8x5 support ("Starter Support"), 24x7 support ("Standard Support"), and comprehensive 24x7 support with enhanced SLAs ("Enterprise Active Support").
* **Proactive Monitoring and Management:**
    * {{< product-c8y-iot >}} includes 24x7 platform monitoring, with a publicly accessible status page and real-time status notifications to keep you informed.
    * The platform’s availability, capacity, and performance are actively managed to ensure consistent and reliable operation.
* **Information Security Compliance:**
    * We operate the platform in compliance with SOC II and ISO 27001 standards, encompassing a wide range of security measures, including vulnerability management, security incident management, DDoS protection, intrusion detection, and encryption of data both in transit and at rest.
* **Business Continuity and Resilience:**
    * {{< product-c8y-iot >}} adheres to ISO 22301 standards for business continuity management (BCM), ensuring resilience against zone outages with zone redundancy.
    * Regular backups are maintained with a 30-day retention period, a Recovery Time Objective (RTO) of 12 hours, and a Recovery Point Objective (RPO) of 24 hours.
    * Cumulocity conducts regular drills to validate its disaster recovery procedures.
* **API Compatibility Management:** The platform maintains compatibility of APIs as outlined in its[ Compatibility Policy](/concepts/compatibility-policy/). Transport protocols are managed in accordance with this policy, ensuring consistent and reliable API interactions.
* **Data Ownership and Portability:** As the data processor, {{< product-c8y-iot >}} ensures that customers retain full ownership of their data. Customers can export their data at any time using the provided APIs, ensuring control and flexibility over their information.
* **Continuous Maintenance and Upgrades:** The platform undergoes regular maintenance and upgrades to ensure optimal performance and security. These upgrades happen transparently and without involving Customers.

For some customers with legacy service agreements, these features may differ in accordance with the terms of their original agreements.

### Customer Responsibilities

As a valued customer of the {{< product-c8y-iot >}} platform, we request your acknowledgment of the following responsibilities to ensure the continued security, performance, and efficiency of the service:

##### **Security Management**

* **Device Security:** While the {{< product-c8y-iot >}} platform provides robust security measures, the customer is responsible for the security of devices and device credentials. Cumulocity cannot be held liable for any leaked credentials from devices. The customer acknowledges that communication protocols and ciphers may require periodic updates to address evolving security threats. This may necessitate updates to the devices themselves.
* **End User Access Security:** To protect the integrity of the cloud platform, customers are encouraged to educate their users on secure usage practices, such as implementing multi-factor authentication. The customer is responsible for managing user credentials, and Cumulocity cannot be held responsible for any compromised credentials.
* **Certificate Management:** The customer is responsible for monitoring the expiration of their certificates. Expired certificates can result in service unavailability for the associated clients, and the customer expressly acknowledges this responsibility.
* **Library Updates:** Customers utilizing Cumulocity-provided libraries to build their own applications are responsible for ensuring these libraries are kept up to date with respect to security. In the event of a security vulnerability or other critical update, it is the customer's responsibility to implement the necessary updates in their applications to maintain the integrity and security of their systems. Cumulocity cannot be held liable for any security issues arising from outdated libraries in customer applications.

##### **Capacity Management**

* **Scalability Considerations:** While the {{< product-c8y-iot >}} platform is designed to be scalable, it may not be able to accommodate sudden, extreme capacity demands (e.g., all devices attempting to connect simultaneously after a connectivity outage, or all devices being upgraded at the same time). The customer acknowledges that such requests may be delayed or declined by the platform to maintain overall service stability. The customer is advised to implement an [exponential backoff strategy](https://en.wikipedia.org/wiki/Exponential_backoff).
* **Soft Limits:** The customer acknowledges the existence of "soft limits" as documented in the {{< product-c8y-iot >}} documentation [here](/concepts/limits/). These limits are not strictly enforced but exceeding them may lead to a reduced service level, and the customer is advised to operate within these guidelines.
* **Data Retention Management:** Data storage is included as part of the customer’s subscription. The customer is responsible for configuring appropriate data retention rules within the {{< product-c8y-iot >}} Administration application, balancing their specific use case requirements with budgetary considerations.

For details on non-permitted uses of {{< product-c8y-iot >}}, please refer to the {{< product-c8y-iot >}} Terms of Service.

### Limitations and Constraints

In the interest of transparency and to ensure a mutual understanding of the service capabilities, we kindly ask customers to acknowledge the following limitations and constraints of the {{< product-c8y-iot >}} platform:

* **Hard Quotas:** The customer acknowledges the existence of hard quotas as detailed in the {{< product-c8y-iot >}} documentation [here](/concepts/limits/). These quotas define maximum thresholds that the platform can support and are essential for maintaining overall system stability.
* **Shared Environment Considerations:** Customers not utilizing {{< product-c8y-iot >}} Dedicated plans should be aware that their tenant is hosted within a shared environment. As a result, response times may occasionally vary due to shared resource usage, and the customer acknowledges this potential inconsistency. Furthermore, infrastructure-level information such as HTTP or MQTT access logs cannot be shared with Customers.
* **Data Retention and Storage Costs:** The customer acknowledges that reducing data retention periods does not immediately lead to the reclamation of storage space or a reduction in storage costs due to technical processing requirements.
* **Distributed IoT System:** The customer acknowledges that IoT systems, by nature, are distributed and Internet-based:
    * **Connectivity Reliability:** Connectivity may occasionally fail. To ensure reliable communication, customer devices and clients should implement appropriate reconnect or retry strategies. Singular connection drops or temporary failures are considered normal and do not constitute a service failure. Cumulocity is committed to working with the customer to troubleshoot and resolve consistent and repeating communication issues.
    * **Third-Party Connectivity Services:** Connectivity may involve third-party services such as LPWAN or mobile network operators. The customer acknowledges that while Cumulocity facilitates the transfer of data through these services, it does not operate, monitor, or troubleshoot these third-party networks. Connectivity between the customer's devices and {{< product-c8y-iot >}} cloud service is in the sole responsibility of the customer.
* **Data Recovery**: While Cumulocity maintains backups of data for its own business continuity management, disaster recovery on behalf of Customers (e.g., after accidental data deletion by Customers) is a separate service. Customer expressly acknowledges the backup retention period and RPO outline above.

### Service Availability

Cumulocity is committed to providing reliable service. The specific service availability targets are as follows:

* **Production Environments:** 99.90% availability
* **Preproduction Environments:** 95.00% availability

Service availability for {{< product-c8y-iot >}} is calculated as follows:

* The platform service consists of the service components "API Services" (REST) and "MQTT Services" as shown on the status page of the respective platform.
* The service components are regularly tested for availability and performance by simulating typical usage.
* The service availability of the service component for a month is the share of minutes the service component is available, excluding planned downtimes and emergency maintenance.
* The overall service availability is the average of the service components.

For non-production instances, the following are also excluded from the availability calculation:

(a) **Planned and Announced Maintenance Tasks:** These may include, but are not limited to:

* Installation and upgrades of the entire platform.
* Deployment of new components.
* Upgrades to underlying third-party components (e.g., Kubernetes, Database systems).

(b) **Third-Party Platform Issues:** Any issues with the underlying computing platforms (e.g., Azure, AWS) that result in service unavailability are excluded from the availability calculations.

(c) **Events of force majeure**.

The status pages showing the service availability results are at

* [status.cumulocity.com](http://status.cumulocity.com) for US and EMEA instances.
* [cumulocity-apj.statuspage.io](http://cumulocity-apj.statuspage.io) for APJ instances.
* a dedicated location for {{< product-c8y-iot >}} Dedicated instances.

Planned and unplanned downtimes for the Cloud Services are communicated via the {{< product-c8y-iot >}} status page, which will also provide an expected time for the system’s return to availability. Please note that the availability of the status page itself is not included in the Cloud Service availability calculations.

### Support and Maintenance

#### **Support**

* **Customer Support:** Support is provided in accordance with the customer’s selected support plan (Starter, Standard, or Enterprise Active Support), as detailed in a separate support agreement.
* **Pre-Production Environments:** For pre-production environments, Starter-level support is generally provided, with support tickets handled at standard priority.

#### **Maintenance**

* **Ongoing Maintenance and Upgrades:** The {{< product-c8y-iot >}} platform is continuously maintained and upgraded to ensure optimal performance and security.
* **Seamless Upgrades:** This maintenance process is designed to be seamless and generally invisible to customers. The timing and content of upgrades are at the discretion of Cumulocity.
* **Upgrade Information:** Details about scheduled upgrade times are available on the platform’s status pages as outlined above, while information about the specific changes included in each upgrade can be found in the [change logs](/change-logs/) within the customer documentation.
* **Regulated Environments:** For customers operating in regulated environments, an optional annual maintenance schedule is available to meet specific compliance requirements.

### Acceptance

By using the Services provided by Cumulocity, the Customer agrees to adhere to the terms outlined in this SLA.
