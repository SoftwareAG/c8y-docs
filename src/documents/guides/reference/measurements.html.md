---
order: 40
title: Measurements
layout: default
---
The measurements interface consists of three parts:

-   The *measurement API* resource returns URIs and URI templates to collections of measurements, so that measurements can be queried according to various filter criteria.
-   The *measurement collection* resource retrieves measurements and enables creating new measurements.
-   The *measurement* resource represents individual measurements that can be queried and deleted.

> Note that for all PUT/POST requests accept header should be provided, otherwise an empty response body will be returned.

## Measurement API

### MeasurementAPI [application/vnd.com.nsn.cumulocity.measurementApi+json

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|measurements|Measurement Collection|1|Collection of all measurements.|
|measurementsForSource|MeasurementCollection URI template|1|Read-only collection of all measurements coming from a particular source object (placeholder {source}).|
|measurementsForDate|MeasurementCollection URI template|1|Read-only collection of all measurements from a particular period (placeholder {dateFrom} and {dateTo}).|
|measurementsForFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type (placeholder {fragmentType}).|
|measurementsForType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type (placeholder {type}).|
|measurements ForSourceAndDate|MeasurementCollection URI template|1|Read-only collection of all measurements from a particular period and from a particular source object (placeholder {dateFrom}, {dateTo} and {source}).|
|measurements ForSourceAndFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and coming from a particular source object (placeholder {fragmentType} and {source}).|
|measurements ForSourceAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and coming from a particular source object (placeholder {type} and {source}).|
|measurements ForDateAndFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and being from a particular period (placeholder {fragmentType}, {dateFrom} and {dateTo}).|
|measurements ForDateAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and being from a particular period (placeholder {type}, {dateFrom} and {dateTo}).|
|measurements ForFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and a particular fragment type(placeholder {type} and {fragmentType}).|
|measurements ForSourceAndDateAndFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and being from a particular period and source object (placeholder {fragmentType}, {dateFrom}, {dateTo} and {source}).|
|measurements ForSourceAndDateAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and being from a particular period and source object (placeholder {type}, {dateFrom}, {dateTo} and {source}).|
|measurements ForSourceAndFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and a particular type and source object (placeholder {fragmentType}, {type} and {source}).|
|measurements ForDateAndFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and being from a particular period and type object (placeholder {fragmentType}, {dateFrom}, {dateTo} and {type}).|
|measurementsForSource AndDateAndFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and type object and being from a particular period and source object (placeholder {fragmentType}, {dateFrom}, {dateTo}, {type} and {source}).|

### GET the Measurement API resource

Response body: application/vnd.com.nsn.cumulocity.measurementApi+json
 Require role: ROLE\_MEASUREMENT\_READ

Example request:

    GET /measurement
    Host: ...
    Authorization: Basic ...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.measurementApi+json;ver=...
    Content-Length: ...
    {
      "self" : "<<Measurement API URL>>",
      "measurements" : { "self" : "<<MeasurementCollection URL>>" },
      "measurementsForSource" : "<<MeasurementCollection URL>>?source={source}",
      "measurementsForDate" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}",
      "measurementsForFragmentType" : "<<MeasurementCollection URL>>?fragmentType={fragmentType}",
      "measurementsForType" : "<<MeasurementCollection URL>>?type={type}",
      "measurementsForSourceAndDate" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}",
      "measurementsForSourceAndFragmentType" : "<<MeasurementCollection URL>>?source={source}&fragmentType={fragmentType}",
      "measurementsForSourceAndType" : "<<MeasurementCollection URL>>?source={source}&type={type}",
      "measurementsForDateAndFragmentType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}",
      "measurementsForDateAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
      "measurementsForFragmentTypeAndType" : "<<MeasurementCollection URL>>?fragmentType={fragmentType}&type={type}",
      "measurementsForSourceAndDateAndFragmentType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}",
      "measurementsForSourceAndDateAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
      "measurementsForSourceAndFragmentTypeAndType" : "<<MeasurementCollection URL>>?source={source}&fragmentType={fragmentType}&type={type}",
      "measurementsForDateAndFragmentTypeAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}&type={type}",
      "measurementsForSourceAndDateAndFragmentTypeAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}&type={type}"
    }

## Measurement collection

