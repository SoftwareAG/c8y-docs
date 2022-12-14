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
  content: "The DTM application allows you to create and manage assets around your physical connected devices in {{< product-c8y-iot >}} via the digital representation of a physical hierarchy of assets and devices.


To create an asset, use **asset types** as the blueprint, which consist of one or more **custom properties** as well as one or more **subassets**.  


An asset hierarchy consist of a root asset type and all its subsequent child asset types. Each hierarchy level consists of custom properties for the asset, as well as its subassets and devices. 


To get started, open the **Digital twin library** in the **Configuration** menu in the navigator and create the asset types and custom properties. When you created your blueprints, navigate to **Assets** menu in the navigator and click **Add Asset** on the top right corner to define assets. "

---

Welcome to the {{< product-c8y-iot >}} Digital Twin Manager (DTM) application.

This application allows you to create and manage assets around your physical connected devices in {{< product-c8y-iot >}} using a digital representation of a physical hierarchy of assets and devices. Here, assets can be used to structure and describe devices in logical hierarchies as encountered in the real world environment to help with visualizing the hierarchy in a digital setting.

Once the asset hierarchy is created in the DTM application, the hierarchy can be applied to other applications such as OEE or Machine portal. It would save a lot of time and efforts, as the hierarchy is created only once and can be used directly in other {{< product-c8y-iot >}} hosted applications.

Devices for the DTM application are created using the {{< product-c8y-iot >}} Device Management application.
For more details on the Device Management application, see [Device Management > Connecting devices > Device registration](/users-guide/device-management/#connecting-devices) in the *User guide*.

Assets are created in the DTM application using asset types as the blueprint for assets. An asset type consists of one or more custom properties and subassets.

The DTM application also provides a localization feature to customize the translation for certain content. See [Localization](/dtm/localization) for more information on this feature.
