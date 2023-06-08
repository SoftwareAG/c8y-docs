---
weight: 20
title: Security token policy
layout: redirect
---

Configure the security token policy to reduce the risk of devices which are not yet registered being taken over by threat actors, for example, by guessing their serial numbers.

{{< c8y-admon-info >}}
The feature requires  READ permission for "Option management". If the permission is missing, the security token policy defaults to OPTIONAL.
{{< /c8y-admon-info >}}

{{< product-c8y-iot >}} supports the following values for the security token policy:

* IGNORED - Even if a device requires secure registration, {{< product-c8y-iot >}} will ignore that requirement.
* OPTIONAL - If a device requires secure registration, {{< product-c8y-iot >}} will request an additional security token from the user.
* REQUIRED - All devices connected to {{< product-c8y-iot >}} must use a security token during registration.

The policy can be configured by setting the following tenant option with one of the values listed above, for example:

```json
{
  "category": "device-registration",
  "key": "security-token.policy",
  "value": "IGNORED"
}
```

{{< c8y-admon-info >}}
The **Pending acceptance** screen might differ depending on the [security token policy](#security-token-policy-for-device-registration).
{{< /c8y-admon-info >}}

### Ignored security token policy

With a value of IGNORED for the security token policy, a device connected to {{< product-c8y-iot >}} can be accepted without any token validation:

![Accepting devices registrations under ignored security token policy](/images/users-guide/DeviceManagement/devmgmt-at-register-device-pending-acceptance-ignored-security.png)

### Optional security token policy

The list of device registrations is presented in the image below. Note that the input for security token is displayed for all devices.

![Accepting devices registrations under optional security token policy](/images/users-guide/DeviceManagement/devmgmt-at-register-device-pending-acceptance-optional-security.png)

**Registration without using a security token**

When a device connected to {{< product-c8y-iot >}} doesn't use a security token, the registration can proceed without providing any value in the security token input.

If a security token is provided for a device which is connected insecurely, it will be accepted and the token will be ignored.

**Registration using a security token**

When a device connected to {{< product-c8y-iot >}} does use a security token, the registration can be completed only if the user provides a token matching the one sent by the device on establishing the connection.

![Providing a token for device registration request in optional security token policy](/images/users-guide/DeviceManagement/devmgmt-at-register-device-pending-acceptance-optional-security-enter-token.png)

In the case of providing an incorrect token, an error message will be displayed informing about a mismatch between the value used by the device and the value provided via the user interface.

After a certain amount of failed attempts, the registration will reach the blocked state, indicated by a corresponding error message.
The blocked registration must be removed before the next attempt to connect the device.

**Limited  usage of "Accept all" feature**

The **accept all** feature is supported for devices connected to {{< product-c8y-iot >}} without the usage of a security token.

For any device which uses a security token, the **accept all** feature is not available and will display a warning message. The details of the warning message provide the list of devices which could not be accepted automatically.

Such devices must be accepted manually by providing the correct **Security token** value and clicking **Accept**.


### Required security token policy

In this mode any device connected to {{< product-c8y-iot >}} must use a security token on establishing the connection and the user must enter the same token when accepting the device.

The procedure of accepting devices is the same as described in [Optional security token policy](#optional-security-token-policy).

While in this mode, any devices connecting to {{< product-c8y-iot >}} without a security token will be blocked and it won't be possible to complete their registration.
