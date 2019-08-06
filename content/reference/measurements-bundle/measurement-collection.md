---
weight: 30
title: Measurement collection
layout: redirect
---

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
```http
 GET /measurement/measurements
 Host: ...
 Authorization: Basic ...
 Accept: application/vnd.com.nsn.cumulocity.measurementCollection+json;ver=...
```
Example response:
```http
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
```

In case of executing range queries on measurements API, like query by dateFrom and dateTo, the oldest measurements are returned first. It is possible to change the order by adding query parameter "revert=true" to the request URL.
In many use cases it is needed to get the latest measurement sent from the device. This can be accomplished by passing "revert" param together with "dateFrom" and "dateTo" params to sort the outcome by date, e.g. pass dateFrom from a year ago, and dateTo from the feature.

### GET - retrieve all or some series of measurements

This endpoint returns a list of series (all or only those matching specified names; a series is any fragment in measurement that contains "value" property) and their values within given period. Mandatory params are: dateFrom, dateTo and source. No paging is used here.
It is possible to fetch aggregated results by passing additional param: aggregationType (DAILY, HOURLY, MINUTELY). If no aggregation param is specified, the result contains no more than 5000 values.
Important: for the aggregation to be done correctly the mechanism expects a device to always use the same time zone when it sends dates.

Required role: ROLE\_MEASUREMENT\_READ

Example request: retrieve all series.
```http
 GET /measurement/measurements/series...
 Authorization: Basic ...
 Accept: application/json
```
Example response:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: ...

```

Series can be filtered by providing additional "series" param with full name of a series (measurement type and series name).
You can specify more series to filter by adding more "series" param occurrences, e.g.: ...series=c8y_AccelerationMeasurement.acceleration&series=c8y_SpeedMeasurement.velocity...
Because of this use case, dots must not be used in neither measurement fragment nor series.

Example request: retrieve only specific series.
```http
 GET /measurement/measurements/series?series=c8y_AccelerationMeasurement.acceleration&dateFrom=...
 Authorization: Basic ...
 Accept: application/json
```
Example response:
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: ...
{
 "values": {
     "2014-12-04T17:33:01.538+01:00": [
         {
          "min": 13.37,
          "max": 13.37
         }],
     "2014-12-04T17:34:01.774+01:00": [
         {
          "min": 10.2,
          "max": 10.2
         }]
 },
 "series": [
         {
          "unit": "m/s2",
          "name": "acceleration",
          "type": "c8y_AccelerationMeasurement"
         }],
 "truncated": false
}
```
Each key in "values" object is a date taken from measurement and it contains a list of min and max pairs. Each pair corresponds to single series definition in "series" object. If there is no aggregation used, min = max in every pair.

Flag "truncated" indicates whether there were more than 5000 values and if the final result was truncated.


### POST - create a new measurement

Request body: Measurement

Response body: Measurement

Required role: ROLE\_MEASUREMENT\_ADMIN or owner of source object

Example Request:
```http
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
```
Example response:
```http
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
```
For POST requests, the source parameter is required to have only an id.

The "id" of the new measurement is generated by the server and returned in the response to the POST operation.

Please note that for correct visualization of measurement series on UI graphs, property names used for fragment and serie name should not contain whitespaces and special characters like ```[],*.```.

### POST - create multiple measurements

```http
POST /measurement/measurements
Host: ...
Authorization: Basic ...
Content-Length: ...
Content-Type: application/vnd.com.nsn.cumulocity.measurementCollection+json;ver=...
{
"measurements": [
    {
     "c8y_SpeedMeasurement": {
     	"speed": { 
     		"value": 25,
     		"unit": "km/h" }
            },
     "time":"2013-06-22T17:03:14.000+02:00", 
     "source": {
     	"id":"10200" }, 
     "type": "c8y_SpeedMeasurement"
    },
    {
     "c8y_SpeedMeasurement": {
   	 	"speed": { 
        	"value": 22,
            "unit": "km/h" }
            },
     "time":"2013-06-22T17:05:14.000+02:00", 
     "source": {
     	"id":"10200" }, 
     "type": "c8y_SpeedMeasurement"
    }
]
}
```
Example response:
```http
HTTP/1.1 201 Created
Content-Type: application/vnd.com.nsn.cumulocity.measurementCollection+json;ver=...
Content-Length: ...
{
 "measurements": [
    {
     "time": "2013-06-22T17:03:14.000+02:00",
     "id": "832254760",
     "self": "<<URL of new measurement>>",
     "source": {"id": "10200","self": "..."},
     "type": "c8y_SpeedMeasurement",
     "c8y_SpeedMeasurement": {
     	"speed": {
        	"unit": "km/h",
            "value": 25
            }
        }
    },
    {
     "time": "2013-06-22T17:05:14.000+02:00",
     "id": "832254761",
     "self": "<<URL of new measurement>>",
     "source": {"id": "10200","self": "..."},
     "type": "c8y_SpeedMeasurement",
     "c8y_SpeedMeasurement": {
     	"speed": {
        	"unit": "km/h",
            "value": 22
            }
        }
    }
]
}
```
### DELETE - delete a measurement collection

The DELETE method allows for deletion of measurement collections. Acceptable query parameters are:

|Name|Type|Description|
|:---|:---|:----------|
|fragmentType|String|Fragment name from measurement.|
|source|String|Source device id.|
|dateFrom|DateTime|Start date or date and time of measurement occurrence.|
|dateTo|DateTime|End date or date and time of measurement occurrence.|
|type|String|Measurement type.|

Request body: N/A

Response body: N/A

Required role: ROLE\_MEASUREMENT\_ADMIN

Example request:
```http
 DELETE: /measurement/measurements....
 Host: ...
 Authorization: Basic ...
```
Example response:
```http
HTTP/1.1  204 NO CONTENT
```

> **Important**: Note that calling this endpoint without any parameter or passing not supported parameters will result in deleting all available measurements.
