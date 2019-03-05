---
title: Branding
layout: redirect
weight: 30
---

With the branding feature you can determine the look & feel of new applications or even change existing applications. This basically happens with the help of less variables which you can overwrite just as you like.

With the branding feature you can easily change 

* colors
* logos
* fonts

### Prerequisites

If you do not use the [@c8y/cli](/guides/web/angular#cli) make sure that you install the base styles from npm with: 

```
npm install @c8y/style
```

1. Create a ```-file``` called for instance ```branding.less```.
1. Save it inside a new folder, which can have any name you like. 
2. Inside this folder, create a subfolder for images.

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

 ```
 @import '~@c8y/style/extend.less';
 ```

### Example customizations

At this point we are able to change the desired variables according to our needs.

Let us change for example the most important color of your branding, the main color, called **brand-color**.
 
This is done by setting the respective less variable to a new color.

 ```
 @brand-color: red;
 ```

User interface elements like buttons, active navigation nodes or even active tabs as well as also hover-states of buttons are red now.

What about changing the main logo that is located at the top of the login dialog? Look at this:

 ```
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

```
@brand-color:                 #53cd61;
@brand-primary:               @brand-color;
@brand-complementary:         #a8b3b5;
@brand-primary-light:         lighten(@brand-primary, 20%);
```

##### Status colors

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

##### Gray shades

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

##### Component colors

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

#### Logos

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

#### Typography

The look and feel of an application is also driven by its typography. Of course you can change the font as well.

```
@font-family-sans-serif:      "Lato",Arial, Verdana, sans-serif;
@font-family-base:            @font-family-sans-serif; @headings-font-family:        "Roboto",Arial, Verdana, sans-serif;
``` 

### Example Branding

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