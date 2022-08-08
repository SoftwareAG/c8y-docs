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

> **Info:** The Jupyter Notebook environment currently supports Python 3 kernel.
