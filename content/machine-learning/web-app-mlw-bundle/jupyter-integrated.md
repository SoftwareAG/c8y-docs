---
title: Jupyter Notebook
layout: redirect
weight: 50
---

Machine Learning Workbench (MLW) provides an integrated Jupyter Notebook environment that enables you to write your code, perform exploratory data analysis, visualize your data, and build your models. The notebook environment is an intuitive in-browser editor that can be used to combine Markdown text and executable Python source code.

### Creating a new notebook

1. To create a new notebook, click the add icon <img src="/images/zementis/mlw-new-automl-icon.png" alt="Add" style="display:inline-block; margin:0"> and select **Add New Resource**.

	<!-- ![Add new resource](/images/zementis/mlw-app-resource-add-new.png) -->

2. In the **Add New Resource** dialog, select "Notebook" as **Resource Type** and provide the **Resource Name** which identifies the notebook and click **Submit**.

 	![Notebook Selector](/images/zementis/mlw-app-resource-add-notebook.png)

This will create a new notebook file with the extension **.ipynb** in the **Code** folder of the project.

### Editing and executing a notebook

To edit a notebook, select the notebook file in the **Code** folder and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0"> at the top right.

This will open the notebook in an editor which you can use to write and execute Python and Markdown code interactively.

<!-- ![Notebook editor](/images/zementis/mlw-app-nb-edit.png) -->

<!-- ![Notebook layout](/images/zementis/mlw-app-nb-layout.png) -->

Snippets of code/comments can be combined in individual cells. Output generated from a cell is displayed below the cell.

![Notebook execution](/images/zementis/mlw-app-nb-execution.png)

{{< c8y-admon-info >}}
The Jupyter Notebook environment currently supports Python 3 kernel.
{{< /c8y-admon-info >}}

<a name="Jupyter-Enterprise-Gateway-and-MLW-library"></a>
### Jupyter Enterprise Gateway and MLW library

Jupyter Enterprise Gateway (JEG) is now integrated to use with MLW. To use JEG, credentials needs to be set first.

Click **Settings** in the navigator, switch to the **JEG** tab and enter the JEG credentials.


![JEG Setting](/images/zementis/mlw-app-jeg-settings-page.png)

Once the JEG credentials are set, all previously active Notebook instances will be killed. While opening any notebook, the desired JEG kernel must be selected from the dropdown list.



![JEG Kernels](/images/zementis/mlw-app-jeg-kernels.png)

A new library **mlw-sdk** has been developed to help move files between MLW & JEG. The sample code snippets for this library are available to be used readily.


To open the code snippets panel, click on the code snippets icon <img src="/images/zementis/mlw-sdk-code-snippets-icon.png" alt="Code Snippets" style="display:inline-block; margin:0"> at the end of the Jupyter Notebook tool bar.


Select the desired code snippet from this panel & click the **insert** option to populate the code in Jupiter Notebook cells.


![MLW SDK Code Snippets](/images/zementis/mlw-sdk-code-snippets-panel.png)




<a name="Assets-grouping-and-deletion"></a>
### Assets grouping and deletion

Jupyter Notebook instances are grouped separately for each projects. To see the Jupyter Notebook instance associated with a project, click **Assets** in the navigator, and then select the project to see all its active notebook instances.


To kill instance(s), click **Assets** in the navigator and select a project to display the associated instances. Select the instance(s), and click the kill instance icon <img src="/images/zementis/mlw-kill-instance-icon.png" alt="Kill instance" style="display:inline-block; margin:0"> at the top right.



![Asset delete](/images/zementis/mlw-app-project-assets-delete.png)
