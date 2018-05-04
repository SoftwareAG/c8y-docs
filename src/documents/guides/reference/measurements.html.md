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

## System of units

Note that all GET requests support "X-Cumulocity-System-Of-Units" header which allows to set system of units used in response.
Possible values are "imperial" or "metric".
Every measurement fragment which contains "unit" property will be transformed to use required system of units.

#### Most common conversions:

|Imperial|Metric|
|:-------|:-----|
|m (meter)|ft (foot)|
|km (kilometers)|mi (miles)|
|cm (centimeter)|in (inch)|
|°C (degree Celsius)|°F (degree Fahrenheit)|
|"K (degree Kelvin)|°R (degree Rankin)|
|g (gram)|oz (ounce)|
|kg (kilogram)|lb (pound)|


#### Examples

Example measurement:

    ...
    {
        ....
         "c8y_Temperature": {
             "T": {
                 "unit": "ºC",
                 "value": 2.0791169082
             }
         }
    }
    ...

Example request:

    GET /measurement/measurements?fragmentType=c8y_Temperature&source=663951
    Host: ...
    Authorization: Basic ...
    X-Cumulocity-System-Of-Units: imperial
    
Example response:

    ...
    {
        ....
         "c8y_Temperature": {
            "T": {
                "unit": "°F",
                "value": 35.742410434759904
            }
        }
    }
    ...

## Measurement API

### MeasurementAPI [application/vnd.com.nsn.cumulocity.measurementApi+json

