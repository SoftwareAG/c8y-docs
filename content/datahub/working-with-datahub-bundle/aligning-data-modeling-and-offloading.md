---
weight: 40
title: Aligning data modeling and offloading
layout: redirect
---

#### Mapping document data to relational data

{{< product-c8y-iot >}} DataHub allows to offload data from the {{< product-c8y-iot >}} platform into a data lake and the subsequent analysis of the offloaded data using SQL. For that purpose, {{< product-c8y-iot >}} DataHub must transform the data from the document-based format into a relational format, which is then persisted as Parquet files in the data lake.

When the offloading is configured, data from the documents in the operational database of the {{< product-c8y-iot >}} platform is transformed and stored in columns of the target table in the data lake. The system either automatically generates those transformations or proposes them to the user with the option to modify them. The user can also configure additional transformations. A configuration defining how a data field is transformed into a column comprises:
- The expression how to retrieve the data from the source document.
- The name of the target column.
- The type of the target column.

For built-in data attributes specified by the platform, the type is fixed and known to {{< product-c8y-iot >}} DataHub. For other attributes {{< product-c8y-iot >}} DataHub determines the type by evaluating the aforementioned expression on the data stored in the operational database. Dremio either does this based on the database state at configuration time or on metadata captured earlier. For performance reasons, the evaluation is based on a subset of data, namely the first 4095 documents of the collection. When evaluating the expression and all instances of the attributes have the same type, this type defines the column type. 

#### Managing mixed types

If instances of the attribute have diverging types, then the system can apply a type coercion mechanism to resolve such a mixed type constellation. That coercion mechanism derives a single, suitable type from the diverging types. For example, INTEGER and FLOAT are coerced to FLOAT while TIMESTAMP and VARCHAR are coerced to VARCHAR. You can configure for each offloading pipeline how to deal with mixed types. Per default the system automatically resolves the mixed type by evolving the schema. That schema evolution uses the type coercion to introduce a new column having the coerced type. Alternatively the system stops the pipeline to allow for corrective actions. Section [Dealing with mixed types](/datahub/working-with-datahub/#mixed-types) describes how to configure those strategies. 

{{< c8y-admon-info >}}
Even though the system can resolve mixed types, it is strongly advised to avoid them as they may introduce additional adaptation effort. You should take care that your data model does not mix up types and that you feed only type-consistent data into the {{< product-c8y-iot >}} platform.
{{< /c8y-admon-info >}}

#### Mapping measurement fragments to relational data

The offloading configuration mechanisms differ when dealing with series-value fragments of measurements. As additional fragments are often added dynamically, {{< product-c8y-iot >}} DataHub automatically picks up each series at runtime without the need to reconfigure the offloading pipeline.

Each series must have a mandatory value of type Number and an optional unit of type String. If the value is not of type Number, {{< product-c8y-iot >}} DataHub determines a type for each series at runtime of the offloading. It evaluates the runtime type of each value and derives the column type for the corresponding offloading run. If all values for a series can be cast to BOOLEAN, FLOAT, STRUCT or LIST consistently, this will be the type of the resulting column. Otherwise, DataHub will use VARCHAR. If the use case mixes types for the same series, the aforementioned mixed type handling applies.

{{< c8y-admon-info >}}
The {{< product-c8y-iot >}} platform supports since version 10.16+ the **time series model**, which is a new internal data model for the measurements collection. For details on how to activate that model see section [Enhanced time series support](/users-guide/enterprise-tenant/#timeseries). {{< product-c8y-iot >}} DataHub supports that data model as well when offloading the measurements collection. However, the specific case of measurements offloading in the TrendMiner mode is not supported when the time series model is used. When you switch from the default data model to the time series model, measurements offloadings will still continue to work. The switch from the time series model to the default model is not supported. In that case the offloading cannot guarantee that the complete data is offloaded into the target table. To ensure completeness, you have to re-configure the offloading to use a different target table when switching to the default data model.
{{< /c8y-admon-info >}}

#### Guidelines

When modeling your data, you should generally take the following guidelines into account:

|<div style="width:250px">Description</div>
|:---
|The data type of an attribute should be fix as otherwise mixed type constellations may occur.|
|When modeling measurements and large volumes of them are likely to be generated, you should leverage the time series data model. When using this model, the offloading and query performance is typically better compared to the default data model.|
|When modeling measurements you should separate the measurements by specifying measurement types. Then each measurement type can be modelled within a separate offloading pipeline, which in turn leads to a cleaner data architecture in the data lake as well as better query performance.|
|You should avoid offloading lists with many entries as this leads to broad tables in the data lake.|
|You should avoid having a large number of columns in the data lake as this adversely affects query performance and complicates data access in follow-up applications.|
|When defining attribute names in your data model, you should not use special characters in attribute names. The attribute names are used as column names in the resulting offloading table and special characters may hinder working with those columns in follow-up applications.|
|When modelling data within arrays, you must ensure that the position of the values within the array is fix throughout the documents fed into the platform as otherwise further processing might run into problems.|

#### Limitations

When modeling your data, you have to be aware of the following limitations:

|<div style="width:250px">Description</div>
|:---
|Additional filter conditions do not apply for measurement offloadings.|
|Mixed usage of uppercase and lowercase characters for attribute names in the documents is not supported.|
|If the collection to be offloaded has JSON attributes consisting of more than 32,000 characters, its data cannot be offloaded. One specific case where this limitation applies is the {{< product-c8y-iot >}} application builder, which stores its assets in the inventory collection when being used.|
|If the collection to be offloaded has more than 800 JSON attributes, its data cannot be offloaded. This limitation also includes nested JSON content, which will be expanded into columns during offloading. Therefore, measurements documents with more than 800 series/series value fragments are not supported.|