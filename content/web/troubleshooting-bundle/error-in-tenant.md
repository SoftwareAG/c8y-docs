---
title: My code runs locally but not when I run it through my tenant
layout: redirect
weight: 20
---

If you get error messages only when running your application through your tenant:

* Verify that all required files are contained in the "build" folder. If files are missing, check the corresponding "copy", "css" and "less" sections of your manifests.
* Verify that all the files are added to revision control. For example, for Mercurial, run "hg status" to check for missing files and add them.
* Push your latest version to your source code repositroy. For example, use "hg push" for Mercurial.