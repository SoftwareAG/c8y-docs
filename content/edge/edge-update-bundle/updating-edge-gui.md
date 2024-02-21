---
weight: 5
title: Updating Cumulocity IoT Edge using the GUI
layout: redirect
---

You can update {{< product-c8y-iot >}} Edge or apply fixes to your existing installation using the Administration application in the {{< management-tenant >}}.

Download the {{< product-c8y-iot >}} Edge archive file **{{< product-c8y-iot >}} Edge (*version*) Update** from the [{{< company-sag >}} {{< sag-portal >}}]({{< link-sag-portal >}}).

When you update your {{< product-c8y-iot >}} Edge appliance, the update also applies operating system patches and fixes for security vulnerabilities. {{< company-sag >}} recommends you to create a backup of your existing {{< product-c8y-iot >}} Edge installation before performing any update.

{{< c8y-admon-important >}}

Before you update to {{< product-c8y-iot >}} Edge version 10.15, you must first upgrade to version 10.13.

{{< /c8y-admon-important >}}

To update {{< product-c8y-iot >}} Edge:

1. Log in to the {{< management-tenant >}}.

2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="Application switcher" style="display: inline; float: none">**.

3. Click **Edge** > **Update** in the navigator.

4. Click **Update** > **Next**.

5. Upload the new {{< product-c8y-iot >}} Edge archive file and click **Next**.

6. Click **Update**.

   While updating the {{< product-c8y-iot >}} Edge appliance with the microservice hosting feature enabled, the following notification may appear on the user interface:

   *Could not get the details on the update status. Do refresh after some time to check if the update has completed*.

   Refresh the page to check if the update has been completed by verifying the version number.

7. Restart your {{< product-c8y-iot >}} Edge appliance.
