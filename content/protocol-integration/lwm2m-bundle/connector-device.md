---
weight: 30
title: LWM2M connector device
layout: redirect
---

The LWM2M connector device is an automatically generated device for the tenants which have a subscription to the LWM2M application.
You can use this device to manage tenant-wide LWM2M devices.
The `help` shell command shows the available operations and how to use them.

Additionally, the bulk device registration status and result are shown under this device.

![LWM2M connector bulk device registration result](/images/device-protocols/lwm2m/lwm2m-connector-device-bulk-device-reg-res.png)

{{< c8y-admon-caution >}}
We recommend you to never delete the connector device.
{{< /c8y-admon-caution >}}

### Migration of the LWM2M devices

Starting from version 10.15.0, the new device registration for LWM2M is introduced.
If LWM2M devices were created earlier and were not already migrated or if they were created later but in a legacy way, use the `migrateLwm2mDevices` command for the tenant.
The command can take comma-separated device managed object IDs as parameters. If IDs are specified, the migration will be done for the respective devices.
If the command is sent without any parameters then all LWM2M devices that have not been migrated will be detected and migrated.

Example usages: `migrateLwm2mDevices 1122,3344` or `migrateLwm2mDevices`

<a name="lwm2m-cleanup-cluster-tenant-objects-for-endpoint-connector-operation"></a>
### Cleanup cluster tenant objects for endpoint

{{< c8y-admon-info >}}
Endpoint refers to the endpoint client ID listed under [Registering LWM2M devices > Mandatory settings](#lwm2m-device-registration-mandatory-settings).
{{< /c8y-admon-info >}}

During LWM2M device registration the tenant route information is stored in the cluster tenant.
If the LWM2M device is only deleted from the tenant, the tenant route information will not be deleted automatically.
This operation can be used for triggering the cleanup of the managed objects in the cluster tenant associated with the device with the endpoint and has to be executed from the tenant that owned the device with the endpoint.

Additionally, the operation can be executed regardless of the existence of the device in the tenant.
Therefore, it is also possible to use it to remove the link between the device and the tenant but still keep the device's history.

Example usage: `cleanupClusterTenantObjectsForEndpoint urn:imei:012345678901234`
