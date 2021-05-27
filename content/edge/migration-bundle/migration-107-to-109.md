---
weight: 10
title: Migrating Cumulocity IoT Edge 10.7 to 10.9
layout: redirect
---

This section describes the steps to migrate from Cumulocity IoT Edge version 10.7 to Cumulocity IoT Edge version 10.9. If you are using a version earlier than Cumulocity IoT Edge 10.7 and planning to upgrade to Cumulocity IoT Edge 10.9, you must first upgrade to Cumulocity IoT Edge 10.7 and then migrate from Cumulocity IoT Edge 10.7 to version 10.9.

For information about upgrading from an earlier version to Cumulocity IoT Edge 10.7, see:

- https://cumulocity.com/guides/10.7.0/edge/operation/#upgrade_esxi
- https://cumulocity.com/guides/10.7.0/edge/operation/#upgrade_vmware_workstation
- https://cumulocity.com/guides/10.7.0/edge/operation/#upgrade_hyper_v

To migrate from Cumulocity IoT Edge version 10.7 to version 10.9, you must:
- first back up the data on Cumulocity IoT Edge 10.7
- move the backup to Cumulocity IoT Edge 10.9 appliance
- restore the data on Cumulocity IoT Edge 10.9

### Before you begin

- Import the Cumulocity IoT Edge 10.9 appliance.
- Configure the network. Ensure that the IP address of the Cumulocity IoT Edge 10.9 appliance is different from 10.7 appliance.
- Complete the installation procedure on Cumulocity IoT Edge 10.9 appliance.

### Creating a backup on Cumulocity IoT Edge 10.7

In your Cumulocity IoT Edge 10.7 setup, you must back up the data for each tenant and docker collection, and note down the device-ID.

To back up the data:

1. Run the commands:

```shell
mongodump --db=management --out OUTPUT_DIRECTORY # OUTPUT_DIRECTORY specifies the location of the backup.
mongodump --db=edge --out OUTPUT_DIRECTORY
mongodump --db=docker --out OUTPUT_DIRECTORY # This only needs to be done if microservices are enabled on 10.7.
```
2. Note down the device-ID of your Cumulocity IoT Edge 10.7 appliance available at: /usr/edge/properties/edge-agent/device-id

3. Move the backup folders to Cumulocity IoT Edge 10.9 appliance.

### Restoring the data on Cumulocity IoT Edge 10.9

Perform these steps as **root** user in your Cumulocity IoT Edge 10.9 appliance.

1. Backup the web applications in Edge 10.9 appliance. To do this, you must first detect the IDs of the applications using the command:

```shell
mongo management --quiet --eval 'db.cmdata.files.find({},{"_id":false, "metadata.id":true,"metadata.name":true})' | jq

The command returns the name and ID of the application. For example:

{
  "metadata": {
    "id": "111",
    "name": "cockpit.zip"
  }
}
{
  "metadata": {
    "id": "112",
    "name": "devicemanagement.zip"
  }
}
{
  "metadata": {
    "id": "113",
    "name": "administration.zip"
  }
}
{
  "metadata": {
    "id": "119",
    "name": "streaming-analytics-app.zip"
  }
}
```
2. Download the web applications using the ID of the application using the command:

```shell
mkdir -p /tmp/apps/
mongofiles -d management --prefix cmdata get  APP_ID -l /tmp/apps/APP_NAME.zip 

APP_ID refers to the ID of the application. For example, 112
APP_NAME refers to the name of the application. For example, devicemanagement.zip

For example:
mongofiles -d management --prefix cmdata get  110 -l /tmp/apps/administration.zip
mongofiles -d management --prefix cmdata get  111 -l /tmp/apps/cockpit.zip
mongofiles -d management --prefix cmdata get  112 -l /tmp/apps/devicemanagement.zip
```
3. Install the ZIP package using the command:
```shell
rpm -ivh http://mirror.centos.org/centos/7/os/x86_64/Packages/zip-3.0-11.el7.x86_64.rpm
```
4. Prepare the applications for deployment using the commands:

