---
weight: 50
title: Working with exports
layout: bundle
outputs:
  - html
  - json
sector:
  - app_enablement
---

The **Export** feature allows you to save **Data points** information to external files. You can export data in formats such as:

- **CSV** (Comma-Separated Values)
- **Microsoft Excel** spreadsheets

While **Export** is a standalone feature, it works in conjunction with other features that allow you to select **Data points**. For example, you can use **Export** with the [Data points table](/cockpit/widgets-collection/#data-point-table) widget, but first it must be integrated with such feature.

{{< c8y-admon-req >}}
ROLES & PERMISSIONS:

- To generate exports: READ permission permission type "Measurement"
{{< /c8y-admon-req >}}

### To create an export {#to-create-an-export}

{{< c8y-admon-info >}}
Note that in the example below, **Export** is integrated with the **Data points table** widget.
{{< /c8y-admon-info >}}

1. Click the **Export** button:

   <br>![Add export](/images/users-guide/cockpit/cockpit-exports-button.png)<br>

2. You see the **Generate export** dialog window, which allows you to configure the export further. 

   <br>![Export configuration](/images/users-guide/cockpit/cockpit-exports-configuration.png)<br>
   In this dialog window you can configure the following options:

   - **Time range**: Select the time range for your export. By default, it uses the same time range as configured in the widget's settings.
   - **Data scope**
     - **Export mode**: The following two options are available:
       - Compact (selected by default) - all data will be exported to one file and downloaded directly by your browser.
       - Full - depending on the number of records to be processed, the data will either be available in a single ZIP file (containing one file per **Data point**), sent by email or not exportable at all.
     - **Aggregation**: Only available when you select the **Compact** mode. The default value is the same as in the widget's configuration. The following four options are available:
       - None
       - Minutely
       - Hourly
       - Daily
   - **File types**: Select the file format for exporting data. **Microsoft Excel** is selected by default, with **CSV** as another option. You can select both types simultaneously.

3. Click the **Download** button. The result depends on your chosen export mode.

### Differences between export modes {#differences-between-export-modes}

See below for the details of each export mode available to you. 
- **Compact**:
  - Processes up to 5,000 records per data point, or up to the data retention limit
  - Creates a single merged file containing all the data
  - Provides minimum and maximum values
  - Preview is not available
  - Supports optional data aggregation
- **Full**:
  - Processes up to 1,000,000 records per data point, or up to the data retention limit
  - For exports exceeding 50,000 records, data will be sent via email
  - Creates a compressed ZIP file containing separate data files for each selected data point
  - Preview is available
  - Does not support data aggregation

### Handling data points with over one million records {#data-points-with-over-one-million-records-to-process}

When using **Full** export mode, if you select a single **Data point** that contains more than one million records (our processing limit), the download option will be disabled. To proceed with the export, you'll need to reduce the number of records by narrowing the time range. In this situation, until then, you'll see the following message:

<br>![Export exceeded one million records](/images/users-guide/cockpit/cockpit-exports-one-million-for-single-data-point.png)<br>

When selecting multiple **Data points** for export in **Full** mode, if any individual **Data point** exceeds the one million record limit **per Data point**:

- The **Data points** exceeding the limit will be **excluded** from the export.
- All other **Data points** within the limit remain exportable.
- To include the excluded **Data points**, you need to narrow the time range.

In this case, you will see a more detailed informational message explaining how many **Data points** are affected and why:

<br>![Export exceeded one million records](/images/users-guide/cockpit/cockpit-exports-one-million-for-single-data-point-with-other-data-points.png)<br>
