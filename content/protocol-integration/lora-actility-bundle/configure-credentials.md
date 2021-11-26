---
weight: 20
title: Configuring ThingPark account credentials and application EUI
layout: redirect
---


Before using LoRa devices with {{< product-c8y-iot >}}, you need to configure your ThingPark account details in the Administration application. In order to create new credentials or replace existing ones, go to the Administration application and select **Connectivity** in the **Settings** menu in the navigator.

### <a name="create-new-credentials">Creating new account credentials</a>

If you go to **Connectivity** for the first time, you will be asked to provide credentials, actility ThingPark URL and application EUI which is used for LoRa device provisioning.

Enter the following information:

- **actility ThingPark URL**: The Actility API URL may change based on the type of the ThingPark Actility account we use (e.g. Community or Enterprise edition). This is an optional field, and the default value is considered if nothing is entered.
- **profile ID**: This depends on your ThingPark account and environment. If you are using, for example, the Dev1 ThingPark environment your profile ID will be "dev1-api". Multiple tenants can have the same profile ID.
- **username**: Your ThingPark username.
- **password**: Your ThingPark password.
- **application EUI**: This is a global application ID in the IEEE EUI64 address space that uniquely identifies the application provider of the device. It is a 16 character (8 byte) long hexadecimal number. There can be only one application EUI for a tenant but multiple tenants can have the same application EUI.

Do not use the same ThingPark login (username and password) for other tenants.
The profile ID, username and password are used to retrieve an access token to send further requests to the ThingPark platform. It is possible to renew the access token by replacing the account credentials.

![Setting provider credentials](/images/device-protocols/lora-actility/lora-admin-settings.png)

Click **Save connectivity settings**. If everything is okay, there will be a message "Credentials successfully saved".

<a name="replace-credentials"></a>
### Updating connectivity settings

In order to update your connectivity settings, click **Update connectivity settings**.

Enter your actility ThingPark URL, profile ID, username, password and application EUI (for details on actility thingPark URL, profile ID and application EUI see [Creating new account credentials](#create-new-credentials).)

![Update connectivity settings](/images/device-protocols/lora-actility/lora-admin-settings-update.png)

Click **Save connectivity settings**. Your old connectivity settings will now be replaced with the new ones.
