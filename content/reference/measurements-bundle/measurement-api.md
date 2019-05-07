---
weight: 20
title: Measurement API
layout: redirect
---

### MeasurementAPI [application/vnd.com.nsn.cumulocity.measurementApi+json

|Name|Type|Occurs|Description|
|:---|:---|:---|:----------|
|self|URL|1|Link to this resource.|
|measurements|Measurement Collection|1|Collection of all measurements.|
|measurementsForDate|MeasurementCollection URI template|1|Read-only collection of all measurements from a particular period (placeholder {dateFrom} and {dateTo}).|
|measurementsForDateAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and being from a particular period (placeholder {type}, {dateFrom} and {dateTo}).|
|measurementsForDateAndValueFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and being from a particular period (placeholder {valueFragmentType}, {dateFrom} and {dateTo}).|
|measurementsForDateAndValueFragmentType AndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and being from a particular period and type object (placeholder {valueFragmentType}, {dateFrom}, {dateTo} and {type}).|
|measurementsForDateAndValueFragmentType AndValueFragmentSeries|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and fragment series with value and being from a particular period (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo}).|
|measurementsForDateAndValueFragmentType AndValueFragmentSeriesAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and fragment series with value and being from a particular period and type object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo} and {type}).|
|measurementsForSource|MeasurementCollection URI template|1|Read-only collection of all measurements coming from a particular source object (placeholder {source}).|
|measurementsForSourceAndDate|MeasurementCollection URI template|1|Read-only collection of all measurements from a particular period and from a particular source object (placeholder {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAnd DateAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and being from a particular period and source object (placeholder {type}, {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAndDate AndValueFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and being from a particular period and source object (placeholder {valueFragmentType}, {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAnd DateAndValueFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and type object and being from a particular period and source object (placeholder {valueFragmentType}, {dateFrom}, {dateTo}, {type} and {source}).|
|measurementsForSourceAndDateAnd ValueFragmentTypeAndValueFragmentSeries|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value and being from a particular period and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo} and {source}).|
|measurementsForSourceAndDateAndValueFragmentType AndValueFragmentSeriesAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value and type object and being from a particular period and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo}, {type} and {source}).|
|measurementsForSourceAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and coming from a particular source object (placeholder {type} and {source}).|
|measurementsForSourceAndValueFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and coming from a particular source object (placeholder {valueFragmentType} and {source}).|
|measurementsForSourceAndValueFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value and a particular type and source object (placeholder {valueFragmentType}, {type} and {source}).|
|measurementsForSourceAndValueFragmentType AndValueFragmentSeries|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value and coming from a particular source object (placeholder {valueFragmentType}, {valueFragmentSeries} and {source}).|
|measurementsForSourceAndValueFragmentType AndValueFragmentSeriesAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value and a particular type and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {type} and {source}).|
|measurementsForType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type (placeholder {type}).|
|measurementsForValueFragmentType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type with value (placeholder {valueFragmentType}).|
|measurementsForValueFragmentTypeAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and a particular fragment type with value(placeholder {type} and {valueFragmentType}).|
|measurementsForValueFragmentType AndValueFragmentSeries|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular fragment type and series with value (placeholder {valueFragmentType} and {valueFragmentSeries}).|
|measurementsForValueFragmentTypeAndValueFragmentSeriesAndType|MeasurementCollection URI template|1|Read-only collection of all measurements containing a particular type and a particular fragment type and series with value(placeholder {type}, {valueFragmentType} and {valueFragmentSeries}).|

> The query parameter "fragmentType" is deprecated. It is still available in the API, but clients are recommended to replace the parameter with "valueFragmentType" and "valueFragmentSeries". This leads to much better query performance. Note that you can only query fragments holding standard measurements with these parameters. Other formats cannot not be queried.

> For large measurement collections querying late pages without filter can be slow as it requires the server to scan from the beginning of the input results set before beginning to return results. For cases when latest measurements should be retrieved Cumulocity recommends to narrow the scope by using time range query and base query on time stamp reported by device. Scope of query can be also significantly reduced by doing query by source.


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
      "measurementsForDateAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
      "measurementsForDateAndValueFragmentType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}",
      "measurementsForDateAndValueFragmentTypeAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&type={type}",
      "measurementsForDateAndValueFragmentTypeAndValueFragmentSeries" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}",
      "measurementsForDateAndValueFragmentTypeAndValueFragmentSeriesAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}&type={type}",
      "measurementsForSource" : "<<MeasurementCollection URL>>?source={source}",
      "measurementsForSourceAndDate" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}",
      "measurementsForSourceAndDateAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
      "measurementsForSourceAndDateAndValueFragmentType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}",
      "measurementsForSourceAndDateAndValueFragmentTypeAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&type={type}",
      "measurementsForSourceAndDateAndValueFragmentTypeAndValueFragmentSeries" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}",
      "measurementsForSourceAndDateAndValueFragmentTypeAndValueFragmentSeriesAndType" : "<<MeasurementCollection URL>>?source={source}&dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}&type={type}",
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
