---
weight: 40
title: Measurement
layout: redirect
---

### Measurement [application/vnd.com.nsn.cumulocity.measurement+json]

<table>
<colgroup>
  <col style="width: 10%;">
  <col style="width: 10%;">
  <col style="width: 5%;">
  <col style="width: 65%;">
  <col style="width: 10%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
<th align="left">POST</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">id</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Uniquely identifies a measurement.</td>
<td align="left">No</td>
</tr>

<tr>
<td align="left">self</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">A URI linking to this resource.</td>
<td align="left">No</td>
</tr>

<tr>
<td align="left">time</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">Time of the measurement.</td>
<td align="left">Mandatory</td>
</tr>

<tr>
<td align="left">type</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The most specific type of this entire measurement.</td>
<td align="left">Mandatory</td>
</tr>

<tr>
<td align="left">source</td>
<td align="left">ManagedObject</td>
<td align="left">1</td>
<td align="left">The ManagedObject which is the source of this measurement, as object containing the properties “id” and “self”.</td>
<td align="left">Mandatory</td>
</tr>

<tr>
<td align="left">*</td>
<td align="left">array</td>
<td align="left">0..n</td>
<td align="left">List of measurement fragments.</td>
<td align="left">Optional</td>
</tr>
</tbody>
</table>

Each measurement fragment is an object containing the actual measurements as properties. The property name represents the name of the measurement, the property value is structured as follows:

<table>
<colgroup>
  <col style="width: 10%;">
  <col style="width: 10%;">
  <col style="width: 5%;">
  <col style="width: 65%;">
  <col style="width: 10%;">
</colgroup>
<thead>
<tr>
<th align="left">Name</th>
<th align="left">Type</th>
<th align="left">Occurs</th>
<th align="left">Description</th>
<th align="left">POST</th>
</tr>
</thead>

<tbody>
<tr>
<td align="left">value</td>
<td align="left">Any number</td>
<td align="left">1</td>
<td align="left">The value of the individual measurement. The maximum precision for floating point numbers is 64-bit IEEE 754. For integers it’s a 64-bit two’s complement integer.</td>
<td align="left">Mandatory</td>
</tr>

<tr>
<td align="left">unit</td>
<td align="left">string</td>
<td align="left">1</td>
<td align="left">The unit of the measurement, such as “Wh” or “C”.</td>
<td align="left">Optional</td>
</tr>
</tbody>
</table>

### GET - Representation of a Measurement

**Response body:** application/vnd.com.nsn.cumulocity.measurement+json;ver=...

**Required role:** ROLE\_MEASUREMENT\_READ

#### Example request

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
GET <<url>>/measurement/measurements/<<measurementId>>
```
#### Example response

|HEADERS||
|:---|:---|
|Content-Type|application/vnd.com.nsn.cumulocity.measurement+json;ver=...

```http
HTTP/1.1
200 OK

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
```
### DELETE - Delete a Measurement

**Request Body:** N/A.

**Response Message Body:** N/A.

**Required role:** ROLE\_MEASUREMENT\_ADMIN or owner of source object

#### Example Request - Delete a measurement

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Host|{{hostname}}

```http
DELETE <<url>>/measurement/measurements/<<measurementID>>
```
#### Example Response

```http
HTTP/1.1
204 NO CONTENT
```
