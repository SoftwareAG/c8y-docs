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

For built-in data attributes specified by the platform, the type is fixed and known to {{< product-c8y-iot >}} DataHub. For other attributes {{< product-c8y-iot >}} DataHub determines the type by evaluating the aforementioned expression on the data stored in the operational database. Dremio either does this based on the database state at configuration time or on metadata captured earlier. For performance reasons, the evaluation is based on a subset of data, namely the first 4095 documents of the collection. When evaluating the expression and all instances of the attributes have the same type, this type defines the column type. If instances of the attribute have diverging types, then the target column will have a mixed type.

{{< c8y-admon-info >}}
A result table which contains a mixed type may render query writing difficult or lead to problems with subsequent consumer applications. Typically, an application consuming data expects a column to have data of one type. Having multiple types requires special processing on the application side. It might even be that the application rejects such data or does not work properly. Also note that Dremio supports querying data with mixed types, but only via the REST API. JDBC/ODBC and Arrow Flight do not support mixed types. Therefore, it is crucial to ensure that consistent data is fed into the {{< product-c8y-iot >}} platform as the platform itself does not conduct type checks.
{{< /c8y-admon-info >}}

When defining an offloading configuration and a mixed type is derived, the CAST operation can be applied to enforce a target type. Prerequisite is that the type cast is supported. For example, while casting from INTEGER to VARCHAR is supported, casting from STRUCT to INTEGER is not supported.

The data type of the target column is shows in the *Column type* column in the *Additional columns* step of the configuration stepper. Mixed types are indicated by the data type *UNION*.

#### Mapping measurement fragments to relational data

The offloading configuration mechanisms differ when dealing with series value fragments of measurements. As additional fragments are often added dynamically, {{< product-c8y-iot >}} DataHub automatically picks up each series at runtime without the need to reconfigure the offloading pipeline.

Each series must have a mandatory value of type Number and an optional unit of type String. If the value is not of type Number, {{< product-c8y-iot >}} DataHub determines a type for each series at runtime of the offloading. It evaluates the runtime type of each value and derives the column type for the corresponding offloading run. If all values for a series can be cast to BOOLEAN, FLOAT, STRUCT or LIST consistently, this will be the type of the resulting column. Otherwise, DataHub will use VARCHAR. If the use case mixes types for the same series, mixed types can appear in the data lake.

{{< c8y-admon-info >}}
Since version 10.16, the {{< product-c8y-iot >}} platform supports the time series model, which is a new internal data model for the measurements collection. For details on how to activate the model see [Enterprise tenant > Enhanced time series support](/users-guide/enterprise-tenant/#timeseries) in the *{{< product-c8y-iot >}} User guide*. {{< product-c8y-iot >}} DataHub supports that data model when offloading the measurements collection. However, the specific case of measurements offloading in the TrendMiner mode is not supported when the time series model is used. When you switch from the default data model to the time series model, measurements offloadings still work. The switch back from the time series model to the default model is not supported. In that case the offloading cannot guarantee that all data is offloaded into the target table. To ensure completeness, you have to re-configure the offloading to use a different target table when switching to the default data model.
{{< /c8y-admon-info >}}

#### Guidelines

When modelling your data, take the following guidelines into account:

|<div style="width:250px">Description</div>
|:---
|The data type of an attribute should be static as otherwise mixed type constellations may occur.|
|When modelling measurements and large volumes of them are likely to be generated, leverage the time series data model. When using this model, the offloading and query performance is typically better compared to the default data model.|
|When modelling measurements, separate the measurements by specifying measurement types. Then each measurement type can be modeled within a separate offloading pipeline, which in turn leads to a cleaner data architecture in the data lake as well as better query performance.|
|Avoid offloading lists with many entries as this leads to broad tables in the data lake.|
|Avoid a large number of columns in the data lake as this adversely affects query performance and complicates data access in follow-up applications.|
|When defining attribute names in your data model, avoid special characters in attribute names. The attribute names are used as column names in the resulting offloading table and special characters may hinder working with those columns in follow-up applications.|
|When modelling data within arrays, ensure that the position of the values within the array is fix throughout the documents being fed into the platform. Otherwise further processing might run into problems.|

#### Limitations

When modeling your data, you have to take the following limitations with respect to the use of {{< product-c8y-iot >}} DataHub into account.

|<div style="width:250px">Description</div>
|:---
|Mixed usage of uppercase and lowercase characters for attribute names in the documents is not supported.|
|If the collection to be offloaded has JSON attributes consisting of more than 32,000 characters, its data cannot be offloaded. One specific case where this limitation applies is Cumulocity IoT's application builder, which stores its assets in the inventory collection when being used.|
|If the collection to be offloaded has more than 800 JSON attributes, its data cannot be offloaded. This limitation also includes nested JSON content, which will be expanded into columns during offloading. Therefore, measurements documents with more than 800 series/series value fragments are not supported.|
|Dremio has announced in its [Dremio 4.0 release notes](https://docs.dremio.com/release-notes/40-release-notes.html#deprecations) to deprecate some functionality on mixed types. Since Dremio 13.2, GROUP BY or DISTINCT over mixed type expressions are no longer supported. It is necessary to cast these expressions to a simple type before using them in a GROUP BY or DISTINCT clause. Also mixed type expressions cannot be used in the SELECT clause, when retrieving data over ODBC or JDBC.|