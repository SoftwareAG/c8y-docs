---
weight: 30
title: Restoring the data on Edge 10.9
layout: redirect
---
To restore the data, you must first copy the MongoDB backup from the Edge 10.7 appliance to your Edge 10.9 appliance.

{{< c8y-admon-important >}}

Before copying the backup, ensure that there is sufficient disk space in your Edge 10.9 appliance. For example, in the Edge 10.9 appliance, if the size of the data disk is 75 GB and the size of the MongoDB backup is 100 GB, you must expand the size of the data disk to additional 100 GB before copying the MongoDB backup. For more information about disk size expansion, see [Expanding the disk size](/edge/configuration/#expanding-the-disk-size).

 {{< /c8y-admon-important >}}

Perform the following steps as a root user in your Edge 10.9 appliance.

1. Copy the backup folders from your Edge 10.7 appliance to the Edge 10.9 appliance using any file transfer tool, such as WINSCP, SCP, or FTP.

   Copy the backup folders to `/home/admin/migration_data/` in your Edge 10.9 appliance.

2. Backup the web applications in the Edge 10.9 appliance. To do this, first detect the IDs of the applications by using the following command:

    ```shell
    mongo management --quiet --eval 'db.cmdata.files.find({},{"_id":false, "metadata.id":true,"metadata.name":true})' | jq

    The command returns the name and ID of the application. For example:

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

3. Download the web applications using the ID of the application by using the following command:

    ```shell
    mkdir -p /tmp/apps/
    mongofiles -d management --prefix cmdata get  APP_ID -l /tmp/apps/APP_NAME.zip
    
    Here:
     - APP_ID refers to the ID of the application. For example, 112
     - APP_NAME refers to the name of the application. For example, devicemanagement.zip
    
    For example:
    mongofiles -d management --prefix cmdata get  112 -l /tmp/apps/cockpit.zip
    mongofiles -d management --prefix cmdata get  113 -l /tmp/apps/devicemanagement.zip
    mongofiles -d management --prefix cmdata get  114 -l /tmp/apps/administration.zip
    mongofiles -d management --prefix cmdata get  122 -l /tmp/apps/streaming-analytics-app.zip
    ```

    {{< c8y-admon-important >}} Create a backup of the streaming-analytics-app.zip file separately.{{< /c8y-admon-important >}}

4. Install the RPM package by using the following command:

    ```shell
    rpm -ivh http://mirror.centos.org/centos/7/os/x86_64/Packages/zip-3.0-11.el7.x86_64.rpm
    ```

    If your Edge appliance is not connected to the internet, ensure that the RPM package is available locally and run the following command:

    ```shell
    rpm -ivh zip-3.0-11.el7.x86_64.rpm
    ```

5. Prepare the applications for deployment by using the following commands:

   {{< c8y-admon-important >}}

   Do not include the *streaming-analytics-app.zip* file in the ZIP package.
   
   {{< /c8y-admon-important >}}
   
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

    Here:
     - PATH_TO_BACKED_UP_COLLECTION refers to the location of the 10.7 backup folders in your Edge 10.9 appliance.

    For example:
    mongorestore --drop --db edge /home/admin/migration_data/edge/
    mongorestore --drop --db management /home/admin/migration_data/management/
    mongorestore --drop --db docker /home/admin/migration_data/docker/
    ```

8. Restore the web applications of the Edge 10.9 appliance by using the following command:

    ```shell
    chown -R karaf:karaf /webapps/
    chown nginx:karaf /webapps
    cp -a /tmp/apps/$UI_VERSION.zip /webapps/2Install/

    Wait for Karaf to install the applications. After the installation is complete, the $UI_VERSION.zip.installed file appears at /webapps/2Install
    ```

9. Copy the `/etc/opcua` directory from the Edge 10.7 appliance to the same location on the Edge 10.9 appliance.

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

For more information about configuring the Edge 10.9 appliance, see [Configuring Cumulocity IoT Edge](/edge/configuration/).
