---
weight: 41
title: Managing trusted certificate settings
layout: redirect
helpcontent:
  - label: trusted-certificates
    title: Trusted certificates
    content: "This section describes how to fine-tune various certificate configurations."
---

{{< product-c8y-iot >}} allows administrators to fine-tune various certificate configurations.
Currently, CRL (Certificate Revocation List) is supported.

{{< c8y-admon-info >}}
This section is meant for advance users, for granular control over certificates attributes like CRL, OCSP, Certificate
Policy and PKI.
If you are unfamiliar with these terms it's advisable to leave the defaults.
Bad configuration might result in changes which cant be reversed.
{{< /c8y-admon-info >}}

### CRL settings {#crl-settings}

In general, CRL (Certificate Revocation List) contains a list of serial numbers of revoked certificates.
These are issued by certificate authorities (CAs) periodically and published through an endpoint called CDP (CRL
Distribution Point).
Revocation reasons and dates are included in the CRL.

In {{< product-c8y-iot >}} terms, if there is a breach at device certificates signed by a trusted certificate, users
can inform the platform about the revoked certificates in two ways:

1. Online revocation :
    The trusted CA maintains the Certificate Revocation Lists with the list of certificate serial numbers that are
   breached and provides this information in the form of a CDP (CRL Distribution Point).
2. Offline revocation :
    The trusted CA doesn't maintain the revocation details of the certificates, in which case, the platform users
   can manually upload the serial numbers of the revoked certificates.

Note that both online and offline CRL checks are by default **unchecked**.

{{< c8y-admon-important >}}
Certificate revocation is an irreversible process.
{{< /c8y-admon-important >}}

#### To enable online revocation {#to-enable-online-revocation}

1. Click **CRL check** in the upper right corner of the screen.
2. Enable **Online** option.

![CRl Details](/images/users-guide/DeviceManagement/devmgmt-crl-option-check.png)

#### To enable offline revocation

1. Click **CRL check** in the upper right corner of the screen.
2. Check the **Offline** checkbox.
3. To add revoked certificate serial numbers manually, enter the serial number and date in **Revoked certificates list**
   panel.

   Use the `+` button to add new entries in the format below:
   | Field | Description |
   |:------------------|:------------------------------------------------------------|
   | Serial number | Must be in `Hexadecimal Value`.|
   | Date (optional)       | Date format: `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`. The revocation date cannot be a future date. If the date field is empty, the current date is used. |
4. Click save to confirm your entries.

#### Offline bulk import {#offline-bulk-import}

{{< c8y-admon-info >}}
Revoked certificate serial numbers can be added in bulk.
Each file can hold at maximum 5000 revocation entries.
Multiple upload is allowed. In case of a duplicate, the latest one (last one uploaded) is used.
{{< /c8y-admon-info >}}

To bulk upload, follow the steps below:

1. Download the CSV template from the **Revoked certificates list** panel.
2. Fill in all revoked certificate serial numbers and revocation dates.
3. Upload the filled CSV file using file upload.

#### To download or view the offline CRL file {#to-download-or-view-the-offline-crl-file}

In the **Revoked certificates list** panel, click **Download CRL file**.
