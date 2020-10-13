---
title: Casting defect detection
layout: redirect
weight: 40

aliases:
  - /predictive-analytics/casting-defect-detection/
---

This section deals with the basic data science steps of creating a casting defect detection model with the open-source Kaggle Dataset. Follow the sections below for downloading data, building a Neural Network architecture, transfer learning with Mobilenet, training the model, deploying them to production and using the model to detect defects in the casts. 


#### Data collection from Kaggle

Download the Open-Source Kaggle Dataset from [here](https://www.kaggle.com/ravirajsinh45/real-life-industrial-dataset-of-casting-product).

![Kaggle](/images/zementis/castingDetection/mlw-casting-kaggle_data.png)

Note: We get two folders when you unzip the downloaded dataset. Please use the 'casting_data' folder and delete 'casting_512x512' folder.

All the images are the top view of the submersible pump impeller.

The dataset contains total of 7348 images. These all are the size of (300*300) pixels grey-scaled images. In all the images, the augmentation is already applied. 

There are mainly two categories:-
1) Defective
2) Ok

For training a classification model, the data is split into training and testing folders. Both train and test folders contains def_front and ok_front subfolders.

train:- def_front have 3758 and ok_front have 2875 images
test:- def_front have 453 and ok_front have 262 images

Note: Change the name of 'test' folder to 'validation' and create a zip of these two folders (i.e. zip contaning train and validation folders). 

![Format](/images/zementis/castingDetection/mlw-casting-zip-format.png)

#### Upload the Data to MLW

Login to MLW and using the 'upload' option, upload the created zip folder. This might take a few minutes depending on your internet bandwidth.

![Upload](/images/zementis/castingDetection/mlw-casting-data-upload.png)

After the data is uploaded sucessfully, navigate to 'Data' section of the MLW and click on the zip folder. We should be able to see the metadata of the uploaded dataset.

![Metadata](/images/zementis/castingDetection/mlw-casting-data-metadata.png)


#### Training the Model

### Method 1: Creating a custom Deep Neural Network Architecture  

* Create a new Neural Network Designer file by:

Add Resource -> Add New Resource -> Resource Type (NN Designer) -> Resource Name (ex. castingModelDesigner) -> Submit

![Create](/images/zementis/castingDetection/mlw-casting-method1-create-arch.png)

This will create a new architecture file named 'castingModelDesigner.architecture' under 'NN Designer' folder.

![Metadata](/images/zementis/castingDetection/mlw-casting-method1-arch-metadata.png)

* Click on the 'castingModelDesigner.architecture' file and click 'Edit' button to open an interface/editor to build your own Deep Neural Network Architecture by dragging and dropping various set of layers from the avialable left-hand menu

* Build a Deep Neural Network architecture using the below example:

![Design](/images/zementis/castingDetection/mlw-casting-method1-arch-design.gif)

* Save the architecture file

![Save](/images/zementis/castingDetection/mlw-casting-method1-arch-save.png)

* Train the Deep Neural Network Model by setting the Training Parameters as below:

![TrainParams](/images/zementis/castingDetection/mlw-casting-method1-arch-training-params.png)

* Monitor the Model building progress using the 'Tasks' section with the name 'castingDefectModel'. The training time is generally 30-50 minutes for 10 epochs for this particular dataset. The task status initially would be 'INITIALISING' and gets changed to 'TRAINING STARTED'

![Progress](/images/zementis/castingDetection/mlw-casting-method1-model-progress.png)

After the training is complete, the task status would be set to 'COMPLETED'

![Complete](/images/zementis/castingDetection/mlw-casting-method1-training-complete.png)

* Check the ONNX model with the name 'castingDefectModel.onnx' saved in the 'Models' section 

![Metadata](/images/zementis/castingDetection/mlw-casting-method1-model-metadata.png)

### Method 2: Tranfer Learning with Mobilenet for training using a Jupyter Notebook

* The 'CastingDefectDetectionDemo.zip' file contains a Jupyter Notebook file named 'castingDefectDetectionDemo.ipynb'. Please use the MLW's upload functionality to upload the Notebook file. 

