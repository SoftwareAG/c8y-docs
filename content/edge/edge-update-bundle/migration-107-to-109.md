---
weight: 15
title: Migrating Cumulocity IoT Edge 10.7 to 10.9
layout: redirect
---

This section describes the steps to migrate from {{< product-c8y-iot >}} Edge 10.7 to {{< product-c8y-iot >}} Edge 10.9. If you are using a version earlier than {{< product-c8y-iot >}} Edge 10.7 and plan to upgrade to {{< product-c8y-iot >}} Edge 10.9, you must first upgrade to {{< product-c8y-iot >}} Edge 10.7.

### Before you begin {#before-you-begin}

- Import the Edge 10.9 appliance, see [Configuring the Edge infrastructure](/edge/edge-infrastructure/) for further information.
- Configure the network and complete the installation procedure on your Edge 10.9 appliance. For details see [Installing {{< product-c8y-iot >}} Edge](/edge/edge-installation/).

{{< c8y-admon-important >}} You can have both the Edge 10.7 and the Edge 10.9 appliances on the same host machine. Ensure that the IP address of the Edge 10.9 appliance is different from the IP address of the Edge 10.7 appliance.{{< /c8y-admon-important >}}

For information about upgrading from an earlier version to {{< product-c8y-iot >}} Edge 10.7, see:

- [Upgrading on VMware ESX](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_esxi)
- [Upgrading on VMware Workstation Player](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_vmware_workstation)
- [Upgrading on Hyper-V](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_hyper_v)

in the *10.7.0 {{< product-c8y-iot >}} Edge guide*.

To migrate from Edge 10.7 to 10.9:

- back up the data on Edge 10.7,
- move the backup to Edge 10.9,
- restore the data on Edge 10.9.

### Creating a backup on Edge 10.7 {#creating-a-backup-on-edge-107}

In your Edge 10.7 setup, back up the data for each tenant and docker collection, and note down the device ID.

{{< c8y-admon-important >}} Before the data back up, ensure that there is sufficient disk space to save the back up in your Edge 10.7 appliance. The MongoDB backup requires the same amount of space as the database. For example, if the size of the database is 100 GB, the MongoDB backup also requires 100 GB of disk space. You need an additional 100 GB of disk space to save the MongoDB backup in your Edge 10.7 appliance.  
{{< /c8y-admon-important >}}

1. Run the following command to stop monitoring all processes:

   ```shell
   monit unmonitor all
   ```

2. Stop the Karaf process by using the following command:

   ```shell
   sudo service cumulocity-core-karaf stop
   ```

3. Create a backup of the MongoDB database by using the following commands:

   ```shell
   mongodump --db=management --out OUTPUT_DIRECTORY # OUTPUT_DIRECTORY specifies the location of the backup.
   mongodump --db=edge --out OUTPUT_DIRECTORY
   mongodump --db=docker --out OUTPUT_DIRECTORY # This only needs to be done if microservices are enabled on 10.7.
   ```

4. Note down the device ID of your Edge 10.7 appliance available at */usr/edge/properties/edge-agent/device-id*.

5. Create a backup of the */etc/opcua* directory.

6. Create a backup of the */var/lib/cumulocity-agent/credentials* file.

## Restoring the data on Edge 10.9 {#restoring-the-data-on-edge-109}

To restore the data, you must first copy the MongoDB backup from the Edge 10.7 appliance to your Edge 10.9 appliance.

