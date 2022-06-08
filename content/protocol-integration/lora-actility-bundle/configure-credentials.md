---
weight: 20
title: Configuring multiple ThingPark account connections
layout: redirect
---



Before using LoRa devices with {{< product-c8y-iot >}}, you need to configure your ThingPark account details in the Administration application. Click the **Connectivity** tab in the **Settings** menu to create, edit, delete or update multiple Actility connections.

<a name="add-new-connection"></a>
### To add a new connection

If you select **Connectivity** for the first time, you are asked to create a connection. Click **Add Connection**.

Enter the following information:

- **Name**: The name of the Actility connection being created.
- **Description**: The description of the Actility connection being created.
- **Actility ThingPark URL**: The Actility ThingPark URL may change based on the type of the Actility ThingPark account we use (for example, Community or Enterprise edition).
- **Profile ID**: This depends on your ThingPark account and environment. If you are using, for example, the Dev1 ThingPark environment your profile ID will be "dev1-api". Multiple tenants can have the same profile ID.
- **Route Application Server ID**: TLS security ID between provider platform and agent. The application server ID should be unique to the route address. This is an optional field. Leave empty to disable security.
- **Route Application Server Key**: TLS security key between provider platform and agent. The value should be in hex and 16 bytes. Do not change the application server key if  the application server ID is not updated. This is an optional field. Leave empty to disable security.
- **Username**: Your ThingPark account username.
- **Password**: Your ThingPark account password.

{{< c8y-admon-info >}}
Do not use the same ThingPark login (username and password) for other tenants.
The profile ID, username and password are used to retrieve an access token to send further requests to the ThingPark platform. It is possible to renew the access token by replacing the account credentials for a particular connection.
{{< /c8y-admon-info >}}

![Setting provider credentials](/images/device-protocols/lora-actility/lora-admin-settings.png)

Click **Save**. If you have entered the correct information, you see the message "Connection created".

To add another connection, click **Add Connection** and follow the steps above.

<a name="update-credentials-in-a-connection"></a>
### To update a connection

Select the connection to be updated, make your edits, and save the connection.


If there are devices associated with the connection, an error message will appear, stating "Can not update the LNS Connection with `<name of LNS Connection>` as it's associated with `<number of devices>`. Visit the following URL to download the file: `/service/<agent-context-path>/lns-connection/<lns-connection-name>/device`".

![Update connection information](/images/device-protocols/lora-actility/lora-admin-settings-update.png)

<a name="delete-connection"></a>
### To delete a connection

Select the connection to be deleted and click **Delete**.

If there are devices associated with the connection, an error message will appear, stating "Can not update the LNS Connection with `<name of LNS Connection>` as it's associated with `<number of devices>`. Visit the following URL to download the file: `/service/<agent-context-path>/lns-connection/<lns-connection-name>/device`".
