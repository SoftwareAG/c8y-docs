---
order: 50
layout: redirect
title: SmartRest
---

### Check Template Collection Exists

Will verify if a template collection exists.

    cl.IsExistTemplateCollectionEvt += (s, e) =>
    {
        var item = e.IsExist;
    };

     await cl.CustomSmartRest.CheckTemplateCollectionExists("test", (e) => { return Task.FromResult(false); });

### Create Template Data

Will create the template data asynchronous.

Parameters:


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|collectionName|String|YES|Name of the collection|
|requests|List&lt;Request&gt;|YES|	Depending on the type suitable Cumulocity API to be used<br>INVENTORY<br>MEASUREMENT<br>ALARM<br>EVENT<br>OPERATION|
|responses|List&lt;Response&gt;|NO|The responses. Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|processingMode|List&lt;String&gt;|NO|The processing mode|

### Types of requests templates

* InventoryGetRequest
* InventoryRequest
* MeasurementRequest
* OperationRequest
* AlarmRequest
* AlarmUpdateRequest
* EventRequest

#### InventoryGetRequest


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|externalIdType|String|YES|Sets a fixed externalIdType if the template calls by externalId|
|byId|String|YES|Whether the GET should be executed by Cumulocity ID (=true) or externalId (=false)|


#### InventoryRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|externalIdType|String|NO|Sets a fixed externalIdType if the template calls by externalId|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|Method|HttpMethods|YES|<br> GET<br> PUT<br> POST|

#### MeasurementRequest


|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the measurement to create|
|time|String|YES|A time stamp in the ISO 8601 format|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|method|HttpMethods|YES|<br> GET<br> PUT<br> POST|


#### OperationRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|NO|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the operation to create|
|operationFragment|OperationFragment|YES| e.g c8y_MyOperation|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|


#### AlarmRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES|The type of the alarm to create|
|text|String|YES||
|status|String|YES|	A status of an alarm. Used to update the status field of alarms|
|severity|String|YES|	A severity of an alarm. Used to update the severity field of alarms e.g. Major|
|time|String|YES|A time stamp in the ISO 8601 format|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|
|Method|HttpMethods|YES|<br> GET<br> PUT<br> POST|

#### AlarmUpdateRequest

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID|
|response|bool?|No|Whether the request should trigger response templates. For GET templates by default true otherwise by default false|
|type|String|YES| The type of the alarm to find the alarm to update|
|alarmFragment|AlarmFragment|YES|It contains key and status.|
|customValues|IList&lt;CustomValue&gt;|No|Custom values that should be added to the object|


### Response templates

The SmartREST 2.0 response templates use the same structure as in SmartREST 1.0.

|Field|Data type|Mandatory|Description|
|:-------|:-------|:-------|:-------|
|messageId|String|YES|Unique ID to reference the template within the collection|
|base|String|NO|A JsonPath prefix that all patterns will use|
|condition|String|NO|A JsonPath that needs to exist in the object to use the  pattern|
|pattern|List&lt;String&gt;|YES|A list of JsonPath that will be extracted from the object and returned to the device|

Response will be used for every operation and for any request template that defines the response field with true.

In each case the server will try every registered response template so there might be multiple response lines for a single operation or request.

SmartREST 2.0 will always return a response template if the condition is true (or no condition was defined). Patterns that did not resolve will be returned as empty string.
You should make use of the condition field to control when response templates should be returned.

**Example**

```
     new Response("8889",
     String.Empty,
     "c8y_IsDevice",
     new List<string> { "type",
                        "c8y_MQTTDevice",
                        "c8y_Mobile.cellId" });
```

### GET templates

The GET templates for the inventory do not need any mandatory or custom values. Instead they use two different fields.

With SmartREST 2.0 you have the option to either get an object from inventory by its ID or by an externalId directly. Therefore instead of the fields mandatoryValues and customValues the following two fields are used.

|Field|Data type|Possible values|Mandatory|Description|
|:-------|:-------|:-------|:-------|:-------|
|byId|boolean|true<br>false|YES|Whether the GET should be executed by Cumulocity ID (=true) or externalId (=false)|
|externalIdType|String||NO|Sets a fixed externalIdType if the template calls by externalId|

