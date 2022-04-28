---
weight: 40
title: Expanding the disk size
layout: redirect
---

You can expand the disk size of the installation disk and the data disk using the REST APIs. You can either expand the disk size for both the disks or any one of the disk at a time. There is no limit on the number of the disk expansion process. Before expanding the disk size, you must set or edit the disk size in the hypervisor. See the hypervisor specific documentation for editing the disk size.

To expand the disk size of the installation disk and the data disk, use the following endpoint:

- [POST /edge/expand-disk](/edge/rest-api/#post-edgeexpand-disk)

>**Info:** If there is no disk space to expand, the task will be marked as success.