{{< c8y-admon-important >}}
Before copying the backup, ensure that there is sufficient disk space in your Edge 10.9 appliance. For example, in the Edge 10.9 appliance, if the size of the data disk is 75 GB and the size of the MongoDB backup is 100 GB, you must expand the size of the data disk to an additional 100 GB before copying the MongoDB backup. For more information about disk size expansion, see [Expanding the disk size](/edge/operating-edge/#expanding-the-disk-size).
 {{< /c8y-admon-important >}}

Perform the following steps as a root user in your Edge 10.9 appliance.

1. Copy the backup folders from your Edge 10.7 appliance to the Edge 10.9 appliance using any file transfer tool such as WINSCP, SCP, or FTP.

   Copy the backup folders to */home/admin/migration_data/* in your Edge 10.9 appliance.

2. Backup the web applications in the Edge 10.9 appliance. To do this, first detect the IDs of the applications by using the following command:

   ```shell
   mongo management --quiet --eval 'db.cmdata.files.find({},{"_id":false, "metadata.id":true,"metadata.name":true})' | jq
   ```
   The command returns the name and ID of the application. For example:

   ```shell
   {
     "metadata": {
       "id": "112",
       "name": "cockpit.zip"
     }
   }
   {
     "metadata": {
       "id": "113",
       "name": "devicemanagement.zip"
     }
   }
   {
     "metadata": {
       "id": "114",
       "name": "administration.zip"
     }
   }
   {
     "metadata": {
       "id": "122",
       "name": "streaming-analytics-app.zip"
     }
   }
   ```

3. Download the web applications using the ID of the application by using the following commands:

   ```shell
   mkdir -p /tmp/apps/
   mongofiles -d management --prefix cmdata get  APP_ID -l /tmp/apps/APP_NAME.zip
   ```
   Here:
    - APP_ID refers to the ID of the application. For example, 112
    - APP_NAME refers to the name of the application. For example, devicemanagement.zip

   For example:
   ```shell
   mongofiles -d management --prefix cmdata get  112 -l /tmp/apps/cockpit.zip
   mongofiles -d management --prefix cmdata get  113 -l /tmp/apps/devicemanagement.zip
   mongofiles -d management --prefix cmdata get  114 -l /tmp/apps/administration.zip
   mongofiles -d management --prefix cmdata get  122 -l /tmp/apps/streaming-analytics-app.zip
   ```

   {{< c8y-admon-important >}}Create a backup of the *streaming-analytics-app.zip* file separately.{{< /c8y-admon-important >}}

4. Install the RPM package by using the following command:

   ```shell
   rpm -ivh http://mirror.centos.org/centos/7/os/x86_64/Packages/zip-3.0-11.el7.x86_64.rpm
   ```

   If your Edge appliance is not connected to the internet, ensure that the RPM package is available locally and run the following command:

   ```shell
   rpm -ivh zip-3.0-11.el7.x86_64.rpm
   ```

5. Prepare the applications for deployment by using the following commands:

   {{< c8y-admon-important >}}Do not include the *streaming-analytics-app.zip* file in the ZIP package.{{< /c8y-admon-important >}}

    ```shell
    UI_VERSION=1009.0.14 #The Edge appliance UI version number. Must be in the format xxxx.x.x
    cd /tmp/apps
    zip package-cumulocity-$UI_VERSION.zip cockpit.zip devicemanagement.zip administration.zip #Do not include the streaming-analytics-app.zip file.
    chown karaf:karaf package-cumulocity-$UI_VERSION.zip
    zip $UI_VERSION.zip package-cumulocity-$UI_VERSION.zip
    chown karaf:karaf $UI_VERSION.zip
    ```

6. Restore the device ID of the Edge 10.7 appliance by using the following commands:

   ```shell
   DEVICE_ID="DEVICE_ID_OF_EDGE_10.7"

   curl -v --header "Content-Type: application/json" --request POST --data
   '{"device_id":"'$DEVICE_ID'"}' 127.0.0.1:3032/configuration/edge-agent

   systemctl restart edge-agent
   ```

7. Restore the MongoDB collections from the Edge 10.7 appliance by using the following command:

   ```shell
   mongorestore --drop --db TENANT_NAME PATH_TO_BACKED_UP_COLLECTION
   ```
   Here:
    - PATH_TO_BACKED_UP_COLLECTION refers to the location of the 10.7 backup folders in your Edge 10.9 appliance.

   For example:
   ```shell
   mongorestore --drop --db edge /home/admin/migration_data/edge/
   mongorestore --drop --db management /home/admin/migration_data/management/
   mongorestore --drop --db docker /home/admin/migration_data/docker/
   ```

8. Restore the web applications of the Edge 10.9 appliance by using the following command:

   ```shell
   chown -R karaf:karaf /webapps/
   chown nginx:karaf /webapps
   cp -a /tmp/apps/$UI_VERSION.zip /webapps/2Install/
   ```
   Wait for Karaf to install the applications. After the installation is complete, the *$UI_VERSION.zip.installed* file appears at */webapps/2Install*.


9. Copy the */etc/opcua* directory from the Edge 10.7 appliance to the same location on the Edge 10.9 appliance.

10. Copy the */var/lib/cumulocity-agent/credentials* file from the Edge 10.7 appliance to the same location on the Edge 10.9 appliance.

11. Restart the services by using the following commands:

    ```shell
    systemctl restart cumulocity-agent
    systemctl restart nginx
    systemctl restart cumulocity-core-karaf
    monit restart opcua_device_gateway_proc
    monit restart opcua_mgmt_service_proc
    ```

12. Restore the Streaming Analytics application by following these steps:

    - Log in to the {{< management-tenant >}} using the 10.7 {{< management-tenant >}} admin credentials. By default, the credentials are sysadmin/sysadmin-pass.

    - Upload the *streaming-analytics-app.zip* file as a web application.

    - Subscribe the Streaming Analytics application to the Edge tenant.

      {{< c8y-admon-important >}} To subscribe the application, the {{< management-tenant >}} user must have the "Tenant Manager" role.{{< /c8y-admon-important >}}

    - Delete the Apama Analytics Builder and Apama EPL Apps applications.

    - Log in to the Edge tenant and verify the Streaming Analytics application.

Restoring the Streaming Analytics application completes the migration procedure. Note that the tenants from the Edge 10.9 installation are removed after the successful migration. You are now be able to log in using the Edge 10.7 user credentials.

Next, configure the Edge 10.9 appliance. For example, if you enabled microservices and configured NTP in the Edge 10.7 appliance, you must enable microservices and configure NTP in the Edge 10.9 appliance.

{{< c8y-admon-important >}}
To enable the microservice hosting feature, the {{< management-tenant >}} user must have the "Tenant Manager" role. Use the 10.7 {{< management-tenant >}} admin credentials. By default, the credentials are sysadmin/sysadmin-pass.
{{< /c8y-admon-important >}}

If enabling the microservice hosting feature fails, it may be due to a [Kubernetes limitation](https://support.f5.com/csp/article/K18352919). After resolving the issue, delete the kube-registry pod and wait for it to be recreated.

For more information about configuring the Edge 10.9 appliance, see [Configuring {{< product-c8y-iot >}} Edge](/edge/edge-configuration/).

### Sample scripts to automate the migration {#sample-scripts-to-automate-the-migration}

{{< company-sag >}} provides the *backup.sh* and *restore.sh* scripts for your reference. You may customize these scripts for your requirements and automate the migration process. These scripts are available at:

- [backup.sh](/files/edge/backup.sh)
- [restore.sh](/files/edge/restore.sh) - you must run the *restore.sh* script as a root user.
- [restore_analytics.sh](/files/edge/restore_analytics.sh) - restores the Streaming Analytics application.

{{< c8y-admon-important >}}{{< company-sag >}} does not officially support these scripts. These scripts are only for your reference.{{< /c8y-admon-important >}}

### Using the scripts {#using-the-scripts}

#### In 10.7 appliance {#in-107-appliance}

{{< c8y-admon-important >}}
Before the data back up, ensure that there is sufficient disk space to save the backup in your Edge 10.7 appliance. The MongoDB backup requires the same amount of space as the database. For example, if the size of the database is 100 GB, the MongoDB backup also requires 100 GB of disk space. You need an additional 100 GB of disk space to save the MongoDB backup in your Edge 10.7 appliance.
{{< /c8y-admon-important >}}

1. Run the following command to stop monitoring all the processes:

   ```shell
   monit unmonitor all
   ```

2. Stop the Karaf process by using the following command:

   ```shell
   sudo service cumulocity-core-karaf stop
   ```

3. Copy the *backup.sh* script to your Edge 10.7 appliance.

4. Run the *backup.sh* as a root user.

   You can also run the script with the parameters:

   - OUTPUT_DIRECTORY: (optional) path to save the backup archive on the same file system.
   - ARCHIVE_PATH: (optional) path to save the backup archive on an external file system.

    {{< c8y-admon-info >}}If you do not specify any parameter, the backup archive is saved to the */tmp* directory. The */tmp* directory is located on the installation disk. If the installation disk has no space, the system can become unstable.{{< /c8y-admon-info >}}

    For example:

    ```shell
    ./backup.sh /home/admin/
    ```

   The script creates a ZIP archive file with the migration data in the OUTPUT_DIRECTORY.

5. Move the ZIP archive with the migration data to your Edge 10.9 appliance.

#### In 10.9 appliance {#in-109-appliance}

{{< c8y-admon-important >}}
Before copying the backup, ensure that there is sufficient disk space in your Edge 10.9 appliance. For example, in the Edge 10.9 appliance, if the size of the data disk is 75 GB and the size of the MongoDB backup is 100 GB, you must expand the size of the data disk to an additional 100 GB before copying the MongoDB backup. For more information about disk size expansion, see [Expanding the disk size](/edge/operating-edge/#expanding-the-disk-size).
{{< /c8y-admon-important >}}

1. Log in as a root user.

2. Copy the *restore.sh* and *restore_analytics.sh* scripts to your Edge 10.9 appliance.

3. Run the *restore.sh* script with the parameters:

   - ARCHIVE_PATH: path to the ZIP with 10.7 migration data.
   - EXTRACTED_PATH: path to the folder with extracted migration data. It can also be an external drive.

    For example:

    ```shell
    ./restore.sh migration_data.tgz /home/admin/migration_data
    ```

    The *restore.sh* script fails if your Edge appliance is not connected to the internet. In such cases, ensure that the RPM package is available locally, and replace the command `rpm -ivh http://mirror.centos.org/centos/7/os/x86_64/Packages/zip-3.0-11.el7.x86_64.rpm` with `rpm -ivh zip-3.0-11.el7.x86_64.rpm` in the *restore.sh* script.

4. Run the *restore_analytics.sh* script. This script restores the Streaming Analytics application.

   ```shell
   ./restore_analytics.sh USERNAME PASSWORD /tmp/streaming-analytics-app.zip
   ```
   Here:
   - USERNAME and PASSWORD refers to the {{< management-tenant >}} user credentials.


   Running the *restore_analytics.sh* script completes the migration process.

Next, you must configure the Edge 10.9 appliance. For example, if you had enabled microservices and configured NTP in the Edge 10.7 appliance, you must enable microservices and configure NTP in the Edge 10.9 appliance.

{{< c8y-admon-important >}}
To enable the microservice hosting feature, the {{< management-tenant >}} user must have the "Tenant Manager" role. Use the 10.7 {{< management-tenant >}} admin credentials. By default, the credentials are sysadmin/sysadmin-pass.
{{< /c8y-admon-important >}}

If enabling the microservice hosting feature fails, it may be due to a [Kubernetes limitation](https://support.f5.com/csp/article/K18352919). After resolving the issue, delete the kube-registry pod and wait for it to be recreated.

For more information about configuring the Edge 10.9 appliance, see [Configuring {{< product-c8y-iot >}} Edge](/edge/edge-configuration/).
