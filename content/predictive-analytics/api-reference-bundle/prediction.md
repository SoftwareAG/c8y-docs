---
title: Prediction
layout: redirect
weight: 20
---

Operations on applying model to input data.

### GET - Apply Model to Single Record

``` perl
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

```perl
200 - OK

curl --request GET "{{url}}/service/zementis/apply/Iris_NN record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D" \
  --header "Authorization: {{auth}}"
  ```
  
**Example Response**

```perl
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

```perl
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/apply/Iris_NN record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D"
```

**Example Response**

```perl
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
```

**Example Request**

```perl
404 - Not Found

curl --request GET "{{url}}/service/zementis/apply/dummy record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D" \
  --header "Authorization: {{auth}}"
```
  
**Example Response**

```perl
404 - Not Found

{
  "errors": [
    "Model 'dummy' not found."
  ]
}
```

**Example Request**

```perl
500 - Internal server Error

curl --request GET "{{url}}/service/zementis/apply/Iris_NN record=%7B" --header "Authorization: {{auth}}"
```

**Example Response**

```perl
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

### GET - Apply Model to Single Record and Explain Result

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
     "{{url}}/service/zementis/apply/Iris_NN/explain record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D" \  
     --header "Authorization: {{auth}}"
```

**Example Response**

```
200 - OK  

[petal_length] := 1.4 (DOUBLE)
[petal_width] := 0.2 (DOUBLE)
[sepal_length] := 5.1 (DOUBLE)
[sepal_width] := 3.5 (DOUBLE)
 
[MiningSchema]
[petal_length] := 1.4 (DOUBLE)
[petal_width] := 0.2 (DOUBLE)
[sepal_length] := 5.1 (DOUBLE)
[sepal_width] := 3.5 (DOUBLE)
 
 
[ModelEnsemble]
 
Process segment model [1]:
The predicate of segment model [1] evaluates [True]
 
[MiningSchema]
[petal_length] := 1.4 (DOUBLE)
[petal_width] := 0.2 (DOUBLE)
[sepal_length] := 5.1 (DOUBLE)
[sepal_width] := 3.5 (DOUBLE)
 
 
[DecisionTree]
Evaluation of node [0] is [True].
Evaluation of node [1] is [True].
The confidence of the category [Iris-versicolor (STRING)] is [0].
The confidence of the category [Iris-setosa (STRING)] is [1].
The confidence of the category [Iris-virginica (STRING)] is [0].
 
[Output]
The predicted value of segment model [1] is [Iris-setosa (STRING)]
 
 
Process segment model [2]:
The predicate of segment model [2] evaluates [True]
 
[MiningSchema]
[sepal_length] := 5.1 (DOUBLE)
[sepal_width] := 3.5 (DOUBLE)
[petal_length] := 1.4 (DOUBLE)
[petal_width] := 0.2 (DOUBLE)
 
[LocalTransformations]
[derived_sepal_length] := 0.22222222222222213 (DOUBLE)
[derived_sepal_width] := 0.6818181818181818 (DOUBLE)
[derived_petal_length] := 0.07017543859649121 (DOUBLE)
[derived_petal_width] := 0.04166666666666667 (DOUBLE)
 
[BackPropagationNetwork]
Value of neural input [0] is [0.222].
Value of neural input [1] is [0.682].
Value of neural input [2] is [0.07].
Value of neural input [3] is [0.042].
Value of hidden layer neuron [4] is [-1].
Value of hidden layer neuron [5] is [0.955].
Value of hidden layer neuron [6] is [0.996].
Value of hidden layer neuron [7] is [-0.886].
Value of hidden layer neuron [8] is [0.397].
Value of hidden layer neuron [9] is [-0.541].
Value of hidden layer neuron [10] is [-0.345].
Value of output neuron [11] in the last neural layer is [1].
Value of output neuron [12] in the last neural layer is [0].
Value of output neuron [13] in the last neural layer is [0].
 
[Output]
The predicted value of segment model [2] is [Iris-setosa (STRING)]
 
 
Process segment model [3]:
The predicate of segment model [3] evaluates [True]
 
[MiningSchema]
[sepal_length] := 5.1 (DOUBLE)
[sepal_width] := 3.5 (DOUBLE)
[petal_length] := 1.4 (DOUBLE)
[petal_width] := 0.2 (DOUBLE)
 
[LocalTransformations]
[derived_sepal_length] := 0.22222222222222213 (DOUBLE)
[derived_sepal_width] := 0.6818181818181818 (DOUBLE)
[derived_petal_length] := 0.07017543859649121 (DOUBLE)
[derived_petal_width] := 0.04166666666666667 (DOUBLE)
 
[Regression]
Processing [RegressionTable] [targetCategory: Iris-versicolor (STRING)]:
Applied [Intercept], the value is [-14.897].
Applied [NumericPredictor] [coefficient: 61.867, exponent: 1] on field(s) [derived_sepal_length], the value is [13.748].
Applied [NumericPredictor] [coefficient: -137.017, exponent: 1] on field(s) [derived_sepal_width], the value is [-93.421].
Applied [NumericPredictor] [coefficient: 90.432, exponent: 1] on field(s) [derived_petal_length], the value is [6.346].
Applied [NumericPredictor] [coefficient: 11.529, exponent: 1] on field(s) [derived_petal_width], the value is [0.48].
 
Processing [RegressionTable] [targetCategory: Iris-virginica (STRING)]:
Applied [Intercept], the value is [-202.201].
Applied [NumericPredictor] [coefficient: -120.94, exponent: 1] on field(s) [derived_sepal_length], the value is [-26.875].
Applied [NumericPredictor] [coefficient: -129.401, exponent: 1] on field(s) [derived_sepal_width], the value is [-88.228].
Applied [NumericPredictor] [coefficient: 284.914, exponent: 1] on field(s) [derived_petal_length], the value is [19.994].
Applied [NumericPredictor] [coefficient: 251.754, exponent: 1] on field(s) [derived_petal_width], the value is [10.49].
 
Processing [RegressionTable] [targetCategory: Iris-setosa (STRING)]:
Applied [Intercept], the value is [0].
 
The predicted value of the regression table with category [Iris-versicolor (STRING)] is [-87.743]. Value after normalization is [0].
The predicted value of the regression table with category [Iris-virginica (STRING)] is [-286.82]. Value after normalization is [0].
The predicted value of the regression table with category [Iris-setosa (STRING)] is [0]. Value after normalization is [1].
 
[Output]
The predicted value of segment model [3] is [Iris-setosa (STRING)]
 
 
[Output]
The [predictedValue] is [Iris-setosa (STRING)]
[class] := Iris-setosa (STRING)
The [probability] of [Iris-setosa (STRING)] is [1.0 (DOUBLE)]
[Probability_setosa] := 1.0 (DOUBLE)
The [probability] of [Iris-versicolor (STRING)] is [0.0 (DOUBLE)]
[Probability_versicolor] := 0.0 (DOUBLE)
The [probability] of [Iris-virginica (STRING)] is [0.0 (DOUBLE)]
[Probability_virginica] := 0.0 (DOUBLE)
```