### MeasurementCollection [application/vnd.com.nsn.cumulocity.measurementCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|measurements|Measurement|0..n|List of measurements, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|URI|0..1|Link to a potential previous page of measurements.|
|next|URI|0..1|Link to a potential next page of measurements.|

### GET a collection of measurements

Response body: MeasurementCollection
  
Required role: ROLE\_MEASUREMENT\_READ

Example request: Retrieve energy readings.
	
     GET /measurement/measurements
     Host: ...
     Authorization: Basic ...
     Accept: application/vnd.com.nsn.cumulocity.measurementCollection+json;ver=...

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/vnd.com.nsn.cumulocity.measurementCollection+json;ver=...
    Content-Length: ...
     
    {
      "self":"...",
      "measurements":[
        {
          "id" : "42",
          "self" : "...",
          "time" : "2011-09-06T12:03:27.845Z",
          "type" : "KamstrupA220Reading",
          "source" : { "id": "12345", "self": "..." },
          "com_cumulocity_model_energy_measurement_SinglePhaseElectricityMeasurement": {
            "A+:1": { "value": 123, "unit": "kWh" },
            "A-:1": { "value": 2, "unit": "kWh" }
          },
          "com_cumulocity_model_energy_measurement_ThreePhaseElectricityMeasurement": {
            "A+:1": { "value": 123, "unit": "kWh" },
            "A+:2": { "value": 123, "unit": "kWh" },
            "A+:3": { "value": 123, "unit": "kWh" }
          }
        },
        {
          "id" : "43",
          "self" : "...",
          "time" : "2011-09-19T12:03:27.845Z",
          "type" : "KamstrupA220Reading",
          "source" : { "id": "12345", "self": "..." },
          "com_cumulocity_model_energy_measurement_SinglePhaseElectricityMeasurement": {
            "A+:1": { "value": 1234, "unit": "kWh" },
            "A-:1": { "value": 2, "unit": "kWh" }
          },
          "com_cumulocity_model_energy_measurement_ThreePhaseElectricityMeasurement": {
            "A+:1": { "value": 1234, "unit": "kWh" },
            "A+:2": { "value": 1234, "unit": "kWh" },
            "A+:3": { "value": 1234, "unit": "kWh" }
          }
        }
      ],
      "statistics" : {
        "totalPages" : 2,
        "pageSize" : 5,
        "currentPage : 1
      }
    }

In case of executing range queries on measurements API, like query by dateFrom and dateTo, measurements are returned in order from the last to the latest. It is possible to change the order by adding query parameter "revert=true" to the request URL. 
In many use cases it is needed to get the latest measurement sent from the device. This can be accomplished by passing "revert" param together with "dateFrom" and "dateTo" params to sort the outcome by date, e.g. pass dateFrom from a year ago, and dateTo from the feature.

### GET series from measurements

This endpoint returns all series (any fragment that contains a value is a serie) found in measurements in simplified form. Mandatory params are: dateFrom, dateTo and source. No paging is used here.
It is possible to fetch aggregated results by passing additional param: aggregationType (DAILY, HOURLY, MINUTELY). If no aggregation param is specified, the result contains no more than 5000 values.
Important: for the aggregation to be done correctly the mechanism expects a device to always use the same time zone when it sends dates.
  
Required role: ROLE\_MEASUREMENT\_READ

Example request: retrieve all series.

     GET /measurement/measurements/series...
     Authorization: Basic ...
     Accept: application/json

Example response:

    HTTP/1.1 200 OK
    Content-Type: application/json
    Content-Length: ...

    {
     values: {
         2014-12-04T17:33:01.538+01:00: [
             {
              min: 13.37,
              max: 13.37
             },
             {
              min: 11.37,
              max: 11.37
             }],
         2014-12-04T17:34:01.774+01:00: [
             {
              min: 10.2,
              max: 10.2
             },
             {
              min: 11.37,
              max: 11.37
             }]
     },
     series: [
             {
              unit: "m/s2",
              name: "acceleration",
              type: "c8y_AccelerationMeasurement"
             },
             {
              unit: "m/s",
              name: "velocity",
              type: "c8y_SpeedMeasurement"
             }],
     truncated: false
    }

