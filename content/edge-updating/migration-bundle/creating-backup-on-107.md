---
weight: 20
title: Creating a backup on Edge 10.7
layout: redirect
---

In your Edge 10.7 setup, back up the data for each tenant and docker collection, and note down the device ID.

{{< c8y-admon-important >}} Before the data back up, ensure that there is sufficient disk space to save the back up in your Edge 10.7 appliance. The MongoDB backup requires the same amount of space as the database. For example, if the size of the database is 100 GB, the MongoDB backup also requires 100 GB of disk space. You would need an additional 100 GB of disk space to save the MongoDB backup in your Edge 10.7 appliance.  
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
4. Note down the device ID of your Edge 10.7 appliance available at `/usr/edge/properties/edge-agent/device-id`.
5. Create a backup of the `/etc/opcua` directory.
6. Create a backup of the `/var/lib/cumulocity-agent/credentials` file.