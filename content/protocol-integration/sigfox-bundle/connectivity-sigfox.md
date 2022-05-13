---
weight: 20
title: Managing the connectivity settings
layout: redirect
---


Before you register a device, you must configure Sigfox Cloud credentials in the **Connectivity** page in the Administration application. You must set up these Sigfox Cloud credentials in Sigfox.

Before you create API access to {{< product-c8y-iot >}}, you must have an "Associated user" which is added to the {{< product-c8y-iot >}} group in Sigfox Cloud and has the following profiles:

- Customer [R]
- Device Manager [W]

> **Important:** Without the profiles described below, the required Sigfox API access can not be set up.

### Step 1

If you already have an associated user make sure it has the profiles mentioned below and proceed to step 2.

The group name is not constrained. "Cumulocity" is used as a sample group name throughout the remaining steps.

First, enter into your Sigfox Cloud account and create a new user. Add the user to the group and select the "Customer [R]" and "Device Manager [W]" profiles.

![New user](/images/device-protocols/sigfox/sigfox-newuser.png)

### Step 2

After creating an "Associated user" with the proper group and profiles navigate to the **Groups** page. In the **API access** tab, create a new entry and add the following profiles:

- Customer [R]
- Device Manager [W]

![API access page](/images/device-protocols/sigfox/sigfox-api-access.png)

### Step 3

After the API access entry has been created, you can connect your Sigfox Cloud account to {{< product-c8y-iot >}} via the **Connectivity** page in the Administration application. Navigate to the **Connectivity** page and switch to the **Sigfox provider settings** tab. 

The **Connectivity** tab facilitates the creation/editing/deletion/updation of multiple Sigfox connections.

The following information must be provided in order to create a connection:

- **Name**: The name of the Sigfox connection being created. 
- **Description**: The description of the Sigfox connection being created. 
- **Login:** The login token is located in the API access entry in the Sigfox Cloud.
- **Password:** The password token is located in the API access entry in the Sigfox Cloud next to **Password**.
- **Parent Group ID:** This ID is written in your URL when you are logged into your Sigfox account and you have selected the "Cumulocity" group. For example, "https://backend.sigfox.com/group/**9823ruj29j9d2j9828hd8**/info".
- **Base URL:** This is the URL that points to the Sigfox Cloud account

> **Info:** The group name in the screenshot below is only an example. It does not necessarily have to be "Cumulocity".

![API access page](/images/device-protocols/sigfox/sigfox-parentgroupid.png)

![API access page](/images/device-protocols/sigfox/sigfox-connectivity.png)

Click **Save**. If you have entered the correct information, a message "Credentials successfully saved" will be displayed.

To add another connection, click on **Add Connection** and then follow the above steps.

### Updating existing connection

Select the existing connection and update the required fields and Save the connection.

WARNING: When the connection is updated, currently it is updated, without displaying the devices associated with the connection. 

###  Deleting an existing connection

Select the connection to be deleted and click on the Delete button. 

A warning message appears if there are devices associated with the selected connection with the link **Click to download a list with affected devices**. Clicking on the link downloads a file which contains devices associated with the selected connection. Re-register the devices to a different connection before deleting the connection.  

WARNING: When the connection is deleted, currently it is deleted, without displaying the devices associated with the connection. 

