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

The **Export** feature allows you to save **Data Points** information to external files. You can export data in formats such as:

- **CSV** (Comma-Separated Values)
- **Microsoft Excel** spreadsheets

While **Export** is a standalone feature, it works in conjunction with other features that allow you to select **Data Points**. For example, you can use Export with the **Data points table** widget, but first it must be **integrated** with such feature.

TODO: add a list where it is integrated already?

{{< c8y-admon-req >}}
ROLES & PERMISSIONS:

- To generate exports: READ permission permission type "Measurement"
  {{< /c8y-admon-req >}}

### To create an export {#to-create-an-export}

{{< c8y-admon-info >}}
Note that in the example below, **Exports** is integrated with the **Data points table** widget.
{{< /c8y-admon-info >}}

1. Click on the exports button:
   <br>![Add export](/images/users-guide/cockpit/cockpit-exports-button.png)<br>
2. You will see the following modal with export configuration:
   <br>![Export configuration](/images/users-guide/cockpit/cockpit-exports-configuration.png)<br>
   Here you can set:

- **Time range** - Select the time range for your export. By default, it's the same time range as configured in the widget's settings.
- **Data scope**
- **Export mode** - Two options are available (see **Differences between export modes** section below for details):
  - Compact (selected by default)
  - Full
- **Aggregation** - Only available when **Compact** mode is selected. The default value is the same as in the widget's configuration. Four options are available:
  - None
  - Minutely
  - Hourly
  - Daily
- **File types** - Choose the file format for exporting data. **Microsoft Excel** is selected by default, with **CSV** as another option. You can select both types simultaneously.

3. Click the **Download** button. The result depends on your chosen export mode:

- If you selected **Compact** mode, all data will be exported to one file and downloaded directly by your browser.
- If you selected **Full** mode, depending on the number of records to process, data will either be available in a single ZIP file (containing one file per **Data point**) or sent via email.

### Differences between export modes {#differences-between-export-modes}

- **Compact** mode:
  - Processes up to 5,000 records per data point, or up to the data retention limit
  - Creates a single merged file containing all the data
  - Provides minimum and maximum values
  - Preview is not available
  - Supports optional data aggregation
- **Full** mode:
  - Processes up to 1,000,000 records per data point, or up to the data retention limit
  - For exports exceeding 50,000 records, data will be sent via email
  - Creates a compressed ZIP file containing separate data files for each selected data point
  - Preview is available
  - Does not support data aggregation

### Handling data points with over one million records {#data-points-with-over-one-million-records-to-process}\*\*

When using **Full** export mode, if the total number of data records for **all** selected **Data points** exceeds one million (our processing limit), the download will be disabled until you narrow the time range. In this case, the following message will be shown:
<br>![Export exceeded one million records](/images/users-guide/cockpit/cockpit-exports-one-million-for-single-data-point.png)<br>
If only some **Data points** exceed the limit, those specific **Data points** will be **excluded** from the export until the time range is narrowed.
