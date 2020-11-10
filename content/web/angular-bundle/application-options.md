---
title: Applications options
layout: redirect
weight: 15
---

Each UI application can be customized with a set of defined options.
The options objects are defined in JSON and read and merged at runtime with the following order:

  - Static options defined at build time
  - Dynamic fetched options on application boot
  - URL options that can be added by the user as URL query params (mostly for debugging purposes)

This process of collecting and merging the different options is executed by a thin bootstrap layer included in `@c8y/cli`.

Although all of the options can be defined on any of the 3 levels some might not make sense at runtime, as they just influence the build process, or require a complex object making it particularly tricky to  write as a URL query parameter.

### Static options

Defined in the `package.json` of the application inside the fragment `c8y.application`:

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

```sh
c8ycli build --app.contextPath=cockpit2 --app.dynamicOptionsUrl="/apps/public/public-options/options.json"
```

### Dynamic fetched options

Using the static options `dynamicOptionsUrl` the application will try to load a json from the specified URL at boot time. In the platform's built-in applications this option is set to `/apps/public/public-options/options.json` as that mechanism to provide instance level and enterprise tenant customization.
As this property is defined statically at build time, it is possible for the application developer to decide if and where from their applications should load the dynamic fetched options at runtime.

### URL options

These can just be appended to the URL of the application as query parameters.

```sh
https://<instance domain>/apps/cockpit?dynamicOptionsUrl=/apps/my-options/options.json&rightDrawer:false
```

### Options

Here is a list of the built-in options. As in the end this is just a plain old javascript object this list can be easily extended  with any property a developer might want to include in his applications or extensions.

```js
export class ApplicationOptions {
  name: string; // To be saved to the server
  contextPath: string; // To be saved to the server
  key: string; // To be saved to the server
  upgrade?: boolean; // true if the application is hybrid using Angular and angularJS simultaneously
  brandingEntry?: string; // the entry path to the branding
  tsConfigPath?: string; // path to tsCconfig if typescript is used, defaults to ./tsconfig.json
  entryModule?: string;
  indexTemplate?: string; // path to the index.html to be used, otherwise the default will be used
  dynamicOptionsUrl?: string; // URL to load the dynamic fetched options
  faviconUrl?: string; // URL for the favicon
  brandingUrl?: string; // URL for a CSS that will replace the default branding
  brandingCssVars?: { // Object with properties that will be converted to CSS custom properties
    [key: string]: string
  };
  languages?: { // Object with properties to add and change the languages available in the applications
    [langCode: string]: {
      name: string;
      nativeName: string;
      url: string;
    }
  };
  localePath?: string; // The folder where the translations po files are loaded from
  extraCssUrls?: string[]; // URLs for extra CSS files to be loaded at runtime
  docs?: {
    noDefault: boolean, // Hide default links to documentation
    excludeDefault: string[], // The list of regex strings to be matched with the default docs url
    links: Array<{ // Additional documentation links to be displayed
        icon: string;
        label: string;
        url: string;
    }>
  };
  icon?: { // Application icon to be displayed in app switcher and header bar
    class?: string;
    url?: string;
  };
  noAppSwitcher?: boolean; // Hides the application from the application switched (saved to the server)
  globalTitle?: string; // HTML page title
  hidePowered?: boolean; // Hide powered by at the bottom of the navigator
  supportUrl?: boolean | string; // URL for support link
  supportUserString?: string;
  rightDrawer?: boolean; // Show or hide the right drawer
  hideNavigator?: boolean; // Show or hide the navigator
  tabsHorizontal?: boolean;  // Show tabs horizontally or vertically
  loginExtraLink?: { // Extra link to add to login screen
    url: string;
    label: string;
  };
  storageLimitationFeatureEnabled?: boolean;
  companyName?: string; // Company name used to prompt the user about support staff
  guideHrefTemplate?: string; // The full URL for documentation, by default it's ${docsBaseUrl}${partialUrl}
  docsBaseUrl?: string; // The base URL for documentation
  contentSecurityPolicy?: string; // CSP string applied to the index.html by replacing default value
  imports?: string[]; // legacy plugin imports
  cookieBanner?: { // Cookie Banner configuration
    cookieBannerTitle?: string;
    cookieBannerText?: string;
    policyUrl?: string;
  };
}
```

> **Tip:** contentSecurityPolicy for current application can be checked in following places
> 
> - when you do `c8ycli new my-cockpit cockpit -a @c8y/apps@1004.11.0` you can find `contentSecurityPolicy` value in package.json under path: `c8y.application.contentSecurityPolicy` if it has been defined.
> - when you inspect the page, you can look for `<meta http-equiv="Content-Security-Policy" content="...">` within `<head>` tag. Active value enclosed within `content` attribute. 
> - if you build custom application based on standard one, make sure you append your CSP value to the default one.