**Example**

    await cl.CustomSmartRest.CreateTemplateDataAsync("GetTemplate",
                new List<Request> {
                             new InventoryGetRequest("9999",null, String.Empty, true),
                             new InventoryGetRequest("9998",null, "c8y_Serial", false)
                                                     },
                                                     new List<Response> {
                                                         new Response("8889",
                                                         String.Empty,
                                                         "c8y_IsDevice",
                                                         new List<string> { "type",
                                                                            "c8y_MQTTDevice",   																									"c8y_Mobile.cellId" }),

                                                         new Response("8888",
                                                         String.Empty,
                                                         "c8y_IsDevice",
                                                         new List<string> { "type",
                                                                            "c8y_MQTTDevice", 																										"c8y_Mobile.cellId" })
                                                     });

### POST templates

The POST templates require a different set of mandatory values based on the API:

|API|mandatory values|
|:-------|:-------|
|MEASUREMENT|type, time|
|EVENT|type, text, time|
|ALARM|type, text, status, severity, time|
|INVENTORY|externalIdType|

#### Creating a measurement template

Will create a template to create a measurement.

            await cl.CustomSmartRest.CreateTemplateDataAsync("PostTemplateMeasurement",
                                    new List<Request> {
                                    new MeasurementRequest("7777",
                                    null,
                                    "c8y_CustomMeasurement",
                                    String.Empty,
                                    new List<CustomValue>{
                                        new CustomValue {Path = "c8y_MyMeasurement.M.value",
                                            Type = Enums.CustomValueType.NUMBER,
                                            Value = String.Empty
                                        }
                                    },HttpMethods.POST)
                                    },
                                    new List<Response> {
                                        new Response("8889",
                                        String.Empty,
                                        "c8y_IsDevice",
                                        new List<string> { "type",
                                        				   "c8y_MQTTDevice",
                                                           "c8y_Mobile.cellId" }),
                                        new Response("8888",
                                        String.Empty,
                                        "c8y_IsDevice",
                                        new List<string> { "type",
                                        				   "c8y_MQTTDevice",
                                                           "c8y_Mobile.cellId" })
                                    });

#### Creating an  alarm template

Will create a template to create an alarm.

            await cl.CustomSmartRest.CreateTemplateDataAsync("PostTemplateAlarm",
                                        new List<Request> {
                                        new AlarmRequest("6666",
                                        null,
                                        "c8y_CustomAlarm",
                                        "CustomAlarm",
                                        "ACTIVE",
                                        "MAJOR",
                                        String.Empty,
                                        new List<CustomValue>{
                                            new CustomValue {
                                                Path = "c8y_CustomAlarm.M.value",
                                                Type = CustomValueType.NUMBER,
                                                Value = String.Empty
                                            }
                                        },HttpMethods.POST)
                                        },
                                        new List<Response> {
                                            new Response("8889",
                                            String.Empty,
                                            "c8y_IsDevice",
                                            new List<string> {
                                                "type",
                                                "c8y_MQTTDevice",
                                                "c8y_Mobile.cellId" }),
                                            new Response("8888",
                                            String.Empty,
                                            "c8y_IsDevice",
                                            new List<string> {
                                                "type",
                                                "c8y_MQTTDevice",
                                                "c8y_Mobile.cellId" })
                                        });

#### Creating an event template

Will create a template to create an event.

       await cl.CustomSmartRest.CreateTemplateDataAsync("PostTemplateEvent",

                            new List<Request> {
                                        new EventRequest("5555",
                                        null,
                                        "c8y_CustomEvent",
                                        "CustomEvent",
                                        String.Empty,
                                        new List<CustomValue>{
                                            new CustomValue {Path = "c8y_CustomEvent.M.value",
                                                Type = CustomValueType.NUMBER,
                                                Value = String.Empty
                                            }
                                        })

                            },

                            new List<Response> {
                                            new Response("8889",
                                            String.Empty,
                                            "c8y_IsDevice",
                                            new List<string> {
                                                "type",
                                                "c8y_MQTTDevice",
                                                "c8y_Mobile.cellId" })
                            });

