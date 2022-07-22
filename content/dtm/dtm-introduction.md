---
weight: 10
layout: bundle
title: Introduction
---

Welcome to the {{< product-c8y-iot >}} **DTM (Digital Twin Manager)** (DTM) application.

**DTM** application allows you to create an Asset hierarchy comprising of Assets and devices. As the name suggests it creates a digital representation of the physical hierarchy and aids in visualization of Asset hierarchy.  

Once the Asset hierarchy is created in DTM, the hierarchy can be consumed by other applications such as OEE or Machine portal. It would save a lot of time and efforts, as the hierarchy is created only once and can be used directly in other {{< product-c8y-iot >}} hosted applications.

DTM application is hosted on {{< product-c8y-iot >}} platform. Asset hierarchy is created using assets and devices as the basic building blocks.

Devices are created using Device Management application hosted on {{< product-c8y-iot >}} platform.
For details on the Device Management application, see (Device Management)[/guides/users-guide/device-management-bundle/#overview] in the User guide.

Assets are created in DTM using Asset types as the blueprint for assets. Asset type consists of one or more Custom properties and sub assets.

The root asset type is created using bottom-up approach and defines all the sub assets and custom properties in the form of a template. Using this root asset type, Asset hierarchy is created, and all the assets, sub-assets, custom properties and devices are defined. Later, this Asset hierarchy can be used as input for other application’s usage.

DTM also provides Localization feature, wherein user can customize and display the translation for certain text. Either for new text or for existing text, user can define the translations and the translations will be displayed on changing the respective languages.