```shell
UI_VERSION=1009.6.0
cd /tmp/apps
zip package-cumulocity-$UI_VERSION.zip $zip_names #zip_names refers to the application ZIP filenames
chown karaf:karaf package-cumulocity-$UI_VERSION.zip
zip $UI_VERSION.zip package-cumulocity-$UI_VERSION.zip
chown karaf:karaf $UI_VERSION.zip
```
5. Restore the device-ID of the Cumulocity IoT Edge 10.7 appliance using the commands:
```shell
DEVICE_ID="DEVICE_ID_OF_EDGE_10.7"
curl -v --header "Content-Type: application/json" --request POST --data '{"device_id":"'$DEVICE_ID'","edge_agent_enabled":true}' 127.0.0.1:3032/configuration
systemctl restart edge-agent
```
6. Get the Management tenant domain from Cumulocity IoT Edge 10.9 appliance using the command:
```shell
mongo management --quiet --eval 'db.tenants.find({"_id":"management"}, {"_id":0, "domainName":1})' | jq '.domainName'
```
7. Restore the MongoDB collections from 10.7 using the command:
```shell
mongorestore --drop --db TENANT_NAME PATH_TO_BACKED_UP_COLLECTION

PATH_TO_BACKED_UP_COLLECTION refers to the location of the 10.7 backup folders in your 10.9 appliance.

For example:
mongorestore --drop --db edge /home/admin/migration_data/collections/edge/
mongorestore --drop --db management /home/admin/migration_data/collections/management/
```
8. Restore the Management tenant domain using the command:
```shell
mongo management --eval 'db.tenants.update({"_id":"management"}, {$set: {"domainName":"MANAGEMENT_DOMAIN_NAME"}})'
```
9. Restore the web applications of the Cumulocity IoT Edge 10.9 appliance using the command:
```shell
chown -R karaf:karaf /webapps/
chown nginx:karaf /webapps
cp -a /tmp/apps/$UI_VERSION.zip /webapps/2Install/

Wait for karaf to install the applications. After the installation is complete, the $UI_VERSION.zip.installed file appears at /webapps/2Install
```
10. Restart karaf and edge-agent using the commands:
```shell
systemctl restart nginx
systemctl restart cumulocity-core-karaf
```
Restarting the karaf and edge-agent completes the migration procedure. Note that the tenants from 10.9 installation are removed after the migration is successful. You will now be able to log in using the 10.7 user credentials.

### Sample scripts to automate the migration

Software AG provides the `backup.sh` and `restore.sh` scripts for your reference. You may customize these scripts for your requirements and automate the migration process. These scripts are available at: [PLACE_HOLDER]

>**IMPORTANT:** Software AG does not officially support these scripts. These scripts are only for your reference.

#### Using the scripts

##### In 10.7 appliance

1. Copy the `backup.sh` script to your 10.7 appliance.

2. Run the `backup.sh` script with the parameters:
	- TENANT: your tenant name (edge by default)
	- OUTPUT_DIRECTORY: path to save the backup archive. It can also be an external drive.

	For example:
	```shell
	./backup.sh edge /home/admin/
	```	
	The script creates a ZIP archive file with the migration data in the OUTPUT_DIRECTORY.

3. Move the ZIP archive with the migration data to your 10.9 appliance.

##### In 10.9 appliance
1. Copy the `restore.sh` script to your 10.9 appliance.

2. Run the `restore.sh` script with the parameters:
	- ARCHIVE_PATH: path to the ZIP with 10.7 migration data
	- EXTRACTED_PATH: path to the folder with extracted migration data. It can also be an external drive.

	For example:
	```shell
	./restore migration_data.tgz /home/admin/migration_data
	``` 
Running the `restore.sh` script successfully completes the migration process.