#### Creating an inventory template

Will create a template to create an inventory.

       await cl.CustomSmartRest.CreateTemplateDataAsync("PostTemplateInventory",
                                            new List<Request> {
                                            new InventoryRequest("4444",
                                            null,
                                            "c8y_MySerial",
                                            new List<CustomValue>{
                                                new CustomValue {Path = "c8y_CustomInventory.M.value",
                                                    Type = CustomValueType.NUMBER,
                                                    Value = String.Empty
                                                }
                                            },HttpMethods.POST)
                                            },

                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                                   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId" })
                                            });

#### Update an inventory template

Will update an inventory template.

       await cl.CustomSmartRest.CreateTemplateDataAsync("UpdateTemplateInventory",

                                            new List<Request> {
                                            new InventoryRequest("3333",
                                            null,
                                            "c8y_MySerial",
                                            new List<CustomValue>{
                                                new CustomValue {Path = "c8y_CustomInventory.M.value",
                                                    Type = CustomValueType.NUMBER,
                                                    Value = String.Empty
                                                }
                                            },HttpMethods.PUT)
                                            },
                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                                   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId"
                                                                  })
                                            });

#### Update an alarm template

Will update an alarm template.

    await cl.CustomSmartRest.CreateTemplateDataAsync("UpdateTemplateAlarm",
                                            new List<Request> {
                                                new AlarmUpdateRequest("2222",
                                                null,
                                                "c8y_CustomAlarm",
                                                new AlarmFragment("status",null),
                                                new List<CustomValue>{
                                                })
                                            },
                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                				   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId" })
                                            });

#### Update a clearing alarm template

Will update a clearing alarm template.

    	await cl.CustomSmartRest.CreateTemplateDataAsync("UpdateTemplateClearingAlarm",
                                            new List<Request> {
                                            new AlarmUpdateRequest("0000",
                                            null,
                                            "c8y_CustomAlarm",
                                            new AlarmFragment("status",AlarmStatus.CLEARED),
                                            new List<CustomValue>{
                                                new CustomValue {
                                                    Path = "c8y_CustomFragment",
                                                    Type = CustomValueType.STRING,
                                                    Value = String.Empty
                                                },
                                            })
                                            },
                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                                   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId" })
                                            });

#### Update an operation template

Will update an operation template.

       await cl.CustomSmartRest.CreateTemplateDataAsync("UpdateTemplateOperation",
                                            new List<Request> {
                                            new OperationRequest("1111",
                                            null,
                                            "com_cumulocity_model_WebCamDevice",
                                            new OperationFragment(
                                                "status",
                                                 OperationStatus.SUCCESSFUL),
                                                new List<CustomValue>{
                                                new CustomValue {
                                                    Path = "c8y_Fragment.val",
                                                    Type = CustomValueType.NUMBER,
                                                    Value = String.Empty
                                                } })

                                            },
                                            new List<Response> {
                                                new Response("8889",
                                                String.Empty,
                                                "c8y_IsDevice",
                                                new List<string> { "type",
                                                                   "c8y_MQTTDevice",
                                                                   "c8y_Mobile.cellId" })
                                            });

#### Alarm template

Will create an alarm using the template.

    await cl.CustomSmartRest
    		.SendRequestDataAsync("PostTemplateAlarm",
            					  "6666",
                                  new List<string> { "2018-02-15T16:03:14.000+02:00",
                                                     "100",
                                                     "ACTIVE",
                                                     "MAJOR" });

#### Measurement template

 Will create a measurement using the template.

    await cl.CustomSmartRest
            .SendRequestDataAsync("PostTemplateMeasurement",
                                  "7777",
                                  new List<string> { "",
                                                     "25" });

#### Event template

Will create an event using the template.

    await cl.CustomSmartRest
    		.SendRequestDataAsync("PostTemplateEvent",
                                  "5555",
                                  new List<string> { "",
                                                     "100" });