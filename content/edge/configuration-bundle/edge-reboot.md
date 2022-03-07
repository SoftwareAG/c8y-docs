---
weight: 80
title: Restarting the Edge appliance
layout: redirect
---

Before restarting your Edge appliance, ensure that your appliance is in a safe state.

### Restarting the Edge appliance using the UI

To restart your Edge appliance:

1. Log in to the {{< management-tenant >}} using the Edge administrator credentials created during the installation.

	- Username: management/<*Edge admin username*>
	- Password: password provided during the installation

2. Switch to the Administration application using the application switcher at the right of the top bar **<img class="Default" src="/images/icons/switcher-icon.png" alt="icon" style="display: inline; float: none">**.

3. Click **Edge** > **Reboot** in the navigator.

4. Click **Reboot**.

### Restarting the Edge appliance using the REST APIs

To restart your Edge appliance, use the following endpoint:

- [POST /edge/reboot](/edge/rest-api/#working-with-rest-api)