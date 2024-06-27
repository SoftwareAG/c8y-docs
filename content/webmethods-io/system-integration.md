---
title: System integration
layout: bundle
section:
  - app_enablement
weight: 10
aliases:
  - /webmethods-io/webmethods-io/
---

This section guides you to available options and resources for integrating cloud applications and services using various cloud integration platforms. This enables you to automate tasks by connecting cloud applications and services (such as Marketo, Salesforce, Evernote, and Gmail) without writing any code.

The choice of the system integration option depends on the organization's specific needs, technical expertise, and integration requirements. Solutions like Zapier offer flexibility and scalability simplifying integration for non-developers, while self-hosted solutions like n8n.io provide greater control and customization.  

By carefully evaluating these options, organizations can select the integration solution that best aligns with their unique requirements, empowering them to unlock the full potential of {{< product-c8y-iot >}} and drive business transformation.

Let's explore a few prominent options:

### Microservices Approach: Developer-Friendly Integration

For developers seeking a versatile and flexible integration solution, {{< product-c8y-iot >}}'s microservices approach offers a developer-friendly solution. This method involves creating microservices that connect {{< product-c8y-iot >}} to external systems, allowing for customized data exchange and automation. While requiring initial development effort, the microservices approach provides greater control and adaptability. The option is utilized by many customers for integrating with CRM, ERPs, and FSM tools.

This article [https://tech.forums.softwareag.com/t/jump-start-your-next-cumulocity-microservice-project-in-java/257641](https://tech.forums.softwareag.com/t/jump-start-your-next-cumulocity-microservice-project-in-java/257641) provides a guide to setting up a {{< product-c8y-iot >}} microservice project in Java, and a corresponding webinar can be found on [YouTube](https://www.youtube.com/watch?v=2j21ULZbtlg).

### Zapier

One of the workflow automation tools we explored is Zapier, which offers integrations for more than 6,500 applications, allowing you to easily move data between them and automate repetitive tasks.

This [TechForum article](https://tech.forums.softwareag.com/t/cumulocity-iot-google-spreadsheet-no-code-integration-guide/287731) provides an example in which a device is registered on {{< product-c8y-iot >}}, and it sends battery values every 5 seconds to {{< product-c8y-iot >}}. We created an automated way to export all new measurements to a spreadsheet stored on Google Workspace for further analysis.

### n8n.io

n8n.io is a free and source-available fair-code licensed workflow automation tool, allowing you to easily automate tasks across different services. n8n is an extendable workflow automation tool with a fair-code distribution model. It always has visible source code, is available for self-hosting, and enables you to add your custom functions, logic, and apps. The node-based approach of n8n makes it highly versatile, allowing you to connect anything to everything

The article https://tech.forums.softwareag.com/t/data-integration-options-with-cumulocity-iot/263884 showcases a multi-step automation involving a device registered on Cumulocity IoT which generates alarms of varying severities based on specific conditions. The user intends to automate the creation of a Zendesk ticket for each alarm and, for alarms with CRITICAL severity, trigger an SMS notification to a designated mobile number using Twilio .


Make.com, formerly known as Integromat, is another automation software we explored. It allows anyone to design, build, and automate anything—from tasks and workflows to apps and systems—without the need for coding skills.

 
