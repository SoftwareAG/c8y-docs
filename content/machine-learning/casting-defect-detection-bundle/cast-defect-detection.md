---
title: Casting defect detection
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/casting-defect-detection/
---

This section deals with the basic data science steps of creating a casting defect detection model using Machine Learning Workbench with the open-source Kaggle dataset. Follow the sections below for downloading data, building a neural network architecture, transfer learning with MobileNet, training the model, deploying the model to production and using the same to detect defects in the casts. 


### Collecting data from Kaggle

Download the open-source Kaggle dataset from https://www.kaggle.com/ravirajsinh45/real-life-industrial-dataset-of-casting-product.

![Kaggle](/images/zementis/castingDetection/mlw-casting-kaggle_data.png)

> **Info:** You will get two folders when you unzip the downloaded dataset. Use the *casting_data* folder and delete the *casting_512x512* folder.

All the images provided with this dataset are the top view of the submersible pump impeller.

The dataset contains 7348 images in total. These are all grey-scaled images of the size 300x300 pixels. The augmentation is already applied in all the images.

There are mainly two categories:

1. Defective
2. Ok

For training a classification model, the data is split into training and testing folders. Both *train* and *test* folders contain *def_front* and *ok_front* subfolders.

* **train:** *def_front* has 3758 and *ok_front* has 2875 images
* **test:** *def_front* has 453 and *ok_front* has 262 images

Change the name of *test* folder to *validation* and create a ZIP file of these two folders (i.e. a ZIP file contaning *train* and *validation* folders). 

![Format](/images/zementis/castingDetection/mlw-casting-zip-format.png)


### Uploading the data to MLW

Log in to the MLW and use the **Upload Resources** option to upload the created ZIP file. This might take a few minutes depending on your internet bandwidth.

![Upload](/images/zementis/castingDetection/mlw-casting-data-upload.png)

After the data is uploaded sucessfully, navigate to the **Data** folder of the MLW and click on the ZIP file. You should see the metadata of the uploaded dataset.

![Metadata](/images/zementis/castingDetection/mlw-casting-data-metadata.png)


#### Training the model

**Method 1: Creating a custom deep neural network architecture**  

1. Create a new Neural Network Designer file by clicking:

**Add Resource** > **Add New Resource** > **Resource Type (NN Designer)** > **Resource Name (for example castingModelDesigner)** > **Submit**

![Create](/images/zementis/castingDetection/mlw-casting-method1-create-arch.png)

This creates a new architecture file named *castingModelDesigner.architecture* in the **NN Designer** folder.

![Metadata](/images/zementis/castingDetection/mlw-casting-method1-arch-metadata.png)

2. Select the *castingModelDesigner.architecture* file and click the edit icon to open an interface/editor to build your own deep neural network architecture by dragging and dropping various layers available in the menu at the left.

3. Build a deep neural network architecture using the below example:

![Design](/images/zementis/castingDetection/mlw-casting-method1-arch-design.gif)

4. Save the architecture file by clicking **Save**.

![Save](/images/zementis/castingDetection/mlw-casting-method1-arch-save.png)

5. Train the deep neural network model by setting the **Training Parameters** as below:

![TrainParams](/images/zementis/castingDetection/mlw-casting-method1-arch-training-params.png)

6. Monitor the model building progress by clicking the *castingDefectModel* in the **Tasks** section. The training time is generally 30-50 minutes for 10 epochs for this particular dataset. Initially, the task status is INITIALISING and gets changed to TRAINING STARTED once the training starts.

![Progress](/images/zementis/castingDetection/mlw-casting-method1-model-progress.png)

After the training is complete, the task status will be set to COMPLETED.

![Complete](/images/zementis/castingDetection/mlw-casting-method1-training-complete.png)

7. Check the ONNX model with the name *castingDefectModel.onnx* in the **Model** folder. 

![Metadata](/images/zementis/castingDetection/mlw-casting-method1-model-metadata.png)

**Method 2: Training a model in Jupyter Notebook using the transfer learning technique with Mobilenet architecture**

1. The *CastingDefectDetectionDemo.zip* has a folder named *Method2* which contains a Jupyter Notebook file named *castingDefectDetectionDemo.ipynb*. Use the MLW's upload functionality to upload the Notebook file. 

![Upload](/images/zementis/castingDetection/mlw-casting-method2-upload.png)

