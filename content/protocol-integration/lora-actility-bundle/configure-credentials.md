---
weight: 20
title: Configuring Multiple ThingPark account connections
layout: redirect
---



Before using LoRa devices with {{< product-c8y-iot >}}, you need to configure your ThingPark account details in the Administration application. In order to create a new connection or edit an existing connection, navigate to the Administration application and select **Connectivity** in the **Settings** menu in the navigator. The **Connectivity** tab facilitates the creation/editing/deletion/updation of multiple Actility connections for use by different devices

### <a name="create-new-connection">Creating a new connection</a>

If you select **Connectivity** for the first time, you are asked to create a connection. Click on Add Connection in the bottom left side of the screen. 

Enter the following information:

- **Name**: The name of the Actility connection being created. 
- **Description**: The description of the Actility connection being created. 
- **Actility ThingPark URL**: The Actility ThingPark URL may change based on the type of the Actility ThingPark account we use (for example Community or Enterprise edition). 
- **Profile ID**: This depends on your ThingPark account and environment. If you are using, for example, the Dev1 ThingPark environment your profile ID will be "dev1-api". Multiple tenants can have the same profile ID.
- **Route Application Server ID**: TLS security id between provider platform and agent. Application server id should be unique to route address. Leave empty to disable security.
- **Route Application Server Key**: TLS security key between provider platform and agent. The value should be in hex and 16 bytes. Do not change application server key if Application server id is not updated. Leave empty to disable security.
- **Username**: Your ThingPark account username.
- **Password**: Your ThingPark account password.

Do not use the same ThingPark login (username and password) for other tenants.
The profile ID, username and password are used to retrieve an access token to send further requests to the ThingPark platform. It is possible to renew the access token by replacing the account credentials for a particular connection. 

![Setting provider credentials](/images/device-protocols/lora-actility/lora-admin-settings.png)

Click **Save**. If you have entered the correct information, you see the message "Connection created".

To add another connection, click on Add Connection in the bottom left side of the screen and then follow the steps mentioned above to create the new connection. 

<a name="update-credentials-in-a-connection"></a>
### Updating connection information for an existing connection

In order to update your connection information for a particular connection, go to Administration and click **Connectivity** in the **Settings** menu.

Select the connection for which the credentials need to be updated. Enter the new name, description, Actility ThingPark URL, profile ID, route application server ID, route application server key, username, and password as requested. For details on these information see [create-new-connection](#create-new-connection).

![Update connection information](/images/device-protocols/lora-actility/lora-admin-settings-update.png)

Click **Save**, the old connection information is now replaced with your new connection information.

### <a name="delete-connection">Deleting an existing connection</a>

In order to delete an existing connection, go to Administration and click **Connectivity** in the **Settings** menu.

Select the connection to be deleted. Click on the Delete button which is on the right of connection at the bottom. 

There is a prompt that gives a warning regarding the deletion of the connection. Click on the link **Click to download a list with affected devices**, so that the devices present in the downloaded list can be re-registered to a different connection. For details on these information see the **Registering LoRa devices** section on how to register the device. 

Then click on the **Delete** button in the prompt. Click on **Cancel** to cancel the deletion of connection. 




