---
weight: 30
title: Integrating Cumulocity IoT DataHub with Microsoft Power BI
layout: redirect
---

Microsoft Power BI is a business intelligence tool which allows you to create and use interactive reports for data from various sources. These reports can also be built on your IoT data. Given your devices are connected with the {{< product-c8y-iot >}} platform, you can utilize {{< product-c8y-iot >}} DataHub to offload the data into a data lake of your choice. Then you can create a Microsoft Power BI report which is based on the data in the data lake. {{< product-c8y-iot >}} DataHub allows you to access and work with these reports from within the {{< product-c8y-iot >}} DataHub web frontend.

### Prerequisites

Before setting up the connection to Microsoft Power BI in {{< product-c8y-iot >}} DataHub, conduct the following steps.

#### Accessing data lakes in Microsoft Power BI reports

DataHub leverages the native interaction between Microsoft Power BI and Dremio. Microsoft Power BI reports can consume data from data lakes using Dremio as query and data access layer. When creating a new report in Microsoft Power BI desktop, you can select Dremio as a database on the Dremio website [(https://docs.dremio.com/client-applications/microsoft-power-bi/)](https://docs.dremio.com/client-applications/microsoft-power-bi/) and establish a connection to the Dremio cluster. With this connection you have access to the data lakes connected to Dremio.

>**Info:** The Microsoft Power BI datasets should use the DirectQuery mode, which prevents replicating and caching the data from the data lake.

A report is typically published so that it is available to other users as well. For a published report it is currently required to deploy a Microsoft Power BI gateway which establishes the connection between Microsoft Power BI and Dremio. See the tutorial on the Dremio website [(https://www.dremio.com/tutorials/connecting-power-bi-gateway-to-dremio/)](https://www.dremio.com/tutorials/connecting-power-bi-gateway-to-dremio/) for detailed instructions.

#### Configuring access to Microsoft Power BI reports

To make reports available in its web frontend, {{< product-c8y-iot >}} DataHub embeds Microsoft Power BI content. Users neither have to sign in to Microsoft Power BI nor need a Microsoft Power BI license to access the reports. For authenticating the access an Azure Active Directory service principal object with an application secret is used.

The following configuration steps are required, as discussed in detail in the corresponding Microsoft documentation [(https://docs.microsoft.com/en-us/power-bi/developer/embedded/embed-sample-for-customers)](https://docs.microsoft.com/en-us/power-bi/developer/embedded/embed-sample-for-customers).

As prerequisite you need an Azure Active Directory tenant. If you do not have an Azure Active Directory, follow the instructions in the Microsoft documentation [(https://docs.microsoft.com/en-us/power-bi/developer/embedded/create-an-azure-active-directory-tenant)](https://docs.microsoft.com/en-us/power-bi/developer/embedded/create-an-azure-active-directory-tenant).

Next you have to register an Azure Active Directory application, which serves as service principal. You have to configure the service principal application to access the REST APIs of Microsoft Power BI, following the instructions on the [Power BI website](https://app.powerbi.com/embedsetup):

1. Select **Embed for your customers**.
2. Sign in to Power BI.
3. Register an application with respective permissions.
4. Skip creating a workspace and importing content.
5. Grant permissions to the service principal.

>**Info:** An application created with the wizard can be used as a service principal even though the documentation states the opposite.

Alternatively, you can create a service principal application following the section *Creating an Azure AD app in the Microsoft Azure portal* on the Microsoft website [(https://docs.microsoft.com/en-us/power-bi/developer/embedded/embed-service-principal)](https://docs.microsoft.com/en-us/power-bi/developer/embedded/embed-service-principal).

Additionally, you need to add a client secret for the service principal application. You can do that via the [Azure portal](https://portal.azure.com/). Search for **App registrations**, select your application by its name under **All applications**, and click the link next to the **Client credentials** entry on the **Overview** page of the application.

Next you can define a workspace to organize your reports. By adding the service principal application as a member or admin to the workspace, it can access the reports of the workspace. Go to the [Power BI website](https://app.powerbi.com) and conduct the following steps to grant the permissions:

1. Sign in to Power BI.
2. Click **Workspaces**.
3. Select the context menu of the workspace to share with the service principal.
4. Select **Workspace access**.
5. Enter the name of your recently created service principal application and grant the *Member* or *Admin* permission.

Only workspaces granting access to the service principal application can be browsed from within {{< product-c8y-iot >}} DataHub. Once the workspace is available, you can publish reports to it and access it in {{< product-c8y-iot >}} DataHub.

### Setting up the connection in {{< product-c8y-iot >}} DataHub

In the navigator, select **Settings** and then **Microsoft Power BI** to define the connection settings.

|Settings|Description|
|:---|:---|
|Azure Active Directory tenant ID|The ID of the Azure Active Directory tenant. Within the tenant, an Azure Active Directory application must exist with a service principal that is allowed to access corresponding resources of Microsoft Power BI.|
|Client ID|The ID of the Azure Active Directory application which has permissions to call the REST APIs of Microsoft Power BI.|
|Client secret|The client secret, which is configured for the Azure Active Directory application.|

Once all settings are completed, click **Save** on the action bar to save the settings and establish the connection.

If you want to delete the settings, click **Delete** on the action bar. You cannot access reports afterwards.

### Working with reports

Once the settings are defined, you can access and work with the reports.

1. In the navigator, select **Microsoft Power BI**. The menu entry is only shown if the connection settings are defined.

2. On the **Reports** page, click **Add report** in the action bar. A dialog opens with two dropdown boxes. The first dropdown box lists all workspaces which grant member or admin access to the service principal. Select the workspace you are interested in. The second dropdown box provides all reports of the selected workspace. Select a report from the dropdown box.

3. Click **Select** to open the report or **Cancel** to close the dialog without selecting a report.

The selected report is shown and can be interacted with. You can open multiple reports. For each opened report, a tab entry shows up in the action bar. To close the currently selected report, click **Remove report** in the action bar.

>**Info:** The list of currently opened reports is not stored permanently. When closing the browser, the list will be flushed. It will also be flushed if the settings are deleted.
