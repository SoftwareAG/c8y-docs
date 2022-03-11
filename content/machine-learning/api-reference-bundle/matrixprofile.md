---
title: Matrix profile
layout: redirect
weight: 30

aliases:
  - /predictive-analytics/api-reference/#matrixprofile
---

Operations for matrix profile.

>**Info:** An active subscription of the Nyoka microservice is required to leverage the matrix profile APIs.

### GET – Generate matrix profile using historical time series data

```
{{url}}/service/zementis/matrixprofile
```

Get the matrix profile of a specific historical time series data.


**ROLES & PERMISSIONS**: ROLE_MACHINE_LEARNING_READ

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|windowSize (integer)| Optional query parameter to setup the size of the subsequence window size. The default subsequence window size is 5 if not provided. </br>Note that: <ul><li>The window size must be less than or equal to the length of historical data that is retrieved according to the date range defined in ```dateFrom``` and ```dateTo```.</li><li>The window size must be greater than 2 when computing the z-normalized Euclidean distance. A windowSize=1 produces a standard deviation of zero. For windowSize=2, both the mean and standard deviation for any given subsequence are identical and hence the z-normalization for any sequence will either be [-1., 1.] or [1., -1.]. Thus, the z-normalized Euclidean distance will very likely be zero between any subsequence and its nearest neighbor assuming that the time series is large enough to contain both scenarios.</li></ul>
|source (integer)|Required query parameter for source identifier
|valueFragmentType (string)|Required query parameter for measurements based on fragment type
|valueFragmentSeries (string)|Required query parameter for measurements based on fragment series
|dateFrom (string)|Required query parameter for measurements from a start date
|dateTo (string)|Required query parameter for measurements to an end date

**Example Request**

```
200 - OK

curl --request GET "{{url}}/service/zementis/matrixprofile?windowSize={{size}}&source={{id}}&valueFragmentType={{type}}&valueFragmentSeries={{series}}&dateFrom={{start}}&dateTo={{end}}" \
     --header "Authorization: {{auth}} \
     --header "Accept: application/json"
```

**Example Response**

```
200 - OK

{
  "time": [
    "2021-12-20T23:50:53.045Z",
    "2021-12-20T23:50:54.537Z",
    "2021-12-20T23:50:56.210Z",
    "2021-12-20T23:50:57.695Z",
    "2021-12-20T23:50:59.177Z",
    "2021-12-20T23:51:00.641Z",
    "2021-12-20T23:51:02.132Z",
    "2021-12-20T23:51:03.593Z",
    "2021-12-20T23:51:05.062Z",
    "2021-12-20T23:51:06.556Z",
    "2021-12-20T23:51:08.019Z",
    "2021-12-20T23:51:09.504Z",
    "2021-12-20T23:51:10.970Z",
    "2021-12-20T23:51:12.407Z",
    "2021-12-20T23:51:13.836Z",
    "2021-12-20T23:51:15.323Z",
    "2021-12-20T23:51:16.906Z",
    "2021-12-20T23:51:18.407Z"
  ],
  "matrix_profile": [
    0,
    0,
    0,
    "Infinity",
    0,
    0,
    0,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  "matrix_profile_index": [
    4,
    5,
    6,
    -1,
    0,
    1,
    2,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]
}
```
>**Info:**
> The delta between selected `historical time series data (T)` and `generated matrix_profile (mp)` shown as null values at the end of the `matrix_profile` is the nature of work from sliding window computation. The size of `matrix_profile (mp)` is smaller than the size of `historical time series data (T)` according to the `subsequence window size (m)`.
>
> - `size(mp) = size(T) - m + 1`
>
> Same delta applies to the size of `matrix_profile_index`.


**Example Request**

All the required parameters are not provided completely.

```
400 – Bad Request

curl --request GET "{{url}}/service/zementis/matrixprofile?source=110"
```

**Example Response**

```
400 – Bad Request

{
  "errors": [
    "Please provide ['valueFragmentType', 'valueFragmentSeries', 'dateFrom', 'dateTo'] in query parameters."
  ]
}
```
**Example Request**

The subsequence window size is larger than the length of historical time series data.

```
400 – Bad Request

curl --request GET "{{url}}/service/zementis/matrixprofile?source=110&valueFragmentType=c8y_Temperature&valueFragmentSeries=T&dateFrom=2021-12-20&dateTo=2021-12-21&windowSize=5000000"
```

**Example Response**

```
400 – Bad Request

{
  "errors": [
    "The window size must be less than or equal to the length of historical data. Please reduce window size or increase the date range to retrieve more historical data."
  ]
}
```
