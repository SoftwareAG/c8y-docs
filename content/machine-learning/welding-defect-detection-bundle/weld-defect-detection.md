---
title: Welding defect detection
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/welding-defect-detection/
---

Instructions for running welding defect detection.

### Data description

The data used in this project is based on this dataset available on Kaggle: [TIG Aluminium 5083]( https://www.kaggle.com/danielbacioiu/tig-aluminium-5083). The included data differs from the Kaggle dataset in the following ways:

- Images now fall into one of two classes: 0 ("no defect") and 1 ("defect"). The "defect" class contains an equal number of images from every type of original defect class (classes 1 through 5 in the original dataset).
- Images have been resized to 128x128 pixels from the original 800x194.
- The Data directory contains three subdirectories, each with images for class 0 and 1: 
	- train: 1000 images per class (2000 total)
	- test: 300 images per class (600 total)
	- val: 300 images per class (600 total)

### Uploading the project

Download the project zip file from [this link](link). In Machine Learning Workbench, click on Projects in the left menu, and then click on "Add Project" on right. Choose "Upload", and upload the project zip file.


### Running the notebook
Run the notebook by clicking the Play button on each cell, or click on the Restart button and choose "Restart & Run All" to run all cells.

> **Info:** The 'Load Libraries' section includes commented-out code to install necessary libraries if they are not already installed. Uncomment these lines if needed.


### Creating and deploying the pipeline


### Making predictions













