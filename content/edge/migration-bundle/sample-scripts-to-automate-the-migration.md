---
weight: 40
title: Sample scripts to automate the migration
layout: redirect
---
{{< company-sag >}} provides the `backup.sh` and `restore.sh` scripts for your reference. You may customize these scripts for your requirements and automate the migration process. These scripts are available for reference at:

- [backup.sh](/files/edge/backup.sh)
- [restore.sh](/files/edge/restore.sh) - you must run the restore.sh script as a **root** user.
- [restore_analytics.sh](/files/edge/restore_analytics.sh) - restores the Streaming Analytics application.

{{< c8y-admon-important >}}
{{< company-sag >}} does not officially support these scripts. These scripts are only for your reference.
{{< /c8y-admon-important >}}

### Using the scripts

#### In 10.7 appliance

{{< c8y-admon-important >}}
Before you back up the data, ensure that there is sufficient disk space to save the backup in your Edge 10.7 appliance. The MongoDB backup requires the same amount of space as the database. For example, if the size of the database is 100 GB, the MongoDB backup also requires 100 GB of disk space. You would need additional 100 GB of disk space to save the MongoDB backup in your Edge 10.7 appliance.
{{< /c8y-admon-important >}}

1. Run the following command to stop monitoring all the processes:

    ```shell
    monit unmonitor all
    ```
2. Stop the Karaf process using the command:

    ```shell
    sudo service cumulocity-core-karaf stop
    ```
2. Copy the `backup.sh` script to your Edge 10.7 appliance.

3. Run the `backup.sh` as a **root** user.

   You can also run the script with the parameters:
   - OUTPUT_DIRECTORY: (optional) path to save the backup archive on the same file system.
   - ARCHIVE_PATH: (optional) path to save the backup archive on an external file system.

    >**Info:** If you do not specify any parameter, the backup archive is saved at */tmp* directory. The */tmp* directory is located on the installation disk. If the installation disk has no space, the system could become unstable.

    For example:
    ```shell
    ./backup.sh /home/admin/
    ```
   The script creates a ZIP archive file with the migration data in the OUTPUT_DIRECTORY.

4. Move the ZIP archive with the migration data to your Edge 10.9 appliance.

#### In 10.9 appliance

{{< c8y-admon-important >}}
Before copying the backup, ensure that there is sufficient disk space in your Edge 10.9 appliance. For example, in the Edge 10.9 appliance, if the size of the data disk is 75 GB and the size of the MongoDB backup is 100 GB, you must expand the size of the data disk to additional 100 GB before copying the MongoDB backup. For more information about disk size expansion, see [Expanding the disk size](/edge/configuration/#expanding-the-disk-size).
{{< /c8y-admon-important >}}

1. Log in as **root** user.

2. Copy the `restore.sh` and `restore_analytics.sh` scripts to your Edge 10.9 appliance.

3. Run the `restore.sh` script with the parameters:
	- ARCHIVE_PATH: path to the ZIP with 10.7 migration data
	- EXTRACTED_PATH: path to the folder with extracted migration data. It can also be an external drive.

    For example:
    ```shell
    ./restore.sh migration_data.tgz /home/admin/migration_data
    ```
    The `restore.sh` script fails if your Edge appliance is not connected to the internet. In such cases, ensure that the RPM package is available locally, and replace the command `rpm -ivh http://mirror.centos.org/centos/7/os/x86_64/Packages/zip-3.0-11.el7.x86_64.rpm` with `rpm -ivh zip-3.0-11.el7.x86_64.rpm` in the `restore.sh` script.

4. Run the `restore_analytics.sh` script. This script restores the Streaming Analytics application.

    ```shell
    ./restore_analytics.sh USERNAME PASSWORD /tmp/streaming-analytics-app.zip
    
    Here:
    - USERNAME and PASSWORD refers to the {{< management-tenant >}} user credentials.
    ```
Running the `restore_analytics.sh` script completes the migration process.

Next, you must configure the Edge 10.9 appliance. For example, if you had enabled microservices and configured NTP in the Edge 10.7 appliance, you must enable microservices and configure NTP in the Edge 10.9 appliance.

{{< c8y-admon-important >}}
To enable the microservice hosting feature, the {{< management-tenant >}} user must have the "Tenant Manager" role. Use the 10.7 {{< management-tenant >}} admin credentials. By default, the credentials are sysadmin/sysadmin-pass.
{{< /c8y-admon-important >}}

If enabling the microservice hosting feature fails, it may be due to a [Kubernetes limitation](https://support.f5.com/csp/article/K18352919). After resolving the issue, delete the kube-registry pod and wait for it to be recreated.

For more information about configuring the Edge 10.9 appliance, see [Configuring Cumulocity IoT Edge](/edge/configuration/).
