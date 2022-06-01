---
weight: 20
title: Create a self-signed certificate
layout: redirect
opensource: true
---

To create a new certificate you can use the thin-edge.io command [tedge cert create](/thin-edge/thin-edge-developer-tools/#create):

```shell
sudo tedge cert create --device-id alpha
```

{{< c8y-admon-info >}}
`tedge cert` requires `sudo` privilege. This command provides no output on success.
{{< /c8y-admon-info >}}

The command [sudo tedge cert create](/thin-edge/thin-edge-developer-tools/#create) will create a certificate in a default location (*/etc/tedge/device-certs/*).
To use a custom location, refer to [tedge config](/thin-edge/thin-edge-developer-tools/#tedge-config-command).

Now you should have a certificate in the */etc/tedge/device-certs/* directory.
Verify with the following command:

```shell
$ ls /etc/tedge/device-certs/
/etc/tedge/device-certs/tedge-certificate.pem
```

#### Errors

##### Certificate creation fails due to invalid device ID

If the device ID contains unsupported characters, `tedge cert create` will fail with the below error:

```plain
Error: failed to create a test certificate for the device +.

Caused by:
    0: DeviceID Error
    1: The string '"+"' contains characters which cannot be used in a name [use only A-Z, a-z, 0-9, ' = ( ) , - . ? % * _ ! @]
```


##### Certificate already exists in the given location

If the certificate already exists you may see the following error:

```plain
Error: failed to create a test certificate for the device alpha.

Caused by:
    A certificate already exists and would be overwritten.
            Existing file: "/etc/tedge/device-certs/tedge-certificate.pem"
            Run `tedge cert remove` first to generate a new certificate.
```

{{< c8y-admon-warning >}}
Removing a certificate can break the bridge and more seriously delete a certificate that was a CA-signed certificate.
{{< /c8y-admon-warning >}}

Follow the instruction in the error message to remove the existing certificate and execute [tedge cert remove](/thin-edge/thin-edge-developer-tools/#remove):

```shell
sudo tedge cert remove
```

and try [tedge cert create](/thin-edge/thin-edge-developer-tools/#create) once again.
