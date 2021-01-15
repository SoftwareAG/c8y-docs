---
weight: 50
title: Targets
layout: bundle
---

Target files are JSON files that can be used to define a set of applications to build, configure options and or remove plugins for each application.

Example:

```javascript
{
  "name": "acme", // Unique name to identify the target
  "options": { // runtime options to customize each option
    "globalTitle": "Acme IoT", // Browser title
    "hide_powered": true, // Toggle the 'Powered by' on the bottom of navigator
    "supportUrl": false, // Customize the support URL. A falsy value will hide the link.
    "rightDrawer": false, // Toggle the right drawer on the app
    "login_extra_link": { // Creates an extra link on login screen
      "url": "https://acme/eula",
      "label": "EULA"
    },
    "company_name": "Acme, Inc", // Company name to be used when needed on the UI
    "guideHrefTemplate": "${docsBaseUrl}", // The template used for help links ${docsBaseUrl}${partialUrl} is the default value
    "docsBaseUrl": "https://acme/help/" // The value for docsBaseUrl variable that can be used in documentation link templates
  },
  /**
  * The replaceImports is a map of plugins that will be replaced in all the applications.
  * Keys represent the existing plugins and values are the plugins that should replace each of them.
  * This technique is very commonly used for branding
  */
  "replaceImports": {
    "core/c8yBranding": "core/acme-branding"
  },

  /**
  * Describe the applications to be built or served locally.
  * For each of the applications there are 3 properties that can be used to change the plugins that are included
  *  - replaceImports: A map of plugins to be replaced
  *  - addImports: A list of plugins to be added
  *  - removeImport: A list of plugins to be removed from the  application
  */
  "applications": [
    {
      "contextPath": "administration"
      "replaceImports": {},
      "addImports": [],
      "removeImports": []
    },
    {
      "contextPath": "devicemanagement"
    },
    {
      "contextPath": "cockpit"
    }
  ]
}

```
