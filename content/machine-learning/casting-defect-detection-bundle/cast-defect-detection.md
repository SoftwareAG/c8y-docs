---
title: Casting defect detection
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/casting-defect-detection/
---

This section deals with the basic data science steps of creating a casting defect detection model using Machine Learning Workbench with the open-source Kaggle dataset. Follow the sections below for downloading data, building a neural network architecture, transfer learning with MobileNet, training the model, deploying the model to production and using the same to detect defects in the casts. 


### Kaggle dataset

We have downloaded the open-source Kaggle dataset from https://www.kaggle.com/ravirajsinh45/real-life-industrial-dataset-of-casting-product.

All the images provided with this dataset are the top view of the submersible pump impeller.

The dataset contains 7340 images in total. These are all grey-scaled images of the size 300x300 pixels. The augmentation is already applied in all the images.

There are mainly two categories:

1. Defective
2. Ok

For training a classification model, the data is split into train and validation folders. Both *train* and *validation* folders contain *def_front* and *ok_front* subfolders.

* **train:** *def_front* has 3758 and *ok_front* has 2875 images
* **validation:** *def_front* has 449 and *ok_front* has 258 images


### Uploading the project to MLW

Log in to the MLW and Follow the steps described in [Machine Learning Workbench > Upload a project](/machine-learning/web-app-mlw/#upload-a-project) to upload **CastingDefectDetectionDemoProject.zip** project to MLW. This might take a few minutes depending on your internet bandwidth.

After the project is uploaded sucessfully, navigate to the **Data** folder of the project. You should also see 3 data files, 5 code files, and 1 architecture file within the project.

#### Training the model

**Method 1: Creating/Using a custom deep neural network architecture**  

1. Follow the steps described in [Machine Learning Workbench > Neural Network (NN) Designer](/machine-learning/web-app-mlw/#creating-a-new-custom-architecture-file) and create a new architecture file named *castingModelDesigner.architecture* with "None" as **Architecture**. Or use the already available architecture file (*castingModelDesigner*) which exists within the project. Jump to step 4 if you are doing the latter.

2. Select the *castingModelDesigner.architecture* file and click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0"> to open an interface/editor to build your own deep neural network architecture by dragging and dropping various layers available in the menu at the left.

3. Build a deep neural network architecture using the below example and save:

    ![Design](/images/zementis/castingDetection/mlw-casting-method1-arch-design.gif)

4. Train the deep neural network model by setting the **Training Parameters** as below:

    ![TrainParams](/images/zementis/castingDetection/mlw-casting-method1-arch-training-params.png)

5. To monitor the model building progress, click **Tasks** in the navigator and click *castingDefectModel*. The training time is generally 30-50 minutes for 10 epochs for this particular dataset. Initially, the task status is INITIALISING and gets changed to TRAINING STARTED once the training starts.

    After the training is complete, the task status will be set to COMPLETED and a model named *castingDefectModel.onnx* is saved to the **Model** folder.

**Method 2: Training a model in Jupyter Notebook using the transfer learning technique with Mobilenet architecture**

1. In the **Code** folder of the project, click *castingDefectDetectionDemo.ipynb* to view the metadata of the file. 

2. Click the edit icon <img src="/images/zementis/mlw-edit-icon.png" alt="Edit" style="display:inline-block; margin:0"> to open the Jupyter Notebook and execute all the cells in sequence.

Once all the cells are executed successfully, a model named *castingDefectModelViaJNB.onnx* is saved to the **Model** folder.


#### Deploying the model using the inference pipeline

Now that the model is successfully trained (by any of the above two training methods) and available for serving in the form of an ONNX file, you can create an inference pipeline for deploying the model to production. 

Depending on the training method used, use the relevant Python scripts.

* If **Method 1** has been used for training: Use *castingPreProcessingForNN.py* and *castingPostProcessingForNN.py* Python scripts.
* If **Method 2** has been used for training: Use *castingPreProcessingForJNB.py* and *castingPostProcessingForJNB.py* Python scripts.

The inference pipeline uses a pre-processing script, a model (.onnx file) and a post-processing script.

* The pre-processing script is used to pre-process incoming test data (image) to convert it into 250x250 size. The pre-processing script *castingPreProcessingForNN.py* looks like below.

```
  import numpy as np
  from PIL import Image
  import io
  def process(content):
      im = Image.open(io.BytesIO(content)).convert('RGB')
      im = im.resize((250,250))
      x = np.array(im,dtype=np.float32)
      x *= 1./255
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

1. Follow the steps described in [Machine Learning Workbench > Inference pipeline](/machine-learning/web-app-mlw/#creating-a-new-pipeline) and create an inference pipeline named *castingPipeline.pipeline* by selecting 'castingDefectModel.onnx' as **Model**, 'castingPreProcessingForNN.py' as **Pre-processing Script** and 'castingPostProcessingForNN.py' as **Post-processing Script** if you have used **Method 1** or 'castingDefectModelViaJNB.onnx' , 'castingPreProcessingForJNB.py' as **Pre-processing Script** and 'castingPostProcessingForJNB.py' as **Post-processing Script** if you have used **Method 2**. 
    
    This creates a new pipeline file named *castingPipeline.pipeline* in the **Inference Pipeline** folder. you will be able to see the metadata of the pipeline file by clicking on it.

2. Deploy the pipeline to the production.


#### Predictions using the deployed pipeline

Now that the inference pipeline is successfully deployed to production and available for serving, you can make predictions using the test data. 

1. Uploading *CastingDefectDetectionDemoProject.zip* project uploaded *testDefectImage.PNG* and *testOkImage.PNG* test images.

2. Navigate to the **Data** folder and select *testDefectImage.PNG*. Predict the class of image using castingPipeline.

The predictions file will be stored in the **Data** folder with the name *testDefectImage_timeStamp.json*. Edit the predictions JSON file to view the predictions.