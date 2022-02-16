---
title: Welding defect detection
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/welding-defect-detection/
---

Instructions for running welding defect detection.

### Data description

The data included with this project is based on this dataset available on Kaggle: [TIG Aluminium 5083]( https://www.kaggle.com/danielbacioiu/tig-aluminium-5083) (it is not necessary to download the Kaggle dataset). The data has the following properties:

- Images fall into one of two classes: 0 ("no defect") and 1 ("defect"). The "defect" class contains an equal number of images from every type of original defect class (classes 1 through 5 in the original dataset).
- Images are 128x128 pixels, grayscale.
- The Data directory contains three subdirectories, each with images for class 0 and 1: 
	- train: 1000 images per class (2000 total)
	- test: 300 images per class (600 total)
	- val: 300 images per class (600 total)
	
The train and validation sets are used during model training. The test set is used at the very end to check model performance.

### Uploading the project to MLW

Log in to the MLW and follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) to upload **WeldingDefectDetectionDemoProject.zip** project to MLW. This might take a few minutes depending on your internet bandwidth.

After the project is uploaded sucessfully, navigate to the **Data** folder of the MLW and click on the ZIP file. You should see the metadata of the uploaded dataset. You should also see 2 test data files, 3 code files, and 1 model file within the project.



### Running the notebook

Run the notebook by clicking the Play button on each cell, or click on the Restart button and choose "Restart & Run All" to run all cells.

> **Info:** The 'Load Libraries' section includes commented-out code to install necessary libraries if they are not already installed. Uncomment these lines if needed, and use the `!pip install <library name>` command to install any other needed libraries.

The final cell in the notebook saves an onnx file ("mobilenet_01.onnx") in the "Model" directory.


### Creating and deploying the pipeline


### Making predictions













