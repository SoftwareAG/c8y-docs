---
weight: 10
layout: bundle
title: Introduction
outputs:
- html
- json
helpcontent:
- label: dtm-introduction
  title: Digital Twin Manager
  content: "This application allows you to create and manage assets around your physical connected devices in Cumulocity IoT using a digital representation of a physical hierarchy of assets and devices. 


Assets are created using **asset types** as the blueprint and consists of one or more **custom properties** and **subassets**.  


An **asset hierarchy** consists of the root asset types and all its subsequent child asset types. Each hierarchy level consists of custom properties for the asset, as well as its subassets and devices. 


Get started by creating **asset types** and **custom properties** and once the template is ready, click  **Add Asset** on the top right corner of this page to define assets. "

---

Welcome to the {{< product-c8y-iot >}} Digital Twin Manager (DTM) application.

This application allows you to create and manage assets around your physical connected devices in {{< product-c8y-iot >}} using a digital representation of a physical hierarchy of assets and devices. Here, assets can be used to structure and describe devices in logical hierarchies as encountered in the real world environment to help with visualizing the hierarchy in a digital setting.

Once the asset hierarchy is created in the DTM application, the hierarchy can be applied to other applications such as OEE or Machine portal. It would save a lot of time and efforts, as the hierarchy is created only once and can be used directly in other {{< product-c8y-iot >}} hosted applications.

Devices for the DTM application are created using the {{< product-c8y-iot >}} Device Management application.
For more details on the Device Management application, see [Device Management > Connecting devices > Device registration](/users-guide/device-management/#connecting-devices) in the *User guide*.

Assets are created in the DTM application using asset types as the blueprint for assets. An asset type consists of one or more custom properties and subassets.

The DTM application also provides a localization feature to customize the translation for certain content. See [Localization](/dtm/localization) for more information on this feature.