**Example Request**

```
401 - Unauthorized

curl --request GET "{{url}}/service/zementis/apply/Iris_NN/explain record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D"
```

**Example Response**

```
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found

curl --request GET "{{url}}/service/zementis/apply/dummy/explain record=%7B%22petal_length%22:%221.4%22,%22petal_width%22:%220.2%22,%22sepal_length%22:%225.1%22,%22sepal_width%22:%223.5%22%7D" \
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

curl --request GET "{{url}}/service/zementis/apply/Iris_NN/explain record=%7B" --header "Authorization: {{auth}}"
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

### GET - Apply Model to Multiple Records

```
{{url}}/service/zementis/apply/{{model_name}}
```

Apply a model to multiple records. This provides two kinds of operations. Generally, if a predictive model without binary type input is applied, this will be a batch 'apply' operation that streams multiple input records to Zementis microservice. Zementis microservice will automatically detect CSV (Comma Separated Value) or JSON records formatted input and stream results back in the same format unless otherwise specified in the Accept request header parameter with text/csv or application/json values. Compressing input data with ZIP or GZIP will result in the same compression method for the returned output stream. 

Note that if the records are specified in a file then the size of the uploaded file should not exceed 500 MB.

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

curl --request POST "{{url}}/service/zementis/apply/Iris_ME_Classification " \
     --header "Authorization: {{auth}}" --header "Content-Type: multipart/form-data" --header "Accept: text/csv" \
     --form "file=@Iris_ME_Classification.csv"
```

**Example Response**

```
200 - OK 

class,Probability_setosa,Probability_versicolor,Probability_virginica
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-setosa,1.0,0.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.2,0.8,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,0.8,0.2
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-virginica,0.0,0.3,0.7
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,0.5,0.5
Iris-versicolor,0.0,0.8,0.2
Iris-versicolor,0.2,0.8,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-versicolor,0.0,1.0,0.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-versicolor,0.0,0.5,0.5
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-versicolor,0.0,0.7,0.3
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-versicolor,0.0,0.5,0.5
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
Iris-virginica,0.0,0.0,1.0
```


**Example Request**

```
400 - Bad Request

curl --request POST "{{url}}/service/zementis/apply/Iris_ME_Classification " \
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

curl --request POST "{{url}}/service/zementis/apply/Iris_ME_Classification " \
     --header "Content-Type: multipart/form-data" --header "Accept: text/csv" \
     --form "file=@Iris_ME_Classification.csv"
```
     
**Example Response**

```
401 - Unauthorized

{
    "error": "general/internalError",
    "message": "Not authorized!",
    "info": "https://www.cumulocity.com/reference-guide/#error_reporting"
}
```

**Example Request**

```
404 - Not Found

curl --location --request POST "{{url}}/service/zementis/apply/dummy " \
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
