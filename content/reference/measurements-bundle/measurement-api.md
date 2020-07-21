---
weight: 20
title: Measurement API
layout: redirect
---

### MeasurementAPI [application/vnd.com.nsn.cumulocity.measurementApi+json

<table>
<colgroup>
  <col style="width: 30%;">
  <col style="width: 20%;">
  <col style="width: 5%;">
  <col style="width: 45%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URL linking to this resource.</td>
</tr>

<tr>
<td align="left">measurements</td>
<td align="left">Measurement Collection</td>
<td align="left">1</td>
<td align="left">Collection of all measurements.</td>
</tr>

<tr>
<td align="left">measurementsForDate</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements from a particular period (placeholder {dateFrom} and {dateTo}).</td>
</tr>

<tr>
<td align="left">measurementsForDateAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular type and being from a particular period (placeholder {type}, {dateFrom} and {dateTo}).</td>
</tr>

<tr>
<td align="left">measurementsForDateAndValueFragmentType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type with value and being from a particular period (placeholder {valueFragmentType}, {dateFrom} and {dateTo}).</td>
</tr>

<tr>
<td align="left">measurementsForDateAndValueFragmentType AndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type with value and being from a particular period and type object (placeholder {valueFragmentType}, {dateFrom}, {dateTo} and {type}).</td>
</tr>

<tr>
<td align="left">measurementsForDateAndValueFragmentType AndValueFragmentSeries</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type and fragment series with value and being from a particular period (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo}).</td>
</tr>

<tr>
<td align="left">measurementsForDateAndValueFragmentType AndValueFragmentSeriesAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type and fragment series with value and being from a particular period and type object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo} and {type}).</td>
</tr>

<tr>
<td align="left">measurementsForSource</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements coming from a particular source object (placeholder {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndDate</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements from a particular period and from a particular source object (placeholder {dateFrom}, {dateTo} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAnd DateAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular type and being from a particular period and source object (placeholder {type}, {dateFrom}, {dateTo} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndDate AndValueFragmentType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type with value and being from a particular period and source object (placeholder {valueFragmentType}, {dateFrom}, {dateTo} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAnd DateAndValueFragmentTypeAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type with value and type object and being from a particular period and source object (placeholder {valueFragmentType}, {dateFrom}, {dateTo}, {type} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndDateAnd ValueFragmentTypeAndValueFragmentSeries</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type and series with value and being from a particular period and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndDateAndValueFragmentType AndValueFragmentSeriesAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type and series with value and type object and being from a particular period and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {dateFrom}, {dateTo}, {type} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular type and coming from a particular source object (placeholder {type} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndValueFragmentType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type with value and coming from a particular source object (placeholder {valueFragmentType} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndValueFragmentTypeAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type with value and a particular type and source object (placeholder {valueFragmentType}, {type} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndValueFragmentType AndValueFragmentSeries</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type and series with value and coming from a particular source object (placeholder {valueFragmentType}, {valueFragmentSeries} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForSourceAndValueFragmentType AndValueFragmentSeriesAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type and series with value and a particular type and source object (placeholder {valueFragmentType}, {valueFragmentSeries}, {type} and {source}).</td>
</tr>

<tr>
<td align="left">measurementsForType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular type (placeholder {type}).</td>
</tr>

<tr>
<td align="left">measurementsForValueFragmentType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type with value (placeholder {valueFragmentType}).</td>
</tr>

<tr>
<td align="left">measurementsForValueFragmentTypeAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular type and a particular fragment type with value(placeholder {type} and {valueFragmentType}).</td>
</tr>

<tr>
<td align="left">measurementsForValueFragmentType AndValueFragmentSeries</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular fragment type and series with value (placeholder {valueFragmentType} and {valueFragmentSeries}).</td>
</tr>

<tr>
<td align="left">measurementsForValueFragmentTypeAndValueFragmentSeriesAndType</td>
<td align="left">MeasurementCollection URI template</td>
<td align="left">1</td>
<td align="left">Read-only collection of all measurements containing a particular type and a particular fragment type and series with value(placeholder {type}, {valueFragmentType} and {valueFragmentSeries}).</td>
</tr>
</tbody>
</table>

> The query parameter "fragmentType" is deprecated. It is still available in the API, but clients are recommended to replace the parameter with "valueFragmentType" and "valueFragmentSeries". This leads to much better query performance. Note that you can only query fragments holding standard measurements with these parameters. Other formats cannot be queried.

> For large measurement collections querying late pages without filter can be slow as it requires the server to scan from the beginning of the input results set before beginning to return results. For cases when latest measurements should be retrieved Cumulocity IoT recommends to narrow the scope by using time range query and base query on time stamp reported by device. Scope of query can be also significantly reduced by doing query by source.


### GET - Measurement API resource

**Response body:** application/vnd.com.nsn.cumulocity.measurementapi+json

**Require role:** ROLE\_MEASUREMENT\_READ

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}|

```http
GET <<url>>/measurement
```


#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.measurementapi+json;ver=...

```http
HTTP/1.1
200 OK

{
  "self" : "<<Measurement API URL>>",
  "measurements" : { "self" : "<<MeasurementCollection URL>>" },
  "measurementsForDate" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}",
  "measurementsForDateAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&type={type}",
  "measurementsForDateAndValueFragmentType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}",
  "measurementsForDateAndValueFragmentTypeAndType" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&type={type}",  
  "measurementsForDateAndValueFragmentTypeAndValueFragmentSeries" : "<<MeasurementCollection URL>>?dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType={valueFragmentType}&valueFragmentSeries={valueFragmentSeries}",
  "measurementsForDateAndValueFragmentTypeAndValueFragmentSeriesAndType" : "<<MeasurementCollection URL>>?	dateFrom={dateFrom}&dateTo={dateTo}&valueFragmentType=	{valueFragmentType}&valueFragmentSeries=	{valueFragmentSeries}&type={type}",
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
```