![Upload](/images/zementis/castingDetection/mlw-casting-method2-upload.png)

* Navigate to 'Code' section of the MLW and click on the 'castingDefectDetectionDemo.ipynb' file to view the metadata of the file. 

![Metadata](/images/zementis/castingDetection/mlw-casting-method2_metadata.png)

* Click on 'Edit' button to open the Jupyter Notebook and execute all the cells in sequence.

![Execute](/images/zementis/castingDetection/mlw-casting-method2-execute.png)

When all the cells are successfully executed, a model named 'castingDefectModelViaJNB.onnx' is saved to 'Models' section.

* Check the ONNX model with the name 'castingDefectModelViaJNB.onnx' saved in the 'Models' section 

![Metadata](/images/zementis/castingDetection/mlw-casting-method2-model-metadata.png)


#### Model Deployment using Inference Pipeline

Now that the model is successfully trained (by any of the above two training methodologies) and available for serving in the form of ONNX file, it's time to create an Inference Pipeline for deploying the model to production. 

The 'CastingDefectDetectionDemo.zip' file contains 'castingPreProcessing.py' and 'castingPostProcessing.py' Python scripts. Please use the MLW's upload functionality to upload these Python files.

![Upload](/images/zementis/castingDetection/mlw-casting-script-upload.png)

The Inference Pipeline uses a pre-processing script, a model (.onnx file) and a post-processing script.

* The pre-processing script is used to pre-process an incoming test data (image) to convert it into 250*250 size. The pre-processing script ('castingPreProcessing.py') looks like below:

  castingPreProcessing.py
  import numpy as np
  from PIL import Image
  import io
  def process(content):
      im = Image.open(io.BytesIO(content))
      im = im.resize((250,250))
      x = np.array(im,dtype=np.float32)
      x /= 127.5
      x -= 1.
      x = np.expand_dims(x,0)
      return {"Conv2D_input":x}

* The post-processing script is used to assign proper classes to the predicted probabilities from the ONNX model. The post-processing script ('castingPostProcessing.py') looks like below:

  castingPostProcessing.py
  def process(content):
      import numpy as np
      classes = ["defective","ok"]
      index = np.argmax(content[0])
      cla = classes[index]
      return {"Dense":content[0].tolist(),"PredictedClass":cla}

Create an Inference Pipeline by:

Add Resource -> Add New Resource -> Resource Type (Pipeline) -> Resource Name (ex. castingPipeline) -> Model ('castingDefectModel.onnx' or 'castingDefectModelViaJNB.onnx') -> Pre-processing Script ('castingPreProcessing.py') -> Post-processing Script ('castingPostProcessing.py') -> Submit

![Pipeline](/images/zementis/castingDetection/mlw-casting-create-pipeline.png)

This will create a new pipeline file named 'castingPipeline.pipeline' under 'Inference Pipeline' folder. We should be able to see the metadata of the pipeline file.

![Metadata](/images/zementis/castingDetection/mlw-casting-pipeline-metadata.png)

Deploy the created pipeline by hitting on 'Deploy' button which successfully deploys the Inference Pipeline to the production. 

![Deploy](/images/zementis/castingDetection/mlw-casting-pipeline-deploy.png)


#### Predictions using the Deployed Pipeline

Now that the Inference Pipeline is successfully deployed to production and available for serving, it's time to make predictions using the test data. 

The 'CastingDefectDetectionDemo.zip' file contains 'testDefectImage.PNG' and 'testOkImage.PNG' test images. Please use the MLW's upload functionality to upload these test image files.

![Upload](/images/zementis/castingDetection/mlw-casting-image-upload.png)

Navigate to 'Data' section and click on the test image ('testDefectImage.PNG') -> Click on 'Predict Data' -> PIPELINE -> castingPipeline -> Submit

![Predict](/images/zementis/castingDetection/mlw-casting-prediction-pipeline.png)

The predictions file would be stored in the 'Data' section with the name 'testDefectImage_timeStamp.json'. Click on the predictions JSON file and hit 'Edit' button to view the predictions.

![Result](/images/zementis/castingDetection/mlw-casting-prediction-result.png)
