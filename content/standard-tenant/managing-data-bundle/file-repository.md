---
weight: 20
title: File repository
layout: redirect
section:
  - platform_administration
helpcontent:
- label: files
  title: Files repository
  content: "The file repository provides an overview of the files stored in your account. The files can come from various sources. They can be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded from the **Own applications** page."
---


The file repository provides an overview of the files stored in your account.

{{< c8y-admon-req >}}
ROLES & PERMISSIONS:

- To view files in the files repository: READ permission for the permission type "Inventory". You can remove owned files with this permission but you cannot remove files of other users.
- To upload files to the files repository: CREATE permission for the permission type "Inventory".
- To upload and manage files of all owners in the files repository: ADMIN permission for the permission type "Inventory".

The above permissions can be used to create roles for robust user management. Every new tenant have specified typical roles by default:
- Global Manager - Can read and write all data from all devices
- Global Reader - Can read all data from all devices

{{< /c8y-admon-req >}}


Click **Files repository** in the **Management** menu to see a list of files.

The files listed can come from various sources. They can be software images, configuration snapshots taken from devices, log files from devices or web applications uploaded from the **All applications** page.

For each file, the name of the file, its owner, its type (for example, image/bmp, text/csv), its size and its last update date are displayed. If file type is supported, you can click a magnifier icon next to the file name to preview it. You can download or delete a file by clicking action buttons which appear when hovering over the file row. Note that some files (for example, application archives) cannot be deleted from this page.

You can use filters or search input to look for particular files, see [Search and filter functionality](/getting-started/gui-features/#search-and-filter-functionality) for details. By default, files are sorted by **File name**. To change the sorting, remove the default filter and define your own criteria for filtering the list.

<img src="/images/users-guide/Administration/admin-files-repository.png" alt="Files Repository" style="max-width: 100%">

### To upload a file from your file system

Click **Upload files** in the top menu bar. In the resulting dialog box, select the files to be uploaded by browsing your file system or dropping the files. You can review the selected files in the displayed list and confirm the upload by clicking **Upload**.


### To download a file from your account

Click the menu icon at the right of the respective row and then click **Download**.


### To delete a file from your account

Hover over the row with file entry and click the <img src="/images/icons/trash-can.png" alt="Trash can icon" style="display:inline-block; margin:0"> to remove the file.
You can also select multiple files for deletion, by ticking checkbox next to each file or select all currently displayed ones. Within appeared table header you can see the number of files selected and actions that can be performed on those files. Click **Delete** and confirm the removal within confirmation dialog displayed.

{{< c8y-admon-info >}}
* If a file is an application archive, it cannot be deleted from within files repository. You need to remove that file from application activity log view.
* If you delete files in bulk and selection contains files illegible for removal, removal will proceed ignoring the files which can't be deleted.
{{< /c8y-admon-info >}}
