---
weight: 30
title: Connect to a cloud endpoint
layout: redirect
opensource: true
---

### Connect to Cumulocity IoT

To create a northbound connection, you must establish a local bridge.
To achieve this, use the tedge CLI and the commands described below.

{{< c8y-admon-info >}}
`tedge connect` requires `sudo` privilege.
{{< /c8y-admon-info >}}

Configure the required parameters for thin-edge.io with [tedge config set](/thin-edge/thin-edge-developer-tools/#set):

```shell
sudo tedge config set c8y.url example.{{< domain-c8y >}}.com
```

{{< c8y-admon-tip >}}
If you you are unsure which parameters are required for the command to work, run the command and it will tell you which parameters are missing.
For example, if you execute [tedge connect c8y](/thin-edge/thin-edge-developer-tools/#cumulocity-iot) without any configuration, the following piece of advice will be given:

> ```shell
> $ tedge connect c8y`
> ...
> Error: failed to execute `tedge connect`.
>
> Caused by:
>     Required configuration item is not provided 'c8y.url', run 'tedge config set c8y.url <value>' to add it to config.
> ```

This message explains which configuration parameter is missing and how to add it to configuration. In this case we are told to run `tedge config set c8y.url <value>`.
{{< /c8y-admon-tip >}}

The next step is to have the device certificate trusted by {{< product-c8y-iot >}}. This is done by uploading the certificate of the signee.
You can upload the root certificate via [{{< product-c8y-iot >}} UI](/device-sdk/mqtt/#device-certificates) or with [tedge cert upload](/thin-edge/thin-edge-developer-tools/#upload) as described below.

{{< c8y-admon-info >}}
This command takes the parameter `user`. This is due to the upload mechanism to the {{< product-c8y-iot >}} cloud which uses username and password for authentication.

After issuing this command you are going to be prompted for a password. Usernames and passwords are not stored in the configuration for security reasons.
{{< /c8y-admon-info >}}

```shell
$ sudo tedge cert upload c8y –-user <username>
Password:
```

where `username` is the user in {{< product-c8y-iot >}} with permissions to upload new certificates.

To create the bridge, use [tedge connect](/thin-edge/thin-edge-developer-tools/#tedge-connect-command):

```shell
$ sudo tedge connect c8y
Checking if systemd is available.

Checking if configuration for requested bridge already exists.

Validating the bridge certificates.

Saving configuration for requested bridge.

Restarting mosquitto service.

Awaiting mosquitto to start. This may take up to 5 seconds.

Persisting mosquitto on reboot.

Successfully created bridge connection!

Checking if tedge-mapper is installed.

Starting tedge-mapper service.

Persisting tedge-mapper on reboot.

tedge-mapper service successfully started and enabled!

Sending packets to check connection. This may take up to 10 seconds.

Try 1 / 2: Sending a message to {{< product-c8y-iot >}}. Received expected response message, connection check is successful.
```

### Errors

#### Connection already established

If a connection has already been established, the following error may appear:

```shell
$ sudo tedge connect c8y
Checking if systemd is available.

Checking if configuration for requested bridge already exists.

Error: failed to create bridge to connect {{< product-c8y-iot >}} cloud.

Caused by:
    Connection is already established. To remove existing connection use 'tedge disconnect c8y' and try again.
```

To remove the existing connection and create a new one, follow the advice from the shell prompt and execute [tedge disconnect c8y](/thin-edge/thin-edge-developer-tools/#cumulocity-iot-1):

```shell
$ sudo tedge disconnect c8y
Removing {{< company-c8y >}} bridge.

Applying changes to mosquitto.

{{< company-c8y >}} Bridge successfully disconnected!

Stopping tedge-mapper service.

Disabling tedge-mapper service.

tedge-mapper service successfully stopped and disabled!
```

{{< c8y-admon-info >}}
`tedge disconnect c8y` also stops and disables the tedge-mapper service if it is installed on the device.
{{< /c8y-admon-info >}}

Now you can execute [tedge connect c8y](/thin-edge/thin-edge-developer-tools/#cumulocity-iot) to create a new bridge.

#### Connection check failure

Sample output of `tedge connect` when this error occurs:

```shell
$ sudo tedge connect c8y
Checking if systemd is available.

Checking if configuration for requested bridge already exists.

Validating the bridge certificates.

Saving configuration for requested bridge.

Restarting mosquitto service.

Awaiting mosquitto to start. This may take up to 5 seconds.

Persisting mosquitto on reboot.

Successfully created bridge connection!

Checking if tedge-mapper is installed.

Starting tedge-mapper service.

Persisting tedge-mapper on reboot.

tedge-mapper service successfully started and enabled!

Sending packets to check connection. This may take up to 10 seconds.

Try 1 / 2: Sending a message to {{< company-c8y >}}. ... No response. If the device is new, it's normal to get no response in the first try.
Try 2 / 2: Sending a message to {{< company-c8y >}}. ... No response.
Warning: Bridge has been configured, but {{< company-c8y >}} connection check failed.
```

This error may be caused by some of the following reasons:

- No access to the internet connection

  The local bridge has been configured and is running but the connection check has failed due to no access to the northbound endpoint.

- {{< product-c8y-iot >}} tenant not available

  The tenant couldn't be reached and therefore the connection check has failed.

- Check the bridge

  The bridge configuration is correct but the connection couldn't be established for an unknown reason.

  To retry, start with [tedge disconnect c8y](/thin-edge/thin-edge-developer-tools/#cumulocity-iot-1), removing this bridge:

  ```shell
  sudo tedge disconnect c8y
  ```

  When this is done, execute [tedge connect c8y](/thin-edge/thin-edge-developer-tools/#cumulocity-iot) again.

#### File permissions

Sample output:

```shell
$ tedge connect c8y
Checking if systemd is available.

Checking if configuration for requested bridge already exists.

Validating the bridge certificates.

Saving configuration for requested bridge.

Error: failed to create bridge to connect {{< product-c8y-iot >}} cloud.

Caused by:
    0: File Error. Check permissions for /etc/tedge/mosquitto-conf/tedge-mosquitto.conf.
    1: failed to persist temporary file: Permission denied (os error 13)
    2: Permission denied (os error 13)
```

`tedge connect` cannot access the location to create the bridge configuration (*/etc/tedge/mosquitto-conf*).
Check the permissions for the directory and adjust it to allow `tedge connect` to access it.

Example of incorrect permissions:

```shell
$ ls -l /etc/tedge
dr--r--r-- 2 tedge     tedge     4096 Mar 30 15:40 mosquitto-conf
```

You should give it the permission 755:

```shell
$ ls -l /etc/tedge
drwxr-xr-x 2 tedge     tedge     4096 Mar 30 15:40 mosquitto-conf
```

#### mosquitto and systemd check fails

Sample output:

```shell
$ sudo tedge connect c8y
Checking if systemd is available.

Checking if configuration for requested bridge already exists.

Validating the bridge certificates.

Saving configuration for requested bridge.

Restarting mosquitto service.

Error: failed to create bridge to connect {{< company-c8y >}} cloud.

Caused by:
    Service mosquitto not found. Install mosquitto to use this command.
```

The mosquitto server has not been installed on the system but it is required to run this command.
Refer to [How to install thin-edge.io](/thin-edge/thin-edge-howto/#install-thin-edge) to install mosquitto and try again.
