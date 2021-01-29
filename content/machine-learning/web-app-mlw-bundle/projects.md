---
title: Projects
layout: redirect
weight: 30
---

Machine Learning Workbench (MLW) provides a version-controlled project-based structure to organize all the data science resources including data, code, models, neural network architectures, inference pipelines, and training workflows.

Projects functionality includes:

* Creating a new project.
* Adding resources to the project - drag and drop, upload single or multiple files.
* Committing a project - version management.

***Add New Project***

To create a new project, click **+Add Project**, fill the form with **Project Name** and **Project Description**, and click **Add Project**. This will create a new project with the given name. The new project will not contain any resources.

![projects manager](/images/zementis/mlw-app-add-project.png)

***Resources***

![Resources](/images/zementis/mlw-app-project-home.png)

Machine Learning Workbench (MLW) categorizes project resources as follows:

| Resource | Content description | File type |
|-----     |-----        |-----      |
| Data | Training data for Machine Learning Workbench (MLW). | <ul><li>csv</li><li>json</li><li>zip</li><li>png</li><li>jpg/jpeg</li></ul> |
| Code | Python code for data preparation/exploration, data pre/post-processing steps, model training and evaluation. | <ul><li>py</li><li>ipynb</li></ul> |
| Model | Models trained by Machine Learning Workbench (MLW). | <ul><li>pmml</li><li>onnx</li></ul> |
| NN Designer | Architectures depicting complex structures of Deep Neural Networks. | <ul><li>architecture (JSON)</li></ul> |
| Inference Pipeline | Inference pipelines that define a sequence of pre-processing step, ONNX model, and post-processing step. | <ul><li>pipeline (JSON)</li></ul> |
| Training Workflow | Training workflows that define a sequence of data preparation and model training/export activity that can be scheduled periodically. | <ul><li>wf (JSON)</li></ul> |

***Upload Resources***

To upload files, you can either click the upload pane to select files for uploading or use the drag and drop files capability.

![Upload Resources](/images/zementis/mlw-app-upload-resources.png)

***Upload Complete***

Once the files are uploaded, they will be placed under respective categories.

![Upload Resources](/images/zementis/mlw-app-upload-complete.png)

***Commit Project Version***

You can commit a project with its resources for versioning.

![Upload Resources](/images/zementis/mlw-app-project-commit.png)

***Resource Selection For Version***

You can select all/subset of resource files that needs to be committed to a version.

![Upload Resources](/images/zementis/mlw-app-project-commit-select.png)

***Version Committed***

You can see the status of the commit process in the **Tasks** section under the respective task name, which in this case will be the project name.

![Upload Resources](/images/zementis/mlw-app-project-commited.png)

***Version Information***

Project tile will show the different versions available for that project.

![Upload Resources](/images/zementis/mlw-app-project-version.png)
