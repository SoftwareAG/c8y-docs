---
title: Projects
layout: redirect
weight: 30
---

Machine Learning Workbench (MLW) provides a version-controlled project-based structure to organize all the data science resources including data, code, models, neural network architectures, inference pipelines, and training workflows.

Projects functionality includes:

- [Creating a new project](#creating-a-new-project)
- [Uploading resources](#uploading-resources)
- [Deleting resources](#deleting-resources)
- [Committing a project version](#committing-a-project-version)
- [Switching between project versions](#switching-between-project-versions)
- [Downloading a project](#downloading-a-project)
- [Uploading a project](#uploading-a-project)
- [Deleting a project](#deleting-a-project)
- [Deleting a project version](#deleting-a-project-version)
- [Deleting multiple projects](#deleting-multiple-projects)
- [Task grouping and deletion](#task-grouping-and-deletion)

<a name="creating-a-new-project"></a>
### Creating a new project

Click **Projects** in the navigator. This will list all the available projects.

Click **+Add Project** at the right of the top menu bar, enter a project name and description, and click **Add Project**. This will create a new project with the given name. The new project will not contain any resources.

<a name="uploading-resources"></a>
### Uploading resources

Machine Learning Workbench (MLW) categorizes project resources as follows:

| Resource | Content description | File type |
|-----     |-----        |-----      |
| Data | Training data for Machine Learning Workbench (MLW) | <ul><li>csv</li><li>json</li><li>zip</li><li>png</li><li>jpg</li><li>txt</li></ul> |
| Code | Python code for data preparation/exploration, data pre/post-processing steps, model training and evaluation | <ul><li>py</li><li>ipynb</li></ul> |
| Model | Models trained by Machine Learning Workbench (MLW) | <ul><li>pmml</li><li>onnx</li></ul> |
| NN Designer | Architectures depicting complex structures of deep neural networks | <ul><li>architecture (JSON)</li></ul> |
| Inference Pipeline | Inference pipelines that define a sequence of pre-processing step, ONNX model, and post-processing step | <ul><li>pipeline (JSON)</li></ul> |
| Training Workflow | Training workflows that define a sequence of data preparation and model training/export activity that can be scheduled periodically | <ul><li>wf (JSON)</li></ul> |

To upload files, click the cloud upload icon <img src="/images/zementis/mlw-upload-icon.png" alt="Upload" style="display:inline-block; margin:0"> and either click on the upload pane and select the files for uploading or use the drag and drop files capability.

![Upload resources](/images/zementis/mlw-app-upload-resources.png)

Once the files are uploaded, they will be placed under the respective categories.

<a name="deleting-resources"></a>
### Deleting resources

To delete resource(s), click **Projects** in the navigator, select the project from which you want to delete resources, select the resource category (for example, Data) and select the resource(s). Click the delete icon on top right corner to delete the selected resource.

![Resource delete](/images/zementis/mlw-app-delete-resources.png)

<a name="committing-a-project-version"></a>
### Committing a project version

To commit a project with its resources for versioning, click the plus icon <img src="/images/zementis/mlw-commit-add-icon.png" alt="Commit" style="display:inline-block; margin:0"> next to the project name at the top.

You can select all or a subset of resource files that need to be committed to a version. And click the submit icon <img src="/images/zementis/mlw-submit-icon.png" alt="Submit" style="display:inline-block; margin:0">.

![Commit version](/images/zementis/mlw-app-project-commit-select.png)

Click **Tasks** in the navigator and click the respective task name, which in this case will be the project name, to display the status of the commit process in the **Task History** section at the center.

The project card will show the different versions available for that project.

![Upload Resources](/images/zementis/mlw-app-project-version.png)

<a name="switching-project-version"></a>
### Switching between project versions

To switch to a different version of the project, click **Projects** in the navigator, select the version you want to switch to in the project tile and click **Pull**. The version switch message will show up in the respective project tile.

![Version Pull](/images/zementis/mlw-app-project-version-pull.png)

![Version Change](/images/zementis/mlw-app-project-version-change.png)

Click **Tasks** in the navigator and click the respective task name, which in this case is the project name, to display the status of the commit process in the **Task History** section at the center.

<a name="downloading-a-project"></a>
### Downloading a project

To download a specific version of a project, click the icon <img src="/images/zementis/mlw-hamburger-icon.png" alt="Hamburger" style="display:inline-block; margin:0"> and click **Download**.

![Project download](/images/zementis/mlw-app-project-download.png)

Click **Tasks** in the navigator and click the respective task name, which in this case is the project name underscore download (ex. demoproject_download), to display the status of the download process in the **Task History** section at the center.

Once the task has reached **COMPLETED** status, the project ZIP would be successfully created. You can download the project ZIP by clicking on the **Project** button on the project card.

![ZIP download](/images/zementis/mlw-app-project-download-zip.png)

<a name="uploading-a-project"></a>
### Uploading a project

To facilitate collaboration and sharing, MLW allows you to upload the contents from an exported project archive.

To upload a project on a particular tenant, Click **+Add Project** at the right of the top menu bar, select the **Upload** radio button and upload the ZIP file by clicking on **Drop file here** button.

![Project upload](/images/zementis/mlw-app-project-upload.png)

Click **Tasks** in the navigator and click the respective task name, which in this case is the project name underscore unique uuid (ex. demoproject_a3n67e), to display the status of the upload process in the **Task History** section at the center.

Once the task has reached COMPLETED status, the new project card is successfully created. You can view the contents of the project by clicking the respective project card.

<a name="deleting-a-project"></a>
### Deleting a project

To delete a project, click the context menu icon <img src="/images/zementis/mlw-hamburger-icon.png" alt="Hamburger" style="display:inline-block; margin:0"> and click **Delete**.

![Project download](/images/zementis/mlw-app-project-delete.png)

Click **Tasks** in the navigator and click the respective task name, which in this case is the project name underscore delete (ex. demoproject_delete), to display the status of the delete process in the **Task History** section at the center.

Once the task has reached **COMPLETED** status, the project would be successfully deleted.

<a name="deleting-a-project-version"></a>
### Deleting a project version

To delete a specific version of the project, click **Projects** in the navigator, select the version you want to delete in the project tile and click **Delete**. 

![Project version delete](/images/zementis/mlw-app-project-version-delete.png)

Click **Tasks** in the navigator and click the respective task name, which in this case is "project name underscore version underscore version number underscore delete" (for example, demoproject_version_v1_delete), to display the status of the delete process in the **Task History** section at the center.

Once the task has reached **COMPLETED** status, the project version is successfully deleted.

<a name="deleting-multiple-projects"></a>
### Deleting multiple projects

To delete multiple projects, click **Projects** in the navigator, then click **Bulk Actions** <img src="/images/zementis/mlw-bulk-actions-icon.png" alt="Bulk Actions" style="display:inline-block; margin:0"> at the top right. Select the projects you want to delete and click **Delete**. 

![Project delete](/images/zementis/mlw-app-multi-project-delete.png)

Click **Tasks** in the navigator and click the respective task names for each deleted project, which in this case is "project name underscore delete" (for example, demoproject_delete), to display the status of the delete process in the **Task History** section at the center.

Once the task has reached **COMPLETED** status, the project version is successfully deleted.

Note, that deleting a project or a specific project version will fail with a notification if there is any ongoing task associated with the project.

<a name="Task-grouping-and-deletion"></a>
### Task grouping and deletion

Tasks are grouped separately for each project. To see tasks associated with a project, click **Tasks** in the navigator, and then select the project to see all its associated tasks.

To delete task(s), click **Tasks** in the navigator and select the project to display its associated tasks. Select the task(s) and click the delete icon at the top right.

![Task delete](/images/zementis/mlw-app-project-tasks-delete.png)
