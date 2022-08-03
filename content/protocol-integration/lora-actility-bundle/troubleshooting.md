---
weight: 90
title: Troubleshooting
layout: redirect
---

<a name="lora-device-registration-troubleshooting"></a>
### Device registration

#### Access to device denied

This warning message shows up when there already exists a provisioned device in ThingPark with the same device EUI used for device registration and the validation comparing those devices based on application EUI (for OTAA activation) and device profile has failed.

To resolve this, provide the correct application EUI from [Connectivity](#configure-credentials) application and device profile and try again.

#### No LoRa provider settings found

This warning message shows up when there are no credentials set up for the ThingPark account.

To resolve this, refer to [Configure ThingPark credentials](#configure-credentials).

#### Getting device profiles from provider failed

This warning message shows up when the tenant's access token to Actility Thingpark becomes invalid. Invalidation of the token might happen when the same ThingPark credentials are used for another tenant.

This issue can be solved by reconfiguring the ThingPark credentials to renew the access token. Refer to [configure ThingPark credentials](#configure-credentials) for reconfiguration of the credentials.

#### No device protocols configured

This warning message shows up when no LoRa device protocol exists to be used for device registration.

To resolve this, configure at least one device protocol in the [Device database](/users-guide/device-management/#managing-device-types).

#### No connectivity plans with free slots available

This warning message shows up when the connectivity plan in ThingPark has reached the limit for the device count.

To resolve this, either contact ThingPark on the device quota limits for your connectivity plans or remove unused devices from ThingPark and retry registering the device in {{< product-c8y-iot >}}.

<a name="lora-connectivity-troubleshooting"></a>
### Connectivity

#### Authentication to the Actility platform failed. Check if the base URL is correct.

To resolve this, provide a correct URL and try again.

#### Authentication to the Actility platform failed with status code '400'. Check if the profile ID is correct.

To resolve this, provide a correct profile ID and try again.

#### Authentication to the Actility platform failed with status code '401'. Check if the credentials are correct.

To resolve this, provide a correct username and password and try again.
