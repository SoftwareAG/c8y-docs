---
title: Branding
layout: redirect
order: 30
---

For styling the application global CSS created with [LESS](http://lesscss.org/) is used. These styles are based on Bootstrap 3, and the original LESS source is distributed via the npm package [@c8y/style](https://www.npmjs.com/package/@c8y/style).
By extending these styles it is possible to change any detail of the app but the vast majority of developer want to change: colors, logos and fonts and these can be very easily achieved by replacing a few variables.

To override the variables it is possible to use:
- LESS variables at build time
- Custom CSS properties (at build time or configurable at runtime)

## CSS custom properties

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
--navigator-app-name-size: 16px; /* font size of the app name set to 0 to hide app's name */
--navigator-app-icon-size: 46px; /* size of the app icon. set to 0 to hide the app icon.*/
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

Note that these can be customized at runtime using [application options](/guides/web/angular#application-options) using the property `brandingCssVars`.
The option is only available after version 9.22.0.

## Using LESS

### Prerequisites

If you do not use the [@c8y/cli](/guides/web/angular#cli) make sure that you install the base styles from npm with:

```
npm install @c8y/style
```

1. Create a LESS file called for instance ```branding.less```.
2. Save it inside a new folder, which can have any name you like.
3. Inside this folder, create a sub folder for images.

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

The first line of code within the ```branding.less``` has to be:

 ```less
 @import '~@c8y/style/extend.less';
 ```

### Example customizations

At this point we are able to change the desired variables according to our needs.

Let us change for example the most important color of your branding, the main color, called **brand-color**.

This is done by setting the respective LESS variable to a new color.

 ```less
 @brand-color: red;
 ```

User interface elements like buttons, active navigation nodes or even active tabs as well as also hover-states of buttons are red now.

What about changing the main logo that is located at the top of the login dialog? Look at this:

 ```less
 @{logo-login} { background-image: url('./img/logo-main.svg')}
 @brand-logo-height: 48%;
 ```

You can check the branding changes with the help of the [@c8y/cli](/guides/web/angular#cli).

 ```
 c8ycli server --app.brandingEntry="<path-to-your-branding.less>"
 ```

You can also take a look at our tutorial application which has an example branding applied:

 ```
 c8ycli new <appName> tutorial
 ```

### More branding details

There are three main areas of a branding that you can easily control.

#### Colors

The colors that may be edited are separated in multiple categories, like:

* brand colors
* status colors
* gray shades
* component colors

##### Brand colors

```less
@brand-color:                 #53cd61;
@brand-primary:               @brand-color;
@brand-complementary:         #a8b3b5;
@brand-primary-light:         lighten(@brand-primary, 20%);
```

##### Status colors

```less
@brand-success:               #5cb85c;
@brand-info:                  @brand-color;
@brand-warning:               #f0ad4e;
@brand-danger:                #d9534f;
@danger:                      #D90000;
@warning:                     #FDC000;
@dark-warning:                #FF8000;
@success:                     #5cb85c;
```

##### Gray shades

```less
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

##### Component colors

Two components are always visible to the user, the header and the navigator. Therefore you should determine the look & feel of these components with care.

```less
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

#### Logos

There is no branding without logos.

You can change the logo at the top of the login dialog, the tenant brand logo and of course the favicon.

To change the favicon, enter:
```less
// to be loaded by webpack
.favicon-webpack-loader { background: url('./img/favicon.ico') }
```

To change the main logo, enter:
```less
@{logo-login} { background-image: url('./img/main-logo.svg') }
@brand-logo-height: 48%;
```

To change the tenant brand logo inside the navigator, enter:
```less
@{logo-navigator} { background-image: url('./img/tenant-brand.svg') }
@navigator-platform-logo-height: 100px;
```

#### Typography

The look and feel of an application is also driven by its typography. Of course you can change the font as well.

```less
@font-family-sans-serif:      "Lato",Arial, Verdana, sans-serif;
@font-family-base:            @font-family-sans-serif; @headings-font-family:        "Roboto",Arial, Verdana, sans-serif;
```

### Example Branding

Above we described the possible options for creating your custom branding in detail. If you do not want to start from scratch in every application use the following example branding as snippet. It defines the most important variables.

```less
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
