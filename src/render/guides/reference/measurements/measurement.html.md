---
order: 40
title: Measurement
layout: redirect
---

### Measurement [application/vnd.com.nsn.cumulocity.measurement+json]

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|id|String|1|Uniquely identifies a measurement.|No|
|self|URI|1|Link to this resource.|No|
|time|String|1|Time of the measurement.|Mandatory|
|type|String|1|The most specific type of this entire measurement.|Mandatory|
|source|ManagedObject|1|The ManagedObject which is the source of this measurement, as object containing the properties "id" and "self".|Mandatory|
|\*|\*|0..n|List of measurement fragments.|Optional|

Each measurement fragment is an object containing the actual measurements as properties. The property name represents the name of the measurement, the property value is structured as follows:

|Name|Type|Occurs|Description|PUT/POST|
|:---|:---|:-----|:----------|:-------|
|value|Number|1|The value of the individual measurement.|Mandatory|
|unit|String|1|The unit of the measurement, such as "Wh" or "C".|Optional|

### GET a representation of a Measurement

Response body: Measurement

Required role: ROLE\_MEASUREMENT\_READ

Example request:

    GET /measurement/measurements/<<measurementId>>
	Host: ...
	Authorization: Basic ...

Example response:

    Content-Type: application/vnd.com.nsn.cumulocity.measurement+json;ver=...
    Content-Length: ...
    {
      "id" : "43",
      "self" : "<<URL of the measurement>>",
      "time" : "2011-09-19T12:03:27.845Z",
      "type" : "KamstrupA220Reading",
      "source" : { "id": "12345", "self": "..." },
      "com_cumulocity_model_energy_measurement_SinglePhaseElectricityMeasurement": {
        "A+:1": { "value": 1234, "unit": "kWh" },
        "A-:1": { "value": 2, "unit": "kWh" }
      },
      "com_cumulocity_msrmts_ThreePhaseReading": {
        "A+:1": { "value": 1234, "unit": "kWh" },
        "A+:2": { "value": 1234, "unit": "kWh" },
        "A+:3": { "value": 1234, "unit": "kWh" }
      }
    }

### DELETE a Measurement

Request Body: N/A.

Response Message Body: N/A.

Required role: ROLE\_MEASUREMENT\_ADMIN or owner of source object

Example Request: Delete a measurement

    DELETE /measurement/measurements/<<measurementID>>
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT