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

The **Connectivity** tab facilitates the creation/editing/deletion/updation of multiple Sigfox connections for use by different devices

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

Click **Save** to save your settings. If everything is correct, a message "Credentials successfully saved" will be displayed.

To add another connection, click on Add Connection in the bottom left side of the screen and then follow the steps mentioned above to create the new connection.

### Updating connection information for an existing connection

If you wish to update the connection information for a particular connection, navigate to the **Connectivity** page and switch to the **Sigfox provider settings** tab. Select the desired connection. Enter the connection information mentioned above and click **Save** to update the previous connection information

###  Deleting an existing connection

In order to delete an existing connection, go to the Administration and click **Connectivity** in the **Settings** menu and switch to the **Sigfox provider settings** tab.

Select the connection to be deleted. Click on the Delete button which is on the right of connection at the bottom. 

There is a prompt that gives a warning regarding the deletion of the connection. Click on the link **Click to download a list with affected devices**, so that the devices present in the downloaded list can be re-registered to a different connection. For details on these information see the **Registering LoRa devices** section on how to register the device. 

Then click on the **Delete** button in the prompt. Click on **Cancel** to cancel the deletion of connection. 

