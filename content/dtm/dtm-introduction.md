---
weight: 10
layout: bundle
title: Introduction
---

Welcome to the {{< product-c8y-iot >}} **Digital Twin Manager (DTM)** application.

The Digital Twin Manager (DTM) application allows you to create a digital representation of a physical hierarchy of assets and devices using them as basic building blocks. This helps you to visualize the hierarchy in a digital setting.

Once the Asset hierarchy is created in DTM, the hierarchy can be consumed by other applications such as OEE or Machine portal. It would save a lot of time and efforts, as the hierarchy is created only once and can be used directly in other {{< product-c8y-iot >}} hosted applications.

Devices for the DTM application are created using Device Management application hosted on {{< product-c8y-iot >}} platform.
For details on the Device Management application, see (Device Management)[/guides/users-guide/device-management-bundle/#overview] in the *User guide*.

Assets are created in the DTM application using asset types as the blueprint for assets. An asset type consists of one or more custom properties and subassets.

#### Root asset type

To create a root asset type follow a bottom-up approach by defining all subassets and custom properties in the provided template first. This root asset type can then be used to create an asset hierarchy, which then (?) defines all the assets, subassets, custom properties and devices in the DTM. As a result you can use the asset hierarchy in other {{< product-c8y-iot >}} applications, such as the {{< product-c8y-iot >}} OEE or the {{< product-c8y-iot >}} Machine Portal.

DTM also provides a Localization feature, where you can customize and display the translation for certain content. See [ADD HYPERLINK TO TRANSLATIONS HERE]().
