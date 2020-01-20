---
weight: 30
title: Decomposition of complex additional columns
layout: redirect
---

You may have stored complex data using JSON fragments as an additional column in a Cumulocity collection. As described in section [Additional settings](/datahub/configuring-offloaded#basic-functionality-additional-settings), you can add additional columns so that they are included in the offloading process. Within these additional columns, you can apply functions to decompose the fragments into flat data.

Writing these functions is often an iterative process that requires multiple adaptations of the underlying logic. DataHub Console is not a full-fledged SQL editor supporting the user during query development with features like content completion. In order to get such support, you can leverage Dremio. First, you define a dummy offloading configuration which moves a small portion of the data into the data lake for testing purposes. You can use the filter predicate to retrieve such a portion of the data, e.g., by specifying a condition `WHERE creationTime BETWEEN '2019-10-01' AND '2019-10-27'`. Second, you can open the table created by the offloading configuration with Dremio; using Dremio's SQL editor, you can then develop the extraction logic.  Once your decomposition logic for your additional columns is complete, you can copy the column transformations and use them to define a corresponding offloading configuration in DataHub Console. Once that is done, the test offloading pipeline can be deleted.