Each value in values object is a date taken from a measurement and inside that date there is a list of min and max pairs. Each pair corresponds to single serie definition in series object. If there is no aggregation used, min = max in every pair.

"Truncated" flag tells whether there was more than 5000 values and if the final result was truncated.


### POST - create a new measurement

Request body: Measurement

Response body: Measurement
  
Required role: ROLE\_MEASUREMENT\_ADMIN or owner of source object

Example Request:

    POST /measurement/measurements
    Host: ...
    Authorization: Basic ...
    Content-Length: ...
    Content-Type: application/vnd.com.nsn.cumulocity.measurement+json;ver=...
     
    {
      "time" : "2011-09-19T12:03:27.845Z",
      "type" : "KamstrupA220Reading",
      "source" : { "id": "12345" },
      "com_cumulocity_model_energy_measurement_SinglePhaseElectricityMeasurement": {
        "A+:1": { "value": 1234, "unit": "kWh" },
        "A-:1": { "value": 2, "unit": "kWh" }
      },
      "com_cumulocity_model_energy_measurement_ThreePhaseElectricityMeasurement": {
        "A+:1": { "value": 1234, "unit": "kWh" },
        "A+:2": { "value": 1234, "unit": "kWh" },
        "A+:3": { "value": 1234, "unit": "kWh" }
      }
    }

Example response:

    HTTP/1.1 201 Created
    Content-Type: application/vnd.com.nsn.cumulocity.measurement+json;ver=...
    Content-Length: ...
     
    {
      "id" : "43",
      "self" : "<<URL of new measurement>>",
      "time" : "2011-09-19T12:03:27.845Z",
      "type" : "KamstrupA220Reading",
      "source" : { "id": "12345", "self": "..." },
      "com_cumulocity_model_energy_measurement_SinglePhaseElectricityMeasurement": {
        "A+:1": { "value": 1234, "unit": "kWh" },
        "A-:1": { "value": 2, "unit": "kWh" }
      },
      "com_cumulocity_model_energy_measurement_ThreePhaseElectricityMeasurement": {
        "A+:1": { "value": 1234, "unit": "kWh" },
        "A+:2": { "value": 1234, "unit": "kWh" },
        "A+:3": { "value": 1234, "unit": "kWh" }
      }
    }

For POST requests, the source parameter is required to have only an id.

The "id" of the new measurement is generated by the server and returned in the response to the POST operation.

Please note that for correct visualization of measurement series on UI graphs, property names used for fragment and serie name should not contain whitespaces and special characters like [],*.

### DELETE - delete a measurement collection

The DELETE method allows for deletion of measurement collections. Applicable query parameters are equivalent to GET method.

Request body: N/A

Response body: N/A
  
Required role: ROLE\_MEASUREMENT\_ADMIN

Example request:

     DELETE: /measurement/measurements....
     Host: ...
     Authorization: Basic ...
     
Example response:

    HTTP/1.1  204 NO CONTENT

## Measurement

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

## Notifications

The measurement notification API permits to receive updates for all measurements for a specific device.
The basic protocol for receiving notifications is described in the Section "[Real-time notifications](/guides/reference/real-time-notifications)". The URL is

    /cep/realtime

The subscription channel needs to contain the managed object ID of the device or a "*" as placeholder to receive notifications for the measurements of all devices

    /measurements/<<deviceId>>

The response will additionally to the measurement object contain a "realtimeAction" to identify which action resulted in the given object (CREATE, UPDATE or DELETE). In case of a deletion the data will only contain the id of the deleted measurement.

Example Response:

    HTTP/1.1 200 OK 
    Content-Type: application/json
    [
      {
        "channel": "/measurement/12345", 
        "successful": true, 
        "error": "", 
        "data": [{
          "realtimeAction": "CREATE",
          "data": {
            "id": "1",
            "self": "...",
            "source": { 
              "12345"
            },
            "creationTime": "2011-09-06T12:03:27.927+02:00",
            "c8y_TemperatureMeasurement": {
              "T": { 
                "value": 25,
                "unit": "C" 
              }
            },
            "time":"2011-09-06T12:03:17.927+02:00", 
            "type": "TemperatureMeasurement"
          }
        }], 
        "clientId": "Un1q31d3nt1f13r" 
      }
    ]

Required role: ROLE\_MEASUREMENT\_READ
