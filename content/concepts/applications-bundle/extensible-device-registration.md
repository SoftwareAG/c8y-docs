---
weight: 50
title: Extensible device registration
layout: redirect
---
### Introduction

Due to growing number of IoT protocols, Extensible Device Registration enables possibility 
to easily add own device protocol to device registration process.

The over all concept is to extend the device registration using a metadata based approach. Microservices and agents that implement current device registrations can add custom forms to the device registration wizard by providing a simple description of the required registration attributes. 

The metadata will be used by the UI to render a corresponding device registration wizard. There are two possible ways to extend the UI:
- with [single device registration](/concepts/applications/#single-device-registration) form
- and [bulk device registration](/concepts/applications/#bulk-device-registration) form

{{< c8y-admon-info >}}
As a precondition, [application extension](/concepts/applications/#extension-enabling) have to be defined and the microservice must implement the predefined endpoints used for getting device registration metadata and creating the device.
{{< /c8y-admon-info >}}

### The extension drivers 
Device registration rely on the general single or bulk registration of the platform. However, some of these integrations suffer from major usability or technical issues, because the generic registration workflow can’t be customized to the needs of these protocols.

- Input Validation is not possible: As the generic bulk registration directly creates devices in the platform, it is not possible to perform validation of extra registration attributes.
- Unused data in bulk registration process: Some information is required to be present in the CSV to satisfy the general bulk registration constraints, but the data may not be needed by the microservice at all.

All in all, this is both error prone and not very user friendly!

### Extension strength

#### Extensibility of the Device Registration wizard
The ease of own forms addition to the device registration wizard in the device management UI. The values to be entered in the user-specified forms can be freely customized by the device integration developers

#### Support for bulk registration using custom CSV
The user can also customize the bulk registration and hence implement support for CSV files of a different format.

#### No UI code changes required
Users do not need to write UI Angular code to keep the amount of integration work as little as possible.

#### Plugin-based approach
The device integration developer only needs to subscribe a microservice that provides an own wizard, and the wizard shows up automatically.


### Extension Enabling

First step in order to extend Device Registration flow is to define extension in the application representation.

{{< c8y-admon-info >}}
Below `extensions` fragment can be placed either as root level or inside `manifest` fragment of the application representation.
{{< /c8y-admon-info >}}

There are two types of extensions:
 - Single device registrations type: `extensibleDeviceRegistration`, e.g.:

```json
"extensions": [
  {
    "name": "<extension name>",
    "description": "<description>",
    "type": "extensibleDeviceRegistration"
  },
  ...
]
```
- Bulk device registration type: `extensibleBulkDeviceRegistration`, e.g.:
```json
"extensions": [
  {
    "name": "<extension name>",
    "description": "<description>",
    "type": "extensibleBulkDeviceRegistration"
  },
  ...
]
```

### Single Device Registration

After enabling `extensibleDeviceRegistration` extension type, Device management > Devices > `Register Device` menu is being extended with entry named after extension `name` property:
![Select guide](/images/concepts-guide/extensible-device-registration/register-device-menu-with-extensible-device-reg.png)

From now on everything will be rendered based in data provided via custom microservice. Added menu entry will open modal which is going to fetch the form definition using following endpoint:

{{< c8y-admon-info >}}
The context of the microservice, which is taken from application definition:
```
{
  "contextPath": "<relative path>",
  "availability": "MARKET",
  "type": "MICROSERVICE",
  "name": "<agent name>",
  ...
}
```
{{< /c8y-admon-info >}}

`GET /service/<contextPath>/deviceRegistration/metadata&lang=<user-language>`

{{< c8y-admon-info >}}
Make use of the `lang` query paramerer in your microservice to respond with the already translated JSON Schema metadata.<br> See also [Limitations](/concepts/applications/#limitations).
{{< /c8y-admon-info >}}

Example metadata definition:
```json
{
    "c8y_DeviceRegistration": {
      "title": "Example extensible registration",
      "description": "The required and optional properties to register and setup devices",
        "pages": [
            {
                "$schema": "https://json-schema.org/draft/2020-12/schema",
                "type": "object",
                "title": "Mandatory settings",
                "properties": {
                    "security": {
                      "default": "NO_SEC",
                      "type": "string",
                      "title": "Security mode",
                      "enum": [
                        "NO_SEC",
                        "SEC"
                      ]
                    },
                    "imei": {
                        "examples": [
                            "012345678901234"
                        ],
                        "type": "string",
                        "title": "Imei number"
                    }
                },
                "required": [
                    "imei",
                    "security"
                ]
            },
            {...}
        ]
    }
}
```
The important part is `pages` array which contains steps of the wizard that the modal is going to render accordingly to Json Schema definition: [https://json-schema.org/](https://json-schema.org/).
JSON Schema is a generic-purpose language to specify data, along with constraints and data types and simple validations.

As a result of following wizard will be displayed:
![Select guide](/images/concepts-guide/extensible-device-registration/extensible-single-device-reg.png)

In the final step all data collected via the wizard will be sent back to the microservice using following rest endpoint:

`POST /service/<contextPath>/deviceRegistration`

```json
{
  "imei": "012345678901234",
  "security": "NO_SEC",
  ...
}
```

The form is able to send anything defined via JSON Schema standard and the microservis which provides the form definition is responsible to properly handle submitted data.

#### API Specification

The device integration microservices have to implement following REST endpoints:


```
GET /service/<contextPath>/deviceRegistration/metadata?lang=<user-language>
Accept: application/json
```
Returns the metadata in the vocabulary of JSON Schema.


```
POST /service/<contextPath>/deviceRegistration
Content-type: application/json
```

Creates a single device based on the collected data. Sends application/json with key-value pairs.

#### Single Device Registration flow diagram
![Single diagram](/images/concepts-guide/extensible-device-registration/single-diagram.png)


### Bulk Device Registration

The key functionality required for many device integrations is the ability to register many devices at the same time. Currently, all protocols have to rely on the bulk-registration mechanism of the platform, which often either requires too many fields or requires custom fields to be added. The latter ones can however so far not be validated, as the core directly creates devices -- and microservices and agents have no control over the properties being written to the managed objects.

After enabling `extensibleBulkDeviceRegistration` extension type, Device management > Devices > Registration > Register device > `Bulk device registration` modal is being displayed with extended wizard entry after extension `name` property:
![Select guide](/images/concepts-guide/extensible-device-registration/register-device-menu-with-extensible-device-reg.png)

Additionally, the microservice is providing title of the wizard step and example bulk file(s):
```json
{
  "c8y_DeviceRegistration": {
    "title": "<title>",
    "description": "<description>",
    "bulk": {
      "title": "<bulk form title>",
      "exampleFileUrls": [{
        "title": "<example title>",
        "description": "<example description>",
        "url": "<publicly-reachable-URL>"
      }]
    }
  }
}
```

As a result of following wizard will be displayed:
![Select guide](/images/concepts-guide/extensible-device-registration/extensible-bulk-device-reg.png)

#### API Specification

The device integration microservices have to implement following REST endpoints:

```
GET /service/<contextPath>/deviceRegistration/metadata?lang=<user-language>
Accept: application/json
```

Returns the metadata in the vocabulary of JSON Schema.

```
POST /service/<contextPath>/deviceRegistration/bulk`
Content-Type: multipart/form-data; boundary=boundary

--boundary
Content-Disposition: form-data; name="file"; filename="<input csv file>"
Content-Type: text/csv

--boundary--
```

Sends multipart form-data of csv file type.


#### Bulk flow diagram
![Bulk diagram](/images/concepts-guide/extensible-device-registration/bulk-diagram-sync.png)


### Limitations

-   The concept does not allow the microservice to hook into deregistrations/decommissioning of a device: 
    - Any device integration microservice has to check if a device was deleted, for example to perform garbage collection.
- Interactive steps (like “Bluetooth Coupling”) can not be implemented as of now: The reason here is that the concept assumes only static properties are required for a device registration, not a sort of process that requires user interactions
    - In theory, the meta-data based approach can easily be extended in a way that the JSON used to render the form is not static, but dynamically generated by the microservice. For example, you could specify a “page” that draws the next specification dynamically from an endpoint after posting all given user inputs there
    - We step back from such a solution from now, because it complicates the data model and the requirements to be fulfilled by the microservice.
- No custom validations in the UI besides input validations by the JSON Schema vocabulary
- No custom styling possible
- Internationalization is not handled by the UI. As microservice developer it is your responsibility to provide already translated JSON Schema metadata



