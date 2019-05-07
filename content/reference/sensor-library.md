---
weight: 110
title: Sensor library
layout: bundle
aliases:
  - /reference-guide/sensor-library
---
The sensor library defines a canonical set of predefined sensor and control capabilities. A sensor capability describes that part of a device that can measure some quantity, and a control capability describes that part of a device that can be modified, changed or in some way remotely controlled.

The library is logically divided into subpackages related to the domain to which that capability best fits, although applications a free to select capabilities from any domain. The name of the capability follows the *Fragment* naming convention. There are Java representations of each of these capabilities that can be found in the Java packages corresponding to the Fragment names.