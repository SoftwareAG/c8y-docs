---
weight: 40
title: Sample scripts to automate the migration
layout: redirect
---
{{< company-sag >}} provides the `backup.sh` and `restore.sh` scripts for your reference. You may customize these scripts for your requirements and automate the migration process. These scripts are available for reference at:

- [backup.sh](/files/edge/backup.sh)
- [restore.sh](/files/edge/restore.sh) - you must run the restore.sh script as a **root** user.
- [restore_analytics.sh](/files/edge/restore_analytics.sh) - restores the Streaming Analytics application.

>**IMPORTANT:** {{< company-sag >}} does not officially support these scripts. These scripts are only for your reference.

### Using the scripts

#### In 10.7 appliance

>**Important:** Before you back up the data, ensure that there is sufficient disk space to save the backup in your Edge 10.7 appliance. The MongoDB backup requires the same amount of space as the database. For example, if the size of the database is 100 GB, the MongoDB backup also requires 100 GB of disk space. You would need additional 100 GB of disk space to save the MongoDB backup in your Edge 10.7 appliance.

1. Stop the Karaf process using the command:

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

>**Important:** Before copying the backup, ensure that there is sufficient disk space in your Edge 10.9 appliance. For example, in the Edge 10.9 appliance, if the size of the data disk is 75 GB and the size of the MongoDB backup is 100 GB, you must expand the size of the data disk to additional 100 GB before copying the MongoDB backup. For more information about disk size expansion, see [Expanding the disk size](/edge/configuration/#expanding-the-disk-size).

1. Log in as **root** user.

2. Copy the `restore.sh` and `restore_analytics.sh` scripts to your Edge 10.9 appliance.

3. Run the `restore.sh` script with the parameters:
	- ARCHIVE_PATH: path to the ZIP with 10.7 migration data
	- EXTRACTED_PATH: path to the folder with extracted migration data. It can also be an external drive.

	For example:
	```shell
	./restore.sh migration_data.tgz /home/admin/migration_data
	```
4. Run the `restore_analytics.sh` script. This script restores the Streaming Analytics application.

	```shell
	./restore_analytics.sh USERNAME PASSWORD /tmp/streaming-analytics-app.zip
	
	Here:
	- USERNAME and PASSWORD refers to the {{< management-tenant >}} user credentials.
	```

Running the `restore_analytics.sh` script completes the migration process.

Next, you must configure the Edge 10.9 appliance. For example, if you had enabled microservices and configured NTP in the Edge 10.7 appliance, you must enable microservices and configure NTP in the Edge 10.9 appliance.

>**Important:** To enable the microservice hosting feature, you must have the "Tenant Manager" role.

For more information about configuring the Edge 10.9 appliance, see [Configuring Cumulocity IoT Edge](/edge/configuration/).