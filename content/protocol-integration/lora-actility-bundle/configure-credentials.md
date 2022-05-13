---
weight: 20
title: Configuring Multiple ThingPark account connections
layout: redirect
---



Before using LoRa devices with {{< product-c8y-iot >}}, you need to configure your ThingPark account details in the Administration application. The **Connectivity** tab in the **Settings** menu of the **Administration** application facilitates the creation/editing/deletion/updation of multiple Actility connections.

### <a name="create-new-connection">Creating a new connection</a>

If you select **Connectivity** for the first time, you are asked to create a connection. Click on **Add Connection**. 

Enter the following information:

- **Name**: The name of the Actility connection being created. 
- **Description**: The description of the Actility connection being created. 
- **Actility ThingPark URL**: The Actility ThingPark URL may change based on the type of the Actility ThingPark account we use (for example Community or Enterprise edition). 
- **Profile ID**: This depends on your ThingPark account and environment. If you are using, for example, the Dev1 ThingPark environment your profile ID will be "dev1-api". Multiple tenants can have the same profile ID.
- **Route Application Server ID**: TLS security id between provider platform and agent. Application server id should be unique to route address. This is an optional field. Leave empty to disable security.
- **Route Application Server Key**: TLS security key between provider platform and agent. The value should be in hex and 16 bytes. Do not change application server key if Application server id is not updated. This is an optional field. Leave empty to disable security.
- **Username**: Your ThingPark account username.
- **Password**: Your ThingPark account password.

Note: Do not use the same ThingPark login (username and password) for other tenants.
The profile ID, username and password are used to retrieve an access token to send further requests to the ThingPark platform. It is possible to renew the access token by replacing the account credentials for a particular connection. 

![Setting provider credentials](/images/device-protocols/lora-actility/lora-admin-settings.png)

Click **Save**. If you have entered the correct information, you see the message "Connection created".

To add another connection, click on **Add Connection** and then follow the above steps. 

<a name="update-credentials-in-a-connection"></a>
### Updating existing connection

Select the existing connection and update the required fields and Save the connection.

WARNING: When the connection is updated, currently it is updated, without displaying the devices associated with the connection. 

![Update connection information](/images/device-protocols/lora-actility/lora-admin-settings-update.png)

### <a name="delete-connection">Deleting an existing connection</a>

Select the connection to be deleted and click on the Delete button. 

A warning message appears if there are devices associated with the selected connection with the link **Click to download a list with affected devices**. Clicking on the link downloads a file which contains devices associated with the selected connection. Re-register the devices to a different connection before deleting the connection.  

WARNING: When the connection is deleted, currently it is deleted, without displaying the devices associated with the connection. 




