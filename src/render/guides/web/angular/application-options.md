---
title: Applications options
layout: redirect
order: 15
---

Each UI application can be customised with a set a defined options.
The options objects are defined in json and read and merged at runtime with the following order:

- Static options defined at build time
- Dynamic fetched options on application boot
- URL options that can be added by the user as url query params (mostly for debugging purposes)

This process of collecting and merging the different options is executed by a thin bootstrap layer included in `@c8y/cli`.

Although all of the options can be defined on any of the 3 levels some might not make sense runtime, as they just influence the build process, or require a complex object making it particularly tricky to  write as a url query param.

### Static options

Defined in the `package.json` of the app inside the fragment `c8y.application`:

```json
{
  "c8y": {
    "application": {
      "name": "cockpit",
      "contextPath": "cockpit",
      "key": "cockpit-application-key",
      "tabsHorizontal": true,
      "upgrade": true,
      "rightDrawer": true,
      "contentSecurityPolicy": "default-src 'self' 'unsafe-inline' http: https: ws: wss:; script-src 'self' *.mapquestapi.com 'unsafe-inline' 'unsafe-eval' data:; style-src * 'unsafe-inline' blob:; img-src * data:; font-src * data:; frame-src *;"
    }
  }
}
```

Can also be passed to `c8ycli`:

```
c8ycli build --app.contextPath=cockpit2 --app.dynamicOptionsUrl="/apps/public/public-options/options.json"
```

### Dynamic fetched options

Using the static options `dynamicOptionsUrl` the app will try to load a json from the specified URL at boot time. In the platform's built-in applications this option is set to `/apps/public/public-options/options.json` as that mechanism to provide instance level and enterprise tenant customization customization.
As this property is defined at the statically at build time, it is possible for application developer to decide if and where their apps should load the options json at runtime.

### URL options

These can just be appended to the url of the application as query parameters.

```
https://<instance domain>/apps/cockpit?dynamicOptionsUrl=/apps/my-options/options.json&rightDrawer:false
```

### Options

Here is a list of the built-in options. As in the end this is just a plain old javascript object this list can be easily extended  with any property a developer might want to include in his apps or extensions.

```ts
export class ApplicationOptions {
  name: string; // To be saved to the the server
  contextPath: string; // To be saved to the the server
  key: string; // To be saved to the the server
  upgrade?: boolean; // true if the application is hybrid using Angular and angularJS simultaneously
  brandingEntry?: string; // the entry path to the branding
  tsConfigPath?: string; // path to tsCconfig if typescript is used, defaults to ./tsconfig.json
  entryModule?: string;
  indexTemplate?: string; // path to the index.html to be used, otherwise the default will be used
  dynamicOptionsUrl?: string; // url to load the dynamic fetched options
  faviconUrl?: string; // URL for the favicon
  brandingUrl?: string; // URL for a css that will replace the default branding
  brandingCssVars?: { // Object with properties that will be converted to css custom properties
    [key: string]: string
  };
  languages?: { // Object with properties to add and change the languages available in the apps
    [langCode: string]: {
      name: string;
      nativeName: string;
      url: string;
    }
  };
  localePath?: string; // The folder where the translations po files are loaded from
  extraCssUrls?: string[]; // URLs for extra CSS files to be loaded at runtime
  noAppSwitcher?: boolean; // Hides the app from the app switched (saved to the server)
  globalTitle?: string; // HTML page title
  hidePowered?: boolean; // Hide powered by at the bottom of the navigator
  supportUrl?: boolean | string; // URL for support link
  supportUserString?: string;
  rightDrawer?: boolean; // Show or hide the right drawer
  hideNavigator?: boolean; // Show or hide the navigator
  tabsHorizontal?: boolean;  // Show tabs horizontally or vertically
  loginExtraLink?: { // Extra link to add to login screen
    url: string,
    label: string
  };
  storageLimitationFeatureEnabled?: boolean;
  companyName?: string; // Company name used to prompt the user about support staff
  guideHrefTemplate?: string; // The full url for documentation , by default it's ${docsBaseUrl}${partialUrl}
  docsBaseUrl?: string; // The base url for documentation
  contentSecurityPolicy?: string; // CSP string added to the index.html
  imports?: string[]; // legacy plugin imports
}
```
