---
weight: 10
title: Migrating Edge 10.7 to 10.9
layout: redirect
---

This section describes the steps to migrate from {{< product-c8y-iot >}} Edge 10.7 to {{< product-c8y-iot >}} Edge 10.9. If you are using a version earlier than {{< product-c8y-iot >}} Edge 10.7 and plan to upgrade to {{< product-c8y-iot >}} Edge 10.9, you must first upgrade to {{< product-c8y-iot >}} Edge 10.7 and then migrate from {{< product-c8y-iot >}} Edge 10.7 to version 10.9.

For information about upgrading from an earlier version to {{< product-c8y-iot >}} Edge 10.7, see:

- [https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_esxi](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_esxi)
- [https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_vmware_workstation](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_vmware_workstation)
- [https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_hyper_v](https://{{< domain-c8y >}}/guides/10.7.0/edge/operation/#upgrade_hyper_v)

To migrate from Edge 10.7 to 10.9, you must:
- first back up the data on Edge 10.7
- move the backup to Edge 10.9
- restore the data on Edge 10.9

### Before you begin

- Import the Edge 10.9 appliance. See, [Configuring the Edge infrastructure](/edge/setting-up-edge/).
- Configure the network and complete the installation procedure on Edge 10.9 appliance. See, [Installing {{< product-c8y-iot >}} Edge](/edge/installation/)

>**Important:** You can have both the Edge 10.7 and 10.9 appliances on the same host machine. Ensure that the IP address of the Edge 10.9 appliance is different from Edge 10.7 appliance.

### Creating a backup on Edge 10.7

In your Edge 10.7 setup, you must back up the data for each tenant and docker collection, and note down the device ID.

>**Important:** Before you back up the data, ensure that there is sufficient disk space to save the backup in your Edge 10.7 appliance. The MongoDB backup requires the same amount of space as the database. For example, if the size of the database is 100 GB, the MongoDB backup also requires 100 GB of disk space. You would need additional 100 GB of disk space to save the MongoDB backup in your Edge 10.7 appliance.  

1. Stop the Karaf process using the command:

```shell
sudo service cumulocity-core-karaf stop
```
2. Create a backup of the MongoDB database using the commands:

```shell
mongodump --db=management --out OUTPUT_DIRECTORY # OUTPUT_DIRECTORY specifies the location of the backup.
mongodump --db=edge --out OUTPUT_DIRECTORY
mongodump --db=docker --out OUTPUT_DIRECTORY # This only needs to be done if microservices are enabled on 10.7.
```
3. Note down the device ID of your Edge 10.7 appliance available at `/usr/edge/properties/edge-agent/device-id`.
4. Create a backup of the `/etc/opcua` directory.
5. Create a backup of the `/var/lib/cumulocity-agent/credentials` file.

### Restoring the data on Edge 10.9

To restore the data, you must first copy the MongoDB backup from Edge 10.7 appliance to your Edge 10.9 appliance.

>**Important:** Before copying the backup, ensure that there is sufficient disk space in your Edge 10.9 appliance. For example, in the Edge 10.9 appliance, if the size of the data disk is 75 GB and the size of the MongoDB backup is 100 GB, you must expand the size of the data disk to additional 100 GB before copying the MongoDB backup. For more information about disk size expansion, see [Expanding the disk size](/edge/configuration/#expanding-the-disk-size).

Perform these steps as **root** user in your Edge 10.9 appliance.

1. Copy the backup folders from your Edge 10.7 appliance to Edge 10.9 appliance using any file transfer tool like WINSCP, SCP, or FTP.

   You can copy the backup folders to `/home/admin/migration_data/` in your Edge 10.9 appliance.

2. Backup the web applications in the Edge 10.9 appliance. To do this, you must first detect the IDs of the applications using the command:

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
3. Download the web applications using the ID of the application using the command:

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

>**Important:** Create a backup of the streaming-analytics-app.zip file separately.
```
4. Install the ZIP package using the command:
```shell
rpm -ivh http://mirror.centos.org/centos/7/os/x86_64/Packages/zip-3.0-11.el7.x86_64.rpm
```
5. Prepare the applications for deployment using the commands:

   >**Important:** Do not include the *streaming-analytics-app.zip* file in the ZIP package.

```shell
UI_VERSION=1009.0.14 #The Edge appliance UI version number. Must be in the format xxxx.x.x
cd /tmp/apps
zip package-cumulocity-$UI_VERSION.zip cockpit.zip devicemanagement.zip administration.zip #Do not include the streaming-analytics-app.zip file.
chown karaf:karaf package-cumulocity-$UI_VERSION.zip
zip $UI_VERSION.zip package-cumulocity-$UI_VERSION.zip
chown karaf:karaf $UI_VERSION.zip
```
6. Restore the device ID of the Edge 10.7 appliance using the commands:
```shell
DEVICE_ID="DEVICE_ID_OF_EDGE_10.7"
curl -v --header "Content-Type: application/json" --request POST --data '{"device_id":"'$DEVICE_ID'","edge_agent_enabled":true}' 127.0.0.1:3032/configuration
systemctl restart edge-agent
```
7. Restore the MongoDB collections from the Edge 10.7 appliance using the command:
```shell
mongorestore --drop --db TENANT_NAME PATH_TO_BACKED_UP_COLLECTION

Here:
 - PATH_TO_BACKED_UP_COLLECTION refers to the location of the 10.7 backup folders in your 10.9 appliance.

For example:
mongorestore --drop --db edge /home/admin/migration_data/edge/
mongorestore --drop --db management /home/admin/migration_data/management/
mongorestore --drop --db docker /home/admin/migration_data/docker/
```
8. Restore the web applications of the Edge 10.9 appliance using the command:
```shell
chown -R karaf:karaf /webapps/
chown nginx:karaf /webapps
cp -a /tmp/apps/$UI_VERSION.zip /webapps/2Install/

Wait for Karaf to install the applications. After the installation is complete, the $UI_VERSION.zip.installed file appears at /webapps/2Install
```
9. Copy the `/etc/opcua` directory from the Edge 10.7 appliance to the same location on the Edge 10.9 appliance.

10. Copy the */var/lib/cumulocity-agent/credentials* file from the Edge 10.7 appliance to the same location on the Edge 10.9 appliance.

11. Restart the services using the commands:
```shell
systemctl restart cumulocity-agent
systemctl restart nginx
systemctl restart cumulocity-core-karaf
monit restart opcua_device_gateway_proc
monit restart opcua_mgmt_service_proc
```
12. Restore the Streaming Analytics application.

	- Log in to the {{< management-tenant >}}.

	- Upload the *streaming-analytics-app.zip* file as a web application.

	- Subscribe the Streaming Analytics application to the edge tenant.

		>**Important:** To subscribe the application, you must have the "Tenant Manager" role.

	- Delete the Apama Analytics Builder and Apama EPL Apps applications.

	- Log in to the edge tenant and verify the Streaming Analytics application.

Restoring the Streaming Analytics application completes the migration procedure. Note that the tenants from Edge 10.9 installation are removed after the migration is successful. You will now be able to log in using the Edge 10.7 user credentials.

Next, you must configure the Edge 10.9 appliance. For example, if you had enabled microservices and configured NTP in the Edge 10.7 appliance, you must enable microservices and configure NTP in the Edge 10.9 appliance.

>**Important:** To enable the microservice hosting feature, you must have the "Tenant Manager" role.

For more information about configuring the Edge 10.9 appliance, see [Configuring Cumulocity IoT Edge](/edge/configuration/).

### Sample scripts to automate the migration

{{< company-sag >}} provides the `backup.sh` and `restore.sh` scripts for your reference. You may customize these scripts for your requirements and automate the migration process. These scripts are available for reference at:

- [backup.sh](/files/edge/backup.sh)
- [restore.sh](/files/edge/restore.sh) - you must run the restore.sh script as a **root** user.
- [restore_analytics.sh](/files/edge/restore_analytics.sh) - restores the Streaming Analytics application.

>**IMPORTANT:** {{< company-sag >}} does not officially support these scripts. These scripts are only for your reference.

#### Using the scripts

##### In 10.7 appliance

>**Important:** Before you back up the data, ensure that there is sufficient disk space to save the backup in your Edge 10.7 appliance. The MongoDB backup requires the same amount of space as the database. For example, if the size of the database is 100 GB, the MongoDB backup also requires 100 GB of disk space. You would need additional 100 GB of disk space to save the MongoDB backup in your Edge 10.7 appliance.

1. Copy the `backup.sh` script to your Edge 10.7 appliance.

2. Run the `backup.sh` as a **root** user.

   You can also run the script with the parameters:
	- OUTPUT_DIRECTORY: (optional) path to save the backup archive on the same file system.
	- ARCHIVE_PATH: (optional) path to save the backup archive on an external file system.

    >**Info:** If you do not specify any parameter, the backup archive is saved at */tmp* directory. The */tmp* directory is located on the installation disk. If the installation disk has no space, the system could become unstable.

	For example:
	```shell
	./backup.sh /home/admin/
	```
	The script creates a ZIP archive file with the migration data in the OUTPUT_DIRECTORY.

3. Move the ZIP archive with the migration data to your Edge 10.9 appliance.

##### In 10.9 appliance

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
