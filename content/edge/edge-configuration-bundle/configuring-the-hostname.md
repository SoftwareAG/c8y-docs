---
weight: 45
title: Configuring the hostname
layout: bundle
section:
  - edge_server
---

You can change the hostname of your Edge appliance using the REST APIs. The default hostname of the Edge appliance is **iot-edge-server**.

### Configuring the hostname using the UI

1. Log in to the {{< management-tenant >}} using the Edge administrator credentials created during the installation.

   - Username: management/<*Edge admin username*>
   - Password: password provided during the installation
2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.
3. Click **Edge** > **Hostname** in the navigator.
4. Click **Edit** to change the hostname.
5. Provide the new hostname and click **Save**.

### Configuring the hostname using the REST APIs

To configure the hostname of your Edge appliance, use the following endpoints:

- [GET /edge/configuration/hostname](/edge/rest-api/#get-edgeconfigurationhostname)
- [POST /edge/configuration/hostname](/edge/rest-api/#post-edgeconfigurationhostname)
