---
order: 20
title: Measurement API
layout: redirect
---

### MeasurementAPI [application/vnd.com.nsn.cumulocity.measurementApi+json

Note, that all GET requests support two similar parameters fragmentType and valueFragmentType. Parameter valueFragmentType should be used instead of fragmentType because works on structured data and filtering via this parameter is lighter than filtering via fragmentType. Additionally parameter valueFragmentType can be used together with valueFragmentSeries.

Parameters valueFragmentType and valueFragmentSeries allows to query for measurement via fragment and series e.g. If you looking for c8y_TemperatureMeasurement.T you should use query in form &valueFragmentType=c8y_TemperatureMeasurement&valueFragmentSeries=T.

If you looking for non standard parameter of measurement e.g. without value you must still use parameter fragmentType. If you looking for non standard parameter of measurement e.g. without value you must still use parameter fragmentType. Note that usage of valueFragmentType or pair valueFragmentType and valueFragmentSeries is more preferable then fragmentType.


|Name|Type|Occurs|Description|
|:---|:---|:---|:----------|
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
