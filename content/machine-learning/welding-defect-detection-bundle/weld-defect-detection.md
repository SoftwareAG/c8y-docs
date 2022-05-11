---
title: Welding defect detection
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/welding-defect-detection/
---

In this section, we describe the steps to create a welding defect detection model using Machine Learning Workbench and the included data set. Follow the sections below to learn about the data, how to train a MobileNet model with transfer learning, how to deploy the model to production, and how to use it to detect defects in images of welds.

### Data description

The data included with this project is based on this dataset available on Kaggle: [TIG Aluminium 5083]( https://www.kaggle.com/danielbacioiu/tig-aluminium-5083). It is not necessary to download the Kaggle dataset. The project data has been changed from the Kaggle version, and has the following properties:

- Images fall into one of two classes: 0 ("no defect") and 1 ("defect"). The "defect" class contains an equal number of images from every type of the original defect class (classes 1 through 5 in the original dataset).
- Images are 128x128 pixels, grayscale.
- The data is split into three subdirectories, each with images for class 0 and 1:
	- train: 1000 images per class (2000 total)
	- test: 300 images per class (600 total)
	- val: 300 images per class (600 total)

The train and validation sets are used during model training. The test set is used at the very end to check model performance.

### Uploading the project to MLW

Log in to the MLW and follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) to upload the **WeldingDefectDetectionDemoProject.zip** project to MLW. This might take a few minutes depending on your internet bandwidth.

After the project is uploaded sucessfully, navigate to the **Data** folder of the MLW and select the ZIP file. You should see the metadata of the uploaded data set. You should also see 2 test data files, 3 code files, and 1 model file within the project.



### Training the model

1. Uploading *WeldingDefectDetectionDemoProject.zip* project uploaded a Jupyter Notebook file named *WeldingDefectDetectionDemo.ipynb*.

2. In the **Code** folder of the MLW, click *weldingDefectDetectionDemo.ipynb* to view the metadata of the file.

3. Click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0"> to open the Jupyter Notebook and execute all the cells in sequence.

> **Info:** The 'Load Libraries' section includes commented-out code to install necessary libraries if they are not already installed. Uncomment these lines if needed, and use the `!pip install <library name>` command to install any other needed libraries.

Once all the cells are executed successfully, a model named *weldingDefectModel.onnx* is saved to the **Model** folder.



### Deploying the model using the inference pipeline

Once the model is trained and available for serving in the form of an ONNX file, you can create an inference pipeline for deploying the model to production.

The **Code** folder contains the scripts *weldingPreProcessing.py* and *weldingPostProcessing.py*, which we will use along with the model (.onnx file) to create the pipeline.

* The pre-processing script is used to pre-process incoming test data (image) for the model. The script is shown below:

```
def process(content):
    import io
    from PIL import Image
    import numpy as np

    im = Image.open(io.BytesIO(content)).convert('RGB')       
    x = np.array(im)
    x = x.astype(np.float32)
    x = x/255.
    x = np.expand_dims(x, axis=(0))
    return {"input":x}
```

* The post-processing script is used to assign proper classes to the predicted probabilities from the ONNX model. The script is shown below:

```
def process(content):
    import numpy as np
    f_cont = content[0][0]
    labels = ["no defect","defect"]
    pred_label = labels[np.argmax(f_cont)]
    return {"probability":f_cont.tolist(),"class":pred_label}
```

1. Follow the steps described in [Machine Learning Workbench > Inference pipeline](/machine-learning/web-app-mlw/#creating-a-new-pipeline) and create an inference pipeline named *weldingPipeline.pipeline* by selecting 'weldingDefectModel.onnx' as **Model**, 'weldingPreProcessingForNN.py' as **Pre-processing Script** and 'weldingPostProcessingForNN.py' as **Post-processing Script**.

This creates a new pipeline file named *weldingPipeline.pipeline* in the **Inference Pipeline** folder. You can see the metadata of the pipeline file by clicking it.

2. Deploy the pipeline to production by clicking the deploy icon <img src="/images/zementis/mlw-deploy-icon.png" alt="Deploy" style="display:inline-block; margin:0">.


### Making predictions using the deployed pipeline

Now that the inference pipeline is successfully deployed to production and available for serving, you can make predictions using the test data.

1. Uploading the *WeldingDefectDetectionDemoProject.zip* project uploaded the *testDefectImage.PNG* and *testNoDefectImage.PNG* test images.

2. Navigate to the **Data** folder and select *testDefectImage.PNG*. Predict the class of image using weldingPipeline.

The predictions file is stored in the **Data** folder with the name *testDefectImage_timeStamp.json*. Edit the predictions JSON file to view the predictions.
