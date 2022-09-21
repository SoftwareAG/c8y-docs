---
weight: 25
title: Device registration via Cumulocity IoT
layout: redirect
---

<a name="cumulocity-loriot-connection-configuration">
### Creation of Loriot LNS Connection in Cumulocity</a>

Before using LoRa devices with {{< product-c8y-iot >}}, you must configure the {{< product-c8y-iot >}} Loriot agent endpoint details in the Administration application. Click the **Connectivity** tab in the **Settings** menu to create, edit, delete or update multiple Loriot connections.

<a name="add-new-connection"></a>
#### To add a new connection

When you select **Connectivity** for the first time, you are asked to create a connection. Click **Add Connection**.

Enter the following information:

- **Name**: The name of the Loriot connection being created.
- **Base URL**: The URL associated with the Loriot provider account.
- **Username**: Your Loriot account username.
- **Password**: Your Loriot account password.

Click **Save**. If the information you have entered is correct, the message "Connection created" appears.

To add another connection, click **Add Connection** and follow the steps above.

{{< c8y-admon-info >}}
Always keep the **Gateway Information** option enabled because the Loriot agent only processes "gw" (gateway information) messages.
{{< /c8y-admon-info >}}

![Enable gateway information option](/images/device-protocols/lora-loriot/loriot-gateway-option-enabled.png)

<a name="update-credentials-in-a-connection"></a>
#### To update a connection

Select the connection to be updated, make your edits, and save the connection.


If there are devices associated with the connection, an error message appears, stating "Can not update the LNS Connection with `<name of LNS Connection>` as it's associated with `<number of devices>`. Click the link to download the file with the details of the associated devices: `/service/<agent-context-path>/lns-connection/<lns-connection-name>/device`".

![Update connection information](/images/device-protocols/lora-loriot/loriot-admin-settings-update.png)

<a name="delete-connection"></a>
#### To delete a connection

Select the connection to be deleted and click **Delete**.

If there are devices associated with the connection, an error message appears, stating "Can not delete the LNS Connection with `<name of LNS Connection>` as it's associated with `<number of devices>`. Click the link to download the file with the details of the associated devices: `/service/<agent-context-path>/lns-connection/<lns-connection-name>/device`".

![Delete connection](/images/device-protocols/lora-loriot/loriot-admin-settings-delete.png)

<a name="loriot-device-registration">
### Loriot device registration via API</a>

After the Loriot LNS connection is created, the device can be registered using the REST API, whose endpoint and POST body are as follows:

POST <kbd>{{url}}/service/loriot/newDeviceRequest</kbd>

The body of the POST request:

```
{
    "title": "<<Title of the device>>",
    "deveui":"<<This is the unique identifier for the device. It is a 16 character (8 byte) long uppercase hexadecimal number>>",
    "appeui":"<<This is a global application ID in the IEEE EUI64 address space that uniquely identifies the application provider of the device. It is a 16 character (8 byte) long hexadecimal number>>",
    "appkey":"<<This is an AES-128 application key specific for the device that is assigned to the device by the application owner and is responsible to encrypt. The application key is a 32 character (16 byte) long hexadecimal number>>",
    "appid":"<<This is the Application ID with which the Device is associated. It is a hexadecimal number>>",
    "deviceType": {
        "id": "<<ID of the Device Protocol>>",
        "name": "<<Name of the Device Protocol>>"
    },
    "lnsConnectionName":"<<Name of the Loriot LNS Connection>>"
}
```