Note, that all GET requests support two similar parameters fragmentType and valueFragmentType. Parameter valueFragmentType should be used instead of fragmentType because works on structured data and filtering via this parameter is lighter than filtering via fragmentType. Additionally parameter valueFragmentType can be used together with valueFragmentSeries.<br/>
Parameters valueFragmentType and valueFragmentSeries allows to query for measurement via fragment and series e.g. If you looking for c8y_TemperatureMeasurement.T you should use query in form &valueFragmentType=c8y_TemperatureMeasurement&valueFragmentSeries=T.<br/>
If you looking for non standard parameter of measurement e.g. without value you must still use parameter fragmentType. If you looking for non standard parameter of measurement e.g. without value you must still use parameter fragmentType. Note that usage of valueFragmentType or pair valueFragmentType and valueFragmentSeries is more preferable then fragmentType.

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|URL|1|Link to this resource.|
|measurements|Measurement Collection|1|Collection of all measurements.|
|measurementsForDate|MeasurementCollection URI template|1|Read-only collection of all measurements from a particular period (placeholder {dateFrom} and {dateTo}).|
|measurementsForDateAndFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and being from a particular period (placeholder {fragmentType}, {dateFrom} and {dateTo}).|
|measurementsForDateAndFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and being from a particular period and type object (placeholder {fragmentType}, {dateFrom}, {dateTo} and {type}).|
|measurementsForDateAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and being from a particular period (placeholder {type}, {dateFrom} and {dateTo}).|
|measurementsForDateAndValueFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and being from a particular period (placeholder {valueFragmentType}, {dateFrom} and {dateTo}).|
|measurementsForDateAndValueFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and being from a particular period and type object (placeholder {valueFragmentType}, {dateFrom}, {dateTo} and {type}).|
|measurementsForDateAndValueFragmentTypeAndValueFragmentSeries|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and fragment series with value and being from a particular period (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo}).|
|measurementsForDateAndValueFragmentTypeAndValueFragmentSeriesAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and fragment series with value and being from a particular period and type object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo} and {type}).|
|measurementsForFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type (placeholder {fragmentType}).|
|measurementsForFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and a particular fragment type(placeholder {type} and {fragmentType}).|
|measurementsForSource|MeasurementCollection URI template|1|Read-only collection of all measurements coming from a particular source object (placeholder {source}).|
|measurementsForSourceAndDate|MeasurementCollection URI template|1|Read-only collection of all measurements from a particular period and from a particular source object (placeholder {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAndDateAndFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and being from a particular period and source object (placeholder {fragmentType}, {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAndDateAndFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and type object and being from a particular period and source object (placeholder {fragmentType}, {dateFrom}, {dateTo}, {type} and {source}).|
|measurementsForSourceAndDateAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and being from a particular period and source object (placeholder {type}, {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAndDateAndValueFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and being from a particular period and source object (placeholder {valueFragmentType}, {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAndDateAndValueFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and type object and being from a particular period and source object (placeholder {valueFragmentType}, {dateFrom}, {dateTo}, {type} and {source}).|
|measurementsForSourceAndDateAndValueFragmentTypeAndValueFragmentSeries|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value and being from a particular period and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAndDateAndValueFragmentTypeAndValueFragmentSeriesAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value and type object and being from a particular period and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo}, {type} and {source}).|
|measurementsForSourceAndFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and coming from a particular source object (placeholder {fragmentType} and {source}).|
|measurementsForSourceAndFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and a particular type and source object (placeholder {fragmentType}, {type} and {source}).|
|measurementsForSourceAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and coming from a particular source object (placeholder {type} and {source}).|
|measurementsForSourceAndValueFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and coming from a particular source object (placeholder {valueFragmentType} and {source}).|
|measurementsForSourceAndValueFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and a particular type and source object (placeholder {valueFragmentType}, {type} and {source}).|
|measurementsForSourceAndValueFragmentTypeAndValueFragmentSeries|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value and coming from a particular source object (placeholder {valueFragmentType}, {valueFragmentSeries} and {source}).|
|measurementsForSourceAndValueFragmentTypeAndValueFragmentSeriesAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value and a particular type and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {type} and {source}).|
|measurementsForType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type (placeholder {type}).|
|measurementsForValueFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value (placeholder {valueFragmentType}).|
|measurementsForValueFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and a particular fragment type with value(placeholder {type} and {valueFragmentType}).|
|measurementsForValueFragmentTypeAndValueFragmentSeries|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value (placeholder {valueFragmentType} and {valueFragmentSeries}).|
|measurementsForValueFragmentTypeAndValueFragmentSeriesAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and a particular fragment type and series with value(placeholder {type}, {valueFragmentType} and {valueFragmentSeries}).|

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
      "measurementsForDate" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}",
      "measurementsForDateAndFragmentType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}",
      "measurementsForDateAndFragmentTypeAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}&type={type}",
      "measurementsForDateAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
      "measurementsForDateAndValueFragmentType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}",
      "measurementsForDateAndValueFragmentTypeAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&type={type}",
      "measurementsForDateAndValueFragmentTypeAndValueFragmentSeries" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}",
      "measurementsForDateAndValueFragmentTypeAndValueFragmentSeriesAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}&type={type}",
      "measurementsForFragmentType" : "<<MeasurementCollection URL>>?fragmentType={fragmentType}",
      "measurementsForFragmentTypeAndType" : "<<MeasurementCollection URL>>?fragmentType={fragmentType}&type={type}",
      "measurementsForSource" : "<<MeasurementCollection URL>>?source={source}",
      "measurementsForSourceAndDate" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}",
      "measurementsForSourceAndDateAndFragmentType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}",
      "measurementsForSourceAndDateAndFragmentTypeAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&fragmentType={fragmentType}&type={type}",
      "measurementsForSourceAndDateAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
      "measurementsForSourceAndDateAndValueFragmentType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}",
      "measurementsForSourceAndDateAndValueFragmentTypeAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&type={type}",
      "measurementsForSourceAndDateAndValueFragmentTypeAndValueFragmentSeries" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}",
      "measurementsForSourceAndDateAndValueFragmentTypeAndValueFragmentSeriesAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}&type={type}",
      "measurementsForSourceAndFragmentType" : "<<MeasurementCollection URL>>?source={source}&fragmentType={fragmentType}",
      "measurementsForSourceAndFragmentTypeAndType" : "<<MeasurementCollection URL>>?source={source}&fragmentType={fragmentType}&type={type}",
      "measurementsForSourceAndType" : "<<MeasurementCollection URL>>?source={source}&type={type}",
      "measurementsForSourceAndValueFragmentType" : "<<MeasurementCollection URL>>?source={source}&valueFragmentType={valueFragmentType}",
      "measurementsForSourceAndValueFragmentTypeAndType" : "<<MeasurementCollection URL>>?source={source}&valueFragmentType={valueFragmentType}&type={type}",
      "measurementsForSourceAndValueFragmentTypeAndValueFragmentSeries" : "<<MeasurementCollection URL>>?source={source}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}",
      "measurementsForSourceAndValueFragmentTypeAndValueFragmentSeriesAndType" : "<<MeasurementCollection URL>>?source={source}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}&type={type}",
      "measurementsForType" : "<<MeasurementCollection URL>>?type={type}",
      "measurementsForValueFragmentType" : "<<MeasurementCollection URL>>?valueFragmentType={valueFragmentType}",
      "measurementsForValueFragmentTypeAndType" : "<<MeasurementCollection URL>>?valueFragmentType={valueFragmentType}&type={type}",
      "measurementsForValueFragmentTypeAndValueFragmentSeries" : "<<MeasurementCollection URL>>?valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}",
      "measurementsForValueFragmentTypeAndValueFragmentSeriesAndType" : "<<MeasurementCollection URL>>?valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}&type={type}"
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

### GET - retrieve all or some series of measurements

This endpoint returns a list of series (all or only those matching specified names; a series is any fragment in measurement that contains "value" property) and their values within given period. Mandatory params are: dateFrom, dateTo and source. No paging is used here.
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

Series can be filtered by providing additional "series" param with full name of a series (measurement type and series name).
You can specify more series to filter by adding more "series" param occurrences, e.g.: ...series=c8y_AccelerationMeasurement.acceleration&series=c8y_SpeedMeasurement.velocity...
Because of this use case, dots must not be used in neither measurement fragment nor series.

Example request: retrieve only specific series.

     GET /measurement/measurements/series?series=c8y_AccelerationMeasurement.acceleration&dateFrom=...
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
             }],
         2014-12-04T17:34:01.774+01:00: [
             {
              min: 10.2,
              max: 10.2
             }]
     },
     series: [
             {
              unit: "m/s2",
              name: "acceleration",
              type: "c8y_AccelerationMeasurement"
             }],
     truncated: false
    }

Each key in "values" object is a date taken from measurement and it contains a list of min and max pairs. Each pair corresponds to single series definition in "series" object. If there is no aggregation used, min = max in every pair.

Flag "truncated" indicates whether there were more than 5000 values and if the final result was truncated.


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

Please note that for correct visualization of measurement series on UI graphs, property names used for fragment and serie name should not contain whitespaces and special characters like ```[],*.```.

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

## Data Streaming 
Measurement collection API allows to fetch the data in form of data stream. The response format stays same but data is transmitted by server directly from database element by element so it can be received in same way.
Using stream json parses like [java json](http://docs.oracle.com/javaee/7/api/javax/json/stream/JsonParser.html) or [javascript json](http://oboejs.com/) parsers we are able to transmit high data volumes in single request. 
To activate streaming you need to send as Accept header `application/json-stream`

Example : 

     GET /measurement/measurements
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx
     Accept application/json-stream

## Other response formats
In order to get measurements in other formats than JSON you can use one of the following supported `Accept` headers:

- `text/csv`,
- `application/vnd.ms-excel`.

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