2. In the **Code** folder of the MLW, click *castingDefectDetectionDemo.ipynb* to view the metadata of the file. 

![Metadata](/images/zementis/castingDetection/mlw-casting-method2_metadata.png)

3. Click the edit icon to open the Jupyter Notebook and execute all the cells in sequence.

![Execute](/images/zementis/castingDetection/mlw-casting-method2-execute.png)

Once all the cells are executed successfully, a model named *castingDefectModelViaJNB.onnx* is saved to the **Model** folder.

4. Check the ONNX model with the name *castingDefectModelViaJNB.onnx* saved in the **Model** folder.

![Metadata](/images/zementis/castingDetection/mlw-casting-method2-model-metadata.png)


#### Deploying the model using the inference pipeline

Now that the model is successfully trained (by any of the above two training methods) and available for serving in the form of an ONNX file, you can create an inference pipeline for deploying the model to production. 

The *CastingDefectDetectionDemo.zip* contains two folders namely *Method1* and *Method2*. Depending on the training method used, upload the relevant Python scripts.

* If **Method 1** is has been used for training: Use *castingPreProcessingForNN.py* and *castingPostProcessingForNN.py* Python scripts from the *Method1* folder. Use the MLW's upload functionality to upload these Python files.
* If **Method 2** is has been used for training: Use *castingPreProcessingForJNB.py* and *castingPostProcessingForJNB.py* Python scripts from the *Method2* folder. Use the MLW's upload functionality to upload these Python files.

![Upload](/images/zementis/castingDetection/mlw-casting-script-upload.png)

The inference pipeline uses a pre-processing script, a model (.onnx file) and a post-processing script.

* The pre-processing script is used to pre-process incoming test data (image) to convert it into *250*250 size. The pre-processing script **castingPreProcessingForNN.py* looks like below.

```
  import numpy as np
  from PIL import Image
  import io
  def process(content):
      im = Image.open(io.BytesIO(content))
      im = im.resize((250,250))
      x = np.array(im,dtype=np.float32)
      x = np.expand_dims(x,0)
      return {"Conv2D_input":x}
```

* The post-processing script is used to assign proper classes to the predicted probabilities from the ONNX model. The post-processing script *castingPostProcessingForNN.py* looks like below.

```
  def process(content):
      import numpy as np
      classes = ["defective","ok"]
      cla = classes[np.argmax(content[0])]
      return {"Dense":content[0].tolist(),"PredictedClass":cla}
```

2. Create an inference pipeline by clicking:

**Add Resource** > **Add New Resource** > **Resource Type (Pipeline)** > **Resource Name (castingPipeline)** > **Model ('castingDefectModel.onnx' or 'castingDefectModelViaJNB.onnx')** > **Pre-processing Script ('castingPreProcessingForNN.py')** > **Post-processing Script ('castingPostProcessingForNN.py')** > **Submit**

![Pipeline](/images/zementis/castingDetection/mlw-casting-create-pipeline.png)

This creates a new pipeline file named *castingPipeline.pipeline* in the **Inference Pipeline** folder. you will be able to see the metadata of the pipeline file by clicking on it.

![Metadata](/images/zementis/castingDetection/mlw-casting-pipeline-metadata.png)

3. Deploy the pipeline to the production by clicking **Deploy**. 

![Deploy](/images/zementis/castingDetection/mlw-casting-pipeline-deploy.png)


#### Predictions using the deployed pipeline

Now that the inference pipeline is successfully deployed to production and available for serving, you can make predictions using the test data. 

1. The *CastingDefectDetectionDemo.zip* contains two folders namely *Method1* and *Method2*. Both the folders contain *testDefectImage.PNG* and *testOkImage.PNG* test images. Use the MLW's upload functionality to upload these test image files from any of the folders.

![Upload](/images/zementis/castingDetection/mlw-casting-image-upload.png)

2. Navigate to the **Data** folder and select *testDefectImage.PNG*. Click **Predict Data** > **PIPELINE** > **castingPipeline** > **Submit**.

![Predict](/images/zementis/castingDetection/mlw-casting-prediction-pipeline.png)

The predictions file will be stored in the **Data** folder with the name *testDefectImage_timeStamp.json*. Click on the predictions JSON file and click the edit icon to view the predictions. 

![Result](/images/zementis/castingDetection/mlw-casting-prediction-result.png)