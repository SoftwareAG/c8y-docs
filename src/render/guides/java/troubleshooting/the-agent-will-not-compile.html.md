---
order: 50
layout: redirect
title: The agent will not compile, I get "Access Restriction" messages
---

This error may be caused because of a missing package import. Go to the "Dependencies" tab of the project Manifest file and check the package of the type that contains the method giving the access restriction is present in the Import-Package section.

You can find the package by opening the declaration of the method (right-click-\>Open Declaration).