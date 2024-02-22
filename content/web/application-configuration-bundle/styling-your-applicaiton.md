---
title: Branding your application
layout: redirect
weight: 20
---

A branding must always be applied to all of your applications. Therefore, it is recommended to use
dynamic public options for branding your application. You must set the right
[design tokens](https://styleguide.cumulocity.com/apps/codex/#/ui-guidelines/foundations/design-tokens/overview) in the `brandingCssVars`
application option. Those are CSS variables that get applied to all default style sheets of
{{< product-c8y-iot >}} and will show your custom branding for any Web SDK application. Your `options.json` then
look like this:

```json
{
  "brandingCssVars": {
    "c8y-brand-primary": "#B10F2E",
    "c8y-brand-complementary": "#DE7C5A",
    "c8y-brand-dark": "#280000",
    "c8y-brand-light": "#DE7C5A",
    "c8y-palette-status-realtime" : "#f0f"
  }
}
```

You can add other options, for example, the `hideNavigator` or add your own CSS file:

```json
{
  "brandingCssVars": {
    "c8y-brand-primary": "#B10F2E",
    "c8y-brand-complementary": "#DE7C5A",
    "c8y-brand-dark": "#280000",
    "c8y-brand-light": "#DE7C5A",
    "c8y-palette-status-realtime" : "#f0f"
  },
  "hideNavigator": true,
  "extraCssUrls": "./custom.css",
}
```

In the CSS file you can add your own styles:

```css
h1 {
  color: #00f;
}
```  

Follow the steps below:

1. Zip the files to ensure that they are in the root of the zip without any wrapping folder.
2. Name the zip file `public-options.zip`.
3. Upload it as a web application in Administration > Ecosystem > Applications.
4. Subscribe your applications to one of your tenants under Tenants > Subtenants.

Afterwards, you can update the existing application with new variables in the detail
view of the application.

{{< c8y-admon-info >}}
If you are an {{< enterprise-tenant >}} customer, the easiest way to manipulate this options is to use the
branding manager in administration. It provides an form to set most of the settings without any
manual generating of a JSON file and uploading applications.
{{</ c8y-admon-info >}}

## Styling by extending @c8y/style

A global CSS file created with [LESS](http://lesscss.org/) is used to style the application. The
original LESS source is distributed via the npm package
[@c8y/style](https://www.npmjs.com/package/@c8y/style). By extending these styles you can
change any detail of the application, the most requested changes are: colors,
logos and fonts. These can be very easily achieved by replacing a number of variables.

To override the variables it is possible to use one of the following:

- LESS variables at build time
- Custom CSS properties (at build time or configurable at runtime)

If you do not use the [@c8y/cli](https://www.npmjs.com/package/@c8y/cli) make sure that you install
the base styles from npm with:

```bash
npm install @c8y/style
```

1. Create a LESS file called for instance `branding.less`.
2. Save it inside a new folder, which can have any name you like.
3. Inside this folder, create a subfolder for images.

```bash
my-application
│   app.modules.ts
│   index.ts
│   packages.json
|   ...
└───branding
│   │   branding.less
│   └───img
│       │   favicon.ico
│       │   main-logo.svg
│       │   tenant-brand.svg
│
```

The first line of code within the `branding.less` has to be:

```css
@import '~@c8y/style/extend.less';
```

## Example customizations

At this point we are able to change the desired variables according to our needs.

For example, change the most important color of your branding, the main color, called
**brand-primary**.

To change this, set the respective LESS variable to a new color.

```css
@brand-primary: red;
```

User interface elements like buttons, active navigation nodes or even active tabs as well as
hover-states of buttons are now red.

### To change the main logo

The following example shows hot to change the main logo that is located at the top of the login dialog.

```css
@{logo-login} { background-image: url('./img/logo-main.svg')}
@brand-logo-height: 48%;
```

As the last step, add your custom LESS branding to the `cumulocity.config.ts` file in the `buildTime` setting:

```ts
[...]

export default {
  runTime: {
    [...]
  },
  buildTime: {
    [...]
    brandingEntry: './your_path_to_custom_style/style.less',
  }
}
[...]
```

If you start the development server now, you can see you custom styling applied to your application.
