---
weight: 30
title: Measurement collection
layout: redirect
---

### MeasurementCollection [application/vnd.com.nsn.cumulocity.measurementCollection+json]

|Name|Type|Occurs|Description|
|:---|:---|:-----|:----------|
|self|string|1|A URL linking to this resource.|
|measurements|Measurement|0..n|List of measurements, see below.|
|statistics|PagingStatistics|1|Information about paging statistics.|
|prev|string|0..1|A URI linking to a potential previous page of measurements.|
|next|string|0..1|A URI linking to a potential next page of measurements.|

### GET - Collection of measurements

**Response body:** MeasurementCollection

**Required role:** ROLE\_MEASUREMENT\_READ

#### Example request - Retrieve energy readings

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}|

```http
 GET <<url>>/measurement/measurements
```
#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.measurementcollection+json;ver=...

```http
HTTP/1.1
200 OK

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

In case of executing [range queries](https://en.wikipedia.org/wiki/Range_query_(database)) on measurements API, like query by dateFrom and dateTo, the oldest measurements are returned first. It is possible to change the order by adding the query parameter "revert=true" to the request URL.
In many use cases it is required to get the latest measurement sent from the device. This can be accomplished by passing "revert" param together with "dateFrom" and "dateTo" params to sort the outcome by date, e.g. pass dateFrom from a year ago, and dateTo from the feature.

Note that the `source` parameter is optional in the <kbd>/measurement/measurements</kbd> endpoint. If a user doesn't have access to certain devices, the results can be empty. However, in the <kbd>/measurement/measurements/series</kbd> endpoint (see below) the `source` parameter is required, so the access validation is done before any post filtering operation.

### GET - Retrieve all or some series of measurements

This endpoint returns a list of series (all or only those matching specified names; a series is any fragment in measurement that contains a "value" property) and their values within given period. Mandatory params are: dateFrom, dateTo and source. No paging is used here.
It is possible to fetch aggregated results by passing additional param: aggregationType (DAILY, HOURLY, MINUTELY). If no aggregation param is specified, the result contains no more than 5000 values.

>**Important**: For the aggregation to be done correctly the mechanism expects a device to always use the same time zone when it sends dates.

**Required role: ROLE\_MEASUREMENT\_READ**

#### Example request - Retrieve all series

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
 GET <<url>>/measurement/measurements/series?source=<<sourceID>>&dateFrom=<<startDate>>&dateTo=<<endDate>>
```
#### Example response

HEADERS||
|:---|:---|
|Content-Type|application/json

```http
HTTP/1.1
200 OK

{
    "values": {...},
    "series": [...],
    "truncated": false
}

```

Series can be filtered by providing additional "series" param with full name of a series (measurement type and series name).
You can specify more series to filter by adding more "series" param occurrences, e.g.: ...series=c8y_AccelerationMeasurement.acceleration&series=c8y_SpeedMeasurement.velocity...
Because of this use case, dots must not be used in neither measurement fragment nor series.

#### Example request - Retrieve only specific series

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
GET <<url>>/measurement/measurements/series?series=c8y_AccelerationMeasurement.acceleration&source=<<sourceID>>&dateFrom=<<startDate>>&dateTo=<<endDate>>
```
#### Example response

HEADERS||
|:---|:---|
|Content-Type|application/json

```http
HTTP/1.1
200 OK

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

The flag "truncated" indicates whether there were more than 5000 values and if the final result was truncated.


### POST - Create a new measurement

**Request body:** application/vnd.com.nsn.cumulocity.measurement+json;ver=...

**Response body:** application/vnd.com.nsn.cumulocity.measurement+json;ver=...

**Required role:** ROLE\_MEASUREMENT\_ADMIN or owner of source object

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Content-Type|application/vnd.com.nsn.cumulocity.measurement+json
|Accept|application/vnd.com.nsn.cumulocity.measurement+json

```http
POST <<url>>/measurement/measurements

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

#### Example response

HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.measurement+json;ver=...

```http
HTTP/1.1
201 Created

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
For POST requests, the source parameter is required to have only an `id`.

The `id` of the new measurement is generated by the server and returned in the response to the POST operation.

> **Important:** Property names used for fragment and series must not contain whitespaces and the special characters `. , * [ ] ( ) @ $`. This is required to ensure a correct processing and visualization of measurement series on UI graphs.
> Also see [Cumulocity IoT's domain model > Inventory > Naming conventions of fragments](/concepts/domain-model/#naming-conventions-of-fragments) in the Concepts guide.

### POST - Create multiple measurements

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}
|Content-Type|application/vnd.com.nsn.cumulocity.measurementcollection+json
|Accept|application/vnd.com.nsn.cumulocity.measurementcollection+json

```http
POST <<url>>/measurement/measurements

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
#### Example response:

HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.measurementcollection+json;ver=...

```http
HTTP/1.1
201 Created

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
### DELETE - Delete a measurement collection

The DELETE method allows for deletion of measurement collections. Applicable query parameters are:

Parameter | Type | Description | Example
--|--|--|--
dateFrom |  string &lt;date-time> | Start date or date and time of the measurement. | dateFrom=2020-03-01
dateTo |  string &lt;date-time> | End date or date and time of the measurement. | dateFrom=2020-03-30
fragmentType  | string  | A characteristic which identifies a managed object or event, e.g. geolocation, electricity sensor, relay state. | fragmentType=c8y_IsDevice
source  | string  | The managed object ID to which the measurement is associated. |  source=251994
type | string  | The type of measurement to search for. | type=c8y_Water


**Request body:** N/A

**Response body:** N/A

**Required role:** ROLE\_MEASUREMENT\_ADMIN

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
 DELETE: <<url>>/measurement/measurements...
```

#### Example response

```http
HTTP/1.1  
204 NO CONTENT
```

> **Info:** DELETE requests are not synchronous. The response could be returned before the delete request has been completed. This may happen especially when the deleted measurement has a lot of associated data. After sending the request, the platform starts deleting the associated data in an asynchronous way. Finally, the requested measurement is deleted after all associated data has been deleted.
