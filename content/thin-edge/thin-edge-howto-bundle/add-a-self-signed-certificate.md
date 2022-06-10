---
weight: 90
title: Add a self-signed certificate to the trusted certificates list
layout: redirect
opensource: true
---

### Overview

If the server you are trying to connect thin-edge.io to is presenting a certificate with a root that is not currently trusted, you can add the server's root certificate to the list of trusted root certificates.
For the most part the store will be filled with certificates from your TLS/SSL provider, but if you want to use self-signed certificates you may need to update your local certificate store.
Below are instructions on how to add a new CA certificate and update the certificate store.

{{< c8y-admon-info >}}
The instructions provided are for supported OSes and may not apply to the flavour you are running. If you need help with another OS, consult the appropriate documentation.
{{< /c8y-admon-info >}}

### Ubuntu and Raspberry Pi OS

 If you do not have the `ca-certificates` package installed on your system, install it with your package manager:

 ```shell
 sudo apt install ca-certificates
 ```

To add a self-signed certificate to the trusted certificate repository on the thin-edge.io system:

Create a `/usr/local/share/ca-certificates/` directory if it does not exist in your file system:

```shell
sudo mkdir /usr/local/share/ca-certificates/
```

The directory should be owned by `root:root` and have `755` permissions set for it. The certificates files should be `644`.

Copy your root certificate (in `PEM` format with `.crt` extension) to the created directory:

```shell
sudo cp <full_path_to_the_certificate> /usr/local/share/ca-certificates/
```

Install the certificates:

```shell
$ sudo update-ca-certificates
Updating certificates in /etc/ssl/certs...
1 added, 0 removed; done.
Running hooks in /etc/ca-certificates/update.d...
done.
```

To check if the certificate was correctly installed:

```shell
sudo ls /etc/ssl/certs | grep <certificate_name>
```

Additionally you can check the correctness of the installed certificate:

```shell
sudo cat /etc/ssl/certs/ca-certificates.crt | grep -f <full_path_to_the_certificate>
```
