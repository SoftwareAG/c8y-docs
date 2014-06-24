---
order: 40
title: Measurements
layout: default
---

The measurements interface consists of three parts:

-   The *measurement API* resource returns URIs and URI templates to collections of measurements, so that measurements can be queried according to various filter criteria.
-   The *measurement collection* resource retrieves measurements and enables creating new measurements.
-   The *measurement* resource represents individual measurements that can be queried and deleted.

# Measurement API

## MeasurementAPI [application/vnd.com.nsn.cumulocity.measurementApi+json

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URL
1
Link to this resource.</td>
<td align="left">measurements
Measurement Collection
1
Collection of all measurements.</td>
<td align="left">measurementsForSource
MeasurementCollection URI template
1
Read-only collection of all measurements coming from a particular source object (placeholder &lt;&lt;source&gt;&gt;).</td>
<td align="left">measurementsForDate
MeasurementCollection URI template
1
Read-only collection of all measurements from a particular period (placeholder &lt;&lt;dateFrom&gt;&gt; and &lt;&lt;dateTo&gt;&gt;).</td>
</tr>
</tbody>
</table>

## GET the Measurement API resource

Response body: application/vnd.com.nsn.cumulocity.measurementApi+json
 Require role: ROLE\_MEASUREMENT\_READ

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

# Measurement collection

## MeasurementCollection [application/vnd.com.nsn.cumulocity.measurementCollection+json]

<table>
<colgroup>
<col width="25%" />
<col width="25%" />
<col width="25%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">self
URL
1
Link to this resource.</td>
<td align="left">measurements
Measurement
0..n
List of measurements, see below.</td>
<td align="left">statistics
PagingStatistics
1
Information about paging statistics.</td>
<td align="left">prev
URI
0..1
Link to a potential previous page of measurements.</td>
</tr>
</tbody>
</table>

## GET a measurement collection

Response body: MeasurementCollection
  
Required role: ROLE\_MEASUREMENT\_READ

Example request: Retrieve energy readings.

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

## POST - create a new measurement

Request body: Measurement
 Response body: Measurement (when accept header is not provided, empty response body is returned)
  
Required role: ROLE\_MEASUREMENT\_ADMIN or owner of source object

Example Request:

    POST ...
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

# Measurement

## Measurement [application/vnd.com.nsn.cumulocity.measurement+json]

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description
PUT/POST</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">id
String
1
Uniquely identifies a measurement.
No</td>
<td align="left">self
URI
1
Link to this resource.
No</td>
<td align="left">time
String
1
Time of the measurement.
Mandatory</td>
<td align="left">type
String
1
The most specific type of this entire measurement.
Mandatory</td>
<td align="left">source
ManagedObject
1
The ManagedObject which is the source of this measurement, as object containing the properties &quot;id&quot; and &quot;self&quot;.
Mandatory</td>
</tr>
</tbody>
</table>

Each measurement fragment is an object containing the actual measurements as properties. The property name represents the name of the measurement, the property value is structured as follows:

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name
Type
Occurs
Description
PUT/POST</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left">value
Number
1
The value of the individual measurement.
Mandatory</td>
<td align="left">unit
String
1
The unit of the measurement, such as &quot;Wh&quot; or &quot;C&quot;.
Optional</td>
</tr>
</tbody>
</table>

## GET a representation of a Measurement

Response body: Measurement
  
Required role: ROLE\_MEASUREMENT\_READ

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

## DELETE a Measurement

Request Body: N/A.
 Response Message Body: N/A.
  
Required role: ROLE\_MEASUREMENT\_ADMIN or owner of source object

Example Request: Delete a measurement

    DELETE [URL to the resource]
     Host: [hostname]
     Authorization: Basic xxxxxxxxxxxxxxxxxxx

Example Response:

    HTTP/1.1  204 NO CONTENT
