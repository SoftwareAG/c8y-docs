---
title: Overview
layout: redirect
weight: 10

aliases:
  - /predictive-analytics/casting-defect-detection/#overview
---

Casting is a manufacturing process in which a liquid material is usually poured into a mould, which contains a hollow cavity of the desired shape, and then allowed to solidify.

A casting defect is an undesired irregularity in a metal casting process. There are many types of defects in casting like blow holes, pinholes, burr, shrinkage defects, mould material defects, pouring metal defects, metallurgical defects, etc. Defects are an unwanted thing in the casting industry. For removing this defective product, all industry have their quality inspection department. But the main problem is this inspection process is carried out manually. It is a very time-consuming process and due to human accuracy, this is not 100% accurate. This can lead to the rejection of the whole order which creates a big loss to the company.

Casting Defect Detection is an automated way of making the inspection process by utilizing the power of Deep Learning algorithms.

For the purpose of showcasing this use case, we followed these steps:

* Download the Open-Source Kaggle Dataset from https://www.kaggle.com/ravirajsinh45/real-life-industrial-dataset-of-casting-product .
* **Method 1**: Use MLW's intuitive drag and drop Neural Network Designer to build your Deep Neural Network architecture and start training the model. 
* **Method 2**: Use MLW's integrated Jupyter Notebook to train your model using the Transfer-Learning approach.
* Use the transformed ONNX model, pre-processing, and post-processing scripts to build an Inference Pipeline and with a single click, Deploy the same to production (Cumulocity IoT Machine Learning).
	* The pre-processing script tranforms the data to a valid format which the ONNX model accepts.
	* The post-processing script assigns a proper class to the predicted probabilities.
* Make inferences using the model in production.
