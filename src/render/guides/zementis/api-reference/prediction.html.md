---
title: Predictions
layout: redirect
order: 20
---

### GET Apply Model to Single Record

```
{{url}}/service/zementis/apply/{{model_name}}?record={{record}}
```

Apply a model to a single JSON input record.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name
|record (string)|JSON Record - a map of model input fields and their respective values

**Example Request**

```
200 - OK
curl --request GET "{{url}}/service/zementis/apply/Iris_NN?record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D" \
  --header "Authorization: {{auth}}"
  ```
  
**Example Response**

```
200 - OK
{
  "model": "Iris_ME_Classification",
  "outputs": [
    {
      "Probability_setosa": 1,
      "Probability_versicolor": 0,
      "Probability_virginica": 0,
      "class": "Iris-setosa"
    }
  ]
}
```

**Example Request**

```
401 - Unauthorized
curl --request GET "{{url}}/service/zementis/apply/Iris_NN?record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request GET "{{url}}/service/zementis/apply/dummy?record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D" \
  --header "Authorization: {{auth}}"
```
  
**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

**Example Request**

```
500 - Internal server Error
curl --request GET "{{url}}/service/zementis/apply/Iris_NN?record=%7B" --header "Authorization: {{auth}}"
```

**Example Response**

```
500 - Internal server Error
{
  "timestamp": 1554299687990,
  "status": 500,
  "error": "Internal Server Error",
  "exception": "com.fasterxml.jackson.core.io.JsonEOFException",
  "message": "Unexpected end-of-input: expected close marker for Object (start marker at [Source: {; line: 1, column: 1])\n at [Source: {; line: 1, column: 3]",
  "path": "/apply/Iris_ME_Classification"
}
```

###GET Apply Model to Single Record and Explain Result

```
{{url}}/service/zementis/apply/{{model_name}}/explain?record={{record}}
```

Apply a model to a single JSON input record and get the result with details of the performed computation in plain text.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}

|PARAMS||
|:---|:---|
|model_name (string)|required path variable for existing model name
|record (string)|JSON Record - a map of model input fields and their respective values


**Example Request**

```
200 - OK
curl --request GET \
     "{{url}}/service/zementis/apply/Iris_NN/explain?record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D" \  
     --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK  Expand source
```

**Example Request**

```
401 - Unauthorized
curl --request GET "{{url}}/service/zementis/apply/Iris_NN/explain?record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D"
```

**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --request GET "{{url}}/service/zementis/apply/dummy/explain?record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D" \
  --header "Authorization: {{auth}}"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

**Example Request**

```
500 - Internal server Error
curl --request GET "{{url}}/service/zementis/apply/Iris_NN/explain?record=%7B" --header "Authorization: {{auth}}"
```

**Example Response**

```
500 - Internal server Error
{
  "timestamp": 1554299924722,
  "status": 500,
  "error": "Internal Server Error",
  "exception": "com.fasterxml.jackson.core.io.JsonEOFException",
  "message": "Unexpected end-of-input: expected close marker for Object (start marker at [Source: {; line: 1, column: 1])\n at [Source: {; line: 1, column: 3]",
  "path": "/apply/Iris_ME_Classification/explain"
}
```

###GET Apply Model to Multiple Records

```
{{url}}/service/zementis/apply/{{model_name}}
```

Apply a model to multiple records. This provides two kinds of operations. Generally, if a predictive model without binary type input is applied, this will be a batch 'apply' operation that streams multiple input records to Zementis microservice. Zementis microservice will automatically detect CSV (Comma Separated Value) or JSON records formatted input and stream results back in the same format unless otherwise specified in the Accept request header parameter with text/csv or application/json values. Compressing input data with zip or gzip will result in the same compression method for the returned output stream. Note that if the records are specified in a file then the size of the uploaded file should not exceed 500 MB.

If a predictive model with a binary type input is applied, this will be a single 'apply' operation that processes a single binary source as input to Zementis Server.

|HEADERS||
|:---|:---|
|Authorization|{{auth}}
|Content-Type|required header parameter with two accepted values: application/octet-stream or multipart/form-data
|Accept|optional header parameter for explicitly specifying text/csv or application/json output format

|PARAMS||
|:---|:---|
|file (file)|data file in CSV with header format or as JSON array [Record]. Only applicable when Content-Type is multipart/form-data
|model_name (string)|required path variable for the name of the model to be applied
|maxThreads|optional query parameter for specifying the maximum number of concurrent threads (default value is twice the number of processor cores). No impact if a predictive model with a binary type input was applied
|maxRecordsPerThread|optional query parameter for specifying the maximum number of records processed by a thread in batch (default value is 5000). No impact if a predictive model with a binary type input was applied

**Example Request**

```
200 - OK
curl --request POST "{{url}}/service/zementis/apply/Iris_ME_Classification?" \
     --header "Authorization: {{auth}}" --header "Content-Type: multipart/form-data" --header "Accept: text/csv" \
     --form "file=@Iris_ME_Classification.csv"
```

**Example Response**

```
200 - OK  Expand source
```


**Example Request**

```
400 - Bad Request
curl --request POST "{{url}}/service/zementis/apply/Iris_ME_Classification?" \
  --header "Authorization: {{auth}}" --header "Content-Type: multipart/form-data" --form "file=@Invalid.csv"
  ```
  
**Example Response**

```
400 - Bad Request
{
  "errors": [
    "Failed to parse input at record 1."
  ]
}
```

**Example Request**

```
401 - Unauthorized
curl --request POST "{{url}}/service/zementis/apply/Iris_ME_Classification?" \
     --header "Content-Type: multipart/form-data" --header "Accept: text/csv" \
     --form "file=@Iris_ME_Classification.csv"
```
     
**Example Response**

```
401 - Unauthorized
{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/guides/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found
curl --location --request POST "{{url}}/service/zementis/apply/dummy?" \
  --header "Authorization: {{auth}}" \
  --header "Content-Type: multipart/form-data" \
  --header "Accept: application/json" \
  --form "file=@dummy.csv"
```

**Example Response**

```
404 - Not Found
{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```
