---
title: Branding and language customization
layout: redirect
weight: 20
---

### Branding
For styling the application global CSS created with [LESS](http://lesscss.org/) is used. These styles are based on Bootstrap 3, and the original LESS source is distributed via the npm package [@c8y/style](https://www.npmjs.com/package/@c8y/style).
By extending these styles it is possible to change any detail of the application but the vast majority of developer want to change: colors, logos and fonts and these can be very easily achieved by replacing a few variables.

To override the variables it is possible to use:
- LESS variables at build time
- Custom CSS properties (at build time or configurable at runtime)

### CSS custom properties

Exposed via CSS custom properties there is only a subset of the LESS variables available.
Here is a list of the available variables.

```css
:root {
--brand-primary: gold ;
--brand-complementary: darkgreen;
--brand-dark:  red;
--brand-light: purple;
--gray-text: #333;
--link-color: var(--brand-primary);
--link-hover-color: var(--brand-complementary);
--body-background-color:#f2f3f4;
--brand-logo-img: url('/apps/ui-assets-management/logo-nav.svg');
--brand-logo-img-height: 20%;
--navigator-platform-logo: url('/apps/ui-assets-management/logo-nav.svg');
--navigator-platform-logo-height: 36px; /* height of the logo set to 0 to hide the element */

--navigator-font-family: inherit;
--navigator-app-name-size: 16px; /* font size of the application name set to 0 to hide app's name */
--navigator-app-icon-size: 46px; /* size of the application icon. set to 0 to hide the application icon.*/
--navigator-bg-color: var(--brand-primary);
--navigator-header-bg: var(--navigator-bg-color);
--navigator-text-color: #ffffff;
--navigator-separator-color: rgba(0,0,0,.05);
--navigator-active-color: var(--navigator-text-color);
--navigator-active-bg: var(--brand-complementary);

--header-color: #ffffff;
--header-text-color: var(--brand-dark);
--header-hover-color:var(--brand-primary);
--header-border-color: rgba(57,72,82,.05);

--font-family-base: "Roboto", Helvetica, Arial, sans-serif;
--headings-font-family: var(--font-family-base);
}
```

Note that these can be customized at runtime using [application options](/web/application-configuration/#application-options) using the property `brandingCssVars`.
The option is only available after version 9.22.0.

### Using LESS

#### Prerequisites

If you do not use the [@c8y/cli](/web/development-tools/#c8y-cli) make sure that you install the base styles from npm with:

```
npm install @c8y/style
```

1. Create a LESS file called for instance ```branding.less```.
2. Save it inside a new folder, which can have any name you like.
3. Inside this folder, create a subfolder for images.

```
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

The first line of code within the ```branding.less``` must be:

 ```
 @import '~@c8y/style/extend.less';
 ```

#### Example customizations

At this point we are able to change the desired variables according to our needs.

Let us change for example the most important color of your branding, the main color, called **brand-color**.

This is done by setting the respective LESS variable to a new color.

 ```
 @brand-color: red;
 ```

User interface elements like buttons, active navigation nodes or even active tabs as well as also hover-states of buttons are red now.

What about changing the main logo that is located at the top of the login dialog? Look at this:

 ```
 @{logo-login} { background-image: url('./img/logo-main.svg')}
 @brand-logo-height: 48%;
 ```

You can check the branding changes with the help of the [@c8y/cli](/web/development-tools/#c8y-cli).

 ```
 c8ycli server --app.brandingEntry="<path-to-your-branding.less>"
 ```

You can also take a look at our tutorial application which has an example branding applied:

 ```
 c8ycli new <appName> tutorial
 ```

#### More branding details

There are three main areas of a branding that you can easily control.

##### Colors

The colors that may be edited are separated in multiple categories, like:

* brand colors
* status colors
* gray shades
* component colors

**Brand colors**

```
@brand-color:                 #53cd61;
@brand-primary:               @brand-color;
@brand-complementary:         #a8b3b5;
@brand-primary-light:         lighten(@brand-primary, 20%);
```

**Status colors**

```
@brand-success:               #5cb85c;
@brand-info:                  @brand-color;
@brand-warning:               #f0ad4e;
@brand-danger:                #d9534f;
@danger:                      #D90000;
@warning:                     #FDC000;
@dark-warning:                #FF8000;
@success:                     #5cb85c;
```

**Gray shades**

```
@gray-text:                   #444;
@gray-darker:                 #2c3637;
@gray-dark:                   #3b4748;
@gray-medium-dark:            #49595B;
@gray-medium:                 #6D7A7C;
@gray:                        #8A9596;
@gray-light:                  #cacece;
@gray-lighter:                #f8f8f8;
@gray-white:                  #fcfcfc;
@text-muted:                  @gray;
```

**Component colors**

Two components are always visible to the user, the header and the navigator. Therefore you should determine the look & feel of these components with care.

```
/* HEADER */
@headerColor:                 white;
@header-text-color:           @gray-medium-dark;
@header-text-color-hover:     @brand-primary;
@header-active-color:         darken(@gray-medium-dark, 15%);

/* NAVIGATOR */
@navColor:                    @gray-darker;
@navColorHeader:              transparent;
@navigator-title-color:       white;
@navigator-text-color:        @gray-lighter;
@navigator-separator-color:   fade(white, 5%);
@navigator-font-family:       @headings-font-family;
@navigator-font-size:         13px;
@navigator-active-color:      white;
@navigator-active-bg:         @brand-primary;
```

As you can see, some variables re-use others. Be careful that these variables are all defined to avoid build errors.

##### Logos

There is no branding without logos.

You can change the logo at the top of the login dialog, the tenant brand logo and of course the favicon.

To change the favicon, enter:

```
// to be loaded by webpack
.favicon-webpack-loader { background: url('./img/favicon.ico') }
```

To change the main logo, enter:

```
@{logo-login} { background-image: url('./img/main-logo.svg') }
@brand-logo-height: 48%;
```

To change the tenant brand logo inside the navigator, enter:

```
@{logo-navigator} { background-image: url('./img/tenant-brand.svg') }
@navigator-platform-logo-height: 100px;
```

##### Typography

The look and feel of an application is also driven by its typography. Of course you can change the font as well.

```
@font-family-sans-serif:      "Lato",Arial, Verdana, sans-serif;
@font-family-base:            @font-family-sans-serif; @headings-font-family:        "Roboto",Arial, Verdana, sans-serif;
```

#### Example Branding

Above we described the possible options for creating your custom branding in detail. If you do not want to start from scratch in every application use the following example branding as snippet. It defines the most important variables.

```
@import '~@c8y/style/extend.less';

// Replace and uncomment each variable as you need them
/* LOGOS */
.favicon-webpack-loader { background: url('./img/favicon.ico') } // to be loaded by webpack
@{logo-login} { background-image: url('./img/logo-main.svg') }
@brand-logo-height: 48%; // percentage - height / width * 100
@{logo-navigator} { background-image: url('./img/logo.svg') }
@navigator-platform-logo-height: 100px;

/* COLORS */
@brand-color:                 #53cd61; // main color
@brand-primary:               @brand-color;
@brand-complementary:         #a8b3b5;
@brand-primary-light:         lighten(@brand-primary, 20%);
// status colors
@brand-success:               #5cb85c;
@brand-info:                  @brand-color;
@brand-warning:               #f0ad4e;
@brand-danger:                #d9534f;
@danger:                      #D90000;
@warning:                     #FDC000;
@dark-warning:                #FF8000;
@success:                     #5cb85c;
// grays
@gray-text:                   #444;
@gray-darker:                 #2c3637;
@gray-dark:                   #3b4748;
@gray-medium-dark:            #49595B;
@gray-medium:                 #6D7A7C;
@gray:                        #8A9596;
@gray-light:                  #cacece;
@gray-lighter:                #f8f8f8;
@gray-white:                  #fcfcfc;
@text-muted:                  @gray;

@body-background-color:       #f8f8f8; // page background color - always use a light background

/* HEADER */
@headerColor:                 white;
@header-text-color:           @gray-medium-dark;
@header-text-color-hover:     @brand-primary;
@header-active-color:         darken(@gray-medium-dark, 15%);

/* NAVIGATOR */
@navColor:                    @gray-darker;
@navColorHeader:              transparent;
@navigator-title-color:       white;
@navigator-text-color:        @gray-lighter;
@navigator-separator-color:   fade(white, 5%);
@navigator-font-family:       @headings-font-family;
@navigator-font-size:         13px;
@navigator-active-color:      white;
@navigator-active-bg:         @brand-primary;
// when set adds a vertical gradient in the navigator background
// @grad-top:                    "";
// @grad-bottom:                 "";

/* TYPOGRAPHY */
// @font-family-sans-serif:      "Lato",Arial, Verdana, sans-serif;
// @font-family-base:            @font-family-sans-serif;
// @headings-font-family:        "Roboto",Arial, Verdana, sans-serif;

/* BUTTONS */
// @btn-border-radius-base:      2px;
// @btn-border-radius-large:     @btn-border-radius-base;
// @btn-border-radius-small:     @btn-border-radius-base;
// @btn-shadow:                  none;

/* COMPONENTS */
// @spinner-color:               lighten(@brand-primary, 30%);
// @link-color:                  #337ab7;
// @link-hover-color:            darken(@link-color, 15%);
// @input-focus-color:           #66afe9;

// @body-background-pattern:     "";
// @darker-header:               @gray-dark;
// @appswitcher-background:      none;
// @table-bg-hover:              fade(black, 1.5%);
// @header-app-name:             @header-text-color;
// @image-path:                  'img/';
```

### Branding and language customization

Using [application options](/web/application-configuration/#application-options), each tenant can customize the look and feel of built-in applications and add or replace the languages available in the applications. As described in [application options](/web/application-configuration/#application-options), the underlying mechanism is static hosted web application.

In this tutorial we are publishing two web applications:

* `public-options`, where the JSON file containing the configuration will be stored
* `ui-assets`, where any required assets will be hosted: images, favicon and translation files

For deploying we use the nodejs `@c8y/cli` that can be installed with the command:

```
npm install -g @c8y/cli
```

#### Downloading or cloning the initial repository

For your convenience you can download or clone the repository available at [https://github.com/Cumulocity/ui-customization](https://github.com/Cumulocity/ui-customization), in which you can find an example for branding and for adding a new language.

```
git clone https://github.com/Cumulocity/ui-customization
```

Inside this folder you can find two other folders:

```
public-options
ui-assets
```

#### Branding options

Edit the file *public-options/options.json* and change the subproperties of `brandingCssVars`. These properties will be converted into [CSS custom properties](#css-custom-properties) at runtime.

Note that the properties `brand-logo-img` and `navigator-platform-logo` are both URLs. Therefore the corresponding files must be placed inside the folder *ui-assets*.

To change the favicon, edit the property `faviconUrl` and/or add the corresponding file inside the *ui-assets* folder.

To change the browser window title, change the property `globalTitle`.

If these configurations are not enough you can still add a list of URLs to the property `extraCssUrls` and load extra CSS at runtime:

```json
{
  "extraCssUrls": [
    "/apps/ui-assets/extra.css"
  ]
}
```

#### Languages

The platform UI strings used for internationalization are stored in [gettext](https://en.wikipedia.org/wiki/Gettext). If you want to add a new language to the platform you need a software to edit these files, for example [Poedit](https://poedit.net/).

Each translated catalog is loaded at runtime in a JSON format. To convert .po (gettext) files into .json files we rely on `@c8y/cli` installed during the first step.

##### How to add your own translations at build time

1. Download the string catalog from [@c8y/ngx-components@1004.0.6/locales/locales.pot](https://unpkg.com/@c8y/ngx-components@latest/locales/locales.pot) (starting from version 1004.0.6,`latest` can be replaced by your current used version).
2. Load the downloaded locales.pot template file in your preferred .pot file editor and create a new translation from it. Select the target language of the translation, for example Afrikaans, and translate each string. Repeat the process for as many languages as you like.
The outcome of this step will be a .po catalog file for each language. Make sure to store these files in a safe place, as they will be useful when updating the strings in subsequent versions.
3. Transform the newly created .po file into a .json file using the `c8ycli`:

 ```
 c8ycli locale-compile path/to/language.po
 ```

4. Copy the generated .json file into the *ui-assets* folder.
5. Update the languages fragment in *public-options/options.json*.

```
languages?: {
  [langCode: string]: {
    name: string;
    nativeName: string;
    url: string;
  }
}
```

In the example provided in the repository to be downloaded you can find an example of a Russian translation which looks like this:

```json
"languages": {
  "ru": {
    "name": "Russian",
    "nativeName": "русский язык",
    "url": "/apps/public/ui-assets/ru.json"
  }
}
```

The imported language can be changed in the UI after login. To do so, click the User icon at the top right, select User settings from the menu and in the upcoming window select the language of your choice.

##### How to add your own translations at runtime
You can translate certain strings at runtime, which means they don't need to be included in the build and can simply be added to the [application options](/web/application-configuration/#application-options). However, this concept doesn't allow to add new languages. You can only add new strings to existing languages or align certain translations on existing ones. To translate a certain key you need to add the following structure to the application options:

```typescript
  i18nExtra?: {
    [langCode: string]: {
      [key: string]: string;
    };
  };
```

For example, the following will translate a custom cookie banner:

```json
   "i18nExtra": {
      "de": {
        "About cookies on {{< product-c8y-iot >}}": "Informationen zu Cookies in {{< product-c8y-iot >}}",
        "Click Agree and Proceed to accept cookies and go directly to the platform or click on Privacy Policy to see detailed descriptions of the used cookies.": "Klicken Sie auf Zustimmen und fortfahren, um Cookies zu akzeptieren und direkt zur Plattform zu gelangen, oder klicken Sie auf Datenschutzrichtlinie, um detaillierte Beschreibungen der verwendeten Cookies anzuzeigen."
      }
   }
```

#### Deploying

Inside the folder `ui-customization` that contains both `public-options`and `ui-assets` run the command:

```
c8ycli deploy public-options ui-assets
```

Fill in your tenant/instance information and the applications will be deployed and will be visible to that specific tenant and its subtenants.

{{< c8y-admon-info >}}
For performance reasons the options are cached. Therefore the application must be refreshed twice to make the changes visible.
{{< /c8y-admon-info >}}
