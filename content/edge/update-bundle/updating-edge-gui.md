---
weight: 10
title: Updating Edge using the GUI
layout: redirect
---

You can update {{< product-c8y-iot >}} Edge or apply fixes to your existing installation using the Administration application in the {{< management-tenant >}}.

When you update your Edge appliance, the update also applies operating system patches and fixes for security vulnerabilities.

>**Info:** {{< company-sag >}} recommends you to create a backup of your existing {{< product-c8y-iot >}} Edge installation before performing any update.

To update {{< product-c8y-iot >}} Edge:

1. Log in to the {{< management-tenant >}}.

2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge** > **Update** in the navigator.

4. Click **Update** > **Next**.

5. Upload the new {{< product-c8y-iot >}} Edge archive file and click **Next**.

6. Click **Update**.

   While updating the Edge appliance with the microservice hosting feature enabled, the following notification may appear on the user interface:

   *Could not get the details on the update status. Do refresh after some time to check if the update has completed*.

   Refresh the page to check if the update has been completed by verifying the version number.

7. Restart your Edge appliance.
